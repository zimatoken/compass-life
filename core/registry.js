// core/registry.js
// ============================================================
// РЕЕСТР КВИЗОВ — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Что нового:
// • Поддержка identity_anchor в метаданных
// • Улучшенный fallback (работает с любым языком)
// • Проверка версий квизов
// • Поиск по тегам
// • Кэширование запросов
// • Поддержка v3.0 полей (follow_up, resources, daily_action)
// ============================================================

window.SOS_QUIZ_REGISTRY = window.SOS_QUIZ_REGISTRY || {};

// ============================================================
// 1. КЭШ ДЛЯ ЗАПРОСОВ
// ============================================================

const RegistryCache = {
  _cache: {},
  
  get(key) {
    return this._cache[key] || null;
  },
  
  set(key, value) {
    this._cache[key] = value;
  },
  
  clear() {
    this._cache = {};
  },
  
  clearModule(module) {
    const prefix = module + '::';
    for (const key in this._cache) {
      if (key.startsWith(prefix)) {
        delete this._cache[key];
      }
    }
  }
};

// ============================================================
// 2. ОСНОВНЫЕ ФУНКЦИИ РЕЕСТРА
// ============================================================

/**
 * Регистрирует квиз в реестре
 * Поддерживает версионирование (если версия новее — перезаписывает)
 */
function SOS_REGISTER_QUIZ(data) {
  if (!data || !data.meta || !data.meta.module || !data.meta.category || !data.meta.lang) {
    console.error('[Registry] ❌ Ошибка: неполные данные квиза', data);
    return;
  }

  const key = data.meta.module + '::' + data.meta.category + '::' + data.meta.lang;
  
  // Проверка версии
  const existing = window.SOS_QUIZ_REGISTRY[key];
  if (existing) {
    const oldVer = existing.meta.version || '0.0.0';
    const newVer = data.meta.version || '0.0.0';
    
    // Сравнение версий (простое строковое сравнение)
    if (newVer <= oldVer) {
      console.warn('[Registry] ⚠️ Квиз уже зарегистрирован с версией', oldVer, 'новая версия', newVer);
      console.warn('[Registry] ⚠️ Пропускаем (новая версия не выше)');
      return;
    }
    
    console.log('[Registry] 🔄 Обновление квиза:', key, oldVer, '→', newVer);
  }
  
  window.SOS_QUIZ_REGISTRY[key] = data;
  
  // Очищаем кэш для этого модуля
  RegistryCache.clearModule(data.meta.module);
  
  console.log('[Registry] ✅ Зарегистрирован:', key, `(v${data.meta.version || '1.0'})`);
}

/**
 * Получает квиз из реестра
 * Поддерживает fallback на другие языки (ru, en)
 */
function SOS_GET_QUIZ(module, category, lang) {
  if (!module || !category) {
    console.error('[Registry] ❌ Ошибка: module или category не указаны');
    return null;
  }

  const cacheKey = module + '::' + category + '::' + (lang || 'any');
  
  // Проверяем кэш
  const cached = RegistryCache.get(cacheKey);
  if (cached) {
    return cached;
  }

  const langs = lang ? [lang, 'ru', 'en'] : ['ru', 'en'];
  const uniqueLangs = [...new Set(langs)];
  
  for (const l of uniqueLangs) {
    const key = module + '::' + category + '::' + l;
    const quiz = window.SOS_QUIZ_REGISTRY[key];
    if (quiz) {
      if (l !== lang && lang) {
        console.log(`[Registry] 🔄 Fallback: ${module}/${category} (${lang} → ${l})`);
      }
      RegistryCache.set(cacheKey, quiz);
      return quiz;
    }
  }

  console.warn(`[Registry] ❌ Квиз не найден: ${module}/${category} (langs: ${uniqueLangs.join(', ')})`);
  RegistryCache.set(cacheKey, null);
  return null;
}

// ============================================================
// 3. ПОЛУЧЕНИЕ КАТЕГОРИЙ
// ============================================================

/**
 * Возвращает все категории для указанного модуля и языка
 */
function SOS_GET_MODULE_CATEGORIES(module, lang) {
  const result = [];
  const prefix = module + '::';
  
  for (const [key, quiz] of Object.entries(window.SOS_QUIZ_REGISTRY)) {
    if (key.startsWith(prefix) && key.endsWith('::' + lang)) {
      result.push({
        category: quiz.meta.category,
        title: quiz.meta.title,
        icon: quiz.meta.icon,
        description: quiz.meta.description,
        color: quiz.meta.color,
        version: quiz.meta.version,
        identity_anchor: quiz.meta.identity_anchor || null
      });
    }
  }
  
  // Сортировка по названию
  result.sort((a, b) => a.title.localeCompare(b.title));
  
  return result;
}

/**
 * Возвращает все зарегистрированные квизы для модуля (все языки)
 */
function SOS_GET_MODULE_ALL(module) {
  const result = {};
  const prefix = module + '::';
  
  for (const [key, quiz] of Object.entries(window.SOS_QUIZ_REGISTRY)) {
    if (key.startsWith(prefix)) {
      const parts = key.split('::');
      const lang = parts[2] || 'unknown';
      if (!result[lang]) result[lang] = [];
      result[lang].push({
        category: quiz.meta.category,
        title: quiz.meta.title,
        icon: quiz.meta.icon,
        version: quiz.meta.version
      });
    }
  }
  
  // Сортировка по категориям в каждом языке
  for (const lang in result) {
    result[lang].sort((a, b) => a.category.localeCompare(b.category));
  }
  
  return result;
}

// ============================================================
// 4. ПОИСКОВЫЕ ФУНКЦИИ
// ============================================================

/**
 * Поиск квизов по тегам
 */
function SOS_FIND_QUIZ_BY_TAGS(tags, lang) {
  const results = [];
  const langToUse = lang || 'ru';
  
  for (const [key, quiz] of Object.entries(window.SOS_QUIZ_REGISTRY)) {
    if (!quiz.meta || quiz.meta.lang !== langToUse) continue;
    
    // Проверяем теги в вопросах
    let hasTag = false;
    if (quiz.questions) {
      for (const q of quiz.questions) {
        if (q.options) {
          for (const opt of q.options) {
            if (opt.tags && opt.tags.some(t => tags.includes(t))) {
              hasTag = true;
              break;
            }
          }
        }
        if (hasTag) break;
      }
    }
    
    if (hasTag) {
      results.push({
        module: quiz.meta.module,
        category: quiz.meta.category,
        title: quiz.meta.title,
        icon: quiz.meta.icon
      });
    }
  }
  
  return results;
}

/**
 * Поиск квиза по названию (частичное совпадение)
 */
function SOS_SEARCH_QUIZ(query, lang) {
  const results = [];
  const langToUse = lang || 'ru';
  const q = query.toLowerCase();
  
  for (const [key, quiz] of Object.entries(window.SOS_QUIZ_REGISTRY)) {
    if (quiz.meta.lang !== langToUse) continue;
    
    const title = quiz.meta.title.toLowerCase();
    const description = quiz.meta.description ? quiz.meta.description.toLowerCase() : '';
    
    if (title.includes(q) || description.includes(q)) {
      results.push({
        module: quiz.meta.module,
        category: quiz.meta.category,
        title: quiz.meta.title,
        icon: quiz.meta.icon,
        description: quiz.meta.description
      });
    }
  }
  
  return results;
}

// ============================================================
// 5. СТАТИСТИКА РЕЕСТРА
// ============================================================

/**
 * Возвращает количество зарегистрированных квизов
 */
function SOS_COUNT_REGISTRY() {
  return Object.keys(window.SOS_QUIZ_REGISTRY).length;
}

/**
 * Возвращает статистику по реестру
 */
function SOS_GET_REGISTRY_STATS() {
  const stats = {
    total: 0,
    byModule: {},
    byLang: {},
    versions: {}
  };
  
  for (const [key, quiz] of Object.entries(window.SOS_QUIZ_REGISTRY)) {
    stats.total++;
    
    const module = quiz.meta.module;
    const lang = quiz.meta.lang;
    const version = quiz.meta.version || 'unknown';
    
    if (!stats.byModule[module]) stats.byModule[module] = 0;
    stats.byModule[module]++;
    
    if (!stats.byLang[lang]) stats.byLang[lang] = 0;
    stats.byLang[lang]++;
    
    if (!stats.versions[version]) stats.versions[version] = 0;
    stats.versions[version]++;
  }
  
  return stats;
}

// ============================================================
// 6. УПРАВЛЕНИЕ РЕЕСТРОМ
// ============================================================

/**
 * Очищает реестр (для тестирования)
 */
function SOS_CLEAR_REGISTRY() {
  window.SOS_QUIZ_REGISTRY = {};
  RegistryCache.clear();
  console.log('[Registry] 🧹 Реестр очищен');
}

/**
 * Удаляет квиз из реестра
 */
function SOS_REMOVE_QUIZ(module, category, lang) {
  const key = module + '::' + category + '::' + lang;
  if (window.SOS_QUIZ_REGISTRY[key]) {
    delete window.SOS_QUIZ_REGISTRY[key];
    RegistryCache.clearModule(module);
    console.log('[Registry] 🗑️ Удалён:', key);
    return true;
  }
  console.warn('[Registry] ❌ Квиз не найден:', key);
  return false;
}

/**
 * Выводит список всех квизов в консоль
 */
function SOS_LIST_QUIZZES() {
  console.log('[Registry] 📋 Список зарегистрированных квизов:');
  for (const [key, quiz] of Object.entries(window.SOS_QUIZ_REGISTRY)) {
    console.log(`  📌 ${key} (v${quiz.meta.version || '1.0'}) — ${quiz.meta.title}`);
  }
}

// ============================================================
// 7. ПРОВЕРКА НАЛИЧИЯ V3.0 ФИЧ
// ============================================================

/**
 * Проверяет, соответствует ли квиз v3.0 стандарту
 */
function SOS_IS_V3_COMPLIANT(module, category, lang) {
  const quiz = SOS_GET_QUIZ(module, category, lang);
  if (!quiz) return false;
  
  // Проверяем наличие ключевых полей v3.0
  const hasIdentityAnchor = !!quiz.meta.identity_anchor;
  const hasFollowUp = quiz.solutions && quiz.solutions.some(s => s.follow_up);
  const hasDeepCost = quiz.questions && quiz.questions.some(q => q.id === 'deep_cost');
  const hasFollowUpReady = quiz.questions && quiz.questions.some(q => q.id === 'follow_up_ready');
  
  return hasIdentityAnchor || hasFollowUp || hasDeepCost || hasFollowUpReady;
}

/**
 * Возвращает версию квиза
 */
function SOS_GET_QUIZ_VERSION(module, category, lang) {
  const quiz = SOS_GET_QUIZ(module, category, lang);
  return quiz ? quiz.meta.version : null;
}

// ============================================================
// 8. ЭКСПОРТ
// ============================================================

window.SOS_REGISTER_QUIZ = SOS_REGISTER_QUIZ;
window.SOS_GET_QUIZ = SOS_GET_QUIZ;
window.SOS_GET_MODULE_CATEGORIES = SOS_GET_MODULE_CATEGORIES;
window.SOS_GET_MODULE_ALL = SOS_GET_MODULE_ALL;
window.SOS_FIND_QUIZ_BY_TAGS = SOS_FIND_QUIZ_BY_TAGS;
window.SOS_SEARCH_QUIZ = SOS_SEARCH_QUIZ;
window.SOS_COUNT_REGISTRY = SOS_COUNT_REGISTRY;
window.SOS_GET_REGISTRY_STATS = SOS_GET_REGISTRY_STATS;
window.SOS_CLEAR_REGISTRY = SOS_CLEAR_REGISTRY;
window.SOS_REMOVE_QUIZ = SOS_REMOVE_QUIZ;
window.SOS_LIST_QUIZZES = SOS_LIST_QUIZZES;
window.SOS_IS_V3_COMPLIANT = SOS_IS_V3_COMPLIANT;
window.SOS_GET_QUIZ_VERSION = SOS_GET_QUIZ_VERSION;

console.log('✅ Registry v3.0 загружен');
console.log(`📦 Всего квизов: ${Object.keys(window.SOS_QUIZ_REGISTRY).length}`);
console.log(`🔍 Доступные функции: SOS_REGISTER_QUIZ, SOS_GET_QUIZ, SOS_LIST_QUIZZES и др.`);

// core/registry.js
// ============================================================
// РЕЕСТР КВИЗОВ — КОМПАС ПО ЖИЗНИ v2.0
// ============================================================

window.SOS_QUIZ_REGISTRY = window.SOS_QUIZ_REGISTRY || {};

/**
 * Регистрирует квиз в реестре
 * Если квиз с таким ключом уже существует — выдаёт предупреждение
 */
function SOS_REGISTER_QUIZ(data) {
  if (!data || !data.meta || !data.meta.module || !data.meta.category || !data.meta.lang) {
    console.error('[Registry] ❌ Ошибка: неполные данные квиза', data);
    return;
  }

  const key = data.meta.module + '::' + data.meta.category + '::' + data.meta.lang;
  
  if (window.SOS_QUIZ_REGISTRY[key]) {
    console.warn('[Registry] ⚠️ Квиз уже зарегистрирован:', key);
    console.warn('[Registry] Перезаписываем...');
  }
  
  window.SOS_QUIZ_REGISTRY[key] = data;
  console.log('[Registry] ✅ Зарегистрирован:', key);
}

/**
 * Получает квиз из реестра
 * Если язык не найден — пробует русский
 * Если и русский не найден — возвращает null
 */
function SOS_GET_QUIZ(module, category, lang) {
  if (!module || !category) {
    console.error('[Registry] ❌ Ошибка: module или category не указаны');
    return null;
  }

  const langs = lang ? [lang, 'ru'] : ['ru'];
  
  for (const l of langs) {
    const key = module + '::' + category + '::' + l;
    const quiz = window.SOS_QUIZ_REGISTRY[key];
    if (quiz) {
      if (l !== lang && lang) {
        console.log(`[Registry] 🔄 Fallback на русский: ${module}/${category} (${lang} → ru)`);
      }
      return quiz;
    }
  }

  console.warn(`[Registry] ❌ Квиз не найден: ${module}/${category} (${lang || 'ru'})`);
  return null;
}

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
        description: quiz.meta.description
      });
    }
  }
  
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
      const lang = key.split('::')[2];
      if (!result[lang]) result[lang] = [];
      result[lang].push({
        category: quiz.meta.category,
        title: quiz.meta.title,
        icon: quiz.meta.icon
      });
    }
  }
  
  return result;
}

/**
 * Очищает реестр (для тестирования)
 */
function SOS_CLEAR_REGISTRY() {
  window.SOS_QUIZ_REGISTRY = {};
  console.log('[Registry] 🧹 Реестр очищен');
}

/**
 * Возвращает количество зарегистрированных квизов
 */
function SOS_COUNT_REGISTRY() {
  return Object.keys(window.SOS_QUIZ_REGISTRY).length;
}

// ===== ЭКСПОРТ =====
window.SOS_REGISTER_QUIZ = SOS_REGISTER_QUIZ;
window.SOS_GET_QUIZ = SOS_GET_QUIZ;
window.SOS_GET_MODULE_CATEGORIES = SOS_GET_MODULE_CATEGORIES;
window.SOS_GET_MODULE_ALL = SOS_GET_MODULE_ALL;
window.SOS_CLEAR_REGISTRY = SOS_CLEAR_REGISTRY;
window.SOS_COUNT_REGISTRY = SOS_COUNT_REGISTRY;

console.log('✅ Registry v2.0 загружен');
console.log(`📦 Всего квизов: ${Object.keys(window.SOS_QUIZ_REGISTRY).length}`);

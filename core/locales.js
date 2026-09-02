// core/locales.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — КОМПАС ПО ЖИЗНИ v3.0
// ============================================================
// Что нового:
// • Все переводы для v3.0 фич
// • Identity anchor
// • Follow-up система
// • Challenges
// • Timeline
// • Энергетические блоки
// ============================================================

const LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // === ГЛАВНАЯ ===
    app_title: "🧭 КОМПАС ПО ЖИЗНИ",
    app_subtitle: "Алгоритмы для развития",
    footer_text: "v3.0 · Life Compass",
    footer_email: "compass.life.help@gmail.com",
    feedback_title: "💬 Есть вопросы или предложения?",

    // === МОДУЛИ (названия для главной) ===
    cat_purpose: "🎯 Призвание",
    cat_happiness: "😊 Счастье",
    cat_habits: "🔄 Привычки",
    cat_money: "💰 Деньги",
    cat_responsibility: "⚡ Ответственность",
    cat_health: "🧘 Здоровье",
    cat_relationships: "🗣️ Отношения",
    cat_creativity: "🎨 Творчество",
    cat_learning: "📚 Обучение",

    // === КАТЕГОРИИ (для timeline) ===
    cat_blockers: "Блокеры",
    cat_energy_audit: "Энергоаудит",
    cat_channel: "Канал",
    cat_nutrition: "Питание",
    cat_sleep: "Сон",
    cat_reading: "Чтение",
    cat_techniques: "Техники",
    cat_audit: "Аудит",
    cat_os: "Фин. ОС",
    cat_passion: "Призвание",
    cat_skills: "Навыки",
    cat_conflicts: "Конфликты",
    cat_family: "Семья",
    cat_commitments: "Обязательства",
    cat_planning: "Планирование",
    cat_mission: "🚀 Миссия",
    cat_calling: "💎 Призвание",
    cat_gratitude: "📓 Дневник благодарности",
    cat_joy: "🌈 Радость",
    cat_tracker: "📊 Трекер привычек",
    cat_system: "⚙️ Система привычек",
    cat_investments: "📈 Инвестиции",
    cat_debts: "🧾 Долги и кредиты",
    cat_discipline: "🎯 Дисциплина",
    cat_delegation: "🤝 Делегирование",
    cat_memory: "🧩 Память",
    cat_speedreading: "⚡ Скорочтение",
    cat_blocks: "🧱 Блоки",
    cat_inspiration: "✨ Вдохновение",
    cat_friendship: "🤝 Дружба",
    cat_boundaries: "🛡️ Границы",

    // === ОБЩИЕ ===
    back: "← Назад",
    next: "Далее",
    show_results: "Показать результаты",
    restart: "🔄 Новый запрос",
    no_results: "⚠️ Нет точных решений",
    question_of: "Вопрос {current} из {total}",
    click_to_expand: "👆 Нажмите на решение, чтобы увидеть пошаговую инструкцию",

    // === БЕЙДЖИ ===
    badge_fast: "⚡ Быстро",
    badge_medium: "⏱️ Средне",
    badge_slow: "🐢 Долго",
    badge_high: "✅ Надёжно",
    badge_high_rel: "✅ Надёжно",
    badge_medium_rel: "⚠️ Средне",
    badge_low: "❌ Низко",
    badge_low_rel: "❌ Низко",

    // === ДЕТАЛИ ===
    detail_steps: "📋 Шаги выполнения",
    detail_warnings: "⚠️ Важные предупреждения",
    resources: "📚 Ресурсы",
    yield_estimate: "🎯 Результат",

    // === ТРЕКЕР ПРИВЫЧЕК ===
    habit_streak: "🔥 Серия: {days} дней",
    habit_identity: "Я — {identity}",

    // === ЕЖЕДНЕВНОЕ ЗАДАНИЕ ===
    daily_task_title: "🎯 Задание на сегодня",
    daily_task_done: "✅ Выполнено",
    progress_modules: "📊 Пройдено модулей",

    // === ВЫЗОВЫ (CHALLENGES) ===
    challenge_title: "🎯 Вызов дня",
    days: "дней",
    days_streak: "дней подряд! Ты — машина!",
    challenge_complete: "Отлично! Вызов выполнен.",

    // === FOLLOW-UP ===
    followup_title: "⏰ Проверка через неделю",
    followup_later: "Напомнить позже",
    followup_coming: "Через неделю мы проверим твой прогресс",

    // === ЦИКЛ ДНЯ ===
    day_cycle_awakening: "🌅 Пробуждение",
    day_cycle_deep: "☀️ Глубокая работа",
    day_cycle_routine: "🍽️ Рутина",
    day_cycle_social: "🌤️ Встречи",
    day_cycle_physical: "🌇 Движение",
    day_cycle_reflect: "🌙 Рефлексия",
    day_cycle_rest: "😴 Сон",

    // === ПОДСКАЗКИ ДЛЯ ЦИКЛА ДНЯ ===
    day_cycle_hint_planning: "📌 Лучшее время для планирования дня",
    day_cycle_hint_deep: "🧠 Пик когнитивных способностей — решай сложные задачи",
    day_cycle_hint_routine: "☕ Время для рутинных дел",
    day_cycle_hint_social: "🤝 Коммуникация идёт легко",
    day_cycle_hint_physical: "🏃 Идеальное время для тренировки",
    day_cycle_hint_reflect: "🌙 Подведи итоги дня",
    day_cycle_hint_rest: "🛌 Отключайся и восстанавливайся",

    // === МОТИВАЦИЯ ===
    motivation_start: "💪 Начни сегодня — это главный шаг!",
    motivation_week: "🔥 Ты уже держишься {days} дней! Продолжай!",
    motivation_month: "🌟 {days} дней! Ты сильнее, чем думаешь!",
    motivation_almost: "🚀 {days} дней до привычки! Ты почти у цели!",
    motivation_done: "🎉 Привычка сформирована! Ты — новый человек!",

    // === CROSS-MODULE ===
    recommendation_title: "💡 Рекомендация на основе других модулей",
    cross_module_recommendation: "💡 На основе ваших ответов в других разделах...",

    // === ПОДДЕРЖКА ===
    support_title: "❤️ Спасибо, что выбрали КОМПАС!",
    support_desc: "Если приложение помогло — скажите спасибо. Это вдохновляет нас.",
    support_legal: "💎 Добровольное пожертвование. Никаких обязательств."
  },

  // ===== АНГЛИЙСКИЙ =====
  en: {
    // === MAIN ===
    app_title: "🧭 LIFE COMPASS",
    app_subtitle: "Algorithms for growth",
    footer_text: "v3.0 · Life Compass",
    footer_email: "compass.life.help@gmail.com",
    feedback_title: "💬 Questions or suggestions?",

    // === MODULES ===
    cat_purpose: "🎯 Purpose",
    cat_happiness: "😊 Happiness",
    cat_habits: "🔄 Habits",
    cat_money: "💰 Money",
    cat_responsibility: "⚡ Responsibility",
    cat_health: "🧘 Health",
    cat_relationships: "🗣️ Relationships",
    cat_creativity: "🎨 Creativity",
    cat_learning: "📚 Learning",

    // === CATEGORIES (for timeline) ===
    cat_blockers: "Blockers",
    cat_energy_audit: "Energy Audit",
    cat_channel: "Channel",
    cat_nutrition: "Nutrition",
    cat_sleep: "Sleep",
    cat_reading: "Reading",
    cat_techniques: "Techniques",
    cat_audit: "Audit",
    cat_os: "Financial OS",
    cat_passion: "Passion",
    cat_skills: "Skills",
    cat_conflicts: "Conflicts",
    cat_family: "Family",
    cat_commitments: "Commitments",
    cat_planning: "Planning",
    cat_mission: "🚀 Mission",
    cat_calling: "💎 Calling",
    cat_gratitude: "📓 Gratitude Journal",
    cat_joy: "🌈 Joy",
    cat_tracker: "📊 Habit Tracker",
    cat_system: "⚙️ Habit System",
    cat_investments: "📈 Investments",
    cat_debts: "🧾 Debts and Loans",
    cat_discipline: "🎯 Discipline",
    cat_delegation: "🤝 Delegation",
    cat_memory: "🧩 Memory",
    cat_speedreading: "⚡ Speed Reading",
    cat_blocks: "🧱 Blocks",
    cat_inspiration: "✨ Inspiration",
    cat_friendship: "🤝 Friendship",
    cat_boundaries: "🛡️ Boundaries",

    // === COMMON ===
    back: "← Back",
    next: "Next",
    show_results: "Show results",
    restart: "🔄 New request",
    no_results: "⚠️ No exact solutions",
    question_of: "Question {current} of {total}",
    click_to_expand: "👆 Tap a solution to see step-by-step instructions",

    // === BADGES ===
    badge_fast: "⚡ Fast",
    badge_medium: "⏱️ Medium",
    badge_slow: "🐢 Slow",
    badge_high: "✅ Reliable",
    badge_high_rel: "✅ Reliable",
    badge_medium_rel: "⚠️ Medium",
    badge_low: "❌ Low",
    badge_low_rel: "❌ Low",

    // === DETAILS ===
    detail_steps: "📋 Steps",
    detail_warnings: "⚠️ Warnings",
    resources: "📚 Resources",
    yield_estimate: "🎯 Result",

    // === HABIT TRACKER ===
    habit_streak: "🔥 Streak: {days} days",
    habit_identity: "I am a {identity}",

    // === DAILY TASK ===
    daily_task_title: "🎯 Today's task",
    daily_task_done: "✅ Done",
    progress_modules: "📊 Modules completed",

    // === CHALLENGES ===
    challenge_title: "🎯 Challenge of the day",
    days: "days",
    days_streak: "days in a row! You're a machine!",
    challenge_complete: "Great! Challenge completed.",

    // === FOLLOW-UP ===
    followup_title: "⏰ Week check-in",
    followup_later: "Remind later",
    followup_coming: "In a week we'll check your progress",

    // === DAY CYCLE ===
    day_cycle_awakening: "🌅 Awakening",
    day_cycle_deep: "☀️ Deep work",
    day_cycle_routine: "🍽️ Routine",
    day_cycle_social: "🌤️ Meetings",
    day_cycle_physical: "🌇 Exercise",
    day_cycle_reflect: "🌙 Reflection",
    day_cycle_rest: "😴 Sleep",

    // === DAY CYCLE HINTS ===
    day_cycle_hint_planning: "📌 Best time to plan your day",
    day_cycle_hint_deep: "🧠 Peak cognitive abilities — tackle complex tasks",
    day_cycle_hint_routine: "☕ Time for routine tasks",
    day_cycle_hint_social: "🤝 Communication comes easily",
    day_cycle_hint_physical: "🏃 Perfect time for a workout",
    day_cycle_hint_reflect: "🌙 Reflect on your day",
    day_cycle_hint_rest: "🛌 Disconnect and recover",

    // === MOTIVATION ===
    motivation_start: "💪 Start today — it's the most important step!",
    motivation_week: "🔥 You've held on for {days} days! Keep going!",
    motivation_month: "🌟 {days} days! You're stronger than you think!",
    motivation_almost: "🚀 {days} days to habit! You're almost there!",
    motivation_done: "🎉 Habit formed! You're a new person!",

    // === CROSS-MODULE ===
    recommendation_title: "💡 Recommendation based on other modules",
    cross_module_recommendation: "💡 Based on your answers in other sections...",

    // === SUPPORT ===
    support_title: "❤️ Thank you for choosing COMPASS!",
    support_desc: "If the app helped — say thanks. It inspires us.",
    support_legal: "💎 Voluntary donation. No obligations."
  }
};

// ===== ЭКСПОРТ =====
window.LOCALES = LOCALES;

// Текущий язык
let currentLang = localStorage.getItem('compass_lang') || 'ru';

// Функция перевода
function t(key, params) {
  const lang = currentLang || 'ru';
  let txt = (LOCALES[lang] && LOCALES[lang][key]) ? LOCALES[lang][key] : (LOCALES.ru[key] || key);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      txt = txt.replace('{' + k + '}', v);
    }
  }
  return txt;
}
window.t = t;

// Функция установки языка
function setLang(lang) {
  if (!LOCALES[lang]) return;
  currentLang = lang;
  localStorage.setItem('compass_lang', lang);
  // Обновить UI
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (key) el.textContent = t(key);
  });
  // Обновить классы кнопок
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  console.log('🌍 Язык изменён на:', lang);
}
window.setLang = setLang;

// Функция получения текущего языка
function getLang() {
  return currentLang;
}
window.getLang = getLang;

// Инициализация языковых кнопок
function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const lang = this.dataset.lang;
      if (lang) setLang(lang);
    });
  });
}
window.initLangButtons = initLangButtons;

console.log('✅ Локализации v3.0 загружены');
console.log('🌍 Доступные языки:', Object.keys(LOCALES).join(', '));
console.log('🌍 Текущий язык:', currentLang);

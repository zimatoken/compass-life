// core/locales.js
// ============================================================
// ЛОКАЛИЗАЦИЯ — КОМПАС ПО ЖИЗНИ v2.1
// ============================================================

const LOCALES = {
  // ===== РУССКИЙ =====
  ru: {
    // === ГЛАВНАЯ ===
    app_title: "🧭 КОМПАС ПО ЖИЗНИ",
    app_subtitle: "Алгоритмы для развития",
    footer_text: "v2.0 · Life Compass",
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

    // === ПОДЗАГОЛОВКИ МОДУЛЕЙ (subtitle) ===
    cat_purpose_sub: "Найди своё направление",
    cat_happiness_sub: "Построй жизнь для себя",
    cat_habits_sub: "Маленькие действия каждый день",
    cat_money_sub: "Управляй финансами",
    cat_responsibility_sub: "Будь хозяином своей жизни",
    cat_health_sub: "Заботься о теле и духе",
    cat_relationships_sub: "Строй глубокие связи",
    cat_creativity_sub: "Раскрой свой талант",
    cat_learning_sub: "Учись каждый день",

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
    badge_medium_rel: "⚠️ Средне",
    badge_low: "❌ Низко",

    // === ДЕТАЛИ ===
    detail_steps: "📋 Шаги выполнения",
    detail_warnings: "⚠️ Важные предупреждения",

    // === ТРЕКЕР ПРИВЫЧЕК ===
    habit_streak: "🔥 Серия: {days} дней",
    habit_identity: "Я — {identity}",

    // === ЕЖЕДНЕВНОЕ ЗАДАНИЕ ===
    daily_task_title: "🎯 Задание на сегодня",
    daily_task_done: "✅ Выполнено",
    progress_modules: "📊 Пройдено модулей",

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
    footer_text: "v2.0 · Life Compass",
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

    // === MODULE SUBTITLES ===
    cat_purpose_sub: "Find your direction",
    cat_happiness_sub: "Build a life for yourself",
    cat_habits_sub: "Small actions every day",
    cat_money_sub: "Take control of your finances",
    cat_responsibility_sub: "Be the master of your life",
    cat_health_sub: "Care for body and mind",
    cat_relationships_sub: "Build deep connections",
    cat_creativity_sub: "Unlock your talent",
    cat_learning_sub: "Learn something new every day",

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
    badge_medium_rel: "⚠️ Medium",
    badge_low: "❌ Low",

    // === DETAILS ===
    detail_steps: "📋 Steps",
    detail_warnings: "⚠️ Warnings",

    // === HABIT TRACKER ===
    habit_streak: "🔥 Streak: {days} days",
    habit_identity: "I am a {identity}",

    // === DAILY TASK ===
    daily_task_title: "🎯 Today's task",
    daily_task_done: "✅ Done",
    progress_modules: "📊 Modules completed",

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

// Функция перевода
function t(key, params) {
  const lang = (typeof currentLang !== 'undefined') ? currentLang : 'ru';
  let txt = (LOCALES[lang] && LOCALES[lang][key]) ? LOCALES[lang][key] : (LOCALES.ru[key] || key);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      txt = txt.replace('{' + k + '}', v);
    }
  }
  return txt;
}

window.t = t;

console.log('✅ Локализации v2.1 загружены');
console.log('🌍 Доступные языки:', Object.keys(LOCALES).join(', '));

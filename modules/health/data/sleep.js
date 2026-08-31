// modules/health/data/sleep.js
// ============================================================
// ПРОТОКОЛ СНА — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "sleep",
    version: "2.1.1",
    lang: "ru",
    title: "😴 Протокол сна",
    description: "Ты — тот, кто заботится о себе. Сон — не роскошь, а топливо. Без сна всё остальное теряет смысл.",
    icon: "😴",
    color: "#ec4899"
  },

  questions: [
    // === ВОПРОС 1: Количество сна (без условий) ===
    {
      id: "sleep_hours",
      type: "single",
      text: "Сколько часов ты спишь в среднем за ночь?",
      required: true,
      options: [
        { id: "less6", label: "😴 Меньше 6 часов", tags: ["deprived"] },
        { id: "6to7", label: "🛌 6–7 часов", tags: ["short"] },
        { id: "7to8", label: "✅ 7–8 часов", tags: ["optimal"] },
        { id: "more8", label: "🛏️ Больше 8 часов", tags: ["long"] }
      ]
    },

    // === ВОПРОС 2: Качество пробуждения (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "sleep_quality",
      type: "single",
      text: "Как ты чувствуешь себя утром после пробуждения?",
      required: true,
      options: [
        { id: "tired", label: "😩 Усталым", tags: ["bad"] },
        { id: "groggy", label: "🌫️ В тумане", tags: ["mid"] },
        { id: "fresh", label: "☀️ Бодрым", tags: ["good"] }
      ]
    },

    // === ВОПРОС 3: Гигиена сна ===
    {
      id: "screen_before_bed",
      type: "single",
      text: "Как часто ты смотришь в экран за час до сна?",
      required: true,
      options: [
        { id: "yes_screen", label: "❌ Каждый день", tags: ["bad"] },
        { id: "no_screen", label: "✅ Редко или никогда", tags: ["good"] },
        { id: "sometimes_screen", label: "😐 Иногда", tags: ["mid"] }
      ]
    },

    // === ВОПРОС 4: Утренний свет ===
    {
      id: "morning_light",
      type: "single",
      text: "Что ты делаешь в первые 10 минут после пробуждения?",
      required: true,
      options: [
        { id: "phone_first", label: "📱 Смотрю в телефон", tags: ["bad"] },
        { id: "drink", label: "☕ Пью кофе или чай", tags: ["mid"] },
        { id: "light_outside", label: "☀️ Смотрю на улицу", tags: ["good"] },
        { id: "nothing", label: "😴 Лежу и ничего не делаю", tags: ["bad"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Протокол сна ===
    {
      id: "sleep_protocol",
      title: "🌙 Протокол сна",
      description: "Ты — хранитель сна. Твой сон нуждается в системной коррекции.",
      conditions: {
        sleep_hours: ["less6", "6to7"],
        sleep_quality: ["tired", "groggy"],
        screen_before_bed: ["yes_screen", "sometimes_screen"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Бодрое пробуждение",
      tags: ["sleep", "recovery"],
      steps: [
        "Шаг 1: Ложись в одно и то же время (±30 мин).",
        "Шаг 2: Убери экраны за 1 час до сна.",
        "Шаг 3: Сделай комнату прохладной и тёмной.",
        "Шаг 4: Утром — свет сразу после пробуждения."
      ],
      warnings: [
        "НЕ пей кофеин после 14:00.",
        "НЕ засыпай под телефон."
      ],
      daily_action: "Сегодня: ляг на 30 минут раньше обычного.",
      resources: [
        { type: "book", label: "📖 Почему мы спим — Мэттью Уокер", url: "#" },
        { type: "technique", label: "🌙 1 час без экранов", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Оптимизация сна ===
    {
      id: "sleep_optimize",
      title: "⚡ Оптимизация сна",
      description: "Ты — оптимизатор. Сон хороший, но можно выжать ещё.",
      conditions: {
        sleep_hours: ["7to8", "more8"],
        sleep_quality: ["fresh", "groggy"],
        screen_before_bed: ["no_screen", "sometimes_screen"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 месяц",
      yield_estimate: "Пиковая производительность",
      tags: ["optimize", "sleep"],
      steps: [
        "Шаг 1: Веди дневник сна.",
        "Шаг 2: Экспериментируй с временем пробуждения.",
        "Шаг 3: Добавь растяжку перед сном.",
        "Шаг 4: Попробуй дневной сон 20 минут."
      ],
      warnings: [
        "НЕ спи днём больше 30 минут.",
        "НЕ меняй режим резко."
      ],
      daily_action: "Сегодня: запиши, во сколько лёг и как проснулся.",
      resources: [
        { type: "book", label: "📖 Почему мы спим — Мэттью Уокер", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Утренний свет ===
    {
      id: "morning_light_protocol",
      title: "☀️ Протокол утреннего света",
      description: "Ты — тот, кто начинает день правильно. Свет утром запускает циркадные ритмы.",
      conditions: {
        morning_light: ["phone_first", "drink", "nothing"],
        sleep_quality: ["tired", "groggy"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 дня",
      yield_estimate: "Энергия с утра",
      tags: ["morning", "light"],
      steps: [
        "Шаг 1: Сразу после пробуждения — выйди на балкон или подойди к окну.",
        "Шаг 2: Смотри на свет 2–3 минуты.",
        "Шаг 3: Отложи телефон на первые 10 минут.",
        "Шаг 4: Замени кофе на стакан воды."
      ],
      warnings: [
        "НЕ смотри на яркое солнце.",
        "НЕ бери телефон в первую минуту."
      ],
      daily_action: "Сегодня: после пробуждения подойди к окну на 2 минуты.",
      resources: [
        { type: "book", label: "📖 Сила света — Линн Керн", url: "#" }
      ]
    }
  ]
});

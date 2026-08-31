// modules/habits/data/environment.js
// ============================================================
// ДИЗАЙН СРЕДЫ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "environment",
    version: "2.1.1",
    lang: "ru",
    title: "🌍 Дизайн среды",
    description: "Ты — архитектор своего пространства. Сделай хорошие привычки лёгкими, а плохие — сложными.",
    icon: "🌍",
    color: "#8b5cf6"
  },

  questions: [
    // === ВОПРОС 1: Основное пространство (без условий) ===
    {
      id: "env_type",
      type: "single",
      text: "Где ты проводишь большую часть времени?",
      required: true,
      options: [
        { id: "home", label: "🏠 Дома", tags: ["home"] },
        { id: "office", label: "🏢 В офисе", tags: ["office"] },
        { id: "mixed", label: "🔄 Смешанно", tags: ["mixed"] }
      ]
    },

    // === ВОПРОС 2: Что мешает (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "env_problem",
      type: "single",
      text: "Что в окружении мешает твоим хорошим привычкам?",
      required: true,
      options: [
        { id: "clutter", label: "🗑️ Беспорядок", tags: ["clutter"] },
        { id: "temptations", label: "🍕 Искушения под рукой", tags: ["tempt"] },
        { id: "people", label: "👥 Люди с плохими привычками", tags: ["people"] },
        { id: "noise", label: "🔊 Шум и отвлечения", tags: ["noise"] }
      ]
    },

    // === ВОПРОС 3: Уровень контроля ===
    {
      id: "env_control",
      type: "single",
      text: "Можешь ли ты изменить своё окружение?",
      required: true,
      options: [
        { id: "full_control", label: "✅ Полностью", tags: ["full"] },
        { id: "partial", label: "😐 Частично", tags: ["partial"] },
        { id: "no_control", label: "❌ Почти нет", tags: ["none"] }
      ]
    },

    // === ВОПРОС 4: Триггер для полезной привычки ===
    {
      id: "trigger_action",
      type: "single",
      text: "Какой триггер ты хочешь создать для полезной привычки?",
      required: true,
      options: [
        { id: "visual", label: "👁️ Напоминание на видном месте", tags: ["visual"] },
        { id: "time", label: "⏰ Привязка ко времени дня", tags: ["time"] },
        { id: "people", label: "👥 Партнёр по привычке", tags: ["buddy"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Дизайн среды ===
    {
      id: "env_design",
      title: "🏗️ Дизайн среды",
      description: "Ты — архитектор. Не полагайся на силу воли — полагайся на дизайн.",
      conditions: {
        env_control: ["full", "partial"],
        env_problem: ["clutter", "temptations", "people", "noise"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Среда работает на тебя",
      tags: ["env", "design"],
      steps: [
        "Шаг 1: Убери 1 искушение из поля зрения.",
        "Шаг 2: Поставь 1 напоминание о хорошей привычке на видное место.",
        "Шаг 3: Создай триггер-зону для привычки.",
        "Шаг 4: Договорись с окружением о поддержке."
      ],
      warnings: [
        "НЕ полагайся только на силу воли.",
        "НЕ меняй всё за 1 день."
      ],
      daily_action: "Сегодня: убери 1 искушение из поля зрения.",
      resources: [
        { type: "book", label: "📖 Атомные привычки (глава 6) — Джеймс Клир", url: "#" },
        { type: "technique", label: "🧠 Триггер-зона", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Минимальные изменения ===
    {
      id: "minimal_change",
      title: "🌱 Минимальные изменения",
      description: "Ты — садовник. Начни с 1 маленького уголка.",
      conditions: {
        env_control: ["none"],
        env_problem: ["clutter", "temptations", "people", "noise"]
      },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1 месяц",
      yield_estimate: "Начало изменений",
      tags: ["small", "steps"],
      steps: [
        "Шаг 1: Найди 1 уголок, который ты можешь контролировать.",
        "Шаг 2: Сделай его идеальным для 1 привычки.",
        "Шаг 3: Используй его ежедневно в одно время.",
        "Шаг 4: Через 2 недели расширь зону контроля."
      ],
      warnings: [
        "НЕ пытайся изменить всё сразу.",
        "НЕ расстраивайся, если прогресс медленный."
      ],
      daily_action: "Сегодня: организуй 1 маленький уголок для новой привычки.",
      resources: [
        { type: "book", label: "📖 Минимализм — Джошуа Беккер", url: "#" }
      ]
    }
  ]
});

// modules/learning/data/techniques.js
// ============================================================
// ТЕХНИКИ ОБУЧЕНИЯ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "learning",
    category: "techniques",
    version: "2.1.1",
    lang: "ru",
    title: "🧠 Техники обучения",
    description: "Ты — ученик. Умение учиться — это навык, который можно прокачать. Начни сегодня.",
    icon: "🧠",
    color: "#f97316"
  },

  questions: [
    // === ВОПРОС 1: Стиль обучения (без условий) ===
    {
      id: "learning_style",
      type: "single",
      text: "Как ты лучше всего усваиваешь информацию?",
      required: true,
      options: [
        { id: "visual", label: "👁️ Визуально", tags: ["visual"] },
        { id: "auditory", label: "👂 На слух", tags: ["audio"] },
        { id: "kinesthetic", label: "✋ Практически", tags: ["kinesthetic"] },
        { id: "reading", label: "📖 Через чтение", tags: ["reading"] }
      ]
    },

    // === ВОПРОС 2: Триггер сложности (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "learning_problem",
      type: "single",
      text: "Что мешает тебе учиться эффективно?",
      required: true,
      options: [
        { id: "time", label: "⏰ Нет времени", tags: ["time"] },
        { id: "focus", label: "🌪️ Не могу сосредоточиться", tags: ["focus"] },
        { id: "forget", label: "🧠 Быстро забываю", tags: ["forget"] },
        { id: "motivation", label: "😐 Нет мотивации", tags: ["motivation"] },
        { id: "overwhelm", label: "📚 Перегруз", tags: ["overwhelm"] }
      ]
    },

    // === ВОПРОС 3: Техники памяти ===
    {
      id: "memory_technique",
      type: "single",
      text: "Как ты обычно запоминаешь новое?",
      required: true,
      options: [
        { id: "repeat", label: "🔁 Повторяю много раз", tags: ["repeat"] },
        { id: "connect", label: "🧠 Связываю с тем, что знаю", tags: ["connect"] },
        { id: "explain", label: "🗣️ Объясняю другому", tags: ["explain"] },
        { id: "write", label: "✍️ Записываю", tags: ["write"] }
      ]
    },

    // === ВОПРОС 4: Время обучения ===
    {
      id: "learning_time",
      type: "single",
      text: "Когда тебе проще учиться?",
      required: true,
      options: [
        { id: "morning", label: "🌅 Утром", tags: ["morning"] },
        { id: "afternoon", label: "☀️ Днём", tags: ["afternoon"] },
        { id: "evening", label: "🌙 Вечером", tags: ["evening"] },
        { id: "anytime", label: "🔄 Когда угодно", tags: ["anytime"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Система обучения ===
    {
      id: "learning_system",
      title: "📚 Система обучения",
      description: "Ты — ученик. Учёба — это не событие, это процесс. Создай систему, которая работает на тебя.",
      conditions: {
        learning_style: ["visual", "auditory", "kinesthetic", "reading"],
        learning_problem: ["time", "focus", "forget", "motivation", "overwhelm"],
        memory_technique: ["repeat", "connect", "explain", "write"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 недели",
      yield_estimate: "Ускоренное обучение",
      tags: ["learn", "system"],
      steps: [
        "Шаг 1: Используй технику Фейнмана.",
        "Шаг 2: Делай перерывы каждые 25 минут.",
        "Шаг 3: Повторяй через 1 день, 3 дня, 7 дней.",
        "Шаг 4: Связывай новое со старым."
      ],
      warnings: [
        "НЕ зубри больше 1 часа подряд.",
        "НЕ учи без практики."
      ],
      daily_action: "Сегодня: объясни прочитанное простыми словами вслух.",
      resources: [
        { type: "book", label: "📖 Как учиться быстро — Барбара Оакли", url: "#" },
        { type: "book", label: "📖 Глубокая работа — Кэл Ньюпорт", url: "#" },
        { type: "technique", label: "🧠 Техника Фейнмана", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Техники запоминания ===
    {
      id: "memory_protocol",
      title: "📝 Протокол запоминания",
      description: "Ты — хранитель знаний. Память — это не волшебство, это техника.",
      conditions: {
        learning_problem: ["forget"],
        memory_technique: ["repeat", "write"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Увеличение запоминания на 50%",
      tags: ["memory", "retention"],
      steps: [
        "Шаг 1: Используй интервальное повторение.",
        "Шаг 2: Записывай ключевые мысли рукой.",
        "Шаг 3: Создавай ассоциации.",
        "Шаг 4: Проговаривай вслух."
      ],
      warnings: [
        "НЕ пытайся запомнить всё сразу.",
        "НЕ учи без повторения."
      ],
      daily_action: "Сегодня: запиши 3 ключевые мысли из изученного.",
      resources: [
        { type: "book", label: "📖 Как работает память — Элизабет Лофтус", url: "#" },
        { type: "technique", label: "🧠 Интервальное повторение", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Концентрация ===
    {
      id: "focus_protocol",
      title: "🧘 Протокол концентрации",
      description: "Ты — хранитель фокуса. Концентрация — это не данность, а привычка.",
      conditions: {
        learning_problem: ["focus", "overwhelm"],
        learning_time: ["morning", "afternoon", "evening", "anytime"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Увеличение концентрации в 2 раза",
      tags: ["focus", "concentration"],
      steps: [
        "Шаг 1: Начни с 10 минут полной концентрации.",
        "Шаг 2: Используй таймер и увеличивай время.",
        "Шаг 3: Отключи уведомления.",
        "Шаг 4: Делай 5-минутные перерывы."
      ],
      warnings: [
        "НЕ проверяй телефон во время учёбы.",
        "НЕ пытайся концентрироваться больше 50 минут."
      ],
      daily_action: "Сегодня: поработай 10 минут без единого отвлечения.",
      resources: [
        { type: "book", label: "📖 Глубокая работа — Кэл Ньюпорт", url: "#" },
        { type: "technique", label: "🧘 Техника '10 минут фокуса'", url: "#" }
      ]
    }
  ]
});

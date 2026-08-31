// modules/learning/data/reading.js
// ============================================================
// ЧТЕНИЕ КАК ПРИВЫЧКА — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "learning",
    category: "reading",
    version: "2.1.1",
    lang: "ru",
    title: "📖 Чтение как привычка",
    description: "Ты — читатель. Книги — это мост между тобой и лучшими умами. Не просто читай — применяй.",
    icon: "📖",
    color: "#f97316"
  },

  questions: [
    // === ВОПРОС 1: Частота чтения (без условий) ===
    {
      id: "reading_freq",
      type: "single",
      text: "Как часто ты читаешь книги?",
      required: true,
      options: [
        { id: "never", label: "❌ Не читаю", tags: ["none"] },
        { id: "rarely", label: "📅 Раз в месяц", tags: ["low"] },
        { id: "weekly", label: "📆 Раз в неделю", tags: ["mid"] },
        { id: "daily", label: "📚 Каждый день", tags: ["high"] }
      ]
    },

    // === ВОПРОС 2: Цель чтения (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "reading_goal",
      type: "single",
      text: "Зачем ты читаешь?",
      required: true,
      options: [
        { id: "pleasure", label: "😊 Для удовольствия", tags: ["joy"] },
        { id: "growth", label: "📈 Для роста", tags: ["growth"] },
        { id: "work", label: "💼 Для работы", tags: ["work"] },
        { id: "habit", label: "🔄 Просто привычка", tags: ["habit"] }
      ]
    },

    // === ВОПРОС 3: Препятствия ===
    {
      id: "reading_block",
      type: "single",
      text: "Что мешает тебе читать больше?",
      required: true,
      options: [
        { id: "time", label: "⏰ Нет времени", tags: ["time"] },
        { id: "focus", label: "📱 Не могу сосредоточиться", tags: ["focus"] },
        { id: "forget", label: "🧠 Быстро забываю", tags: ["forget"] },
        { id: "good", label: "✅ Всё хорошо", tags: ["good"] }
      ]
    },

    // === ВОПРОС 4: Формат ===
    {
      id: "reading_format",
      type: "single",
      text: "Какой формат тебе удобнее?",
      required: true,
      options: [
        { id: "paper", label: "📖 Бумажная книга", tags: ["paper"] },
        { id: "ebook", label: "📱 Электронная", tags: ["ebook"] },
        { id: "audio", label: "🎧 Аудиокнига", tags: ["audio"] },
        { id: "mix", label: "🔄 Микс", tags: ["mix"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Привычка чтения ===
    {
      id: "reading_habit",
      title: "📚 Привычка чтения",
      description: "Ты — читатель. Начни с малого. 5 страниц в день — это 20 книг в год.",
      conditions: {
        reading_freq: ["never", "rarely"],
        reading_goal: ["joy", "growth", "work", "habit"],
        reading_block: ["time", "focus", "forget"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "20 страниц в день → 20+ книг в год",
      tags: ["reading", "habit"],
      steps: [
        "Шаг 1: Начни с 5 страниц в день.",
        "Шаг 2: Читай в одно и то же время.",
        "Шаг 3: Держи книгу на видном месте.",
        "Шаг 4: Веди список прочитанного."
      ],
      warnings: [
        "НЕ читай 5 книг одновременно.",
        "НЕ заставляй себя дочитывать скучную книгу."
      ],
      daily_action: "Сегодня: прочитай 5 страниц любой книги.",
      resources: [
        { type: "book", label: "📖 Как читать книги — Питер Бейвел", url: "#" },
        { type: "book", label: "📖 Сила привычки — Чарльз Духигг", url: "#" },
        { type: "technique", label: "📖 Правило 5 страниц", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Глубокое чтение ===
    {
      id: "deep_reading",
      title: "🔍 Глубокое чтение",
      description: "Ты — аналитик. Читай меньше, но глубже. Не количество страниц, а качество понимания.",
      conditions: {
        reading_freq: ["weekly", "daily"],
        reading_goal: ["growth", "work"],
        reading_block: ["forget"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "Постоянно",
      yield_estimate: "Знания, которые ты применяешь",
      tags: ["deep", "reading"],
      steps: [
        "Шаг 1: Делай заметки на полях.",
        "Шаг 2: Пересказывай каждую главу.",
        "Шаг 3: Связывай с 3 вещами из жизни.",
        "Шаг 4: Действуй на основе прочитанного."
      ],
      warnings: [
        "НЕ читай только ради количества.",
        "НЕ забывай применять."
      ],
      daily_action: "Сегодня: сделай 1 заметку из прочитанного.",
      resources: [
        { type: "book", label: "📖 Как читать, запоминать и применять — Мортимер Адлер", url: "#" },
        { type: "technique", label: "📝 Техника 'Пересказ главы'", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Чтение без отвлечений ===
    {
      id: "focus_reading",
      title: "🧘 Чтение без отвлечений",
      description: "Ты — хранитель фокуса. 15 минут концентрированного чтения = 1 час чтения с отвлечениями.",
      conditions: {
        reading_block: ["focus"],
        reading_format: ["paper", "ebook", "audio", "mix"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Удвоение скорости и качества чтения",
      tags: ["focus", "reading"],
      steps: [
        "Шаг 1: Убери телефон в другую комнату.",
        "Шаг 2: Используй таймер — 15 минут без перерыва.",
        "Шаг 3: Если мысли убегают — вернись и начни снова.",
        "Шаг 4: Постепенно увеличивай время до 30 минут."
      ],
      warnings: [
        "НЕ читай в кровати.",
        "НЕ читай без цели."
      ],
      daily_action: "Сегодня: прочитай 15 минут без телефона.",
      resources: [
        { type: "book", label: "📖 Глубокая работа — Кэл Ньюпорт", url: "#" },
        { type: "technique", label: "⏱️ Техника '15 минут фокуса'", url: "#" }
      ]
    }
  ]
});

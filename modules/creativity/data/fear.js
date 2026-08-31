// modules/creativity/data/fear.js
// ============================================================
// СТРАХ КРИТИКИ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "creativity",
    category: "fear",
    version: "2.1.1",
    lang: "ru",
    title: "🚀 Страх критики",
    description: "Ты — храбрец. Страх — это не враг, а сигнал, что ты растёшь. Научись использовать его как топливо.",
    icon: "🚀",
    color: "#d946ef"
  },

  questions: [
    // === ВОПРОС 1: Уровень страха (без условий) ===
    {
      id: "fear_level",
      type: "single",
      text: "Насколько сильно ты боишься показать свою работу другим?",
      required: true,
      options: [
        { id: "paralyzed", label: "😰 Полностью парализует", tags: ["high"] },
        { id: "nervous", label: "😬 Нервничаю, но показываю", tags: ["mid"] },
        { id: "ok", label: "😐 Нормально", tags: ["low"] }
      ]
    },

    // === ВОПРОС 2: Источник страха (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "fear_source",
      type: "single",
      text: "Чего именно ты боишься?",
      required: true,
      options: [
        { id: "judgment", label: "👎 Осуждения", tags: ["judge"] },
        { id: "failure", label: "❌ Провала", tags: ["fail"] },
        { id: "comparison", label: "📊 Сравнения", tags: ["compare"] },
        { id: "shame", label: "😳 Стыда", tags: ["shame"] }
      ]
    },

    // === ВОПРОС 3: Стратегия защиты ===
    {
      id: "fear_defense",
      type: "single",
      text: "Как ты обычно защищаешься от страха?",
      required: true,
      options: [
        { id: "hide", label: "🚫 Не показываю", tags: ["hide"] },
        { id: "perfect", label: "📚 Делаю идеально", tags: ["perfect"] },
        { id: "ignore", label: "🙈 Игнорирую", tags: ["ignore"] },
        { id: "courage", label: "💪 Делюсь, несмотря на страх", tags: ["courage"] }
      ]
    },

    // === ВОПРОС 4: Худший сценарий ===
    {
      id: "worst_case",
      type: "single",
      text: "Представь: случился худший сценарий. Что ты будешь делать?",
      required: true,
      options: [
        { id: "resilient", label: "💪 Переживу", tags: ["resilient"] },
        { id: "avoid_think", label: "😰 Не хочу думать об этом", tags: ["avoid_think"] },
        { id: "prepared", label: "📋 У меня есть план Б", tags: ["prepared"] },
        { id: "collapse", label: "😩 Сдамся", tags: ["collapse"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Протокол страха ===
    {
      id: "fear_protocol",
      title: "🛡️ Протокол страха",
      description: "Ты — храбрец. Страх — это не враг, а сигнал, что ты растёшь. Не жди идеального результата.",
      conditions: {
        fear_level: ["paralyzed", "nervous"],
        fear_source: ["judgment", "failure", "comparison", "shame"],
        fear_defense: ["hide", "perfect", "ignore"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Свобода творить без страха",
      tags: ["fear", "courage"],
      steps: [
        "Шаг 1: Напиши худший сценарий на бумаге.",
        "Шаг 2: Покажи работу 1 безопасному человеку.",
        "Шаг 3: Собери 5 отзывов — выбери 3 полезных.",
        "Шаг 4: Сделай публичный пост."
      ],
      warnings: [
        "НЕ жди идеального результата.",
        "НЕ читай комментарии подряд."
      ],
      daily_action: "Сегодня: покажи 1 человеку что-то, что ты создал.",
      resources: [
        { type: "book", label: "📖 Храбрая сердцем — Брене Браун", url: "#" },
        { type: "book", label: "📖 Творческая смелость — Рик Рубин", url: "#" },
        { type: "technique", label: "📝 Техника 'Худший сценарий'", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Страх как топливо ===
    {
      id: "fear_to_fuel",
      title: "🔥 Страх как топливо",
      description: "Ты — алхимик. Страх — это энергия. Когда ты перестаёшь его избегать, он становится топливом.",
      conditions: {
        fear_level: ["nervous", "ok"],
        fear_defense: ["ignore", "courage"],
        worst_case: ["resilient", "prepared"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Энергия из страха",
      tags: ["fuel", "courage"],
      steps: [
        "Шаг 1: Заметь момент, когда чувствуешь страх.",
        "Шаг 2: Спроси себя: 'Что я могу сделать с этим?'.",
        "Шаг 3: Используй адреналин страха как энергию.",
        "Шаг 4: Замечай, что после действия страх уменьшается."
      ],
      warnings: [
        "НЕ пытайся избавиться от страха.",
        "НЕ избегай действий из-за страха."
      ],
      daily_action: "Сегодня: сделай то, чего боишься, и заметь, как страх уменьшился.",
      resources: [
        { type: "book", label: "📖 Смелость быть неидеальным — Брене Браун", url: "#" },
        { type: "technique", label: "🔥 Страх как попутный ветер", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Страх осуждения ===
    {
      id: "judgment_protocol",
      title: "🛡️ Протокол осуждения",
      description: "Ты — сам себе главный критик. Мнение других — это их проекция, не твоя правда.",
      conditions: {
        fear_source: ["judgment", "shame"],
        fear_defense: ["hide", "perfect"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 недели",
      yield_estimate: "Свобода быть собой",
      tags: ["judgment", "freedom"],
      steps: [
        "Шаг 1: Напиши список людей, чьё мнение важно (макс 3).",
        "Шаг 2: Вспомни 3 случая, когда их мнение не совпадало с твоим.",
        "Шаг 3: Напиши себе письмо: 'Я имею право быть неидеальным'.",
        "Шаг 4: Покажи работу этим 3 людям."
      ],
      warnings: [
        "НЕ пытайся угодить всем.",
        "НЕ ищи одобрения у тех, кто не поддержит."
      ],
      daily_action: "Сегодня: покажи работу кому-то, чьё мнение важно, но страшно.",
      resources: [
        { type: "book", label: "📖 Перестань угождать людям — Джеймс Добсон", url: "#" },
        { type: "technique", label: "🧠 Техника 'Письмо себе'", url: "#" }
      ]
    }
  ]
});

// modules/relationships/data/family.js
// ============================================================
// СЕМЬЯ И БЛИЗКИЕ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "family",
    version: "2.1.1",
    lang: "ru",
    title: "🏡 Семья и близкие",
    description: "Ты — архитектор своих отношений. Близкие — это не данность, а живая система, которую можно строить и укреплять.",
    icon: "🏡",
    color: "#06b6d4"
  },

  questions: [
    // === ВОПРОС 1: Качество отношений (без условий) ===
    {
      id: "relation_quality",
      type: "single",
      text: "Как ты в целом оцениваешь свои отношения с близкими?",
      required: true,
      options: [
        { id: "great", label: "❤️ Отлично", tags: ["good"] },
        { id: "ok", label: "😐 Нормально", tags: ["mid"] },
        { id: "strained", label: "😟 Напряжённые", tags: ["bad"] },
        { id: "distant", label: "🌫️ Отдалённые", tags: ["distant"] }
      ]
    },

    // === ВОПРОС 2: Главный барьер (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "main_issue",
      type: "single",
      text: "Что чаще всего мешает вам быть ближе?",
      required: true,
      options: [
        { id: "time", label: "⏰ Нет времени", tags: ["time"] },
        { id: "communication", label: "🗣️ Не умеем говорить", tags: ["comm"] },
        { id: "trust", label: "🔒 Нет доверия", tags: ["trust"] },
        { id: "conflict", label: "⚔️ Постоянные ссоры", tags: ["fight"] }
      ]
    },

    // === ВОПРОС 3: Я-сообщения ===
    {
      id: "i_messages",
      type: "single",
      text: "Используешь ли ты формулу 'Я чувствую... когда... потому что...'?",
      required: true,
      options: [
        { id: "yes_i", label: "✅ Да, говорю о своих чувствах", tags: ["skill"] },
        { id: "no_i", label: "❌ Нет, чаще обвиняю или молчу", tags: ["no_skill"] },
        { id: "heard_i", label: "🤔 Слышал, но не применяю", tags: ["know"] }
      ]
    },

    // === ВОПРОС 4: Ритуалы ===
    {
      id: "rituals",
      type: "single",
      text: "Есть ли у вас с близкими регулярные ритуалы?",
      required: true,
      options: [
        { id: "yes_ritual", label: "✅ Да — регулярно проводим время вместе", tags: ["strong"] },
        { id: "sometimes_ritual", label: "😐 Иногда — когда получается", tags: ["mid"] },
        { id: "no_ritual", label: "❌ Нет — каждый сам по себе", tags: ["weak"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Ремонт отношений ===
    {
      id: "relation_repair",
      title: "🛠️ Ремонт отношений",
      description: "Ты — строитель мостов. Отношения требуют внимания. Начни с малого.",
      conditions: {
        relation_quality: ["strained", "distant"],
        main_issue: ["communication", "trust", "fight"],
        i_messages: ["no_i", "heard_i"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Тёплые и поддерживающие отношения",
      tags: ["repair", "family"],
      steps: [
        "Шаг 1: Выдели 20 минут в день только для разговора.",
        "Шаг 2: Задавай открытые вопросы.",
        "Шаг 3: Слушай, не перебивая.",
        "Шаг 4: Благодари за мелочи каждый день."
      ],
      warnings: [
        "НЕ критикуй в моменте эмоций.",
        "НЕ жди, что партнёр изменится первым."
      ],
      daily_action: "Сегодня: задай близкому 1 открытый вопрос и дослушай ответ.",
      resources: [
        { type: "book", label: "📖 Ненасильственное общение — Маршалл Розенберг", url: "#" },
        { type: "book", label: "📖 5 языков любви — Гэри Чепмен", url: "#" },
        { type: "technique", label: "🗣️ Формула 'Я-сообщения'", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Углубление связи ===
    {
      id: "deepen_bond",
      title: "💎 Углубление связи",
      description: "Ты — углубитель. Отношения хорошие, но можно сделать их глубже.",
      conditions: {
        relation_quality: ["great", "ok"],
        main_issue: ["time", "communication"],
        rituals: ["no_ritual", "sometimes_ritual"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "Постоянно",
      yield_estimate: "Более глубокая близость и доверие",
      tags: ["deepen", "bond"],
      steps: [
        "Шаг 1: Введи ритуал 'проверка дня' перед сном.",
        "Шаг 2: Делись уязвимостями.",
        "Шаг 3: Совершай новый опыт вместе.",
        "Шаг 4: Пиши друг другу записки с благодарностью."
      ],
      warnings: [
        "НЕ забывай благодарить за мелочи.",
        "НЕ бери близких как должное."
      ],
      daily_action: "Сегодня: скажи близкому человеку, за что ты его ценишь.",
      resources: [
        { type: "book", label: "📖 Ненасильственное общение — Маршалл Розенберг", url: "#" },
        { type: "technique", label: "📝 Ритуал 'Благодарность дня'", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Создание ритуалов ===
    {
      id: "ritual_builder",
      title: "🌱 Создание ритуалов",
      description: "Ты — создатель традиций. Ритуалы — это клей, который держит семью.",
      conditions: {
        rituals: ["weak"],
        main_issue: ["time"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Семейные традиции и близость",
      tags: ["rituals", "family"],
      steps: [
        "Шаг 1: Выбери 1 день в неделю для совместного ужина.",
        "Шаг 2: Добавь 1 маленький ритуал на каждый день.",
        "Шаг 3: Создай традицию — воскресный завтрак или прогулка.",
        "Шаг 4: Вовлекай всех в создание ритуалов."
      ],
      warnings: [
        "НЕ пытайся ввести 5 ритуалов сразу.",
        "НЕ заставляй — ритуалы должны приносить радость."
      ],
      daily_action: "Сегодня: создай 1 маленький ритуал (объятие при встрече).",
      resources: [
        { type: "book", label: "📖 5 языков любви — Гэри Чепмен", url: "#" },
        { type: "technique", label: "📝 Техника 'Маленькие ритуалы'", url: "#" }
      ]
    }
  ]
});

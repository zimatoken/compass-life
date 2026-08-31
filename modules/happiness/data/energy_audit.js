// modules/happiness/data/energy_audit.js
// ============================================================
// ЭНЕРГОАУДИТ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "happiness",
    category: "energy_audit",
    version: "2.1.1",
    lang: "ru",
    title: "⚡ Энергоаудит",
    description: "Ты не устаёшь от дел. Ты устаёшь от людей и мыслей, которым отдал свою энергию.",
    icon: "⚡",
    color: "#f59e0b"
  },

  questions: [
    // === ВОПРОС 1: Источник энергии (без условий) ===
    {
      id: "energy_source",
      type: "single",
      text: "После чего ты чувствуешь прилив сил и подъём?",
      required: true,
      options: [
        { id: "people", label: "👥 Общение с людьми", tags: ["extrovert"] },
        { id: "alone", label: "🧘 Одиночество и тишина", tags: ["introvert"] },
        { id: "sport", label: "🏃 Физическая активность", tags: ["body"] },
        { id: "create", label: "🎨 Творчество", tags: ["mind"] },
        { id: "nature", label: "🌿 Природа", tags: ["nature"] }
      ]
    },

    // === ВОПРОС 2: Энергопотребитель (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "energy_drain",
      type: "single",
      text: "Что больше всего выматывает и забирает силы?",
      required: true,
      options: [
        { id: "meetings", label: "📅 Бесконечные встречи", tags: ["meetings"] },
        { id: "news", label: "📰 Новости, соцсети", tags: ["media"] },
        { id: "conflict", label: "⚔️ Конфликты", tags: ["conflict"] },
        { id: "chaos", label: "🌪️ Хаос и неопределённость", tags: ["chaos"] },
        { id: "toxic", label: "👤 Токсичные люди", tags: ["toxic"] }
      ]
    },

    // === ВОПРОС 3: Энергетический баланс ===
    {
      id: "energy_balance",
      type: "single",
      text: "Как ты оцениваешь баланс между тем, что даёт и забирает энергию?",
      required: true,
      options: [
        { id: "positive", label: "✅ Даёт больше, чем забирает", tags: ["good"] },
        { id: "neutral", label: "🔄 Поровну", tags: ["mid"] },
        { id: "negative", label: "❌ Забирает больше", tags: ["bad"] }
      ]
    },

    // === ВОПРОС 4: Умение говорить «нет» ===
    {
      id: "energy_boundary",
      type: "single",
      text: "Умеешь ли ты говорить 'нет' тому, что выматывает?",
      required: true,
      options: [
        { id: "yes_boundary", label: "✅ Да, легко", tags: ["strong"] },
        { id: "sometimes_boundary", label: "😐 Иногда", tags: ["mid"] },
        { id: "no_boundary", label: "❌ Нет, трудно", tags: ["weak"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Протокол энергии ===
    {
      id: "energy_protocol",
      title: "🔋 Протокол энергии",
      description: "Ты — хранитель энергии. Создай систему, которая защищает твою энергию.",
      conditions: {
        energy_balance: ["negative", "neutral"],
        energy_boundary: ["weak", "mid"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Контроль над энергией",
      tags: ["energy", "protocol"],
      steps: [
        "Шаг 1: Зафиксируй 3 главных источника энергии.",
        "Шаг 2: Зафиксируй 3 главных энергопотребителя.",
        "Шаг 3: Составь расписание: энергия на первом месте.",
        "Шаг 4: Внедри 1 правило 'нет' каждую неделю."
      ],
      warnings: [
        "НЕ игнорируй сигналы усталости.",
        "НЕ пытайся быть продуктивным 24/7."
      ],
      daily_action: "Сегодня: сделай 1 дело, которое гарантированно даёт энергию.",
      resources: [
        { type: "book", label: "📖 Эссенциализм — Грег МакКеон", url: "#" },
        { type: "technique", label: "🧘 Техника '5 минут тишины'", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Защита границ ===
    {
      id: "boundary_protocol",
      title: "🛡️ Защита границ",
      description: "Ты — страж. Твоя энергия принадлежит только тебе.",
      conditions: {
        energy_boundary: ["weak"],
        energy_drain: ["toxic", "conflict"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Укрепление границ",
      tags: ["boundaries", "energy"],
      steps: [
        "Шаг 1: Запиши 3 ситуации, где сказал 'да', хотя хотел 'нет'.",
        "Шаг 2: Подготовь 3 фразы для отказа.",
        "Шаг 3: Потренируй их с безопасным человеком.",
        "Шаг 4: Примени в реальной ситуации."
      ],
      warnings: [
        "НЕ чувствуй вину за отказ.",
        "НЕ объясняй слишком много."
      ],
      daily_action: "Сегодня: скажи 'нет' 1 просьбе, которая выматывает.",
      resources: [
        { type: "book", label: "📖 Сила границ — Кристин Мазур", url: "#" }
      ]
    }
  ]
});

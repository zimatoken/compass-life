// modules/responsibility/data/commitments.js
// ============================================================
// СИСТЕМА ОБЯЗАТЕЛЬСТВ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "responsibility",
    category: "commitments",
    version: "2.1.1",
    lang: "ru",
    title: "📋 Система обязательств",
    description: "Ты — человек слова. Обещания — это твой контракт с собой. Ты держишь слово перед другими в 7 раз лучше, чем перед собой.",
    icon: "📋",
    color: "#3b82f6"
  },

  questions: [
    // === ВОПРОС 1: Главный груз обязательств (без условий) ===
    {
      id: "commitment_type",
      type: "single",
      text: "Какие обязательства сейчас давят на тебя больше всего?",
      required: true,
      options: [
        { id: "work", label: "💼 Рабочие дедлайны", tags: ["work"] },
        { id: "family", label: "👨‍👩‍👧 Семейные обязанности", tags: ["family"] },
        { id: "personal", label: "🎯 Личные цели", tags: ["self"] },
        { id: "social", label: "🤝 Социальные обещания", tags: ["social"] }
      ]
    },

    // === ВОПРОС 2: Уровень перегруженности (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "overload",
      type: "single",
      text: "Сколько активных обязательств у тебя сейчас?",
      required: true,
      options: [
        { id: "few", label: "✅ До 5", tags: ["ok"] },
        { id: "many", label: "🟡 6–10", tags: ["busy"] },
        { id: "too_many", label: "🔴 Больше 10", tags: ["overload"] }
      ]
    },

    // === ВОПРОС 3: Система поддержки ===
    {
      id: "buddy_system",
      type: "single",
      text: "Есть ли человек, которому ты отчитываешься о прогрессе?",
      required: true,
      options: [
        { id: "yes_buddy", label: "✅ Да", tags: ["buddy"] },
        { id: "no_buddy", label: "❌ Нет", tags: ["alone"] }
      ]
    },

    // === ВОПРОС 4: Почему обещания нарушаются ===
    {
      id: "break_reason",
      type: "single",
      text: "Если ты не выполняешь обещание, почему это происходит?",
      required: true,
      options: [
        { id: "forget", label: "🧠 Забываю", tags: ["forget"] },
        { id: "overcommit", label: "📚 Переоцениваю силы", tags: ["overcommit"] },
        { id: "avoid", label: "😰 Избегаю, потому что не хочу", tags: ["avoid"] },
        { id: "distract", label: "📱 Отвлекаюсь", tags: ["distract"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Аудит обязательств ===
    {
      id: "commitment_audit",
      title: "📋 Аудит обязательств",
      description: "Ты — капитан. Пересмотри все обещания и оставь только важные.",
      conditions: {
        overload: ["many", "too_many"],
        break_reason: ["overcommit", "avoid", "distract"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Контроль над обязательствами",
      tags: ["audit", "commitments"],
      steps: [
        "Шаг 1: Запиши ВСЕ текущие обязательства.",
        "Шаг 2: Оцени каждое по важности (1–10).",
        "Шаг 3: Откажись от низкоприоритетных.",
        "Шаг 4: Пересогласуй сроки."
      ],
      warnings: [
        "НЕ бери новые обязательства.",
        "НЕ отказывайся резко."
      ],
      daily_action: "Сегодня: запиши все обязательства на бумаге.",
      resources: [
        { type: "book", label: "📖 Эссенциализм — Грег МакКеон", url: "#" },
        { type: "technique", label: "📋 Матрица Эйзенхауэра", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Система внешней отчётности ===
    {
      id: "buddy_system_solution",
      title: "👥 Система внешней отчётности",
      description: "Ты — часть команды. Найди партнёра для отчётности.",
      conditions: {
        buddy_system: ["no_buddy"],
        break_reason: ["forget", "overcommit", "avoid", "distract"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Выполнение обязательств",
      tags: ["accountability", "buddy"],
      steps: [
        "Шаг 1: Выбери 1 человека для отчётности.",
        "Шаг 2: Договоритесь о регулярных проверках.",
        "Шаг 3: Сообщи о ключевых обязательствах.",
        "Шаг 4: Отчитывайся честно."
      ],
      warnings: [
        "НЕ выбирай критика.",
        "НЕ бойся признавать ошибки."
      ],
      daily_action: "Сегодня: сообщи одному человеку о своём главном обязательстве.",
      resources: [
        { type: "book", label: "📖 Сила воли — Рой Баумайстер", url: "#" },
        { type: "technique", label: "👥 Buddy-система", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Система внешних триггеров ===
    {
      id: "trigger_system",
      title: "⏰ Система триггеров",
      description: "Ты — системный человек. Создай внешнюю систему напоминаний.",
      conditions: {
        break_reason: ["forget"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 дня",
      yield_estimate: "Ничего не забыто",
      tags: ["triggers", "system"],
      steps: [
        "Шаг 1: Установи 3 напоминания на телефон.",
        "Шаг 2: Привяжи действие к триггеру.",
        "Шаг 3: Используй стикеры на видном месте.",
        "Шаг 4: Проверяй список дел каждый вечер."
      ],
      warnings: [
        "НЕ полагайся только на память.",
        "НЕ создавай больше 5 триггеров."
      ],
      daily_action: "Сегодня: поставь 1 напоминание на самое важное дело.",
      resources: [
        { type: "technique", label: "⏰ Техника 'Если — то'", url: "#" }
      ]
    }
  ]
});

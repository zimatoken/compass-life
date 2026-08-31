// modules/habits/data/identity.js
// ============================================================
// СИСТЕМА ИДЕНТИЧНОСТИ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "identity",
    version: "2.1.1",
    lang: "ru",
    title: "🪞 Система идентичности",
    description: "Ты не бросаешь привычку. Ты становишься новым человеком.",
    icon: "🪞",
    color: "#8b5cf6"
  },

  questions: [
    // === ВОПРОС 1: Желаемая идентичность (без условий) ===
    {
      id: "desired_identity",
      type: "single",
      text: "Каким человеком ты хочешь быть через 1 год?",
      required: true,
      options: [
        { id: "athlete", label: "🏃 Спортивным и здоровым", tags: ["health"] },
        { id: "reader", label: "📚 Читающим и мыслящим", tags: ["mind"] },
        { id: "disciplined", label: "🎯 Дисциплинированным", tags: ["discipline"] },
        { id: "kind", label: "❤️ Добрым и заботливым", tags: ["relation"] },
        { id: "creator", label: "🎨 Созидающим", tags: ["creator"] }
      ]
    },

    // === ВОПРОС 2: Разрыв между текущим и желаемым (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "current_gap",
      type: "single",
      text: "Что больше всего мешает стать таким человеком?",
      required: true,
      options: [
        { id: "time", label: "⏰ Нет времени", tags: ["time"] },
        { id: "willpower", label: "😤 Нет силы воли", tags: ["will"] },
        { id: "environment", label: "🏠 Окружение", tags: ["env"] },
        { id: "unclear", label: "🌫️ Не знаю с чего начать", tags: ["start"] }
      ]
    },

    // === ВОПРОС 3: Язык идентичности ===
    {
      id: "identity_phrase",
      type: "single",
      text: "Какую фразу ты говоришь себе чаще всего?",
      required: true,
      options: [
        { id: "trying", label: "🤔 'Я пытаюсь...'", tags: ["trying"] },
        { id: "am", label: "✅ 'Я — тот, кто...'", tags: ["being"] },
        { id: "wish", label: "🌫️ 'Хотелось бы...'", tags: ["wishing"] },
        { id: "cant", label: "❌ 'Я не могу...'", tags: ["limiting"] }
      ]
    },

    // === ВОПРОС 4: Самое маленькое действие ===
    {
      id: "small_action",
      type: "single",
      text: "Какое самое маленькое действие подтверждает твою новую идентичность?",
      required: true,
      options: [
        { id: "2min", label: "⏱️ 2 минуты", tags: ["easy"] },
        { id: "15min", label: "⏰ 15 минут", tags: ["medium"] },
        { id: "30min", label: "⌛ 30 минут", tags: ["hard"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Привычка через идентичность ===
    {
      id: "identity_habit",
      title: "🧬 Привычка через идентичность",
      description: "Ты — новый человек. Меняй не действие, а представление о себе.",
      conditions: {
        identity_phrase: ["trying", "wish", "cant"],
        current_gap: ["time", "willpower", "env", "start"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "66 дней",
      yield_estimate: "Новая идентичность",
      tags: ["identity", "habit"],
      steps: [
        "Шаг 1: Сформулируй: 'Я — тот, кто...'.",
        "Шаг 2: Сделай 1 действие за 2 минуты.",
        "Шаг 3: Повторяй каждый день в одно время.",
        "Шаг 4: Отмечай прогресс в трекере."
      ],
      warnings: [
        "НЕ говори 'я пытаюсь' — говори 'я тот, кто'.",
        "НЕ пропускай 2 дня подряд."
      ],
      daily_action: "Сегодня: сделай 1 действие, подтверждающее твою новую идентичность.",
      resources: [
        { type: "book", label: "📖 Атомные привычки — Джеймс Клир", url: "#" },
        { type: "technique", label: "🧠 Привычка = Cue + Routine + Reward", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Смена языка ===
    {
      id: "language_shift",
      title: "🗣️ Смена языка",
      description: "Ты — тот, кто выбирает слова. Язык создаёт реальность.",
      conditions: {
        identity_phrase: ["trying", "wish", "cant"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 дня",
      yield_estimate: "Изменение самоощущения",
      tags: ["language", "identity"],
      steps: [
        "Шаг 1: Запиши 5 фраз, которые говоришь себе.",
        "Шаг 2: Переформулируй как 'Я — тот, кто...'.",
        "Шаг 3: Повтори их вслух 5 раз перед зеркалом.",
        "Шаг 4: Замени 1 старую фразу на новую в разговоре."
      ],
      warnings: [
        "НЕ жди мгновенного эффекта.",
        "НЕ будь слишком строг к себе."
      ],
      daily_action: "Сегодня: замени 1 фразу 'я пытаюсь' на 'я — тот, кто'.",
      resources: [
        { type: "book", label: "📖 Сила подсознания — Джо Диспенза", url: "#" }
      ]
    }
  ]
});

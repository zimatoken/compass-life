// modules/relationships/data/conflicts.js
// ============================================================
// КОНФЛИКТЫ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "conflicts",
    version: "2.1.1",
    lang: "ru",
    title: "💔 Конфликты",
    description: "Ты — дипломат. Конфликт — это не враг, а возможность стать ближе.",
    icon: "💔",
    color: "#06b6d4"
  },

  questions: [
    // === ВОПРОС 1: Частота конфликтов (без условий) ===
    {
      id: "conflict_freq",
      type: "single",
      text: "Как часто у тебя возникают конфликты?",
      required: true,
      options: [
        { id: "rare", label: "🕊️ Редко", tags: ["low"] },
        { id: "sometimes", label: "🌤️ Иногда", tags: ["mid"] },
        { id: "often", label: "⛈️ Часто", tags: ["high"] }
      ]
    },

    // === ВОПРОС 2: Реакция на конфликт (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "conflict_style",
      type: "single",
      text: "Как ты обычно реагируешь на конфликт?",
      required: true,
      options: [
        { id: "avoid", label: "🏃 Ухожу — избегаю", tags: ["avoid"] },
        { id: "attack", label: "⚔️ Нападаю — защищаюсь через агрессию", tags: ["attack"] },
        { id: "freeze", label: "🧊 Замираю — теряюсь", tags: ["freeze"] },
        { id: "solve", label: "🤝 Ищу решение — конструктивно", tags: ["solve"] }
      ]
    },

    // === ВОПРОС 3: Цель в конфликте ===
    {
      id: "conflict_goal",
      type: "single",
      text: "Чего ты чаще всего хочешь от конфликта?",
      required: true,
      options: [
        { id: "win", label: "🏆 Победить", tags: ["win"] },
        { id: "peace", label: "🕊️ Помириться", tags: ["peace"] },
        { id: "understand", label: "🧠 Понять другого", tags: ["understand"] },
        { id: "avoid_pain", label: "😰 Избежать боли", tags: ["avoid_pain"] }
      ]
    },

    // === ВОПРОС 4: После конфликта ===
    {
      id: "conflict_recovery",
      type: "single",
      text: "Что ты обычно делаешь после конфликта?",
      required: true,
      options: [
        { id: "ruminate", label: "🔄 Долго прокручиваю в голове", tags: ["ruminate"] },
        { id: "talk", label: "🗣️ Обсуждаю с кем-то", tags: ["talk"] },
        { id: "cool_down", label: "🧘 Беру паузу, успокаиваюсь", tags: ["cool"] },
        { id: "ignore", label: "🚫 Делаю вид, что ничего не было", tags: ["ignore"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Навык конфликта ===
    {
      id: "conflict_skill",
      title: "🛡️ Навык конфликта",
      description: "Ты — дипломат. Конфликт — не враг, а возможность для роста.",
      conditions: {
        conflict_freq: ["sometimes", "often"],
        conflict_style: ["avoid", "attack", "freeze"],
        conflict_goal: ["win", "avoid_pain"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Конструктивные конфликты",
      tags: ["conflict", "skill"],
      steps: [
        "Шаг 1: Сделай паузу 10 секунд перед реакцией.",
        "Шаг 2: Скажи: 'Я чувствую... когда... потому что...'.",
        "Шаг 3: Слушай позицию другого до конца.",
        "Шаг 4: Ищи общую цель, а не победу."
      ],
      warnings: [
        "НЕ обвиняй ('ты всегда...').",
        "НЕ уходи, не сказав, когда вернёшься."
      ],
      daily_action: "Сегодня: примени формулу 'Я чувствую...' в любом разговоре.",
      resources: [
        { type: "book", label: "📖 Ненасильственное общение — Маршалл Розенберг", url: "#" },
        { type: "technique", label: "🛡️ Пауза 10 секунд", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Осознанная реакция ===
    {
      id: "conscious_reaction",
      title: "🧘 Осознанная реакция",
      description: "Ты — наблюдатель. Ты не обязан реагировать сразу. Ты можешь выбрать ответ.",
      conditions: {
        conflict_style: ["freeze", "avoid"],
        conflict_recovery: ["ruminate", "ignore"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Спокойствие и уверенность",
      tags: ["mindful", "reaction"],
      steps: [
        "Шаг 1: Замечай момент, когда хочешь убежать.",
        "Шаг 2: Сделай глубокий вдох и скажи: 'Мне нужно 10 секунд'.",
        "Шаг 3: Спроси себя: 'Чего я хочу от этого разговора?'.",
        "Шаг 4: Выбери ответ, а не реакцию."
      ],
      warnings: [
        "НЕ вини себя за то, что замираешь.",
        "НЕ бойся попросить время подумать."
      ],
      daily_action: "Сегодня: в сложном разговоре возьми паузу на 10 секунд.",
      resources: [
        { type: "book", label: "📖 Сила присутствия — Экхарт Толле", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Восстановление после конфликта ===
    {
      id: "conflict_recovery_protocol",
      title: "🔄 Протокол восстановления",
      description: "Ты — миротворец. Важно, что ты делаешь после конфликта.",
      conditions: {
        conflict_recovery: ["ruminate", "talk", "ignore"],
        conflict_freq: ["sometimes", "often"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 месяц",
      yield_estimate: "Спокойствие после конфликтов",
      tags: ["recovery", "peace"],
      steps: [
        "Шаг 1: Возьми 10 минут тишины.",
        "Шаг 2: Запиши, что чувствуешь, на бумаге.",
        "Шаг 3: Обсуди с безопасным человеком.",
        "Шаг 4: Вернись к разговору, когда оба успокоитесь."
      ],
      warnings: [
        "НЕ прокручивай конфликт неделями.",
        "НЕ делай вид, что ничего не было."
      ],
      daily_action: "Сегодня: после конфликта выдели 10 минут на восстановление.",
      resources: [
        { type: "book", label: "📖 Простить себя — Беверли Флудингтон", url: "#" },
        { type: "technique", label: "📝 Дневник эмоций", url: "#" }
      ]
    }
  ]
});

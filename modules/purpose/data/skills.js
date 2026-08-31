// modules/purpose/data/skills.js
// ============================================================
// КАРТА НАВЫКОВ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "skills",
    version: "2.1.1",
    lang: "ru",
    title: "🛠️ Карта навыков",
    description: "Ты — не сумма того, что умеешь. Ты — то, как ты применяешь свои дары.",
    icon: "🛠️",
    color: "#f43f5e"
  },

  questions: [
    // === ВОПРОС 1: Главный дар (без условий) ===
    {
      id: "top_skill",
      type: "single",
      text: "Что из этого ты делаешь лучше 80% людей?",
      required: true,
      options: [
        { id: "communication", label: "🗣️ Общение и переговоры", tags: ["soft"] },
        { id: "tech", label: "💻 Технические навыки", tags: ["hard"] },
        { id: "creative", label: "✨ Креативность", tags: ["creative"] },
        { id: "organization", label: "📋 Организация и управление", tags: ["mgmt"] }
      ]
    },

    // === ВОПРОС 2: Уровень мастерства (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "skill_level",
      type: "single",
      text: "Насколько ты уверен в этом навыке?",
      required: true,
      options: [
        { id: "expert", label: "⭐ Эксперт — меня зовут, когда что-то сложное", tags: ["expert"] },
        { id: "advanced", label: "📈 Продвинутый — делаю сложные вещи уверенно", tags: ["advanced"] },
        { id: "intermediate", label: "📚 Средний — могу, но не без усилий", tags: ["mid"] }
      ]
    },

    // === ВОПРОС 3: Готовность к монетизации (условие: только эксперты и продвинутые) ===
    {
      id: "monetize_ready",
      type: "single",
      text: "Готов ли ты продавать этот навык?",
      required: true,
      conditions: { skill_level: ["expert", "advanced"] },
      options: [
        { id: "yes_sell", label: "✅ Да, я готов монетизировать", tags: ["sell"] },
        { id: "not_yet", label: "😐 Пока нет — хочу прокачаться", tags: ["grow"] },
        { id: "no_want", label: "❌ Не хочу продавать — это моё личное", tags: ["keep"] }
      ]
    },

    // === ВОПРОС 4: Стиль обучения (без условий) ===
    {
      id: "learning_style",
      type: "single",
      text: "Как ты лучше всего учишься?",
      required: true,
      options: [
        { id: "visual", label: "👁️ Визуально (схемы, видео)", tags: ["visual"] },
        { id: "audio", label: "🎧 На слух (подкасты, лекции)", tags: ["audio"] },
        { id: "practice", label: "✋ Практически (делаю руками)", tags: ["kinesthetic"] },
        { id: "read", label: "📖 Через чтение (книги, статьи)", tags: ["read"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Монетизация экспертизы ===
    {
      id: "monetize_expert",
      title: "💎 Монетизация экспертизы",
      description: "Ты — эксперт. Люди платят за твой опыт, а не за время. Время выходить из тени.",
      conditions: {
        skill_level: ["expert"],
        monetize_ready: ["yes_sell"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 месяца",
      yield_estimate: "Первый доход от навыка",
      tags: ["monetize", "expert"],
      steps: [
        "Шаг 1: Оформи свою экспертизу в продукт.",
        "Шаг 2: Создай 3 бесплатных материала.",
        "Шаг 3: Запусти личный бренд в соцсетях.",
        "Шаг 4: Получи первого платного клиента."
      ],
      warnings: [
        "НЕ занижай цену.",
        "НЕ бери больше 3 клиентов на старте."
      ],
      daily_action: "Сегодня: напиши пост о своём главном навыке.",
      resources: [
        { type: "book", label: "📖 Expert — Брендон Бёрчард", url: "#" },
        { type: "book", label: "📖 Продай свой гений — Майкл Мастерсон", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Прокачка до эксперта ===
    {
      id: "level_up",
      title: "📈 Прокачка до эксперта",
      description: "Ты — ученик. Хорошая база есть. Осталось 1000 часов целенаправленной практики.",
      conditions: {
        skill_level: ["advanced", "intermediate"],
        monetize_ready: ["grow"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "6–18 месяцев",
      yield_estimate: "Уровень эксперта",
      tags: ["growth", "practice"],
      steps: [
        "Шаг 1: Найди ментора или запишись на курс.",
        "Шаг 2: Практикуй 1 час в день.",
        "Шаг 3: Получай обратную связь.",
        "Шаг 4: Делись прогрессом публично."
      ],
      warnings: [
        "НЕ перепрыгивай через основы.",
        "НЕ учи теорию без практики."
      ],
      daily_action: "Сегодня: потрать 1 час на целенаправленную практику.",
      resources: [
        { type: "book", label: "📖 На вырост — Кэрол Двек", url: "#" },
        { type: "book", label: "📖 Мастерство — Джордж Леонард", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Научиться учиться ===
    {
      id: "learn_to_learn",
      title: "🧠 Научиться учиться",
      description: "Ты — ученик, который учится учиться. Это самый важный навык.",
      conditions: {
        skill_level: ["intermediate"],
        monetize_ready: ["not_yet", "no_want"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Ускоренное обучение",
      tags: ["learning", "growth"],
      steps: [
        "Шаг 1: Выбери 1 навык для изучения.",
        "Шаг 2: Используй технику Фейнмана.",
        "Шаг 3: Применяй интервальное повторение.",
        "Шаг 4: Обучай другого."
      ],
      warnings: [
        "НЕ пытайся выучить всё сразу.",
        "НЕ учи без практики."
      ],
      daily_action: "Сегодня: объясни вслух, что ты учишь, простыми словами.",
      resources: [
        { type: "book", label: "📖 Как учиться — Барбара Оакли", url: "#" },
        { type: "book", label: "📖 Глубокая работа — Кэл Ньюпорт", url: "#" }
      ]
    }
  ]
});

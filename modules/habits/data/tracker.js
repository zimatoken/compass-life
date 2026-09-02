// modules/habits/data/tracker.js
// ============================================================
// ТРЕКЕР ПРИВЫЧЕК — КАК ОТСЛЕЖИВАТЬ И УКРЕПЛЯТЬ ПРИВЫЧКИ v3.0
// ============================================================
// Структура: 5 вопросов, 6 решений (включая fallback)
// Глубинный вопрос: готовность вести учёт ежедневно
// Follow-up: проверка ведения трекера через неделю
// Identity: "Ты — архитектор своих привычек"
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "tracker",
    version: "3.0.0",
    lang: "ru",
    title: "📊 Трекер привычек",
    description: "То, что измеряется — улучшается. Найди свой способ отслеживать прогресс и не сдаваться.",
    icon: "📊",
    color: "#8b5cf6",
    identity_anchor: "Ты — архитектор своих привычек"
  },

  questions: [
    // === ВОПРОС 1: Отношение к трекингу (без условий) ===
    {
      id: "tracking_feeling",
      type: "single",
      text: "Как ты относишься к отслеживанию привычек?",
      required: true,
      options: [
        { id: "love",    label: "❤️ Люблю видеть прогресс", tags: ["love"] },
        { id: "curious", label: "🤔 Интересно, но не пробовал", tags: ["curious"] },
        { id: "lazy",    label: "😴 Лень — забываю отмечать", tags: ["lazy"] },
        { id: "useless", label: "🧐 Считаю бесполезным", tags: ["useless"] }
      ]
    },

    // === ВОПРОС 2: Какой формат трекинга ближе (зависит от 1) ===
    {
      id: "tracking_format",
      type: "single",
      text: "Какой способ отслеживания тебе был бы удобен?",
      required: true,
      conditions: { tracking_feeling: ["love", "curious", "lazy", "useless"] },
      options: [
        { id: "paper",    label: "📓 Бумажный дневник / календарь", tags: ["paper"] },
        { id: "app",      label: "📱 Приложение на телефоне", tags: ["app"] },
        { id: "social",   label: "👥 Отслеживание с кем-то (партнёр, группа)", tags: ["social"] },
        { id: "digital",  label: "💻 Таблица / Notion / Excel", tags: ["digital"] },
        { id: "simple",   label: "✅ Простой чек-лист (галочка)", tags: ["simple"] }
      ]
    },

    // === ВОПРОС 3: Сложности в трекинге (без условий, но иерархия) ===
    {
      id: "tracking_challenge",
      type: "single",
      text: "Что для тебя самое сложное в отслеживании привычек?",
      required: true,
      options: [
        { id: "forget",    label: "⏰ Забываю отмечать", tags: ["forget"] },
        { id: "demotivate", label: "😔 Если вижу пропуски, падает мотивация", tags: ["demotivate"] },
        { id: "inconsistent", label: "🔄 Не могу делать стабильно", tags: ["inconsistent"] },
        { id: "easy",      label: "✅ Для меня нет сложностей", tags: ["easy"] }
      ]
    },

    // === ВОПРОС 4: ГЛУБИННЫЙ — готовность вести ежедневно ===
    {
      id: "deep_tracking_sacrifice",
      type: "single",
      text: "Готов ли ты уделять 2 минуты в день на отметку привычек, даже если очень устал?",
      required: true,
      conditions: { tracking_format: ["paper", "app", "social", "digital", "simple"] },
      options: [
        { id: "yes_commit", label: "✅ Да, это часть процесса", tags: ["committed"] },
        { id: "yes_try",    label: "🤔 Постараюсь, но не уверен", tags: ["uncertain"] },
        { id: "no",         label: "❌ Нет, это лишняя нагрузка", tags: ["blocked"] }
      ]
    },

    // === ВОПРОС 5: FOLLOW-UP ===
    {
      id: "follow_up_tracking",
      type: "single",
      text: "Через неделю я спрошу, сколько дней ты вёл трекер. Что ответишь?",
      required: true,
      conditions: { deep_tracking_sacrifice: ["yes_commit", "yes_try", "no"] },
      options: [
        { id: "ready",      label: "🚀 Начну сегодня", tags: ["ready"] },
        { id: "thinking",   label: "🤔 Подумаю", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 Боюсь, что не выдержу", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: БУМАЖНЫЙ ТРЕКЕР ===
    {
      id: "tracking_paper",
      title: "📓 Бумажный дневник",
      description: "Ты — тактильный человек. Записывать рукой — значит проживать. Это создаёт якорь.",
      conditions: {
        tracking_format: ["paper"],
        tracking_challenge: ["forget", "inconsistent"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "7 дней трекинга и первый график",
      tags: ["paper", "habit", "anchor"],
      steps: [
        "Возьми блокнот и каждый вечер ставь галочку или пиши 1 слово о привычке.",
        "Держи блокнот на видном месте — у кровати, на столе.",
        "Если пропустил — не ругай себя, просто отметь пропуск.",
        "Через 7 дней перечитай — увидишь свой ритм."
      ],
      warnings: [
        "НЕ используй телефон — бумага даёт особое чувство завершённости.",
        "НЕ делай сложные записи — достаточно галочки."
      ],
      daily_action: "Сегодня: подготовь блокнот и поставь первую галочку.",
      resources: [
        { type: "book", label: "📖 Джеймс Клир — Атомные привычки", url: "#" },
        { type: "technique", label: "🧘 Ритуал вечерней отметки", url: "#" }
      ],
      follow_up: {
        question: "Ты вёл бумажный трекер. Сколько дней из 7 отметил?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты создал физическую привычку." }
      }
    },

    // === РЕШЕНИЕ 2: МОБИЛЬНОЕ ПРИЛОЖЕНИЕ ===
    {
      id: "tracking_app",
      title: "📱 Приложение для привычек",
      description: "Ты всегда с телефоном, значит трекер всегда с тобой. Используй технологии в свою пользу.",
      conditions: {
        tracking_format: ["app"],
        tracking_challenge: ["forget", "demotivate"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Привычка отмечать в приложении",
      tags: ["app", "digital", "motivation"],
      steps: [
        "Установи простое приложение (Habitica, Loop, Daylio или любой другой).",
        "Настрой напоминание на одно и то же время (например, 21:00).",
        "Отмечай привычки, даже если не выполнил — отмечай пропуск.",
        "Смотри статистику раз в 3 дня — это мотивирует."
      ],
      warnings: [
        "НЕ устанавливай 5 приложений — выбери одно.",
        "НЕ игнорируй уведомления — это твой помощник."
      ],
      daily_action: "Сегодня: скачай и настрой одно приложение для трекинга.",
      resources: [
        { type: "link", label: "🔗 Habitica — игровой трекер", url: "#" },
        { type: "link", label: "🔗 Loop — простой трекер", url: "#" }
      ],
      follow_up: {
        question: "Ты использовал приложение. Сколько дней отмечал?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты встроил трекер в цифровую жизнь." }
      }
    },

    // === РЕШЕНИЕ 3: СОЦИАЛЬНЫЙ ТРЕКИНГ ===
    {
      id: "tracking_social",
      title: "👥 Трекер с поддержкой",
      description: "Ты — социальное существо. Совместный трекинг даёт ответственность и поддержку.",
      conditions: {
        tracking_format: ["social"],
        tracking_challenge: ["forget", "demotivate"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Поддержка и регулярность",
      tags: ["social", "support", "accountability"],
      steps: [
        "Найди партнёра или группу для трекинга (друг, чат, клуб).",
        "Договоритесь отмечать привычки друг у друга (например, в мессенджере).",
        "Каждый день пишите друг другу отчёт или ставьте +.",
        "Обсуждайте успехи и сложности раз в неделю."
      ],
      warnings: [
        "НЕ выбирай токсичного партнёра — ищи поддерживающего.",
        "НЕ сравнивай свои результаты с чужими."
      ],
      daily_action: "Сегодня: напиши 1 человеку и предложи совместный трекинг.",
      resources: [
        { type: "book", label: "📖 Чарльз Духигг — Сила привычки", url: "#" },
        { type: "technique", label: "🧘 Партнёрский чекап", url: "#" }
      ],
      follow_up: {
        question: "Ты трекал с партнёром. Сколько дней отметил?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты создал систему взаимопомощи." }
      }
    },

    // === РЕШЕНИЕ 4: ЦИФРОВАЯ ТАБЛИЦА (EXCEL/NOTION) ===
    {
      id: "tracking_digital",
      title: "💻 Таблица прогресса",
      description: "Ты любишь порядок и аналитику. Таблица даст тебе ясность и наглядность.",
      conditions: {
        tracking_format: ["digital"],
        tracking_challenge: ["forget", "inconsistent"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 неделя",
      yield_estimate: "График привычек и аналитика",
      tags: ["digital", "data", "analytics"],
      steps: [
        "Создай таблицу (Google Sheets, Excel, Notion) с колонками: дата, привычка, отметка.",
        "Вноси данные каждый день (можно по утрам).",
        "Построй простой график или используй условное форматирование.",
        "Через 7 дней посмотри тренды."
      ],
      warnings: [
        "НЕ усложняй — достаточно 1 таблицы на все привычки.",
        "НЕ забрасывай — таблица должна быть лёгкой."
      ],
      daily_action: "Сегодня: создай таблицу и внеси первую запись.",
      resources: [
        { type: "link", label: "🔗 Шаблон трекера в Notion", url: "#" },
        { type: "technique", label: "🧘 Метод 'Don't break the chain'", url: "#" }
      ],
      follow_up: {
        question: "Ты вёл таблицу. Сколько дней заполнял?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 У тебя теперь есть данные о себе." }
      }
    },

    // === РЕШЕНИЕ 5: ПРОСТОЙ ЧЕК-ЛИСТ ===
    {
      id: "tracking_simple",
      title: "✅ Чек-лист на каждый день",
      description: "Ты ценишь простоту. Чек-лист — самый быстрый способ не забыть о привычках.",
      conditions: {
        tracking_format: ["simple"],
        tracking_challenge: ["forget", "easy"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Ежедневная ясность",
      tags: ["checklist", "simple", "quick"],
      steps: [
        "На листе бумаги или в заметках напиши список привычек на день.",
        "Каждый день ставь галочку напротив выполненных.",
        "Вечером подведи итог: сколько галочек.",
        "Через неделю заметишь, как стало проще."
      ],
      warnings: [
        "НЕ пиши больше 5 привычек — иначе сложно.",
        "НЕ пропускай дни — даже одна галочка считается."
      ],
      daily_action: "Сегодня: напиши чек-лист на завтра (3–5 пунктов).",
      resources: [
        { type: "book", label: "📖 Дэвид Аллен — GTD", url: "#" },
        { type: "technique", label: "🧘 Ежедневный обзор", url: "#" }
      ],
      follow_up: {
        question: "Ты использовал чек-лист. Сколько дней ставил галочки?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты упростил свою жизнь." }
      }
    },

    // === РЕШЕНИЕ 6: FALLBACK — НАЧНИ С МАЛОГО ===
    {
      id: "tracking_start",
      title: "🌱 Первый шаг",
      description: "Любой трекинг начинается с одного действия. Не обязательно сразу внедрять систему.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Сегодня",
      yield_estimate: "Первая отметка",
      tags: ["start", "first", "action"],
      steps: [
        "Выбери 1 привычку, которую хочешь отслеживать.",
        "Придумай, как будешь отмечать (бумага, заметка, календарь).",
        "Сделай первую отметку сегодня вечером.",
        "Повтори завтра — почувствуй лёгкость."
      ],
      warnings: [
        "НЕ усложняй — одна привычка, одна отметка.",
        "НЕ бойся пропусков — продолжай после."
      ],
      daily_action: "Сегодня: выбери 1 привычку и сделай первую отметку.",
      resources: [
        { type: "book", label: "📖 Джеймс Клир — Атомные привычки", url: "#" },
        { type: "technique", label: "🧘 Правило 2 минут", url: "#" }
      ],
      follow_up: {
        question: "Ты начал трекинг. Сколько дней за неделю отметил?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты начал путь осознанности." }
      }
    }
  ]
});

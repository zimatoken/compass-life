// modules/responsibility/data/discipline.js
// ============================================================
// ДИСЦИПЛИНА — КАК РАЗВИТЬ САМОДИСЦИПЛИНУ И САМОКОНТРОЛЬ v3.0
// ============================================================
// Структура: 5 вопросов, 6 решений (включая fallback)
// Глубинный вопрос: готовность к режиму
// Follow-up: проверка выполнения режима через неделю
// Identity: "Ты — хозяин своих действий"
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "responsibility",
    category: "discipline",
    version: "3.0.0",
    lang: "ru",
    title: "🎯 Дисциплина",
    description: "Дисциплина — это не ограничение, а свобода. Научись управлять собой, чтобы достигать целей.",
    icon: "🎯",
    color: "#3b82f6",
    identity_anchor: "Ты — хозяин своих действий"
  },

  questions: [
    // === ВОПРОС 1: Отношение к дисциплине (без условий) ===
    {
      id: "discipline_attitude",
      type: "single",
      text: "Как ты относишься к самодисциплине?",
      required: true,
      options: [
        { id: "weak",      label: "😅 Мне сложно себя контролировать", tags: ["weak"] },
        { id: "medium",    label: "🤔 Иногда получается, иногда нет", tags: ["medium"] },
        { id: "strong",    label: "💪 У меня хорошая дисциплина", tags: ["strong"] },
        { id: "no_need",   label: "🌫️ Считаю, что дисциплина не нужна", tags: ["no_need"] }
      ]
    },

    // === ВОПРОС 2: Что мешает дисциплине (зависит от 1) ===
    {
      id: "discipline_block",
      type: "single",
      text: "Что чаще всего мешает тебе быть дисциплинированным?",
      required: true,
      conditions: { discipline_attitude: ["weak", "medium", "strong", "no_need"] },
      options: [
        { id: "procrastination", label: "⏳ Прокрастинация, откладываю", tags: ["procrastination"] },
        { id: "distractions",    label: "📱 Отвлекающие факторы (телефон, соцсети)", tags: ["distractions"] },
        { id: "fatigue",         label: "😴 Усталость, не хватает энергии", tags: ["fatigue"] },
        { id: "no_goal",         label: "🎯 Нет чёткой цели", tags: ["no_goal"] },
        { id: "no_problem",      label: "✅ Мне ничего не мешает", tags: ["no_problem"] }
      ]
    },

    // === ВОПРОС 3: Предпочтение в методах (без условий, иерархия) ===
    {
      id: "discipline_method",
      type: "single",
      text: "Какой способ укрепления дисциплины тебе ближе?",
      required: true,
      options: [
        { id: "routine",    label: "📅 Строгий распорядок дня", tags: ["routine"] },
        { id: "reward",     label: "🎁 Система наград и поощрений", tags: ["reward"] },
        { id: "accountability", label: "👥 Отчётность перед другими", tags: ["accountability"] },
        { id: "mindfulness", label: "🧘 Осознанность и медитация", tags: ["mindfulness"] },
        { id: "small_steps", label: "🐢 Маленькие шаги, постепенность", tags: ["small_steps"] }
      ]
    },

    // === ВОПРОС 4: ГЛУБИННЫЙ — готовность к режиму ===
    {
      id: "deep_discipline_sacrifice",
      type: "single",
      text: "Готов ли ты соблюдать строгий режим в течение 7 дней, даже если это неудобно?",
      required: true,
      conditions: { discipline_method: ["routine", "reward", "accountability", "mindfulness", "small_steps"] },
      options: [
        { id: "yes",    label: "✅ Да, я готов", tags: ["committed"] },
        { id: "maybe",  label: "🤔 Постараюсь", tags: ["uncertain"] },
        { id: "no",     label: "❌ Нет, это слишком жестко", tags: ["blocked"] }
      ]
    },

    // === ВОПРОС 5: FOLLOW-UP ===
    {
      id: "follow_up_discipline",
      type: "single",
      text: "Через неделю я спрошу, как ты соблюдал режим. Что ответишь?",
      required: true,
      conditions: { deep_discipline_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 Начну сегодня", tags: ["ready"] },
        { id: "thinking",   label: "🤔 Подумаю", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 Боюсь, что не выдержу", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: РАСПОРЯДОК ДНЯ ===
    {
      id: "discipline_routine",
      title: "📅 Режим и расписание",
      description: "Ты — архитектор дня. Чёткий распорядок снижает нагрузку на силу воли и делает действия автоматическими.",
      conditions: {
        discipline_method: ["routine"],
        discipline_block: ["procrastination", "distractions"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Стабильный распорядок дня",
      tags: ["routine", "schedule", "structure"],
      steps: [
        "Запиши все дела на день, разбив их по часам.",
        "Выдели блоки: работа, отдых, еда, сон.",
        "Начинай и заканчивай дела в одно и то же время каждый день.",
        "Придерживайся расписания 7 дней — это войдёт в привычку."
      ],
      warnings: [
        "НЕ перегружай расписание — оставь время на непредвиденное.",
        "НЕ бросай после одного сбоя — продолжай на следующий день."
      ],
      daily_action: "Сегодня: составь расписание на завтра с точностью до 30 минут.",
      resources: [
        { type: "book", label: "📖 Дэвид Аллен — GTD", url: "#" },
        { type: "technique", label: "🧘 Метод блокировки времени (Time Blocking)", url: "#" }
      ],
      follow_up: {
        question: "Ты вёл расписание. Сколько дней из 7 придерживался?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты создал ритм, который работает." }
      }
    },

    // === РЕШЕНИЕ 2: СИСТЕМА НАГРАД ===
    {
      id: "discipline_reward",
      title: "🎁 Награды за действия",
      description: "Ты — дрессировщик своего мозга. Награждай себя за выполнение задач, и дисциплина станет приятной.",
      conditions: {
        discipline_method: ["reward"],
        discipline_block: ["procrastination", "fatigue"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Повышение мотивации",
      tags: ["reward", "motivation", "dopamine"],
      steps: [
        "На каждую сложную задачу назначь маленькую награду (серия, конфета, 10 минут отдыха).",
        "Получай награду только после выполнения задачи.",
        "Веди дневник наград.",
        "Через неделю заметишь, что ждёшь задачи, чтобы получить награду."
      ],
      warnings: [
        "НЕ давай награду без выполнения.",
        "НЕ делай награду слишком большой — она должна быть соразмерна."
      ],
      daily_action: "Сегодня: выбери 3 задачи и назначь им награды.",
      resources: [
        { type: "book", label: "📖 Джеймс Клир — Атомные привычки", url: "#" },
        { type: "technique", label: "🧘 Метод «сделал-получил»", url: "#" }
      ],
      follow_up: {
        question: "Ты использовал награды. Сколько задач выполнил за неделю?",
        options: ["0", "1–5", "6–10", "Более 10"],
        reward: { "Более 10": "🔥 Ты превратил дисциплину в игру." }
      }
    },

    // === РЕШЕНИЕ 3: ОТЧЁТНОСТЬ ПЕРЕД ДРУГИМИ ===
    {
      id: "discipline_accountability",
      title: "👥 Отчётность и поддержка",
      description: "Ты — социальное существо. Когда ты отчитываешься перед другими, дисциплина становится легче.",
      conditions: {
        discipline_method: ["accountability"],
        discipline_block: ["procrastination", "distractions"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Поддержка и регулярность",
      tags: ["accountability", "support", "commitment"],
      steps: [
        "Найди партнёра или чат для ежедневного отчёта.",
        "Каждый день пиши, что сделал (или не сделал).",
        "Проводи еженедельные созвоны для обсуждения прогресса.",
        "Отмечай успехи вместе."
      ],
      warnings: [
        "НЕ выбирай токсичного партнёра — он должен поддерживать.",
        "НЕ бойся признавать неудачи — это часть пути."
      ],
      daily_action: "Сегодня: напиши 1 человеку и предложи совместный трекинг дисциплины.",
      resources: [
        { type: "book", label: "📖 Маршалл Голдсмит — Триггеры", url: "#" },
        { type: "technique", label: "🧘 Ежедневный чек-ин с партнёром", url: "#" }
      ],
      follow_up: {
        question: "Ты отчитывался перед партнёром. Сколько дней отчитывался?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты создал систему внешней ответственности." }
      }
    },

    // === РЕШЕНИЕ 4: ОСОЗНАННОСТЬ ===
    {
      id: "discipline_mindfulness",
      title: "🧘 Осознанная дисциплина",
      description: "Дисциплина начинается с внимания. Научись замечать свои импульсы и выбирать реакцию.",
      conditions: {
        discipline_method: ["mindfulness"],
        discipline_block: ["fatigue", "distractions"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 недели",
      yield_estimate: "Умение управлять вниманием",
      tags: ["mindfulness", "focus", "self_control"],
      steps: [
        "Ежедневно медитируй 5–10 минут (наблюдай за дыханием).",
        "В моменты отвлечения останавливайся и спрашивай: «Что я сейчас делаю?»",
        "Возвращай внимание к задаче без осуждения.",
        "Записывай, сколько раз ты смог переключить внимание."
      ],
      warnings: [
        "НЕ жди мгновенных результатов — навык нарабатывается.",
        "НЕ критикуй себя за отвлечения — это нормально."
      ],
      daily_action: "Сегодня: проведи 5-минутную медитацию и запиши ощущения.",
      resources: [
        { type: "book", label: "📖 Экарт Толле — Сила настоящего", url: "#" },
        { type: "technique", label: "🧘 Сканирование тела", url: "#" }
      ],
      follow_up: {
        question: "Ты практиковал осознанность. Сколько дней медитировал?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты укрепил мышцу внимания." }
      }
    },

    // === РЕШЕНИЕ 5: МАЛЕНЬКИЕ ШАГИ ===
    {
      id: "discipline_small_steps",
      title: "🐢 Постепенность и маленькие шаги",
      description: "Дисциплина — это не рывок, а марафон. Начни с малого и наращивай темп.",
      conditions: {
        discipline_method: ["small_steps"],
        discipline_block: ["procrastination", "fatigue"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Устойчивая привычка",
      tags: ["small_steps", "gradual", "sustainable"],
      steps: [
        "Выбери 1 привычку, которую хочешь внедрить.",
        "Выполняй её по 2 минуты в день — не больше.",
        "Каждые 3 дня добавляй по 2 минуты.",
        "Через месяц ты будешь заниматься по 20 минут без усилий."
      ],
      warnings: [
        "НЕ пытайся сделать больше, чем запланировано — это нарушит систему.",
        "НЕ пропускай дни — даже 2 минуты важны."
      ],
      daily_action: "Сегодня: выбери привычку и сделай её 2 минуты.",
      resources: [
        { type: "book", label: "📖 Джеймс Клир — Атомные привычки", url: "#" },
        { type: "technique", label: "🧘 Правило 2 минут", url: "#" }
      ],
      follow_up: {
        question: "Ты двигался маленькими шагами. Сколько дней практиковал?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты уже начал путь к большой дисциплине." }
      }
    },

    // === РЕШЕНИЕ 6: FALLBACK ===
    {
      id: "discipline_start",
      title: "🌱 Начало дисциплины",
      description: "Дисциплина начинается с одного действия. Не нужно всё сразу, начни с малого.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Сегодня",
      yield_estimate: "Первое действие",
      tags: ["start", "action", "first"],
      steps: [
        "Выбери одно действие, которое приблизит тебя к цели.",
        "Сделай его прямо сейчас.",
        "Запиши, что ты это сделал.",
        "Завтра повтори."
      ],
      warnings: [
        "НЕ выбирай сложное действие — начни с простого.",
        "НЕ жди идеального момента — он сейчас."
      ],
      daily_action: "Сегодня: сделай одно маленькое дело, которое ты откладывал.",
      resources: [
        { type: "book", label: "📖 Брайан Трейси — Съешь лягушку", url: "#" },
        { type: "technique", label: "🧘 Правило 5 секунд", url: "#" }
      ],
      follow_up: {
        question: "Ты начал путь дисциплины. Сколько действий совершил за неделю?",
        options: ["0", "1–3", "4–7", "Более 7"],
        reward: { "Более 7": "🔥 Ты уже на пути." }
      }
    }
  ]
});

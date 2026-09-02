// modules/purpose/data/calling.js
// ============================================================
// ПРИЗВАНИЕ — ТАЛАНТЫ, ПОТОК И ЭНЕРГИЯ v3.0
// ============================================================
// Структура: 5 вопросов, 6 решений (включая fallback)
// Глубинный вопрос: готовность практиковать без оплаты
// Follow-up: проверка действий через неделю
// Identity: "Ты — носитель призвания"
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "calling",
    version: "3.0.0",
    lang: "ru",
    title: "💎 Призвание",
    description: "Ты — не случайность. У тебя есть дар, который ждёт, чтобы его проявили. Давай найдём твой поток.",
    icon: "💎",
    color: "#f43f5e",
    identity_anchor: "Ты — носитель призвания"
  },

  questions: [
    // === ВОПРОС 1: Что даётся легко (без условий) ===
    {
      id: "natural_talent",
      type: "single",
      text: "Что тебе легко даётся, а другим кажется сложным?",
      required: true,
      options: [
        { id: "logic",    label: "🧠 Логика, анализ, числа", tags: ["logic"] },
        { id: "words",    label: "✍️ Слова, письмо, рассказы", tags: ["words"] },
        { id: "people",   label: "🤝 Общение, эмпатия, поддержка", tags: ["people"] },
        { id: "art",      label: "🎨 Творчество, интуиция, образы", tags: ["art"] },
        { id: "organize", label: "📊 Организация, планирование, системы", tags: ["organize"] },
        { id: "hands",    label: "🔨 Работа руками, ремонт, готовка", tags: ["hands"] },
        { id: "unknown",  label: "🌫️ Не знаю / никто не говорил", tags: ["unknown"] }
      ]
    },

    // === ВОПРОС 2: Состояние потока (зависит от 1) ===
    {
      id: "flow_activity",
      type: "single",
      text: "В чём ты теряешь счёт времени, погружаясь в процесс?",
      required: true,
      conditions: { natural_talent: ["logic", "words", "people", "art", "organize", "hands", "unknown"] },
      options: [
        { id: "flow_solving", label: "🧩 Решаю сложную задачу", tags: ["solving"] },
        { id: "flow_creating", label: "🎨 Создаю что-то новое (текст, дизайн, музыку)", tags: ["creating"] },
        { id: "flow_teaching", label: "👩‍🏫 Объясняю что-то другому", tags: ["teaching"] },
        { id: "flow_building", label: "🔨 Строю, мастерю, готовлю", tags: ["building"] },
        { id: "flow_planning", label: "📅 Планирую, организую, систематизирую", tags: ["planning"] },
        { id: "flow_helping", label: "🤝 Помогаю, слушаю, поддерживаю", tags: ["helping"] }
      ]
    },

    // === ВОПРОС 3: За что благодарят (зависит от 2) ===
    {
      id: "thanks_reason",
      type: "single",
      text: "За что тебя чаще всего благодарят окружающие?",
      required: true,
      conditions: { flow_activity: ["flow_solving", "flow_creating", "flow_teaching", "flow_building", "flow_planning", "flow_helping"] },
      options: [
        { id: "thank_clear",    label: "🧼 За ясность и порядок", tags: ["clear"] },
        { id: "thank_inspire",  label: "🌟 За вдохновение и идеи", tags: ["inspire"] },
        { id: "thank_support",  label: "❤️ За поддержку и заботу", tags: ["support"] },
        { id: "thank_knowledge",label: "📚 За знания и мудрость", tags: ["knowledge"] },
        { id: "thank_results",  label: "✅ За результаты и дела", tags: ["results"] }
      ]
    },

    // === ВОПРОС 4: ГЛУБИННЫЙ — готовность практиковать без оплаты ===
    {
      id: "deep_calling_sacrifice",
      type: "single",
      text: "Готов ли ты заниматься этим каждый день, даже если тебе за это не платят?",
      required: true,
      conditions: { thanks_reason: ["thank_clear", "thank_inspire", "thank_support", "thank_knowledge", "thank_results"] },
      options: [
        { id: "yes_passion", label: "✅ Да, это моя страсть", tags: ["passion"] },
        { id: "yes_mostly",  label: "🤔 В основном да, но иногда устаю", tags: ["mostly"] },
        { id: "no_money",    label: "❌ Нет, я делаю это ради денег", tags: ["money"] }
      ]
    },

    // === ВОПРОС 5: FOLLOW-UP READINESS ===
    {
      id: "follow_up_calling",
      type: "single",
      text: "Через неделю я спрошу, сколько времени ты посвятил своему призванию. Что ответишь?",
      required: true,
      conditions: { deep_calling_sacrifice: ["yes_passion", "yes_mostly", "no_money"] },
      options: [
        { id: "ready",      label: "🚀 Уже сегодня начну практику", tags: ["ready"] },
        { id: "thinking",   label: "🤔 Подумаю, но не обещаю", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 Боюсь, что не найду время", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: АНАЛИТИК / МЫСЛИТЕЛЬ ===
    {
      id: "calling_analyst",
      title: "🧠 Архитектор решений",
      description: "Ты — тот, кто видит структуру и системы. Твоё призвание — решать сложные задачи и находить ответы.",
      conditions: {
        natural_talent: ["logic"],
        flow_activity: ["flow_solving"],
        thanks_reason: ["thank_clear", "thank_results"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "1 завершённый аналитический проект",
      tags: ["logic", "solve", "system"],
      steps: [
        "Выбери сферу, где нужен анализ (финансы, бизнес, здоровье, образование).",
        "Найди 1 реальную проблему в этой сфере.",
        "Собери данные (исследуй, опроси, почитай).",
        "Предложи 3 решения и выбери лучшее."
      ],
      warnings: [
        "НЕ застревай в анализе — решение должно быть практичным.",
        "НЕ пытайся решить всё сразу — начни с малого."
      ],
      daily_action: "Сегодня: проанализируй 1 вопрос в твоей сфере и запиши 3 гипотезы.",
      resources: [
        { type: "book", label: "📖 Чарльз Духигг — Сила привычки", url: "#" },
        { type: "technique", label: "🧘 Метод 5 почему", url: "#" }
      ],
      follow_up: {
        question: "Ты аналитик. Что сделал за неделю?",
        options: ["Ничего", "Выбрал проблему", "Собрал данные", "Нашёл решение"],
        reward: { "Нашёл решение": "🔥 Ты не просто мыслишь — ты изменяешь." }
      }
    },

    // === РЕШЕНИЕ 2: КОММУНИКАТОР / НАСТАВНИК ===
    {
      id: "calling_communicator",
      title: "🗣️ Мастер общения",
      description: "Ты — тот, кто соединяет людей и передаёт смыслы. Твоё призвание — вдохновлять и направлять.",
      conditions: {
        natural_talent: ["people", "words"],
        flow_activity: ["flow_teaching", "flow_helping"],
        thanks_reason: ["thank_support", "thank_inspire"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Первый разговор, который изменил чью-то жизнь",
      tags: ["people", "teach", "inspire"],
      steps: [
        "Вспомни, кому ты помог в последнее время.",
        "Напиши благодарность этому человеку (или себе).",
        "Проведи 1 разговор, где ты больше слушаешь, чем говоришь.",
        "Запиши, что нового ты узнал о себе."
      ],
      warnings: [
        "НЕ давай непрошеных советов — сначала слушай.",
        "НЕ жди благодарности — делай это потому, что ты так чувствуешь."
      ],
      daily_action: "Сегодня: скажи кому-то искреннее 'спасибо' за то, что они есть в твоей жизни.",
      resources: [
        { type: "book", label: "📖 Дейл Карнеги — Как завоёвывать друзей", url: "#" },
        { type: "technique", label: "🧘 Активное слушание (практика)", url: "#" }
      ],
      follow_up: {
        question: "Ты развиваешь коммуникацию. Что сделал за неделю?",
        options: ["Ничего", "Поблагодарил кого-то", "Провёл глубокий разговор", "Увидел перемены"],
        reward: { "Увидел перемены": "🔥 Ты — катализатор. Продолжай." }
      }
    },

    // === РЕШЕНИЕ 3: ТВОРЕЦ / ХУДОЖНИК ===
    {
      id: "calling_creator",
      title: "🎨 Генератор идей",
      description: "Ты — источник новизны. Твоё призвание — создавать красоту, смысл и вдохновение.",
      conditions: {
        natural_talent: ["art"],
        flow_activity: ["flow_creating"],
        thanks_reason: ["thank_inspire", "thank_results"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "1 завершённое творческое произведение",
      tags: ["art", "create", "inspire"],
      steps: [
        "Выбери форму самовыражения (рисунок, стих, мелодия, коллаж).",
        "Выдели 15 минут в день на эксперимент.",
        "Создай 5 черновиков, выбери 1 лучший.",
        "Покажи результат 1 человеку (тому, кому доверяешь)."
      ],
      warnings: [
        "НЕ жди вдохновения — твори регулярно.",
        "НЕ сравнивай с мастерами — сравнивай с собой вчера."
      ],
      daily_action: "Сегодня: создай что-то маленькое за 5 минут без оценки результата.",
      resources: [
        { type: "book", label: "📖 Рик Рубин — Творческий акт", url: "#" },
        { type: "link", label: "🔗 Skillshare — уроки творчества", url: "#" }
      ],
      follow_up: {
        question: "Ты творишь. Что сделал за неделю?",
        options: ["Ничего", "Набросал идеи", "Создал черновик", "Показал результат"],
        reward: { "Показал результат": "🔥 Ты — творец. Так и продолжай." }
      }
    },

    // === РЕШЕНИЕ 4: ОРГАНИЗАТОР / СИСТЕМАТИЗАТОР ===
    {
      id: "calling_organizer",
      title: "📊 Архитектор порядка",
      description: "Ты — тот, кто наводит порядок и создаёт системы. Твоё призвание — делать мир более структурированным.",
      conditions: {
        natural_talent: ["organize", "logic"],
        flow_activity: ["flow_planning"],
        thanks_reason: ["thank_clear", "thank_results"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 месяц",
      yield_estimate: "1 оптимизированный процесс в твоей жизни",
      tags: ["organize", "system", "clarity"],
      steps: [
        "Выбери хаотичную сферу жизни (рабочий стол, бюджет, расписание).",
        "Нарисуй текущую систему и желаемую.",
        "Внедри 1 изменение (например, создай папки, установи напоминание).",
        "Сделай это привычкой на 7 дней."
      ],
      warnings: [
        "НЕ усложняй — минимализм в системах важнее функциональности.",
        "НЕ бросай через день — дай системе время."
      ],
      daily_action: "Сегодня: наведи порядок в одной зоне (физической или цифровой) за 10 минут.",
      resources: [
        { type: "book", label: "📖 Дэвид Аллен — GTD", url: "#" },
        { type: "technique", label: "🧘 Метод Pomodoro для планирования", url: "#" }
      ],
      follow_up: {
        question: "Ты наводишь порядок. Что сделал за неделю?",
        options: ["Ничего", "Выбрал хаотичную зону", "Внедрил систему", "Держу привычку"],
        reward: { "Держу привычку": "🔥 Порядок — это сила. Ты её обрёл." }
      }
    },

    // === РЕШЕНИЕ 5: РЕМЕСЛЕННИК / РУКОТВОРНОЕ ===
    {
      id: "calling_craftsman",
      title: "🔨 Мастер своего дела",
      description: "Ты — тот, кто создаёт руками. Твоё призвание — в мастерстве, точности и красоте результата.",
      conditions: {
        natural_talent: ["hands"],
        flow_activity: ["flow_building"],
        thanks_reason: ["thank_results"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Готовое изделие или отремонтированная вещь",
      tags: ["hands", "craft", "skill"],
      steps: [
        "Выбери проект (сделать полку, починить стул, слепить горшок).",
        "Собери материалы и инструменты.",
        "Работай по 30 минут в день, не торопясь.",
        "Заверши проект и подари кому-то или используй сам."
      ],
      warnings: [
        "НЕ бери слишком сложный проект — начни с посильного.",
        "НЕ игнорируй технику безопасности."
      ],
      daily_action: "Сегодня: подбери проект и сделай первый шаг (нарисуй эскиз, купи материал).",
      resources: [
        { type: "book", label: "📖 Мэтью Кроуфорд — Создавая вещи", url: "#" },
        { type: "link", label: "🔗 Pinterest — идеи для рукоделия", url: "#" }
      ],
      follow_up: {
        question: "Ты создаёшь руками. Что сделал за неделю?",
        options: ["Ничего", "Выбрал проект", "Начал работу", "Почти закончил"],
        reward: { "Почти закончил": "🔥 Ты уже на финише. Доведи до конца." }
      }
    },

    // === РЕШЕНИЕ 6: FALLBACK — НАЧНИ ИССЛЕДОВАТЬ ===
    {
      id: "calling_start",
      title: "🔍 Исследователь себя",
      description: "Ты — в начале пути. Не обязательно знать своё призвание сейчас. Важно начать исследовать.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Сегодня",
      yield_estimate: "Первое осознанное открытие о себе",
      tags: ["start", "discovery", "curiosity"],
      steps: [
        "Запиши 5 вещей, которые тебе нравятся делать.",
        "Выбери 1 из них и погрузись в неё на 15 минут.",
        "Спроси себя: «Что я чувствую? Что мне даёт это занятие?»",
        "Повтори завтра с другим занятием."
      ],
      warnings: [
        "НЕ торопись с выводами — призвание открывается постепенно.",
        "НЕ бойся ошибиться — это часть пути."
      ],
      daily_action: "Сегодня: попробуй что-то новое или вспомни забытое занятие на 15 минут.",
      resources: [
        { type: "book", label: "📖 Кен Робинсон — Призвание", url: "#" },
        { type: "technique", label: "🧘 Дневник открытий (записывай 1 инсайт в день)", url: "#" }
      ],
      follow_up: {
        question: "Ты исследуешь себя. Что сделал за неделю?",
        options: ["Ничего", "Записал 5 занятий", "Попробовал одно", "Узнал о себе новое"],
        reward: { "Узнал о себе новое": "🔥 Это и есть начало призвания." }
      }
    }
  ]
});

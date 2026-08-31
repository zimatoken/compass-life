// modules/creativity/data/channel.js
// ============================================================
// ТВОРЧЕСКИЙ КАНАЛ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "creativity",
    category: "channel",
    version: "2.1.1",
    lang: "ru",
    title: "🖌️ Творческий канал",
    description: "Ты — творец. Творчество — это не результат, а процесс. Найди свой способ самовыражения.",
    icon: "🖌️",
    color: "#d946ef"
  },

  questions: [
    // === ВОПРОС 1: Что хочется создавать (без условий) ===
    {
      id: "creative_urge",
      type: "single",
      text: "Что тебе хочется создавать?",
      required: true,
      options: [
        { id: "visual", label: "🎨 Картины / фото / дизайн", tags: ["visual"] },
        { id: "words", label: "✍️ Тексты / стихи / блог", tags: ["words"] },
        { id: "sound", label: "🎵 Музыка / песни / подкасты", tags: ["sound"] },
        { id: "hands", label: "🔨 Ремесло / рукоделие / готовка", tags: ["hands"] },
        { id: "code", label: "💻 Код / сайты / приложения", tags: ["code"] }
      ]
    },

    // === ВОПРОС 2: Что мешает начать (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "creative_block",
      type: "single",
      text: "Что мешает тебе начать создавать?",
      required: true,
      options: [
        { id: "time", label: "⏰ Нет времени", tags: ["time"] },
        { id: "skill", label: "🎓 Не умею / недостаточно знаний", tags: ["skill"] },
        { id: "fear", label: "😨 Боюсь осуждения", tags: ["fear"] },
        { id: "idea", label: "💡 Нет идей", tags: ["idea"] },
        { id: "perfect", label: "🎯 Страх, что будет неидеально", tags: ["perfect"] }
      ]
    },

    // === ВОПРОС 3: Детская искра ===
    {
      id: "childhood_create",
      type: "single",
      text: "Что ты создавал в детстве, забывая о времени?",
      required: true,
      options: [
        { id: "draw", label: "🎨 Рисовал", tags: ["draw"] },
        { id: "build", label: "🔨 Строил / конструировал", tags: ["build"] },
        { id: "write", label: "✍️ Писал истории / стихи", tags: ["write"] },
        { id: "sing", label: "🎵 Пел / играл на инструменте", tags: ["sing"] },
        { id: "cook", label: "🍳 Готовил / создавал руками", tags: ["cook"] },
        { id: "none", label: "🌫️ Не помню / не было такого", tags: ["none"] }
      ]
    },

    // === ВОПРОС 4: Формат творчества ===
    {
      id: "creative_format",
      type: "single",
      text: "С чего тебе было бы проще всего начать?",
      required: true,
      options: [
        { id: "solo", label: "🪐 Сам — хочу делать для себя", tags: ["solo"] },
        { id: "social", label: "👥 С кем-то — нужно окружение", tags: ["social"] },
        { id: "course", label: "📚 Через обучение — нужна структура", tags: ["course"] },
        { id: "project", label: "🎯 Через конкретный проект", tags: ["project"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Начать создавать ===
    {
      id: "start_creating",
      title: "🚀 Начни создавать",
      description: "Ты — творец. Творчество — это не талант, это практика.",
      conditions: {
        creative_urge: ["visual", "words", "sound", "hands", "code"],
        creative_block: ["time", "skill", "fear", "idea", "perfect"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Сегодня",
      yield_estimate: "Первое творение",
      tags: ["start", "create"],
      steps: [
        "Шаг 1: Выбери 1 форму и 1 инструмент.",
        "Шаг 2: Потрать 15 минут без ожиданий.",
        "Шаг 3: Не показывай никому, если боишься.",
        "Шаг 4: Повтори завтра — творчество становится привычкой."
      ],
      warnings: [
        "НЕ критикуй первые попытки.",
        "НЕ сравнивай с профи."
      ],
      daily_action: "Сегодня: потрать 15 минут на творчество без оценки.",
      resources: [
        { type: "book", label: "📖 Творческий акт — Рик Рубин", url: "#" },
        { type: "book", label: "📖 Путь художника — Джулия Кэмерон", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Преодоление страха ===
    {
      id: "creative_courage",
      title: "🛡️ Творческая смелость",
      description: "Ты — храбрец. Страх — это не враг, а сигнал, что ты растёшь.",
      conditions: {
        creative_block: ["fear", "perfect"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Свобода творить без страха",
      tags: ["fear", "courage"],
      steps: [
        "Шаг 1: Напиши худший сценарий.",
        "Шаг 2: Покажи результат 1 безопасному человеку.",
        "Шаг 3: Заметь, что мир не рухнул.",
        "Шаг 4: Повтори — каждый раз страх будет меньше."
      ],
      warnings: [
        "НЕ жди идеального момента.",
        "НЕ бойся сказать: 'я новичок'."
      ],
      daily_action: "Сегодня: покажи 1 человеку что-то, что ты создал.",
      resources: [
        { type: "book", label: "📖 Храбрая сердцем — Брене Браун", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Возвращение к детству ===
    {
      id: "childhood_channel",
      title: "🧸 Возвращение к детству",
      description: "Ты — первооткрыватель. Детские увлечения — это ключ к твоему настоящему творчеству.",
      conditions: {
        childhood_create: ["draw", "build", "write", "sing", "cook", "none"],
        creative_block: ["time", "skill", "idea"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 месяц",
      yield_estimate: "Вдохновение и радость",
      tags: ["childhood", "inspiration"],
      steps: [
        "Шаг 1: Вспомни, что любил делать в детстве.",
        "Шаг 2: Найди 1 способ вернуть это в жизнь.",
        "Шаг 3: Делай это 10 минут в день без цели.",
        "Шаг 4: Заметь, как это влияет на настроение."
      ],
      warnings: [
        "НЕ пытайся монетизировать сразу.",
        "НЕ жди, что всё получится как в детстве."
      ],
      daily_action: "Сегодня: сделай что-то, что ты любил делать в детстве.",
      resources: [
        { type: "book", label: "📖 Творчество — 100 способов — Дэнни Грегори", url: "#" }
      ]
    }
  ]
});

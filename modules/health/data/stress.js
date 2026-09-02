// modules/health/data/stress.js
// ============================================================
// СТРЕСС — КАК УПРАВЛЯТЬ СТРЕССОМ И ВОССТАНАВЛИВАТЬСЯ v3.0
// ============================================================
// Структура: 5 вопросов, 6 решений (включая fallback)
// Глубинный вопрос: готовность к практике релаксации
// Follow-up: проверка практик через неделю
// Identity: "Ты — хозяин своего состояния"
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "stress",
    version: "3.0.0",
    lang: "ru",
    title: "🧠 Стресс",
    description: "Стресс неизбежен. Но ты можешь научиться управлять им. Практики восстановления — твоя суперсила.",
    icon: "🧠",
    color: "#ec4899",
    identity_anchor: "Ты — хозяин своего состояния"
  },

  questions: [
    // === ВОПРОС 1: Уровень стресса (без условий) ===
    {
      id: "stress_level",
      type: "single",
      text: "Как ты оцениваешь свой уровень стресса в последнее время?",
      required: true,
      options: [
        { id: "low",      label: "🟢 Низкий — чувствую себя спокойно", tags: ["low"] },
        { id: "medium",   label: "🟡 Средний — бывает, но терпимо", tags: ["medium"] },
        { id: "high",     label: "🔴 Высокий — часто на пределе", tags: ["high"] },
        { id: "burnout",  label: "⚫ Выгорание — ничего не хочется", tags: ["burnout"] }
      ]
    },

    // === ВОПРОС 2: Основной источник стресса (зависит от 1) ===
    {
      id: "stress_source",
      type: "single",
      text: "Какой источник стресса для тебя основной?",
      required: true,
      conditions: { stress_level: ["low", "medium", "high", "burnout"] },
      options: [
        { id: "work",     label: "💼 Работа, карьера", tags: ["work"] },
        { id: "family",   label: "🏠 Семья, отношения", tags: ["family"] },
        { id: "finance",  label: "💰 Деньги, финансы", tags: ["finance"] },
        { id: "health",   label: "🏥 Здоровье", tags: ["health"] },
        { id: "future",   label: "🔮 Неопределённость будущего", tags: ["future"] },
        { id: "unknown",  label: "🌫️ Не знаю", tags: ["unknown"] }
      ]
    },

    // === ВОПРОС 3: Предпочтение в методах (без условий, иерархия) ===
    {
      id: "stress_method",
      type: "single",
      text: "Какой способ снятия стресса тебе ближе?",
      required: true,
      options: [
        { id: "breathing", label: "🌬️ Дыхательные практики", tags: ["breathing"] },
        { id: "meditation", label: "🧘 Медитация, осознанность", tags: ["meditation"] },
        { id: "physical",   label: "🏃 Физическая активность", tags: ["physical"] },
        { id: "creative",   label: "🎨 Творчество, хобби", tags: ["creative"] },
        { id: "social",     label: "👥 Общение, поддержка", tags: ["social"] },
        { id: "nature",     label: "🌿 Природа, прогулки", tags: ["nature"] },
        { id: "none",       label: "🌫️ Не знаю / не пробовал", tags: ["none"] }
      ]
    },

    // === ВОПРОС 4: ГЛУБИННЫЙ — готовность к практике ===
    {
      id: "deep_stress_sacrifice",
      type: "single",
      text: "Готов ли ты уделять 10 минут в день на практику снятия стресса?",
      required: true,
      conditions: { stress_method: ["breathing", "meditation", "physical", "creative", "social", "nature", "none"] },
      options: [
        { id: "yes",    label: "✅ Да, я готов", tags: ["committed"] },
        { id: "maybe",  label: "🤔 Постараюсь", tags: ["uncertain"] },
        { id: "no",     label: "❌ Нет, это не поможет", tags: ["blocked"] }
      ]
    },

    // === ВОПРОС 5: FOLLOW-UP ===
    {
      id: "follow_up_stress",
      type: "single",
      text: "Через неделю я спрошу, какие практики ты использовал. Что ответишь?",
      required: true,
      conditions: { deep_stress_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 Начну сегодня", tags: ["ready"] },
        { id: "thinking",   label: "🤔 Подумаю", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 Боюсь, что не справлюсь", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: ДЫХАТЕЛЬНЫЕ ПРАКТИКИ ===
    {
      id: "stress_breathing",
      title: "🌬️ Дыхание для успокоения",
      description: "Дыхание — самый быстрый способ успокоить нервную систему. Техника 4-7-8 работает мгновенно.",
      conditions: {
        stress_method: ["breathing"],
        stress_level: ["high", "burnout", "medium"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Быстрое снятие напряжения",
      tags: ["breathing", "calm", "quick"],
      steps: [
        "Найди спокойное место, сядь прямо.",
        "Вдохни через нос на счёт 4.",
        "Задержи дыхание на счёт 7.",
        "Выдохни через рот на счёт 8.",
        "Повтори 4–8 раз."
      ],
      warnings: [
        "НЕ делай резких вдохов — дыши плавно.",
        "НЕ задерживай, если кружится голова — вернись к обычному дыханию."
      ],
      daily_action: "Сегодня: выполни 4 цикла дыхания 4-7-8 при первом же стрессе.",
      resources: [
        { type: "book", label: "📖 Джеймс Нестор — Дыхание", url: "#" },
        { type: "technique", label: "🧘 Техника 4-7-8", url: "#" }
      ],
      follow_up: {
        question: "Ты практиковал дыхание. Сколько раз использовал за неделю?",
        options: ["0", "1–3", "4–7", "Более 7"],
        reward: { "Более 7": "🔥 Ты приручил свою нервную систему." }
      }
    },

    // === РЕШЕНИЕ 2: МЕДИТАЦИЯ ===
    {
      id: "stress_meditation",
      title: "🧘 Осознанность и медитация",
      description: "Медитация тренирует ум быть в настоящем. Это снижает тревогу и улучшает концентрацию.",
      conditions: {
        stress_method: ["meditation"],
        stress_level: ["high", "burnout"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Устойчивость к стрессу",
      tags: ["meditation", "mindfulness", "calm"],
      steps: [
        "Сядь в тихом месте, закрой глаза.",
        "Сосредоточься на дыхании: вдох — выдох.",
        "Когда отвлекаешься — мягко возвращай внимание.",
        "Начни с 5 минут, постепенно увеличивай."
      ],
      warnings: [
        "НЕ жди, что мысли исчезнут — они будут, просто наблюдай.",
        "НЕ ругай себя за отвлечения — это нормально."
      ],
      daily_action: "Сегодня: проведи 5-минутную медитацию и запиши ощущения.",
      resources: [
        { type: "book", label: "📖 Джон Кабат-Зинн — Осознанность", url: "#" },
        { type: "link", label: "🔗 Приложение Headspace или Calm", url: "#" }
      ],
      follow_up: {
        question: "Ты медитировал. Сколько дней практиковал?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Ты тренируешь свой ум." }
      }
    },

    // === РЕШЕНИЕ 3: ФИЗИЧЕСКАЯ АКТИВНОСТЬ ===
    {
      id: "stress_physical",
      title: "🏃 Движение против стресса",
      description: "Физическая активность сжигает кортизол и вырабатывает эндорфины. Это природный антидепрессант.",
      conditions: {
        stress_method: ["physical"],
        stress_level: ["high", "medium"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Снижение уровня кортизола",
      tags: ["physical", "endorphins", "stress_relief"],
      steps: [
        "Выбери активность: прогулка, бег, танцы, зарядка.",
        "Делай её в моменты стресса.",
        "Старайся чтобы пульс участился — это высвобождает эндорфины.",
        "Через неделю почувствуешь разницу."
      ],
      warnings: [
        "НЕ перегружайся — лучше 10 минут, чем ничего.",
        "НЕ жди мгновенного эффекта — регулярность важна."
      ],
      daily_action: "Сегодня: при стрессе сделай 10 приседаний или прогулку.",
      resources: [
        { type: "book", label: "📖 Джон Рейти — Движение как лекарство", url: "#" },
        { type: "technique", label: "🧘 Метод 'Сделай 5'", url: "#" }
      ],
      follow_up: {
        question: "Ты двигался против стресса. Сколько раз за неделю?",
        options: ["0", "1–3", "4–6", "7+"],
        reward: { "7+": "🔥 Ты превратил стресс в энергию." }
      }
    },

    // === РЕШЕНИЕ 4: ТВОРЧЕСТВО И ХОББИ ===
    {
      id: "stress_creative",
      title: "🎨 Творчество как терапия",
      description: "Творчество — это поток. Когда ты создаёшь, ты забываешь о стрессе и входишь в зону покоя.",
      conditions: {
        stress_method: ["creative"],
        stress_level: ["medium", "burnout"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 недели",
      yield_estimate: "Восстановление через творчество",
      tags: ["creative", "flow", "therapy"],
      steps: [
        "Выбери форму: рисование, лепка, кулинария, музыка, стихи.",
        "Действуй без оценки — просто твори.",
        "В процессе концентрируйся только на том, что делаешь.",
        "Созданное можно сохранить или подарить."
      ],
      warnings: [
        "НЕ критикуй результат — важен процесс.",
        "НЕ используй творчество для заработка на первых порах."
      ],
      daily_action: "Сегодня: создай что-то маленькое за 10 минут без оценки.",
      resources: [
        { type: "book", label: "📖 Джулия Кэмерон — Путь художника", url: "#" },
        { type: "technique", label: "🧘 Творческий час", url: "#" }
      ],
      follow_up: {
        question: "Ты творил. Сколько дней занимался творчеством?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 Ты открыл свой творческий канал." }
      }
    },

    // === РЕШЕНИЕ 5: ПРИРОДА ===
    {
      id: "stress_nature",
      title: "🌿 Природа как лекарство",
      description: "Нахождение в природе снижает уровень кортизола и восстанавливает психику. Это доказано научно.",
      conditions: {
        stress_method: ["nature"],
        stress_level: ["high", "burnout"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Снижение стресса и восстановление",
      tags: ["nature", "restore", "peace"],
      steps: [
        "Выходи на прогулку в парк или лес.",
        "Смотри на деревья, слушай птиц, чувствуй землю под ногами.",
        "Не пользуйся телефоном — просто будь.",
        "Дыши медленно, наслаждайся моментом."
      ],
      warnings: [
        "НЕ думай о делах — это время для отдыха.",
        "НЕ ходи в дождь, если не хочешь — но в ясный день обязательно."
      ],
      daily_action: "Сегодня: выйди на 15-минутную прогулку без телефона.",
      resources: [
        { type: "book", label: "📖 Ричард Лув — Последний ребёнок в лесу", url: "#" },
        { type: "technique", label: "🧘 Лесное купание (Shinrin-yoku)", url: "#" }
      ],
      follow_up: {
        question: "Ты гулял на природе. Сколько дней за неделю?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 Ты восстанавливаешь связь с природой." }
      }
    },

    // === РЕШЕНИЕ 6: FALLBACK ===
    {
      id: "stress_start",
      title: "🌱 Первый шаг к управлению стрессом",
      description: "Управление стрессом начинается с осознания. Просто обрати внимание на своё состояние.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Сегодня",
      yield_estimate: "Осознанность своего состояния",
      tags: ["start", "awareness", "simple"],
      steps: [
        "Сделай паузу на 1 минуту.",
        "Спроси себя: 'Что я сейчас чувствую?'",
        "Назови это чувство (гнев, страх, усталость).",
        "Прими его без осуждения."
      ],
      warnings: [
        "НЕ убегай от чувств — позволь им быть.",
        "НЕ суди себя за стресс — это нормально."
      ],
      daily_action: "Сегодня: сделай 3 паузы по 1 минуте, чтобы просто побыть в тишине.",
      resources: [
        { type: "book", label: "📖 Тара Брах — Радикальное принятие", url: "#" },
        { type: "technique", label: "🧘 Пауза осознанности", url: "#" }
      ],
      follow_up: {
        question: "Ты начал управлять стрессом. Сколько пауз сделал за неделю?",
        options: ["0", "1–5", "6–15", "Более 15"],
        reward: { "Более 15": "🔥 Ты уже осознаёшь свои состояния." }
      }
    }
  ]
});

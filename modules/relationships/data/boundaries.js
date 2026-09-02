// modules/relationships/data/boundaries.js
// ============================================================
// ГРАНИЦЫ — КАК СТРОИТЬ ЗДОРОВЫЕ ЛИЧНЫЕ ГРАНИЦЫ v3.0
// ============================================================
// Структура: 5 вопросов, 6 решений (включая fallback)
// Глубинный вопрос: готовность защищать свои границы
// Follow-up: проверка установления границ через неделю
// Identity: "Ты — защитник своего пространства"
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "boundaries",
    version: "3.0.0",
    lang: "ru",
    title: "🛡️ Границы",
    description: "Границы — это не стены, а двери, которые ты открываешь, когда хочешь. Научись защищать своё пространство.",
    icon: "🛡️",
    color: "#06b6d4",
    identity_anchor: "Ты — защитник своего пространства"
  },

  questions: [
    // === ВОПРОС 1: Отношение к границам (без условий) ===
    {
      id: "boundary_attitude",
      type: "single",
      text: "Как ты чувствуешь свои личные границы?",
      required: true,
      options: [
        { id: "strong",    label: "🛡️ Чувствую и защищаю", tags: ["strong"] },
        { id: "weak",      label: "🌊 Часто позволяю их нарушать", tags: ["weak"] },
        { id: "rigid",     label: "🧱 Очень жёсткие, никого не пускаю", tags: ["rigid"] },
        { id: "unknown",   label: "🌫️ Не знаю, где мои границы", tags: ["unknown"] }
      ]
    },

    // === ВОПРОС 2: Что нарушает границы (зависит от 1) ===
    {
      id: "boundary_problem",
      type: "single",
      text: "Что чаще всего нарушает твои границы?",
      required: true,
      conditions: { boundary_attitude: ["strong", "weak", "rigid", "unknown"] },
      options: [
        { id: "people",    label: "👥 Чужие просьбы и ожидания", tags: ["people"] },
        { id: "time",      label: "⏰ Крайние сроки и перегрузки", tags: ["time"] },
        { id: "emotions",  label: "😰 Чужие эмоции и манипуляции", tags: ["emotions"] },
        { id: "family",    label: "🏠 Семейное давление", tags: ["family"] },
        { id: "no_problem", label: "✅ Мои границы в порядке", tags: ["no_problem"] }
      ]
    },

    // === ВОПРОС 3: Как реагируешь на нарушение (без условий, иерархия) ===
    {
      id: "boundary_reaction",
      type: "single",
      text: "Как ты обычно реагируешь, когда нарушают твои границы?",
      required: true,
      options: [
        { id: "say_no",    label: "🗣️ Говорю «нет» сразу", tags: ["say_no"] },
        { id: "tolerate",  label: "😤 Терплю, но злюсь", tags: ["tolerate"] },
        { id: "avoid",     label: "🚶 Ухожу/избегаю", tags: ["avoid"] },
        { id: "explain",   label: "📖 Объясняю и прошу не повторять", tags: ["explain"] },
        { id: "none",      label: "🌫️ Не замечаю нарушения", tags: ["none"] }
      ]
    },

    // === ВОПРОС 4: ГЛУБИННЫЙ — готовность защищать ===
    {
      id: "deep_boundary_sacrifice",
      type: "single",
      text: "Готов ли ты сказать «нет» даже близкому человеку, если это нарушает твои границы?",
      required: true,
      conditions: { boundary_reaction: ["say_no", "tolerate", "avoid", "explain", "none"] },
      options: [
        { id: "yes",    label: "✅ Да, я готов", tags: ["committed"] },
        { id: "maybe",  label: "🤔 Постараюсь", tags: ["uncertain"] },
        { id: "no",     label: "❌ Нет, не могу", tags: ["blocked"] }
      ]
    },

    // === ВОПРОС 5: FOLLOW-UP ===
    {
      id: "follow_up_boundary",
      type: "single",
      text: "Через неделю я спрошу, как ты защитил свои границы. Что ответишь?",
      required: true,
      conditions: { deep_boundary_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 Начну практиковать «нет» сегодня", tags: ["ready"] },
        { id: "thinking",   label: "🤔 Подумаю", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 Боюсь, что не смогу", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: ГОВОРИТЬ «НЕТ» ===
    {
      id: "boundary_say_no",
      title: "🗣️ Сила слова «Нет»",
      description: "Ты — хозяин своего времени и пространства. Умение говорить «нет» — это акт заботы о себе.",
      conditions: {
        boundary_reaction: ["say_no"],
        boundary_problem: ["people", "time"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Уверенность в отстаивании границ",
      tags: ["no", "boundaries", "confidence"],
      steps: [
        "Тренируйся говорить «нет» в маленьких ситуациях.",
        "Не оправдывайся — просто скажи «нет, спасибо».",
        "Используй технику «заезженная пластинка»: повторяй своё решение.",
        "Через неделю «нет» станет легче."
      ],
      warnings: [
        "НЕ чувствуй вину — право сказать «нет» у тебя есть.",
        "НЕ объясняй слишком много — иногда достаточно «нет»."
      ],
      daily_action: "Сегодня: скажи «нет» в ситуации, где обычно соглашаешься.",
      resources: [
        { type: "book", label: "📖 Недра Гловер — Токсичные люди", url: "#" },
        { type: "technique", label: "🧘 Техника заезженной пластинки", url: "#" }
      ],
      follow_up: {
        question: "Ты говорил «нет». Сколько раз за неделю?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 Ты защищаешь свои границы." }
      }
    },

    // === РЕШЕНИЕ 2: ПРЕКРАЩЕНИЕ ТЕРПЕНИЯ ===
    {
      id: "boundary_stop_tolerating",
      title: "😤 Прекрати терпеть",
      description: "Терпение не всегда добродетель. Когда ты терпишь нарушение — ты учишь других так к тебе относиться.",
      conditions: {
        boundary_reaction: ["tolerate"],
        boundary_problem: ["people", "emotions", "family"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Прекращение токсичного поведения",
      tags: ["no", "self_respect", "boundaries"],
      steps: [
        "Заметь, когда ты терпишь нарушение.",
        "Скажи себе: «Я больше не буду это терпеть».",
        "Сделай первый шаг к защите границ.",
        "Веди дневник нарушений."
      ],
      warnings: [
        "НЕ позволяй себе молчать — начинай с малого.",
        "НЕ вини себя — ты имеешь право на уважение."
      ],
      daily_action: "Сегодня: отследи момент, когда ты терпишь, и скажи себе «я имею право».",
      resources: [
        { type: "book", label: "📖 Генри Клауд, Джон Таунсенд — Границы", url: "#" },
        { type: "technique", label: "🧘 Дневник границ", url: "#" }
      ],
      follow_up: {
        question: "Ты перестал терпеть. Сколько раз защитил свои границы?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 Ты возвращаешь себе уважение." }
      }
    },

    // === РЕШЕНИЕ 3: ОБЪЯСНЕНИЕ ГРАНИЦ ===
    {
      id: "boundary_explain",
      title: "📖 Говори о границах открыто",
      description: "Люди не могут уважать границы, если не знают о них. Научись говорить о них спокойно.",
      conditions: {
        boundary_reaction: ["explain"],
        boundary_problem: ["people", "family"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Чёткие границы, понятные окружающим",
      tags: ["explain", "communication", "respect"],
      steps: [
        "Сформулируй свои границы в виде «я-сообщений».",
        "Объясни, почему это важно для тебя.",
        "Попроси уважать твои границы.",
        "Будь готов к вопросам и уточнениям."
      ],
      warnings: [
        "НЕ извиняйся за свои границы — это твоё право.",
        "НЕ ожидай, что все сразу поймут — дай им время."
      ],
      daily_action: "Сегодня: напиши 3 свои границы, которые хочешь объяснить другим.",
      resources: [
        { type: "book", label: "📖 Маршалл Розенберг — Ненасильственное общение", url: "#" },
        { type: "technique", label: "🧘 Техника я-сообщений", url: "#" }
      ],
      follow_up: {
        question: "Ты объяснил свои границы. Сколько раз за неделю?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 Ты создаёшь пространство для взаимопонимания." }
      }
    },

    // === РЕШЕНИЕ 4: УХОД И ЗАЩИТА ===
    {
      id: "boundary_avoid",
      title: "🚶 Уйди, если нужно",
      description: "Иногда лучшая защита границ — это выход из ситуации. Ты имеешь право уйти.",
      conditions: {
        boundary_reaction: ["avoid"],
        boundary_problem: ["emotions", "people"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 неделя",
      yield_estimate: "Умение вовремя уходить",
      tags: ["leave", "self_care", "distance"],
      steps: [
        "Определи ситуации, где ты чувствуешь нарушение.",
        "Разреши себе уйти в любой момент.",
        "Не объясняй свой уход — ты имеешь право.",
        "Используй «зелёный свет»: если что-то не так — уходи."
      ],
      warnings: [
        "НЕ оставайся, если тебе плохо — уйди.",
        "НЕ чувствуй вину за уход — это забота о себе."
      ],
      daily_action: "Сегодня: дай себе разрешение уйти из любой некомфортной ситуации.",
      resources: [
        { type: "book", label: "📖 Брене Браун — Дары несовершенства", url: "#" },
        { type: "technique", label: "🧘 Правило «зелёного света»", url: "#" }
      ],
      follow_up: {
        question: "Ты уходил из некомфортных ситуаций. Сколько раз за неделю?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 Ты заботишься о себе." }
      }
    },

    // === РЕШЕНИЕ 5: ДЛЯ ТЕХ, КТО НЕ ЧУВСТВУЕТ ГРАНИЦ ===
    {
      id: "boundary_find",
      title: "🔍 Найди свои границы",
      description: "Чтобы защищать границы, их сначала нужно найти. Начни с наблюдения за своими ощущениями.",
      conditions: {
        boundary_attitude: ["unknown", "weak"],
        boundary_problem: ["people", "emotions", "family"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Осознание своих границ",
      tags: ["find", "awareness", "feeling"],
      steps: [
        "Каждый день задавай себе вопрос: «Что я чувствую сейчас?».",
        "Записывай моменты дискомфорта.",
        "Анализируй, что именно вызвало этот дискомфорт.",
        "Через месяц у тебя будет карта твоих границ."
      ],
      warnings: [
        "НЕ игнорируй дискомфорт — это сигнал.",
        "НЕ сравнивай себя с другими — границы у всех разные."
      ],
      daily_action: "Сегодня: запиши 3 момента, где ты почувствовал дискомфорт.",
      resources: [
        { type: "book", label: "📖 Марша Лайнен — Терапия пограничных состояний", url: "#" },
        { type: "technique", label: "🧘 Дневник ощущений", url: "#" }
      ],
      follow_up: {
        question: "Ты искал свои границы. Сколько раз замечал дискомфорт?",
        options: ["0", "1–3", "4–7", "Более 7"],
        reward: { "Более 7": "🔥 Ты начал понимать себя." }
      }
    },

    // === РЕШЕНИЕ 6: FALLBACK ===
    {
      id: "boundary_start",
      title: "🌱 Начни с малого",
      description: "Установление границ — это процесс. Начни с одной маленькой границы сегодня.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Сегодня",
      yield_estimate: "Первая осознанная граница",
      tags: ["start", "awareness", "first"],
      steps: [
        "Определи 1 ситуацию, где ты хочешь установить границу.",
        "Скажи себе: «Я имею право на это».",
        "Сделай маленький шаг к защите этой границы.",
        "Завтра сделай чуть больше."
      ],
      warnings: [
        "НЕ пытайся установить все границы сразу.",
        "НЕ бойся быть неудобным — это твоё право."
      ],
      daily_action: "Сегодня: установи 1 маленькую границу в течение дня.",
      resources: [
        { type: "book", label: "📖 Генри Клауд — Границы", url: "#" },
        { type: "technique", label: "🧘 Правило одного шага", url: "#" }
      ],
      follow_up: {
        question: "Ты начал устанавливать границы. Сколько раз за неделю?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 Ты строишь защиту себя." }
      }
    }
  ]
});

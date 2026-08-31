// modules/happiness/data/blockers.js
// ============================================================
// ДИАГНОСТИКА БЛОКОВ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "happiness",
    category: "blockers",
    version: "2.1.1",
    lang: "ru",
    title: "🚧 Диагностика блоков",
    description: "Ты не депрессивный. Ты просто отдаёшь энергию не тем людям.",
    icon: "🚧",
    color: "#f59e0b"
  },

  questions: [
    // === ВОПРОС 1: Главный блокер (без условий) ===
    {
      id: "main_blocker",
      type: "single",
      text: "Что чаще всего вызывает у тебя тревогу, раздражение или апатию?",
      required: true,
      options: [
        { id: "work_stress", label: "😰 Рабочий стресс", tags: ["work"] },
        { id: "relations", label: "💔 Отношения с близкими", tags: ["relation"] },
        { id: "finance", label: "💸 Финансовая нестабильность", tags: ["money"] },
        { id: "health", label: "🤒 Здоровье и энергия", tags: ["health"] },
        { id: "meaning", label: "🌫️ Отсутствие смысла", tags: ["meaning"] }
      ]
    },

    // === ВОПРОС 2: Интенсивность (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "blocker_intensity",
      type: "single",
      text: "Насколько сильно это влияет на твою жизнь?",
      required: true,
      options: [
        { id: "critical", label: "🔴 Критически", tags: ["high"] },
        { id: "moderate", label: "🟡 Умеренно", tags: ["mid"] },
        { id: "mild", label: "🟢 Слабо", tags: ["low"] }
      ]
    },

    // === ВОПРОС 3: Источник блока ===
    {
      id: "blocker_source",
      type: "single",
      text: "Это внешняя или внутренняя причина?",
      required: true,
      options: [
        { id: "external", label: "🌍 Внешняя — обстоятельства", tags: ["external"] },
        { id: "internal", label: "🧠 Внутренняя — страхи, установки", tags: ["internal"] },
        { id: "both", label: "🔗 И то, и другое", tags: ["both"] }
      ]
    },

    // === ВОПРОС 4: Энергетические вампиры ===
    {
      id: "energy_pattern",
      type: "single",
      text: "После общения с какими людьми ты чувствуешь себя опустошённым?",
      required: true,
      options: [
        { id: "toxic_people", label: "☠️ С токсичными", tags: ["toxic"] },
        { id: "draining", label: "🧛 С энергетическими вампирами", tags: ["drain"] },
        { id: "no_one", label: "✅ Ни с кем", tags: ["safe"] },
        { id: "myself", label: "🪞 С самим собой", tags: ["self"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Срочное вмешательство ===
    {
      id: "urgent_fix",
      title: "🆘 Срочное вмешательство",
      description: "Ты — наблюдатель. Блокер критический. Нужно действовать немедленно.",
      conditions: {
        blocker_intensity: ["critical"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–4 недели",
      yield_estimate: "Снижение тревоги",
      tags: ["urgent", "fix"],
      steps: [
        "Шаг 1: Зафиксируй проблему на бумаге.",
        "Шаг 2: Найди 1 человека для обсуждения.",
        "Шаг 3: Составь план из 3 шагов.",
        "Шаг 4: Сделай первый шаг сегодня."
      ],
      warnings: [
        "НЕ игнорируй критические сигналы.",
        "НЕ пытайся решить всё сразу."
      ],
      daily_action: "Сегодня: запиши проблему и 1 возможное решение.",
      resources: [
        { type: "book", label: "📖 ACT-терапия — Стивен Хэйс", url: "#" },
        { type: "technique", label: "🧘 5 минут тишины", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Постепенная работа ===
    {
      id: "gradual_work",
      title: "🐢 Постепенная работа",
      description: "Ты — строитель. Блокер умеренный. Можно работать системно.",
      conditions: {
        blocker_intensity: ["moderate", "mild"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 месяца",
      yield_estimate: "Устойчивое улучшение",
      tags: ["gradual", "system"],
      steps: [
        "Шаг 1: Веди дневник триггеров 1 неделю.",
        "Шаг 2: Найди корневую причину.",
        "Шаг 3: Разработай систему превентивных действий.",
        "Шаг 4: Оценивай прогресс каждую неделю."
      ],
      warnings: [
        "НЕ жди мгновенного результата.",
        "НЕ меняй всё одновременно."
      ],
      daily_action: "Сегодня: отметь 1 момент, когда почувствовал себя хорошо.",
      resources: [
        { type: "book", label: "📖 Эмоциональный интеллект — Дэниел Гоулман", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Энергетическая гигиена ===
    {
      id: "energy_hygiene",
      title: "🧼 Энергетическая гигиена",
      description: "Ты — хранитель своей энергии. Не все люди имеют доступ к твоему времени.",
      conditions: {
        energy_pattern: ["toxic", "drain", "self"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Защита от энергетических вампиров",
      tags: ["energy", "boundaries"],
      steps: [
        "Шаг 1: Определи 3 человека, которые забирают энергию.",
        "Шаг 2: Установи границы.",
        "Шаг 3: Найди 3 человека, которые наполняют энергией.",
        "Шаг 4: Создай ритуал восстановления."
      ],
      warnings: [
        "НЕ вини себя за чувства.",
        "НЕ жди, что токсичные люди изменятся."
      ],
      daily_action: "Сегодня: сократи время контакта с 1 энергетическим вампиром.",
      resources: [
        { type: "book", label: "📖 Сила границ — Кристин Мазур", url: "#" }
      ]
    }
  ]
});

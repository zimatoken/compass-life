// modules/money/data/audit.js
// ============================================================
// АУДИТ БЮДЖЕТА — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "money",
    category: "audit",
    version: "2.1.1",
    lang: "ru",
    title: "📊 Аудит бюджета",
    description: "Ты — аудитор своей жизни. Каждый рубль — это твоё время. Найди, где оно утекает.",
    icon: "📊",
    color: "#22c55e"
  },

  questions: [
    // === ВОПРОС 1: Главная утечка (без условий) ===
    {
      id: "biggest_leak",
      type: "single",
      text: "Куда уходит больше всего денег помимо самого необходимого?",
      required: true,
      options: [
        { id: "impulse", label: "🛍️ Импульсивные покупки", tags: ["impulse"] },
        { id: "subscriptions", label: "📺 Подписки и сервисы", tags: ["subs"] },
        { id: "food", label: "🍕 Еда вне дома", tags: ["food"] },
        { id: "entertainment", label: "🎉 Развлечения", tags: ["fun"] },
        { id: "small", label: "💸 Мелочи", tags: ["small"] }
      ]
    },

    // === ВОПРОС 2: Размер утечки (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "leak_size",
      type: "single",
      text: "Сколько примерно уходит на это в месяц?",
      required: true,
      options: [
        { id: "small", label: "💰 До 10% дохода", tags: ["small"] },
        { id: "medium", label: "💰💰 10–30% дохода", tags: ["medium"] },
        { id: "large", label: "💰💰💰 Больше 30%", tags: ["large"] }
      ]
    },

    // === ВОПРОС 3: Отложенное удовольствие ===
    {
      id: "delayed_gratification",
      type: "single",
      text: "Делаешь ли ты паузу перед покупкой > 1000₽?",
      required: true,
      options: [
        { id: "always_wait", label: "✅ Всегда — 24+ часа", tags: ["strong"] },
        { id: "sometimes_wait", label: "😐 Иногда", tags: ["mid"] },
        { id: "never_wait", label: "❌ Нет", tags: ["weak"] }
      ]
    },

    // === ВОПРОС 4: Эмоциональные триггеры ===
    {
      id: "emotional_trigger",
      type: "single",
      text: "Что обычно запускает твои спонтанные траты?",
      required: true,
      options: [
        { id: "stress", label: "😰 Стресс или усталость", tags: ["stress"] },
        { id: "boredom", label: "😐 Скука", tags: ["boredom"] },
        { id: "social", label: "👥 Социальное давление", tags: ["social"] },
        { id: "sale", label: "🏷️ Скидки и акции", tags: ["sale"] },
        { id: "aware", label: "✅ Я осознанно трачу", tags: ["aware"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Остановить утечку ===
    {
      id: "stop_leak",
      title: "🚫 Остановить утечку",
      description: "Ты — хранитель. Найди и закрой главную дыру в бюджете. Каждый рубль — это твоё время.",
      conditions: {
        biggest_leak: ["impulse", "subscriptions", "food", "entertainment", "small"],
        delayed_gratification: ["never_wait", "sometimes_wait"],
        leak_size: ["small", "medium", "large"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 недели",
      yield_estimate: "Экономия 10–30%",
      tags: ["save", "budget"],
      steps: [
        "Шаг 1: Вычисли точную сумму утечки.",
        "Шаг 2: Установи лимит на категорию.",
        "Шаг 3: Убери триггеры (приложения, карты).",
        "Шаг 4: Найди бесплатную альтернативу."
      ],
      warnings: [
        "НЕ отказывайся полностью.",
        "НЕ экономь на здоровье."
      ],
      daily_action: "Сегодня: отмени 1 ненужную подписку.",
      resources: [
        { type: "book", label: "📖 Кошелёк или жизнь — Вики Робин", url: "#" },
        { type: "technique", label: "⏱️ Правило 24 часов", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Осознанное потребление (для эмоциональных трат) ===
    {
      id: "conscious_spending",
      title: "🧘 Осознанное потребление",
      description: "Ты — наблюдатель. Траты — это эмоции, а не потребности. Научись замечать триггеры.",
      conditions: {
        emotional_trigger: ["stress", "boredom", "social", "sale"],
        delayed_gratification: ["never_wait", "sometimes_wait"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Осознанные траты",
      tags: ["mindful", "spending"],
      steps: [
        "Шаг 1: Веди дневник трат.",
        "Шаг 2: Найди альтернативу импульсу.",
        "Шаг 3: Используй правило '10 секунд'.",
        "Шаг 4: Оценивай каждую покупку."
      ],
      warnings: [
        "НЕ вини себя за импульсы.",
        "НЕ пытайся перестать хотеть."
      ],
      daily_action: "Сегодня: перед покупкой > 500₽ задай себе 2 вопроса.",
      resources: [
        { type: "book", label: "📖 Психология денег — Морган Хаузел", url: "#" }
      ]
    }
  ]
});

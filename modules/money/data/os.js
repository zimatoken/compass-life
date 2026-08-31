// modules/money/data/os.js
// ============================================================
// ФИНАНСОВАЯ ОПЕРАЦИОННАЯ СИСТЕМА — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "money",
    category: "os",
    version: "2.1.1",
    lang: "ru",
    title: "💳 Финансовая ОС",
    description: "Ты — инвестор. Инвесторы покупают активы, а не эмоции. Деньги — это поведение, а не математика.",
    icon: "💳",
    color: "#22c55e"
  },

  questions: [
    // === ВОПРОС 1: Тип дохода (без условий) ===
    {
      id: "income_type",
      type: "single",
      text: "Какой у тебя тип дохода?",
      required: true,
      options: [
        { id: "salary", label: "💼 Фиксированная зарплата", tags: ["stable"] },
        { id: "variable", label: "📊 Переменный доход", tags: ["variable"] },
        { id: "mixed", label: "🔄 Смешанный", tags: ["mixed"] },
        { id: "none", label: "❌ Нет стабильного дохода", tags: ["none"] }
      ]
    },

    // === ВОПРОС 2: Подушка безопасности (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "savings",
      type: "single",
      text: "Есть ли у тебя подушка безопасности на 3+ месяца?",
      required: true,
      options: [
        { id: "yes_6m", label: "✅ Да, 6+ месяцев", tags: ["strong"] },
        { id: "yes_3m", label: "🟡 Да, 3 месяца", tags: ["ok"] },
        { id: "no_savings", label: "❌ Нет", tags: ["weak"] }
      ]
    },

    // === ВОПРОС 3: Учёт расходов ===
    {
      id: "tracking",
      type: "single",
      text: "Ведёшь ли ты учёт расходов?",
      required: true,
      options: [
        { id: "detailed", label: "📋 Детально", tags: ["detailed"] },
        { id: "rough", label: "📝 Примерно", tags: ["rough"] },
        { id: "no_track", label: "❌ Нет", tags: ["none"] }
      ]
    },

    // === ВОПРОС 4: Финансовый архетип ===
    {
      id: "financial_archtype",
      type: "single",
      text: "Как ты обычно поступаешь с деньгами?",
      required: true,
      options: [
        { id: "saver", label: "🐿️ Коплю, но не инвестирую", tags: ["saver"] },
        { id: "spender", label: "💸 Трачу всё сразу", tags: ["spender"] },
        { id: "investor", label: "📈 Инвестирую", tags: ["investor"] },
        { id: "rescuer", label: "🦸 Трачу на других", tags: ["rescuer"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Финансовый фундамент (БЕЗ ИЗБЫТОЧНЫХ conditions) ===
    {
      id: "financial_foundation",
      title: "🏗️ Финансовый фундамент",
      description: "Ты — строитель. Нужно срочно построить базовую систему. Заплати сначала себе — 10% дохода.",
      conditions: {
        savings: ["no_savings"],
        tracking: ["no_track", "rough"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Контроль над деньгами",
      tags: ["foundation", "system"],
      steps: [
        "Шаг 1: Начни учёт всех расходов.",
        "Шаг 2: Выдели 10% дохода на сбережения.",
        "Шаг 3: Создай подушку на 3 месяца.",
        "Шаг 4: Автоматизируй переводы."
      ],
      warnings: [
        "НЕ трать больше, чем зарабатываешь.",
        "НЕ инвестируй без подушки."
      ],
      daily_action: "Сегодня: запиши все расходы за день.",
      resources: [
        { type: "book", label: "📖 Богатый папа, бедный папа — Кийосаки", url: "#" },
        { type: "technique", label: "💰 Правило 50/30/20", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Оптимизация системы ===
    {
      id: "optimize_system",
      title: "⚙️ Оптимизация системы",
      description: "Ты — инвестор. База есть. Время оптимизировать и инвестировать.",
      conditions: {
        savings: ["yes_3m", "yes_6m"],
        tracking: ["detailed", "rough"],
        financial_archtype: ["saver", "investor"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 месяца",
      yield_estimate: "Рост капитала",
      tags: ["optimize", "invest"],
      steps: [
        "Шаг 1: Проанализируй 3 крупнейшие статьи расходов.",
        "Шаг 2: Найди способы сократить на 10%.",
        "Шаг 3: Открой инвестиционный счёт.",
        "Шаг 4: Настрой автоматические инвестиции."
      ],
      warnings: [
        "НЕ вкладывай деньги, которые понадобятся через год.",
        "НЕ доверяй обещаниям доходности > 15%."
      ],
      daily_action: "Сегодня: проверь 1 подписку — нужна ли она.",
      resources: [
        { type: "book", label: "📖 Самый богатый человек в Вавилоне — Клейсон", url: "#" },
        { type: "book", label: "📖 Психология денег — Морган Хаузел", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Исцеление спасателя ===
    {
      id: "rescuer_heal",
      title: "🦸 Исцеление спасателя",
      description: "Ты — спасатель. Тратишь на других, забывая о себе. Сначала маска кислорода себе — потом другим.",
      conditions: {
        financial_archtype: ["rescuer"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Баланс давать-получать",
      tags: ["rescuer", "heal"],
      steps: [
        "Шаг 1: Зафиксируй, сколько тратишь на других в месяц.",
        "Шаг 2: Установи лимит 'помощи' — 5% дохода.",
        "Шаг 3: Научись говорить 'нет' без объяснений.",
        "Шаг 4: Найди баланс: себе 10%, другим 5%."
      ],
      warnings: [
        "НЕ жертвуй собой ради других.",
        "НЕ чувствуй вину за отказ."
      ],
      daily_action: "Сегодня: скажи 'нет' 1 просьбе, которая выматывает.",
      resources: [
        { type: "book", label: "📖 Кошелёк или жизнь — Вики Робин", url: "#" },
        { type: "technique", label: "🛡️ Правило 'кислородной маски'", url: "#" }
      ]
    }
  ]
});

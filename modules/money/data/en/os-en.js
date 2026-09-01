// modules/money/data/en/os-en.js
// ============================================================
// FINANCIAL OPERATING SYSTEM — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "money",
    category: "os",
    version: "3.0.0",
    lang: "en",
    title: "💳 Financial OS",
    description: "You are an investor. Investors buy assets, not emotions. Money is behavior, not mathematics.",
    icon: "💳",
    color: "#22c55e",
    identity_anchor: "You are an investor"
  },

  questions: [
    // === QUESTION 1: Income type (no conditions) ===
    {
      id: "income_type",
      type: "single",
      text: "What type of income do you have?",
      required: true,
      options: [
        { id: "salary", label: "💼 Fixed salary", tags: ["stable"] },
        { id: "variable", label: "📊 Variable income", tags: ["variable"] },
        { id: "mixed", label: "🔄 Mixed", tags: ["mixed"] },
        { id: "none", label: "❌ No stable income", tags: ["none"] }
      ]
    },

    // === QUESTION 2: Safety cushion ===
    {
      id: "savings",
      type: "single",
      text: "Do you have a safety cushion for 3+ months?",
      required: true,
      options: [
        { id: "yes_6m", label: "✅ Yes, 6+ months", tags: ["strong"] },
        { id: "yes_3m", label: "🟡 Yes, 3 months", tags: ["ok"] },
        { id: "no_savings", label: "❌ No", tags: ["weak"] }
      ]
    },

    // === QUESTION 3: Expense tracking ===
    {
      id: "tracking",
      type: "single",
      text: "Do you track your expenses?",
      required: true,
      options: [
        { id: "detailed", label: "📋 Detailed — every penny", tags: ["detailed"] },
        { id: "rough", label: "📝 Rough — approximate amounts", tags: ["rough"] },
        { id: "no_track", label: "❌ No — I don't know where money goes", tags: ["none"] }
      ]
    },

    // === QUESTION 4: Financial archetype ===
    {
      id: "financial_archetype",
      type: "single",
      text: "How do you usually handle your money?",
      required: true,
      options: [
        { id: "saver", label: "🐿️ I save, but don't invest", tags: ["saver"] },
        { id: "spender", label: "💸 I spend everything", tags: ["spender"] },
        { id: "investor", label: "📈 I invest", tags: ["investor"] },
        { id: "rescuer", label: "🦸 I spend on others", tags: ["rescuer"] }
      ]
    },

    // === QUESTION 5: Financial goals ===
    {
      id: "financial_goals",
      type: "single",
      text: "Do you have clear financial goals for 3 years?",
      required: true,
      options: [
        { id: "no_goals", label: "❌ No — I live day to day", tags: ["none"] },
        { id: "vague_goals", label: "🌫️ I have ideas, but not written down", tags: ["vague"] },
        { id: "clear_goals", label: "✅ Yes — written and calculated", tags: ["clear"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of no system ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you don't create a financial system in the next 2 years?",
      required: true,
      conditions: { savings: ["no_savings", "yes_3m"] },
      options: [
        { id: "financial_dependence", label: "😰 Dependence on circumstances", tags: ["dependence"] },
        { id: "missed_wealth", label: "💸 Missed wealth", tags: ["wealth"] },
        { id: "stress_cycle", label: "🔄 Endless cycle of money stress", tags: ["stress"] },
        { id: "lost_freedom", label: "🔒 Loss of freedom to choose", tags: ["freedom"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what step toward a financial system did you take? What answer do you want to give?",
      required: true,
      conditions: { income_type: ["salary", "variable", "mixed", "none"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: FINANCIAL FOUNDATION ===
    {
      id: "financial_foundation",
      title: "🏗️ Financial Foundation",
      description: "You are a builder. You need to urgently build a basic system. Pay yourself first — 10% of income.",
      conditions: {
        savings: ["no_savings"],
        tracking: ["none", "rough"],
        financial_archetype: ["spender", "saver"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Control over your money",
      tags: ["foundation", "system"],
      steps: [
        "Start tracking all expenses — log every spend.",
        "Allocate 10% of income to savings — pay yourself first.",
        "Build a 3-month cushion — it's your protection.",
        "Automate transfers — money leaves before you see it."
      ],
      warnings: [
        "DON'T spend more than you earn — that's the path to debt.",
        "DON'T invest without a cushion — it's risk, not strategy."
      ],
      daily_action: "Log all your expenses today. See where your money goes.",
      resources: [
        { type: "book", label: "📖 Rich Dad Poor Dad — Robert Kiyosaki", url: "#" },
        { type: "technique", label: "💰 The 50/30/20 rule", url: "#" }
      ],
      follow_up: {
        question: "You started building a financial foundation. What changed in a week?",
        options: ["Nothing", "Started tracking expenses", "Set up auto-transfer", "I feel in control"],
        reward: { "I feel in control": "🔥 You stopped being a slave to money. You're managing it.", "Set up auto-transfer": "🎉 Automation is the key to discipline." }
      }
    },

    // === SOLUTION 2: SYSTEM OPTIMIZATION ===
    {
      id: "optimize_system",
      title: "⚙️ System Optimization",
      description: "You are an investor. The foundation is there. Time to optimize and invest. Money should work for you.",
      conditions: {
        savings: ["yes_3m", "yes_6m"],
        tracking: ["detailed", "rough"],
        financial_archetype: ["saver", "investor"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 months",
      yield_estimate: "Capital growth and financial freedom",
      tags: ["optimize", "invest"],
      steps: [
        "Analyze your 3 biggest expense categories — find what to cut.",
        "Find ways to reduce them by 10–20% — without losing quality of life.",
        "Open an investment account — ISA or brokerage.",
        "Set up automatic investments — 10% of income into ETFs or stocks."
      ],
      warnings: [
        "DON'T invest money you'll need in a year — only long-term.",
        "DON'T trust promises of returns > 15% — it's risky."
      ],
      daily_action: "Check 1 subscription — do you need it? Cancel if not.",
      resources: [
        { type: "book", label: "📖 The Richest Man in Babylon — George Clason", url: "#" },
        { type: "book", label: "📖 The Psychology of Money — Morgan Housel", url: "#" }
      ],
      follow_up: {
        question: "You started optimizing your system. What changed in a week?",
        options: ["Nothing", "Found 1 category to cut", "Opened an investment account", "I feel growth"],
        reward: { "I feel growth": "🔥 You've moved from survival to growth. That's investor level.", "Opened an investment account": "🎉 You've taken the first step toward financial independence." }
      }
    },

    // === SOLUTION 3: HEALING THE RESCUER ===
    {
      id: "rescuer_heal",
      title: "🦸 Healing the Rescuer",
      description: "You are a rescuer. You spend on others, forgetting yourself. Put your oxygen mask on first.",
      conditions: {
        financial_archetype: ["rescuer"],
        savings: ["no_savings", "yes_3m"],
        tracking: ["rough", "none"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Balance between helping yourself and others",
      tags: ["rescuer", "heal"],
      steps: [
        "Track how much you spend on others per month — write it down.",
        "Set a 'help' limit — 5% of income maximum.",
        "Learn to say 'no' without explaining — it's protection, not aggression.",
        "Find balance: 10% to yourself, 5% to others — stick to it."
      ],
      warnings: [
        "DON'T sacrifice yourself for others — you won't help anyone that way.",
        "DON'T feel guilty about saying no — it's your money and your life."
      ],
      daily_action: "Say 'no' to 1 request that drains you financially or emotionally.",
      resources: [
        { type: "book", label: "📖 Your Money or Your Life — Vicki Robin", url: "#" },
        { type: "technique", label: "🛡️ The 'oxygen mask' rule", url: "#" }
      ],
      follow_up: {
        question: "You started healing the rescuer. What changed in a week?",
        options: ["Nothing", "Said 'no' 1 time", "Saying 'no' got easier", "Feel balanced"],
        reward: { "Feel balanced": "🔥 You've stopped sacrificing yourself. That's the path to healthy money relationships.", "Said 'no' 1 time": "🎉 Every 'no' is a step toward financial freedom." }
      }
    },

    // === SOLUTION 4: FINANCIAL GOALS ===
    {
      id: "financial_goals_protocol",
      title: "🎯 Financial Goals",
      description: "You are an architect of the future. Clear goals turn money from abstraction into a tool. Write them down and they'll start working.",
      conditions: {
        financial_goals: ["none", "vague"],
        savings: ["yes_3m", "yes_6m"],
        financial_archetype: ["saver", "investor"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Clarity and direction",
      tags: ["goals", "vision"],
      steps: [
        "Write down 3 financial goals for 3 years — be specific.",
        "Break each into stages — by year, by quarter.",
        "Calculate the exact cost of each goal.",
        "Create separate savings accounts for each goal."
      ],
      warnings: [
        "DON'T set vague goals — 'I want more money' doesn't work.",
        "DON'T forget to review goals — they should grow with you."
      ],
      daily_action: "Write down 1 financial goal for 3 years with a specific amount.",
      resources: [
        { type: "book", label: "📖 The Richest Man in Babylon — George Clason", url: "#" },
        { type: "technique", label: "🎯 SMART goals for finances", url: "#" }
      ],
      follow_up: {
        question: "You started setting financial goals. What changed in a week?",
        options: ["Nothing", "Wrote 1 goal", "Wrote several goals", "I feel direction"],
        reward: { "I feel direction": "🔥 Goals turn money into a tool for your life.", "Wrote several goals": "🎉 You know where you're going. That's half the journey." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_financial_system",
      title: "🚀 Start with 1 Action",
      description: "You are an investor. You don't need to build a complex system right away. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action toward a financial system",
      tags: ["start", "system"],
      steps: [
        "Choose 1 financial action you can take today.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect instant results — the system builds gradually."
      ],
      daily_action: "Take 1 small action for your financial system today.",
      resources: [
        { type: "book", label: "📖 Rich Dad Poor Dad — Robert Kiyosaki", url: "#" },
        { type: "technique", label: "💰 Start with one: expense tracking or auto-transfer", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 action. What changed in a week?",
        options: ["Nothing", "Took 1 action", "Took several actions", "I feel progress"],
        reward: { "I feel progress": "🎉 You've proven to yourself: small steps work. A financial system starts with one action." }
      }
    }
  ]
});

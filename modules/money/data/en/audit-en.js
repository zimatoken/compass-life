// modules/money/data/en/audit-en.js
// ============================================================
// BUDGET AUDIT — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "money",
    category: "audit",
    version: "3.0.0",
    lang: "en",
    title: "📊 Budget Audit",
    description: "You are the auditor of your life. Every dollar is your time. Find where it's leaking away.",
    icon: "📊",
    color: "#22c55e",
    identity_anchor: "You are a financial strategist"
  },

  questions: [
    // === QUESTION 1: Biggest leak (no conditions) ===
    {
      id: "biggest_leak",
      type: "single",
      text: "Where does most of your money go beyond necessities?",
      required: true,
      options: [
        { id: "impulse", label: "🛍️ Impulse purchases", tags: ["impulse"] },
        { id: "subscriptions", label: "📺 Subscriptions and services", tags: ["subs"] },
        { id: "food", label: "🍕 Eating out", tags: ["food"] },
        { id: "entertainment", label: "🎉 Entertainment", tags: ["fun"] },
        { id: "small", label: "💸 Small things — coffee, snacks, trinkets", tags: ["small"] }
      ]
    },

    // === QUESTION 2: Leak size ===
    {
      id: "leak_size",
      type: "single",
      text: "How much does this cost you per month?",
      required: true,
      options: [
        { id: "small", label: "💰 Up to 10% of income", tags: ["small"] },
        { id: "medium", label: "💰💰 10–30% of income", tags: ["medium"] },
        { id: "large", label: "💰💰💰 More than 30%", tags: ["large"] }
      ]
    },

    // === QUESTION 3: Delayed gratification ===
    {
      id: "delayed_gratification",
      type: "single",
      text: "Do you pause before purchases over 1000₽?",
      required: true,
      options: [
        { id: "always_wait", label: "✅ Always — 24+ hours", tags: ["strong"] },
        { id: "sometimes_wait", label: "😐 Sometimes", tags: ["mid"] },
        { id: "never_wait", label: "❌ No — I buy immediately", tags: ["weak"] }
      ]
    },

    // === QUESTION 4: Emotional triggers ===
    {
      id: "emotional_trigger",
      type: "single",
      text: "What usually triggers your spontaneous spending?",
      required: true,
      options: [
        { id: "stress", label: "😰 Stress or fatigue", tags: ["stress"] },
        { id: "boredom", label: "😐 Boredom", tags: ["boredom"] },
        { id: "social", label: "👥 Social pressure", tags: ["social"] },
        { id: "sale", label: "🏷️ Sales and discounts", tags: ["sale"] },
        { id: "aware", label: "✅ I spend consciously", tags: ["aware"] }
      ]
    },

    // === QUESTION 5: Financial cushion ===
    {
      id: "financial_cushion",
      type: "single",
      text: "Do you have a financial cushion for 3–6 months?",
      required: true,
      options: [
        { id: "no_cushion", label: "❌ No — I live paycheck to paycheck", tags: ["none"] },
        { id: "small_cushion", label: "🪫 1–2 months", tags: ["low"] },
        { id: "good_cushion", label: "✅ 3–6 months", tags: ["good"] },
        { id: "excellent", label: "🌟 More than 6 months", tags: ["excellent"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of financial carelessness ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue spending without control for another year?",
      required: true,
      conditions: { biggest_leak: ["impulse", "subscriptions", "food", "entertainment", "small"] },
      options: [
        { id: "debt", label: "💳 Debt or loans", tags: ["debt"] },
        { id: "stress", label: "😰 Constant financial stress", tags: ["stress"] },
        { id: "missed_goals", label: "🎯 Missed goals", tags: ["goals"] },
        { id: "stagnation", label: "🚫 No savings", tags: ["savings"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what financial habit did you change? What answer do you want to give?",
      required: true,
      conditions: { biggest_leak: ["impulse", "subscriptions", "food", "entertainment", "small"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: STOP THE LEAK ===
    {
      id: "stop_leak",
      title: "🚫 Stop the Leak",
      description: "You are a financial strategist. Find and close the main hole in your budget. Every dollar is your time and freedom.",
      conditions: {
        biggest_leak: ["impulse", "subscriptions", "food", "entertainment", "small"],
        delayed_gratification: ["never_wait", "sometimes_wait"],
        leak_size: ["medium", "large"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "10–30% budget savings",
      tags: ["save", "budget"],
      steps: [
        "Calculate the exact leak amount — check 3 months of statements.",
        "Set a spending limit for that category — e.g., 5000₽ per month.",
        "Remove triggers — unsubscribe from emails, remove cards from apps.",
        "Find a free or cheaper alternative."
      ],
      warnings: [
        "DON'T give up completely — it will lead to a binge.",
        "DON'T cut spending on health and education."
      ],
      daily_action: "Cancel 1 unnecessary subscription or automatic payment today.",
      resources: [
        { type: "book", label: "📖 Your Money or Your Life — Vicki Robin", url: "#" },
        { type: "technique", label: "⏱️ The 24-hour rule for purchases over 1000₽", url: "#" }
      ],
      follow_up: {
        question: "You started closing leaks. What changed in a week?",
        options: ["Nothing", "Cancelled 1 subscription", "Saved noticeable amount", "I control expenses"],
        reward: { "I control expenses": "🔥 You took control of your finances. That's the path to freedom.", "Saved noticeable amount": "🎉 Money stopped leaking — it started working for you." }
      }
    },

    // === SOLUTION 2: CONSCIOUS SPENDING ===
    {
      id: "conscious_spending",
      title: "🧘 Conscious Spending",
      description: "You are an observer. Spending is emotions, not needs. Learn to notice your triggers and choose consciously.",
      conditions: {
        emotional_trigger: ["stress", "boredom", "social", "sale"],
        delayed_gratification: ["never_wait", "sometimes_wait"],
        biggest_leak: ["impulse", "small"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Conscious spending without guilt",
      tags: ["mindful", "spending"],
      steps: [
        "Keep a spending diary — log every purchase and emotion.",
        "Find an alternative to the impulse — walk, water, breathing.",
        "Use the '10-second rule' — hold it and think.",
        "Evaluate every purchase: 'Does this bring me closer to my goal?'."
      ],
      warnings: [
        "DON'T blame yourself for impulses — it's part of the process.",
        "DON'T try to stop wanting — learn to notice and choose."
      ],
      daily_action: "Before buying anything over 500₽, ask yourself 2 questions: 'Why do I want this?' and 'What will I gain?'.",
      resources: [
        { type: "book", label: "📖 The Psychology of Money — Morgan Housel", url: "#" },
        { type: "technique", label: "🧘 The 10-second pause before purchasing", url: "#" }
      ],
      follow_up: {
        question: "You started conscious spending. What changed in a week?",
        options: ["Nothing", "Started noticing triggers", "Fewer impulse buys", "Feel in control"],
        reward: { "Feel in control": "🔥 You're not a slave to impulses — you choose consciously.", "Fewer impulse buys": "🎉 Money stays with you instead of going to emotions." }
      }
    },

    // === SOLUTION 3: FINANCIAL CUSHION ===
    {
      id: "build_cushion",
      title: "🛡️ Financial Cushion",
      description: "You are the guardian of your future. A safety net is not a luxury — it's a necessity. Without it, you're dependent on circumstances.",
      conditions: {
        financial_cushion: ["none", "low"],
        leak_size: ["small", "medium", "large"],
        biggest_leak: ["impulse", "subscriptions", "food", "entertainment", "small"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 months",
      yield_estimate: "Peace of mind and financial freedom",
      tags: ["cushion", "security"],
      steps: [
        "Determine the amount — 3 months of your basic expenses.",
        "Save 10% of each paycheck into a separate account.",
        "Automate the transfer — money moves before you see it.",
        "Don't touch the cushion except for emergencies."
      ],
      warnings: [
        "DON'T start with large sums — start with 1000₽ per month.",
        "DON'T invest your cushion — it's insurance, not income."
      ],
      daily_action: "Open a separate account and set up an automatic transfer of 10% of your salary.",
      resources: [
        { type: "book", label: "📖 Rich Dad Poor Dad — Robert Kiyosaki", url: "#" },
        { type: "technique", label: "💰 The 10% rule — pay yourself first", url: "#" }
      ],
      follow_up: {
        question: "You started building a cushion. What changed in a week?",
        options: ["Nothing", "Opened an account", "Set up auto-transfer", "Feel more secure"],
        reward: { "Feel more secure": "🔥 The cushion gives you freedom. You're protected from surprises.", "Set up auto-transfer": "🎉 Automation is the best friend of financial discipline." }
      }
    },

    // === SOLUTION 4: THE 24-HOUR RULE ===
    {
      id: "rule_24h",
      title: "⏰ The 24-Hour Rule",
      description: "You are a strategist. All major purchases go through your rational mind. 24 hours is time to distinguish desire from necessity.",
      conditions: {
        delayed_gratification: ["never_wait"],
        biggest_leak: ["impulse", "subscriptions", "entertainment", "small"],
        emotional_trigger: ["stress", "sale"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "70% reduction in impulse spending",
      tags: ["discipline", "delay"],
      steps: [
        "Create a 'Wishlist' — write down everything you want to buy.",
        "Set a rule: any purchase over 1000₽ waits 24 hours.",
        "After 24 hours, review the list — 80% of desires will fade.",
        "Only buy what's still on the list after 3 days."
      ],
      warnings: [
        "DON'T break the rule for 'just today'.",
        "DON'T buy immediately, even if it seems like a good deal."
      ],
      daily_action: "Write everything you wanted to buy today on a wishlist. Review it tomorrow.",
      resources: [
        { type: "book", label: "📖 Your Money or Your Life — Vicki Robin", url: "#" },
        { type: "technique", label: "⏱️ The 'Wishlist' and 24-hour rule", url: "#" }
      ],
      follow_up: {
        question: "You started using the 24-hour rule. What changed?",
        options: ["Nothing", "Skipped several purchases", "Saved noticeable amount", "Buy only what I need"],
        reward: { "Buy only what I need": "🔥 You're a master of impulse control. Money stays with you.", "Saved noticeable amount": "🎉 24 hours is the key to conscious spending." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_audit",
      title: "🚀 Start with 1 Change",
      description: "You are a financial strategist. You don't need to change everything at once. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First improvement in your budget",
      tags: ["start", "money"],
      steps: [
        "Choose 1 financial habit you want to change.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect instant results — finances change gradually."
      ],
      daily_action: "Make 1 small financial improvement today.",
      resources: [
        { type: "book", label: "📖 Your Money or Your Life — Vicki Robin", url: "#" },
        { type: "technique", label: "💰 Start with one: cancel subscription or track expenses", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 financial change. What changed in a week?",
        options: ["Nothing", "Made 1 improvement", "Made several", "I feel progress"],
        reward: { "I feel progress": "🎉 You've proven to yourself: small steps work.", "Made several": "🔥 You're building financial discipline step by step." }
      }
    }
  ]
});

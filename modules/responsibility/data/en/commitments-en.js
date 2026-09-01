// modules/responsibility/data/en/commitments-en.js
// ============================================================
// COMMITMENT SYSTEM — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "responsibility",
    category: "commitments",
    version: "3.0.0",
    lang: "en",
    title: "📋 Commitment System",
    description: "You are a person of your word. Promises are your contract with yourself. You keep your word to others 7 times better than to yourself.",
    icon: "📋",
    color: "#3b82f6",
    identity_anchor: "You are a person of your word"
  },

  questions: [
    // === QUESTION 1: Main commitment burden (no conditions) ===
    {
      id: "commitment_type",
      type: "single",
      text: "What commitments are weighing on you most right now?",
      required: true,
      options: [
        { id: "work", label: "💼 Work deadlines — projects, tasks, reports", tags: ["work"] },
        { id: "family", label: "👨‍👩‍👧 Family responsibilities — kids, home, parents", tags: ["family"] },
        { id: "personal", label: "🎯 Personal goals — fitness, books, projects", tags: ["self"] },
        { id: "social", label: "🤝 Social promises — friends, acquaintances", tags: ["social"] }
      ]
    },

    // === QUESTION 2: Overload level ===
    {
      id: "overload",
      type: "single",
      text: "How many active commitments do you have right now?",
      required: true,
      options: [
        { id: "few", label: "✅ Up to 5 — comfortable", tags: ["ok"] },
        { id: "many", label: "🟡 6–10 — quite a lot", tags: ["busy"] },
        { id: "too_many", label: "🔴 More than 10 — overwhelmed", tags: ["overload"] }
      ]
    },

    // === QUESTION 3: Support system ===
    {
      id: "buddy_system",
      type: "single",
      text: "Is there someone you report your progress to?",
      required: true,
      options: [
        { id: "yes_buddy", label: "✅ Yes — I have someone to share with", tags: ["buddy"] },
        { id: "no_buddy", label: "❌ No — I'm on my own", tags: ["alone"] }
      ]
    },

    // === QUESTION 4: Why commitments are broken ===
    {
      id: "break_reason",
      type: "single",
      text: "If you fail to keep a promise, why does it happen?",
      required: true,
      options: [
        { id: "forget", label: "🧠 I forget — it just slips my mind", tags: ["forget"] },
        { id: "overcommit", label: "📚 I overestimate — I take on too much", tags: ["overcommit"] },
        { id: "avoid", label: "😰 I avoid — I don't want to do it", tags: ["avoid"] },
        { id: "distract", label: "📱 I get distracted — lose focus", tags: ["distract"] }
      ]
    },

    // === QUESTION 5: Top commitment ===
    {
      id: "top_commitment",
      type: "single",
      text: "Which commitment is most important to you right now?",
      required: true,
      options: [
        { id: "top_work", label: "💼 Work project", tags: ["work"] },
        { id: "top_family", label: "👨‍👩‍👧 Taking care of family", tags: ["family"] },
        { id: "top_self", label: "🎯 Personal development", tags: ["self"] },
        { id: "top_health", label: "🏃 Health and fitness", tags: ["health"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of broken promises ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue to break your promises?",
      required: true,
      conditions: { overload: ["many", "too_many"] },
      options: [
        { id: "loss_of_trust", label: "💔 Loss of self-trust", tags: ["trust"] },
        { id: "stress", label: "😰 Chronic stress", tags: ["stress"] },
        { id: "reputation", label: "📉 Damaged reputation", tags: ["reputation"] },
        { id: "regret", label: "😔 Guilt and regret", tags: ["regret"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: which promise did you keep? What answer do you want to give?",
      required: true,
      conditions: { commitment_type: ["work", "family", "personal", "social"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: COMMITMENT AUDIT ===
    {
      id: "commitment_audit",
      title: "📋 Commitment Audit",
      description: "You are the captain. Review all promises and keep only what matters. Overload isn't heroism — it's the path to burnout.",
      conditions: {
        overload: ["many", "too_many"],
        break_reason: ["overcommit", "avoid", "distract"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Control over commitments and peace of mind",
      tags: ["audit", "commitments"],
      steps: [
        "Write down ALL current commitments — dump them from your head.",
        "Rate each by importance (1–10) and urgency.",
        "Decline low-priority ones — delegate or cancel.",
        "Renegotiate deadlines for the rest — honestly and realistically."
      ],
      warnings: [
        "DON'T take new commitments until the audit is complete.",
        "DON'T decline abruptly — explain the reason."
      ],
      daily_action: "Write down all commitments on paper or in notes.",
      resources: [
        { type: "book", label: "📖 Essentialism — Greg McKeown", url: "#" },
        { type: "technique", label: "📋 The Eisenhower Matrix", url: "#" }
      ],
      follow_up: {
        question: "You did a commitment audit. What changed in a week?",
        options: ["Nothing", "List is ready", "Declined 2–3", "I feel lighter"],
        reward: { "I feel lighter": "🔥 You took control of your life. That's freedom.", "Declined 2–3": "🎉 Every 'no' is a 'yes' to what truly matters." }
      }
    },

    // === SOLUTION 2: ACCOUNTABILITY SYSTEM ===
    {
      id: "buddy_system_solution",
      title: "👥 Accountability System",
      description: "You are part of a team. Find an accountability partner. External accountability works 7 times better than internal.",
      conditions: {
        buddy_system: ["no_buddy"],
        break_reason: ["forget", "overcommit", "avoid", "distract"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Fulfilled commitments and growing trust",
      tags: ["accountability", "buddy"],
      steps: [
        "Choose 1 person for accountability — friend, partner, mentor.",
        "Agree on regular check-ins — once a week.",
        "Share your key commitments — make them visible.",
        "Report honestly — even when things go wrong."
      ],
      warnings: [
        "DON'T choose a critic — you need a supportive person.",
        "DON'T be afraid to admit mistakes — it's part of the process."
      ],
      daily_action: "Share your top commitment with one person today.",
      resources: [
        { type: "book", label: "📖 Willpower — Roy Baumeister", url: "#" },
        { type: "technique", label: "👥 Buddy system: weekly check-ins", url: "#" }
      ],
      follow_up: {
        question: "You found an accountability buddy. What changed in a week?",
        options: ["Nothing", "Found someone", "Had 1 check-in", "Easier to keep commitments"],
        reward: { "Easier to keep commitments": "🔥 External accountability works. You're not alone.", "Had 1 check-in": "🎉 You've created a system that works for you." }
      }
    },

    // === SOLUTION 3: TRIGGER SYSTEM ===
    {
      id: "trigger_system",
      title: "⏰ Trigger System",
      description: "You are a systems person. Create an external reminder system so you never forget. Memory fails — systems don't.",
      conditions: {
        break_reason: ["forget", "distract"],
        overload: ["ok", "busy", "overload"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 days",
      yield_estimate: "Nothing forgotten — everything under control",
      tags: ["triggers", "system"],
      steps: [
        "Set 3 phone reminders — morning, noon, evening.",
        "Link action to a trigger — 'when I have coffee, I check my list'.",
        "Use sticky notes in visible places — fridge, monitor.",
        "Review your task list every evening — 5 minutes of planning."
      ],
      warnings: [
        "DON'T rely only on memory — it's unreliable.",
        "DON'T create more than 5 triggers — it overwhelms."
      ],
      daily_action: "Set 1 reminder for your most important task today.",
      resources: [
        { type: "book", label: "📖 Atomic Habits — James Clear", url: "#" },
        { type: "technique", label: "⏰ The 'If-Then' technique (Implementation Intention)", url: "#" }
      ],
      follow_up: {
        question: "You implemented a trigger system. What changed in a week?",
        options: ["Nothing", "Set reminders", "Forgot nothing", "Everything under control"],
        reward: { "Everything under control": "🔥 The system works for you. That's pro level.", "Forgot nothing": "🎉 You stopped relying on memory." }
      }
    },

    // === SOLUTION 4: ONE MAIN COMMITMENT ===
    {
      id: "one_commitment",
      title: "🎯 One Main Commitment",
      description: "You are a strategist. Focus on one commitment — the most important one. Everything else can wait.",
      conditions: {
        top_commitment: ["top_work", "top_family", "top_self", "top_health"],
        overload: ["many", "too_many"],
        break_reason: ["overcommit", "avoid"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Fulfilling your most important promise",
      tags: ["focus", "priority"],
      steps: [
        "Choose ONE commitment — the most important right now.",
        "Make it priority #1 — everything else is secondary.",
        "Set aside 2 hours a day for it — with no distractions.",
        "After 2 weeks, evaluate: did you get it done?"
      ],
      warnings: [
        "DON'T try to do multiple things at once.",
        "DON'T let others steal your time for what matters most."
      ],
      daily_action: "Set aside 2 hours for your most important commitment today.",
      resources: [
        { type: "book", label: "📖 Essentialism — Greg McKeown", url: "#" },
        { type: "technique", label: "🎯 The 'One Priority' rule", url: "#" }
      ],
      follow_up: {
        question: "You focused on your top commitment. What changed?",
        options: ["Nothing", "Set aside time", "Made progress", "Almost done"],
        reward: { "Almost done": "🔥 Focus is a superpower. You're on the home stretch.", "Made progress": "🎉 One step at a time — and you'll get there." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_commitment",
      title: "🚀 Start with 1 Promise",
      description: "You are a person of your word. You don't need to keep all promises at once. Start with one small one — and do it today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First kept promise",
      tags: ["start", "commitment"],
      steps: [
        "Choose 1 promise you can keep today.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T take on too much.",
        "DON'T wait for the perfect moment — act."
      ],
      daily_action: "Keep 1 small promise to yourself today.",
      resources: [
        { type: "book", label: "📖 Willpower — Roy Baumeister", url: "#" },
        { type: "technique", label: "📋 Start with one: keep a promise to yourself", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 promise. What changed in a week?",
        options: ["Nothing", "Kept 1", "Kept several", "I feel self-trust"],
        reward: { "I feel self-trust": "🎉 You've proven to yourself: you are a person of your word.", "Kept several": "🔥 Self-trust is built on small wins." }
      }
    }
  ]
});

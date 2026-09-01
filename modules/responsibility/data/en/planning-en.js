// modules/responsibility/data/en/planning-en.js
// ============================================================
// PLANNING — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "responsibility",
    category: "planning",
    version: "3.0.0",
    lang: "en",
    title: "📅 Planning",
    description: "You are a strategist. A time and task management system. The 2-minute rule: if it takes < 2 minutes — do it now.",
    icon: "📅",
    color: "#3b82f6",
    identity_anchor: "You are a strategist"
  },

  questions: [
    // === QUESTION 1: Planning style (no conditions) ===
    {
      id: "planning_style",
      type: "single",
      text: "How do you usually plan your day?",
      required: true,
      options: [
        { id: "list", label: "📝 To-do lists — I write but don't always follow", tags: ["list"] },
        { id: "calendar", label: "📅 Calendar — everything by the hour", tags: ["calendar"] },
        { id: "memory", label: "🧠 In my head — I keep everything in mind", tags: ["memory"] },
        { id: "chaos", label: "🌪️ No plan — I go with the flow", tags: ["chaos"] }
      ]
    },

    // === QUESTION 2: Procrastination trigger ===
    {
      id: "procrastination",
      type: "single",
      text: "What do you most often put off?",
      required: true,
      options: [
        { id: "big_tasks", label: "🏔️ Big tasks — I'm afraid to start", tags: ["big"] },
        { id: "unpleasant", label: "😒 Unpleasant tasks — I want to avoid them", tags: ["bad"] },
        { id: "unclear", label: "🌫️ Unclear tasks — I don't know where to start", tags: ["unclear"] },
        { id: "boring", label: "😴 Boring tasks — monotonous and repetitive", tags: ["boring"] }
      ]
    },

    // === QUESTION 3: Deep work ===
    {
      id: "deep_work",
      type: "single",
      text: "How many hours of deep work do you get per day?",
      required: true,
      options: [
        { id: "none_deep", label: "❌ None — I'm constantly distracted", tags: ["none"] },
        { id: "1h", label: "🕐 1 hour — with difficulty", tags: ["low"] },
        { id: "2h", label: "🕐🕐 2 hours — comfortable", tags: ["mid"] },
        { id: "3h_plus", label: "🕐🕐🕐 3+ hours — excellent", tags: ["high"] }
      ]
    },

    // === QUESTION 4: Main planning problem ===
    {
      id: "planning_problem",
      type: "single",
      text: "What prevents you from following your plan?",
      required: true,
      options: [
        { id: "interruptions", label: "🔔 Constant interruptions — calls, messages", tags: ["interrupt"] },
        { id: "perfectionism", label: "🎯 Perfectionism — I want to do it perfectly", tags: ["perfect"] },
        { id: "overload", label: "📚 Overload — too many tasks", tags: ["overload"] },
        { id: "energy", label: "😴 No energy — I'm tired, can't keep up", tags: ["energy"] }
      ]
    },

    // === QUESTION 5: Peak hours ===
    {
      id: "peak_hours",
      type: "single",
      text: "When are you most productive?",
      required: true,
      options: [
        { id: "morning_peak", label: "🌅 Morning — 6:00 to 11:00", tags: ["morning"] },
        { id: "afternoon_peak", label: "☀️ Afternoon — 12:00 to 16:00", tags: ["afternoon"] },
        { id: "evening_peak", label: "🌙 Evening — 17:00 to 22:00", tags: ["evening"] },
        { id: "no_peak", label: "🤷 Not sure — it's all blurry", tags: ["none"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of no planning ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue living without a planning system?",
      required: true,
      conditions: { planning_style: ["chaos", "memory"] },
      options: [
        { id: "stress", label: "😰 Chronic stress and anxiety", tags: ["stress"] },
        { id: "missed_deadlines", label: "⏰ Missed deadlines", tags: ["deadlines"] },
        { id: "chaos_life", label: "🌪️ Constant chaos in life", tags: ["chaos"] },
        { id: "lost_opportunities", label: "💔 Lost opportunities", tags: ["opportunities"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what planning system did you implement? What answer do you want to give?",
      required: true,
      conditions: { planning_style: ["list", "calendar", "memory", "chaos"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: THE 2-MINUTE RULE ===
    {
      id: "two_minute_rule",
      title: "⏱️ The 2-Minute Rule",
      description: "You are a doer. If a task takes < 2 minutes — do it now. Don't plan more than 3 important tasks a day. This changes everything.",
      conditions: {
        planning_style: ["list", "chaos"],
        procrastination: ["big_tasks", "unpleasant"],
        deep_work: ["none_deep", "low"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Immediately",
      yield_estimate: "Less procrastination and more completed tasks",
      tags: ["2min", "action"],
      steps: [
        "Make a to-do list for today — everything you need to do.",
        "Choose 3 most important tasks — these are your must-dos.",
        "Apply the 2-minute rule to small tasks — do them now.",
        "Break big tasks into 25-minute steps (Pomodoro)."
      ],
      warnings: [
        "DON'T plan more than 3 important tasks a day — it's overload.",
        "DON'T put off small tasks — they accumulate and drain energy."
      ],
      daily_action: "Do everything that takes < 2 minutes right away. Don't postpone.",
      resources: [
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "⏱️ Pomodoro (25/5)", url: "#" }
      ],
      follow_up: {
        question: "You started using the 2-minute rule. What changed in a week?",
        options: ["Nothing", "Less procrastination", "More completed tasks", "I feel in control"],
        reward: { "I feel in control": "🔥 You're no longer a prisoner of chaos. Small steps work.", "More completed tasks": "🎉 Your to-do list is shrinking, not growing." }
      }
    },

    // === SOLUTION 2: INTERRUPTION PROTECTION ===
    {
      id: "interruption_protection",
      title: "🛡️ Interruption Protection",
      description: "You are a guardian of focus. The world won't end if you don't reply to a message for 30 minutes. Protect your attention.",
      conditions: {
        planning_problem: ["interruptions"],
        deep_work: ["none_deep", "low", "mid", "high"],
        planning_style: ["list", "calendar"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "40% productivity increase",
      tags: ["focus", "interruptions"],
      steps: [
        "Turn on 'Do Not Disturb' mode for 30 minutes — complete silence.",
        "Turn off notifications from social media and email during this time.",
        "Work at the same time every day — create a ritual.",
        "Use headphones or earplugs for complete silence."
      ],
      warnings: [
        "DON'T be afraid to appear unavailable — it's your right.",
        "DON'T check your phone every 5 minutes — it kills focus."
      ],
      daily_action: "Work for 30 minutes in 'Do Not Disturb' mode — no phone.",
      resources: [
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "⏰ The 'Deep Work' technique", url: "#" }
      ],
      follow_up: {
        question: "You started protecting your attention. What changed in a week?",
        options: ["Nothing", "Worked without interruptions", "More focus", "I feel productive"],
        reward: { "I feel productive": "🔥 You learned to protect your attention. That's a superpower.", "More focus": "🎉 Every day without interruptions is a step toward mastery." }
      }
    },

    // === SOLUTION 3: ENERGY PLANNING ===
    {
      id: "energy_planning",
      title: "⚡ Energy Planning",
      description: "You are not a robot. Do complex tasks at peak energy and routine work during low energy. Plan your energy, not just time.",
      conditions: {
        planning_problem: ["energy"],
        deep_work: ["none_deep", "low", "mid", "high"],
        planning_style: ["list", "calendar"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 month",
      yield_estimate: "Efficient use of energy",
      tags: ["energy", "planning"],
      steps: [
        "Identify your peak hours — morning, afternoon, or evening.",
        "Schedule complex tasks at peak energy — only these.",
        "Do routine and calls during low energy — light tasks.",
        "Take a 10-minute break every 90 minutes — ultradian rhythm."
      ],
      warnings: [
        "DON'T schedule complex tasks when you have no energy — it's inefficient.",
        "DON'T ignore rest — it restores energy."
      ],
      daily_action: "Identify your peak energy time and schedule 1 complex task for it.",
      resources: [
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "⏰ Ultradian rhythms (90/10)", url: "#" }
      ],
      follow_up: {
        question: "You started energy planning. What changed in a week?",
        options: ["Nothing", "Found my peak", "Do complex at peak", "Energy is my resource"],
        reward: { "Energy is my resource": "🔥 You stopped fighting yourself — you use your energy.", "Do complex at peak": "🎉 Complex tasks stopped being hard." }
      }
    },

    // === SOLUTION 4: GOOD ENOUGH ===
    {
      id: "good_enough",
      title: "✅ Good Enough",
      description: "You are a finisher. Perfectionism kills action. A finished project is better than a perfect one in drafts.",
      conditions: {
        planning_problem: ["perfectionism"],
        procrastination: ["big_tasks", "unclear"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 days",
      yield_estimate: "Completed tasks and less anxiety",
      tags: ["perfectionism", "action"],
      steps: [
        "Set a timer for the task and stop when time is up.",
        "Remember: '80% of results from 20% of effort' (Pareto principle).",
        "Show your work to someone before it's 'perfect'.",
        "Notice that the world didn't end because it wasn't perfect."
      ],
      warnings: [
        "DON'T redo it 10 times — do it and ship it.",
        "DON'T compare your draft to someone else's final version."
      ],
      daily_action: "Finish a task without making it perfect. Do it and ship it.",
      resources: [
        { type: "book", label: "📖 The Art of Doing Nothing — Tom Hodgkinson", url: "#" },
        { type: "technique", label: "⏱️ The Pareto Principle (80/20)", url: "#" }
      ],
      follow_up: {
        question: "You started practicing 'good enough'. What changed?",
        options: ["Nothing", "Finished 1 task", "Less rework", "I feel lighter"],
        reward: { "I feel lighter": "🔥 You're no longer a slave to perfectionism. That's freedom.", "Less rework": "🎉 Done is better than perfect." }
      }
    },

    // === SOLUTION 5: HARD FILTER ===
    {
      id: "hard_filter",
      title: "📋 Hard Filter",
      description: "You are the captain. You're saving a sinking ship — first throw out the excess. Keep only 3 tasks a day.",
      conditions: {
        planning_problem: ["overload"],
        planning_style: ["list", "chaos"],
        deep_work: ["none_deep", "low"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 day",
      yield_estimate: "Clear focus and less anxiety",
      tags: ["overload", "filter"],
      steps: [
        "Write down ALL tasks that are hanging on you — dump them from your head.",
        "Keep only the 3 most important — delete or delegate the rest.",
        "Say no to everything that doesn't fit these 3 tasks — be firm.",
        "Repeat every day — it will become a habit."
      ],
      warnings: [
        "DON'T be afraid to say 'no' — it's your protection.",
        "DON'T try to do everything — it's impossible."
      ],
      daily_action: "Choose 3 most important tasks and say no to the rest.",
      resources: [
        { type: "book", label: "📖 Essentialism — Greg McKeown", url: "#" },
        { type: "technique", label: "📋 The Eisenhower Matrix", url: "#" }
      ],
      follow_up: {
        question: "You started the hard filter. What changed in a week?",
        options: ["Nothing", "Kept 3 tasks", "Felt lighter", "I feel in control"],
        reward: { "I feel in control": "🔥 You took control into your hands. 3 tasks is all you need.", "Felt lighter": "🎉 Less tasks — more done." }
      }
    },

    // === SOLUTION 6: FALLBACK (general start) ===
    {
      id: "start_planning",
      title: "🚀 Start with 1 Rule",
      description: "You are a strategist. You don't need to build a complex system at once. Start with one rule today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First improvement in planning",
      tags: ["start", "planning"],
      steps: [
        "Choose 1 planning rule you can implement today.",
        "Write it down. Make it visible.",
        "Apply it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to implement everything at once.",
        "DON'T expect instant results — the system builds gradually."
      ],
      daily_action: "Implement 1 planning rule today.",
      resources: [
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "📋 Start with one: 3-task list or 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 planning rule. What changed in a week?",
        options: ["Nothing", "Implemented 1 rule", "Implemented several", "I feel progress"],
        reward: { "I feel progress": "🎉 You've proven to yourself: small steps work. A planning system starts with one rule." }
      }
    }
  ]
});

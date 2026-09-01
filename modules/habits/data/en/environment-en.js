// modules/habits/data/en/environment-en.js
// ============================================================
// ENVIRONMENT DESIGN — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "environment",
    version: "3.0.0",
    lang: "en",
    title: "🌍 Environment Design",
    description: "You are the architect of your space. Don't rely on willpower — rely on design.",
    icon: "🌍",
    color: "#8b5cf6",
    identity_anchor: "You are the architect of your space"
  },

  questions: [
    // === QUESTION 1: Main space (no conditions) ===
    {
      id: "env_type",
      type: "single",
      text: "Where do you spend most of your time?",
      required: true,
      options: [
        { id: "home", label: "🏠 At home", tags: ["home"] },
        { id: "office", label: "🏢 At the office", tags: ["office"] },
        { id: "mixed", label: "🔄 Mixed", tags: ["mixed"] }
      ]
    },

    // === QUESTION 2: What gets in the way ===
    {
      id: "env_problem",
      type: "single",
      text: "What in your environment interferes with your good habits?",
      required: true,
      options: [
        { id: "clutter", label: "🗑️ Clutter", tags: ["clutter"] },
        { id: "temptations", label: "🍕 Temptations within reach", tags: ["tempt"] },
        { id: "people", label: "👥 People with bad habits", tags: ["people"] },
        { id: "noise", label: "🔊 Noise and distractions", tags: ["noise"] }
      ]
    },

    // === QUESTION 3: Level of control ===
    {
      id: "env_control",
      type: "single",
      text: "Can you change your environment?",
      required: true,
      options: [
        { id: "full_control", label: "✅ Completely", tags: ["full"] },
        { id: "partial", label: "😐 Partially", tags: ["partial"] },
        { id: "no_control", label: "❌ Almost not", tags: ["none"] }
      ]
    },

    // === QUESTION 4: Trigger for a good habit ===
    {
      id: "trigger_action",
      type: "single",
      text: "What trigger do you want to create for a good habit?",
      required: true,
      options: [
        { id: "visual", label: "👁️ A reminder in a visible place", tags: ["visual"] },
        { id: "time", label: "⏰ Tied to a time of day", tags: ["time"] },
        { id: "people", label: "👥 A habit partner", tags: ["buddy"] }
      ]
    },

    // === QUESTION 5: DEEP LAYER 2 — Cost of chaos ===
    {
      id: "deep_cost",
      type: "single",
      text: "What do you lose if you don't change your environment?",
      required: true,
      conditions: { env_problem: ["clutter", "temptations", "people", "noise"] },
      options: [
        { id: "time", label: "⏰ Time and energy", tags: ["time"] },
        { id: "focus", label: "🎯 Focus and concentration", tags: ["focus"] },
        { id: "health", label: "🧠 Health and peace", tags: ["health"] },
        { id: "progress", label: "📈 Progress toward goals", tags: ["progress"] }
      ]
    },

    // === QUESTION 6: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you change in your environment? What answer do you want to give?",
      required: true,
      conditions: { env_control: ["full", "partial", "none"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: ENVIRONMENT DESIGN (for those with control) ===
    {
      id: "env_design",
      title: "🏗️ Environment Design",
      description: "You are an architect. Make good habits easy and bad habits hard. Don't rely on willpower — rely on design.",
      conditions: {
        env_control: ["full", "partial"],
        env_problem: ["clutter", "temptations", "people", "noise"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "The environment works for you",
      tags: ["env", "design"],
      steps: [
        "Remove 1 temptation from sight.",
        "Place 1 reminder for a good habit in a visible place.",
        "Create a trigger zone for the habit (everything in one place).",
        "Negotiate support with your environment."
      ],
      warnings: [
        "DON'T rely only on willpower — it's finite.",
        "DON'T change everything in 1 day — it will cause resistance."
      ],
      daily_action: "Remove 1 temptation from sight.",
      resources: [
        { type: "book", label: "📖 Atomic Habits (chapter 6) — James Clear", url: "#" },
        { type: "technique", label: "🧠 Trigger zone", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to change your environment. What did you do?",
        options: ["Nothing", "Removed 1 thing", "Created a trigger zone", "Completely redesigned the space"],
        reward: { "Completely redesigned the space": "🎉 You're a true architect. The environment now works for you." }
      }
    },

    // === SOLUTION 2: MINIMAL CHANGES (for those with no control) ===
    {
      id: "minimal_change",
      title: "🌱 Minimal Changes",
      description: "You are a gardener. Start with 1 small corner. You can't change everything at once, but you can start with 1 square meter.",
      conditions: {
        env_control: ["none"],
        env_problem: ["clutter", "temptations", "people", "noise"]
      },
      scoring: { priority: "slow", reliability: "medium" },
      time_estimate: "1 month",
      yield_estimate: "Beginning of change",
      tags: ["small", "steps"],
      steps: [
        "Find 1 corner you can control.",
        "Make it perfect for 1 habit.",
        "Use it daily at the same time.",
        "After 2 weeks, expand your zone of control."
      ],
      warnings: [
        "DON'T try to change everything at once — start with 1 square meter.",
        "DON'T get upset if progress is slow — it's normal."
      ],
      daily_action: "Organize 1 small corner for your new habit.",
      resources: [
        { type: "book", label: "📖 Minimalism — Joshua Becker", url: "#" }
      ],
      follow_up: {
        question: "You started with a small corner. What changed in a week?",
        options: ["Nothing", "Corner is there, but not using it", "Using almost every day", "Corner became a habit"],
        reward: { "Corner became a habit": "🔥 You turned a small change into a habit. That's power." }
      }
    },

    // === SOLUTION 3: FALLBACK (general start) ===
    {
      id: "start_small",
      title: "🚀 Start with 1 Thing",
      description: "You are the creator of your reality. Your environment won't change on its own. Start with 1 thing today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First change in your environment",
      tags: ["start", "small"],
      steps: [
        "Choose 1 thing in your environment that gets in the way.",
        "Remove or change it right now.",
        "Write down how you felt.",
        "Find 1 more thing tomorrow."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect instant results — small steps work."
      ],
      daily_action: "Remove 1 thing that gets in the way of your habit.",
      resources: [
        { type: "book", label: "📖 Atomic Habits — James Clear", url: "#" },
        { type: "technique", label: "🧠 The 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "A week ago you started with 1 thing. What changed?",
        options: ["Nothing", "Removed 1 thing", "Removed several", "Changing my environment every day"],
        reward: { "Changing my environment every day": "🎉 You've become the architect of your life." }
      }
    }
  ]
});

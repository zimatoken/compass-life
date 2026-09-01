// modules/habits/data/en/identity-en.js
// ============================================================
// IDENTITY SYSTEM — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "identity",
    version: "3.0.0",
    lang: "en",
    title: "🪞 Identity System",
    description: "You don't quit a habit. You become a new person.",
    icon: "🪞",
    color: "#8b5cf6",
    identity_anchor: "You are a new person"
  },

  questions: [
    // === QUESTION 1: Desired identity (no conditions) ===
    {
      id: "desired_identity",
      type: "single",
      text: "What kind of person do you want to be in 1 year?",
      required: true,
      options: [
        { id: "athlete", label: "🏃 Athletic and healthy", tags: ["health"] },
        { id: "reader", label: "📚 Reading and thinking", tags: ["mind"] },
        { id: "disciplined", label: "🎯 Disciplined", tags: ["discipline"] },
        { id: "kind", label: "❤️ Kind and caring", tags: ["relation"] },
        { id: "creator", label: "🎨 A creator", tags: ["creator"] }
      ]
    },

    // === QUESTION 2: Gap between current and desired ===
    {
      id: "current_gap",
      type: "single",
      text: "What prevents you most from becoming that person?",
      required: true,
      options: [
        { id: "time", label: "⏰ No time", tags: ["time"] },
        { id: "willpower", label: "😤 No willpower", tags: ["will"] },
        { id: "environment", label: "🏠 Environment", tags: ["env"] },
        { id: "unclear", label: "🌫️ Don't know where to start", tags: ["start"] }
      ]
    },

    // === QUESTION 3: Identity language ===
    {
      id: "identity_phrase",
      type: "single",
      text: "What phrase do you say to yourself most often?",
      required: true,
      options: [
        { id: "trying", label: "🤔 'I'm trying...'", tags: ["trying"] },
        { id: "am", label: "✅ 'I am someone who...'", tags: ["being"] },
        { id: "wish", label: "🌫️ 'I wish...'", tags: ["wishing"] },
        { id: "cant", label: "❌ 'I can't...'", tags: ["limiting"] }
      ]
    },

    // === QUESTION 4: Smallest action ===
    {
      id: "small_action",
      type: "single",
      text: "What's the smallest action that confirms your new identity?",
      required: true,
      options: [
        { id: "2min", label: "⏱️ 2 minutes", tags: ["easy"] },
        { id: "15min", label: "⏰ 15 minutes", tags: ["medium"] },
        { id: "30min", label: "⌛ 30 minutes", tags: ["hard"] }
      ]
    },

    // === QUESTION 5: DEEP LAYER 2 — Cost of staying the same ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will you lose if you stay the same person a year from now?",
      required: true,
      conditions: { desired_identity: ["athlete", "reader", "disciplined", "kind", "creator"] },
      options: [
        { id: "health", label: "🏥 Health and energy", tags: ["health"] },
        { id: "growth", label: "📈 Opportunity to grow", tags: ["growth"] },
        { id: "freedom", label: "🕊️ Freedom of choice", tags: ["freedom"] },
        { id: "potential", label: "💎 Your potential", tags: ["potential"] },
        { id: "relationships", label: "🤝 Deep relationships", tags: ["relationships"] }
      ]
    },

    // === QUESTION 6: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you do to become a new person? What answer do you want to give?",
      required: true,
      conditions: { current_gap: ["time", "willpower", "env", "start"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: HABIT THROUGH IDENTITY ===
    {
      id: "identity_habit",
      title: "🧬 Habit Through Identity",
      description: "You are a new person. Change not your actions, but your self-image. Every day is a vote for your new identity.",
      conditions: {
        identity_phrase: ["trying", "wish", "cant"],
        current_gap: ["time", "willpower", "env", "start"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "66 days",
      yield_estimate: "New identity",
      tags: ["identity", "habit"],
      steps: [
        "Formulate: 'I am someone who...' (e.g., 'I am a runner').",
        "Do 1 action in 2 minutes (run in the hallway).",
        "Repeat every day at the same time.",
        "Track progress in the tracker — every day is a vote for your new identity."
      ],
      warnings: [
        "DON'T say 'I'm trying' — say 'I am someone who'.",
        "DON'T skip 2 days in a row — the habit breaks."
      ],
      daily_action: "Do 1 action that confirms your new identity.",
      resources: [
        { type: "book", label: "📖 Atomic Habits — James Clear", url: "#" },
        { type: "technique", label: "🧠 Habit = Cue + Routine + Reward", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to become a new person. What did you do?",
        options: ["Nothing", "Tried", "Almost every day", "I already feel like a new person"],
        reward: { "I already feel like a new person": "🎉 You're not just doing — you're becoming. That's what matters." }
      }
    },

    // === SOLUTION 2: LANGUAGE SHIFT ===
    {
      id: "language_shift",
      title: "🗣️ Language Shift",
      description: "You are someone who chooses words. Language creates reality. Stop saying 'I'm trying'. Start saying 'I am someone who'.",
      conditions: {
        identity_phrase: ["trying", "wish", "cant"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 days",
      yield_estimate: "Shift in self-perception",
      tags: ["language", "identity"],
      steps: [
        "Write down 5 phrases you say to yourself.",
        "Reformulate them as 'I am someone who...'.",
        "Repeat them aloud 5 times in front of a mirror.",
        "Replace 1 old phrase with a new one in a real conversation."
      ],
      warnings: [
        "DON'T expect an immediate effect — neuroplasticity takes time.",
        "DON'T be too hard on yourself — change gradually."
      ],
      daily_action: "Replace 1 'I'm trying' phrase with 'I am someone who'.",
      resources: [
        { type: "book", label: "📖 The Power of Your Subconscious Mind — Joe Dispenza", url: "#" },
        { type: "technique", label: "🗣️ Mirror affirmations", url: "#" }
      ],
      follow_up: {
        question: "You started changing your language. Do you notice a difference?",
        options: ["No", "A little", "It feels easier", "I feel more confident"],
        reward: { "I feel more confident": "🔥 You're not just changing words — you're changing reality." }
      }
    },

    // === SOLUTION 3: FALLBACK (general start) ===
    {
      id: "start_identity",
      title: "🚀 Start with 1 Action",
      description: "You are the creator of yourself. You don't become a new person in one day. But you can start with 1 action today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action for a new identity",
      tags: ["start", "identity"],
      steps: [
        "Choose 1 action that aligns with your new identity.",
        "Do it today. Not tomorrow.",
        "Write down how you felt.",
        "Repeat tomorrow."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect to feel like a new person after 1 time."
      ],
      daily_action: "Do 1 action that aligns with your new identity.",
      resources: [
        { type: "book", label: "📖 Atomic Habits — James Clear", url: "#" },
        { type: "technique", label: "🧠 The 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "A week ago you started with 1 action. What changed?",
        options: ["Nothing", "Tried", "Almost every day", "I already feel like a new person"],
        reward: { "I already feel like a new person": "🎉 You've proven to yourself: you can change. That's the most important step." }
      }
    }
  ]
});

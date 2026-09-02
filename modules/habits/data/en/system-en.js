// modules/habits/data/en/system-en.js
// ============================================================
// HABIT SYSTEM — HOW TO BUILD SYSTEM AND ENVIRONMENT v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "system",
    version: "3.0.0",
    lang: "en",
    title: "⚙️ Habit System",
    description: "Habits live in the environment. Change the environment — change behavior. Let's build your system.",
    icon: "⚙️",
    color: "#8b5cf6",
    identity_anchor: "You are the architect of your environment"
  },

  questions: [
    {
      id: "habit_system_current",
      type: "single",
      text: "How do you usually build new habits?",
      required: true,
      options: [
        { id: "random",    label: "🎲 I try when I remember", tags: ["random"] },
        { id: "willpower", label: "💪 I try to force myself with willpower", tags: ["willpower"] },
        { id: "system",    label: "📋 I plan and create a system", tags: ["system"] },
        { id: "no",        label: "🌫️ I don't build, it just happens", tags: ["no"] }
      ]
    },
    {
      id: "system_block",
      type: "single",
      text: "What most often breaks your habit system?",
      required: true,
      conditions: { habit_system_current: ["random", "willpower", "system", "no"] },
      options: [
        { id: "environment", label: "🏠 Wrong environment (distractions)", tags: ["environment"] },
        { id: "triggers",   label: "🚫 No triggers (anchor events)", tags: ["triggers"] },
        { id: "reward",     label: "🎁 No reward, boring", tags: ["reward"] },
        { id: "time",       label: "⏰ No time for planning", tags: ["time"] },
        { id: "none",       label: "✅ Everything works", tags: ["none"] }
      ]
    },
    {
      id: "environment_importance",
      type: "single",
      text: "How much do you think environment affects your habits?",
      required: true,
      options: [
        { id: "huge",      label: "🔴 Huge impact, it's key", tags: ["huge"] },
        { id: "moderate",  label: "🟡 Moderate, but important", tags: ["moderate"] },
        { id: "little",    label: "🟢 Little, I can control myself", tags: ["little"] }
      ]
    },
    {
      id: "deep_system_sacrifice",
      type: "single",
      text: "Are you willing to change 1 thing in your environment to support a new habit?",
      required: true,
      conditions: { environment_importance: ["huge", "moderate", "little"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, not ready", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_system",
      type: "single",
      text: "In a week I'll ask what you changed in your environment. What will you answer?",
      required: true,
      conditions: { deep_system_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll change something today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about what to change", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't change anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "system_environment",
      title: "🏠 Environment Optimization",
      description: "You are a space creator. By changing the environment, you change habits effortlessly.",
      conditions: {
        system_block: ["environment"],
        habit_system_current: ["random", "willpower"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Environment that helps",
      tags: ["environment", "space", "design"],
      steps: [
        "Choose 1 habit and 1 zone where it should happen (kitchen, desk, bed).",
        "Remove everything that distracts (phone, sweets, clutter).",
        "Place necessary tools in plain sight (book, weights, notebook).",
        "Observe how it becomes easier automatically."
      ],
      warnings: [
        "Don't change everything at once — start with one zone.",
        "Don't leave temptations nearby — remove them."
      ],
      daily_action: "Today: clean 1 zone from distractions and prepare the tool for your habit.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits (environment chapter)", url: "#" },
        { type: "technique", label: "🧘 '1 meter' method — keep tools within arm's reach", url: "#" }
      ],
      follow_up: {
        question: "You changed your environment. How did it affect you?",
        options: ["No effect", "Slightly easier", "Noticeable progress", "Habit is in rhythm"],
        reward: { "Noticeable progress": "🔥 Environment is your ally." }
      }
    },
    {
      id: "system_triggers",
      title: "🔔 Triggers and Anchors",
      description: "Every habit starts with a trigger. Create an anchor, and the habit will start automatically.",
      conditions: {
        system_block: ["triggers"],
        habit_system_current: ["random", "willpower"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "System of automatic triggers",
      tags: ["triggers", "routine", "anchor"],
      steps: [
        "Choose an existing habit (brushing teeth, drinking coffee, waking up).",
        "Attach a new habit: 'After I ... (old), I will ... (new)'.",
        "Repeat daily.",
        "After 7 days, the new habit will attach to the old one."
      ],
      warnings: [
        "Don't attach to a complex habit — attach to a simple one.",
        "Don't change the order — sequence matters."
      ],
      daily_action: "Today: choose an old habit and a new one, write down their connection.",
      resources: [
        { type: "book", label: "📖 Charles Duhigg — The Power of Habit (habit loop)", url: "#" },
        { type: "technique", label: "🧘 If-Then planning", url: "#" }
      ],
      follow_up: {
        question: "You created triggers. How many times did it work in a week?",
        options: ["0", "1–3", "4–6", "7+"],
        reward: { "7+": "🔥 You created an automatic ritual." }
      }
    },
    {
      id: "system_rewards",
      title: "🎁 Rewards and Reinforcement",
      description: "The brain loves rewards. Create a system where every habit gives a small dopamine hit.",
      conditions: {
        system_block: ["reward"],
        habit_system_current: ["willpower", "random"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Sustainable motivation",
      tags: ["reward", "dopamine", "motivation"],
      steps: [
        "Choose a small reward for completing a habit (watch an episode, favorite tea, 5 minutes of rest).",
        "Reward yourself immediately after completing.",
        "Don't give the reward if you didn't do it — that's the rule.",
        "Keep a reward journal."
      ],
      warnings: [
        "Don't make the reward too big — it devalues it.",
        "Don't skip the reward if you did it — reinforcement is important."
      ],
      daily_action: "Today: choose 1 reward for your habit and link them.",
      resources: [
        { type: "book", label: "📖 Daniel Kahneman — Thinking, Fast and Slow", url: "#" },
        { type: "technique", label: "🧘 'Do-get' rule", url: "#" }
      ],
      follow_up: {
        question: "You used rewards. How many times did you get a reward in a week?",
        options: ["0", "1–3", "4–6", "7+"],
        reward: { "7+": "🔥 You created a reinforcement system." }
      }
    },
    {
      id: "system_time_planning",
      title: "⏰ Planning Habits",
      description: "You are a time manager. Schedule time for habits and they become a priority.",
      conditions: {
        system_block: ["time"],
        habit_system_current: ["random"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "A schedule that works",
      tags: ["time", "schedule", "planning"],
      steps: [
        "Block 15 minutes in your calendar daily for the habit at the same time.",
        "Make this time non-negotiable (like a meeting with yourself).",
        "If it doesn't work, reschedule — but don't cancel.",
        "After 7 days, it becomes a rhythm."
      ],
      warnings: [
        "Don't schedule for 6 AM if you're a night owl.",
        "Don't schedule 1 hour — start small."
      ],
      daily_action: "Today: open your calendar and set a 15-minute block for the habit.",
      resources: [
        { type: "book", label: "📖 David Allen — Getting Things Done", url: "#" },
        { type: "technique", label: "🧘 Pomodoro for habits", url: "#" }
      ],
      follow_up: {
        question: "You scheduled time. How many days did you allocate to the habit?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You made the habit a priority." }
      }
    },
    {
      id: "system_refinement",
      title: "📈 System Improvement",
      description: "You already have a system, but it can be improved. Make it even more reliable.",
      conditions: {
        habit_system_current: ["system"],
        system_block: ["none"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Optimized habit system",
      tags: ["system", "refinement", "optimize"],
      steps: [
        "Analyze your current system over a week.",
        "Identify 1 weak spot (misses, forgetfulness).",
        "Think of an improvement (trigger, environment, reward).",
        "Implement and test for 2 weeks."
      ],
      warnings: [
        "Don't change everything — just 1 element at a time.",
        "Don't quit improvements — they make the system stronger."
      ],
      daily_action: "Today: write down 1 weak spot in your system and think of an improvement.",
      resources: [
        { type: "book", label: "📖 Scott Young — Ultralearning", url: "#" },
        { type: "technique", label: "🧘 PDCA cycle (Plan-Do-Check-Act)", url: "#" }
      ],
      follow_up: {
        question: "You improved the system. What changes did you notice?",
        options: ["Nothing", "Slightly more stable", "Noticeable improvement", "System works perfectly"],
        reward: { "System works perfectly": "🔥 You've mastered habit building." }
      }
    },
    {
      id: "system_start",
      title: "🌱 Start from Scratch",
      description: "You don't need a perfect system. Start with one rule and build gradually.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First system rule",
      tags: ["start", "system", "simple"],
      steps: [
        "Choose 1 habit and 1 simple rule for it (e.g., 'do it for 2 minutes').",
        "Apply the rule today.",
        "Tomorrow add another rule.",
        "In a week, you'll have a small system."
      ],
      warnings: [
        "Don't invent 10 rules at once.",
        "Don't be afraid to simplify — the system should be light."
      ],
      daily_action: "Today: formulate 1 rule for one habit and follow it.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "technique", label: "🧘 1% rule", url: "#" }
      ],
      follow_up: {
        question: "You started building a system. How many rules did you create in a week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You built the foundation of a system." }
      }
    }
  ]
});


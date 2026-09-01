// modules/learning/data/en/techniques-en.js
// ============================================================
// LEARNING TECHNIQUES — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "learning",
    category: "techniques",
    version: "3.0.0",
    lang: "en",
    title: "🧠 Learning Techniques",
    description: "You are a learner. The ability to learn is a skill you can improve. Start today.",
    icon: "🧠",
    color: "#f97316",
    identity_anchor: "You are a learner"
  },

  questions: [
    // === QUESTION 1: Learning style (no conditions) ===
    {
      id: "learning_style",
      type: "single",
      text: "How do you best absorb information?",
      required: true,
      options: [
        { id: "visual", label: "👁️ Visually — through images and diagrams", tags: ["visual"] },
        { id: "auditory", label: "👂 Auditory — through lectures and podcasts", tags: ["audio"] },
        { id: "kinesthetic", label: "✋ Kinesthetically — through action and experience", tags: ["kinesthetic"] },
        { id: "reading", label: "📖 Through reading — text and notes", tags: ["reading"] }
      ]
    },

    // === QUESTION 2: Learning obstacles ===
    {
      id: "learning_problem",
      type: "single",
      text: "What prevents you from learning effectively?",
      required: true,
      options: [
        { id: "time", label: "⏰ No time", tags: ["time"] },
        { id: "focus", label: "🌪️ Can't concentrate", tags: ["focus"] },
        { id: "forget", label: "🧠 I forget quickly", tags: ["forget"] },
        { id: "motivation", label: "😐 No motivation", tags: ["motivation"] },
        { id: "overwhelm", label: "📚 Information overload", tags: ["overwhelm"] }
      ]
    },

    // === QUESTION 3: Memory techniques ===
    {
      id: "memory_technique",
      type: "single",
      text: "How do you usually memorize new things?",
      required: true,
      options: [
        { id: "repeat", label: "🔁 I repeat many times", tags: ["repeat"] },
        { id: "connect", label: "🧠 I connect to what I already know", tags: ["connect"] },
        { id: "explain", label: "🗣️ I explain to someone else", tags: ["explain"] },
        { id: "write", label: "✍️ I write it down", tags: ["write"] }
      ]
    },

    // === QUESTION 4: Learning time ===
    {
      id: "learning_time",
      type: "single",
      text: "When is it easiest for you to learn?",
      required: true,
      options: [
        { id: "morning", label: "🌅 Morning", tags: ["morning"] },
        { id: "afternoon", label: "☀️ Afternoon", tags: ["afternoon"] },
        { id: "evening", label: "🌙 Evening", tags: ["evening"] },
        { id: "anytime", label: "🔄 Anytime", tags: ["anytime"] }
      ]
    },

    // === QUESTION 5: Learning speed ===
    {
      id: "learning_speed",
      type: "single",
      text: "How would you rate your speed of learning new things?",
      required: true,
      options: [
        { id: "slow", label: "🐢 Slow — I need a lot of time", tags: ["slow"] },
        { id: "medium", label: "🐇 Average — like most people", tags: ["medium"] },
        { id: "fast", label: "🚀 Fast — I pick things up quickly", tags: ["fast"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of ineffective learning ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue learning just as ineffectively for another year?",
      required: true,
      conditions: { learning_problem: ["time", "focus", "forget", "motivation", "overwhelm"] },
      options: [
        { id: "stagnation", label: "🚫 Falling behind the market", tags: ["stagnation"] },
        { id: "frustration", label: "😤 Constant frustration", tags: ["frustration"] },
        { id: "lost_opportunities", label: "💔 Lost opportunities", tags: ["lost"] },
        { id: "burnout", label: "😩 Burnout from studying", tags: ["burnout"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: which learning technique did you implement? What answer do you want to give?",
      required: true,
      conditions: { learning_style: ["visual", "auditory", "kinesthetic", "reading"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: LEARNING SYSTEM ===
    {
      id: "learning_system",
      title: "📚 Learning System",
      description: "You are a learner. Learning is not an event, it's a process. Create a system that works for you.",
      conditions: {
        learning_problem: ["time", "focus", "overwhelm"],
        learning_style: ["visual", "auditory", "kinesthetic", "reading"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 weeks",
      yield_estimate: "Accelerated learning and better retention",
      tags: ["learn", "system"],
      steps: [
        "Use the Feynman technique — explain in simple words.",
        "Take breaks every 25 minutes (Pomodoro technique).",
        "Review after 1 day, 3 days, 7 days — spaced repetition.",
        "Connect new knowledge to what you already know."
      ],
      warnings: [
        "DON'T cram for more than 1 hour straight — your brain gets tired.",
        "DON'T learn without practice — knowledge without action is useless."
      ],
      daily_action: "Explain what you read in simple words, as if teaching a child.",
      resources: [
        { type: "book", label: "📖 Learning How to Learn — Barbara Oakley", url: "#" },
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "🧠 The Feynman Technique", url: "#" }
      ],
      follow_up: {
        question: "You started implementing a learning system. What changed in a week?",
        options: ["Nothing", "Tried the Feynman technique", "Learning is easier", "I learn faster"],
        reward: { "I learn faster": "🔥 You found your way. The system works!", "Learning is easier": "🎉 You made learning enjoyable." }
      }
    },

    // === SOLUTION 2: MEMORY PROTOCOL ===
    {
      id: "memory_protocol",
      title: "📝 Memory Protocol",
      description: "You are the guardian of knowledge. Memory is not magic — it's technique. Learn to control your memory.",
      conditions: {
        learning_problem: ["forget"],
        memory_technique: ["repeat", "write"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "50% increase in memory retention",
      tags: ["memory", "retention"],
      steps: [
        "Use spaced repetition — Anki cards or apps.",
        "Write down key ideas by hand — it activates memory.",
        "Create associations — connect new to vivid images.",
        "Speak out loud — auditory memory reinforces retention."
      ],
      warnings: [
        "DON'T try to memorize everything at once — the brain overloads.",
        "DON'T learn without repetition — forgetting starts within 24 hours."
      ],
      daily_action: "Write down 3 key ideas from what you learned and say them out loud.",
      resources: [
        { type: "book", label: "📖 How Memory Works — Elizabeth Loftus", url: "#" },
        { type: "technique", label: "🧠 Spaced repetition (Anki)", url: "#" }
      ],
      follow_up: {
        question: "You started using memory techniques. What changed?",
        options: ["Nothing", "I remember more", "I forget less", "I learn 2x faster"],
        reward: { "I learn 2x faster": "🔥 You've hacked your memory! That's a superpower.", "I forget less": "🎉 Spaced repetition works." }
      }
    },

    // === SOLUTION 3: FOCUS PROTOCOL ===
    {
      id: "focus_protocol",
      title: "🧘 Focus Protocol",
      description: "You are the guardian of focus. Concentration is not a gift — it's a habit. Start small and build up.",
      conditions: {
        learning_problem: ["focus", "overwhelm"],
        learning_time: ["morning", "afternoon", "evening", "anytime"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "2x improvement in concentration",
      tags: ["focus", "concentration"],
      steps: [
        "Start with 10 minutes of complete focus — use a timer.",
        "Turn off all notifications — phone in another room.",
        "Use the Pomodoro technique — 25 min work, 5 min break.",
        "Take 5-minute active breaks — move your body."
      ],
      warnings: [
        "DON'T check your phone during study — every distraction breaks focus.",
        "DON'T try to concentrate for more than 50 minutes without a break."
      ],
      daily_action: "Work for 10 minutes with zero distractions, phone off.",
      resources: [
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "🧘 The Pomodoro Technique", url: "#" }
      ],
      follow_up: {
        question: "You started training concentration. What changed in a week?",
        options: ["Nothing", "I can focus for 15 min", "I can focus for 30 min", "I can focus for over an hour"],
        reward: { "I can focus for over an hour": "🔥 You've become a focus master. That's expert level.", "I can focus for 30 min": "🎉 Great progress! Keep going." }
      }
    },

    // === SOLUTION 4: TIME OPTIMIZATION ===
    {
      id: "time_optimization",
      title: "⏰ Time Optimization",
      description: "You are a strategist. Study smarter, not harder. Find your productive time and use it at 100%.",
      conditions: {
        learning_problem: ["time", "motivation"],
        learning_time: ["morning", "afternoon", "evening", "anytime"],
        learning_speed: ["slow", "medium"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Double learning efficiency",
      tags: ["time", "efficiency"],
      steps: [
        "Identify your peak productivity time — morning, afternoon, or evening.",
        "Schedule hard tasks for that time, easy ones for the rest.",
        "Use the 2-minute rule — if it takes <2 minutes, do it now.",
        "Measure results, not time — what you learned, not how long you sat."
      ],
      warnings: [
        "DON'T study during non-peak hours — it's inefficient.",
        "DON'T plan hard tasks for the evening if you're a morning person."
      ],
      daily_action: "Today: identify your productive time and schedule study for it.",
      resources: [
        { type: "book", label: "📖 Essentialism — Greg McKeown", url: "#" },
        { type: "technique", label: "⏰ The 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You started optimizing your time. What changed?",
        options: ["Nothing", "Found my productive time", "I study more efficiently", "Learning is easier"],
        reward: { "I study more efficiently": "🔥 You moved from quantity to quality. That's pro level.", "Found my productive time": "🎉 Half the success is knowing when you're in shape." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_learning",
      title: "🚀 Start with 1 Technique",
      description: "You are a learner. You don't need to master everything at once. Start with one technique today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First technique in your toolkit",
      tags: ["start", "learning"],
      steps: [
        "Choose 1 learning technique you want to try.",
        "Apply it today — don't postpone.",
        "Record the result: did it become easier or harder?",
        "Tomorrow, try another or reinforce the first."
      ],
      warnings: [
        "DON'T try to master all techniques at once.",
        "DON'T expect instant results — techniques require practice."
      ],
      daily_action: "Apply 1 learning technique today and note how it felt.",
      resources: [
        { type: "book", label: "📖 Learning How to Learn — Barbara Oakley", url: "#" },
        { type: "technique", label: "🧠 Choose one: Feynman, Pomodoro, spaced repetition", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 technique. What changed in a week?",
        options: ["Nothing", "Tried 1 technique", "Using it consistently", "I learn faster"],
        reward: { "I learn faster": "🎉 You found your key to learning. Congratulations!", "Using it consistently": "🔥 The technique became a habit. That's mastery level." }
      }
    }
  ]
});

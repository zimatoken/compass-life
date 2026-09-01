// modules/learning/data/en/reading-en.js
// ============================================================
// READING AS A HABIT — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "learning",
    category: "reading",
    version: "3.0.0",
    lang: "en",
    title: "📖 Reading as a Habit",
    description: "You are a reader. Books are a bridge between you and the greatest minds. Don't just read — apply.",
    icon: "📖",
    color: "#f97316",
    identity_anchor: "You are a reader"
  },

  questions: [
    // === QUESTION 1: Reading frequency (no conditions) ===
    {
      id: "reading_freq",
      type: "single",
      text: "How often do you read books?",
      required: true,
      options: [
        { id: "never", label: "❌ I don't read", tags: ["none"] },
        { id: "rarely", label: "📅 Once a month or less", tags: ["low"] },
        { id: "weekly", label: "📆 Once a week", tags: ["mid"] },
        { id: "daily", label: "📚 Every day", tags: ["high"] }
      ]
    },

    // === QUESTION 2: Reading goal ===
    {
      id: "reading_goal",
      type: "single",
      text: "Why do you read?",
      required: true,
      options: [
        { id: "pleasure", label: "😊 For pleasure", tags: ["joy"] },
        { id: "growth", label: "📈 For growth", tags: ["growth"] },
        { id: "work", label: "💼 For work", tags: ["work"] },
        { id: "habit", label: "🔄 Just a habit", tags: ["habit"] }
      ]
    },

    // === QUESTION 3: Obstacles ===
    {
      id: "reading_block",
      type: "single",
      text: "What stops you from reading more?",
      required: true,
      options: [
        { id: "time", label: "⏰ No time", tags: ["time"] },
        { id: "focus", label: "📱 Can't concentrate", tags: ["focus"] },
        { id: "forget", label: "🧠 I forget what I read", tags: ["forget"] },
        { id: "good", label: "✅ Everything is fine", tags: ["good"] }
      ]
    },

    // === QUESTION 4: Format ===
    {
      id: "reading_format",
      type: "single",
      text: "Which format is most convenient for you?",
      required: true,
      options: [
        { id: "paper", label: "📖 Paper book", tags: ["paper"] },
        { id: "ebook", label: "📱 E-book", tags: ["ebook"] },
        { id: "audio", label: "🎧 Audiobook", tags: ["audio"] },
        { id: "mix", label: "🔄 Mix", tags: ["mix"] }
      ]
    },

    // === QUESTION 5: Applying what you read ===
    {
      id: "reading_apply",
      type: "single",
      text: "How often do you apply what you read in real life?",
      required: true,
      options: [
        { id: "never_apply", label: "❌ Never — I read and forget", tags: ["none"] },
        { id: "sometimes_apply", label: "🔄 Sometimes — when I remember", tags: ["low"] },
        { id: "often_apply", label: "✅ Often — I deliberately implement", tags: ["high"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of not reading ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you stop reading books for a year?",
      required: true,
      conditions: { reading_freq: ["never", "rarely", "weekly"] },
      options: [
        { id: "stagnation", label: "🚫 Stagnation in growth", tags: ["stagnation"] },
        { id: "narrow_view", label: "🔒 Narrowing perspective", tags: ["narrow"] },
        { id: "lost_opportunity", label: "💔 Missed opportunities", tags: ["lost"] },
        { id: "ignorance", label: "🌫️ Falling behind the world", tags: ["ignorance"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: how many pages did you read? What answer do you want to give?",
      required: true,
      conditions: { reading_freq: ["never", "rarely", "weekly", "daily"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: READING HABIT ===
    {
      id: "reading_habit",
      title: "📚 Reading Habit",
      description: "You are a reader. Start small. 5 pages a day = 20 books a year. Small steps create big results.",
      conditions: {
        reading_freq: ["never", "rarely"],
        reading_block: ["time", "focus", "forget"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "20+ books per year through 5 pages a day",
      tags: ["reading", "habit"],
      steps: [
        "Start with 5 pages a day — less than 5 minutes.",
        "Read at the same time — morning or before bed.",
        "Keep the book in plain sight — let it remind you.",
        "Keep a reading list — track your progress."
      ],
      warnings: [
        "DON'T read 5 books at once — finish one, start another.",
        "DON'T force yourself to finish boring books — quit and pick another."
      ],
      daily_action: "Read 5 pages of any book right now.",
      resources: [
        { type: "book", label: "📖 How to Read a Book — Peter Bavel", url: "#" },
        { type: "book", label: "📖 The Power of Habit — Charles Duhigg", url: "#" },
        { type: "technique", label: "📖 The 5-page rule", url: "#" }
      ],
      follow_up: {
        question: "You started reading 5 pages a day. How many days out of 7 did you read?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You built a habit! 20 books a year is the minimum.", "3–5": "🚀 Good start! Keep going, you'll get into the rhythm." }
      }
    },

    // === SOLUTION 2: DEEP READING ===
    {
      id: "deep_reading",
      title: "🔍 Deep Reading",
      description: "You are an analyst. Read less but deeper. It's not about the number of pages, but the quality of understanding and application.",
      conditions: {
        reading_freq: ["weekly", "daily"],
        reading_goal: ["growth", "work"],
        reading_block: ["forget", "focus"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "Ongoing",
      yield_estimate: "Knowledge you apply in life",
      tags: ["deep", "reading"],
      steps: [
        "Take notes in the margins — highlight the key points.",
        "Retell each chapter in your own words.",
        "Connect what you read with 3 things from your life.",
        "Act on what you read — implement immediately."
      ],
      warnings: [
        "DON'T read just for quantity — quality matters more.",
        "DON'T forget to apply — knowledge without action is useless."
      ],
      daily_action: "Write 1 note from what you read and connect it to your life.",
      resources: [
        { type: "book", label: "📖 How to Read, Remember and Apply — Mortimer Adler", url: "#" },
        { type: "technique", label: "📝 The 'Chapter Retelling' technique", url: "#" }
      ],
      follow_up: {
        question: "You started deep reading. What changed in a week?",
        options: ["Nothing", "Started taking notes", "I remember better", "I apply what I read"],
        reward: { "I apply what I read": "🔥 You're turning knowledge into action. That's rare!", "I remember better": "🎉 You've moved from passive to active reading." }
      }
    },

    // === SOLUTION 3: FOCUSED READING ===
    {
      id: "focus_reading",
      title: "🧘 Focused Reading",
      description: "You are a guardian of focus. 15 minutes of concentrated reading = 1 hour of reading with distractions. Quality over time.",
      conditions: {
        reading_block: ["focus"],
        reading_format: ["paper", "ebook", "audio", "mix"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Double reading speed and quality",
      tags: ["focus", "reading"],
      steps: [
        "Put your phone in another room — no notifications.",
        "Use a timer — 15 minutes without interruption.",
        "If your mind wanders — come back and start again.",
        "Gradually increase time to 30 minutes."
      ],
      warnings: [
        "DON'T read in bed — your brain associates bed with sleep.",
        "DON'T read without a purpose — know why you're doing it."
      ],
      daily_action: "Read 15 minutes without your phone or distractions.",
      resources: [
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" },
        { type: "technique", label: "⏱️ The '15 minutes of focus' technique", url: "#" }
      ],
      follow_up: {
        question: "You started reading without distractions. What changed?",
        options: ["Nothing", "I read faster", "I understand better", "I can read longer"],
        reward: { "I can read longer": "🔥 You're training your attention muscle. That's a superpower.", "I understand better": "🎉 You've reached a new level of awareness." }
      }
    },

    // === SOLUTION 4: APPLYING WHAT YOU READ ===
    {
      id: "apply_reading",
      title: "⚡ Applying What You Read",
      description: "You are a practitioner. Books are valuable not for what you read, but for what you do. Turn knowledge into actions.",
      conditions: {
        reading_apply: ["none", "low"],
        reading_freq: ["weekly", "daily"],
        reading_goal: ["growth", "work"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Real changes in life from every book",
      tags: ["apply", "action"],
      steps: [
        "After each chapter, write down 1 action you can take.",
        "Implement that action within the next 24 hours.",
        "After a week, check: what changed?",
        "Share your insights with someone — explaining reinforces knowledge."
      ],
      warnings: [
        "DON'T read more than 1 book without applying the previous one.",
        "DON'T delay action — implement immediately."
      ],
      daily_action: "Write down 1 action from what you read and do it today.",
      resources: [
        { type: "book", label: "📖 Do It — Not Read It — Jeff Sanders", url: "#" },
        { type: "technique", label: "⚡ The 24-hour rule: apply within a day", url: "#" }
      ],
      follow_up: {
        question: "You started applying what you read. What changed?",
        options: ["Nothing", "Took 1 action", "Took several actions", "I see real changes"],
        reward: { "I see real changes": "🔥 You're not just reading — you're changing. That's master level.", "Took several actions": "🎉 Knowledge is becoming skill. Keep going!" }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_reading",
      title: "🚀 Start with 1 Page",
      description: "You are a reader. You don't need to read a book in a week. Start with one page today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First page toward a new habit",
      tags: ["start", "reading"],
      steps: [
        "Pick any book that's nearby.",
        "Open to the first page.",
        "Read it. Yes, just one page.",
        "Do the same tomorrow."
      ],
      warnings: [
        "DON'T try to read 100 pages a day.",
        "DON'T expect it to become easy after one time."
      ],
      daily_action: "Read 1 page of any book today.",
      resources: [
        { type: "book", label: "📖 How to Read a Book — Peter Bavel", url: "#" },
        { type: "technique", label: "📖 The 1-page rule", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 page. What changed in a week?",
        options: ["Nothing", "Read 1 page", "Read more", "Got into the process"],
        reward: { "Got into the process": "🎉 You've become a reader. Congratulations!", "Read more": "🔥 A small step is becoming a habit." }
      }
    }
  ]
});

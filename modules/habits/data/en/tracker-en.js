// modules/habits/data/en/tracker-en.js
// ============================================================
// HABIT TRACKER — HOW TO TRACK AND STRENGTHEN HABITS v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "habits",
    category: "tracker",
    version: "3.0.0",
    lang: "en",
    title: "📊 Habit Tracker",
    description: "What gets measured gets improved. Find your way to track progress and stay on track.",
    icon: "📊",
    color: "#8b5cf6",
    identity_anchor: "You are the architect of your habits"
  },

  questions: [
    {
      id: "tracking_feeling",
      type: "single",
      text: "How do you feel about tracking habits?",
      required: true,
      options: [
        { id: "love",    label: "❤️ I love seeing progress", tags: ["love"] },
        { id: "curious", label: "🤔 Curious but haven't tried", tags: ["curious"] },
        { id: "lazy",    label: "😴 Too lazy to track", tags: ["lazy"] },
        { id: "useless", label: "🧐 I think it's useless", tags: ["useless"] }
      ]
    },
    {
      id: "tracking_format",
      type: "single",
      text: "What tracking method would be most convenient for you?",
      required: true,
      conditions: { tracking_feeling: ["love", "curious", "lazy", "useless"] },
      options: [
        { id: "paper",    label: "📓 Paper journal / calendar", tags: ["paper"] },
        { id: "app",      label: "📱 Mobile app", tags: ["app"] },
        { id: "social",   label: "👥 Tracking with a partner / group", tags: ["social"] },
        { id: "digital",  label: "💻 Spreadsheet / Notion / Excel", tags: ["digital"] },
        { id: "simple",   label: "✅ Simple checklist (tick)", tags: ["simple"] }
      ]
    },
    {
      id: "tracking_challenge",
      type: "single",
      text: "What is the hardest part of tracking habits for you?",
      required: true,
      options: [
        { id: "forget",    label: "⏰ I forget to mark", tags: ["forget"] },
        { id: "demotivate", label: "😔 Missing days demotivates me", tags: ["demotivate"] },
        { id: "inconsistent", label: "🔄 I can't do it consistently", tags: ["inconsistent"] },
        { id: "easy",      label: "✅ No difficulty for me", tags: ["easy"] }
      ]
    },
    {
      id: "deep_tracking_sacrifice",
      type: "single",
      text: "Are you willing to spend 2 minutes daily tracking habits, even when very tired?",
      required: true,
      conditions: { tracking_format: ["paper", "app", "social", "digital", "simple"] },
      options: [
        { id: "yes_commit", label: "✅ Yes, it's part of the process", tags: ["committed"] },
        { id: "yes_try",    label: "🤔 I'll try, but not sure", tags: ["uncertain"] },
        { id: "no",         label: "❌ No, it's extra burden", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_tracking",
      type: "single",
      text: "In a week I'll ask how many days you tracked. What will you answer?",
      required: true,
      conditions: { deep_tracking_sacrifice: ["yes_commit", "yes_try", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't keep up", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "tracking_paper",
      title: "📓 Paper Journal",
      description: "You are a tactile person. Writing by hand means living it. It creates an anchor.",
      conditions: {
        tracking_format: ["paper"],
        tracking_challenge: ["forget", "inconsistent"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "7 days of tracking and first graph",
      tags: ["paper", "habit", "anchor"],
      steps: [
        "Take a notebook and every evening put a checkmark or write 1 word about the habit.",
        "Keep the notebook visible — by the bed, on the table.",
        "If you miss a day, don't scold yourself, just mark it.",
        "After 7 days, look back — you'll see your rhythm."
      ],
      warnings: [
        "Don't use your phone — paper gives a special sense of completion.",
        "Don't make complex notes — a checkmark is enough."
      ],
      daily_action: "Today: prepare a notebook and make your first checkmark.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "technique", label: "🧘 Evening check ritual", url: "#" }
      ],
      follow_up: {
        question: "You kept a paper tracker. How many days out of 7 did you mark?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You created a physical habit." }
      }
    },
    {
      id: "tracking_app",
      title: "📱 Habit App",
      description: "Your phone is always with you, so your tracker is always with you. Use technology to your advantage.",
      conditions: {
        tracking_format: ["app"],
        tracking_challenge: ["forget", "demotivate"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Habit of tracking in the app",
      tags: ["app", "digital", "motivation"],
      steps: [
        "Install one simple app (Habitica, Loop, Daylio or similar).",
        "Set a reminder for the same time daily (e.g., 9 PM).",
        "Mark habits, even if you didn't do them — mark the skip.",
        "Check stats every 3 days — it's motivating."
      ],
      warnings: [
        "Don't install 5 apps — choose one.",
        "Don't ignore notifications — they are your helper."
      ],
      daily_action: "Today: download and set up one habit tracking app.",
      resources: [
        { type: "link", label: "🔗 Habitica — gamified tracker", url: "#" },
        { type: "link", label: "🔗 Loop — simple tracker", url: "#" }
      ],
      follow_up: {
        question: "You used the app. How many days did you track?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You integrated tracking into your digital life." }
      }
    },
    {
      id: "tracking_social",
      title: "👥 Tracking with Support",
      description: "You are a social being. Joint tracking gives accountability and support.",
      conditions: {
        tracking_format: ["social"],
        tracking_challenge: ["forget", "demotivate"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Support and consistency",
      tags: ["social", "support", "accountability"],
      steps: [
        "Find a partner or group for tracking (friend, chat, club).",
        "Agree to check in with each other (e.g., in messenger).",
        "Send each other daily reports or + marks.",
        "Discuss successes and challenges once a week."
      ],
      warnings: [
        "Don't choose a toxic partner — look for supportive ones.",
        "Don't compare your results with others."
      ],
      daily_action: "Today: write to one person and suggest joint tracking.",
      resources: [
        { type: "book", label: "📖 Charles Duhigg — The Power of Habit", url: "#" },
        { type: "technique", label: "🧘 Partner check-in", url: "#" }
      ],
      follow_up: {
        question: "You tracked with a partner. How many days did you mark?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You created a mutual support system." }
      }
    },
    {
      id: "tracking_digital",
      title: "💻 Digital Spreadsheet",
      description: "You love order and analytics. A spreadsheet gives you clarity and visibility.",
      conditions: {
        tracking_format: ["digital"],
        tracking_challenge: ["forget", "inconsistent"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Habit graph and analytics",
      tags: ["digital", "data", "analytics"],
      steps: [
        "Create a spreadsheet (Google Sheets, Excel, Notion) with columns: date, habit, mark.",
        "Enter data every day (can be in the morning).",
        "Build a simple chart or use conditional formatting.",
        "After 7 days, look at the trends."
      ],
      warnings: [
        "Don't overcomplicate — one table for all habits is enough.",
        "Don't abandon it — the table should be light."
      ],
      daily_action: "Today: create a spreadsheet and enter your first record.",
      resources: [
        { type: "link", label: "🔗 Notion habit tracker template", url: "#" },
        { type: "technique", label: "🧘 'Don't break the chain' method", url: "#" }
      ],
      follow_up: {
        question: "You kept a spreadsheet. How many days did you fill in?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 Now you have data about yourself." }
      }
    },
    {
      id: "tracking_simple",
      title: "✅ Daily Checklist",
      description: "You value simplicity. A checklist is the fastest way to not forget your habits.",
      conditions: {
        tracking_format: ["simple"],
        tracking_challenge: ["forget", "easy"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Daily clarity",
      tags: ["checklist", "simple", "quick"],
      steps: [
        "On a piece of paper or notes, write your daily habit list.",
        "Each day, tick off the completed ones.",
        "In the evening, count the ticks.",
        "After a week, you'll notice it's become easier."
      ],
      warnings: [
        "Don't write more than 5 habits — otherwise it's hard.",
        "Don't skip days — even one tick counts."
      ],
      daily_action: "Today: write a checklist for tomorrow (3–5 items).",
      resources: [
        { type: "book", label: "📖 David Allen — Getting Things Done", url: "#" },
        { type: "technique", label: "🧘 Daily review", url: "#" }
      ],
      follow_up: {
        question: "You used a checklist. How many days did you tick?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You simplified your life." }
      }
    },
    {
      id: "tracking_start",
      title: "🌱 First Step",
      description: "Any tracking starts with one action. You don't need to implement a full system right away.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First checkmark",
      tags: ["start", "first", "action"],
      steps: [
        "Choose 1 habit you want to track.",
        "Decide how you'll mark it (paper, note, calendar).",
        "Make your first mark today in the evening.",
        "Repeat tomorrow — feel the ease."
      ],
      warnings: [
        "Don't overcomplicate — one habit, one mark.",
        "Don't be afraid of misses — continue anyway."
      ],
      daily_action: "Today: choose 1 habit and make the first mark.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "technique", label: "🧘 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You started tracking. How many days in a week did you mark?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You began the path of awareness." }
      }
    }
  ]
});

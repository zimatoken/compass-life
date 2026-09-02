// modules/happiness/data/en/joy-en.js
// ============================================================
// JOY — SOURCES AND PRACTICES OF JOY v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "happiness",
    category: "joy",
    version: "3.0.0",
    lang: "en",
    title: "🌈 Joy",
    description: "Joy is not a luxury, but a necessity. Let's find your sources of light.",
    icon: "🌈",
    color: "#f59e0b",
    identity_anchor: "You are a joy seeker"
  },

  questions: [
    {
      id: "joy_source",
      type: "single",
      text: "What most often brings you joy?",
      required: true,
      options: [
        { id: "nature",    label: "🌿 Nature, walks, sun", tags: ["nature"] },
        { id: "people",    label: "👥 Communication, friends, family", tags: ["people"] },
        { id: "creation",  label: "🎨 Creativity, hobbies, craftsmanship", tags: ["creation"] },
        { id: "learning",  label: "📚 New knowledge, books, films", tags: ["learning"] },
        { id: "helping",   label: "🤝 Helping others, volunteering", tags: ["helping"] },
        { id: "rest",      label: "🛋️ Rest, food, comfort", tags: ["rest"] },
        { id: "none",      label: "🌫️ Rarely feel joy", tags: ["none"] }
      ]
    },
    {
      id: "joy_block",
      type: "single",
      text: "What prevents you from feeling joy more often?",
      required: true,
      conditions: { joy_source: ["nature", "people", "creation", "learning", "helping", "rest", "none"] },
      options: [
        { id: "stress",    label: "😩 Chronic stress, fatigue", tags: ["stress"] },
        { id: "guilt",     label: "😔 Guilt for feeling happy", tags: ["guilt"] },
        { id: "habit",     label: "🔄 Habit of not noticing the good", tags: ["habit"] },
        { id: "expectation", label: "🎯 Expecting too much", tags: ["expectation"] }
      ]
    },
    {
      id: "joy_time",
      type: "single",
      text: "How much time per day are you willing to allocate to what brings you joy?",
      required: true,
      options: [
        { id: "5min",   label: "⏳ 5–10 minutes (micro-joys)", tags: ["micro"] },
        { id: "30min",  label: "⏰ 30 minutes (sustained practice)", tags: ["medium"] },
        { id: "1hour",  label: "🕐 1 hour or more (full immersion)", tags: ["long"] },
        { id: "none",   label: "🕰️ Not willing to allocate time", tags: ["none"] }
      ]
    },
    {
      id: "deep_joy_sacrifice",
      type: "single",
      text: "Are you willing to look for and notice at least one small joy every day?",
      required: true,
      conditions: { joy_time: ["5min", "30min", "1hour", "none"] },
      options: [
        { id: "yes",    label: "✅ Yes, it's important", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's not for me", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_joy",
      type: "single",
      text: "In a week I'll ask how many moments of joy you noticed. What will you answer?",
      required: true,
      conditions: { deep_joy_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start noticing today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't find any", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "joy_micro",
      title: "☀️ Micro-joys",
      description: "You are a collector of small wonders. Every day you can find a spark if you know how to look.",
      conditions: {
        joy_time: ["5min"],
        joy_block: ["stress", "habit"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Ability to notice joy in small things",
      tags: ["micro", "mindfulness", "daily"],
      steps: [
        "Set a reminder 3 times a day: 'Find joy right now'.",
        "Note in your notes 1 joy from each hour.",
        "In the evening, reread — you'll be surprised how much good is around.",
        "In a week, you'll have trained your eye."
      ],
      warnings: [
        "Don't look for grand things — joy is in a cup of coffee, a smile, the sun.",
        "Don't skip — even on a hard day, find 1 light."
      ],
      daily_action: "Today: catch 3 micro-joys and write them down.",
      resources: [
        { type: "book", label: "📖 Thich Nhat Hanh — Happiness Is Here and Now", url: "#" },
        { type: "technique", label: "🧘 Mindfulness in everyday life", url: "#" }
      ],
      follow_up: {
        question: "You looked for micro-joys. How many did you notice in a week?",
        options: ["Less than 5", "5–10", "11–20", "More than 20"],
        reward: { "More than 20": "🔥 You shifted your focus to light." }
      }
    },
    {
      id: "joy_people",
      title: "👥 Joy of Connection",
      description: "You are a social being. People, even strangers, can be a source of joy.",
      conditions: {
        joy_source: ["people"],
        joy_block: ["stress", "habit"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Warmer relationships and support",
      tags: ["people", "connection", "support"],
      steps: [
        "Each day initiate one positive interaction (call, message, hug).",
        "Thank people for being there.",
        "Listen actively, ask questions.",
        "Record what this interaction gave you."
      ],
      warnings: [
        "Don't expect perfect conversations — sincerity matters.",
        "Don't avoid conflicts — but seek joy in resolution."
      ],
      daily_action: "Today: say something nice to a loved one.",
      resources: [
        { type: "book", label: "📖 Carl Rogers — On Becoming a Person", url: "#" },
        { type: "technique", label: "🧘 Gratitude in relationships practice", url: "#" }
      ],
      follow_up: {
        question: "You sought joy in connection. How many positive contacts did you have?",
        options: ["0", "1–3", "4–7", "More than 7"],
        reward: { "More than 7": "🔥 You built a support network." }
      }
    },
    {
      id: "joy_creation",
      title: "🎨 Creative Joy",
      description: "Creating is a natural state of being human. It gives a sense of flow and life.",
      conditions: {
        joy_source: ["creation"],
        joy_block: ["stress", "guilt"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "One finished creative project",
      tags: ["creation", "flow", "expression"],
      steps: [
        "Choose a form (drawing, sculpting, poetry, cooking).",
        "Dedicate 20 minutes daily to free creative work.",
        "Don't judge the result — just enjoy the process.",
        "After 2 weeks, give the result to yourself or a loved one."
      ],
      warnings: [
        "Don't be afraid of mistakes — in creativity, there are no errors.",
        "Don't obsess over the perfect result."
      ],
      daily_action: "Today: create something for 10 minutes just for fun.",
      resources: [
        { type: "book", label: "📖 Julia Cameron — The Artist's Way", url: "#" },
        { type: "link", label: "🔗 Creative practices for joy", url: "#" }
      ],
      follow_up: {
        question: "You created. What did you make in a week?",
        options: ["Nothing", "Sketches/drafts", "One finished piece", "Several"],
        reward: { "Several": "🔥 You reclaimed the joy of creating." }
      }
    },
    {
      id: "joy_nature",
      title: "🌿 Natural Joy",
      description: "Nature is your natural healer. It is always ready to give you peace and joy.",
      conditions: {
        joy_source: ["nature"],
        joy_block: ["stress", "habit"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Reduced stress, improved mood",
      tags: ["nature", "restore", "peace"],
      steps: [
        "Go outside daily for at least 15 minutes (no phone).",
        "Notice details: sky color, a leaf, a bird.",
        "Breathe deeply, feel the air.",
        "Keep a weather and feelings journal."
      ],
      warnings: [
        "Don't look at your phone — look around.",
        "Don't skip, even if it's raining."
      ],
      daily_action: "Today: go outside and find 3 natural objects that bring you joy.",
      resources: [
        { type: "book", label: "📖 Richard Louv — Last Child in the Woods", url: "#" },
        { type: "technique", label: "🧘 Forest bathing (Shinrin-yoku)", url: "#" }
      ],
      follow_up: {
        question: "You spent time in nature. How many days in the week?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You're reconnecting with the earth." }
      }
    },
    {
      id: "joy_explorer",
      title: "🔍 Joy Explorer",
      description: "You may not feel joy right now — but that's not permanent. Start with small explorations.",
      conditions: {
        joy_source: ["none"],
        joy_block: ["stress", "guilt", "expectation"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "First awakening of feelings",
      tags: ["explore", "curiosity", "recovery"],
      steps: [
        "Each day ask: 'What at least doesn't irritate me today?'",
        "Write it down.",
        "Gradually shift to 'What slightly pleases me?'",
        "In a month, you'll see a shift."
      ],
      warnings: [
        "Don't judge yourself for lack of joy.",
        "Don't compare to others — everyone has their path."
      ],
      daily_action: "Today: write 1 thing that didn't cause aversion.",
      resources: [
        { type: "book", label: "📖 Dr. Edith Eger — The Choice", url: "#" },
        { type: "link", label: "🔗 Support for depression", url: "#" }
      ],
      follow_up: {
        question: "You looked for first sprouts of joy. What did you notice in a week?",
        options: ["Nothing", "1–2 moments", "3–5", "More than 5"],
        reward: { "More than 5": "🔥 You're regaining your ability to feel." }
      }
    },
    {
      id: "joy_start",
      title: "🌟 Small Start",
      description: "Every practice starts small. You don't need to know what brings you joy — just start looking.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First conscious attention to joy",
      tags: ["start", "awareness", "begin"],
      steps: [
        "Close your eyes and ask: 'What am I feeling?'.",
        "Then ask: 'What would I like to feel?'.",
        "Take one small step toward that feeling (pet a cat, put on music).",
        "Repeat tomorrow."
      ],
      warnings: [
        "Don't expect instant changes.",
        "Don't be afraid of small steps — they lead to big ones."
      ],
      daily_action: "Today: do something that lifts your mood by at least 1%.",
      resources: [
        { type: "book", label: "📖 Mark Williams — Mindfulness", url: "#" },
        { type: "technique", label: "🧘 2-minute joy meditation", url: "#" }
      ],
      follow_up: {
        question: "You started looking for joy. How many actions in a week?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You're building the habit of seeing light." }
      }
    }
  ]
});

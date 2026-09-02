// modules/learning/data/en/memory-en.js
// ============================================================
// MEMORY — HOW TO IMPROVE MEMORY AND ABSORB KNOWLEDGE v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "learning",
    category: "memory",
    version: "3.0.0",
    lang: "en",
    title: "🧩 Memory",
    description: "Memory is a muscle. It can and should be trained. Unlock your memorization potential.",
    icon: "🧩",
    color: "#f97316",
    identity_anchor: "You are the master of your memory"
  },

  questions: [
    {
      id: "memory_attitude",
      type: "single",
      text: "How would you rate your memory right now?",
      required: true,
      options: [
        { id: "good",      label: "🌟 Excellent, I remember everything", tags: ["good"] },
        { id: "ok",        label: "🤔 Okay, but I have some lapses", tags: ["ok"] },
        { id: "poor",      label: "😰 I often forget important things", tags: ["poor"] },
        { id: "distracted", label: "😵 I find it hard to focus", tags: ["distracted"] }
      ]
    },
    {
      id: "memory_problem",
      type: "single",
      text: "What is the hardest part of memorizing for you?",
      required: true,
      conditions: { memory_attitude: ["good", "ok", "poor", "distracted"] },
      options: [
        { id: "names",      label: "👤 Remembering names and faces", tags: ["names"] },
        { id: "info",       label: "📚 Large amounts of information", tags: ["info"] },
        { id: "numbers",    label: "🔢 Numbers, dates, phone numbers", tags: ["numbers"] },
        { id: "focus",      label: "🎯 Concentration of attention", tags: ["focus"] },
        { id: "no_problem", label: "✅ I have no problems", tags: ["no_problem"] }
      ]
    },
    {
      id: "memory_method",
      type: "single",
      text: "Which memorization method suits you best?",
      required: true,
      options: [
        { id: "visual",     label: "👁️ Visual (pictures, diagrams)", tags: ["visual"] },
        { id: "auditory",   label: "👂 Auditory (by ear, with voice)", tags: ["auditory"] },
        { id: "kinesthetic", label: "✍️ Kinesthetic (writing by hand)", tags: ["kinesthetic"] },
        { id: "associative", label: "🔗 Associative (connections to known)", tags: ["associative"] },
        { id: "spaced",     label: "⏳ Spaced repetition", tags: ["spaced"] }
      ]
    },
    {
      id: "deep_memory_sacrifice",
      type: "single",
      text: "Are you willing to spend 10 minutes daily on memory training?",
      required: true,
      conditions: { memory_method: ["visual", "auditory", "kinesthetic", "associative", "spaced"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's not for me", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_memory",
      type: "single",
      text: "In a week I'll ask how you trained your memory. What will you answer?",
      required: true,
      conditions: { deep_memory_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't manage", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "memory_visual",
      title: "👁️ Visualization and Mind Maps",
      description: "You remember through images. Use mind maps and vivid visual associations.",
      conditions: {
        memory_method: ["visual"],
        memory_problem: ["names", "info", "numbers"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Improved memory through imagery",
      tags: ["visual", "mindmap", "images"],
      steps: [
        "Create vivid images for each concept (the weirder, the better).",
        "Draw mind maps for complex information.",
        "Connect images into a story — it helps remember sequences.",
        "Train daily by creating 3 visual associations."
      ],
      warnings: [
        "Don't make images boring — the brighter, the better remembered.",
        "Don't try to remember everything at once — break it down."
      ],
      daily_action: "Today: create 3 vivid images for what you need to remember.",
      resources: [
        { type: "book", label: "📖 Tony Buzan — Master Your Memory", url: "#" },
        { type: "technique", label: "🧘 Association method", url: "#" }
      ],
      follow_up: {
        question: "You trained visual memory. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You're developing visual thinking." }
      }
    },
    {
      id: "memory_auditory",
      title: "👂 Auditory Memory",
      description: "You remember better by hearing. Use audio recordings, rhythm, and speaking aloud.",
      conditions: {
        memory_method: ["auditory"],
        memory_problem: ["info", "numbers"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Improved auditory recall",
      tags: ["auditory", "rhythm", "speaking"],
      steps: [
        "Record information and listen before sleep.",
        "Speak important things aloud with different intonations.",
        "Create rhymes or songs for complex data.",
        "Read books and articles aloud — it trains auditory memory."
      ],
      warnings: [
        "Don't listen in noisy environments — create silence.",
        "Don't make recordings too long — better to break them up."
      ],
      daily_action: "Today: read 2 pages aloud and summarize the main point.",
      resources: [
        { type: "book", label: "📖 Dan Walsh — Audio Learning", url: "#" },
        { type: "technique", label: "🧘 Aloud repetition method", url: "#" }
      ],
      follow_up: {
        question: "You trained auditory memory. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You're developing auditory memory." }
      }
    },
    {
      id: "memory_kinesthetic",
      title: "✍️ Learning Through Writing",
      description: "You remember through action. Write, rewrite, move — information sticks through muscles.",
      conditions: {
        memory_method: ["kinesthetic"],
        memory_problem: ["info", "focus"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Improved memory through writing and movement",
      tags: ["kinesthetic", "writing", "motor"],
      steps: [
        "Rewrite key information by hand (don't type!).",
        "Use colored pens — highlight key points.",
        "Walk around the room while summarizing information.",
        "Create cheat sheets — the process of making them is already memorization."
      ],
      warnings: [
        "Don't type — write by hand, it engages motor memory.",
        "Don't rewrite mechanically — think about each line."
      ],
      daily_action: "Today: rewrite 10 key facts from what you're studying by hand.",
      resources: [
        { type: "book", label: "📖 Barbara Oakley — Learning How to Learn", url: "#" },
        { type: "technique", label: "🧘 Cornell notes method", url: "#" }
      ],
      follow_up: {
        question: "You trained memory through writing. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You're activating motor memory." }
      }
    },
    {
      id: "memory_associative",
      title: "🔗 Associations and Stories",
      description: "You remember through connections. Create stories and associative chains.",
      conditions: {
        memory_method: ["associative"],
        memory_problem: ["names", "numbers", "info"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Memorization through connections",
      tags: ["associative", "stories", "connections"],
      steps: [
        "For each name, create an association (Marina — sea).",
        "Turn numbers into images (1 — candle, 2 — swan).",
        "Connect images into funny stories.",
        "Train daily with 5 new items."
      ],
      warnings: [
        "Don't use abstract connections — only vivid images.",
        "Don't fear absurdity — it helps memory."
      ],
      daily_action: "Today: create 5 associations for new names or terms.",
      resources: [
        { type: "book", label: "📖 Joshua Foer — Moonwalking with Einstein", url: "#" },
        { type: "technique", label: "🧘 Cicero method (memory palace)", url: "#" }
      ],
      follow_up: {
        question: "You trained associative memory. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You're building a powerful network of associations." }
      }
    },
    {
      id: "memory_spaced",
      title: "⏳ Spaced Repetition",
      description: "Spaced repetition is the most effective technique. Repeat at the right times.",
      conditions: {
        memory_method: ["spaced"],
        memory_problem: ["info", "focus"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 weeks",
      yield_estimate: "Long-term retention",
      tags: ["spaced", "repetition", "longterm"],
      steps: [
        "Repeat after 5 minutes, then after an hour, then a day, then a week.",
        "Use spaced repetition apps (Anki, Quizlet).",
        "After 3 weeks, information moves to long-term memory."
      ],
      warnings: [
        "Don't repeat 10 times in one day — it doesn't work.",
        "Don't skip intervals — accuracy matters."
      ],
      daily_action: "Today: install Anki and create your first deck.",
      resources: [
        { type: "link", label: "🔗 Anki — spaced repetition cards", url: "#" },
        { type: "book", label: "📖 Peter Brown — Make It Stick", url: "#" }
      ],
      follow_up: {
        question: "You used spaced repetition. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You're locking in knowledge for good." }
      }
    },
    {
      id: "memory_start",
      title: "🌱 Start Small",
      description: "Memory is trained like a muscle. Start with one exercise today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First memory exercise",
      tags: ["start", "simple", "beginner"],
      steps: [
        "Memorize 5 new foreign language words.",
        "Test yourself after 10 minutes.",
        "Memorize a friend's phone number in 1 minute.",
        "Repeat with different words tomorrow."
      ],
      warnings: [
        "Don't start with large volumes — 5 words are enough.",
        "Don't panic if you don't remember — just repeat."
      ],
      daily_action: "Today: memorize 5 new words or facts and test yourself.",
      resources: [
        { type: "book", label: "📖 Julie Holmes — How to Improve Your Memory", url: "#" },
        { type: "technique", label: "🧘 '5 names' exercise", url: "#" }
      ],
      follow_up: {
        question: "You started training memory. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You're already strengthening your memory." }
      }
    }
  ]
});

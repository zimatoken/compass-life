// modules/learning/data/en/speedreading-en.js
// ============================================================
// SPEED READING — HOW TO READ FASTER AND ABSORB MORE v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "learning",
    category: "speedreading",
    version: "3.0.0",
    lang: "en",
    title: "⚡ Speed Reading",
    description: "Speed reading is not just about speed, but understanding. Learn to read faster and remember more.",
    icon: "⚡",
    color: "#f97316",
    identity_anchor: "You are one who reads with intelligence"
  },

  questions: [
    {
      id: "speed_reading_current",
      type: "single",
      text: "How would you rate your current reading speed?",
      required: true,
      options: [
        { id: "slow",      label: "🐢 I read slowly, syllable by syllable", tags: ["slow"] },
        { id: "medium",    label: "📖 I read okay, but slower than I'd like", tags: ["medium"] },
        { id: "fast",      label: "⚡ I read fast, but sometimes lose meaning", tags: ["fast"] },
        { id: "master",    label: "💪 I read fast and understand everything", tags: ["master"] }
      ]
    },
    {
      id: "speed_problem",
      type: "single",
      text: "What prevents you from reading faster?",
      required: true,
      conditions: { speed_reading_current: ["slow", "medium", "fast", "master"] },
      options: [
        { id: "subvocalization", label: "🗣️ I subvocalize while reading", tags: ["subvocalization"] },
        { id: "regression",      label: "↩️ I go back to what I just read", tags: ["regression"] },
        { id: "focus",           label: "🎯 I find it hard to maintain attention", tags: ["focus"] },
        { id: "no_problem",      label: "✅ Nothing prevents me", tags: ["no_problem"] }
      ]
    },
    {
      id: "reading_goal",
      type: "single",
      text: "What is your main goal for reading?",
      required: true,
      options: [
        { id: "knowledge",  label: "📚 To gain new knowledge", tags: ["knowledge"] },
        { id: "work",       label: "💼 For work or study", tags: ["work"] },
        { id: "pleasure",   label: "📖 For enjoyment and relaxation", tags: ["pleasure"] },
        { id: "development", label: "🚀 For self-development", tags: ["development"] }
      ]
    },
    {
      id: "deep_speed_sacrifice",
      type: "single",
      text: "Are you willing to spend 15 minutes daily on speed reading training?",
      required: true,
      conditions: { reading_goal: ["knowledge", "work", "pleasure", "development"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's not for me", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_speed",
      type: "single",
      text: "In a week I'll test your reading speed. What will you say?",
      required: true,
      conditions: { deep_speed_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start training today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't improve", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "speed_no_subvocal",
      title: "🗣️ Turn Off Inner Voice",
      description: "Subvocalization is the main speed limiter. Learn to read with your eyes.",
      conditions: {
        speed_problem: ["subvocalization"],
        speed_reading_current: ["slow", "medium"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "30–50% speed increase",
      tags: ["subvocalization", "speed", "technique"],
      steps: [
        "While reading, repeat '1-2-3-4-5' or count to 10 in your head — this blocks the inner voice.",
        "Use a finger guide — move your finger under the line faster than you read.",
        "Start with simple texts and gradually move to complex ones.",
        "After 2 weeks, you'll notice you understand without subvocalizing."
      ],
      warnings: [
        "Don't return to subvocalization — it's a habit to break.",
        "Don't expect instant results — it takes time."
      ],
      daily_action: "Today: read 1 page counting '1-2-3-4-5' in your head.",
      resources: [
        { type: "book", label: "📖 Tony Buzan — Speed Reading", url: "#" },
        { type: "technique", label: "🧘 Finger guide method", url: "#" }
      ],
      follow_up: {
        question: "You reduced subvocalization. How many days did you practice?",
        options: ["0", "1–3", "4–6", "7+"],
        reward: { "7+": "🔥 You broke the speed barrier." }
      }
    },
    {
      id: "speed_no_regression",
      title: "↩️ Don't Go Back",
      description: "Regression significantly slows you down. Practice reading forward without returns.",
      conditions: {
        speed_problem: ["regression"],
        speed_reading_current: ["medium", "slow"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Smooth reading without backtracking",
      tags: ["regression", "forward", "flow"],
      steps: [
        "Use a ruler or bookmark to cover what you've read — this prevents returns.",
        "Increase finger movement speed.",
        "Read in short blocks without stopping.",
        "Remember: even if you miss something — don't go back."
      ],
      warnings: [
        "Don't stop when you don't understand — read on, meaning will appear.",
        "Don't allow yourself to go back even one word."
      ],
      daily_action: "Today: read 3 pages, covering what you've read with a sheet of paper.",
      resources: [
        { type: "book", label: "📖 Andreeva — Speed Reading in 30 Days", url: "#" },
        { type: "technique", label: "🧘 'Unread' rule", url: "#" }
      ],
      follow_up: {
        question: "You fought regression. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You learned to read fluently." }
      }
    },
    {
      id: "speed_vision",
      title: "👁️ Expanding Your Vision",
      description: "You read not by words, but by word groups. The wider the field, the faster the reading.",
      conditions: {
        speed_problem: ["focus"],
        speed_reading_current: ["medium", "fast"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Perception of whole lines",
      tags: ["vision", "peripheral", "speed"],
      steps: [
        "Train peripheral vision with Schulte tables.",
        "Look at the center of the line, but try to see the edges.",
        "Read in groups of 3–5 words (not one word at a time).",
        "Increase the group size every day."
      ],
      warnings: [
        "Don't focus only on the center — learn to see with peripheral vision.",
        "Don't speed up to the point of losing understanding."
      ],
      daily_action: "Today: practice peripheral vision for 5 minutes (Schulte table).",
      resources: [
        { type: "link", label: "🔗 Schulte table online", url: "#" },
        { type: "book", label: "📖 Shamil Akhmadullin — Speed Reading for Children", url: "#" }
      ],
      follow_up: {
        question: "You expanded your vision. How many days did you train?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You see more in one glance." }
      }
    },
    {
      id: "speed_focus",
      title: "🎯 Focus and Concentration",
      description: "Reading requires attention. Learn to cut out distractions and immerse yourself in the text.",
      conditions: {
        speed_problem: ["focus"],
        speed_reading_current: ["slow", "medium"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 weeks",
      yield_estimate: "Deep immersion in text",
      tags: ["focus", "attention", "depth"],
      steps: [
        "Remove phone and other distractions.",
        "Read at the same time (ritual).",
        "Use Pomodoro technique: 25 minutes reading, 5 minutes break.",
        "Before reading, close your eyes for 1 minute — it sets the brain."
      ],
      warnings: [
        "Don't try to read in noisy places — concentration is key.",
        "Don't multitask — only reading."
      ],
      daily_action: "Today: read for 20 minutes in complete silence without phone.",
      resources: [
        { type: "book", label: "📖 Cal Newport — Digital Minimalism", url: "#" },
        { type: "technique", label: "🧘 Pomodoro for reading", url: "#" }
      ],
      follow_up: {
        question: "You trained concentration. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You've mastered deep reading." }
      }
    },
    {
      id: "speed_structural",
      title: "📋 Structural Reading",
      description: "Not all texts need to be read fully. Use structural reading for fast comprehension.",
      conditions: {
        reading_goal: ["knowledge", "work"],
        speed_reading_current: ["medium", "fast"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Fast material absorption",
      tags: ["structural", "skimming", "efficiency"],
      steps: [
        "Read headings and subheadings — they give the framework.",
        "Read the first and last paragraph of each section.",
        "Look for keywords and highlighted phrases.",
        "Summarize in 3–5 sentences after reading."
      ],
      warnings: [
        "Don't approach every text the same — different texts need different approaches.",
        "Don't ignore details if they're important."
      ],
      daily_action: "Today: read 1 article only by headings and keywords.",
      resources: [
        { type: "book", label: "📖 Mortimer Adler — How to Read a Book", url: "#" },
        { type: "technique", label: "🧘 SQ3R method", url: "#" }
      ],
      follow_up: {
        question: "You practiced structural reading. How many times did you use it?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You extract essence at maximum speed." }
      }
    },
    {
      id: "speed_start",
      title: "🌱 Start Reading Faster",
      description: "Speed reading starts small. Just try reading faster than usual.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First acceleration",
      tags: ["start", "practice", "beginner"],
      steps: [
        "Take any book.",
        "Set a timer for 10 minutes and read as much as you can.",
        "Summarize the main idea.",
        "Tomorrow try to read 20% more in the same time."
      ],
      warnings: [
        "Don't fear losing meaning — practice will find the balance.",
        "Don't compare yourself to professionals."
      ],
      daily_action: "Today: read for 10 minutes at an accelerated pace and summarize.",
      resources: [
        { type: "book", label: "📖 Shamil Akhmadullin — Fast Reading", url: "#" },
        { type: "technique", label: "🧘 Timer technique", url: "#" }
      ],
      follow_up: {
        question: "You started speed reading. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You've started the journey to speed reading." }
      }
    }
  ]
});

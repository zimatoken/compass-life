// modules/purpose/data/en/skills-en.js
// ============================================================
// SKILL MAP — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "skills",
    version: "3.0.0",
    lang: "en",
    title: "🛠️ Skill Map",
    description: "You are not the sum of what you know. You are how you use your gifts.",
    icon: "🛠️",
    color: "#f43f5e",
    identity_anchor: "You are a bearer of gifts"
  },

  questions: [
    // === QUESTION 1: Top gift (no conditions) ===
    {
      id: "top_skill",
      type: "single",
      text: "What do you do better than 80% of people?",
      required: true,
      options: [
        { id: "communication", label: "🗣️ Communication and negotiation", tags: ["soft"] },
        { id: "tech", label: "💻 Technical skills — code, repair, engineering", tags: ["hard"] },
        { id: "creative", label: "✨ Creativity — ideas, design, art", tags: ["creative"] },
        { id: "organization", label: "📋 Organization and management — processes, teams", tags: ["mgmt"] }
      ]
    },

    // === QUESTION 2: Skill level ===
    {
      id: "skill_level",
      type: "single",
      text: "How confident are you in this skill?",
      required: true,
      options: [
        { id: "expert", label: "⭐ Expert — people call me for tough things", tags: ["expert"] },
        { id: "advanced", label: "📈 Advanced — I handle complex tasks confidently", tags: ["advanced"] },
        { id: "intermediate", label: "📚 Intermediate — I can do it, but not effortlessly", tags: ["mid"] }
      ]
    },

    // === QUESTION 3: Readiness to monetize ===
    {
      id: "monetize_ready",
      type: "single",
      text: "Are you ready to sell this skill?",
      required: true,
      conditions: { skill_level: ["expert", "advanced"] },
      options: [
        { id: "yes_sell", label: "✅ Yes, I'm ready to monetize", tags: ["sell"] },
        { id: "not_yet", label: "😐 Not yet — I want to improve", tags: ["grow"] },
        { id: "no_want", label: "❌ I don't want to sell — it's personal", tags: ["keep"] }
      ]
    },

    // === QUESTION 4: Learning style ===
    {
      id: "learning_style",
      type: "single",
      text: "How do you learn best?",
      required: true,
      options: [
        { id: "visual", label: "👁️ Visually — diagrams, videos, images", tags: ["visual"] },
        { id: "audio", label: "🎧 Auditory — podcasts, lectures, audiobooks", tags: ["audio"] },
        { id: "practice", label: "✋ Hands-on — doing, trying, experimenting", tags: ["kinesthetic"] },
        { id: "read", label: "📖 Through reading — books, articles, documentation", tags: ["read"] }
      ]
    },

    // === QUESTION 5: Favorite tasks ===
    {
      id: "favorite_tasks",
      type: "single",
      text: "What tasks within your skill do you enjoy most?",
      required: true,
      options: [
        { id: "complex", label: "🧩 Complex — where I need to think and solve", tags: ["complex"] },
        { id: "creative", label: "🎨 Creative — where I need imagination", tags: ["creative"] },
        { id: "helping", label: "🤝 People-related — mentoring, supporting", tags: ["people"] },
        { id: "building", label: "🔨 Building — creating something tangible", tags: ["build"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of unrealized skills ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you don't start using your top skill to its full potential in the next 2 years?",
      required: true,
      conditions: { skill_level: ["expert", "advanced", "intermediate"] },
      options: [
        { id: "talent_wasted", label: "💔 Wasted talent", tags: ["wasted"] },
        { id: "regret", label: "😔 Regret about unused potential", tags: ["regret"] },
        { id: "stagnation", label: "🚫 Stagnation in growth", tags: ["stagnation"] },
        { id: "others_benefit", label: "😤 Others use your talent", tags: ["others"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: how did you use your top skill? What answer do you want to give?",
      required: true,
      conditions: { top_skill: ["communication", "tech", "creative", "organization"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: MONETIZE EXPERTISE ===
    {
      id: "monetize_expert",
      title: "💎 Monetize Expertise",
      description: "You are an expert. People pay for your experience, not your time. Time to step out of the shadows.",
      conditions: {
        skill_level: ["expert"],
        monetize_ready: ["yes_sell"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "First income from your skill",
      tags: ["monetize", "expert"],
      steps: [
        "Package your expertise into a product — consultation, course, service.",
        "Create 3 free materials — show your value.",
        "Build a personal brand on social media — start with 1 platform.",
        "Get your first paying client — start small."
      ],
      warnings: [
        "DON'T underprice — you're worth more than you think.",
        "DON'T take more than 3 clients at the start — quality over quantity."
      ],
      daily_action: "Write a post about your top skill on social media.",
      resources: [
        { type: "book", label: "📖 Expert — Brendon Burchard", url: "#" },
        { type: "book", label: "📖 The Wealthy Freelancer — Michael Masterson", url: "#" }
      ],
      follow_up: {
        question: "You started monetizing expertise. What changed in a week?",
        options: ["Nothing", "Wrote a post about my skill", "Created free material", "Got a paying client"],
        reward: { "Got a paying client": "🔥 You've moved from expert to entrepreneur.", "Created free material": "🎉 You've shown the world your value." }
      }
    },

    // === SOLUTION 2: LEVEL UP TO EXPERT ===
    {
      id: "level_up",
      title: "📈 Level Up to Expert",
      description: "You are a learner. You have a good foundation. Just 1000 hours of deliberate practice stand between you and expertise.",
      conditions: {
        skill_level: ["advanced", "intermediate"],
        monetize_ready: ["grow", "not_yet"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "6–18 months",
      yield_estimate: "Expert level and confidence",
      tags: ["growth", "practice"],
      steps: [
        "Find a mentor or enroll in a quality course.",
        "Practice 1 hour a day — deliberately, without distractions.",
        "Get feedback — from mentor, colleagues, clients.",
        "Share your progress publicly — it creates accountability."
      ],
      warnings: [
        "DON'T skip the fundamentals — they support everything else.",
        "DON'T learn theory without practice — it creates the illusion of knowledge."
      ],
      daily_action: "Spend 1 hour on deliberate practice of your skill.",
      resources: [
        { type: "book", label: "📖 Mindset — Carol Dweck", url: "#" },
        { type: "book", label: "📖 Mastery — George Leonard", url: "#" }
      ],
      follow_up: {
        question: "You started leveling up. What changed in a week?",
        options: ["Nothing", "Practiced 3 days", "Practiced every day", "I feel progress"],
        reward: { "I feel progress": "🔥 You're getting closer to expertise every day.", "Practiced every day": "🎉 Discipline is what separates the master." }
      }
    },

    // === SOLUTION 3: APPLY YOUR SKILL ===
    {
      id: "apply_skill",
      title: "🚀 Apply Your Skill",
      description: "You are a bearer of gifts. Your skill should work for you and the world. Start applying it right now.",
      conditions: {
        top_skill: ["communication", "tech", "creative", "organization"],
        skill_level: ["advanced", "intermediate"],
        favorite_tasks: ["complex", "creative", "helping", "building"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "First real application of your skill",
      tags: ["apply", "action"],
      steps: [
        "Find a task or project where your skill is needed.",
        "Offer your help for free — for experience and portfolio.",
        "Do the work well — so they want to pay next time.",
        "Ask for feedback or recommendation — these are your assets."
      ],
      warnings: [
        "DON'T wait for the perfect moment — it won't come.",
        "DON'T be afraid to do it imperfectly — action beats inaction."
      ],
      daily_action: "Find 1 task where you can apply your skill and offer your help.",
      resources: [
        { type: "book", label: "📖 Do What You Love — Sir Ken Robinson", url: "#" },
        { type: "technique", label: "🚀 The 'Do 1 action today' rule", url: "#" }
      ],
      follow_up: {
        question: "You started applying your skill. What changed in a week?",
        options: ["Nothing", "Found a task", "Did the work", "Got feedback"],
        reward: { "Got feedback": "🔥 Your skill now has value for others.", "Did the work": "🎉 You've moved from theory to practice." }
      }
    },

    // === SOLUTION 4: LEARN TO LEARN ===
    {
      id: "learn_to_learn",
      title: "🧠 Learn to Learn",
      description: "You are a learner who learns to learn. This is the most important skill in a changing world.",
      conditions: {
        skill_level: ["intermediate", "advanced"],
        monetize_ready: ["no_want", "not_yet"],
        learning_style: ["visual", "audio", "practice", "read"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Accelerated learning of any skill",
      tags: ["learning", "growth"],
      steps: [
        "Choose 1 skill to learn — one you've always wanted.",
        "Use the Feynman technique — explain in simple words.",
        "Apply spaced repetition — review after 1, 3, 7 days.",
        "Teach someone else — the best way to learn is to teach."
      ],
      warnings: [
        "DON'T try to learn everything at once — choose 1 skill.",
        "DON'T learn without practice — knowledge without action is useless."
      ],
      daily_action: "Explain out loud what you're learning in simple words, as if teaching a child.",
      resources: [
        { type: "book", label: "📖 Learning How to Learn — Barbara Oakley", url: "#" },
        { type: "book", label: "📖 Deep Work — Cal Newport", url: "#" }
      ],
      follow_up: {
        question: "You started learning to learn. What changed in a week?",
        options: ["Nothing", "Tried a new technique", "Learning got easier", "I remember faster"],
        reward: { "I remember faster": "🔥 You've mastered the meta-skill. Now you can learn anything.", "Learning got easier": "🎉 Learning became enjoyable, not hard." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_skill",
      title: "🚀 Start with 1 Action",
      description: "You are a bearer of gifts. You don't need to become an expert overnight. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action toward realizing your skill",
      tags: ["start", "skill"],
      steps: [
        "Choose 1 skill you want to develop or apply.",
        "Take 1 action with this skill today.",
        "Write down what happened.",
        "Tomorrow, repeat or take the next step."
      ],
      warnings: [
        "DON'T try to develop all skills at once.",
        "DON'T expect it to become easy after one time."
      ],
      daily_action: "Take 1 action related to your top skill today.",
      resources: [
        { type: "book", label: "📖 Mastery — George Leonard", url: "#" },
        { type: "technique", label: "🛠️ The 1% rule — improve your skill by 1% every day", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 action. What changed in a week?",
        options: ["Nothing", "Took 1 action", "Took several actions", "I feel progress"],
        reward: { "I feel progress": "🎉 You've proven to yourself: small steps work. Keep moving." }
      }
    }
  ]
});

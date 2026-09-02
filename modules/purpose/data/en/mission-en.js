// modules/purpose/data/en/mission-en.js
// ============================================================
// MISSION — SEARCH FOR MEANING AND IMPACT v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "mission",
    version: "3.0.0",
    lang: "en",
    title: "🚀 Mission",
    description: "You are not just a person. You are a solution looking for its problem. Let's find your contribution.",
    icon: "🚀",
    color: "#f43f5e",
    identity_anchor: "You are a mission seeker"
  },

  questions: [
    {
      id: "world_concern",
      type: "single",
      text: "What truly concerns you in the world?",
      required: true,
      options: [
        { id: "ecology",   label: "🌍 Ecology and nature", tags: ["ecology"] },
        { id: "education", label: "📚 Education and knowledge", tags: ["education"] },
        { id: "health",    label: "🏥 Health and medicine", tags: ["health"] },
        { id: "tech",      label: "💻 Technology and innovation", tags: ["tech"] },
        { id: "art",       label: "🎨 Art and culture", tags: ["art"] },
        { id: "people",    label: "🤝 People and communities", tags: ["people"] },
        { id: "unknown",   label: "🌫️ Not sure yet / want to understand", tags: ["unknown"] }
      ]
    },
    {
      id: "unlimited_resources",
      type: "single",
      text: "If you had unlimited resources, what problem would you solve first?",
      required: true,
      conditions: { world_concern: ["ecology", "education", "health", "tech", "art", "people", "unknown"] },
      options: [
        { id: "solve_global",  label: "🌐 A global problem (climate change, hunger, wars)", tags: ["global"] },
        { id: "solve_local",   label: "🏘️ A local problem (city, community, family)", tags: ["local"] },
        { id: "solve_self",    label: "🧘 Personal growth and self-realization", tags: ["self"] },
        { id: "solve_unknown", label: "🔍 Don't know — I want to understand what matters", tags: ["unknown"] }
      ]
    },
    {
      id: "meaning_action",
      type: "single",
      text: "What do you do when you want to feel that you are not living in vain?",
      required: true,
      conditions: { unlimited_resources: ["solve_global", "solve_local", "solve_self", "solve_unknown"] },
      options: [
        { id: "help_others", label: "🤝 Help others", tags: ["help"] },
        { id: "create",      label: "🎨 Create something new", tags: ["create"] },
        { id: "learn",       label: "📖 Learn and develop", tags: ["learn"] },
        { id: "lead",        label: "👥 Lead others", tags: ["lead"] },
        { id: "reflect",     label: "🧘 Reflect and seek depth", tags: ["reflect"] }
      ]
    },
    {
      id: "deep_sacrifice_mission",
      type: "single",
      text: "Are you willing to spend 1 hour per week searching for your mission, even if the result is unclear?",
      required: true,
      conditions: { meaning_action: ["help_others", "create", "learn", "lead", "reflect"] },
      options: [
        { id: "yes_commit", label: "✅ Yes, I'm ready to dedicate time", tags: ["committed"] },
        { id: "yes_try",    label: "🤔 I'll try, but not sure", tags: ["uncertain"] },
        { id: "no_time",    label: "❌ I don't have time right now", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_mission",
      type: "single",
      text: "In a week I'll ask what you did to find your mission. What will you answer?",
      required: true,
      conditions: { deep_sacrifice_mission: ["yes_commit", "yes_try", "no_time"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today — write the first thought", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think, but won't promise actions", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't find it", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // Global Visionary
    {
      id: "mission_visionary",
      title: "🌍 Visionary of Change",
      description: "You see the world broadly. Your mission is large-scale. You can inspire and transform systems.",
      conditions: {
        unlimited_resources: ["solve_global"],
        meaning_action: ["help_others", "lead", "create"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 months",
      yield_estimate: "A clear vision of your contribution",
      tags: ["global", "vision", "impact"],
      steps: [
        "Formulate one global problem that matters to you.",
        "Describe the ideal solution — what does the world look like after it's solved?",
        "Find 1 organization or community working in this area.",
        "Reach out and offer your help — even 1 hour per week."
      ],
      warnings: [
        "Don't try to solve everything at once — start small.",
        "Don't wait for someone to give you a role — create it yourself."
      ],
      daily_action: "Today: write down 1 global problem and 1 way you can help right now.",
      resources: [
        { type: "book", label: "📖 Stephen Covey — The 7 Habits of Highly Effective People", url: "#" },
        { type: "link", label: "🔗 Change.org — find a petition on your issue", url: "#" }
      ],
      follow_up: {
        question: "You chose the visionary path. What did you do this week?",
        options: ["Nothing", "Found an organization", "Contacted them", "Already helping"],
        reward: { "Already helping": "🔥 You're not just dreaming — you're acting. That is mission." }
      }
    },
    // Local Hero
    {
      id: "mission_local_hero",
      title: "🏘️ Local Hero",
      description: "You change the world around you. Your mission is to care for others and create a healthy environment.",
      conditions: {
        unlimited_resources: ["solve_local"],
        meaning_action: ["help_others", "lead"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "1 real project in your area",
      tags: ["local", "community", "action"],
      steps: [
        "Identify 1 problem in your neighborhood (yard, school, work).",
        "Talk to neighbors/colleagues — what do they think?",
        "Gather a small team of 2–3 people.",
        "Take the first step (cleanup, donation drive, meeting)."
      ],
      warnings: [
        "Don't wait for the perfect plan — start small.",
        "Don't do everything alone — find allies."
      ],
      daily_action: "Today: write 1 problem in your area and 1 person to discuss it with.",
      resources: [
        { type: "book", label: "📖 Dr. Edith Eger — The Choice", url: "#" },
        { type: "technique", label: "🧘 5-step local change method", url: "#" }
      ],
      follow_up: {
        question: "You started a local project. What's the progress?",
        options: ["Not started", "Found a problem", "Gathered a team", "Took the first step"],
        reward: { "Took the first step": "🔥 You're already changing reality around you. That is mission." }
      }
    },
    // Self-Mastery
    {
      id: "mission_self_mastery",
      title: "🧘 Architect of Self",
      description: "Your mission is to become the best version of yourself. You believe that changing yourself changes the world.",
      conditions: {
        unlimited_resources: ["solve_self"],
        meaning_action: ["learn", "reflect"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "6 months",
      yield_estimate: "A personal development plan and 1 completed project",
      tags: ["self", "growth", "mastery"],
      steps: [
        "Define 3 areas you want to grow in (e.g., health, skills, relationships).",
        "For each area, choose 1 specific measurable goal.",
        "Find a mentor or course for each goal.",
        "Keep a progress journal — write 1 achievement daily."
      ],
      warnings: [
        "Don't spread yourself across 10 goals — choose 3.",
        "Don't expect quick results — growth takes time."
      ],
      daily_action: "Today: write 3 development goals and 1 step for each.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "link", label: "🔗 Coursera — Personal Development courses", url: "#" }
      ],
      follow_up: {
        question: "You started self-development. What did you do this week?",
        options: ["Nothing", "Wrote goals", "Started practicing", "Already see progress"],
        reward: { "Already see progress": "🔥 You are the architect of your life. Keep going!" }
      }
    },
    // Creator
    {
      id: "mission_creator",
      title: "🎨 Creator of Meaning",
      description: "You create beauty and meaning. Your mission is to inspire others through art, ideas, stories.",
      conditions: {
        meaning_action: ["create", "reflect"],
        world_concern: ["art"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 months",
      yield_estimate: "1 creative project reflecting your mission",
      tags: ["art", "create", "inspire"],
      steps: [
        "Choose a creative form (text, music, painting, video).",
        "Articulate one idea you want to share with the world.",
        "Create a draft — don't be afraid of imperfection.",
        "Show it to 1 person and get feedback."
      ],
      warnings: [
        "Don't wait for inspiration — it's created by action.",
        "Don't judge yourself at the start — give yourself permission to make mistakes."
      ],
      daily_action: "Today: create something small (5 minutes) on a topic that matters to you.",
      resources: [
        { type: "book", label: "📖 Julia Cameron — The Artist's Way", url: "#" },
        { type: "technique", label: "🧘 Morning Pages", url: "#" }
      ],
      follow_up: {
        question: "You started creating. What did you do this week?",
        options: ["Nothing", "Sketched ideas", "Made first draft", "Showed someone"],
        reward: { "Showed someone": "🔥 You moved from idea to action — that's the main thing." }
      }
    },
    // Mentor
    {
      id: "mission_mentor",
      title: "👥 Mentor of Generations",
      description: "Your mission is to pass on knowledge and help others grow. You are a bridge between experience and the future.",
      conditions: {
        meaning_action: ["help_others", "learn", "lead"],
        world_concern: ["education", "people"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "1 mentee or 1 workshop delivered",
      tags: ["mentor", "teach", "legacy"],
      steps: [
        "Recall what you're good at and can teach others.",
        "Find 1 person who wants to learn that.",
        "Give 1 free consultation or lesson.",
        "Record the outcome — how did your student improve?"
      ],
      warnings: [
        "Don't expect the student to understand everything immediately — be patient.",
        "Don't teach everything at once — focus on 1 skill."
      ],
      daily_action: "Today: write a post or message offering help in your area of expertise.",
      resources: [
        { type: "book", label: "📖 John Maxwell — Leadership", url: "#" },
        { type: "link", label: "🔗 MentorCruise — find a mentee", url: "#" }
      ],
      follow_up: {
        question: "You started mentoring. How's it going?",
        options: ["Not started", "Found a mentee", "Had 1 session", "Seeing the mentee's progress"],
        reward: { "Seeing the mentee's progress": "🔥 You're changing not just your life — you're changing others'." }
      }
    },
    // Fallback
    {
      id: "mission_start",
      title: "🚀 Start Small",
      description: "You are on a journey. You don't need to know everything today. Just start moving.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First conscious step",
      tags: ["start", "universal", "action"],
      steps: [
        "Write 3 words that describe your values.",
        "Write 1 sentence: 'I want to contribute to ________.' (Fill in the blank.)",
        "Share this sentence with 1 person.",
        "Repeat tomorrow — refine, deepen, elaborate."
      ],
      warnings: [
        "Don't try to find the final answer today — it's a process.",
        "Don't compare your path to others' — everyone has a unique mission."
      ],
      daily_action: "Today: write 1 sentence about your mission and show it to a friend.",
      resources: [
        { type: "book", label: "📖 Rick Rubin — The Creative Act", url: "#" },
        { type: "technique", label: "🧘 5-minute meditation on 'My calling'", url: "#" }
      ],
      follow_up: {
        question: "You started searching for mission. What did you do this week?",
        options: ["Nothing", "Wrote values", "Wrote a sentence", "Discussed with someone"],
        reward: { "Discussed with someone": "🔥 You've done the most important thing — started a dialogue. Mission is born in conversation." }
      }
    }
  ]
});

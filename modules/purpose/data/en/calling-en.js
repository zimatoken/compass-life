// modules/purpose/data/en/calling-en.js
// ============================================================
// CALLING — TALENTS, FLOW AND ENERGY v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "calling",
    version: "3.0.0",
    lang: "en",
    title: "💎 Calling",
    description: "You are not an accident. You have a gift waiting to be expressed. Let's find your flow.",
    icon: "💎",
    color: "#f43f5e",
    identity_anchor: "You are a carrier of calling"
  },

  questions: [
    {
      id: "natural_talent",
      type: "single",
      text: "What comes easily to you, but seems difficult for others?",
      required: true,
      options: [
        { id: "logic",    label: "🧠 Logic, analysis, numbers", tags: ["logic"] },
        { id: "words",    label: "✍️ Words, writing, stories", tags: ["words"] },
        { id: "people",   label: "🤝 Communication, empathy, support", tags: ["people"] },
        { id: "art",      label: "🎨 Creativity, intuition, imagery", tags: ["art"] },
        { id: "organize", label: "📊 Organization, planning, systems", tags: ["organize"] },
        { id: "hands",    label: "🔨 Working with hands, repairs, cooking", tags: ["hands"] },
        { id: "unknown",  label: "🌫️ I don't know / no one has told me", tags: ["unknown"] }
      ]
    },
    {
      id: "flow_activity",
      type: "single",
      text: "What do you lose track of time doing?",
      required: true,
      conditions: { natural_talent: ["logic", "words", "people", "art", "organize", "hands", "unknown"] },
      options: [
        { id: "flow_solving", label: "🧩 Solving a complex problem", tags: ["solving"] },
        { id: "flow_creating", label: "🎨 Creating something new (text, design, music)", tags: ["creating"] },
        { id: "flow_teaching", label: "👩‍🏫 Explaining something to someone else", tags: ["teaching"] },
        { id: "flow_building", label: "🔨 Building, crafting, cooking", tags: ["building"] },
        { id: "flow_planning", label: "📅 Planning, organizing, systematizing", tags: ["planning"] },
        { id: "flow_helping", label: "🤝 Helping, listening, supporting", tags: ["helping"] }
      ]
    },
    {
      id: "thanks_reason",
      type: "single",
      text: "What do people usually thank you for?",
      required: true,
      conditions: { flow_activity: ["flow_solving", "flow_creating", "flow_teaching", "flow_building", "flow_planning", "flow_helping"] },
      options: [
        { id: "thank_clear",    label: "🧼 For clarity and order", tags: ["clear"] },
        { id: "thank_inspire",  label: "🌟 For inspiration and ideas", tags: ["inspire"] },
        { id: "thank_support",  label: "❤️ For support and care", tags: ["support"] },
        { id: "thank_knowledge",label: "📚 For knowledge and wisdom", tags: ["knowledge"] },
        { id: "thank_results",  label: "✅ For results and actions", tags: ["results"] }
      ]
    },
    {
      id: "deep_calling_sacrifice",
      type: "single",
      text: "Are you willing to do this every day, even if you are not paid for it?",
      required: true,
      conditions: { thanks_reason: ["thank_clear", "thank_inspire", "thank_support", "thank_knowledge", "thank_results"] },
      options: [
        { id: "yes_passion", label: "✅ Yes, it's my passion", tags: ["passion"] },
        { id: "yes_mostly",  label: "🤔 Mostly yes, but sometimes I get tired", tags: ["mostly"] },
        { id: "no_money",    label: "❌ No, I do it for money", tags: ["money"] }
      ]
    },
    {
      id: "follow_up_calling",
      type: "single",
      text: "In a week I'll ask how much time you devoted to your calling. What will you answer?",
      required: true,
      conditions: { deep_calling_sacrifice: ["yes_passion", "yes_mostly", "no_money"] },
      options: [
        { id: "ready",      label: "🚀 I'll start practicing today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think, but won't promise", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't find the time", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // Analyst
    {
      id: "calling_analyst",
      title: "🧠 Solution Architect",
      description: "You see structure and systems. Your calling is to solve complex problems and find answers.",
      conditions: {
        natural_talent: ["logic"],
        flow_activity: ["flow_solving"],
        thanks_reason: ["thank_clear", "thank_results"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "1 completed analytical project",
      tags: ["logic", "solve", "system"],
      steps: [
        "Choose a field where analysis is needed (finance, business, health, education).",
        "Find 1 real problem in that field.",
        "Gather data (research, survey, read).",
        "Propose 3 solutions and choose the best one."
      ],
      warnings: [
        "Don't get stuck in analysis — the solution must be practical.",
        "Don't try to solve everything at once — start small."
      ],
      daily_action: "Today: analyze 1 question in your field and write 3 hypotheses.",
      resources: [
        { type: "book", label: "📖 Charles Duhigg — The Power of Habit", url: "#" },
        { type: "technique", label: "🧘 5 Whys method", url: "#" }
      ],
      follow_up: {
        question: "You are an analyst. What did you do this week?",
        options: ["Nothing", "Chose a problem", "Gathered data", "Found a solution"],
        reward: { "Found a solution": "🔥 You don't just think — you change." }
      }
    },
    // Communicator
    {
      id: "calling_communicator",
      title: "🗣️ Communication Master",
      description: "You connect people and convey meaning. Your calling is to inspire and guide.",
      conditions: {
        natural_talent: ["people", "words"],
        flow_activity: ["flow_teaching", "flow_helping"],
        thanks_reason: ["thank_support", "thank_inspire"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "One conversation that changed someone's life",
      tags: ["people", "teach", "inspire"],
      steps: [
        "Recall who you helped recently.",
        "Write a thank you note to that person (or yourself).",
        "Have 1 conversation where you listen more than you speak.",
        "Write down what new thing you learned about yourself."
      ],
      warnings: [
        "Don't give unsolicited advice — listen first.",
        "Don't wait for gratitude — do it because you feel it."
      ],
      daily_action: "Today: tell someone sincere 'thank you' for being in your life.",
      resources: [
        { type: "book", label: "📖 Dale Carnegie — How to Win Friends and Influence People", url: "#" },
        { type: "technique", label: "🧘 Active listening practice", url: "#" }
      ],
      follow_up: {
        question: "You are developing communication. What did you do this week?",
        options: ["Nothing", "Thanked someone", "Had a deep conversation", "Saw changes"],
        reward: { "Saw changes": "🔥 You are a catalyst. Keep going." }
      }
    },
    // Creator
    {
      id: "calling_creator",
      title: "🎨 Idea Generator",
      description: "You are a source of novelty. Your calling is to create beauty, meaning, and inspiration.",
      conditions: {
        natural_talent: ["art"],
        flow_activity: ["flow_creating"],
        thanks_reason: ["thank_inspire", "thank_results"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "1 completed creative work",
      tags: ["art", "create", "inspire"],
      steps: [
        "Choose a form of expression (drawing, poem, melody, collage).",
        "Set aside 15 minutes a day for experimentation.",
        "Create 5 drafts, choose 1 best.",
        "Show the result to 1 person (someone you trust)."
      ],
      warnings: [
        "Don't wait for inspiration — create regularly.",
        "Don't compare yourself to masters — compare with yourself yesterday."
      ],
      daily_action: "Today: create something small in 5 minutes without judging the result.",
      resources: [
        { type: "book", label: "📖 Rick Rubin — The Creative Act", url: "#" },
        { type: "link", label: "🔗 Skillshare — creative lessons", url: "#" }
      ],
      follow_up: {
        question: "You are creating. What did you do this week?",
        options: ["Nothing", "Sketched ideas", "Created a draft", "Showed the result"],
        reward: { "Showed the result": "🔥 You are a creator. Keep it up." }
      }
    },
    // Organizer
    {
      id: "calling_organizer",
      title: "📊 Architect of Order",
      description: "You bring order and create systems. Your calling is to make the world more structured.",
      conditions: {
        natural_talent: ["organize", "logic"],
        flow_activity: ["flow_planning"],
        thanks_reason: ["thank_clear", "thank_results"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 month",
      yield_estimate: "1 optimized process in your life",
      tags: ["organize", "system", "clarity"],
      steps: [
        "Choose a chaotic area of life (desk, budget, schedule).",
        "Draw the current system and the desired one.",
        "Implement 1 change (e.g., create folders, set reminders).",
        "Make it a habit for 7 days."
      ],
      warnings: [
        "Don't overcomplicate — simplicity in systems is more important than functionality.",
        "Don't quit after a day — give the system time."
      ],
      daily_action: "Today: bring order to one area (physical or digital) in 10 minutes.",
      resources: [
        { type: "book", label: "📖 David Allen — Getting Things Done", url: "#" },
        { type: "technique", label: "🧘 Pomodoro method for planning", url: "#" }
      ],
      follow_up: {
        question: "You're organizing. What did you do this week?",
        options: ["Nothing", "Chose a chaotic zone", "Implemented a system", "Maintaining the habit"],
        reward: { "Maintaining the habit": "🔥 Order is power. You have found it." }
      }
    },
    // Craftsman
    {
      id: "calling_craftsman",
      title: "🔨 Master of Craft",
      description: "You create with your hands. Your calling is in mastery, precision, and the beauty of results.",
      conditions: {
        natural_talent: ["hands"],
        flow_activity: ["flow_building"],
        thanks_reason: ["thank_results"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "A finished item or repaired object",
      tags: ["hands", "craft", "skill"],
      steps: [
        "Choose a project (make a shelf, fix a chair, throw a pot).",
        "Gather materials and tools.",
        "Work 30 minutes a day, without rushing.",
        "Finish the project and gift it or use it yourself."
      ],
      warnings: [
        "Don't take on too complex a project — start with something achievable.",
        "Don't ignore safety precautions."
      ],
      daily_action: "Today: pick a project and take the first step (sketch, buy material).",
      resources: [
        { type: "book", label: "📖 Matthew Crawford — Shop Class as Soulcraft", url: "#" },
        { type: "link", label: "🔗 Pinterest — craft ideas", url: "#" }
      ],
      follow_up: {
        question: "You're crafting. What did you do this week?",
        options: ["Nothing", "Chose a project", "Started working", "Almost finished"],
        reward: { "Almost finished": "🔥 You're at the finish line. Bring it home." }
      }
    },
    // Fallback
    {
      id: "calling_start",
      title: "🔍 Self-Explorer",
      description: "You are at the beginning. You don't need to know your calling right now. Just start exploring.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First conscious discovery about yourself",
      tags: ["start", "discovery", "curiosity"],
      steps: [
        "Write 5 things you enjoy doing.",
        "Choose 1 and immerse yourself in it for 15 minutes.",
        "Ask yourself: 'What do I feel? What does this activity give me?'",
        "Repeat tomorrow with another activity."
      ],
      warnings: [
        "Don't rush to conclusions — calling reveals itself gradually.",
        "Don't be afraid to make mistakes — it's part of the journey."
      ],
      daily_action: "Today: try something new or remember a forgotten activity for 15 minutes.",
      resources: [
        { type: "book", label: "📖 Ken Robinson — The Element", url: "#" },
        { type: "technique", label: "🧘 Discovery journal (write 1 insight per day)", url: "#" }
      ],
      follow_up: {
        question: "You're exploring yourself. What did you do this week?",
        options: ["Nothing", "Wrote 5 activities", "Tried one", "Learned something new about yourself"],
        reward: { "Learned something new about yourself": "🔥 That's the start of your calling." }
      }
    }
  ]
});

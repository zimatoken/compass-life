// modules/relationships/data/en/family-en.js
// ============================================================
// FAMILY AND LOVED ONES — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "family",
    version: "3.0.0",
    lang: "en",
    title: "🏡 Family and Loved Ones",
    description: "You are the architect of your relationships. Loved ones are not a given — they are a living system you can build and strengthen.",
    icon: "🏡",
    color: "#06b6d4",
    identity_anchor: "You are the architect of relationships"
  },

  questions: [
    // === QUESTION 1: Relationship quality (no conditions) ===
    {
      id: "relation_quality",
      type: "single",
      text: "How would you rate your relationships with family/loved ones?",
      required: true,
      options: [
        { id: "great", label: "❤️ Great — warm, close, supportive", tags: ["good"] },
        { id: "ok", label: "😐 Okay — could use some work", tags: ["mid"] },
        { id: "strained", label: "😟 Strained — constant friction", tags: ["bad"] },
        { id: "distant", label: "🌫️ Distant — almost no contact", tags: ["distant"] }
      ]
    },

    // === QUESTION 2: Main barrier ===
    {
      id: "main_issue",
      type: "single",
      text: "What most often prevents you from being closer?",
      required: true,
      options: [
        { id: "time", label: "⏰ No time — everyone is busy", tags: ["time"] },
        { id: "communication", label: "🗣️ Can't communicate — hard to talk", tags: ["comm"] },
        { id: "trust", label: "🔒 No trust — there are resentments", tags: ["trust"] },
        { id: "conflict", label: "⚔️ Constant fights — everything escalates", tags: ["fight"] }
      ]
    },

    // === QUESTION 3: I-messages ===
    {
      id: "i_messages",
      type: "single",
      text: "Do you use the formula 'I feel... when... because...'?",
      required: true,
      options: [
        { id: "yes_i", label: "✅ Yes — I express my feelings", tags: ["skill"] },
        { id: "heard_i", label: "🤔 I've heard of it, but don't apply", tags: ["know"] },
        { id: "no_i", label: "❌ No — I often blame or stay silent", tags: ["no_skill"] }
      ]
    },

    // === QUESTION 4: Rituals ===
    {
      id: "rituals",
      type: "single",
      text: "Do you have regular rituals with your loved ones — time you spend together?",
      required: true,
      options: [
        { id: "yes_ritual", label: "✅ Yes — we regularly spend time together", tags: ["strong"] },
        { id: "sometimes_ritual", label: "😐 Sometimes — when we can", tags: ["mid"] },
        { id: "no_ritual", label: "❌ No — everyone is on their own", tags: ["weak"] }
      ]
    },

    // === QUESTION 5: Forgiveness and resentments ===
    {
      id: "forgiveness",
      type: "single",
      text: "How do you handle resentments in the family?",
      required: true,
      options: [
        { id: "let_go", label: "🕊️ I let go — I try to forgive", tags: ["good"] },
        { id: "hold", label: "🧊 I hold onto them — I remember", tags: ["bad"] },
        { id: "talk", label: "🗣️ I talk about them — I process to release", tags: ["good"] },
        { id: "ignore", label: "🚫 I ignore them — I pretend everything is fine", tags: ["bad"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of growing apart ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue to drift apart and in 5 years relationships remain the same?",
      required: true,
      conditions: { relation_quality: ["strained", "distant", "ok"] },
      options: [
        { id: "loneliness", label: "😔 Feeling of loneliness", tags: ["loneliness"] },
        { id: "resentment", label: "🧊 Deep resentments", tags: ["resentment"] },
        { id: "lost_connection", label: "💔 Lost connection", tags: ["lost"] },
        { id: "regret", label: "😰 Regret about lost time", tags: ["regret"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you do for your relationships with loved ones? What answer do you want to give?",
      required: true,
      conditions: { relation_quality: ["great", "ok", "strained", "distant"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: RELATIONSHIP REPAIR ===
    {
      id: "relation_repair",
      title: "🛠️ Relationship Repair",
      description: "You are a bridge builder. Relationships need attention. Start small — one step can change everything.",
      conditions: {
        relation_quality: ["strained", "distant"],
        main_issue: ["communication", "trust", "conflict"],
        i_messages: ["no_i", "heard_i"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Warm and supportive relationships",
      tags: ["repair", "family"],
      steps: [
        "Set aside 20 minutes a day just for talking — no phones.",
        "Ask open-ended questions — 'What was good today?'.",
        "Listen without interrupting — let them express themselves.",
        "Thank them for small things every day — say it out loud."
      ],
      warnings: [
        "DON'T criticize in the heat of the moment — wait until calm.",
        "DON'T wait for them to change first — start with yourself."
      ],
      daily_action: "Ask a loved one 1 open-ended question and listen fully.",
      resources: [
        { type: "book", label: "📖 Nonviolent Communication — Marshall Rosenberg", url: "#" },
        { type: "book", label: "📖 The 5 Love Languages — Gary Chapman", url: "#" },
        { type: "technique", label: "🗣️ The 'I-message' formula", url: "#" }
      ],
      follow_up: {
        question: "You started repairing relationships. What changed in a week?",
        options: ["Nothing", "Had a conversation", "Felt warmth", "Easier to communicate"],
        reward: { "Easier to communicate": "🔥 You're building a bridge — relationships are coming alive.", "Felt warmth": "🎉 One step brought warmth back to the family." }
      }
    },

    // === SOLUTION 2: DEEPENING THE BOND ===
    {
      id: "deepen_bond",
      title: "💎 Deepening the Bond",
      description: "You are a deepener. Relationships are good, but they can go deeper. Vulnerability and authenticity are the path to true intimacy.",
      conditions: {
        relation_quality: ["great", "ok"],
        main_issue: ["time", "communication"],
        rituals: ["no_ritual", "sometimes_ritual"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "Ongoing",
      yield_estimate: "Deeper intimacy and trust",
      tags: ["deepen", "bond"],
      steps: [
        "Create a 'check-in' ritual before bed — 10 minutes of talk.",
        "Share vulnerabilities — talk about fears and doubts.",
        "Have a new experience together — something you've never done.",
        "Write love notes to each other — leave them somewhere to find."
      ],
      warnings: [
        "DON'T forget to thank for small things — they matter more than grand gestures.",
        "DON'T take loved ones for granted — it kills relationships."
      ],
      daily_action: "Tell a loved one specifically what you appreciate about them.",
      resources: [
        { type: "book", label: "📖 Nonviolent Communication — Marshall Rosenberg", url: "#" },
        { type: "technique", label: "📝 'Daily gratitude' ritual", url: "#" }
      ],
      follow_up: {
        question: "You started deepening the bond. What changed in a week?",
        options: ["Nothing", "Said words of appreciation", "Feel more connected", "Relationships are deeper"],
        reward: { "Relationships are deeper": "🔥 You're turning good relationships into great ones.", "Feel more connected": "🎉 Connection is the result of attention." }
      }
    },

    // === SOLUTION 3: BUILDING RITUALS ===
    {
      id: "ritual_builder",
      title: "🌱 Building Rituals",
      description: "You are a tradition builder. Rituals are the glue that holds a family together. Start small and watch closeness grow.",
      conditions: {
        rituals: ["weak", "mid"],
        main_issue: ["time"],
        relation_quality: ["ok", "great"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Family traditions and closeness",
      tags: ["rituals", "family"],
      steps: [
        "Pick 1 day a week for a shared dinner — no phones.",
        "Add 1 small daily ritual — a hug, a kiss, a question.",
        "Create a tradition — Sunday breakfast or an evening walk.",
        "Involve everyone in creating rituals — let each person suggest something."
      ],
      warnings: [
        "DON'T try to introduce 5 rituals at once — start with one.",
        "DON'T force — rituals should bring joy, not become obligations."
      ],
      daily_action: "Create 1 small ritual today — a hug when you meet.",
      resources: [
        { type: "book", label: "📖 The 5 Love Languages — Gary Chapman", url: "#" },
        { type: "technique", label: "📝 The 'Small rituals' technique", url: "#" }
      ],
      follow_up: {
        question: "You started building rituals. What changed in a week?",
        options: ["Nothing", "Introduced 1 ritual", "More warmth", "Feel unity"],
        reward: { "Feel unity": "🔥 Rituals create family. You've built an anchor.", "More warmth": "🎉 Small rituals make a big difference." }
      }
    },

    // === SOLUTION 4: FORGIVENESS ===
    {
      id: "forgiveness_protocol",
      title: "🕊️ Forgiveness",
      description: "You are a peacemaker. Resentments are stones in your backpack. You don't have to forgive instantly, but you can start letting go.",
      conditions: {
        forgiveness: ["hold", "ignore"],
        relation_quality: ["strained", "distant", "ok"],
        main_issue: ["trust", "conflict"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Lightness and freedom from resentments",
      tags: ["forgiveness", "healing"],
      steps: [
        "Write a list of resentments — dump them on paper.",
        "For each one, ask: 'What can I do to release this?'.",
        "Talk to the person — if possible and safe.",
        "Write a letter you won't send — say everything you need to say."
      ],
      warnings: [
        "DON'T force yourself to forgive — it's a process, not a button.",
        "DON'T keep resentments inside — they poison you, not the other person."
      ],
      daily_action: "Write down 1 resentment you want to let go. Just write it.",
      resources: [
        { type: "book", label: "📖 Forgiving Yourself — Beverly Fludington", url: "#" },
        { type: "technique", label: "📝 The unsent letter", url: "#" }
      ],
      follow_up: {
        question: "You started working with resentments. What changed in a week?",
        options: ["Nothing", "Wrote down resentments", "Felt lighter", "Let go of 1 resentment"],
        reward: { "Let go of 1 resentment": "🔥 You lifted a stone from your soul. That's healing.", "Felt lighter": "🎉 Even starting the process brings relief." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_family",
      title: "🚀 Start with 1 Step",
      description: "You are the architect of relationships. You don't need to change everything at once. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First improvement in relationships",
      tags: ["start", "family"],
      steps: [
        "Choose 1 action that will bring you closer to loved ones.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to solve everything at once.",
        "DON'T expect instant results — relationships build gradually."
      ],
      daily_action: "Take 1 small step to improve relationships today.",
      resources: [
        { type: "book", label: "📖 Nonviolent Communication — Marshall Rosenberg", url: "#" },
        { type: "technique", label: "🗣️ Start with one: a question or gratitude", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 step in relationships. What changed in a week?",
        options: ["Nothing", "Took 1 step", "Took several steps", "I feel progress"],
        reward: { "I feel progress": "🎉 You've proven to yourself: small steps work. Relationships are a process." }
      }
    }
  ]
});

// modules/relationships/data/en/friendship-en.js
// ============================================================
// FRIENDSHIP — HOW TO BUILD AND STRENGTHEN FRIENDSHIPS v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "friendship",
    version: "3.0.0",
    lang: "en",
    title: "🤝 Friendship",
    description: "Friendship is not just communication — it's mutual support and growth. Learn to be the friend people wait for.",
    icon: "🤝",
    color: "#06b6d4",
    identity_anchor: "You are the friend who inspires"
  },

  questions: [
    {
      id: "friendship_attitude",
      type: "single",
      text: "How do you evaluate your friendships right now?",
      required: true,
      options: [
        { id: "many",      label: "🌟 I have many close friends", tags: ["many"] },
        { id: "few",       label: "🤔 I have 1–2 close friends, but would like more", tags: ["few"] },
        { id: "lonely",    label: "😔 I feel a lack of real friendship", tags: ["lonely"] },
        { id: "distant",   label: "📱 I mostly communicate online, miss live contact", tags: ["distant"] },
        { id: "no_time",   label: "⏰ I have no time for friendship", tags: ["no_time"] }
      ]
    },
    {
      id: "friendship_block",
      type: "single",
      text: "What prevents you from having deeper friendships?",
      required: true,
      conditions: { friendship_attitude: ["many", "few", "lonely", "distant", "no_time"] },
      options: [
        { id: "trust",     label: "🔒 I find it hard to trust people", tags: ["trust"] },
        { id: "time",      label: "⏰ No time for meetings", tags: ["time"] },
        { id: "shyness",   label: "😳 I'm shy to initiate communication", tags: ["shyness"] },
        { id: "conflict",  label: "😠 I'm afraid of conflicts", tags: ["conflict"] },
        { id: "no_problem", label: "✅ I have no problems", tags: ["no_problem"] }
      ]
    },
    {
      id: "friendship_value",
      type: "single",
      text: "What is most important to you in friendship?",
      required: true,
      options: [
        { id: "support",   label: "❤️ Support in difficult times", tags: ["support"] },
        { id: "honesty",   label: "🔮 Honesty and truth", tags: ["honesty"] },
        { id: "fun",       label: "🎉 Fun and shared adventures", tags: ["fun"] },
        { id: "growth",    label: "📈 Mutual growth and development", tags: ["growth"] },
        { id: "presence",  label: "🕯️ Just being there", tags: ["presence"] }
      ]
    },
    {
      id: "deep_friendship_sacrifice",
      type: "single",
      text: "Are you willing to set aside time weekly for meeting and connecting with friends?",
      required: true,
      conditions: { friendship_value: ["support", "honesty", "fun", "growth", "presence"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, I can't right now", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_friendship",
      type: "single",
      text: "In a week I'll ask what you did to strengthen friendships. What will you answer?",
      required: true,
      conditions: { deep_friendship_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today — call a friend", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "friendship_support",
      title: "❤️ Being a Support",
      description: "You are someone others can rely on. The strongest friendships are built on support in tough times.",
      conditions: {
        friendship_value: ["support"],
        friendship_block: ["trust", "conflict"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Deeper trust",
      tags: ["support", "trust", "reliable"],
      steps: [
        "Write or call 1 friend and ask how they're doing — sincerely.",
        "Listen without advice, just be there.",
        "In difficult moments, offer specific help (not just 'let me know').",
        "Be consistent — support works through regularity."
      ],
      warnings: [
        "Don't offer advice unless asked — listen first.",
        "Don't disappear when a friend is struggling — that's when they need you."
      ],
      daily_action: "Today: text 1 friend and ask how they're doing without expectation.",
      resources: [
        { type: "book", label: "📖 Dale Carnegie — How to Win Friends and Influence People", url: "#" },
        { type: "technique", label: "🧘 Active listening", url: "#" }
      ],
      follow_up: {
        question: "You were a support. How many times did you support friends this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You became the friend people wait for." }
      }
    },
    {
      id: "friendship_honesty",
      title: "🔮 Honesty in Friendship",
      description: "You are the friend who tells the truth. Clean relationships are built on honesty and openness.",
      conditions: {
        friendship_value: ["honesty"],
        friendship_block: ["trust", "shyness"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Deeper and more honest relationships",
      tags: ["honesty", "transparency", "trust"],
      steps: [
        "Start small: tell a friend something you usually hide.",
        "Don't be harsh — use 'I' statements (I feel, I think).",
        "Give your friend space to respond honestly.",
        "After 2 weeks, you'll notice you're more connected."
      ],
      warnings: [
        "Don't be aggressive — that's not honesty, that's attack.",
        "Don't fear judgment — honesty attracts."
      ],
      daily_action: "Today: tell 1 friend something honest you don't usually share.",
      resources: [
        { type: "book", label: "📖 Marshall Rosenberg — Nonviolent Communication", url: "#" },
        { type: "technique", label: "🧘 I-statements", url: "#" }
      ],
      follow_up: {
        question: "You were honest. How many honest conversations this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're building relationships on truth." }
      }
    },
    {
      id: "friendship_fun",
      title: "🎉 Friendship Through Adventures",
      description: "You are a generator of fun. Shared experiences are the glue that connects people.",
      conditions: {
        friendship_value: ["fun"],
        friendship_block: ["time", "shyness"]
      },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Bright memories and closeness",
      tags: ["fun", "adventure", "memories"],
      steps: [
        "Invite a friend to an unusual activity (carpet bowling, board game, hike).",
        "Don't plan perfectly — be spontaneous.",
        "During the activity, joke, laugh, be yourself.",
        "Make it a regular ritual."
      ],
      warnings: [
        "Don't plan too complex — start small.",
        "Don't be offended if someone can't — find someone else."
      ],
      daily_action: "Today: suggest to 1 friend to meet or do something interesting.",
      resources: [
        { type: "book", label: "📖 Keith Ferrazzi — Never Eat Alone", url: "#" },
        { type: "technique", label: "🧘 New experience rule", url: "#" }
      ],
      follow_up: {
        question: "You created adventures. How many meetings this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You bring joy and create stories." }
      }
    },
    {
      id: "friendship_growth",
      title: "📈 Friendship as Growth",
      description: "You are the friend who inspires growth. True friendship is a space for development.",
      conditions: {
        friendship_value: ["growth"],
        friendship_block: ["trust", "time"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Mutual development and support",
      tags: ["growth", "development", "inspire"],
      steps: [
        "Share your goal with a friend and ask them to share theirs.",
        "Check each other's progress once a week.",
        "Give each other feedback without judgment.",
        "Celebrate each other's successes."
      ],
      warnings: [
        "Don't compare success — everyone has their own.",
        "Don't give unsolicited advice — support."
      ],
      daily_action: "Today: share your goal with a friend and learn theirs.",
      resources: [
        { type: "book", label: "📖 John Maxwell — Leadership", url: "#" },
        { type: "technique", label: "🧘 Partner coaching session", url: "#" }
      ],
      follow_up: {
        question: "You grew with a friend. How many supportive conversations?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're growing together." }
      }
    },
    {
      id: "friendship_presence",
      title: "🕯️ Presence Without Conditions",
      description: "Sometimes the best way to strengthen a friendship is to just be there. Without words, without actions — just present.",
      conditions: {
        friendship_value: ["presence"],
        friendship_block: ["conflict", "shyness"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Feeling of belonging",
      tags: ["presence", "silence", "connection"],
      steps: [
        "Come to a friend and say: 'I'll just be here'.",
        "Don't try to entertain or solve problems.",
        "Sit in silence or do something simple together.",
        "Deep connection is born in this silence."
      ],
      warnings: [
        "Don't try to do something — just be.",
        "Don't feel awkward — silence is fine."
      ],
      daily_action: "Today: call a friend for no reason, just to ask 'How are you?'.",
      resources: [
        { type: "book", label: "📖 Brené Brown — The Gifts of Imperfection", url: "#" },
        { type: "technique", label: "🧘 Silent presence", url: "#" }
      ],
      follow_up: {
        question: "You just were there. How many times this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're the friend who needs no entertainment." }
      }
    },
    {
      id: "friendship_start",
      title: "🌱 Start Small",
      description: "Friendship starts with one action. You don't need to solve everything at once.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action",
      tags: ["start", "connection", "first"],
      steps: [
        "Text 1 person you haven't spoken to in a while.",
        "Ask how they're doing.",
        "Suggest meeting or calling.",
        "Tomorrow take a step with someone else."
      ],
      warnings: [
        "Don't think it's too late — it's never too late.",
        "Don't wait for the perfect moment — it's now."
      ],
      daily_action: "Today: text 1 friend you haven't spoken to in a while.",
      resources: [
        { type: "book", label: "📖 Dale Carnegie — How to Win Friends", url: "#" },
        { type: "technique", label: "🧘 5-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You started strengthening friendships. How many people did you text this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're building bridges." }
      }
    }
  ]
});

// modules/happiness/data/en/energy_audit-en.js
// ============================================================
// ENERGY AUDIT — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "happiness",
    category: "energy_audit",
    version: "3.0.0",
    lang: "en",
    title: "⚡ Energy Audit",
    description: "You don't get tired from tasks. You get tired from people and thoughts you gave your energy to.",
    icon: "⚡",
    color: "#f59e0b",
    identity_anchor: "You are the guardian of your energy"
  },

  questions: [
    // === QUESTION 1: Energy source (no conditions) ===
    {
      id: "energy_source",
      type: "single",
      text: "What gives you a surge of energy and uplift?",
      required: true,
      options: [
        { id: "people", label: "👥 Communicating with people", tags: ["extrovert"] },
        { id: "alone", label: "🧘 Solitude and silence", tags: ["introvert"] },
        { id: "sport", label: "🏃 Physical activity", tags: ["body"] },
        { id: "create", label: "🎨 Creativity", tags: ["mind"] },
        { id: "nature", label: "🌿 Nature", tags: ["nature"] }
      ]
    },

    // === QUESTION 2: Energy drain ===
    {
      id: "energy_drain",
      type: "single",
      text: "What drains your energy the most?",
      required: true,
      options: [
        { id: "meetings", label: "📅 Endless meetings", tags: ["meetings"] },
        { id: "news", label: "📰 News, social media", tags: ["media"] },
        { id: "conflict", label: "⚔️ Conflicts", tags: ["conflict"] },
        { id: "chaos", label: "🌪️ Chaos and uncertainty", tags: ["chaos"] },
        { id: "toxic", label: "👤 Toxic people", tags: ["toxic"] }
      ]
    },

    // === QUESTION 3: Energy balance ===
    {
      id: "energy_balance",
      type: "single",
      text: "How do you rate the balance between what gives and takes energy?",
      required: true,
      options: [
        { id: "positive", label: "✅ Gives more than it takes", tags: ["good"] },
        { id: "neutral", label: "🔄 Equal", tags: ["mid"] },
        { id: "negative", label: "❌ Takes more than it gives", tags: ["bad"] }
      ]
    },

    // === QUESTION 4: Ability to say "no" ===
    {
      id: "energy_boundary",
      type: "single",
      text: "Can you say 'no' to things that drain you?",
      required: true,
      options: [
        { id: "yes_boundary", label: "✅ Yes, easily", tags: ["strong"] },
        { id: "sometimes_boundary", label: "😐 Sometimes", tags: ["mid"] },
        { id: "no_boundary", label: "❌ No, it's hard", tags: ["weak"] }
      ]
    },

    // === QUESTION 5: DEEP LAYER 2 — Cost of losing energy ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you don't start restoring your energy in the coming months?",
      required: true,
      conditions: { energy_balance: ["negative", "neutral"] },
      options: [
        { id: "burnout", label: "😩 Complete burnout", tags: ["burnout"] },
        { id: "health", label: "🫀 Health problems", tags: ["health"] },
        { id: "depression", label: "🌧️ Depression", tags: ["depression"] },
        { id: "relationships", label: "💔 Loss of relationships", tags: ["relationships"] }
      ]
    },

    // === QUESTION 6: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you do to protect your energy? What answer do you want to give?",
      required: true,
      conditions: { energy_boundary: ["weak", "mid", "strong"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: ENERGY PROTOCOL ===
    {
      id: "energy_protocol",
      title: "🔋 Energy Protocol",
      description: "You are the guardian of energy. Create a system that protects your energy. Energy is the currency of life.",
      conditions: {
        energy_balance: ["negative", "neutral"],
        energy_boundary: ["weak", "mid"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Control over your energy",
      tags: ["energy", "protocol"],
      steps: [
        "Identify 3 main sources of energy — do them daily.",
        "Identify 3 main energy drains — minimize them.",
        "Create a schedule: energy comes first, not last.",
        "Implement 1 'no' rule every week — protect your boundaries."
      ],
      warnings: [
        "DON'T ignore signs of fatigue — they're red flags.",
        "DON'T try to be productive 24/7 — it's a myth."
      ],
      daily_action: "Do 1 thing that guarantees to give you energy.",
      resources: [
        { type: "book", label: "📖 Essentialism — Greg McKeown", url: "#" },
        { type: "technique", label: "🧘 '5 minutes of silence' technique", url: "#" }
      ],
      follow_up: {
        question: "You started implementing the energy protocol. What changed in a week?",
        options: ["Nothing", "Found energy sources", "Started saying 'no'", "Feeling better"],
        reward: { "Feeling better": "🔥 You're restoring your energy. That's the main resource." }
      }
    },

    // === SOLUTION 2: BOUNDARY PROTECTION ===
    {
      id: "boundary_protocol",
      title: "🛡️ Boundary Protection",
      description: "You are a guardian. Your energy belongs only to you. Not everyone has access to your time and attention.",
      conditions: {
        energy_boundary: ["weak"],
        energy_drain: ["toxic", "conflict"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Strengthened boundaries",
      tags: ["boundaries", "energy"],
      steps: [
        "Write down 3 situations where you said 'yes' but wanted to say 'no'.",
        "Prepare 3 phrases for saying no (polite and firm).",
        "Practice them with a safe person.",
        "Apply them in a real situation this week."
      ],
      warnings: [
        "DON'T feel guilty about saying no — it's protection, not aggression.",
        "DON'T over-explain — 'no' is a complete sentence."
      ],
      daily_action: "Say 'no' to 1 request that drains you.",
      resources: [
        { type: "book", label: "📖 The Power of Boundaries — Christine Mazur", url: "#" }
      ],
      follow_up: {
        question: "You started protecting your boundaries. What changed?",
        options: ["Nothing", "Said 'no' 1 time", "It got easier", "I feel more confident"],
        reward: { "I feel more confident": "🔥 You stopped giving your energy to those who don't value it." }
      }
    },

    // === SOLUTION 3: FALLBACK (general start) ===
    {
      id: "start_energy",
      title: "⚡ Start with 1 Action",
      description: "You are the guardian of your energy. Start with 1 small action today. It will start a chain reaction.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action to protect your energy",
      tags: ["start", "energy"],
      steps: [
        "Choose 1 action that gives you energy.",
        "Do it today. Not tomorrow.",
        "Write down how you felt before and after.",
        "Repeat tomorrow."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect it to become easy after one time."
      ],
      daily_action: "Do 1 action that gives you energy.",
      resources: [
        { type: "book", label: "📖 Essentialism — Greg McKeown", url: "#" },
        { type: "technique", label: "🧘 4-7-8 breathing", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 action. What changed in a week?",
        options: ["Nothing", "Tried", "Almost every day", "Feeling better"],
        reward: { "Feeling better": "🎉 You started restoring your energy. That's the most important step." }
      }
    }
  ]
});

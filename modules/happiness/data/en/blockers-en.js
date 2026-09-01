// modules/happiness/data/en/blockers-en.js
// ============================================================
// BLOCKER DIAGNOSTICS — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "happiness",
    category: "blockers",
    version: "3.0.0",
    lang: "en",
    title: "🚧 Blocker Diagnostics",
    description: "You are not depressed. You're just giving your energy to the wrong people.",
    icon: "🚧",
    color: "#f59e0b",
    identity_anchor: "You are the observer of your life"
  },

  questions: [
    // === QUESTION 1: Main blocker (no conditions) ===
    {
      id: "main_blocker",
      type: "single",
      text: "What most often causes you anxiety, irritation, or apathy?",
      required: true,
      options: [
        { id: "work_stress", label: "😰 Work stress", tags: ["work"] },
        { id: "relations", label: "💔 Relationships with loved ones", tags: ["relation"] },
        { id: "finance", label: "💸 Financial instability", tags: ["money"] },
        { id: "health", label: "🤒 Health and energy", tags: ["health"] },
        { id: "meaning", label: "🌫️ Lack of meaning", tags: ["meaning"] }
      ]
    },

    // === QUESTION 2: Intensity ===
    {
      id: "blocker_intensity",
      type: "single",
      text: "How strongly does this affect your life?",
      required: true,
      options: [
        { id: "critical", label: "🔴 Critically", tags: ["high"] },
        { id: "moderate", label: "🟡 Moderately", tags: ["mid"] },
        { id: "mild", label: "🟢 Mildly", tags: ["low"] }
      ]
    },

    // === QUESTION 3: Source of the blocker ===
    {
      id: "blocker_source",
      type: "single",
      text: "Is this an external or internal cause?",
      required: true,
      options: [
        { id: "external", label: "🌍 External — circumstances", tags: ["external"] },
        { id: "internal", label: "🧠 Internal — fears, beliefs", tags: ["internal"] },
        { id: "both", label: "🔗 Both", tags: ["both"] }
      ]
    },

    // === QUESTION 4: Energy vampires ===
    {
      id: "energy_pattern",
      type: "single",
      text: "After interacting with which people do you feel drained?",
      required: true,
      options: [
        { id: "toxic_people", label: "☠️ Toxic people", tags: ["toxic"] },
        { id: "draining", label: "🧛 Energy vampires", tags: ["drain"] },
        { id: "no_one", label: "✅ No one", tags: ["safe"] },
        { id: "myself", label: "🪞 With myself", tags: ["self"] }
      ]
    },

    // === QUESTION 5: DEEP LAYER 2 — Cost of ignoring ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you don't change anything in this situation a year from now?",
      required: true,
      conditions: { main_blocker: ["work_stress", "relations", "finance", "health", "meaning"] },
      options: [
        { id: "burnout", label: "😩 Burnout and loss of energy", tags: ["burnout"] },
        { id: "regret", label: "😔 Regret about missed opportunities", tags: ["regret"] },
        { id: "isolation", label: "🏚️ Loneliness and isolation", tags: ["isolation"] },
        { id: "stagnation", label: "🚫 Lack of growth", tags: ["stagnation"] },
        { id: "health_loss", label: "🫀 Health problems", tags: ["health_loss"] }
      ]
    },

    // === QUESTION 6: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you do to remove this blocker? What answer do you want to give?",
      required: true,
      conditions: { blocker_intensity: ["critical", "moderate", "mild"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: URGENT INTERVENTION ===
    {
      id: "urgent_fix",
      title: "🆘 Urgent Intervention",
      description: "You are an observer. The blocker is critical. Action is needed immediately.",
      conditions: {
        blocker_intensity: ["critical"],
        blocker_source: ["external", "internal", "both"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–4 weeks",
      yield_estimate: "Reduced anxiety and regained control",
      tags: ["urgent", "fix"],
      steps: [
        "Write down the problem in detail.",
        "Find 1 person to discuss it with.",
        "Make a plan of 3 small, realistic steps.",
        "Take the first step today."
      ],
      warnings: [
        "DON'T ignore critical signals — they won't go away on their own.",
        "DON'T try to solve everything at once — choose 1 front."
      ],
      daily_action: "Write down the problem and 1 possible solution.",
      resources: [
        { type: "book", label: "📖 ACT Therapy — Steven Hayes", url: "#" },
        { type: "technique", label: "🧘 5 minutes of silence", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to act. What did you do?",
        options: ["Nothing", "Wrote down the problem", "Made a plan", "Took the first step"],
        reward: { "Took the first step": "🔥 You moved from observation to action. That's what matters." }
      }
    },

    // === SOLUTION 2: GRADUAL WORK ===
    {
      id: "gradual_work",
      title: "🐢 Gradual Work",
      description: "You are a builder. The blocker is moderate. You can work systematically.",
      conditions: {
        blocker_intensity: ["moderate", "mild"],
        blocker_source: ["external", "internal", "both"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1–3 months",
      yield_estimate: "Sustainable improvement",
      tags: ["gradual", "system"],
      steps: [
        "Keep a trigger diary for 1 week.",
        "Find the root cause — ask 'why' 5 times.",
        "Develop a system of preventive actions.",
        "Evaluate progress every week."
      ],
      warnings: [
        "DON'T expect instant results — it's a marathon.",
        "DON'T change everything at once."
      ],
      daily_action: "Note 1 moment when you felt good.",
      resources: [
        { type: "book", label: "📖 Emotional Intelligence — Daniel Goleman", url: "#" }
      ],
      follow_up: {
        question: "You started working on the blocker gradually. What changed in a week?",
        options: ["Nothing", "Found a trigger", "Developed a system", "Feeling improvement"],
        reward: { "Feeling improvement": "🔥 You're moving in the right direction. Keep going." }
      }
    },

    // === SOLUTION 3: ENERGY HYGIENE ===
    {
      id: "energy_hygiene",
      title: "🧼 Energy Hygiene",
      description: "You are the guardian of your energy. Not everyone has access to your time and attention.",
      conditions: {
        energy_pattern: ["toxic", "drain", "self"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Protection from energy vampires",
      tags: ["energy", "boundaries"],
      steps: [
        "Identify 3 people who drain your energy.",
        "Set boundaries: reduce contact time, change the format.",
        "Find 3 people who fill you with energy.",
        "Create a recovery ritual after contact with toxic people."
      ],
      warnings: [
        "DON'T blame yourself for how you feel.",
        "DON'T expect toxic people to change."
      ],
      daily_action: "Reduce contact time with 1 energy vampire.",
      resources: [
        { type: "book", label: "📖 The Power of Boundaries — Christine Mazur", url: "#" }
      ],
      follow_up: {
        question: "You started protecting your energy. What changed?",
        options: ["Nothing", "It felt easier", "I feel more confident", "Found people who fill me"],
        reward: { "Found people who fill me": "🔥 You didn't just protect yourself — you created an environment that nourishes you." }
      }
    },

    // === SOLUTION 4: FALLBACK (general start) ===
    {
      id: "start_anyway",
      title: "🚀 Start with 1 Action",
      description: "You are the observer of your life. You don't have to solve everything at once. Start with 1 small action today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action toward change",
      tags: ["start", "action"],
      steps: [
        "Choose 1 problem that bothers you the most.",
        "Write 1 possible solution.",
        "Take 1 small step today.",
        "Repeat tomorrow."
      ],
      warnings: [
        "DON'T try to solve everything at once.",
        "DON'T expect it to become easy after one step."
      ],
      daily_action: "Take 1 small step toward solving the problem.",
      resources: [
        { type: "book", label: "📖 ACT Therapy — Steven Hayes", url: "#" },
        { type: "technique", label: "🧘 4-7-8 breathing", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 step. What changed in a week?",
        options: ["Nothing", "Took 1 step", "Took several steps", "Feeling progress"],
        reward: { "Feeling progress": "🎉 You proved to yourself: you can change your life." }
      }
    }
  ]
});

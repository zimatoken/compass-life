// modules/creativity/data/en/fear-en.js
// ============================================================
// FEAR OF CRITICISM — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "creativity",
    category: "fear",
    version: "3.0.0",
    lang: "en",
    title: "🚀 Fear of Criticism",
    description: "You are brave. Fear is not an enemy, it's a signal that you're growing. Learn to use it as fuel.",
    icon: "🚀",
    color: "#d946ef",
    identity_anchor: "You are brave"
  },

  questions: [
    // === QUESTION 1: Fear level (no conditions) ===
    {
      id: "fear_level",
      type: "single",
      text: "How much do you fear showing your work to others?",
      required: true,
      options: [
        { id: "paralyzed", label: "😰 Completely paralyzes me", tags: ["high"] },
        { id: "nervous", label: "😬 I'm nervous, but I show it", tags: ["mid"] },
        { id: "ok", label: "😐 It's fine", tags: ["low"] }
      ]
    },

    // === QUESTION 2: Source of fear ===
    {
      id: "fear_source",
      type: "single",
      text: "What exactly are you afraid of?",
      required: true,
      options: [
        { id: "judgment", label: "👎 Judgment", tags: ["judge"] },
        { id: "failure", label: "❌ Failure", tags: ["fail"] },
        { id: "comparison", label: "📊 Comparison", tags: ["compare"] },
        { id: "shame", label: "😳 Shame", tags: ["shame"] }
      ]
    },

    // === QUESTION 3: Defense strategy ===
    {
      id: "fear_defense",
      type: "single",
      text: "How do you usually protect yourself from fear?",
      required: true,
      options: [
        { id: "hide", label: "🚫 I don't show it", tags: ["hide"] },
        { id: "perfect", label: "📚 I make it perfect", tags: ["perfect"] },
        { id: "ignore", label: "🙈 I ignore it", tags: ["ignore"] },
        { id: "courage", label: "💪 I share despite the fear", tags: ["courage"] }
      ]
    },

    // === QUESTION 4: Worst-case scenario ===
    {
      id: "worst_case",
      type: "single",
      text: "Imagine: the worst-case scenario happens. What will you do?",
      required: true,
      options: [
        { id: "resilient", label: "💪 I'll get through it", tags: ["resilient"] },
        { id: "avoid_think", label: "😰 I don't want to think about it", tags: ["avoid_think"] },
        { id: "prepared", label: "📋 I have a plan B", tags: ["prepared"] },
        { id: "collapse", label: "😩 I'll give up", tags: ["collapse"] }
      ]
    },

    // === QUESTION 5: DEEP LAYER 2 — Cost of fear ===
    {
      id: "deep_cost",
      type: "single",
      text: "What do you lose if you never dare to show your work?",
      required: true,
      conditions: { fear_level: ["paralyzed", "nervous", "ok"] },
      options: [
        { id: "opportunity", label: "🎯 Opportunities and recognition", tags: ["opportunity"] },
        { id: "growth", label: "📈 Growth and development", tags: ["growth"] },
        { id: "connection", label: "🤝 Connections and relationships", tags: ["connection"] },
        { id: "myself", label: "🪞 Belief in yourself", tags: ["myself"] }
      ]
    },

    // === QUESTION 6: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you do to overcome fear? What answer do you want to give?",
      required: true,
      conditions: { fear_level: ["paralyzed", "nervous", "ok"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: FEAR PROTOCOL ===
    {
      id: "fear_protocol",
      title: "🛡️ Fear Protocol",
      description: "You are brave. Fear is not an enemy, it's a signal that you're growing. Don't wait for the perfect result. Just start.",
      conditions: {
        fear_level: ["paralyzed", "nervous"],
        fear_source: ["judgment", "failure", "comparison", "shame"],
        fear_defense: ["hide", "perfect", "ignore"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Freedom to create without fear",
      tags: ["fear", "courage"],
      steps: [
        "Write the worst-case scenario on paper — it rarely happens.",
        "Show your work to 1 safe person.",
        "Collect 5 pieces of feedback — choose 3 useful, ignore the rest.",
        "Make a public post — it will break the barrier once and for all."
      ],
      warnings: [
        "DON'T wait for the perfect result — it doesn't exist.",
        "DON'T read comments all at once — pick 3, ignore the rest."
      ],
      daily_action: "Show 1 person something you created.",
      resources: [
        { type: "book", label: "📖 Daring Greatly — Brené Brown", url: "#" },
        { type: "book", label: "📖 The Creative Act — Rick Rubin", url: "#" },
        { type: "technique", label: "📝 Worst-case scenario technique", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to overcome fear. What did you do?",
        options: ["Nothing", "Tried", "Showed someone", "Do it regularly"],
        reward: { "Showed someone": "🔥 You took the main step!", "Do it regularly": "🎉 You're brave. Fear no longer controls you." }
      }
    },

    // === SOLUTION 2: FEAR AS FUEL ===
    {
      id: "fear_to_fuel",
      title: "🔥 Fear as Fuel",
      description: "You are an alchemist. Fear is energy. When you stop avoiding it, it becomes fuel for action.",
      conditions: {
        fear_level: ["nervous", "ok"],
        fear_defense: ["ignore", "courage"],
        worst_case: ["resilient", "prepared"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Energy from fear",
      tags: ["fuel", "courage"],
      steps: [
        "Notice the moment you feel fear.",
        "Ask yourself: 'What can I do with this?'",
        "Use the adrenaline of fear as energy.",
        "Notice that after taking action, fear decreases."
      ],
      warnings: [
        "DON'T try to get rid of fear — it won't disappear.",
        "DON'T avoid action because of fear — use it as a tailwind."
      ],
      daily_action: "Do something you're afraid of and notice how the fear decreased.",
      resources: [
        { type: "book", label: "📖 The Gifts of Imperfection — Brené Brown", url: "#" },
        { type: "technique", label: "🔥 Fear as a tailwind technique", url: "#" }
      ],
      follow_up: {
        question: "You decided to use fear as fuel. Did it work?",
        options: ["Didn't work", "A little", "Yes, it got easier", "I learned to manage fear"],
        reward: { "I learned to manage fear": "🎉 You've become the master of your energy. That's mastery level." }
      }
    },

    // === SOLUTION 3: JUDGMENT PROTOCOL ===
    {
      id: "judgment_protocol",
      title: "🛡️ Judgment Protocol",
      description: "You are your own harshest critic. Others' opinions are their projection, not your truth. You don't have to meet others' expectations.",
      conditions: {
        fear_source: ["judgment", "shame"],
        fear_defense: ["hide", "perfect"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 weeks",
      yield_estimate: "Freedom to be yourself",
      tags: ["judgment", "freedom"],
      steps: [
        "Make a list of people whose opinion matters to you (max 3).",
        "Remember 3 times when their opinion didn't match yours — and you survived.",
        "Write yourself a letter: 'I have the right to be imperfect'.",
        "Show your work to these 3 people — and see that the world didn't collapse."
      ],
      warnings: [
        "DON'T try to please everyone — it's impossible.",
        "DON'T seek approval from those who won't support you."
      ],
      daily_action: "Show your work to someone whose opinion matters but is scary.",
      resources: [
        { type: "book", label: "📖 Stop People Pleasing — James Dobson", url: "#" },
        { type: "technique", label: "🧠 Letter to yourself technique", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to show your work to those whose opinion matters. What happened?",
        options: ["Didn't show anything", "Showed, but still scared", "Showed and it got easier", "Now it's normal for me"],
        reward: { "Now it's normal for me": "🎉 You've stopped depending on others' opinions. That's true freedom." }
      }
    },

    // === SOLUTION 4: FALLBACK (general start) ===
    {
      id: "start_anyway",
      title: "🚀 Start Anyway",
      description: "You are brave. Not because you're not afraid. But because you act, even when you are.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action despite fear",
      tags: ["start", "courage"],
      steps: [
        "Choose 1 small action that scares you.",
        "Do it today. Not tomorrow.",
        "Write down how you felt before and after.",
        "Repeat tomorrow — fear becomes a habit."
      ],
      warnings: [
        "DON'T wait for fear to pass — it won't.",
        "DON'T compare yourself to those who aren't afraid — they just practiced more."
      ],
      daily_action: "Do 1 small action that scares you.",
      resources: [
        { type: "book", label: "📖 Daring Greatly — Brené Brown", url: "#" },
        { type: "technique", label: "🧘 The 5-second rule (Mel Robbins)", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to start despite the fear. What happened?",
        options: ["Nothing", "Tried", "Did it several times", "Do it every day"],
        reward: { "Do it every day": "🎉 You've moved from fear to action. That's courage." }
      }
    }
  ]
});

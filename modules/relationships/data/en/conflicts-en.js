// modules/relationships/data/en/conflicts-en.js
// ============================================================
// CONFLICTS — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "conflicts",
    version: "3.0.0",
    lang: "en",
    title: "💔 Conflicts",
    description: "You are a diplomat. Conflict is not an enemy — it's an opportunity to get closer.",
    icon: "💔",
    color: "#06b6d4",
    identity_anchor: "You are a diplomat"
  },

  questions: [
    // === QUESTION 1: Conflict frequency (no conditions) ===
    {
      id: "conflict_freq",
      type: "single",
      text: "How often do conflicts arise in your life?",
      required: true,
      options: [
        { id: "rare", label: "🕊️ Rarely — once a month or less", tags: ["low"] },
        { id: "sometimes", label: "🌤️ Sometimes — once a week", tags: ["mid"] },
        { id: "often", label: "⛈️ Often — several times a week", tags: ["high"] }
      ]
    },

    // === QUESTION 2: Conflict style ===
    {
      id: "conflict_style",
      type: "single",
      text: "How do you usually respond to conflict?",
      required: true,
      options: [
        { id: "avoid", label: "🏃 I avoid — I withdraw", tags: ["avoid"] },
        { id: "attack", label: "⚔️ I attack — I defend through aggression", tags: ["attack"] },
        { id: "freeze", label: "🧊 I freeze — I get lost", tags: ["freeze"] },
        { id: "solve", label: "🤝 I seek a solution — constructively", tags: ["solve"] }
      ]
    },

    // === QUESTION 3: Conflict goal ===
    {
      id: "conflict_goal",
      type: "single",
      text: "What do you most often want from conflict?",
      required: true,
      options: [
        { id: "win", label: "🏆 To win — prove I'm right", tags: ["win"] },
        { id: "peace", label: "🕊️ To reconcile — restore the relationship", tags: ["peace"] },
        { id: "understand", label: "🧠 To understand the other side", tags: ["understand"] },
        { id: "avoid_pain", label: "😰 To avoid pain — escape the tension", tags: ["avoid_pain"] }
      ]
    },

    // === QUESTION 4: After conflict ===
    {
      id: "conflict_recovery",
      type: "single",
      text: "What do you usually do after a conflict?",
      required: true,
      options: [
        { id: "ruminate", label: "🔄 Replay it over and over in my head", tags: ["ruminate"] },
        { id: "talk", label: "🗣️ Discuss it with someone", tags: ["talk"] },
        { id: "cool_down", label: "🧘 Take a break, calm down", tags: ["cool"] },
        { id: "ignore", label: "🚫 Act like nothing happened", tags: ["ignore"] }
      ]
    },

    // === QUESTION 5: Conflict triggers ===
    {
      id: "conflict_triggers",
      type: "single",
      text: "What most often triggers conflict for you?",
      required: true,
      options: [
        { id: "criticism", label: "😤 Criticism or devaluation", tags: ["criticism"] },
        { id: "misunderstanding", label: "🌫️ Not being heard or understood", tags: ["misunderstanding"] },
        { id: "boundaries", label: "🚧 Boundary violations", tags: ["boundaries"] },
        { id: "stress", label: "😰 External stress — fatigue, pressure", tags: ["stress"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of unresolved conflicts ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue to avoid or suppress conflicts?",
      required: true,
      conditions: { conflict_freq: ["sometimes", "often"] },
      options: [
        { id: "resentment", label: "🧊 Accumulated resentment", tags: ["resentment"] },
        { id: "distance", label: "🏚️ Distance from loved ones", tags: ["distance"] },
        { id: "explosion", label: "💥 Explosion at the worst moment", tags: ["explosion"] },
        { id: "burnout", label: "😩 Emotional burnout", tags: ["burnout"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: how did you handle a conflict? What answer do you want to give?",
      required: true,
      conditions: { conflict_style: ["avoid", "attack", "freeze", "solve"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: CONFLICT SKILL ===
    {
      id: "conflict_skill",
      title: "🛡️ Conflict Skill",
      description: "You are a diplomat. Conflict is not an enemy — it's an opportunity for growth and understanding. Learn to use it as a tool.",
      conditions: {
        conflict_freq: ["sometimes", "often"],
        conflict_style: ["avoid", "attack", "freeze"],
        conflict_goal: ["win", "avoid_pain"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Constructive conflicts and stronger relationships",
      tags: ["conflict", "skill"],
      steps: [
        "Take a 10-second pause before reacting — breathe in and out.",
        "Use the formula: 'I feel... when... because...'.",
        "Listen to the other person's position fully — don't interrupt.",
        "Seek a common goal, not victory — 'Us against the problem'."
      ],
      warnings: [
        "DON'T blame ('you always...') — use 'I-messages'.",
        "DON'T leave without saying when you'll return — give clarity."
      ],
      daily_action: "Apply the 'I feel...' formula in any conversation today.",
      resources: [
        { type: "book", label: "📖 Nonviolent Communication — Marshall Rosenberg", url: "#" },
        { type: "technique", label: "🛡️ The 10-second pause before responding", url: "#" }
      ],
      follow_up: {
        question: "You started learning conflict skills. What changed in a week?",
        options: ["Nothing", "Tried 'I-message'", "Easier to speak up", "Conflicts became constructive"],
        reward: { "Conflicts became constructive": "🔥 You're turning conflicts into dialogue. That's master level.", "Easier to speak up": "🎉 You're no longer afraid of conflict." }
      }
    },

    // === SOLUTION 2: CONSCIOUS RESPONSE ===
    {
      id: "conscious_reaction",
      title: "🧘 Conscious Response",
      description: "You are an observer. You don't have to react immediately. You can choose a response instead of an automatic reaction.",
      conditions: {
        conflict_style: ["freeze", "avoid"],
        conflict_recovery: ["ruminate", "ignore"],
        conflict_freq: ["sometimes", "often"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Calm and confidence in conflicts",
      tags: ["mindful", "reaction"],
      steps: [
        "Notice the moment you want to run away or freeze.",
        "Take a deep breath and say: 'I need 10 seconds to think'.",
        "Ask yourself: 'What do I want from this conversation?'.",
        "Choose a response, not a reaction — consciously, not automatically."
      ],
      warnings: [
        "DON'T blame yourself for freezing — it's a defense mechanism.",
        "DON'T be afraid to ask for time to think — it's a sign of strength."
      ],
      daily_action: "In a difficult conversation, take a 10-second pause and choose your response.",
      resources: [
        { type: "book", label: "📖 The Power of Now — Eckhart Tolle", url: "#" },
        { type: "book", label: "📖 Emotional Intelligence — Daniel Goleman", url: "#" }
      ],
      follow_up: {
        question: "You started responding consciously. What changed in a week?",
        options: ["Nothing", "Noticed the moment of freezing", "Took a pause once", "I feel more in control"],
        reward: { "I feel more in control": "🔥 You're no longer a slave to reactions. You choose.", "Took a pause once": "🎉 This is the first step to awareness." }
      }
    },

    // === SOLUTION 3: CONFLICT RECOVERY ===
    {
      id: "conflict_recovery_protocol",
      title: "🔄 Conflict Recovery Protocol",
      description: "You are a peacemaker. What you do after conflict matters. Recovery is the art of returning to yourself and the other.",
      conditions: {
        conflict_recovery: ["ruminate", "talk", "ignore"],
        conflict_freq: ["sometimes", "often"],
        conflict_goal: ["peace", "understand"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 month",
      yield_estimate: "Calm and clarity after conflicts",
      tags: ["recovery", "peace"],
      steps: [
        "Take 10 minutes of silence — give yourself time to cool down.",
        "Write down what you feel — dump your emotions on paper.",
        "Discuss with a safe person — talk it out.",
        "Return to the conversation when both are calm — don't leave things unresolved."
      ],
      warnings: [
        "DON'T replay the conflict for weeks — it destroys you.",
        "DON'T act like nothing happened — it leaves a wound."
      ],
      daily_action: "After a conflict, take 10 minutes for recovery and write down your emotions.",
      resources: [
        { type: "book", label: "📖 Forgiving Yourself — Beverly Fludington", url: "#" },
        { type: "technique", label: "📝 Emotion diary — dump and release", url: "#" }
      ],
      follow_up: {
        question: "You started recovering after conflicts. What changed?",
        options: ["Nothing", "Started taking pauses", "Less rumination", "I feel lighter"],
        reward: { "I feel lighter": "🔥 You learned to let go of conflicts. That's freedom.", "Less rumination": "🎉 You're no longer a prisoner of the past." }
      }
    },

    // === SOLUTION 4: TRIGGER WORK ===
    {
      id: "triggers_work",
      title: "🔍 Working with Triggers",
      description: "You are a researcher. Your triggers are keys to your wounds. Find them — and you'll stop exploding.",
      conditions: {
        conflict_triggers: ["criticism", "misunderstanding", "boundaries", "stress"],
        conflict_freq: ["often", "sometimes"],
        conflict_style: ["attack", "freeze"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Understanding your triggers and calm",
      tags: ["triggers", "healing"],
      steps: [
        "Keep a trigger diary — write down situations that upset you.",
        "Find your 3 most common triggers — what do they have in common?",
        "Ask yourself: 'What does this remind me of from my past?'.",
        "Create new responses to these triggers — conscious choice."
      ],
      warnings: [
        "DON'T blame yourself for triggers — they're not your fault.",
        "DON'T try to eliminate them all at once — it's a process."
      ],
      daily_action: "Write down 1 situation that caused a strong emotion. What was the trigger?",
      resources: [
        { type: "book", label: "📖 The Body Keeps the Score — Bessel van der Kolk", url: "#" },
        { type: "technique", label: "📝 Trigger diary", url: "#" }
      ],
      follow_up: {
        question: "You started working with triggers. What changed in a week?",
        options: ["Nothing", "Noticed 1 trigger", "Found a common pattern", "Reactions are softer"],
        reward: { "Reactions are softer": "🔥 You're no longer a prisoner of triggers. That's a breakthrough.", "Found a common pattern": "🎉 Half the solution is understanding the cause." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_conflict",
      title: "🚀 Start with 1 Step",
      description: "You are a diplomat. You don't need to solve all conflicts at once. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First improvement in handling conflict",
      tags: ["start", "conflict"],
      steps: [
        "Choose 1 conflict that bothers you most.",
        "Write down what you could do differently.",
        "Do it today. Don't postpone.",
        "Tomorrow, repeat or try something new."
      ],
      warnings: [
        "DON'T try to solve all conflicts at once.",
        "DON'T expect instant results — skill builds gradually."
      ],
      daily_action: "Take 1 small step toward resolving a conflict today.",
      resources: [
        { type: "book", label: "📖 Nonviolent Communication — Marshall Rosenberg", url: "#" },
        { type: "technique", label: "🛡️ Start with one: 'I-message' or a pause", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 step in conflicts. What changed in a week?",
        options: ["Nothing", "Took 1 step", "Took several steps", "I feel progress"],
        reward: { "I feel progress": "🎉 You've proven to yourself: small steps work. Keep moving." }
      }
    }
  ]
});

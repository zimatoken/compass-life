// modules/relationships/data/en/boundaries-en.js
// ============================================================
// BOUNDARIES — HOW TO BUILD HEALTHY PERSONAL BOUNDARIES v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "relationships",
    category: "boundaries",
    version: "3.0.0",
    lang: "en",
    title: "🛡️ Boundaries",
    description: "Boundaries are not walls, but doors you open when you want. Learn to protect your space.",
    icon: "🛡️",
    color: "#06b6d4",
    identity_anchor: "You are the protector of your space"
  },

  questions: [
    {
      id: "boundary_attitude",
      type: "single",
      text: "How do you feel about your personal boundaries?",
      required: true,
      options: [
        { id: "strong",    label: "🛡️ I feel and protect them", tags: ["strong"] },
        { id: "weak",      label: "🌊 I often let them be crossed", tags: ["weak"] },
        { id: "rigid",     label: "🧱 Very rigid, I let nobody in", tags: ["rigid"] },
        { id: "unknown",   label: "🌫️ I don't know where my boundaries are", tags: ["unknown"] }
      ]
    },
    {
      id: "boundary_problem",
      type: "single",
      text: "What most often crosses your boundaries?",
      required: true,
      conditions: { boundary_attitude: ["strong", "weak", "rigid", "unknown"] },
      options: [
        { id: "people",    label: "👥 Others' requests and expectations", tags: ["people"] },
        { id: "time",      label: "⏰ Deadlines and overload", tags: ["time"] },
        { id: "emotions",  label: "😰 Others' emotions and manipulation", tags: ["emotions"] },
        { id: "family",    label: "🏠 Family pressure", tags: ["family"] },
        { id: "no_problem", label: "✅ My boundaries are fine", tags: ["no_problem"] }
      ]
    },
    {
      id: "boundary_reaction",
      type: "single",
      text: "How do you usually react when your boundaries are crossed?",
      required: true,
      options: [
        { id: "say_no",    label: "🗣️ I say 'no' immediately", tags: ["say_no"] },
        { id: "tolerate",  label: "😤 I tolerate but get angry", tags: ["tolerate"] },
        { id: "avoid",     label: "🚶 I walk away/avoid", tags: ["avoid"] },
        { id: "explain",   label: "📖 I explain and ask not to repeat", tags: ["explain"] },
        { id: "none",      label: "🌫️ I don't notice the crossing", tags: ["none"] }
      ]
    },
    {
      id: "deep_boundary_sacrifice",
      type: "single",
      text: "Are you willing to say 'no' even to a close person if it crosses your boundaries?",
      required: true,
      conditions: { boundary_reaction: ["say_no", "tolerate", "avoid", "explain", "none"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, I can't", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_boundary",
      type: "single",
      text: "In a week I'll ask how you protected your boundaries. What will you answer?",
      required: true,
      conditions: { deep_boundary_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start practicing 'no' today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't be able to", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "boundary_say_no",
      title: "🗣️ The Power of 'No'",
      description: "You are the master of your time and space. Saying 'no' is an act of self-care.",
      conditions: {
        boundary_reaction: ["say_no"],
        boundary_problem: ["people", "time"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Confidence in defending boundaries",
      tags: ["no", "boundaries", "confidence"],
      steps: [
        "Practice saying 'no' in small situations.",
        "Don't justify — just say 'no, thanks'.",
        "Use the 'broken record' technique: repeat your position.",
        "In a week, 'no' will become easier."
      ],
      warnings: [
        "Don't feel guilty — you have the right to say no.",
        "Don't explain too much — sometimes 'no' is enough."
      ],
      daily_action: "Today: say 'no' in a situation where you'd usually agree.",
      resources: [
        { type: "book", label: "📖 Nedra Glover — Toxic People", url: "#" },
        { type: "technique", label: "🧘 Broken record technique", url: "#" }
      ],
      follow_up: {
        question: "You said 'no'. How many times this week?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You're protecting your boundaries." }
      }
    },
    {
      id: "boundary_stop_tolerating",
      title: "😤 Stop Tolerating",
      description: "Patience is not always a virtue. When you tolerate crossing — you teach others to treat you that way.",
      conditions: {
        boundary_reaction: ["tolerate"],
        boundary_problem: ["people", "emotions", "family"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "End of toxic behavior",
      tags: ["no", "self_respect", "boundaries"],
      steps: [
        "Notice when you're tolerating crossing.",
        "Tell yourself: 'I will no longer tolerate this.'",
        "Take the first step to protect your boundaries.",
        "Keep a diary of crossings."
      ],
      warnings: [
        "Don't stay silent — start small.",
        "Don't blame yourself — you deserve respect."
      ],
      daily_action: "Today: track a moment you tolerate and tell yourself 'I have the right'.",
      resources: [
        { type: "book", label: "📖 Henry Cloud, John Townsend — Boundaries", url: "#" },
        { type: "technique", label: "🧘 Boundaries journal", url: "#" }
      ],
      follow_up: {
        question: "You stopped tolerating. How many times did you protect your boundaries?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You're reclaiming your respect." }
      }
    },
    {
      id: "boundary_explain",
      title: "📖 Talk About Boundaries Openly",
      description: "People can't respect boundaries they don't know about. Learn to talk about them calmly.",
      conditions: {
        boundary_reaction: ["explain"],
        boundary_problem: ["people", "family"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Clear boundaries others understand",
      tags: ["explain", "communication", "respect"],
      steps: [
        "Formulate your boundaries as 'I' statements.",
        "Explain why they matter to you.",
        "Ask others to respect your boundaries.",
        "Be ready for questions."
      ],
      warnings: [
        "Don't apologize for your boundaries — it's your right.",
        "Don't expect everyone to understand immediately — give them time."
      ],
      daily_action: "Today: write 3 boundaries you want to explain to others.",
      resources: [
        { type: "book", label: "📖 Marshall Rosenberg — Nonviolent Communication", url: "#" },
        { type: "technique", label: "🧘 I-statement technique", url: "#" }
      ],
      follow_up: {
        question: "You explained your boundaries. How many times this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're creating space for mutual understanding." }
      }
    },
    {
      id: "boundary_avoid",
      title: "🚶 Leave If You Need To",
      description: "Sometimes the best way to protect boundaries is to leave the situation. You have the right to leave.",
      conditions: {
        boundary_reaction: ["avoid"],
        boundary_problem: ["emotions", "people"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Ability to leave at the right time",
      tags: ["leave", "self_care", "distance"],
      steps: [
        "Identify situations where you feel boundary crossing.",
        "Allow yourself to leave at any moment.",
        "Don't explain your exit — you have the right.",
        "Use the 'green light' rule: if something is wrong — leave."
      ],
      warnings: [
        "Don't stay if you're uncomfortable — leave.",
        "Don't feel guilty about leaving — it's self-care."
      ],
      daily_action: "Today: give yourself permission to leave any uncomfortable situation.",
      resources: [
        { type: "book", label: "📖 Brené Brown — The Gifts of Imperfection", url: "#" },
        { type: "technique", label: "🧘 'Green light' rule", url: "#" }
      ],
      follow_up: {
        question: "You left uncomfortable situations. How many times this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You care about yourself." }
      }
    },
    {
      id: "boundary_find",
      title: "🔍 Find Your Boundaries",
      description: "To protect boundaries, you first need to find them. Start by observing your feelings.",
      conditions: {
        boundary_attitude: ["unknown", "weak"],
        boundary_problem: ["people", "emotions", "family"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Awareness of your boundaries",
      tags: ["find", "awareness", "feeling"],
      steps: [
        "Each day ask yourself: 'What am I feeling right now?'.",
        "Write down moments of discomfort.",
        "Analyze what caused that discomfort.",
        "In a month, you'll have a map of your boundaries."
      ],
      warnings: [
        "Don't ignore discomfort — it's a signal.",
        "Don't compare yourself to others — boundaries differ."
      ],
      daily_action: "Today: write 3 moments where you felt discomfort.",
      resources: [
        { type: "book", label: "📖 Marsha Linehan — DBT Therapy", url: "#" },
        { type: "technique", label: "🧘 Feelings journal", url: "#" }
      ],
      follow_up: {
        question: "You searched for boundaries. How many times did you notice discomfort?",
        options: ["0", "1–3", "4–7", "More than 7"],
        reward: { "More than 7": "🔥 You've begun to understand yourself." }
      }
    },
    {
      id: "boundary_start",
      title: "🌱 Start Small",
      description: "Setting boundaries is a process. Start with one small boundary today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First conscious boundary",
      tags: ["start", "awareness", "first"],
      steps: [
        "Identify 1 situation where you want to set a boundary.",
        "Tell yourself: 'I have the right to this.'",
        "Take a small step to protect that boundary.",
        "Tomorrow, do a little more."
      ],
      warnings: [
        "Don't try to set all boundaries at once.",
        "Don't be afraid to be inconvenient — it's your right."
      ],
      daily_action: "Today: set 1 small boundary during the day.",
      resources: [
        { type: "book", label: "📖 Henry Cloud — Boundaries", url: "#" },
        { type: "technique", label: "🧘 One step rule", url: "#" }
      ],
      follow_up: {
        question: "You started setting boundaries. How many times this week?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You're building protection for yourself." }
      }
    }
  ]
});

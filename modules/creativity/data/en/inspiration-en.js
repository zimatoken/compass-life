// modules/creativity/data/en/inspiration-en.js
// ============================================================
// INSPIRATION — HOW TO FIND AND SUSTAIN INSPIRATION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "creativity",
    category: "inspiration",
    version: "3.0.0",
    lang: "en",
    title: "✨ Inspiration",
    description: "Inspiration is not a gift, but a skill. Learn to invite it into your life and hold onto it.",
    icon: "✨",
    color: "#d946ef",
    identity_anchor: "You are the source of inspiration"
  },

  questions: [
    {
      id: "inspire_attitude",
      type: "single",
      text: "How do you feel about inspiration?",
      required: true,
      options: [
        { id: "wait",      label: "⏳ I wait for it to come", tags: ["wait"] },
        { id: "chase",     label: "🏃 I catch and write it down", tags: ["chase"] },
        { id: "create",    label: "🎨 I create it through action", tags: ["create"] },
        { id: "doubt",     label: "🌫️ I don't believe in inspiration", tags: ["doubt"] }
      ]
    },
    {
      id: "inspire_source",
      type: "single",
      text: "What most often inspires you?",
      required: true,
      conditions: { inspire_attitude: ["wait", "chase", "create", "doubt"] },
      options: [
        { id: "nature",    label: "🌿 Nature, walks", tags: ["nature"] },
        { id: "people",    label: "👥 People, conversations, books", tags: ["people"] },
        { id: "art",       label: "🎨 Other works of art", tags: ["art"] },
        { id: "emotions",  label: "💭 Strong emotions, experiences", tags: ["emotions"] },
        { id: "action",    label: "⚡ The process of action, movement", tags: ["action"] },
        { id: "none",      label: "🌫️ Rarely inspired by anything", tags: ["none"] }
      ]
    },
    {
      id: "inspire_method",
      type: "single",
      text: "What helps you sustain inspiration?",
      required: true,
      options: [
        { id: "ritual",    label: "🕯️ Rituals and habits", tags: ["ritual"] },
        { id: "record",    label: "📝 Writing ideas down immediately", tags: ["record"] },
        { id: "focus",     label: "🎯 Deep focus without distractions", tags: ["focus"] },
        { id: "share",     label: "🗣️ Discussing with others", tags: ["share"] },
        { id: "momentum",  label: "🚀 Action without pauses", tags: ["momentum"] }
      ]
    },
    {
      id: "deep_inspire_sacrifice",
      type: "single",
      text: "Are you willing to create even without inspiration, just for the sake of action?",
      required: true,
      conditions: { inspire_method: ["ritual", "record", "focus", "share", "momentum"] },
      options: [
        { id: "yes",    label: "✅ Yes, that's my approach", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, without inspiration I can't", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_inspire",
      type: "single",
      text: "In a week I'll ask how you nurtured inspiration. What will you answer?",
      required: true,
      conditions: { deep_inspire_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll create rituals and start", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't succeed", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "inspire_ritual",
      title: "🕯️ Inspiration Rituals",
      description: "You create a space for inspiration. Rituals are bridges between the ordinary and the magical.",
      conditions: {
        inspire_method: ["ritual"],
        inspire_attitude: ["wait", "chase"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Daily ritual to invite inspiration",
      tags: ["ritual", "space", "habit"],
      steps: [
        "Choose 1 ritual: a cup of tea, lighting a candle, specific music.",
        "Do it daily at the same time.",
        "Combine the ritual with action — start creating right after.",
        "After a week, inspiration will come more easily."
      ],
      warnings: [
        "Don't make the ritual mechanical — put meaning into it.",
        "Don't change the ritual daily — choose one."
      ],
      daily_action: "Today: create a ritual to start creating and try it.",
      resources: [
        { type: "book", label: "📖 Rick Rubin — The Creative Act", url: "#" },
        { type: "technique", label: "🧘 Entry ritual into creative state", url: "#" }
      ],
      follow_up: {
        question: "You created a ritual. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You built a bridge to inspiration." }
      }
    },
    {
      id: "inspire_record",
      title: "📝 Idea Collector",
      description: "You are a collector. Write down everything that comes to mind. Ideas don't get lost, they accumulate.",
      conditions: {
        inspire_method: ["record"],
        inspire_attitude: ["chase", "create"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Idea bank for inspiration",
      tags: ["record", "ideas", "collection"],
      steps: [
        "Carry a notebook or note-taking app.",
        "Write down everything that comes to mind (even the strange stuff).",
        "At the end of the week, review and pick the 3 brightest.",
        "Inspiration is the ability to spot an idea in the clutter."
      ],
      warnings: [
        "Don't evaluate ideas at the moment of writing — just record.",
        "Don't think an idea is bad — it might come in useful later."
      ],
      daily_action: "Today: write down 5 ideas that came to mind (even random ones).",
      resources: [
        { type: "book", label: "📖 Twyla Tharp — The Creative Habit", url: "#" },
        { type: "technique", label: "🧘 Paper brainstorming method", url: "#" }
      ],
      follow_up: {
        question: "You recorded ideas. How many ideas did you collect in a week?",
        options: ["0", "1–5", "6–15", "More than 15"],
        reward: { "More than 15": "🔥 You became an idea collector." }
      }
    },
    {
      id: "inspire_focus",
      title: "🎯 Deep Immersion",
      description: "Inspiration loves silence and depth. Turn off the outside world and enter your creative field.",
      conditions: {
        inspire_method: ["focus"],
        inspire_attitude: ["create", "chase"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Ability to enter flow state",
      tags: ["focus", "flow", "depth"],
      steps: [
        "Set aside 30 minutes without distractions (phone off).",
        "Sit down to create and don't leave.",
        "If thoughts wander — bring them back to the task.",
        "After 2 weeks, this state will be faster to access."
      ],
      warnings: [
        "Don't check your phone — not even for a second.",
        "Don't switch between tasks — stay on one."
      ],
      daily_action: "Today: set aside 30 minutes for creativity without distractions.",
      resources: [
        { type: "book", label: "📖 Mihaly Csikszentmihalyi — Flow", url: "#" },
        { type: "technique", label: "🧘 Pomodoro for creativity", url: "#" }
      ],
      follow_up: {
        question: "You practiced deep immersion. How many days a week?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You entered the flow." }
      }
    },
    {
      id: "inspire_share",
      title: "🗣️ Inspiration in Dialogue",
      description: "Ideas are born in conversation. Discuss your ideas — they'll come to life.",
      conditions: {
        inspire_method: ["share"],
        inspire_attitude: ["wait", "doubt"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Support and new perspectives",
      tags: ["share", "dialogue", "community"],
      steps: [
        "Tell 1 person about your idea.",
        "Ask them to ask questions (not give advice).",
        "Write down 3 new thoughts that came up in the conversation.",
        "Share with another person — the idea will grow."
      ],
      warnings: [
        "Don't tell critics — seek inspiring people.",
        "Don't fear your idea will be stolen — it's yours."
      ],
      daily_action: "Today: tell your idea to 1 person and write down their questions.",
      resources: [
        { type: "book", label: "📖 Keith Ferrazzi — Never Eat Alone", url: "#" },
        { type: "technique", label: "🧘 Inspiration circle", url: "#" }
      ],
      follow_up: {
        question: "You shared ideas. How many times did you discuss in a week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You created an inspiring environment." }
      }
    },
    {
      id: "inspire_momentum",
      title: "🚀 Action Creates Inspiration",
      description: "Inspiration comes during the process, not before. Move and it will catch up.",
      conditions: {
        inspire_method: ["momentum"],
        inspire_attitude: ["create", "chase"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Habit of creating without waiting",
      tags: ["momentum", "action", "flow"],
      steps: [
        "Start creating without preparation.",
        "Allow yourself to be imperfect.",
        "Don't stop for 10 minutes.",
        "Inspiration will come by minute 5."
      ],
      warnings: [
        "Don't wait for the right state — start without it.",
        "Don't stop in the middle — give yourself time to finish."
      ],
      daily_action: "Today: start creating without preparation and continue for 10 minutes.",
      resources: [
        { type: "book", label: "📖 George Leonard — Mastery", url: "#" },
        { type: "technique", label: "🧘 10-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You acted without pauses. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You became a creator independent of mood." }
      }
    },
    {
      id: "inspire_start",
      title: "🌱 Start Looking for Inspiration",
      description: "Inspiration is not magic — it's attention. Start noticing beauty and interest around you.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First conscious attention to beauty",
      tags: ["start", "awareness", "discovery"],
      steps: [
        "Step outside and find 3 beautiful or unusual things.",
        "Write them down in your notes.",
        "Think about how you can use this in your creative work.",
        "Repeat tomorrow."
      ],
      warnings: [
        "Don't think inspiration must be grand.",
        "Don't skip days — train your eye."
      ],
      daily_action: "Today: find 3 sources of inspiration around you.",
      resources: [
        { type: "book", label: "📖 Austin Kleon — Show Your Work!", url: "#" },
        { type: "technique", label: "🧘 Inspiration journal", url: "#" }
      ],
      follow_up: {
        question: "You started looking for inspiration. How many days a week?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You opened your eyes to the beauty of the world." }
      }
    }
  ]
});

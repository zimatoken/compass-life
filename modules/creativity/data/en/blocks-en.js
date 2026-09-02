// modules/creativity/data/en/blocks-en.js
// ============================================================
// BLOCKS — HOW TO OVERCOME CREATIVE CRISIS AND FEAR v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "creativity",
    category: "blocks",
    version: "3.0.0",
    lang: "en",
    title: "🧱 Blocks",
    description: "Creative crisis is not the end, but the beginning. Learn to see blocks and move through them.",
    icon: "🧱",
    color: "#d946ef",
    identity_anchor: "You are one who walks through walls"
  },

  questions: [
    {
      id: "block_attitude",
      type: "single",
      text: "How do you usually deal with creative blocks?",
      required: true,
      options: [
        { id: "stop",      label: "🛑 I stop and put it aside", tags: ["stop"] },
        { id: "push",      label: "💪 I try to force through", tags: ["push"] },
        { id: "wait",      label: "⏳ I wait for it to pass", tags: ["wait"] },
        { id: "switch",    label: "🔄 I switch to something else", tags: ["switch"] },
        { id: "accept",    label: "🧘 I accept and look for solutions", tags: ["accept"] }
      ]
    },
    {
      id: "block_source",
      type: "single",
      text: "What most often causes your creative blocks?",
      required: true,
      conditions: { block_attitude: ["stop", "push", "wait", "switch", "accept"] },
      options: [
        { id: "fear",      label: "😨 Fear of failure / judgment", tags: ["fear"] },
        { id: "perfect",   label: "🎯 Perfectionism", tags: ["perfect"] },
        { id: "fatigue",   label: "😩 Fatigue, lack of energy", tags: ["fatigue"] },
        { id: "comparison", label: "📱 Comparison with others", tags: ["comparison"] },
        { id: "no_idea",   label: "🌫️ No ideas", tags: ["no_idea"] }
      ]
    },
    {
      id: "block_method",
      type: "single",
      text: "Which method of working with blocks suits you best?",
      required: true,
      options: [
        { id: "write",     label: "✍️ Writing out fears and thoughts", tags: ["write"] },
        { id: "move",      label: "🚶 Changing activity / walking", tags: ["move"] },
        { id: "talk",      label: "🗣️ Discussing with others", tags: ["talk"] },
        { id: "small",     label: "🐢 Breaking into small steps", tags: ["small"] },
        { id: "rest",      label: "😴 Rest and recharge", tags: ["rest"] }
      ]
    },
    {
      id: "deep_block_sacrifice",
      type: "single",
      text: "Are you willing to spend 10 minutes working on a block instead of running away from it?",
      required: true,
      conditions: { block_method: ["write", "move", "talk", "small", "rest"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's too difficult", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_blocks",
      type: "single",
      text: "In a week I'll ask how you worked with blocks. What will you answer?",
      required: true,
      conditions: { deep_block_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start practicing today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't manage", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "blocks_write",
      title: "✍️ Writing Out Fears",
      description: "You are an explorer of your thoughts. When fears are written down, they become less scary.",
      conditions: {
        block_method: ["write"],
        block_source: ["fear", "perfect", "comparison"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Awareness of fears and reducing their power",
      tags: ["write", "fear", "awareness"],
      steps: [
        "Each day write down 1 fear that blocks your creativity.",
        "Ask yourself: 'What's the worst that could happen?' and write the answer.",
        "Write how you would handle that worst case.",
        "After a week, read it all — fears will seem smaller."
      ],
      warnings: [
        "Don't avoid the fear — write it clearly.",
        "Don't criticize yourself for fears — everyone has them."
      ],
      daily_action: "Today: write down your main fear and the worst-case scenario.",
      resources: [
        { type: "book", label: "📖 Julia Cameron — The Artist's Way (Morning Pages)", url: "#" },
        { type: "technique", label: "🧘 Worst-case scenario protocol", url: "#" }
      ],
      follow_up: {
        question: "You wrote out fears. How many days did you practice?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You faced your fears head-on." }
      }
    },
    {
      id: "blocks_move",
      title: "🚶 Movement as Medicine",
      description: "Creative blocks often live in the body. Walking or changing activity is the best way to unlock.",
      conditions: {
        block_method: ["move"],
        block_source: ["fatigue", "no_idea"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Restored energy and flow of ideas",
      tags: ["move", "energy", "flow"],
      steps: [
        "When you feel a block — stand up and take a 10-minute walk.",
        "Look around, notice details.",
        "Change your activity (wash dishes, clean, stretch).",
        "Return to your work — the block often disappears."
      ],
      warnings: [
        "Don't stay seated hoping it will pass — move.",
        "Don't take your phone on the walk — look around."
      ],
      daily_action: "Today: when you hit a block, take a 10-minute walk without your phone.",
      resources: [
        { type: "book", label: "📖 John Ratey — Spark", url: "#" },
        { type: "technique", label: "🧘 Walking meditation", url: "#" }
      ],
      follow_up: {
        question: "You used movement to break blocks. How many times?",
        options: ["0", "1–2", "3–5", "6+"],
        reward: { "6+": "🔥 You turned movement into a tool." }
      }
    },
    {
      id: "blocks_talk",
      title: "🗣️ Conversation as Therapy",
      description: "Sometimes a block dissolves when you say it out loud. Another person is a mirror.",
      conditions: {
        block_method: ["talk"],
        block_source: ["fear", "comparison", "no_idea"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Support and new perspectives",
      tags: ["talk", "support", "reframe"],
      steps: [
        "Find someone you trust (friend, mentor, coach).",
        "Tell them about your block — without filters.",
        "Ask them to ask questions, not give advice.",
        "Write down 3 ideas that came up after the conversation."
      ],
      warnings: [
        "Don't choose someone who will devalue or criticize.",
        "Don't expect ready-made solutions — the process of talking matters."
      ],
      daily_action: "Today: message 1 person and tell them about your creative block.",
      resources: [
        { type: "book", label: "📖 Carl Rogers — On Becoming a Person", url: "#" },
        { type: "technique", label: "🧘 Support circle", url: "#" }
      ],
      follow_up: {
        question: "You discussed blocks. How many conversations did you have?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You built a support network." }
      }
    },
    {
      id: "blocks_small",
      title: "🐢 Small Steps",
      description: "A big block breaks into small steps. Take one micro-action — and the block starts to melt.",
      conditions: {
        block_method: ["small"],
        block_source: ["perfect", "no_idea"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Ability to start despite the block",
      tags: ["small", "action", "start"],
      steps: [
        "Break your creative task into 10 steps of 2 minutes each.",
        "Do only step 1 — even if it's scary.",
        "Tomorrow do step 2. And so on each day.",
        "In a week, you'll be amazed at what you've done."
      ],
      warnings: [
        "Don't try to do everything at once — only one step.",
        "Don't judge the quality — action is what matters."
      ],
      daily_action: "Today: break the block into 10 steps and do step 1.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "technique", label: "🧘 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You broke down the block. How many steps did you take in a week?",
        options: ["0", "1–2", "3–5", "6+"],
        reward: { "6+": "🔥 You destroyed the block with action." }
      }
    },
    {
      id: "blocks_rest",
      title: "😴 Rest as Part of the Process",
      description: "Sometimes a block is a signal that it's time to rest. Recharging is part of the creative cycle.",
      conditions: {
        block_method: ["rest"],
        block_source: ["fatigue", "no_idea"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Ability to rest without guilt",
      tags: ["rest", "recovery", "cycle"],
      steps: [
        "Admit: 'I am tired. This is normal.'",
        "Take 15 minutes of absolute rest — no screens.",
        "Do something pleasant without any goal (pet a cat, have tea).",
        "Return to creativity the next day."
      ],
      warnings: [
        "Don't rest with your phone — it's not rest.",
        "Don't feel guilty about resting — it's part of the work."
      ],
      daily_action: "Today: take 15 minutes of absolute rest without screens.",
      resources: [
        { type: "book", label: "📖 Matthew Walker — Why We Sleep", url: "#" },
        { type: "technique", label: "🧘 Micro-pauses", url: "#" }
      ],
      follow_up: {
        question: "You practiced rest. How many days did you take time to recharge?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You understood: rest is part of creativity." }
      }
    },
    {
      id: "blocks_start",
      title: "🌱 First Step Through the Block",
      description: "Blocks are part of the journey. You're not alone. Just start small.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action despite the block",
      tags: ["start", "action", "first"],
      steps: [
        "Write 3 words about what you want to create.",
        "Read them aloud.",
        "Take one small action in that direction.",
        "Tomorrow add 2 more words."
      ],
      warnings: [
        "Don't wait for inspiration — it comes during the process.",
        "Don't be afraid to do it imperfectly — something is better than nothing."
      ],
      daily_action: "Today: write 3 words and take the first action.",
      resources: [
        { type: "book", label: "📖 Rick Rubin — The Creative Act", url: "#" },
        { type: "technique", label: "🧘 'Five words' method", url: "#" }
      ],
      follow_up: {
        question: "You started working with blocks. How many days did you take small steps?",
        options: ["0", "1–2", "3–4", "5–7"],
        reward: { "5–7": "🔥 You are already stronger than your block." }
      }
    }
  ]
});

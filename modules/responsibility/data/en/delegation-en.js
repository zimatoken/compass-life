// modules/responsibility/data/en/delegation-en.js
// ============================================================
// DELEGATION — HOW TO DELEGATE TASKS WHILE KEEPING CONTROL v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "responsibility",
    category: "delegation",
    version: "3.0.0",
    lang: "en",
    title: "🤝 Delegation",
    description: "Delegation is not abdication of responsibility — it's multiplying efficiency. Learn to trust and free your time.",
    icon: "🤝",
    color: "#3b82f6",
    identity_anchor: "You are a leader who inspires"
  },

  questions: [
    {
      id: "delegation_attitude",
      type: "single",
      text: "How do you feel about delegating tasks?",
      required: true,
      options: [
        { id: "control",   label: "🔒 I'll do it myself, no one will do it right", tags: ["control"] },
        { id: "willing",   label: "🤝 I'm willing to delegate but afraid", tags: ["willing"] },
        { id: "expert",    label: "💪 I know how to delegate and do it regularly", tags: ["expert"] },
        { id: "no_need",   label: "🌫️ I don't need to delegate, I'm alone", tags: ["no_need"] }
      ]
    },
    {
      id: "delegation_block",
      type: "single",
      text: "What prevents you from delegating tasks?",
      required: true,
      conditions: { delegation_attitude: ["control", "willing", "expert", "no_need"] },
      options: [
        { id: "trust",      label: "😰 I don't trust others", tags: ["trust"] },
        { id: "time",       label: "⏰ No time to explain", tags: ["time"] },
        { id: "quality",    label: "🎯 I'm afraid they'll do worse", tags: ["quality"] },
        { id: "control_freak", label: "🧠 I want to control everything", tags: ["control_freak"] },
        { id: "no_one",     label: "😐 No one to delegate to", tags: ["no_one"] }
      ]
    },
    {
      id: "delegation_readiness",
      type: "single",
      text: "Are you willing to learn delegation?",
      required: true,
      options: [
        { id: "ready",    label: "✅ Yes, I want to learn", tags: ["ready"] },
        { id: "curious",  label: "🤔 Maybe, not sure", tags: ["curious"] },
        { id: "not",      label: "❌ No, I already know everything", tags: ["not"] }
      ]
    },
    {
      id: "deep_delegation_sacrifice",
      type: "single",
      text: "Are you willing to hand over one important task to someone else and allow them to make mistakes?",
      required: true,
      conditions: { delegation_readiness: ["ready", "curious", "not"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's too risky", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_delegation",
      type: "single",
      text: "In a week I'll ask what task you delegated. What will you answer?",
      required: true,
      conditions: { deep_delegation_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I already know what to delegate", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't dare", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "delegation_small",
      title: "🌱 Start Small",
      description: "Start with small, unimportant tasks. This reduces fear and lets you get used to it.",
      conditions: {
        delegation_block: ["trust", "quality", "control_freak"],
        delegation_attitude: ["control", "willing"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "First successful delegation",
      tags: ["small", "trust", "beginner"],
      steps: [
        "Choose a task that's easy to describe (e.g., buy groceries, find information).",
        "Find someone who can do it.",
        "Give clear instructions and a deadline.",
        "Accept the result without criticism — even if it's not perfect."
      ],
      warnings: [
        "Don't choose a critical task — only secondary ones.",
        "Don't control the process — trust."
      ],
      daily_action: "Today: identify 1 task you can delegate and offer it to someone.",
      resources: [
        { type: "book", label: "📖 Stephen Covey — The 7 Habits of Highly Effective People", url: "#" },
        { type: "technique", label: "🧘 Eisenhower Matrix: sort tasks by importance", url: "#" }
      ],
      follow_up: {
        question: "You started small. What task did you delegate?",
        options: ["None", "Found a task", "Offered to someone", "Successfully delegated"],
        reward: { "Successfully delegated": "🔥 You've broken through the first barrier." }
      }
    },
    {
      id: "delegation_teach",
      title: "📚 Training Before Delegation",
      description: "To delegate effectively, invest time in training and creating instructions.",
      conditions: {
        delegation_block: ["time", "quality"],
        delegation_attitude: ["control", "willing"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Reliable executor",
      tags: ["teach", "instruction", "process"],
      steps: [
        "Write down the task algorithm as a checklist.",
        "Give a brief training to the person you're delegating to.",
        "Let them practice with your oversight the first time.",
        "After the first time, release control."
      ],
      warnings: [
        "Don't overload with information — give it in doses.",
        "Don't expect perfection the first time — let them learn."
      ],
      daily_action: "Today: write a checklist for a task you can delegate.",
      resources: [
        { type: "book", label: "📖 Ichak Adizes — The Ideal Executive", url: "#" },
        { type: "technique", label: "🧘 Creating Standard Operating Procedures (SOP)", url: "#" }
      ],
      follow_up: {
        question: "You trained an executor. How did it go?",
        options: ["Nothing", "Wrote instructions", "Conducted training", "Person works independently"],
        reward: { "Person works independently": "🔥 You've created a system." }
      }
    },
    {
      id: "delegation_trust",
      title: "🤝 Delegation with Trust",
      description: "Delegation is an act of trust. The more you trust, the more others' responsibility grows.",
      conditions: {
        delegation_block: ["trust", "control_freak"],
        delegation_attitude: ["willing"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Team that works without your involvement",
      tags: ["trust", "leadership", "empowerment"],
      steps: [
        "Choose the person you trust most.",
        "Give them a task with full freedom on how to complete it.",
        "Agree only on result and deadlines.",
        "Accept the result without edits — even if it differs from your vision."
      ],
      warnings: [
        "Don't interfere with the process — it undermines trust.",
        "Don't criticize differences — value initiative."
      ],
      daily_action: "Today: give someone a task with no instructions, just the desired outcome.",
      resources: [
        { type: "book", label: "📖 Patrick Lencioni — The Five Dysfunctions of a Team", url: "#" },
        { type: "technique", label: "🧘 Management through trust", url: "#" }
      ],
      follow_up: {
        question: "You delegated with trust. How did it go?",
        options: ["Not at all", "Tried but still controlled", "Trusted and it worked", "Result exceeded expectations"],
        reward: { "Result exceeded expectations": "🔥 You unlocked the person's potential." }
      }
    },
    {
      id: "delegation_find_person",
      title: "🔍 Finding a Reliable Person",
      description: "If there's no one to delegate to — find them. This could be an assistant, freelancer, or colleague.",
      conditions: {
        delegation_block: ["no_one"],
        delegation_attitude: ["willing", "control"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 weeks",
      yield_estimate: "Reliable executor",
      tags: ["find", "assistant", "outsource"],
      steps: [
        "Define which tasks can be delegated and what budget you have.",
        "Post an ad or ask for recommendations.",
        "Interview candidates and choose one.",
        "Start with a trial task."
      ],
      warnings: [
        "Don't hire the first person you find — check reviews.",
        "Don't try to save on quality — good executors cost money."
      ],
      daily_action: "Today: write a list of tasks you can outsource.",
      resources: [
        { type: "link", label: "🔗 Freelance platforms (Upwork, Fiverr)", url: "#" },
        { type: "book", label: "📖 Timothy Ferriss — The 4-Hour Workweek", url: "#" }
      ],
      follow_up: {
        question: "You looked for an executor. What did you do this week?",
        options: ["Nothing", "Made a task list", "Posted an ad", "Found and started working"],
        reward: { "Found and started working": "🔥 You freed your time." }
      }
    },
    {
      id: "delegation_expert",
      title: "💪 Scaling Delegation",
      description: "You already delegate. Now scale it: create a system to delegate even more.",
      conditions: {
        delegation_attitude: ["expert"],
        delegation_block: ["no_one", "time"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "3 months",
      yield_estimate: "Delegation system at the company level",
      tags: ["expert", "system", "scale"],
      steps: [
        "Analyze all tasks you perform.",
        "Separate them into what you can delegate and what you must do yourself.",
        "Hire an assistant or create a department.",
        "Implement a control system without micromanagement."
      ],
      warnings: [
        "Don't think no one can do it — look for talent.",
        "Don't be afraid to let go of control — it's growth."
      ],
      daily_action: "Today: list all your tasks and mark those you can delegate.",
      resources: [
        { type: "book", label: "📖 Michael Gerber — The E-Myth Revisited", url: "#" },
        { type: "technique", label: "🧘 80/20 method in delegation", url: "#" }
      ],
      follow_up: {
        question: "You're scaling delegation. What changed this week?",
        options: ["Nothing", "Started analyzing", "Found an assistant", "Launched new system"],
        reward: { "Launched new system": "🔥 You're moving to the next level." }
      }
    },
    {
      id: "delegation_start",
      title: "🌱 First Step in Delegation",
      description: "Delegation starts with the decision to trust. Even if it's scary, take the first step.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First delegation",
      tags: ["start", "trust", "first"],
      steps: [
        "Choose one simple task you can assign to someone else.",
        "Write or tell the person you need help.",
        "Give clear instructions and set a deadline.",
        "Accept the result and thank them."
      ],
      warnings: [
        "Don't be afraid it won't be perfect — practice comes with time.",
        "Don't cancel delegation at the last moment."
      ],
      daily_action: "Today: find a task and ask someone for help.",
      resources: [
        { type: "book", label: "📖 Dale Carnegie — How to Win Friends and Influence People", url: "#" },
        { type: "technique", label: "🧘 'Ask for help' technique", url: "#" }
      ],
      follow_up: {
        question: "You started delegating. How many tasks did you delegate in a week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're already becoming a true leader." }
      }
    }
  ]
});

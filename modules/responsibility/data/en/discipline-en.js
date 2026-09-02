// modules/responsibility/data/en/discipline-en.js
// ============================================================
// DISCIPLINE — HOW TO BUILD SELF-DISCIPLINE AND SELF-CONTROL v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "responsibility",
    category: "discipline",
    version: "3.0.0",
    lang: "en",
    title: "🎯 Discipline",
    description: "Discipline is not limitation, but freedom. Learn to master yourself to achieve your goals.",
    icon: "🎯",
    color: "#3b82f6",
    identity_anchor: "You are the master of your actions"
  },

  questions: [
    {
      id: "discipline_attitude",
      type: "single",
      text: "How do you feel about self-discipline?",
      required: true,
      options: [
        { id: "weak",      label: "😅 I find it hard to control myself", tags: ["weak"] },
        { id: "medium",    label: "🤔 Sometimes I can, sometimes I can't", tags: ["medium"] },
        { id: "strong",    label: "💪 I have good discipline", tags: ["strong"] },
        { id: "no_need",   label: "🌫️ I don't think discipline is needed", tags: ["no_need"] }
      ]
    },
    {
      id: "discipline_block",
      type: "single",
      text: "What most often gets in the way of your discipline?",
      required: true,
      conditions: { discipline_attitude: ["weak", "medium", "strong", "no_need"] },
      options: [
        { id: "procrastination", label: "⏳ Procrastination, putting things off", tags: ["procrastination"] },
        { id: "distractions",    label: "📱 Distractions (phone, social media)", tags: ["distractions"] },
        { id: "fatigue",         label: "😴 Fatigue, lack of energy", tags: ["fatigue"] },
        { id: "no_goal",         label: "🎯 No clear goal", tags: ["no_goal"] },
        { id: "no_problem",      label: "✅ Nothing gets in my way", tags: ["no_problem"] }
      ]
    },
    {
      id: "discipline_method",
      type: "single",
      text: "Which method for strengthening discipline suits you best?",
      required: true,
      options: [
        { id: "routine",    label: "📅 Strict daily routine", tags: ["routine"] },
        { id: "reward",     label: "🎁 Reward system", tags: ["reward"] },
        { id: "accountability", label: "👥 Accountability to others", tags: ["accountability"] },
        { id: "mindfulness", label: "🧘 Mindfulness and meditation", tags: ["mindfulness"] },
        { id: "small_steps", label: "🐢 Small steps, gradual progress", tags: ["small_steps"] }
      ]
    },
    {
      id: "deep_discipline_sacrifice",
      type: "single",
      text: "Are you willing to follow a strict routine for 7 days, even if it's uncomfortable?",
      required: true,
      conditions: { discipline_method: ["routine", "reward", "accountability", "mindfulness", "small_steps"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's too rigid", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_discipline",
      type: "single",
      text: "In a week I'll ask how you stuck to your routine. What will you answer?",
      required: true,
      conditions: { deep_discipline_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't handle it", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "discipline_routine",
      title: "📅 Routine and Schedule",
      description: "You are the architect of your day. A clear routine reduces willpower load and makes actions automatic.",
      conditions: {
        discipline_method: ["routine"],
        discipline_block: ["procrastination", "distractions"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Stable daily routine",
      tags: ["routine", "schedule", "structure"],
      steps: [
        "Write down all your tasks, divided by hour.",
        "Allocate blocks: work, rest, meals, sleep.",
        "Start and end tasks at the same time each day.",
        "Stick to the schedule for 7 days — it will become a habit."
      ],
      warnings: [
        "Don't overload the schedule — leave room for the unexpected.",
        "Don't quit after one slip — continue the next day."
      ],
      daily_action: "Today: create a schedule for tomorrow, accurate to 30 minutes.",
      resources: [
        { type: "book", label: "📖 David Allen — Getting Things Done", url: "#" },
        { type: "technique", label: "🧘 Time Blocking method", url: "#" }
      ],
      follow_up: {
        question: "You followed a schedule. How many days out of 7 did you stick to it?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You've created a rhythm that works." }
      }
    },
    {
      id: "discipline_reward",
      title: "🎁 Rewards for Actions",
      description: "You are a brain trainer. Reward yourself for completing tasks, and discipline becomes enjoyable.",
      conditions: {
        discipline_method: ["reward"],
        discipline_block: ["procrastination", "fatigue"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Increased motivation",
      tags: ["reward", "motivation", "dopamine"],
      steps: [
        "Assign a small reward to each difficult task (a series, candy, 10 minutes of rest).",
        "Only get the reward after completing the task.",
        "Keep a reward journal.",
        "After a week, you'll notice you look forward to tasks to earn the reward."
      ],
      warnings: [
        "Don't give the reward without completing the task.",
        "Don't make the reward too big — it should be proportional."
      ],
      daily_action: "Today: choose 3 tasks and assign rewards to them.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "technique", label: "🧘 'Do-Get' method", url: "#" }
      ],
      follow_up: {
        question: "You used rewards. How many tasks did you complete in a week?",
        options: ["0", "1–5", "6–10", "More than 10"],
        reward: { "More than 10": "🔥 You turned discipline into a game." }
      }
    },
    {
      id: "discipline_accountability",
      title: "👥 Accountability and Support",
      description: "You are a social creature. When you're accountable to others, discipline becomes easier.",
      conditions: {
        discipline_method: ["accountability"],
        discipline_block: ["procrastination", "distractions"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Support and consistency",
      tags: ["accountability", "support", "commitment"],
      steps: [
        "Find a partner or chat for daily reporting.",
        "Write daily what you did (or didn't do).",
        "Have weekly check-in calls to discuss progress.",
        "Celebrate successes together."
      ],
      warnings: [
        "Don't choose a toxic partner — they should support you.",
        "Don't be afraid to admit failures — it's part of the journey."
      ],
      daily_action: "Today: write to one person and suggest joint tracking of discipline.",
      resources: [
        { type: "book", label: "📖 Marshall Goldsmith — Triggers", url: "#" },
        { type: "technique", label: "🧘 Daily check-in with a partner", url: "#" }
      ],
      follow_up: {
        question: "You reported to a partner. How many days did you report?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You created a system of external accountability." }
      }
    },
    {
      id: "discipline_mindfulness",
      title: "🧘 Mindful Discipline",
      description: "Discipline starts with attention. Learn to notice your impulses and choose your response.",
      conditions: {
        discipline_method: ["mindfulness"],
        discipline_block: ["fatigue", "distractions"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 weeks",
      yield_estimate: "Ability to manage attention",
      tags: ["mindfulness", "focus", "self_control"],
      steps: [
        "Meditate 5–10 minutes daily (observe your breath).",
        "In moments of distraction, pause and ask: 'What am I doing right now?'",
        "Return your attention to the task without judgment.",
        "Track how many times you were able to switch attention."
      ],
      warnings: [
        "Don't expect immediate results — skill takes time.",
        "Don't judge yourself for distractions — it's normal."
      ],
      daily_action: "Today: do a 5-minute meditation and write down your feelings.",
      resources: [
        { type: "book", label: "📖 Eckhart Tolle — The Power of Now", url: "#" },
        { type: "technique", label: "🧘 Body scan meditation", url: "#" }
      ],
      follow_up: {
        question: "You practiced mindfulness. How many days did you meditate?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You strengthened the muscle of attention." }
      }
    },
    {
      id: "discipline_small_steps",
      title: "🐢 Gradual and Small Steps",
      description: "Discipline is not a sprint, but a marathon. Start small and gradually increase.",
      conditions: {
        discipline_method: ["small_steps"],
        discipline_block: ["procrastination", "fatigue"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Sustainable habit",
      tags: ["small_steps", "gradual", "sustainable"],
      steps: [
        "Choose 1 habit you want to build.",
        "Do it for 2 minutes a day — no more.",
        "Every 3 days, add 2 more minutes.",
        "In a month, you'll be doing 20 minutes effortlessly."
      ],
      warnings: [
        "Don't try to do more than planned — it breaks the system.",
        "Don't skip days — even 2 minutes matter."
      ],
      daily_action: "Today: choose a habit and do it for 2 minutes.",
      resources: [
        { type: "book", label: "📖 James Clear — Atomic Habits", url: "#" },
        { type: "technique", label: "🧘 2-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You took small steps. How many days did you practice?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You've already started the journey to big discipline." }
      }
    },
    {
      id: "discipline_start",
      title: "🌱 Start of Discipline",
      description: "Discipline starts with one action. You don't need everything at once — start small.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action",
      tags: ["start", "action", "first"],
      steps: [
        "Choose one action that brings you closer to your goal.",
        "Do it right now.",
        "Write down that you did it.",
        "Repeat tomorrow."
      ],
      warnings: [
        "Don't choose a difficult action — start with something easy.",
        "Don't wait for the perfect moment — it's now."
      ],
      daily_action: "Today: do one small task you've been putting off.",
      resources: [
        { type: "book", label: "📖 Brian Tracy — Eat That Frog", url: "#" },
        { type: "technique", label: "🧘 5-second rule", url: "#" }
      ],
      follow_up: {
        question: "You started the path of discipline. How many actions did you take in a week?",
        options: ["0", "1–3", "4–7", "More than 7"],
        reward: { "More than 7": "🔥 You're already on your way." }
      }
    }
  ]
});

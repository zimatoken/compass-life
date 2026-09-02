// modules/health/data/en/stress-en.js
// ============================================================
// STRESS — HOW TO MANAGE STRESS AND RECOVER v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "stress",
    version: "3.0.0",
    lang: "en",
    title: "🧠 Stress",
    description: "Stress is inevitable. But you can learn to manage it. Recovery practices are your superpower.",
    icon: "🧠",
    color: "#ec4899",
    identity_anchor: "You are the master of your state"
  },

  questions: [
    {
      id: "stress_level",
      type: "single",
      text: "How would you rate your stress level lately?",
      required: true,
      options: [
        { id: "low",      label: "🟢 Low — I feel calm", tags: ["low"] },
        { id: "medium",   label: "🟡 Medium — it happens, but manageable", tags: ["medium"] },
        { id: "high",     label: "🔴 High — often at my limit", tags: ["high"] },
        { id: "burnout",  label: "⚫ Burnout — lack of motivation", tags: ["burnout"] }
      ]
    },
    {
      id: "stress_source",
      type: "single",
      text: "What is your main source of stress?",
      required: true,
      conditions: { stress_level: ["low", "medium", "high", "burnout"] },
      options: [
        { id: "work",     label: "💼 Work, career", tags: ["work"] },
        { id: "family",   label: "🏠 Family, relationships", tags: ["family"] },
        { id: "finance",  label: "💰 Money, finances", tags: ["finance"] },
        { id: "health",   label: "🏥 Health", tags: ["health"] },
        { id: "future",   label: "🔮 Uncertainty about the future", tags: ["future"] },
        { id: "unknown",  label: "🌫️ Don't know", tags: ["unknown"] }
      ]
    },
    {
      id: "stress_method",
      type: "single",
      text: "Which stress relief method suits you best?",
      required: true,
      options: [
        { id: "breathing", label: "🌬️ Breathing exercises", tags: ["breathing"] },
        { id: "meditation", label: "🧘 Meditation, mindfulness", tags: ["meditation"] },
        { id: "physical",   label: "🏃 Physical activity", tags: ["physical"] },
        { id: "creative",   label: "🎨 Creativity, hobbies", tags: ["creative"] },
        { id: "social",     label: "👥 Communication, support", tags: ["social"] },
        { id: "nature",     label: "🌿 Nature, walks", tags: ["nature"] },
        { id: "none",       label: "🌫️ Don't know / haven't tried", tags: ["none"] }
      ]
    },
    {
      id: "deep_stress_sacrifice",
      type: "single",
      text: "Are you willing to spend 10 minutes daily on a stress relief practice?",
      required: true,
      conditions: { stress_method: ["breathing", "meditation", "physical", "creative", "social", "nature", "none"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it won't help", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_stress",
      type: "single",
      text: "In a week I'll ask what practices you used. What will you answer?",
      required: true,
      conditions: { deep_stress_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't handle it", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "stress_breathing",
      title: "🌬️ Breathing to Calm",
      description: "Breathing is the fastest way to calm the nervous system. The 4-7-8 technique works instantly.",
      conditions: {
        stress_method: ["breathing"],
        stress_level: ["high", "burnout", "medium"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Quick tension relief",
      tags: ["breathing", "calm", "quick"],
      steps: [
        "Find a quiet place, sit up straight.",
        "Inhale through your nose for a count of 4.",
        "Hold your breath for a count of 7.",
        "Exhale through your mouth for a count of 8.",
        "Repeat 4–8 times."
      ],
      warnings: [
        "Don't take sharp breaths — breathe smoothly.",
        "Don't hold if you feel dizzy — return to normal breathing."
      ],
      daily_action: "Today: do 4 cycles of 4-7-8 breathing at the first sign of stress.",
      resources: [
        { type: "book", label: "📖 James Nestor — Breath", url: "#" },
        { type: "technique", label: "🧘 4-7-8 technique", url: "#" }
      ],
      follow_up: {
        question: "You practiced breathing. How many times this week?",
        options: ["0", "1–3", "4–7", "More than 7"],
        reward: { "More than 7": "🔥 You tamed your nervous system." }
      }
    },
    {
      id: "stress_meditation",
      title: "🧘 Mindfulness and Meditation",
      description: "Meditation trains the mind to be present. This reduces anxiety and improves concentration.",
      conditions: {
        stress_method: ["meditation"],
        stress_level: ["high", "burnout"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Stress resilience",
      tags: ["meditation", "mindfulness", "calm"],
      steps: [
        "Sit in a quiet place, close your eyes.",
        "Focus on your breath: in — out.",
        "When you get distracted, gently bring your attention back.",
        "Start with 5 minutes, gradually increase."
      ],
      warnings: [
        "Don't expect thoughts to disappear — they'll come, just observe.",
        "Don't scold yourself for distractions — it's normal."
      ],
      daily_action: "Today: do a 5-minute meditation and write down how you feel.",
      resources: [
        { type: "book", label: "📖 Jon Kabat-Zinn — Mindfulness", url: "#" },
        { type: "link", label: "🔗 Headspace or Calm app", url: "#" }
      ],
      follow_up: {
        question: "You meditated. How many days did you practice?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You're training your mind." }
      }
    },
    {
      id: "stress_physical",
      title: "🏃 Movement Against Stress",
      description: "Physical activity burns cortisol and releases endorphins. It's a natural antidepressant.",
      conditions: {
        stress_method: ["physical"],
        stress_level: ["high", "medium"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Reduced cortisol levels",
      tags: ["physical", "endorphins", "stress_relief"],
      steps: [
        "Choose an activity: walking, running, dancing, stretching.",
        "Do it during stressful moments.",
        "Try to get your heart rate up — it releases endorphins.",
        "In a week, you'll feel the difference."
      ],
      warnings: [
        "Don't overdo it — 10 minutes is better than nothing.",
        "Don't expect instant results — consistency is key."
      ],
      daily_action: "Today: at the first sign of stress, do 10 squats or take a walk.",
      resources: [
        { type: "book", label: "📖 John Ratey — Spark: The Revolutionary New Science of Exercise and the Brain", url: "#" },
        { type: "technique", label: "🧘 'Do 5' method", url: "#" }
      ],
      follow_up: {
        question: "You moved against stress. How many times this week?",
        options: ["0", "1–3", "4–6", "7+"],
        reward: { "7+": "🔥 You turned stress into energy." }
      }
    },
    {
      id: "stress_creative",
      title: "🎨 Creativity as Therapy",
      description: "Creativity is flow. When you create, you forget about stress and enter a state of peace.",
      conditions: {
        stress_method: ["creative"],
        stress_level: ["medium", "burnout"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 weeks",
      yield_estimate: "Recovery through creativity",
      tags: ["creative", "flow", "therapy"],
      steps: [
        "Choose a form: drawing, sculpting, cooking, music, poetry.",
        "Act without judgment — just create.",
        "In the process, focus only on what you're doing.",
        "What you create can be kept or gifted."
      ],
      warnings: [
        "Don't judge the result — the process matters.",
        "Don't use creativity for profit at first."
      ],
      daily_action: "Today: create something small in 10 minutes without judgment.",
      resources: [
        { type: "book", label: "📖 Julia Cameron — The Artist's Way", url: "#" },
        { type: "technique", label: "🧘 Creative hour", url: "#" }
      ],
      follow_up: {
        question: "You created. How many days this week did you engage in creativity?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You opened your creative channel." }
      }
    },
    {
      id: "stress_nature",
      title: "🌿 Nature as Medicine",
      description: "Being in nature lowers cortisol levels and restores mental health. This is scientifically proven.",
      conditions: {
        stress_method: ["nature"],
        stress_level: ["high", "burnout"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Stress reduction and recovery",
      tags: ["nature", "restore", "peace"],
      steps: [
        "Go for a walk in a park or forest.",
        "Look at the trees, listen to the birds, feel the ground under your feet.",
        "Don't use your phone — just be.",
        "Breathe slowly, enjoy the moment."
      ],
      warnings: [
        "Don't think about tasks — this is rest time.",
        "Don't go in the rain if you don't want to — but on sunny days, definitely."
      ],
      daily_action: "Today: take a 15-minute walk without a phone.",
      resources: [
        { type: "book", label: "📖 Richard Louv — Last Child in the Woods", url: "#" },
        { type: "technique", label: "🧘 Forest bathing (Shinrin-yoku)", url: "#" }
      ],
      follow_up: {
        question: "You walked in nature. How many days this week?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You're reconnecting with nature." }
      }
    },
    {
      id: "stress_start",
      title: "🌱 First Step to Stress Management",
      description: "Managing stress starts with awareness. Just pay attention to your state.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "Awareness of your state",
      tags: ["start", "awareness", "simple"],
      steps: [
        "Pause for 1 minute.",
        "Ask yourself: 'What am I feeling right now?'",
        "Name the feeling (anger, fear, fatigue).",
        "Accept it without judgment."
      ],
      warnings: [
        "Don't run from feelings — allow them to be.",
        "Don't judge yourself for stress — it's normal."
      ],
      daily_action: "Today: take 3 one-minute pauses just to be in silence.",
      resources: [
        { type: "book", label: "📖 Tara Brach — Radical Acceptance", url: "#" },
        { type: "technique", label: "🧘 Pause of awareness", url: "#" }
      ],
      follow_up: {
        question: "You started managing stress. How many pauses this week?",
        options: ["0", "1–5", "6–15", "More than 15"],
        reward: { "More than 15": "🔥 You're already aware of your states." }
      }
    }
  ]
});

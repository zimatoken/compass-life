// modules/health/data/en/sleep-en.js
// ============================================================
// SLEEP PROTOCOL — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "sleep",
    version: "3.0.0",
    lang: "en",
    title: "😴 Sleep Protocol",
    description: "You are one who cares for yourself. Sleep is not a luxury, it's fuel. Without sleep, everything else loses meaning.",
    icon: "😴",
    color: "#ec4899",
    identity_anchor: "You are the guardian of your sleep"
  },

  questions: [
    // === QUESTION 1: Sleep hours (no conditions) ===
    {
      id: "sleep_hours",
      type: "single",
      text: "How many hours do you sleep on average per night?",
      required: true,
      options: [
        { id: "less6", label: "😴 Less than 6 hours", tags: ["deprived"] },
        { id: "6to7", label: "🛌 6–7 hours", tags: ["short"] },
        { id: "7to8", label: "✅ 7–8 hours", tags: ["optimal"] },
        { id: "more8", label: "🛏️ More than 8 hours", tags: ["long"] }
      ]
    },

    // === QUESTION 2: Wake-up quality ===
    {
      id: "sleep_quality",
      type: "single",
      text: "How do you feel in the morning after waking up?",
      required: true,
      options: [
        { id: "tired", label: "😩 Tired", tags: ["bad"] },
        { id: "groggy", label: "🌫️ Groggy", tags: ["mid"] },
        { id: "fresh", label: "☀️ Refreshed", tags: ["good"] }
      ]
    },

    // === QUESTION 3: Sleep hygiene ===
    {
      id: "screen_before_bed",
      type: "single",
      text: "How often do you look at a screen within an hour before bed?",
      required: true,
      options: [
        { id: "yes_screen", label: "❌ Every day", tags: ["bad"] },
        { id: "sometimes_screen", label: "😐 Sometimes", tags: ["mid"] },
        { id: "no_screen", label: "✅ Rarely or never", tags: ["good"] }
      ]
    },

    // === QUESTION 4: Morning light ===
    {
      id: "morning_light",
      type: "single",
      text: "What do you do in the first 10 minutes after waking up?",
      required: true,
      options: [
        { id: "phone_first", label: "📱 Check my phone", tags: ["bad"] },
        { id: "drink", label: "☕ Drink coffee or tea", tags: ["mid"] },
        { id: "light_outside", label: "☀️ Look outside", tags: ["good"] },
        { id: "nothing", label: "😴 Lie there and do nothing", tags: ["bad"] }
      ]
    },

    // === QUESTION 5: Sleep regularity ===
    {
      id: "sleep_regularity",
      type: "single",
      text: "How consistent is your sleep schedule?",
      required: true,
      options: [
        { id: "chaotic", label: "🌪️ Chaotic — I go to sleep and wake at different times", tags: ["chaotic"] },
        { id: "semi_regular", label: "🔄 Somewhat consistent", tags: ["semi"] },
        { id: "regular", label: "⏰ Consistent — same sleep and wake times", tags: ["regular"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of chronic sleep deprivation ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue sleeping this way for another six months?",
      required: true,
      conditions: { sleep_hours: ["less6", "6to7"] },
      options: [
        { id: "burnout", label: "😩 Complete burnout", tags: ["burnout"] },
        { id: "health_issues", label: "🫀 Health problems", tags: ["health"] },
        { id: "brain_fog", label: "🌫️ Constant brain fog", tags: ["brain_fog"] },
        { id: "immune_drop", label: "🦠 Weakened immune system", tags: ["immune"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you change about your sleep? What answer do you want to give?",
      required: true,
      conditions: { sleep_hours: ["less6", "6to7", "7to8", "more8"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: SLEEP PROTOCOL ===
    {
      id: "sleep_protocol",
      title: "🌙 Sleep Protocol",
      description: "You are the guardian of sleep. Your sleep needs systematic correction. Start with the basics: schedule, environment, rituals.",
      conditions: {
        sleep_hours: ["less6", "6to7"],
        sleep_quality: ["tired", "groggy"],
        screen_before_bed: ["yes_screen", "sometimes_screen"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Refreshing morning and recovery",
      tags: ["sleep", "recovery"],
      steps: [
        "Go to sleep at the same time (±30 minutes).",
        "Remove screens 1 hour before bed — read a paper book.",
        "Make your room cool (18–20°C) and dark.",
        "In the morning — get light immediately after waking, open the curtains."
      ],
      warnings: [
        "DON'T consume caffeine after 2 PM — it disrupts deep sleep.",
        "DON'T fall asleep with your phone — blue light suppresses melatonin."
      ],
      daily_action: "Go to sleep 30 minutes earlier than usual and put your phone away an hour before bed.",
      resources: [
        { type: "book", label: "📖 Why We Sleep — Matthew Walker", url: "#" },
        { type: "technique", label: "🌙 Ritual: 1 hour without screens before bed", url: "#" }
      ],
      follow_up: {
        question: "You started the sleep protocol. What changed in a week?",
        options: ["Nothing", "Started going to bed earlier", "Waking up more refreshed", "Feel recovered"],
        reward: { "Waking up more refreshed": "🔥 You're on the right track! Sleep is restoring you.", "Feel recovered": "🎉 You've regained your energy. That's what matters." }
      }
    },

    // === SOLUTION 2: SLEEP REGULARITY ===
    {
      id: "sleep_regularity_protocol",
      title: "⏰ Sleep Regularity",
      description: "You are the creator of rhythm. Consistency matters more than duration. The brain loves predictability.",
      conditions: {
        sleep_regularity: ["chaotic", "semi_regular"],
        sleep_hours: ["6to7", "7to8"],
        sleep_quality: ["groggy", "mid"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Stable sleep quality",
      tags: ["regularity", "rhythm"],
      steps: [
        "Choose your sleep and wake times — write them down.",
        "Stick to them for 7 days straight, even on weekends.",
        "Use an alarm not just in the morning, but in the evening — 30 minutes before bed.",
        "Mark each day on the calendar — visualize your progress."
      ],
      warnings: [
        "DON'T change your schedule on weekends — it disrupts circadian rhythms.",
        "DON'T nap more than 20 minutes during the day — it steals night sleep."
      ],
      daily_action: "Today: go to sleep and wake at the same time. Write down the times.",
      resources: [
        { type: "book", label: "📖 The Circadian Code — Satchin Panda", url: "#" },
        { type: "technique", label: "⏰ The 7-day rule: consistent schedule", url: "#" }
      ],
      follow_up: {
        question: "You started keeping a sleep schedule. What changed in a week?",
        options: ["Nothing", "Falling asleep faster", "Waking up without an alarm", "Feel the rhythm"],
        reward: { "Waking up without an alarm": "🔥 Your circadian rhythm is adjusting!", "Feel the rhythm": "🎉 You've synced with your biological clock." }
      }
    },

    // === SOLUTION 3: SLEEP HYGIENE ===
    {
      id: "sleep_hygiene",
      title: "🧼 Sleep Hygiene",
      description: "You are the architect of your environment. Sleep quality depends on your surroundings. Create a space that naturally cues sleep.",
      conditions: {
        screen_before_bed: ["yes_screen", "sometimes_screen"],
        sleep_quality: ["tired", "groggy", "mid"],
        sleep_hours: ["6to7", "7to8", "more8"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Deep and restorative sleep",
      tags: ["hygiene", "environment"],
      steps: [
        "Remove all screens from the bedroom — phone, laptop, TV.",
        "Darken the room — use blackout curtains or a sleep mask.",
        "Ventilate before bed — fresh air improves sleep quality.",
        "Use white noise or silence — find your sound background."
      ],
      warnings: [
        "DON'T keep your phone next to the bed — it tempts you.",
        "DON'T overeat before bed — it disrupts deep sleep."
      ],
      daily_action: "Remove your phone from the bedroom tonight. Buy an alarm clock.",
      resources: [
        { type: "book", label: "📖 Why We Sleep — Matthew Walker", url: "#" },
        { type: "technique", label: "🧘 Body scan before sleep", url: "#" }
      ],
      follow_up: {
        question: "You changed your sleep environment. What changed?",
        options: ["Nothing", "Falling asleep easier", "Sleep is deeper", "Waking up rested"],
        reward: { "Sleep is deeper": "🔥 You've created ideal conditions for recovery.", "Waking up rested": "🎉 Your bedroom is now working for you." }
      }
    },

    // === SOLUTION 4: MORNING LIGHT ===
    {
      id: "morning_light_protocol",
      title: "☀️ Morning Light Protocol",
      description: "You are one who starts the day right. Morning light triggers circadian rhythms and programs the entire day.",
      conditions: {
        morning_light: ["phone_first", "drink", "nothing"],
        sleep_quality: ["tired", "groggy", "mid"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 days",
      yield_estimate: "Morning energy and alertness",
      tags: ["morning", "light"],
      steps: [
        "Immediately after waking — go to the balcony or approach a window.",
        "Look at natural light for 2–5 minutes (not at the sun!).",
        "Put your phone away for the first 15 minutes after waking.",
        "Replace morning coffee with a glass of lemon water."
      ],
      warnings: [
        "DON'T look directly at the sun — it damages your eyes.",
        "DON'T grab your phone in the first minute — let your brain wake up."
      ],
      daily_action: "Today: after waking, approach a window for 2 minutes. Phone — later.",
      resources: [
        { type: "book", label: "📖 The Power of Light — Lynn Kern", url: "#" },
        { type: "technique", label: "☀️ 2 minutes of light = circadian rhythm reset", url: "#" }
      ],
      follow_up: {
        question: "You started greeting the morning with light. What changed?",
        options: ["Nothing", "Waking up easier", "More energy", "More alert all day"],
        reward: { "More energy": "🔥 Morning light is the key to an energetic day.", "More alert all day": "🎉 You've reprogrammed your circadian rhythm!" }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_sleep",
      title: "🚀 Start with 1 Change",
      description: "You are the guardian of your sleep. You don't need to change everything at once. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First improvement in sleep quality",
      tags: ["start", "sleep"],
      steps: [
        "Choose 1 change in your sleep routine you can make today.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect instant results — sleep recovers gradually."
      ],
      daily_action: "Make 1 small change in your sleep routine today.",
      resources: [
        { type: "book", label: "📖 Why We Sleep — Matthew Walker", url: "#" },
        { type: "technique", label: "🧘 4-7-8 breathing before sleep", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 sleep change. What changed in a week?",
        options: ["Nothing", "Made 1 change", "Made several", "Feel the difference"],
        reward: { "Feel the difference": "🎉 You've proven to yourself: small steps work." }
      }
    }
  ]
});

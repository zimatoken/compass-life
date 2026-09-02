// modules/health/data/en/movement-en.js
// ============================================================
// MOVEMENT — HOW TO INCORPORATE PHYSICAL ACTIVITY INTO LIFE v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "movement",
    version: "3.0.0",
    lang: "en",
    title: "🏃 Movement",
    description: "Movement is life. You don't need marathons or complex programs. Start small and feel the difference.",
    icon: "🏃",
    color: "#ec4899",
    identity_anchor: "You are a body that loves movement"
  },

  questions: [
    {
      id: "movement_attitude",
      type: "single",
      text: "How do you feel about physical activity?",
      required: true,
      options: [
        { id: "love",      label: "❤️ I love moving, it's my thing", tags: ["love"] },
        { id: "ok",        label: "🤷 It's okay, but I often feel lazy", tags: ["ok"] },
        { id: "hate",      label: "😫 I hate it, but I know I need it", tags: ["hate"] },
        { id: "no_time",   label: "⏰ I have no time", tags: ["no_time"] }
      ]
    },
    {
      id: "movement_block",
      type: "single",
      text: "What prevents you from being active regularly?",
      required: true,
      conditions: { movement_attitude: ["love", "ok", "hate", "no_time"] },
      options: [
        { id: "laziness",    label: "🛋️ Just laziness", tags: ["laziness"] },
        { id: "pain",        label: "💢 Pain in knees/back", tags: ["pain"] },
        { id: "boring",      label: "🥱 Boring and monotonous", tags: ["boring"] },
        { id: "no_routine",  label: "📅 No routine", tags: ["no_routine"] },
        { id: "no_problem",  label: "✅ Nothing prevents me", tags: ["no_problem"] }
      ]
    },
    {
      id: "movement_type",
      type: "single",
      text: "Which type of physical activity suits you best?",
      required: true,
      options: [
        { id: "walking",   label: "🚶 Walking", tags: ["walking"] },
        { id: "running",   label: "🏃 Running, cardio", tags: ["running"] },
        { id: "strength",  label: "🏋️ Strength training", tags: ["strength"] },
        { id: "yoga",      label: "🧘 Yoga, stretching, Pilates", tags: ["yoga"] },
        { id: "dance",     label: "💃 Dancing, active games", tags: ["dance"] },
        { id: "swimming",  label: "🏊 Swimming, water sports", tags: ["swimming"] },
        { id: "none",      label: "🌫️ Don't know / don't like anything", tags: ["none"] }
      ]
    },
    {
      id: "deep_movement_sacrifice",
      type: "single",
      text: "Are you willing to spend 15 minutes daily on physical activity, even when you really don't feel like it?",
      required: true,
      conditions: { movement_type: ["walking", "running", "strength", "yoga", "dance", "swimming", "none"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, I'm not ready", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_movement",
      type: "single",
      text: "In a week I'll ask how many days you exercised. What will you answer?",
      required: true,
      conditions: { deep_movement_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't handle it", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "movement_walking",
      title: "🚶 Walking Ritual",
      description: "Walking is the most natural form of movement. It's accessible anytime, anywhere.",
      conditions: {
        movement_type: ["walking"],
        movement_block: ["laziness", "boring", "no_routine"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Habit of walking 20 minutes daily",
      tags: ["walking", "habit", "easy"],
      steps: [
        "Schedule a daily walk at the same time (e.g., after dinner).",
        "Start with 10 minutes, gradually increase to 20–30.",
        "Don't take your phone — look around, breathe.",
        "In a week, the walk will become a habit."
      ],
      warnings: [
        "Don't try to walk for an hour immediately — start small.",
        "Don't skip days — consistency is more important than duration."
      ],
      daily_action: "Today: take a 10-minute walk without distractions from your phone.",
      resources: [
        { type: "book", label: "📖 Katherine Walter — Walking as Meditation", url: "#" },
        { type: "technique", label: "🧘 Walk without phone", url: "#" }
      ],
      follow_up: {
        question: "You started walking. How many days out of 7 did you walk?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You created a movement ritual." }
      }
    },
    {
      id: "movement_running",
      title: "🏃 Running or Cardio",
      description: "Cardio is heart and lung health. Start with intervals, not a marathon.",
      conditions: {
        movement_type: ["running"],
        movement_block: ["laziness", "boring"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Ability to run 15 minutes non-stop",
      tags: ["running", "cardio", "endurance"],
      steps: [
        "Start with intervals: 1 minute running, 2 minutes walking — repeat 5 times.",
        "Every 3 days, increase running intervals by 30 seconds.",
        "Listen to music or podcasts to avoid boredom.",
        "In 2 weeks, you'll be able to run 15 minutes non-stop."
      ],
      warnings: [
        "Don't run every day — take rest days.",
        "Don't exceed your limits — listen to your body."
      ],
      daily_action: "Today: do your first interval workout (1 min run / 2 min walk × 5).",
      resources: [
        { type: "book", label: "📖 Christopher McDougall — Born to Run", url: "#" },
        { type: "technique", label: "🧘 10% rule (increase load gradually)", url: "#" }
      ],
      follow_up: {
        question: "You started running. How many workouts this week?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You're on the path to endurance." }
      }
    },
    {
      id: "movement_strength",
      title: "🏋️ Strength and Tone",
      description: "Strength training strengthens muscles, bones, and improves posture. Start with simple exercises.",
      conditions: {
        movement_type: ["strength"],
        movement_block: ["laziness", "pain"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 weeks",
      yield_estimate: "Strengthened all muscle groups",
      tags: ["strength", "muscle", "tonus"],
      steps: [
        "Choose 5 basic exercises: squats, push-ups, plank, lunges, rows (with band).",
        "Do 3 sets × 10 reps of each exercise.",
        "Train 3 times a week, every other day.",
        "After 3 weeks, add 1 more exercise."
      ],
      warnings: [
        "Don't take heavy weight immediately — technique matters more.",
        "Don't train without warming up — warm up first."
      ],
      daily_action: "Today: warm up and do 1 round of 5 basic exercises.",
      resources: [
        { type: "book", label: "📖 Mark Lauren — You Are Your Own Gym", url: "#" },
        { type: "link", label: "🔗 Exercise technique videos", url: "#" }
      ],
      follow_up: {
        question: "You started strength training. How many workouts this week?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're strengthening your body." }
      }
    },
    {
      id: "movement_yoga",
      title: "🧘 Yoga and Flexibility",
      description: "Yoga is a balance of strength and flexibility, body and mind. Start with simple asanas.",
      conditions: {
        movement_type: ["yoga"],
        movement_block: ["pain", "boring"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Tension release and improved flexibility",
      tags: ["yoga", "flexibility", "balance"],
      steps: [
        "Find a simple video for beginners (15–20 minutes).",
        "Practice every morning or evening.",
        "Focus on breathing, not perfect posture.",
        "In a week, you'll feel the difference."
      ],
      warnings: [
        "Don't push through pain — it's wrong.",
        "Don't compare yourself to the instructor — you're at your own pace."
      ],
      daily_action: "Today: do a 15-minute yoga practice with simple asanas.",
      resources: [
        { type: "link", label: "🔗 Yoga for beginners — 15 min", url: "#" },
        { type: "book", label: "📖 B.K.S. Iyengar — Light on Yoga", url: "#" }
      ],
      follow_up: {
        question: "You did yoga. How many days did you practice?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You connected body and breath." }
      }
    },
    {
      id: "movement_dance",
      title: "💃 Dancing and Games",
      description: "Movement can be fun. Put on music, dance, or play active games.",
      conditions: {
        movement_type: ["dance"],
        movement_block: ["boring", "laziness"]
      },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Energy and positive mood",
      tags: ["dance", "fun", "energy"],
      steps: [
        "Put on your favorite music for 10–15 minutes.",
        "Dance however you want — don't judge yourself.",
        "You can find online dance lessons.",
        "In a week, dancing will become part of your day."
      ],
      warnings: [
        "Don't be shy — move as you feel.",
        "Don't play too loud — protect your ears and neighbors."
      ],
      daily_action: "Today: put on music and dance to 2 songs in a row.",
      resources: [
        { type: "link", label: "🔗 Dance lessons on YouTube", url: "#" },
        { type: "book", label: "📖 Gabrielle Roth — Dance as Meditation", url: "#" }
      ],
      follow_up: {
        question: "You danced. How many days this week?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You found joy in movement." }
      }
    },
    {
      id: "movement_start",
      title: "🌱 Start Small",
      description: "Movement doesn't require preparation. Just start with what you can do right now.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First movement",
      tags: ["start", "action", "simple"],
      steps: [
        "Stand up and stretch.",
        "Do 10 squats or walk around the room.",
        "Write down how you feel.",
        "Tomorrow do a little more."
      ],
      warnings: [
        "Don't think about results — focus on the process.",
        "Don't wait for the perfect moment — it's now."
      ],
      daily_action: "Today: stand up and do 10 squats or dance for 3 minutes.",
      resources: [
        { type: "book", label: "📖 Katherine Wolfe — Movement as Medicine", url: "#" },
        { type: "technique", label: "🧘 1-minute rule", url: "#" }
      ],
      follow_up: {
        question: "You started moving. How many days this week were you active?",
        options: ["0", "1–2", "3–4", "5+"],
        reward: { "5+": "🔥 You've already become more active." }
      }
    }
  ]
});

// modules/creativity/data/en/channel-en.js
// ============================================================
// CREATIVE CHANNEL — ENGLISH VERSION v3.0
// ============================================================
// What's new:
// • Deep questions (layer 2) — sacrifice
// • creative_format is used in 4 solutions
// • Follow-up readiness — check in 1 week
// • Identity-framing — "You are a creator", not "try"
// • Emotional anchor — name picked up by app.js
// • Clear conditions — NO pseudo-fallbacks
// • 6 solutions with clear segmentation
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "creativity",
    category: "channel",
    version: "3.0.0",
    lang: "en",
    title: "🖌️ Creative Channel",
    description: "You are a creator. Not because you're talented. Because you create. Let's find your way.",
    icon: "🖌️",
    color: "#d946ef",
    identity_anchor: "You are a creator"
  },

  questions: [
    // === QUESTION 1: What you want to create (general, no conditions) ===
    {
      id: "creative_urge",
      type: "single",
      text: "What do you want to create?",
      required: true,
      options: [
        { id: "visual", label: "🎨 Paintings / photos / design", tags: ["visual"] },
        { id: "words",  label: "✍️ Texts / poems / blog",    tags: ["words"] },
        { id: "sound",  label: "🎵 Music / songs / podcasts", tags: ["sound"] },
        { id: "hands",  label: "🔨 Craft / handiwork / cooking", tags: ["hands"] },
        { id: "code",   label: "💻 Code / websites / apps", tags: ["code"] }
      ]
    },

    // === QUESTION 2: What's stopping you (depends on 1 — shows to everyone) ===
    {
      id: "creative_block",
      type: "single",
      text: "What stops you from starting to create?",
      required: true,
      conditions: { creative_urge: ["visual", "words", "sound", "hands", "code"] },
      options: [
        { id: "time",    label: "⏰ No time",                        tags: ["time"] },
        { id: "skill",   label: "🎓 I don't know how / not enough knowledge", tags: ["skill"] },
        { id: "fear",    label: "😨 I'm afraid of judgment",         tags: ["fear"] },
        { id: "idea",    label: "💡 No ideas",                      tags: ["idea"] },
        { id: "perfect", label: "🎯 Fear that it won't be perfect", tags: ["perfect"] }
      ]
    },

    // === QUESTION 3: Childhood spark (deep, no conditions) ===
    {
      id: "childhood_create",
      type: "single",
      text: "What did you create as a child, losing track of time?",
      required: true,
      options: [
        { id: "draw",  label: "🎨 Drew",                          tags: ["draw"] },
        { id: "build", label: "🔨 Built / constructed",           tags: ["build"] },
        { id: "write", label: "✍️ Wrote stories / poems",         tags: ["write"] },
        { id: "sing",  label: "🎵 Sang / played an instrument",    tags: ["sing"] },
        { id: "cook",  label: "🍳 Cooked / made things with hands", tags: ["cook"] },
        { id: "none",  label: "🌫️ I don't remember / wasn't there", tags: ["none"] }
      ]
    },

    // === QUESTION 4: Format (now used in solutions!) ===
    {
      id: "creative_format",
      type: "single",
      text: "What would be the easiest way for you to start?",
      required: true,
      options: [
        { id: "solo",    label: "🪐 Alone — I want to do it for myself",      tags: ["solo"] },
        { id: "social",  label: "👥 With someone — I need an environment",    tags: ["social"] },
        { id: "course",  label: "📚 Through learning — I need structure",      tags: ["course"] },
        { id: "project", label: "🎯 Through a specific project",              tags: ["project"] }
      ]
    },

    // === QUESTION 5: DEEP LAYER 2 — Sacrifice ===
    {
      id: "deep_sacrifice",
      type: "single",
      text: "Are you willing to spend 30 minutes a day on this, even when you don't feel like it?",
      required: true,
      conditions: { creative_urge: ["visual", "words", "sound", "hands", "code"] },
      options: [
        { id: "yes_daily",  label: "✅ Yes, every day",    tags: ["committed"] },
        { id: "yes_weak",   label: "🤔 I'll try, but no promises", tags: ["uncertain"] },
        { id: "no_time",    label: "❌ No time yet",       tags: ["blocked"] }
      ]
    },

    // === QUESTION 6: FOLLOW-UP READINESS (1 week check) ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you do in these 7 days? What answer do you want to give?",
      required: true,
      conditions: { creative_block: ["time", "skill", "fear", "idea", "perfect"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today",                  tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't do anything",   tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: FEAR / PERFECTIONISM ===
    {
      id: "creative_courage",
      title: "🛡️ Creative Courage",
      description: "You are brave. Fear is not an enemy, it's a signal of growth. Every creator goes through this.",
      conditions: {
        creative_block: ["fear", "perfect"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Freedom to create without fear",
      tags: ["fear", "courage", "mindset"],
      steps: [
        "Write the worst-case scenario: what happens if you get criticized?",
        "Show your work to 1 safe person (friend, mom, cat).",
        "Notice: the world didn't collapse. Write down this feeling.",
        "Repeat in 2 days — each time the fear will be less."
      ],
      warnings: [
        "DON'T wait for the perfect moment — it doesn't exist.",
        "DON'T compare your day 1 with someone else's day 1000."
      ],
      daily_action: "Today: show 1 person something you created. Even if it's crooked.",
      resources: [
        { type: "book", label: "📖 Daring Greatly — Brené Brown", url: "#" },
        { type: "technique", label: "🧘 Worst-case scenario protocol", url: "#" }
      ],
      follow_up: {
        question: "A week ago you decided to overcome fear. What did you do?",
        options: ["Nothing", "Tried", "Showed someone", "Creating every day"],
        reward: { "Showed someone": "🔥 You took the main step!", "Creating every day": "🎉 You're a creator. It's already a habit." }
      }
    },

    // === SOLUTION 2: SOLO PATH ===
    {
      id: "creative_solo",
      title: "🪐 Solo Practice",
      description: "You are an explorer of your inner world. Creating for yourself is not selfish — it's necessary.",
      conditions: {
        creative_format: ["solo"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First creation for yourself",
      tags: ["solo", "practice", "start"],
      steps: [
        "Choose 1 form and 1 tool (pencil, guitar, notebook, IDE).",
        "Spend 15 minutes with no expectations. Not for Instagram.",
        "Do it at the same time — for example, 7:00 AM.",
        "Keep a journal: how you felt before, during, after."
      ],
      warnings: [
        "DON'T show anyone for the first 7 days — protect the fragility.",
        "DON'T criticize the result. Focus on the process, not the product."
      ],
      daily_action: "Today: 15 minutes of creative solitude. No phone.",
      resources: [
        { type: "book", label: "📖 The Artist's Way — Julia Cameron", url: "#" },
        { type: "technique", label: "🧘 Morning Pages", url: "#" }
      ],
      follow_up: {
        question: "You chose the solo path. How many days out of 7 did you practice?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You built a ritual. That's more than 90% of people." }
      }
    },

    // === SOLUTION 3: SOCIAL PATH ===
    {
      id: "creative_social",
      title: "👥 Creating Together",
      description: "You are a social creator. You need people to ignite. This is not weakness — it's your type of intelligence.",
      conditions: {
        creative_format: ["social"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Community of like-minded people",
      tags: ["social", "community", "start"],
      steps: [
        "Find 1 workshop or group in your city / online.",
        "Sign up. Yes, right now. Not 'I'll think about it'.",
        "Go to the first session with no expectations — just observe.",
        "Find 1 person you want to create with."
      ],
      warnings: [
        "DON'T expect everyone to like you — find your 1 person.",
        "DON'T compare yourself to others in the group — compare to yourself yesterday."
      ],
      daily_action: "Today: find and sign up for 1 workshop or creative meetup.",
      resources: [
        { type: "link", label: "🔗 Timepad / Eventbrite — find events", url: "#" },
        { type: "technique", label: "🧘 The 5-second rule (Mel Robbins)", url: "#" }
      ],
      follow_up: {
        question: "You were looking for community. Did you find it?",
        options: ["Not yet", "Found it, but don't go", "Go, but shy", "Found my people"],
        reward: { "Found my people": "🎉 You're not alone. That's everything." }
      }
    },

    // === SOLUTION 4: THROUGH LEARNING ===
    {
      id: "creative_course",
      title: "📚 Structured Start",
      description: "You are a student. You need a roadmap, not chaos. A good course is a mentor in your pocket.",
      conditions: {
        creative_format: ["course"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Basic skills + 1 completed project",
      tags: ["course", "learning", "structure"],
      steps: [
        "Choose 1 course (Coursera, Skillshare, Stepik, YouTube playlist).",
        "Rule: 1 course, not 10. Perfectionism in choosing is also procrastination.",
        "Do the homework. Don't just watch — practice.",
        "At the end, make 1 project that wasn't in the program."
      ],
      warnings: [
        "DON'T buy courses until you finish the previous one.",
        "DON'T wait for a certificate — wait for a skill."
      ],
      daily_action: "Today: choose 1 course and sign up. Not 'save to bookmarks'.",
      resources: [
        { type: "link", label: "🔗 Coursera — Creative Writing / Design", url: "#" },
        { type: "link", label: "🔗 Skillshare — 2 months free", url: "#" }
      ],
      follow_up: {
        question: "You started the course. What module are you on?",
        options: ["Haven't started yet", "Module 1–2", "Module 3–5", "Finished + project"],
        reward: { "Finished + project": "🎉 You didn't just watch — you created. That's rare." }
      }
    },

    // === SOLUTION 5: THROUGH PROJECT ===
    {
      id: "creative_project",
      title: "🎯 Project Approach",
      description: "You are a builder. You need a goal, not an abstraction. A project is a lighthouse that guides you.",
      conditions: {
        creative_format: ["project"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "1 completed mini-project",
      tags: ["project", "goal", "start"],
      steps: [
        "Define your project in 1 sentence: 'I will create ___ in 2 weeks'.",
        "Break it down into 10 tasks of 30 minutes each.",
        "Do task 1 today. Don't plan — do.",
        "Show the result on social media or to 1 person. Closing the loop is important."
      ],
      warnings: [
        "DON'T overcomplicate the project. An MVP for creativity is still an MVP.",
        "DON'T rewrite from scratch. Done is better than perfect."
      ],
      daily_action: "Today: write your project in 1 sentence and do the first 30-minute task.",
      resources: [
        { type: "technique", label: "🧘 S.M.A.R.T. for creative projects", url: "#" },
        { type: "link", label: "🔗 Trello / Notion — project tracker", url: "#" }
      ],
      follow_up: {
        question: "Your project '___'. What stage are you at?",
        options: ["Haven't started", "In progress", "Almost done", "Finished and showed"],
        reward: { "Finished and showed": "🎉 You closed the loop. That's the key skill of a creator." }
      }
    },

    // === SOLUTION 6: RETURN TO CHILDHOOD (NOT fallback!) ===
    {
      id: "childhood_channel",
      title: "🧸 Return to Childhood",
      description: "You are an explorer. Childhood passions are the key. Not because it's 'cute', but because that's where your spark is.",
      conditions: {
        childhood_create: ["draw", "build", "write", "sing", "cook"],
        creative_block: ["time", "skill", "idea"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 month",
      yield_estimate: "Inspiration and joy",
      tags: ["childhood", "inspiration", "joy"],
      steps: [
        "Remember what you loved as a child. Not 'what you could do' — 'what you loved'.",
        "Find 1 way to bring it back into your life (buy crayons, Lego, notebook).",
        "Do it 10 minutes a day with no goal. Not for results — for joy.",
        "Notice how it affects your mood. Write it down."
      ],
      warnings: [
        "DON'T try to monetize right away. First — joy.",
        "DON'T expect it to be exactly like childhood. You're different — and that's okay."
      ],
      daily_action: "Today: do something you loved as a child. 10 minutes. No goal.",
      resources: [
        { type: "book", label: "📖 Creativity — 100 Ways — Danny Gregory", url: "#" }
      ],
      follow_up: {
        question: "You returned to a childhood passion. How does it feel?",
        options: ["Didn't try", "Strange but interesting", "Joy came back", "Doing it every day"],
        reward: { "Joy came back": "🔥 You found a source. Nourish it.", "Doing it every day": "🎉 This is no longer a hobby. It's part of you." }
      }
    },

    // === SOLUTION 7: FALLBACK (general start) ===
    {
      id: "start_creating",
      title: "🚀 Start Now",
      description: "You are a creator. Not because you're talented. Because you create. Everything else is details.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First creation",
      tags: ["start", "create", "universal"],
      steps: [
        "Choose 1 form and 1 tool.",
        "Spend 15 minutes with no expectations.",
        "Don't show anyone if you're afraid.",
        "Repeat tomorrow — creativity becomes a habit."
      ],
      warnings: [
        "DON'T criticize your first attempts — they're fragile.",
        "DON'T compare with professionals — compare with yourself yesterday."
      ],
      daily_action: "Today: spend 15 minutes on creativity without judgment.",
      resources: [
        { type: "book", label: "📖 The Creative Act — Rick Rubin", url: "#" },
        { type: "book", label: "📖 The Artist's Way — Julia Cameron", url: "#" }
      ],
      follow_up: {
        question: "A week ago you started. What happened?",
        options: ["Nothing", "Tried", "Created something", "Doing it every day"],
        reward: { "Created something": "🔥 You moved from words to action.", "Doing it every day": "🎉 You're a creator. It's no longer a question." }
      }
    }
  ]
});

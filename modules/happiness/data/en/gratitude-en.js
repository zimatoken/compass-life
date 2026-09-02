// modules/happiness/data/en/gratitude-en.js
// ============================================================
// GRATITUDE JOURNAL — MINDFUL GRATITUDE PRACTICE v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "happiness",
    category: "gratitude",
    version: "3.0.0",
    lang: "en",
    title: "📓 Gratitude Journal",
    description: "Gratitude is not just words. It's a lens that changes your perception. Start seeing the good.",
    icon: "📓",
    color: "#f59e0b",
    identity_anchor: "You are a grateful observer"
  },

  questions: [
    {
      id: "gratitude_feeling",
      type: "single",
      text: "How do you feel about the practice of gratitude?",
      required: true,
      options: [
        { id: "believe",   label: "🙏 I believe it changes life", tags: ["believe"] },
        { id: "curious",   label: "🤔 Curious but haven't tried", tags: ["curious"] },
        { id: "skeptical", label: "🧐 Skeptical — seems naive", tags: ["skeptical"] },
        { id: "already",   label: "✅ I already practice occasionally", tags: ["already"] }
      ]
    },
    {
      id: "gratitude_block",
      type: "single",
      text: "What prevents you from practicing gratitude regularly?",
      required: true,
      conditions: { gratitude_feeling: ["believe", "curious", "skeptical", "already"] },
      options: [
        { id: "forget",    label: "⏰ I forget, no habit", tags: ["forget"] },
        { id: "no_mood",   label: "🌧️ Often not in the mood", tags: ["no_mood"] },
        { id: "no_reason", label: "🌫️ Don't see what to be grateful for", tags: ["no_reason"] },
        { id: "already_do",label: "✅ I'm fine, I'm already grateful", tags: ["already_do"] }
      ]
    },
    {
      id: "gratitude_format",
      type: "single",
      text: "Which format of practice suits you best?",
      required: true,
      options: [
        { id: "write",  label: "✍️ Written journal (3 items daily)", tags: ["write"] },
        { id: "speak",  label: "🗣️ Speaking aloud (morning or evening)", tags: ["speak"] },
        { id: "mental", label: "🧠 Mental listing in mind", tags: ["mental"] },
        { id: "share",  label: "👥 Sharing with loved ones / social media", tags: ["share"] }
      ]
    },
    {
      id: "deep_gratitude_sacrifice",
      type: "single",
      text: "Are you willing to spend 2 minutes daily on gratitude, even when everything is bad?",
      required: true,
      conditions: { gratitude_format: ["write", "speak", "mental", "share"] },
      options: [
        { id: "yes_commit", label: "✅ Yes, I'll make it a habit", tags: ["committed"] },
        { id: "yes_try",    label: "🤔 I'll try but not promise", tags: ["uncertain"] },
        { id: "no",         label: "❌ No, it's too hard now", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_gratitude",
      type: "single",
      text: "In a week I'll ask how many days you practiced gratitude. What will you answer?",
      required: true,
      conditions: { deep_gratitude_sacrifice: ["yes_commit", "yes_try", "no"] },
      options: [
        { id: "ready",      label: "🚀 Ready to start today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't manage", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "gratitude_write",
      title: "✍️ Three Things Journal",
      description: "You are the writer of your life. By writing gratitude, you create a new reality.",
      conditions: {
        gratitude_format: ["write"],
        gratitude_block: ["forget", "no_mood"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "7 entries, shifted focus",
      tags: ["write", "habit", "focus"],
      steps: [
        "Every evening before sleep, write 3 things you're grateful for today.",
        "Don't repeat the same — find something new daily.",
        "If it's hard, start with small things (sun, food, a smile).",
        "After 7 days, read your entries — see how your mood changed."
      ],
      warnings: [
        "Don't wait for perfect wording — just write.",
        "Don't skip days — consistency is key."
      ],
      daily_action: "Today: write 3 items of gratitude for today.",
      resources: [
        { type: "book", label: "📖 Brené Brown — The Power of Vulnerability", url: "#" },
        { type: "technique", label: "🧘 Morning intention practice", url: "#" }
      ],
      follow_up: {
        question: "You kept a journal. How many days out of 7 did you write?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You built a new habit. It rewires the brain." }
      }
    },
    {
      id: "gratitude_speak",
      title: "🗣️ Voice of Gratitude",
      description: "You are the one who voices the light. Spoken words have power.",
      conditions: {
        gratitude_format: ["speak"],
        gratitude_block: ["forget", "no_mood"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Morning ritual that lifts mood",
      tags: ["speak", "ritual", "mood"],
      steps: [
        "In the morning, standing in front of the mirror, say 3 things you're grateful for.",
        "Speak sincerely, feel each word.",
        "If sad, even say 'I am grateful I breathe'.",
        "Continue for 7 days — mornings will feel lighter."
      ],
      warnings: [
        "Don't do it mechanically — put feeling into it.",
        "Don't be shy — you're alone or with loved ones."
      ],
      daily_action: "Today: say 3 gratitudes aloud, looking into your own eyes in the mirror.",
      resources: [
        { type: "book", label: "📖 Tony Robbins — Awaken the Giant Within", url: "#" },
        { type: "technique", label: "🧘 Morning intention practice", url: "#" }
      ],
      follow_up: {
        question: "You spoke gratitude. How many days did you practice?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You gave voice to your soul. Keep going!" }
      }
    },
    {
      id: "gratitude_mental",
      title: "🧠 Inner List",
      description: "You are a master of inner dialogue. Mental gratitude is available anytime, anywhere.",
      conditions: {
        gratitude_format: ["mental"],
        gratitude_block: ["forget", "no_mood"]
      },
      scoring: { priority: "fast", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Immediate focus shift to positive",
      tags: ["mental", "focus", "mindset"],
      steps: [
        "Whenever you feel irritation or sadness, stop.",
        "Mentally list 3 things you're grateful for right now.",
        "Don't analyze — just list.",
        "In a week, this becomes an automatic reflex."
      ],
      warnings: [
        "Don't wait for a special moment — practice in line, traffic, before sleep.",
        "Don't judge yourself if you forget — just remember."
      ],
      daily_action: "Today: 3 times a day, stop and mentally thank.",
      resources: [
        { type: "book", label: "📖 Eckhart Tolle — The Power of Now", url: "#" },
        { type: "technique", label: "🧘 Gratitude scanning meditation", url: "#" }
      ],
      follow_up: {
        question: "You practiced mental gratitude. How many times a day did you remember?",
        options: ["0", "1", "2–3", "4+"],
        reward: { "4+": "🔥 You're rewiring your brain to positive." }
      }
    },
    {
      id: "gratitude_share",
      title: "👥 Shared Gratitude",
      description: "You are a connector. When you share gratitude, it multiplies and returns to you.",
      conditions: {
        gratitude_format: ["share"],
        gratitude_block: ["forget", "no_mood"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "1 week",
      yield_estimate: "Warmth in relationships and support from others",
      tags: ["share", "community", "connection"],
      steps: [
        "Each day write to one person a thank-you message (for something specific).",
        "You can post on social media with hashtag #gratitude.",
        "Respond to others' gratitudes — support them.",
        "After a week, you'll see how the atmosphere around you has changed."
      ],
      warnings: [
        "Don't do it formally — look for genuine reasons.",
        "Don't expect a reply — do it for the act itself."
      ],
      daily_action: "Today: say 'thank you' to 1 person — write a message or call.",
      resources: [
        { type: "book", label: "📖 Marshall Rosenberg — Nonviolent Communication", url: "#" },
        { type: "technique", label: "🧘 Family gratitude circle", url: "#" }
      ],
      follow_up: {
        question: "You shared gratitude. How many times in a week?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You created a field of goodness around you." }
      }
    },
    {
      id: "gratitude_reframe",
      title: "🔍 Gratitude Explorer",
      description: "You are a skeptic, but that's not bad. Approach this practice as an experiment.",
      conditions: {
        gratitude_feeling: ["skeptical"],
        gratitude_block: ["no_reason"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Personal discovery of gratitude's power",
      tags: ["skeptic", "experiment", "discovery"],
      steps: [
        "Run an experiment: for 7 days, write 1 gratitude item daily.",
        "At the end of each day, ask: 'Did I feel any lighter?'",
        "Compare your state before and after.",
        "Record the result — and decide whether to continue."
      ],
      warnings: [
        "Don't expect miracles — just observe.",
        "Don't fool yourself — if it doesn't work, try a different format."
      ],
      daily_action: "Today: write 1 thing you're grateful for and observe the feeling.",
      resources: [
        { type: "book", label: "📖 Steven Pinker — The Better Angels of Our Nature", url: "#" },
        { type: "link", label: "🔗 Scientific research on gratitude", url: "#" }
      ],
      follow_up: {
        question: "You ran the experiment. What did you notice?",
        options: ["Nothing changed", "Felt a bit lighter", "Mood improved", "Want to continue"],
        reward: { "Want to continue": "🔥 You discovered a new tool." }
      }
    },
    {
      id: "gratitude_start",
      title: "🌱 Start Small",
      description: "You are at the start. Every practice begins with a first step.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First gratitude entry",
      tags: ["start", "practice", "beginner"],
      steps: [
        "Take a notebook or open notes on your phone.",
        "Write one thing you're grateful for today.",
        "Read it aloud or silently.",
        "Do the same tomorrow — see how simple it is."
      ],
      warnings: [
        "Don't worry if it feels trivial — it's your life.",
        "Don't compare with others — your gratitude is unique."
      ],
      daily_action: "Today: write 1 thing you're grateful for.",
      resources: [
        { type: "book", label: "📖 Robert Emmons — Gratitude", url: "#" },
        { type: "technique", label: "🧘 'One thing' practice", url: "#" }
      ],
      follow_up: {
        question: "You started practicing. How many days out of 7 did you write?",
        options: ["0", "1–2", "3–5", "6–7"],
        reward: { "6–7": "🔥 You took the first step. Keep going!" }
      }
    }
  ]
});

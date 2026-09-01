// modules/purpose/data/en/passion-en.js
// ============================================================
// ARCHAEOLOGY OF CALLING — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "passion",
    version: "3.0.0",
    lang: "en",
    title: "🎯 Archaeology of Calling",
    description: "You are a creator, not an observer. Time to find what you fall into.",
    icon: "🎯",
    color: "#f43f5e",
    identity_anchor: "You are an archaeologist of your calling"
  },

  questions: [
    // === QUESTION 1: Flow state (no conditions) ===
    {
      id: "flow_state",
      type: "single",
      text: "Remember a moment when you were doing something and lost track of time. What was it?",
      required: true,
      options: [
        { id: "creating", label: "🎨 Creating something — drawing, writing, building", tags: ["maker"] },
        { id: "analyzing", label: "📊 Analyzing — data, schemes, strategies", tags: ["analyst"] },
        { id: "helping", label: "🤝 Helping people — mentoring, healing, teaching", tags: ["helper"] },
        { id: "building", label: "🔨 Building/assembling — with hands or mind", tags: ["builder"] },
        { id: "exploring", label: "🗺️ Exploring new things — learning, discovering, traveling", tags: ["explorer"] }
      ]
    },

    // === QUESTION 2: Sacrifice test ===
    {
      id: "sacrifice_test",
      type: "single",
      text: "Are you willing to do this for free for 2 hours a day for a year?",
      required: true,
      options: [
        { id: "yes_daily", label: "✅ Yes, every day", tags: ["committed"] },
        { id: "yes_weekly", label: "📅 Yes, but not every day", tags: ["interested"] },
        { id: "no", label: "❌ No, it's a hobby", tags: ["hobby"] }
      ]
    },

    // === QUESTION 3: Market bridge ===
    {
      id: "market_bridge",
      type: "single",
      text: "Are there people willing to pay for the result?",
      required: true,
      conditions: { sacrifice_test: ["yes_daily", "yes_weekly"] },
      options: [
        { id: "paying_now", label: "💰 They already pay", tags: ["monetized"] },
        { id: "paying_friends", label: "🎁 I do it for free, but people ask", tags: ["demand"] },
        { id: "no_one", label: "🤷 No one has asked — I do it for myself", tags: ["hobby"] }
      ]
    },

    // === QUESTION 4: Ikigai overlap ===
    {
      id: "ikigai_overlap",
      type: "single",
      text: "Which overlap exists: you love it, you're good at it, the world needs it, and people pay for it?",
      required: true,
      options: [
        { id: "love_skill", label: "❤️+🛠️ Love and skill", tags: ["passion"] },
        { id: "skill_money", label: "🛠️+💰 Skill and money", tags: ["profession"] },
        { id: "love_world", label: "❤️+🌍 Love and world needs", tags: ["mission"] },
        { id: "world_money", label: "🌍+💰 World needs and money", tags: ["vocation"] }
      ]
    },

    // === QUESTION 5: Childhood calling ===
    {
      id: "childhood_passion",
      type: "single",
      text: "What did you love doing as a child, forgetting everything else?",
      required: true,
      options: [
        { id: "child_build", label: "🔨 Building with blocks", tags: ["builder"] },
        { id: "child_draw", label: "🎨 Drawing or sculpting", tags: ["creator"] },
        { id: "child_read", label: "📚 Reading books", tags: ["explorer"] },
        { id: "child_help", label: "🤝 Taking care of others", tags: ["helper"] },
        { id: "child_explore", label: "🗺️ Exploring the world", tags: ["explorer"] },
        { id: "child_forgot", label: "🌫️ I don't remember / didn't have it", tags: ["none"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of life without calling ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you never find your calling and live life 'like everyone else'?",
      required: true,
      conditions: { sacrifice_test: ["yes_daily", "yes_weekly", "no"] },
      options: [
        { id: "emptiness", label: "🌫️ Emptiness inside", tags: ["emptiness"] },
        { id: "regret", label: "😔 Regret in old age", tags: ["regret"] },
        { id: "unlived_potential", label: "💔 Unrealized potential", tags: ["potential"] },
        { id: "life_others", label: "🔄 Living someone else's script", tags: ["others"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what step toward your calling did you take? What answer do you want to give?",
      required: true,
      conditions: { flow_state: ["creating", "analyzing", "helping", "building", "exploring"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: CAREER PIVOT ===
    {
      id: "career_pivot",
      title: "🚀 Trajectory: Career Pivot",
      description: "You are a creator. Creators build, they don't wait. You have a paying market and commitment. Time to act.",
      conditions: {
        sacrifice_test: ["yes_daily"],
        market_bridge: ["paying_now"],
        ikigai_overlap: ["love_skill", "skill_money", "love_world", "world_money"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3–6 months",
      yield_estimate: "First paying client and professional fulfillment",
      tags: ["career", "pivot", "money"],
      steps: [
        "Document 3 cases you've already done — your portfolio.",
        "Create a commercial offer — simple and clear.",
        "Find 10 potential clients — personally or through contacts.",
        "Get your first paying order — start small."
      ],
      warnings: [
        "DON'T quit until income is stable — at least 3 months.",
        "DON'T spend more than 20% of budget on learning."
      ],
      daily_action: "Write down 3 cases you've already done in this field.",
      resources: [
        { type: "book", label: "📖 Ikigai — Héctor García", url: "#" },
        { type: "book", label: "📖 Do What You Love — Sir Ken Robinson", url: "#" }
      ],
      follow_up: {
        question: "You started a career pivot. What changed in a week?",
        options: ["Nothing", "Wrote down cases", "Found first clients", "Got an order"],
        reward: { "Got an order": "🔥 You moved from dream to money. That's pro level.", "Found first clients": "🎉 The market confirmed your value." }
      }
    },

    // === SOLUTION 2: SIDE HUSTLE ===
    {
      id: "side_hustle",
      title: "🌙 Parallel Project",
      description: "You are a researcher. There's interest, but the market isn't clear. Time to test hypotheses without risking your main income.",
      conditions: {
        sacrifice_test: ["yes_weekly"],
        market_bridge: ["paying_friends", "no_one"],
        ikigai_overlap: ["love_skill", "love_world"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "6–12 months",
      yield_estimate: "Market understanding and first income",
      tags: ["side", "test", "learn"],
      steps: [
        "Choose 1 hypothesis to test — the simplest one.",
        "Build an MVP in 2 weeks — minimal viable product.",
        "Show it to 5 people and gather feedback.",
        "Decide: develop or close the project."
      ],
      warnings: [
        "DON'T quit your main job — this is still an experiment.",
        "DON'T invest more than 10 hours per week."
      ],
      daily_action: "Describe your idea in 3 sentences. Show it to 1 person.",
      resources: [
        { type: "book", label: "📖 The $100 Startup — Chris Guillebeau", url: "#" },
        { type: "book", label: "📖 The Lean Startup — Eric Ries", url: "#" }
      ],
      follow_up: {
        question: "You started a side hustle. What changed in a week?",
        options: ["Nothing", "Described the idea", "Got feedback", "Know if it's worth developing"],
        reward: { "Know if it's worth developing": "🔥 You tested the idea and know the direction. That's valuable.", "Got feedback": "🎉 The market answered your question." }
      }
    },

    // === SOLUTION 3: DEEP HOBBY ===
    {
      id: "deep_hobby",
      title: "🎨 Deep Hobby",
      description: "You are a hobbyist. It brings joy but isn't a business yet. Develop it as a skill and enjoy the process.",
      conditions: {
        sacrifice_test: ["no"],
        ikigai_overlap: ["love_skill", "love_world"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "Ongoing",
      yield_estimate: "Inner satisfaction and joy",
      tags: ["hobby", "joy", "skill"],
      steps: [
        "Set aside 30 minutes a day — make it a priority.",
        "Find a community of like-minded people — it's more fun together.",
        "Share results publicly — it motivates you.",
        "Re-evaluate in 6 months — you might level up."
      ],
      warnings: [
        "DON'T turn your hobby into an obligation — keep the joy.",
        "DON'T compare yourself to professionals — they have a different path."
      ],
      daily_action: "Spend 30 minutes on your favorite activity without judging.",
      resources: [
        { type: "book", label: "📖 The Power of Habit — Charles Duhigg", url: "#" },
        { type: "book", label: "📖 Creativity — 100 Ways — Danny Gregory", url: "#" }
      ],
      follow_up: {
        question: "You started deepening your hobby. What changed in a week?",
        options: ["Nothing", "Found time 3 days", "Found time every day", "Feel joy"],
        reward: { "Feel joy": "🔥 You found a source of energy. That's worth more than money.", "Found time every day": "🎉 Your hobby is becoming part of your life." }
      }
    },

    // === SOLUTION 4: RETURN TO CHILDHOOD CALLING ===
    {
      id: "childhood_return",
      title: "🧸 Return to Childhood Calling",
      description: "You are a discoverer. Childhood passions often hold the key to your calling. Return to the source.",
      conditions: {
        childhood_passion: ["child_build", "child_draw", "child_read", "child_help", "child_explore"],
        flow_state: ["creating", "analyzing", "helping", "building", "exploring"],
        sacrifice_test: ["yes_weekly", "no"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "2 weeks",
      yield_estimate: "Understanding your roots and source of joy",
      tags: ["childhood", "roots", "discovery"],
      steps: [
        "Remember what you loved doing as a child — just remember.",
        "Find 1 way to bring it back into your life — buy materials, join a course.",
        "Do it for 15 minutes with no goal — just for joy.",
        "Notice what emotions arise — write them down."
      ],
      warnings: [
        "DON'T think about money — first just remember the joy.",
        "DON'T compare to what you can do now — it's about something else."
      ],
      daily_action: "Do what you loved as a child today. 15 minutes.",
      resources: [
        { type: "book", label: "📖 The Artist's Way — Julia Cameron", url: "#" },
        { type: "technique", label: "🧸 Remember: what made you lose track of time?", url: "#" }
      ],
      follow_up: {
        question: "You returned to your childhood calling. What changed in a week?",
        options: ["Nothing", "Tried it", "Joy came back", "I know this is mine"],
        reward: { "I know this is mine": "🔥 You found your source. The rest is a matter of time.", "Joy came back": "🎉 This is what makes you, you." }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_passion",
      title: "🚀 Start with 1 Step Toward Your Calling",
      description: "You are an archaeologist of your calling. You don't need to find everything at once. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First action toward your calling",
      tags: ["start", "passion"],
      steps: [
        "Choose 1 action that brings you closer to your calling.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to find your calling in one day.",
        "DON'T expect the answer to come by itself — move."
      ],
      daily_action: "Take 1 small step toward your calling today.",
      resources: [
        { type: "book", label: "📖 Ikigai — Héctor García", url: "#" },
        { type: "book", label: "📖 The Artist's Way — Julia Cameron", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 step toward your calling. What changed in a week?",
        options: ["Nothing", "Took 1 step", "Took several steps", "I feel direction"],
        reward: { "I feel direction": "🎉 You found your vector. Now keep moving.", "Took several steps": "🔥 Calling is a path, not a destination." }
      }
    }
  ]
});

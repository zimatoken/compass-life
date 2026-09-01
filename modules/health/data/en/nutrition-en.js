// modules/health/data/en/nutrition-en.js
// ============================================================
// NUTRITION — ENGLISH VERSION v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "nutrition",
    version: "3.0.0",
    lang: "en",
    title: "🥗 Nutrition",
    description: "You are what you eat. Your energy starts with your plate. Feed your body so it serves you.",
    icon: "🥗",
    color: "#ec4899",
    identity_anchor: "You are the chef of your life"
  },

  questions: [
    // === QUESTION 1: Energy after food (no conditions) ===
    {
      id: "energy_after_food",
      type: "single",
      text: "How do you usually feel after eating?",
      required: true,
      options: [
        { id: "sleepy", label: "😴 Sleepy — I want to lie down", tags: ["crash"] },
        { id: "heavy", label: "🪨 Heavy — food sits like a stone", tags: ["heavy"] },
        { id: "normal", label: "😐 Normal — just fullness", tags: ["ok"] },
        { id: "energized", label: "⚡ Energized — ready to act", tags: ["good"] }
      ]
    },

    // === QUESTION 2: Meal pattern ===
    {
      id: "meal_pattern",
      type: "single",
      text: "How often do you eat during the day?",
      required: true,
      options: [
        { id: "skip", label: "🚫 I skip meals — eat rarely and a lot", tags: ["irregular"] },
        { id: "2meals", label: "🍽️ 2 times — breakfast and dinner", tags: ["low"] },
        { id: "3meals", label: "🍽️🍽️🍽️ 3 times — breakfast, lunch, dinner", tags: ["normal"] },
        { id: "snack", label: "🍿 I snack constantly — eat non-stop", tags: ["grazing"] }
      ]
    },

    // === QUESTION 3: Food under stress ===
    {
      id: "stress_food",
      type: "single",
      text: "What do you eat when you're tired or anxious?",
      required: true,
      options: [
        { id: "sugar", label: "🍰 Sweets — I want to comfort myself", tags: ["sugar"] },
        { id: "fastfood", label: "🍔 Fast food — quick and effortless", tags: ["junk"] },
        { id: "healthy", label: "🥗 Something healthy — I care for myself", tags: ["good"] },
        { id: "nothing", label: "🚫 Nothing — I lose my appetite", tags: ["skip"] }
      ]
    },

    // === QUESTION 4: Water ===
    {
      id: "water_intake",
      type: "single",
      text: "How much water do you drink per day?",
      required: true,
      options: [
        { id: "low_water", label: "💧 Less than 1 liter — I hardly drink", tags: ["low"] },
        { id: "mid_water", label: "💧💧 1–2 liters — normal", tags: ["mid"] },
        { id: "high_water", label: "💧💧💧 More than 2 liters — excellent", tags: ["high"] }
      ]
    },

    // === QUESTION 5: Food quality ===
    {
      id: "food_quality",
      type: "single",
      text: "How consciously do you choose your food?",
      required: true,
      options: [
        { id: "processed", label: "📦 Mostly ready meals / processed foods", tags: ["processed"] },
        { id: "mixed", label: "🔄 Sometimes I cook, sometimes I buy ready-made", tags: ["mixed"] },
        { id: "whole", label: "🌿 I prefer whole foods — I cook myself", tags: ["whole"] }
      ]
    },

    // === QUESTION 6: DEEP LAYER 2 — Cost of ignoring ===
    {
      id: "deep_cost",
      type: "single",
      text: "What will happen if you continue eating this way for another year?",
      required: true,
      conditions: { energy_after_food: ["sleepy", "heavy"] },
      options: [
        { id: "chronic_fatigue", label: "😩 Chronic fatigue", tags: ["fatigue"] },
        { id: "weight_gain", label: "⚖️ Weight gain", tags: ["weight"] },
        { id: "health_issues", label: "🫀 Health problems", tags: ["health"] },
        { id: "low_energy", label: "🔋 Constant energy decline", tags: ["energy"] }
      ]
    },

    // === QUESTION 7: FOLLOW-UP READINESS ===
    {
      id: "follow_up_ready",
      type: "single",
      text: "In a week, I'll ask you: what did you change in your nutrition? What answer do you want to give?",
      required: true,
      conditions: { energy_after_food: ["sleepy", "heavy", "normal", "energized"] },
      options: [
        { id: "ready", label: "🚀 I'll start today", tags: ["ready"] },
        { id: "thinking", label: "🤔 I'll think about it, no promises", tags: ["thinking"] },
        { id: "not_ready", label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    // === SOLUTION 1: ENERGY DIET ===
    {
      id: "energy_diet",
      title: "🔋 Energy Diet",
      description: "You are an energy strategist. Nutrition should give energy, not take it away. Every meal is fuel for your day.",
      conditions: {
        energy_after_food: ["sleepy", "heavy"],
        meal_pattern: ["skip", "2meals", "snack"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 weeks",
      yield_estimate: "Stable energy without crashes",
      tags: ["nutrition", "energy"],
      steps: [
        "Add protein to every meal — eggs, fish, cottage cheese, chicken.",
        "Remove sugar from breakfast — start the day with protein and fats.",
        "Drink water 30 minutes before meals — don't dilute stomach acid.",
        "Eat slowly, chewing 20 times — give your brain the fullness signal."
      ],
      warnings: [
        "DON'T go on strict diets — they lead to binges.",
        "DON'T fast for more than 4 hours — it triggers overeating."
      ],
      daily_action: "Add 1 source of protein to your diet today.",
      resources: [
        { type: "book", label: "📖 Grain Brain — David Perlmutter", url: "#" },
        { type: "technique", label: "🍽️ Plate rule: ½ vegetables, ¼ protein, ¼ carbs", url: "#" }
      ],
      follow_up: {
        question: "You started the energy diet. What changed in a week?",
        options: ["Nothing", "Started eating protein", "I feel more energy", "Crashes are gone"],
        reward: { "I feel more energy": "🔥 You're fueling your body right. Keep going!", "Crashes are gone": "🎉 You've reached a new energy level." }
      }
    },

    // === SOLUTION 2: HYDRATION ===
    {
      id: "hydration",
      title: "💧 Hydration",
      description: "You are a hydro-strategist. Even mild dehydration reduces productivity by 15%. Water is the foundation of everything.",
      conditions: {
        water_intake: ["low_water"],
        energy_after_food: ["sleepy", "heavy", "normal", "ok"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 week",
      yield_estimate: "Improved concentration and energy",
      tags: ["water", "habit"],
      steps: [
        "Place a water bottle on your desk.",
        "Drink 1 glass of water every hour.",
        "Add lemon or mint for flavor.",
        "Track your intake — goal: 2+ liters per day."
      ],
      warnings: [
        "DON'T drink too much water at once — it strains the kidneys.",
        "DON'T replace water with sugary drinks."
      ],
      daily_action: "Drink a glass of water right now and set an hourly reminder.",
      resources: [
        { type: "technique", label: "💧 The 8 glasses rule", url: "#" }
      ],
      follow_up: {
        question: "You started drinking more water. What changed in a week?",
        options: ["Nothing", "Less craving for sweets", "More energy", "Skin looks better"],
        reward: { "More energy": "🔥 Water is life. You can feel the difference.", "Skin looks better": "🎉 You're changing both inside and out." }
      }
    },

    // === SOLUTION 3: MINDFUL EATING ===
    {
      id: "mindful_eating",
      title: "🧘 Mindful Eating",
      description: "You are an observer. Food is not a comfort or a reward. Learn to notice your triggers and choose consciously.",
      conditions: {
        stress_food: ["sugar", "fastfood"],
        meal_pattern: ["snack", "skip", "2meals"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Conscious choices without guilt",
      tags: ["mindful", "eating"],
      steps: [
        "Keep a food diary — write down everything you eat.",
        "Find your triggers — stress, boredom, fatigue.",
        "Replace a snack with a walk or a glass of water.",
        "Eat without screens — focus only on food and your feelings."
      ],
      warnings: [
        "DON'T blame yourself for slip-ups — they're part of the journey.",
        "DON'T strive for perfect eating from day one."
      ],
      daily_action: "Eat one meal without a phone or screens.",
      resources: [
        { type: "book", label: "📖 Intuitive Eating — Evelyn Tribole", url: "#" },
        { type: "technique", label: "🧘 Breathing before eating: 3 breaths in and out", url: "#" }
      ],
      follow_up: {
        question: "You started mindful eating. What changed in a week?",
        options: ["Nothing", "Noticed triggers", "Started eating slower", "Feel in control"],
        reward: { "Noticed triggers": "🔥 Awareness is 50% of success.", "Feel in control": "🎉 You're no longer a slave to food. You are the chef." }
      }
    },

    // === SOLUTION 4: WHOLE FOODS ===
    {
      id: "whole_foods",
      title: "🌿 Whole Foods",
      description: "You are the builder of your body. Food quality determines the quality of your life. Start simple: choose whole.",
      conditions: {
        food_quality: ["processed", "mixed"],
        energy_after_food: ["sleepy", "heavy", "normal"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "More energy and less craving for junk",
      tags: ["quality", "whole_foods"],
      steps: [
        "Start with 1 swap: instead of ready-made — cook yourself.",
        "Buy foods without labels (vegetables, grains, meat, fish).",
        "Plan your weekly menu — it reduces the risk of slipping.",
        "Notice: how your well-being changes after whole foods."
      ],
      warnings: [
        "DON'T try to replace everything at once — start with 1 meal a day.",
        "DON'T worry if not everything works out — each time it gets better."
      ],
      daily_action: "Replace 1 processed product with a whole food today.",
      resources: [
        { type: "book", label: "📖 Food as Medicine — William Li", url: "#" },
        { type: "technique", label: "🛒 Rule: unpackaged foods are the best", url: "#" }
      ],
      follow_up: {
        question: "You started choosing whole foods. What changed?",
        options: ["Nothing", "Cooking got easier", "I feel better", "Less craving for junk"],
        reward: { "I feel better": "🔥 You're feeding your body what it really needs.", "Less craving for junk": "🎉 You've rewired your taste habits!" }
      }
    },

    // === SOLUTION 5: FALLBACK (general start) ===
    {
      id: "start_nutrition",
      title: "🚀 Start with 1 Change",
      description: "You are the chef of your life. You don't need to change everything at once. Start with one small step today.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First change in nutrition",
      tags: ["start", "nutrition"],
      steps: [
        "Choose 1 change in nutrition you can make today.",
        "Write it down. Make it visible.",
        "Do it today. Don't postpone.",
        "Tomorrow, add another or reinforce the first."
      ],
      warnings: [
        "DON'T try to change everything at once.",
        "DON'T expect instant results — the body adapts gradually."
      ],
      daily_action: "Make 1 small change in your nutrition today.",
      resources: [
        { type: "book", label: "📖 Grain Brain — David Perlmutter", url: "#" },
        { type: "technique", label: "🧘 Breathing before eating", url: "#" }
      ],
      follow_up: {
        question: "You started with 1 change. What changed in a week?",
        options: ["Nothing", "Made 1 change", "Made several", "Feel the difference"],
        reward: { "Feel the difference": "🎉 You've proven to yourself: small steps work." }
      }
    }
  ]
});

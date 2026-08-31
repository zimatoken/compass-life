// modules/health/data/nutrition.js
// ============================================================
// ПИТАНИЕ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "health",
    category: "nutrition",
    version: "2.1.1",
    lang: "ru",
    title: "🥗 Питание",
    description: "Ты — то, что ты ешь. Твоя энергия начинается с тарелки. Корми тело так, чтобы оно служило тебе.",
    icon: "🥗",
    color: "#ec4899"
  },

  questions: [
    // === ВОПРОС 1: Энергия после еды (без условий) ===
    {
      id: "energy_after_food",
      type: "single",
      text: "Как ты обычно чувствуешь себя после еды?",
      required: true,
      options: [
        { id: "sleepy", label: "😴 Сонливость — хочется прилечь", tags: ["crash"] },
        { id: "heavy", label: "🪨 Тяжесть — еда камнем лежит", tags: ["heavy"] },
        { id: "normal", label: "😐 Нормально — просто сытость", tags: ["ok"] },
        { id: "energized", label: "⚡ Прилив сил — готов действовать", tags: ["good"] }
      ]
    },

    // === ВОПРОС 2: Режим питания (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "meal_pattern",
      type: "single",
      text: "Как часто ты ешь в течение дня?",
      required: true,
      options: [
        { id: "skip", label: "🚫 Пропускаю приёмы — ем редко и много", tags: ["irregular"] },
        { id: "2meals", label: "🍽️ 2 раза — завтрак и ужин", tags: ["low"] },
        { id: "3meals", label: "🍽️🍽️🍽️ 3 раза — завтрак, обед, ужин", tags: ["normal"] },
        { id: "snack", label: "🍿 Постоянно перекусываю — ем без остановки", tags: ["grazing"] }
      ]
    },

    // === ВОПРОС 3: Еда в стрессе ===
    {
      id: "stress_food",
      type: "single",
      text: "Что ты ешь, когда устал или тревожишься?",
      required: true,
      options: [
        { id: "sugar", label: "🍰 Сладкое — хочется утешить себя", tags: ["sugar"] },
        { id: "fastfood", label: "🍔 Фастфуд — быстро и без усилий", tags: ["junk"] },
        { id: "healthy", label: "🥗 Что-то полезное — я забочусь о себе", tags: ["good"] },
        { id: "nothing", label: "🚫 Ничего — я теряю аппетит", tags: ["skip"] }
      ]
    },

    // === ВОПРОС 4: Вода ===
    {
      id: "water_intake",
      type: "single",
      text: "Сколько воды ты пьёшь в день?",
      required: true,
      options: [
        { id: "low_water", label: "💧 Меньше 1 литра — почти не пью", tags: ["low"] },
        { id: "mid_water", label: "💧💧 1–2 литра — нормально", tags: ["mid"] },
        { id: "high_water", label: "💧💧💧 Больше 2 литров — отлично", tags: ["high"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Диета энергии ===
    {
      id: "energy_diet",
      title: "🔋 Диета энергии",
      description: "Ты — энергетический стратег. Питание должно давать энергию, а не забирать.",
      conditions: {
        energy_after_food: ["sleepy", "heavy"],
        meal_pattern: ["skip", "snack", "2meals"],
        stress_food: ["sugar", "fastfood", "nothing"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 недели",
      yield_estimate: "Стабильная энергия без спадов",
      tags: ["nutrition", "energy"],
      steps: [
        "Шаг 1: Добавь белок на каждый приём — яйца, рыба, творог, курица.",
        "Шаг 2: Убери сахар из завтрака — начни день с белка и жиров.",
        "Шаг 3: Пей воду за 30 минут до еды — не разбавляй желудочный сок.",
        "Шаг 4: Ешь медленно, жуя 20 раз — дай мозгу сигнал о сытости."
      ],
      warnings: [
        "НЕ садись на жёсткие диеты — они срываются.",
        "НЕ голодай больше 4 часов — это провоцирует переедание."
      ],
      daily_action: "Сегодня: добавь 1 источник белка в свой рацион.",
      resources: [
        { type: "book", label: "📖 Еда и мозг — Дэвид Перлмуттер", url: "#" },
        { type: "technique", label: "🍽️ Правило тарелки: ½ овощи, ¼ белок, ¼ углеводы", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Гидратация ===
    {
      id: "hydration",
      title: "💧 Гидратация",
      description: "Ты — гидро-стратег. Даже лёгкое обезвоживание снижает продуктивность на 15%.",
      conditions: {
        water_intake: ["low_water"],
        energy_after_food: ["sleepy", "heavy", "normal"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 неделя",
      yield_estimate: "Улучшение концентрации и энергии",
      tags: ["water", "habit"],
      steps: [
        "Шаг 1: Поставь бутылку воды на рабочий стол.",
        "Шаг 2: Пей 1 стакан воды каждый час.",
        "Шаг 3: Добавь лимон или мяту для вкуса.",
        "Шаг 4: Отслеживай объём — цель: 2+ литра в день."
      ],
      warnings: [
        "НЕ пей много воды за раз.",
        "НЕ заменяй воду сладкими напитками."
      ],
      daily_action: "Сегодня: выпей стакан воды прямо сейчас.",
      resources: [
        { type: "technique", label: "💧 Правило 8 стаканов", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Осознанное питание ===
    {
      id: "mindful_eating",
      title: "🧘 Осознанное питание",
      description: "Ты — наблюдатель. Еда — это не утешение и не награда. Научись замечать свои триггеры.",
      conditions: {
        stress_food: ["sugar", "fastfood"],
        meal_pattern: ["snack", "irregular"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 месяц",
      yield_estimate: "Осознанные выборы без чувства вины",
      tags: ["mindful", "eating"],
      steps: [
        "Шаг 1: Веди дневник питания.",
        "Шаг 2: Найди триггеры — стресс, скука, усталость.",
        "Шаг 3: Замени перекус на прогулку или воду.",
        "Шаг 4: Ешь без экранов — смотри только на еду."
      ],
      warnings: [
        "НЕ вини себя за срывы.",
        "НЕ стремись к идеальному питанию."
      ],
      daily_action: "Сегодня: съешь один приём пищи без телефона.",
      resources: [
        { type: "book", label: "📖 Интуитивное питание — Эвелин Трибол", url: "#" }
      ]
    }
  ]
});

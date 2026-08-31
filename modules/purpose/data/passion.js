// modules/purpose/data/passion.js
// ============================================================
// АРХЕОЛОГИЯ ПРИЗВАНИЯ — ИСПРАВЛЕННАЯ ВЕРСИЯ v2.1.1
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "purpose",
    category: "passion",
    version: "2.1.1",
    lang: "ru",
    title: "🎯 Археология призвания",
    description: "Ты — творец, а не наблюдатель. Время найти, во что ты проваливаешься.",
    icon: "🎯",
    color: "#f43f5e"
  },

  questions: [
    // === ВОПРОС 1: Зона потока (без условий) ===
    {
      id: "flow_state",
      type: "single",
      text: "Вспомни момент, когда ты делал что-то и потерял счёт времени. Что это было?",
      required: true,
      options: [
        { id: "creating", label: "🎨 Создавал что-то", tags: ["maker"] },
        { id: "analyzing", label: "📊 Анализировал", tags: ["analyst"] },
        { id: "helping", label: "🤝 Помогал людям", tags: ["helper"] },
        { id: "building", label: "🔨 Строил / собирал", tags: ["builder"] },
        { id: "exploring", label: "🗺️ Исследовал новое", tags: ["explorer"] }
      ]
    },

    // === ВОПРОС 2: Тест на готовность (БЕЗ ИЗБЫТОЧНЫХ условий) ===
    {
      id: "sacrifice_test",
      type: "single",
      text: "Готов ли ты заниматься этим бесплатно 2 часа в день в течение года?",
      required: true,
      options: [
        { id: "yes_daily", label: "✅ Да, каждый день", tags: ["committed"] },
        { id: "yes_weekly", label: "📅 Да, но не каждый день", tags: ["interested"] },
        { id: "no", label: "❌ Нет, это хобби", tags: ["hobby"] }
      ]
    },

    // === ВОПРОС 3: Рыночный мост (условие: только готовность) ===
    {
      id: "market_bridge",
      type: "single",
      text: "Есть ли люди, готовые платить за результат?",
      required: true,
      conditions: { sacrifice_test: ["yes_daily", "yes_weekly"] },
      options: [
        { id: "paying_now", label: "💰 Уже платят", tags: ["monetized"] },
        { id: "paying_friends", label: "🎁 Делаю бесплатно, но просят", tags: ["demand"] },
        { id: "no_one", label: "🤷 Никто не просил", tags: ["hobby"] }
      ]
    },

    // === ВОПРОС 4: Икигай-пересечение ===
    {
      id: "ikigai_overlap",
      type: "single",
      text: "Что из этого пересекается: ты любишь, умеешь, это нужно миру и за это платят?",
      required: true,
      options: [
        { id: "love_skill", label: "❤️+🛠️ Люблю и умею", tags: ["passion"] },
        { id: "skill_money", label: "🛠️+💰 Умею и платят", tags: ["profession"] },
        { id: "love_world", label: "❤️+🌍 Люблю и миру нужно", tags: ["mission"] },
        { id: "world_money", label: "🌍+💰 Миру нужно и платят", tags: ["vocation"] }
      ]
    }
  ],

  solutions: [
    // === РЕШЕНИЕ 1: Карьерный поворот ===
    {
      id: "career_pivot",
      title: "🚀 Траектория: Карьерный поворот",
      description: "Ты — творец. Творцы создают, а не ждут. У тебя есть платящий рынок и готовность.",
      conditions: {
        sacrifice_test: ["yes_daily"],
        market_bridge: ["paying_now"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3–6 месяцев",
      yield_estimate: "Первый платный клиент",
      tags: ["career", "pivot", "money"],
      steps: [
        "Шаг 1: Зафиксируй 3 кейса, которые ты уже сделал.",
        "Шаг 2: Составь коммерческое предложение.",
        "Шаг 3: Найди 10 потенциальных клиентов.",
        "Шаг 4: Получи первый платный заказ."
      ],
      warnings: [
        "НЕ увольняйся, пока доход не стабилен.",
        "НЕ трать на обучение > 20% бюджета."
      ],
      daily_action: "Сегодня: запиши 3 кейса, которые ты уже сделал.",
      resources: [
        { type: "book", label: "📖 Ikigai — Хéctor García", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 2: Параллельный проект (условия: только рынок не ясен) ===
    {
      id: "side_hustle",
      title: "🌙 Параллельный проект",
      description: "Ты — исследователь. Интерес есть, но рынок не ясен. Время тестировать.",
      conditions: {
        sacrifice_test: ["yes_weekly"],
        market_bridge: ["could_pay", "unclear"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "6–12 месяцев",
      yield_estimate: "Понимание рынка",
      tags: ["side", "test", "learn"],
      steps: [
        "Шаг 1: Выбери 1 гипотезу для проверки.",
        "Шаг 2: Сделай MVP за 2 недели.",
        "Шаг 3: Покажи 5 людям и собери обратную связь.",
        "Шаг 4: Реши: развивать или закрыть."
      ],
      warnings: [
        "НЕ бросай основную работу.",
        "НЕ инвестируй больше 10 часов в неделю."
      ],
      daily_action: "Сегодня: опиши идею в 3 предложениях.",
      resources: [
        { type: "book", label: "📖 Стартап за $100 — Крис Гиллебо", url: "#" }
      ]
    },

    // === РЕШЕНИЕ 3: Глубокое хобби (условия: только хобби) ===
    {
      id: "deep_hobby",
      title: "🎨 Глубокое хобби",
      description: "Ты — любитель. Это приносит радость, но пока не бизнес. Развивай как навык.",
      conditions: {
        sacrifice_test: ["no"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "Без срока",
      yield_estimate: "Внутреннее удовлетворение",
      tags: ["hobby", "joy", "skill"],
      steps: [
        "Шаг 1: Выдели 30 минут в день.",
        "Шаг 2: Найди сообщество единомышленников.",
        "Шаг 3: Делись результатами публично.",
        "Шаг 4: Через 6 месяцев переоцени."
      ],
      warnings: [
        "НЕ превращай в обязанность.",
        "НЕ сравнивай с профессионалами."
      ],
      daily_action: "Сегодня: потрать 30 минут на любимое дело.",
      resources: [
        { type: "book", label: "📖 Сила привычки — Чарльз Духигг", url: "#" }
      ]
    }
  ]
});

// modules/money/data/en/debts-en.js
// ============================================================
// DEBTS AND LOANS — HOW TO MANAGE DEBT v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "money",
    category: "debts",
    version: "3.0.0",
    lang: "en",
    title: "🧾 Debts and Loans",
    description: "Debt can be a tool or a burden. Learn to manage it and free your finances.",
    icon: "🧾",
    color: "#22c55e",
    identity_anchor: "You are the master of your money, not the other way around"
  },

  questions: [
    {
      id: "debt_attitude",
      type: "single",
      text: "How do you feel about debt and loans?",
      required: true,
      options: [
        { id: "avoid",     label: "🚫 Avoid at all costs", tags: ["avoid"] },
        { id: "manage",    label: "🤔 I borrow when beneficial and control it", tags: ["manage"] },
        { id: "struggle",  label: "😰 I have debts I'm struggling with", tags: ["struggle"] },
        { id: "no_debt",   label: "✅ I have no debt", tags: ["no_debt"] }
      ]
    },
    {
      id: "debt_problem",
      type: "single",
      text: "What's the hardest part about managing debt for you?",
      required: true,
      conditions: { debt_attitude: ["avoid", "manage", "struggle", "no_debt"] },
      options: [
        { id: "high_rates", label: "💸 High interest rates", tags: ["high_rates"] },
        { id: "multiple",   label: "🔀 Multiple loans at once", tags: ["multiple"] },
        { id: "income",     label: "💰 Not enough income to cover", tags: ["income"] },
        { id: "discipline", label: "🧠 Lacking financial discipline", tags: ["discipline"] },
        { id: "no_problem", label: "✅ I have no problem", tags: ["no_problem"] }
      ]
    },
    {
      id: "debt_strategy",
      type: "single",
      text: "Which repayment strategy do you prefer?",
      required: true,
      options: [
        { id: "snowball",  label: "⛄ Start with smallest debts (snowball)", tags: ["snowball"] },
        { id: "avalanche", label: "⚡ Start with highest rates (avalanche)", tags: ["avalanche"] },
        { id: "proportional", label: "📊 Proportional to all debts", tags: ["proportional"] },
        { id: "none",       label: "😬 No strategy, pay as I go", tags: ["none"] }
      ]
    },
    {
      id: "deep_debt_sacrifice",
      type: "single",
      text: "Are you willing to cut all unnecessary expenses for 3 months to clear your debt?",
      required: true,
      conditions: { debt_strategy: ["snowball", "avalanche", "proportional", "none"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's too hard", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_debt",
      type: "single",
      text: "In a week I'll ask what you did to manage debt. What will you answer?",
      required: true,
      conditions: { deep_debt_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start today (tracking, plan)", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't manage", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "debt_snowball",
      title: "⛄ Snowball Method",
      description: "Start with the smallest debt. Quick wins give motivation to keep going.",
      conditions: {
        debt_strategy: ["snowball"],
        debt_problem: ["multiple", "discipline"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1–3 months",
      yield_estimate: "First debt paid off and momentum",
      tags: ["snowball", "motivation", "quick_win"],
      steps: [
        "List all debts from smallest to largest.",
        "Pay minimum on all, but put extra money toward the smallest debt.",
        "Once it's paid, move to the next.",
        "Celebrate each victory in a journal."
      ],
      warnings: [
        "Don't ignore minimum payments on other debts.",
        "Don't take new loans until you're done."
      ],
      daily_action: "Today: list all your debts (amount, rate, minimum payment).",
      resources: [
        { type: "book", label: "📖 Dave Ramsey — Total Money Makeover", url: "#" },
        { type: "technique", label: "🧘 Visualizing progress", url: "#" }
      ],
      follow_up: {
        question: "You started snowball. What did you do this week?",
        options: ["Nothing", "Made a list", "Made extra payments", "Paid off one debt"],
        reward: { "Paid off one debt": "🔥 You're already on a roll!" }
      }
    },
    {
      id: "debt_avalanche",
      title: "⚡ Avalanche Method",
      description: "Attack the highest-rate debts first. This saves the most money long-term.",
      conditions: {
        debt_strategy: ["avalanche"],
        debt_problem: ["high_rates", "multiple"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "2–6 months",
      yield_estimate: "Reduced interest payments",
      tags: ["avalanche", "cost_effective", "mathematical"],
      steps: [
        "List all debts with interest rates.",
        "Sort from highest rate to lowest.",
        "Pay minimum on all, and put extra money on the highest-rate debt.",
        "After it's gone, move to the next."
      ],
      warnings: [
        "Don't forget minimum payments.",
        "Don't be tempted by small debts — it's less cost-effective."
      ],
      daily_action: "Today: calculate how much you overpay annually on each loan.",
      resources: [
        { type: "link", label: "🔗 Debt avalanche calculator", url: "#" },
        { type: "book", label: "📖 Robert Kiyosaki — Guide to Investing", url: "#" }
      ],
      follow_up: {
        question: "You started avalanche. What did you do this week?",
        options: ["Nothing", "Sorted debts", "Made extra payment on the highest", "Paid one off"],
        reward: { "Paid one off": "🔥 You've reduced future costs." }
      }
    },
    {
      id: "debt_proportional",
      title: "📊 Proportional Plan",
      description: "You distribute efforts evenly. This works if debts are similar.",
      conditions: {
        debt_strategy: ["proportional"],
        debt_problem: ["multiple", "income"]
      },
      scoring: { priority: "medium", reliability: "medium" },
      time_estimate: "3–6 months",
      yield_estimate: "Gradual reduction of all debts",
      tags: ["proportional", "balanced", "steady"],
      steps: [
        "Determine total monthly payment you can afford.",
        "Split it proportionally across all debts based on balances.",
        "Recalculate proportions monthly.",
        "Ensure all debts decrease."
      ],
      warnings: [
        "Don't let one debt grow due to interest.",
        "Don't forget to check loan terms."
      ],
      daily_action: "Today: calculate your total debt and affordable monthly payment.",
      resources: [
        { type: "link", label: "🔗 Proportional calculator", url: "#" },
        { type: "book", label: "📖 Bodo Schäfer — The Path to Financial Freedom", url: "#" }
      ],
      follow_up: {
        question: "You started proportional plan. What did you do this week?",
        options: ["Nothing", "Distributed payments", "Reduced all debts", "Sticking to the plan"],
        reward: { "Sticking to the plan": "🔥 You have a stable system." }
      }
    },
    {
      id: "debt_income",
      title: "💰 Increase Income",
      description: "Sometimes the problem isn't debt, but insufficient income. Find ways to earn more.",
      conditions: {
        debt_problem: ["income"],
        debt_attitude: ["struggle"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "Additional income source",
      tags: ["income", "side_income", "skills"],
      steps: [
        "Think about your skills and how to monetize them.",
        "Explore freelancing or gig platforms.",
        "Pick one method and try it for a week.",
        "Direct extra income toward debt repayment."
      ],
      warnings: [
        "Don't quit your main job.",
        "Don't expect quick results — start small."
      ],
      daily_action: "Today: write 3 ways to earn extra and choose one.",
      resources: [
        { type: "link", label: "🔗 Freelance platforms", url: "#" },
        { type: "book", label: "📖 Chris Guillebeau — Side Hustle", url: "#" }
      ],
      follow_up: {
        question: "You looked for extra income. What did you do this week?",
        options: ["Nothing", "Found one option", "Tried to earn", "Already got paid"],
        reward: { "Already got paid": "🔥 You tackled the root issue." }
      }
    },
    {
      id: "debt_free",
      title: "✅ No Debt — Build Emergency Fund",
      description: "Having no debt is great! Now build a safety cushion so you don't need to borrow in the future.",
      conditions: {
        debt_attitude: ["no_debt"],
        debt_problem: ["no_problem"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "3 months",
      yield_estimate: "3-month living expenses cushion",
      tags: ["no_debt", "savings", "emergency"],
      steps: [
        "Calculate your monthly minimum living expenses.",
        "Aim to save 3x that amount.",
        "Save 10-20% of income each month.",
        "Don't touch this money except for true emergencies."
      ],
      warnings: [
        "Don't keep cash under the mattress — use a high-yield savings account.",
        "Don't invest this sum — it must be liquid."
      ],
      daily_action: "Today: open a high-yield savings account.",
      resources: [
        { type: "book", label: "📖 Dave Ramsey — 7 Steps to Financial Freedom", url: "#" },
        { type: "link", label: "🔗 Best savings accounts", url: "#" }
      ],
      follow_up: {
        question: "You're building a cushion. What did you do this week?",
        options: ["Nothing", "Opened an account", "Started saving", "Saved first $100"],
        reward: { "Saved first $100": "🔥 You're securing your future." }
      }
    },
    {
      id: "debt_start",
      title: "🌱 First Step to Debt Freedom",
      description: "Don't know where to start? Just start with tracking. That's half the battle.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "Full picture of your debts",
      tags: ["start", "awareness", "accounting"],
      steps: [
        "Write down all your debts in one place (amount, rate, term).",
        "Calculate the total.",
        "Determine the minimum payment you can afford.",
        "Tomorrow, choose your strategy."
      ],
      warnings: [
        "Don't hide from numbers — they're your friends.",
        "Don't be afraid of the total — starting is what matters."
      ],
      daily_action: "Today: create a table of all your debts.",
      resources: [
        { type: "book", label: "📖 Dave Ramsey — Total Money Makeover", url: "#" },
        { type: "technique", label: "🧘 Mindful spending method", url: "#" }
      ],
      follow_up: {
        question: "You started tracking debt. What did you do this week?",
        options: ["Nothing", "Listed all debts", "Chose a strategy", "Started paying"],
        reward: { "Started paying": "🔥 You're on your way to freedom." }
      }
    }
  ]
});

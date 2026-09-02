// modules/money/data/en/investments-en.js
// ============================================================
// INVESTMENTS — HOW TO START INVESTING WISELY v3.0
// ============================================================

window.SOS_REGISTER_QUIZ({
  meta: {
    module: "money",
    category: "investments",
    version: "3.0.0",
    lang: "en",
    title: "📈 Investments",
    description: "Investing is not just about money — it's investing in the future. Start small, even if you have no capital.",
    icon: "📈",
    color: "#22c55e",
    identity_anchor: "You are an investor in yourself and your future"
  },

  questions: [
    {
      id: "invest_attitude",
      type: "single",
      text: "How do you feel about investing?",
      required: true,
      options: [
        { id: "scared",    label: "😨 I'm afraid of losing money", tags: ["scared"] },
        { id: "curious",   label: "🤔 Curious but don't know where to start", tags: ["curious"] },
        { id: "experienced", label: "💪 I already invest", tags: ["experienced"] },
        { id: "no_money",  label: "💰 I have no spare money", tags: ["no_money"] }
      ]
    },
    {
      id: "invest_block",
      type: "single",
      text: "What prevents you from investing right now?",
      required: true,
      conditions: { invest_attitude: ["scared", "curious", "experienced", "no_money"] },
      options: [
        { id: "knowledge", label: "📚 Lack of knowledge", tags: ["knowledge"] },
        { id: "risk",      label: "🎲 Fear of risk", tags: ["risk"] },
        { id: "capital",   label: "💸 No starting capital", tags: ["capital"] },
        { id: "time",      label: "⏰ No time to learn", tags: ["time"] },
        { id: "ready",     label: "✅ I'm ready, just looking for options", tags: ["ready"] }
      ]
    },
    {
      id: "invest_horizon",
      type: "single",
      text: "What investment horizon suits you best?",
      required: true,
      options: [
        { id: "short",  label: "🟢 Short (up to 1 year) — quick results", tags: ["short"] },
        { id: "medium", label: "🟡 Medium (1–5 years) — balanced", tags: ["medium"] },
        { id: "long",   label: "🔴 Long-term (5+ years) — strategic", tags: ["long"] }
      ]
    },
    {
      id: "deep_invest_sacrifice",
      type: "single",
      text: "Are you willing to spend 15 minutes daily learning about investing, even if it's confusing at first?",
      required: true,
      conditions: { invest_horizon: ["short", "medium", "long"] },
      options: [
        { id: "yes",    label: "✅ Yes, I'm ready to learn", tags: ["committed"] },
        { id: "maybe",  label: "🤔 I'll try", tags: ["uncertain"] },
        { id: "no",     label: "❌ No, it's too complicated", tags: ["blocked"] }
      ]
    },
    {
      id: "follow_up_invest",
      type: "single",
      text: "In a week I'll ask what you did to start investing. What will you answer?",
      required: true,
      conditions: { deep_invest_sacrifice: ["yes", "maybe", "no"] },
      options: [
        { id: "ready",      label: "🚀 I'll start learning today", tags: ["ready"] },
        { id: "thinking",   label: "🤔 I'll think about it", tags: ["thinking"] },
        { id: "not_ready",  label: "😰 I'm afraid I won't do anything", tags: ["not_ready"] }
      ]
    }
  ],

  solutions: [
    {
      id: "invest_short",
      title: "🟢 Quick Start",
      description: "You want to see results fast. Start with small amounts and low-entry tools.",
      conditions: {
        invest_horizon: ["short"],
        invest_block: ["knowledge", "risk", "capital"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "First profit or experience",
      tags: ["short", "beginner", "quick"],
      steps: [
        "Open a brokerage account (e.g., Robinhood, eToro) — it takes 15 minutes.",
        "Deposit a small amount you can afford (e.g., $50).",
        "Buy one stock or a broad-market ETF.",
        "Track it for a week — not for profit, but to understand the mechanics."
      ],
      warnings: [
        "Don't invest your last money — only spare cash.",
        "Don't expect instant profit — learn to observe."
      ],
      daily_action: "Today: choose a broker and register (even in demo mode).",
      resources: [
        { type: "link", label: "🔗 eToro — guide for beginners", url: "#" },
        { type: "book", label: "📖 Robert Kiyosaki — Rich Dad Poor Dad", url: "#" }
      ],
      follow_up: {
        question: "You started short horizon. What did you do this week?",
        options: ["Nothing", "Registered", "Deposited money", "Bought an asset"],
        reward: { "Bought an asset": "🔥 You took the first step into investing." }
      }
    },
    {
      id: "invest_medium",
      title: "🟡 Balanced Approach",
      description: "You seek the middle ground. Combine conservative and risky instruments.",
      conditions: {
        invest_horizon: ["medium"],
        invest_block: ["knowledge", "risk"]
      },
      scoring: { priority: "medium", reliability: "high" },
      time_estimate: "3 months",
      yield_estimate: "Portfolio of 3-5 instruments",
      tags: ["medium", "balanced", "portfolio"],
      steps: [
        "Study 3 instruments: stocks, bonds, ETFs.",
        "Choose one of each.",
        "Allocate budget: 40% conservative, 40% moderate, 20% aggressive.",
        "Rebalance monthly."
      ],
      warnings: [
        "Don't invest in what you don't understand.",
        "Don't change strategy every day."
      ],
      daily_action: "Today: read 1 article about portfolio diversification.",
      resources: [
        { type: "book", label: "📖 Warren Buffett — Essays on Investing", url: "#" },
        { type: "link", label: "🔗 Investopedia — basic terms", url: "#" }
      ],
      follow_up: {
        question: "You started medium strategy. What did you do this week?",
        options: ["Nothing", "Chose instruments", "Built portfolio", "Deposited money"],
        reward: { "Deposited money": "🔥 You're already acting like an investor." }
      }
    },
    {
      id: "invest_long",
      title: "🔴 Long-term Investor",
      description: "You think decades ahead. Every dollar today is the foundation of the future.",
      conditions: {
        invest_horizon: ["long"],
        invest_block: ["knowledge", "capital"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "6 months",
      yield_estimate: "Long-term accumulation plan",
      tags: ["long", "strategic", "accumulation"],
      steps: [
        "Define a financial goal (e.g., save for a house in 10 years).",
        "Calculate how much you need to save monthly.",
        "Choose low-risk instruments (government bonds, index funds).",
        "Set up automatic monthly transfers."
      ],
      warnings: [
        "Don't panic during market drops — long-term plans survive crises.",
        "Don't forget about inflation — account for it."
      ],
      daily_action: "Today: write your 10-year financial goal and the amount needed.",
      resources: [
        { type: "book", label: "📖 Benjamin Graham — The Intelligent Investor", url: "#" },
        { type: "technique", label: "🧘 50/30/20 method for planning", url: "#" }
      ],
      follow_up: {
        question: "You started long-term strategy. What did you do this week?",
        options: ["Nothing", "Wrote a goal", "Calculated the amount", "Set up auto-payment"],
        reward: { "Set up auto-payment": "🔥 You're building a foundation for years to come." }
      }
    },
    {
      id: "invest_no_capital",
      title: "💸 Investing Without Capital",
      description: "Investing is not just money. Time, knowledge, and skills are assets too.",
      conditions: {
        invest_block: ["capital"],
        invest_attitude: ["no_money"]
      },
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "1 month",
      yield_estimate: "First free investment asset",
      tags: ["no_capital", "knowledge", "skill"],
      steps: [
        "Start investing in yourself: buy a finance book or take a free course.",
        "Open a demo account and trade with virtual money.",
        "Spend 10 minutes daily studying market news.",
        "When you have a spare $100, invest it in an ETF."
      ],
      warnings: [
        "Don't take loans to invest.",
        "Don't expect quick profit — develop your skill first."
      ],
      daily_action: "Today: find a free investing course and sign up.",
      resources: [
        { type: "link", label: "🔗 Coursera — free finance courses", url: "#" },
        { type: "book", label: "📖 Tony Robbins — Unshakeable", url: "#" }
      ],
      follow_up: {
        question: "You started investing without capital. What did you do this week?",
        options: ["Nothing", "Found a course", "Started learning", "Opened a demo account"],
        reward: { "Opened a demo account": "🔥 You're already acting; capital will follow." }
      }
    },
    {
      id: "invest_experienced",
      title: "💪 Portfolio Optimization",
      description: "You already have a portfolio. Now it's time to analyze and strengthen it.",
      conditions: {
        invest_attitude: ["experienced"],
        invest_block: ["ready"]
      },
      scoring: { priority: "slow", reliability: "high" },
      time_estimate: "2 weeks",
      yield_estimate: "Optimized portfolio aligned with your goals",
      tags: ["experienced", "optimize", "portfolio"],
      steps: [
        "Gather all your investments in one spreadsheet.",
        "Evaluate last year's performance.",
        "Check diversification (not too much in one sector?).",
        "Decide: sell, buy more, or hold."
      ],
      warnings: [
        "Don't sell in panic during a drop.",
        "Don't overcomplicate — sometimes the best decision is to do nothing."
      ],
      daily_action: "Today: create a spreadsheet of all your assets.",
      resources: [
        { type: "book", label: "📖 John Bogle — The Little Book of Common Sense Investing", url: "#" },
        { type: "technique", label: "🧘 Portfolio analysis by 5 criteria", url: "#" }
      ],
      follow_up: {
        question: "You analyzed your portfolio. What changes did you make?",
        options: ["Nothing", "Gathered data", "Did analysis", "Rebalanced"],
        reward: { "Rebalanced": "🔥 You manage capital like a pro." }
      }
    },
    {
      id: "invest_start",
      title: "🌱 First Step in Investing",
      description: "Investing starts with one action. You don't need to be an expert.",
      conditions: {},
      scoring: { priority: "fast", reliability: "high" },
      time_estimate: "Today",
      yield_estimate: "First conscious action",
      tags: ["start", "first", "action"],
      steps: [
        "Choose one investing book and start reading it today.",
        "Write down 3 terms you learned.",
        "Tell a friend or write in your journal.",
        "Continue tomorrow — 10 pages each day."
      ],
      warnings: [
        "Don't try to cover everything — start with the basics.",
        "Don't be afraid of questions — everyone started somewhere."
      ],
      daily_action: "Today: read 10 pages of an investing book.",
      resources: [
        { type: "book", label: "📖 Robert Kiyosaki — Rich Dad Poor Dad", url: "#" },
        { type: "link", label: "🔗 Personal finance blog", url: "#" }
      ],
      follow_up: {
        question: "You started learning about investing. What did you do this week?",
        options: ["Nothing", "Read a book", "Learned 5 new terms", "Opened a brokerage account"],
        reward: { "Opened a brokerage account": "🔥 You moved from theory to practice." }
      }
    }
  ]
});

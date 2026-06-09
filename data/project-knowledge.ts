import { projects, type Project } from "@/data/projects";

type KnowledgeAnswer = {
  keywords: string[];
  answer: (project: Project) => string;
  title: string;
};

const FALLBACK_REPLY = "暂时未收录到知识库中。";

const projectAliases: Record<string, string[]> = {
  "stock-copilot": ["stock copilot", "stock", "投研", "股票", "项目一", "第一个项目"],
  "astro-ashare": ["astroashare", "astro ashare", "星象", "项目二", "第二个项目"],
  "sales-meeting-copilot": [
    "sales meeting copilot",
    "sales copilot",
    "销售辅助",
    "销售插件",
    "会议插件",
    "项目三",
    "第三个项目",
  ],
};

const projectAnswers: KnowledgeAnswer[] = [
  {
    title: "项目介绍",
    keywords: ["介绍", "是什么", "做什么", "项目定位", "用途"],
    answer: (project) => `${project.title}：${project.description}`,
  },
  {
    title: "核心功能",
    keywords: ["功能", "能做什么", "核心模块", "页面", "包含什么"],
    answer: (project) => `核心功能包括：${project.features.join("；")}。`,
  },
  {
    title: "技术栈",
    keywords: ["技术", "技术栈", "框架", "用了什么", "人工智能技术", "ai 技术"],
    answer: (project) =>
      `主要技术栈包括 ${project.techStack.join("、")}。技术方案方面：${project.technicalPlan.join("；")}。`,
  },
  {
    title: "解决的问题",
    keywords: ["解决什么", "价值", "痛点", "为什么做", "项目背景"],
    answer: (project) => `${project.background} 主要解决：${project.solvedProblems.join("；")}。`,
  },
  {
    title: "开发过程",
    keywords: ["时间轴", "开发过程", "开发多久", "什么时候", "迭代", "版本"],
    answer: (project) => {
      const ordered = [...project.timeline].sort((a, b) => a.date.localeCompare(b.date));
      const start = ordered[0];
      const end = ordered.at(-1);
      const milestones = ordered.map((item) => `${item.date} ${item.title}`).join("；");

      return `${project.title} 从 ${start.date} 的“${start.title}”推进到 ${end?.date} 的“${end?.title}”。主要开发节点包括：${milestones}。`;
    },
  },
  {
    title: "后续规划",
    keywords: ["后续", "规划", "未来", "下一步", "还要做什么"],
    answer: (project) => `后续规划包括：${project.roadmap.join("；")}。`,
  },
];

const specialAnswers: Record<string, KnowledgeAnswer[]> = {
  "stock-copilot": [
    {
      title: "Agent 推演",
      keywords: ["agent", "多 agent", "推演", "圆桌"],
      answer: () =>
        "Stock Copilot 将情报官、研究员、策略师等角色拆成可视化推演节点，让市场情报、研究判断和策略结论的中间过程可以被查看，而不是只输出最终答案。",
    },
    {
      title: "RAG 知识库",
      keywords: ["rag", "知识库", "研报", "向量"],
      answer: () =>
        "Stock Copilot 的 RAG 知识库用于录入研报、政策和深度文章，并为投研推演提供可检索背景资料。页面预留了资料来源、权重、文档上传和多文档对比能力。",
    },
  ],
  "astro-ashare": [
    {
      title: "安全边界",
      keywords: ["安全", "投资建议", "买入", "卖出", "风险", "边界"],
      answer: () =>
        "AstroAShare 不提供买入、卖出、满仓、清仓或收益承诺。它只提供星象叙事、市场情绪、市场主线、新闻背景、观点记录和风险提示，并要求每次 AI 回答包含风险边界。",
    },
    {
      title: "星象与市场",
      keywords: ["星象", "迷信", "共振", "日历"],
      answer: () =>
        "AstroAShare 把星象作为叙事观察框架，不将其当作真实行情验证。星象日历会把“星象表现”和“市场实际表现”双栏展示；没有共振时不会强行解释，并通过复盘和含义修正库持续校正。",
    },
  ],
  "sales-meeting-copilot": [
    {
      title: "隐私与安全",
      keywords: ["隐私", "安全", "本地", "local-first", "数据", "api key", "录音"],
      answer: () =>
        "Sales Meeting Copilot 采用 Local-first 设计：知识文件保存在本地 IndexedDB，API Key 仅保存在本地浏览器；开始会议辅助前会提示音频捕获与使用授权，开发演示也可以使用 Mock Mode，避免采集真实会议音频。",
    },
    {
      title: "销售建议",
      keywords: ["销售建议", "回复建议", "客户意图", "风险信号", "会议"],
      answer: () =>
        "插件会根据会议转写分析客户意图和风险信号，生成推荐回复，并同时展示建议原因与关联知识资料。这样销售人员可以快速理解客户关注点，同时保留人工判断。",
    },
  ],
};

const generalAnswers = [
  {
    keywords: ["有哪些项目", "项目列表", "几个项目", "所有项目"],
    answer: `目前展示了三个项目：${projects.map((project) => project.title).join("、")}。`,
    title: "项目列表",
  },
  {
    keywords: ["casey", "技能", "擅长", "会什么", "能力"],
    answer:
      "Casey 主要关注 AI 应用与全栈工程，能力覆盖 LangChain、Multi-Agent、RAG、AI Eval、Next.js、React、Node.js、Python、PostgreSQL、Docker、Nginx 和 CI/CD。",
    title: "个人技能",
  },
];

export function answerProjectQuestion(question: string, projectId?: string) {
  const normalizedQuestion = question.trim().toLowerCase();
  const project = projectId
    ? projects.find((item) => item.id === projectId)
    : detectProject(normalizedQuestion);

  if (project) {
    const entries = [...(specialAnswers[project.id] ?? []), ...projectAnswers];
    const matched = findBestMatch(normalizedQuestion, entries);

    if (matched) {
      return createMatchedResponse(matched.answer(project), matched.title, project);
    }
  }

  const generalMatch = findBestMatch(normalizedQuestion, generalAnswers);

  if (generalMatch) {
    return {
      success: true,
      reply: generalMatch.answer,
      retrievalStatus: "MATCHED_KNOWLEDGE",
      sources: [
        {
          id: "portfolio-overview",
          title: generalMatch.title,
          source: "LOCAL_KNOWLEDGE",
          tags: ["作品集"],
        },
      ],
    };
  }

  return {
    success: true,
    reply: FALLBACK_REPLY,
    retrievalStatus: "NO_RELEVANT_KNOWLEDGE",
    sources: [],
  };
}

function detectProject(question: string) {
  return projects.find((project) =>
    projectAliases[project.id]?.some((alias) => question.includes(alias)),
  );
}

function findBestMatch<T extends { keywords: string[] }>(question: string, entries: T[]) {
  return entries
    .map((entry) => ({
      entry,
      score: entry.keywords.filter((keyword) => question.includes(keyword)).length,
    }))
    .sort((a, b) => b.score - a.score)
    .find((candidate) => candidate.score > 0)?.entry;
}

function createMatchedResponse(answer: string, title: string, project: Project) {
  return {
    success: true,
    reply: answer,
    retrievalStatus: "MATCHED_KNOWLEDGE",
    sources: [
      {
        id: project.id,
        title: `${project.title} · ${title}`,
        source: "LOCAL_KNOWLEDGE",
        tags: [project.title, title],
      },
    ],
  };
}

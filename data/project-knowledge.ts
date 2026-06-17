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
    keywords: ["casey", "自我介绍", "介绍自己", "个人介绍", "你是谁"],
    answer:
      "Casey 的经历可以分成两条线：一条是工作线，一条是持续推进的独立项目线。工作上做过银行微前端重构、科创企业风险评价平台、海外营销 Agent、车抵贷智能助手等项目；独立项目上持续搭建 AI 应用和作品集，用实际项目展示 Agent、RAG、AI 工程化和全栈部署能力。",
    title: "自我介绍",
  },
  {
    keywords: ["技能", "擅长", "会什么", "能力", "技术能力"],
    answer:
      "Casey 主要关注 AI 应用与全栈工程，能力覆盖 LangChain、Multi-Agent、RAG、AI Eval、Next.js、React、Node.js、Python、PostgreSQL、Docker、Nginx 和 CI/CD。",
    title: "个人技能",
  },
  {
    keywords: ["工作经历", "经历", "工作线", "上一份", "之前做过什么", "履历"],
    answer:
      "Casey 的工作经历按时间大致分三段：第一段是 2023 年 7 月到 2024 年 11 月，在成都一家银行做微前端重构和科创企业风险评价平台，打下工程化基础；第二段是 2025 年 5 月到 6 月，远程参与上海初创公司的海外营销 Agent 项目，面向中小外贸企业做自动获客和询盘处理；第三段是 2025 年 8 月到 10 月，在重庆一家金融机构做车抵贷智能助手，重点做 BFF 层兜底降级逻辑，保障线上信贷链路可用性。",
    title: "工作经历",
  },
  {
    keywords: ["银行", "成都", "微前端", "科创", "风险评价"],
    answer:
      "在成都银行相关项目中，Casey 主要参与微前端重构和科创企业风险评价平台建设。这段经历更偏工程化和业务系统开发，帮助他建立了前端架构、系统拆分和稳定交付的基础。",
    title: "银行项目经历",
  },
  {
    keywords: ["海外营销", "外贸", "自动获客", "询盘", "商业场景"],
    answer:
      "2025 年 5 月到 6 月，Casey 远程参与上海一家初创公司的海外营销 Agent 项目，服务中小外贸企业，方向是自动获客和询盘处理。这是他第一次在商业场景中接触 Agent 落地。",
    title: "海外营销 Agent 经历",
  },
  {
    keywords: ["车抵贷", "重庆", "金融机构", "bff", "兜底", "降级", "信贷"],
    answer:
      "2025 年 8 月到 10 月，Casey 在重庆一家金融机构参与车抵贷智能助手项目。最有价值的部分是 BFF 层兜底降级逻辑，用于保障线上信贷链路在异常情况下仍具备可用性。",
    title: "车抵贷智能助手经历",
  },
  {
    keywords: ["为什么离职", "辞职", "考研", "休息", "休整", "空窗", "调整"],
    answer:
      "Casey 第一段工作后辞职考研；后来在重庆项目后因为个人原因短暂休整。目前状态已经恢复好，正在重新出发。这个阶段也持续推进了自己的 AI 独立项目和作品集建设。",
    title: "经历说明",
  },
  {
    keywords: ["独立项目", "作品集", "vercel", "阿里云", "ecs", "docker", "claude", "codex", "deepseek"],
    answer:
      "Casey 一直在持续做独立项目，并把项目整理到部署在 Vercel 上的个人作品集中。开发时会使用 Claude Code、Codex、DeepSeek 等 AI 工具提速；部分项目服务部署在阿里云 ECS，并使用 Docker 容器化运行。",
    title: "独立项目线",
  },
  {
    keywords: ["性格", "工作观", "团队", "氛围", "热心", "沟通"],
    answer:
      "Casey 对新技术保持兴趣，愿意主动做项目尝试，也喜欢帮别人解决技术问题、讲清楚技术方案。工作观上，他更关注业务是否有前景，对公司位置和规模没有特别执着；同时也认为良好的工作氛围会促进业务发展。",
    title: "性格与工作观",
  },
  {
    keywords: ["找工作", "求职", "期望", "公司", "规模", "位置", "业务"],
    answer:
      "Casey 找工作时主要关注公司是否有有前景的业务，对位置和规模没有特别在意。他更希望进入一个业务方向清晰、技术有落地空间、团队氛围相对良好的环境。",
    title: "求职偏好",
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

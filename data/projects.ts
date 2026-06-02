export type TimelineItem = {
  date: string;
  version: string;
  title: string;
  reason: string;
  additions: string[];
  benefits: string[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  status: "规划中" | "开发中" | "已上线" | "持续迭代";
  role: string;
  techStack: string[];
  images: string[];
  background: string;
  features: string[];
  technicalPlan: string[];
  solvedProblems: string[];
  roadmap: string[];
  timeline: TimelineItem[];
};

export const personalProfile = {
  name: "你的名字",
  role: "前端开发者 / AI 应用探索者 / 项目型学习者",
  intro:
    "我关注的不只是把页面做出来，而是把一个想法拆成可以迭代的产品：先验证核心体验，再补齐数据结构、交互细节和长期维护方式。",
  personality:
    "性格上偏长期主义，喜欢把复杂问题整理成清晰结构。做项目时比较重视复盘、版本记录和可持续迭代，也愿意在不确定的问题里先搭出一个可运行的版本。",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "API Design",
    "Product Thinking",
    "AI Workflow",
  ],
};

export const projects: Project[] = [
  {
    id: "portfolio-os",
    title: "个人项目展示网站",
    tagline: "用于展示项目经历、技术成长和迭代能力的作品集系统",
    description:
      "把项目经历做成一个可持续更新的网站，每个项目都有介绍、图片轮播和独立时间轴，方便招聘方理解项目的成长过程。",
    status: "开发中",
    role: "产品设计 / 前端开发 / 内容架构",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    images: [
      "/projects/portfolio-os/overview.svg",
      "/projects/portfolio-os/timeline.svg",
      "/projects/portfolio-os/avatar.svg",
    ],
    background:
      "普通个人介绍更像结果列表，很难展示一个项目为什么开始、如何迭代、解决过什么问题。这个网站希望把项目过程结构化，让访问者看到真实的工程判断和成长轨迹。",
    features: [
      "首页个人简介与技能标签",
      "项目板块展示",
      "项目详情页",
      "图片轮播",
      "可配置时间轴",
      "数字分身聊天入口",
    ],
    technicalPlan: [
      "使用 Next.js App Router 组织首页、详情页和 API。",
      "所有项目内容先写在 data/projects.ts 中，后续通过修改配置文件更新。",
      "图片统一放在 public/projects/ 下，由项目配置引用。",
      "使用 Framer Motion 处理卡片、时间轴和弹窗动效。",
    ],
    solvedProblems: [
      "让项目经历从静态文字变成可浏览的展示系统。",
      "让招聘方快速看到项目背景、技术方案和迭代记录。",
      "降低后续维护成本，改配置和图片即可更新内容。",
    ],
    roadmap: [
      "替换为真实项目截图。",
      "继续补充项目时间轴记录。",
      "接入真实 AI 项目顾问。",
      "增加线上项目链接和 GitHub 链接。",
    ],
    timeline: [
      {
        date: "2026-06-01",
        version: "v0.1",
        title: "完成第一阶段页面结构",
        reason: "需要先形成一个可以展示给招聘方看的项目作品集基础版本。",
        additions: ["个人简介区", "项目展示板块", "项目详情页", "图片轮播", "时间轴模块"],
        benefits: ["访问者可以快速理解项目定位", "后续可以通过配置文件持续补充内容"],
      },
      {
        date: "2026-05-28",
        version: "v0.0",
        title: "确定作品集方向",
        reason: "传统个人主页不容易表达项目迭代能力，需要更像产品介绍页的展示方式。",
        additions: ["页面结构草案", "项目配置方案", "Vercel 部署思路"],
        benefits: ["明确第一阶段范围", "避免过早开发后台系统"],
      },
    ],
  },
  {
    id: "avatar-advisor",
    title: "数字分身项目顾问",
    tagline: "未来接入作品集的 AI 项目讲解助手",
    description:
      "一个聚焦项目信息、职业经历和技术介绍的问答入口。第一阶段只保留聊天 UI 和 Mock API，未来再独立成服务。",
    status: "规划中",
    role: "AI 产品设计 / 服务端规划",
    techStack: ["Next.js API", "SQLite", "Knowledge Base", "LLM Gateway"],
    images: [
      "/projects/avatar-advisor/conversation.svg",
      "/projects/avatar-advisor/knowledge.svg",
      "/projects/avatar-advisor/flow.svg",
    ],
    background:
      "访问者不一定按页面顺序阅读项目。数字分身可以让他们直接提问，比如项目解决了什么、技术方案如何选择、未来怎么迭代。",
    features: ["悬浮聊天入口", "消息区域", "输入框", "Mock 回复", "未来 API 预留"],
    technicalPlan: [
      "展示站通过 services/avatarClient.ts 调用统一接口。",
      "当前 /api/avatar-chat 返回固定 Mock 回复。",
      "未来小分身服务独立维护知识库和 SQLite 数据库。",
    ],
    solvedProblems: [
      "为作品集增加可对话入口。",
      "提前预留小分身与展示站的调用边界。",
      "避免第一阶段被复杂 AI 后端拖慢。",
    ],
    roadmap: [
      "接入真实大模型接口。",
      "建立项目知识库。",
      "限制小分身只访问项目和职业相关资料。",
      "整理访客关注点并传给长期分析系统。",
    ],
    timeline: [
      {
        date: "2026-06-01",
        version: "v0.1",
        title: "完成聊天入口 UI",
        reason: "作品集需要提前具备未来 AI 化入口，但当前阶段先保证展示主线清晰。",
        additions: ["悬浮按钮", "聊天面板", "输入框", "发送按钮", "Mock API"],
        benefits: ["后续可以替换真实服务", "访问者能感知项目的未来方向"],
      },
      {
        date: "2026-05-29",
        version: "v0.0",
        title: "定义小分身职责边界",
        reason: "需要明确小分身只回答项目、职业和技术介绍相关内容。",
        additions: ["职责范围", "未来调用链", "数据边界"],
        benefits: ["保护隐私边界", "降低未来架构混乱"],
      },
    ],
  },
  {
    id: "learning-timeline",
    title: "技术成长时间轴",
    tagline: "记录学习、实践、复盘和能力变化的成长档案",
    description:
      "把学习过程、项目尝试、技术突破和复盘结论整理成时间轴，用来展示持续学习能力和思考方式。",
    status: "持续迭代",
    role: "学习记录 / 项目复盘 / 能力展示",
    techStack: ["TypeScript", "Data Modeling", "Timeline", "Documentation"],
    images: [
      "/projects/learning-timeline/growth.svg",
      "/projects/learning-timeline/notes.svg",
      "/projects/learning-timeline/review.svg",
    ],
    background:
      "技术成长不是一组技能标签，而是一段持续变化的过程。这个项目用时间轴记录关键节点，让面试官看到我如何学习、实践和复盘。",
    features: ["成长事件记录", "版本化复盘", "技能变化展示", "阶段性目标"],
    technicalPlan: [
      "复用项目详情页和时间轴组件。",
      "通过配置文件维护事件时间、简介、原因和收益。",
      "后续可以扩展为独立的学习记录页面。",
    ],
    solvedProblems: [
      "让技能成长有迹可循。",
      "把零散学习记录整理成结构化材料。",
      "帮助面试时更清楚地说明技术选择和成长过程。",
    ],
    roadmap: ["补充真实学习节点", "加入项目链接", "增加阶段性总结", "接入小分身问答"],
    timeline: [
      {
        date: "2026-06-01",
        version: "v0.1",
        title: "创建成长时间轴项目",
        reason: "希望除了展示项目结果，也展示技术成长过程。",
        additions: ["成长记录结构", "示例时间轴", "项目详情模板复用"],
        benefits: ["访问者可以看到持续学习能力", "后续可逐步补真实事件"],
      },
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

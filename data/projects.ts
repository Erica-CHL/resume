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
  name: "Casey",
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
    id: "stock-copilot",
    title: "Stock Copilot",
    tagline: "面向投研场景的 AI 股票分析与多 Agent 推演系统",
    description:
      "围绕投研中枢、Agent 推演、RAG 知识库、系统监控和产业链沙盘构建的智能投研工作台，用于把市场信息、研报资料、推演过程和异常状态整合到一个可操作的产品界面中。",
    status: "持续迭代",
    role: "产品设计 / 前端开发 / AI 应用编排",
    techStack: ["React", "TypeScript", "Agent Workflow", "RAG", "LangChain", "DeepSeek API"],
    images: [
      "/projects/stock-copilot/appone_one.jpg",
      "/projects/stock-copilot/appone_two.jpg",
      "/projects/stock-copilot/appone_three.jpg",
      "/projects/stock-copilot/appone_four.jpg",
      "/projects/stock-copilot/appone_five.jpg",
    ],
    background:
      "投研信息通常分散在行情、研报、新闻、产业链和策略记录中。这个项目尝试把 AI 推理、知识库检索和可视化工作台结合起来，让投研过程从信息收集、逻辑推演到风险监控都能被结构化呈现。",
    features: [
      "投研中枢面板，展示市场情绪、风控评分和板块动能",
      "Agent 圆桌推演，用多角色协作拆解行情逻辑",
      "RAG 知识库，支持投研资料入库和多文档对比",
      "系统监控台，跟踪接口、爬虫和模型调用异常",
      "产业链沙盘，用节点关系展示行业链条变化",
    ],
    technicalPlan: [
      "前端采用组件化工作台结构，将不同投研模块拆成独立页面。",
      "通过 RAG 流程处理研报、政策和深度文章，形成可检索的知识材料。",
      "使用 Agent 推演流程把情报官、研究员、策略师等角色的分析过程可视化。",
      "增加系统监控页面，暴露数据抓取、LLM 响应和接口状态，便于调试和迭代。",
    ],
    solvedProblems: [
      "把分散投研信息整合成统一工作台，减少来回切换工具的成本。",
      "让 AI 分析过程可视化，而不是只给出一个最终结论。",
      "把知识库、推演、监控和产业链关系放在同一个产品结构里，方便后续持续扩展。",
    ],
    roadmap: [
      "补充真实数据源和更稳定的行情同步机制。",
      "完善 RAG 文档切块、召回和引用来源展示。",
      "优化 Agent 推演链路，增加可追踪的中间结论。",
      "让产业链沙盘支持更多行业和自定义节点。",
    ],
    timeline: [
      {
        date: "2026-05-06",
        version: "v0.8",
        title: "完成五个核心模块联调和演示版整理",
        reason: "需要把分散模块串成一个可讲解、可截图、可用于作品集展示的完整产品闭环。",
        additions: ["投研中枢最终版", "Agent 推演流程页", "RAG 知识库页", "系统监控页", "产业链沙盘页"],
        benefits: ["项目从功能原型进入可展示阶段", "面试时可以按模块讲清楚产品逻辑和技术边界"],
      },
      {
        date: "2026-04-22",
        version: "v0.7",
        title: "开发产业链沙盘模块",
        reason: "投研分析不能只停留在单个板块或单只股票，需要展示行业上下游关系和传导路径。",
        additions: ["产业链节点卡片", "节点连线关系", "板块下跌幅展示", "沙盘保存与监控入口"],
        benefits: ["让投研结果有空间结构", "可以更直观表达行业链条和主线扩散过程"],
      },
      {
        date: "2026-04-10",
        version: "v0.6",
        title: "加入系统异常监控台",
        reason: "爬虫、行情接口和大模型调用都可能失败，需要一个页面展示问题来源，方便调试和解释数据不稳定。",
        additions: ["异常日志表格", "错误级别筛选", "故障模块字段", "刷新日志按钮", "分页状态"],
        benefits: ["提高项目工程可信度", "能清楚说明数据抓取和模型调用的风险控制方式"],
      },
      {
        date: "2026-03-28",
        version: "v0.5",
        title: "打通 DeepSeek 与投研推演链路",
        reason: "前期页面只能展示静态信息，需要让 AI 能基于上下文生成投研简报和角色观点。",
        additions: ["DeepSeek 调用封装", "投研上下文拼装", "推演结果展示区", "失败降级提示"],
        benefits: ["AI 能参与投研分析流程", "从普通后台页面升级为 AI 应用工作台"],
      },
      {
        date: "2026-03-15",
        version: "v0.4",
        title: "开发 RAG 知识库入库与对比中枢",
        reason: "投研判断需要研报、政策、深度文章等背景材料支撑，不能只依赖即时行情。",
        additions: ["资料来源选择", "权重级别设置", "文档标题输入", "PDF/TXT 上传入口", "多文档智能比对入口"],
        benefits: ["把外部资料纳入分析流程", "为后续向量化、切块和召回预留页面结构"],
      },
      {
        date: "2026-03-03",
        version: "v0.3",
        title: "设计 Agent 圆桌推演流程",
        reason: "单一 AI 结论不利于展示分析过程，需要把不同分析角色拆开，让推理链条更可见。",
        additions: ["任务触发节点", "情报官角色", "研究员角色", "策略师角色", "推演步骤卡片"],
        benefits: ["让 AI 分析过程可解释", "访问者可以看到从情报到策略的中间步骤"],
      },
      {
        date: "2026-02-18",
        version: "v0.2",
        title: "搭建投研中枢面板",
        reason: "需要一个首页式工作台承载市场情绪、风控评分、板块动能和 Copilot 实时对话。",
        additions: ["市场情绪卡片", "风控健康评分", "板块平均动能", "智能研判正文区", "Copilot 对话侧栏"],
        benefits: ["形成产品第一视觉中心", "能快速展示项目的投研场景和 AI 辅助定位"],
      },
      {
        date: "2026-02-08",
        version: "v0.1",
        title: "确定信息架构和后台导航",
        reason: "项目模块较多，需要先规划导航和页面边界，避免后续功能堆叠失控。",
        additions: ["侧边导航结构", "投研中枢入口", "Agent 推演入口", "RAG 知识库入口", "系统监控与产业链沙盘入口"],
        benefits: ["明确了产品模块边界", "后续开发可以按页面逐步推进"],
      },
      {
        date: "2026-02-01",
        version: "v0.0",
        title: "完成原型立项和产品方向确认",
        reason: "希望做一个能展示 AI 投研能力的项目，不只展示页面，而是展示数据、知识库和推演流程的组合能力。",
        additions: ["项目定位", "核心用户场景", "低保真原型", "模块拆分草案", "技术可行性判断"],
        benefits: ["确定了 Stock Copilot 的项目主线", "为后续两个月的页面和 AI 流程开发提供清晰方向"],
      },
    ],
  },
  {
    id: "astro-ashare",
    title: "AstroAShare",
    tagline: "星象叙事 × A 股主线 × 市场情绪 × 用户记忆的陪伴型分析助手",
    description:
      "AstroAShare 面向 A 股投资者，不做投资建议，只做叙事观察、新闻背景、主线识别、情绪陪伴、观点记录和风险提示。",
    status: "持续迭代",
    role: "全栈开发 / AI 产品设计 / 数据架构",
    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Prisma 7",
      "Supabase",
      "DeepSeek API",
      "Recharts",
      "Vercel",
    ],
    images: [
      "/projects/astro-ashare/apptwo_one.jpg",
      "/projects/astro-ashare/apptwo_two.jpg",
      "/projects/astro-ashare/apptwo_three.jpg",
      "/projects/astro-ashare/apptwo_four.jpg",
      "/projects/astro-ashare/apptwo_five.jpg",
    ],
    background:
      "A 股用户经常在市场波动、新闻催化和个人情绪之间反复摇摆。这个项目把星象叙事作为陪伴型观察框架，结合市场主线、新闻背景和用户记忆，让用户记录观点、复盘预测，并在风险边界内获得情绪整理和背景分析。",
    features: [
      "Dashboard 首页：情绪分数、趋势图、星象节点、市场主线、本周摘要和用户记忆提醒",
      "Astro Calendar：14 天星象事件列表，左侧星象表现、右侧市场实际表现双栏对照",
      "Market Mainline：综合涨幅、成交、涨停、资金、新闻和星象共振识别 Top 5 主线",
      "Chat 对话助手：结合用户记忆、星象背景、市场主线和 A 股新闻进行陪伴式分析",
      "Weekly Forecast / Daily Review / Weekly Review：生成预测、复盘实际反馈并修正解释",
      "Meaning Lab / Predictions / Memory：维护星象含义、用户预测和用户记忆",
    ],
    technicalPlan: [
      "使用 Next.js 15 App Router、React 19 和 TypeScript 构建 10 个核心页面。",
      "采用三层 Provider 架构：astro-provider 管理星象数据，market-provider 管理市场数据，user-provider 管理用户数据。",
      "核心服务层包含 astro-engine、report-service、mainline-service、data-collector、deepseek 和 system-prompt。",
      "使用 Prisma 7 + Supabase PostgreSQL 管理 AstroEvent、MarketMainline、MarketNews、UserMemory、UserPrediction 和 AstroMeaningRule。",
      "通过 DeepSeek API 生成陪伴式分析，并用系统提示词限制投资建议类表达。",
      "使用 Recharts 展示情绪趋势，用 Vercel 定时任务采集星象、新闻、主线和报告数据。",
    ],
    solvedProblems: [
      "把星象叙事、市场主线、新闻背景和用户记忆组织到同一个分析桌面中。",
      "通过每日复盘、每周复盘和含义修正库，让星象解释可以被持续验证和修正。",
      "为用户提供情绪陪伴和风险提示，而不是买卖指令，降低 AI 金融表达风险。",
      "用 Provider 和 Service 分层隔离数据源、AI 生成、市场主线评分和用户数据，便于后续替换数据接口。",
    ],
    roadmap: [
      "接入更稳定的公开市场数据源和新闻数据源。",
      "完善 Supabase Auth，让用户记忆和预测记录按账号隔离。",
      "优化 AstroMeaningRule 的证据计数和置信度更新逻辑。",
      "增加更多复盘可视化，让预测、实际走势和解释修正形成闭环。",
    ],
    timeline: [
      {
        date: "2026-06-03",
        version: "v0.9",
        title: "完成作品集展示版整理",
        reason: "项目已经形成完整页面和实际截图，需要把产品定位、架构、数据模型和安全边界写进作品集。",
        additions: ["Dashboard 截图", "Chat 截图", "星象日历截图", "市场主线截图", "每周预测截图"],
        benefits: ["项目展示从功能截图升级为完整案例", "访问者可以理解项目不做投资建议的产品边界"],
      },
      {
        date: "2026-06-01",
        version: "v0.8",
        title: "联调数据采集、报告生成和部署任务",
        reason: "项目需要从静态页面变成可以定时更新的应用，因此要把采集、报告和 Vercel 定时任务串起来。",
        additions: ["data-collector", "每日数据采集流程", "每周报告生成入口", "vercel.json 定时任务", "模板回退逻辑"],
        benefits: ["应用具备持续更新能力", "AI 生成失败时仍能用确定性模板保底"],
      },
      {
        date: "2026-05-31",
        version: "v0.7",
        title: "补齐复盘、预测和用户记忆页面",
        reason: "陪伴型分析助手不能只做当下问答，还需要沉淀用户观点和事后复盘。",
        additions: ["Daily Review", "Weekly Review", "Predictions", "Memory", "用户观点记录结构"],
        benefits: ["形成预测到复盘的闭环", "对话助手后续可以引用用户历史偏好和关注点"],
      },
      {
        date: "2026-05-28",
        version: "v0.6",
        title: "完成 Chat 对话助手和 AI 安全边界",
        reason: "金融相关 AI 项目必须避免越界表达，需要明确禁止买入、卖出、满仓、清仓等建议性措辞。",
        additions: ["DeepSeek API 封装", "system-prompt", "对话输入区", "回答参考维度", "风险提示规则"],
        benefits: ["AI 对话更符合陪伴型定位", "降低金融建议和收益承诺风险"],
      },
      {
        date: "2026-05-26",
        version: "v0.5",
        title: "接入 DeepSeek 对话上下文",
        reason: "Chat 页面需要结合用户记忆、星象背景、市场主线和新闻催化，而不是只进行普通闲聊。",
        additions: ["deepseek.ts", "用户记忆上下文", "星象背景上下文", "市场主线上下文", "新闻摘要上下文"],
        benefits: ["对话回答更贴合产品定位", "为后续个性化陪伴分析打下基础"],
      },
      {
        date: "2026-05-24",
        version: "v0.4",
        title: "开发 Dashboard 与星象日历页面",
        reason: "需要让用户一进来就看到今日市场情绪、未来星象节点和星象与市场的双栏对照。",
        additions: ["情绪分数卡片", "Recharts 情绪趋势图", "未来星象节点列表", "14 天星象事件", "星象表现与市场表现双栏"],
        benefits: ["首页具备明确的信息密度", "星象叙事不会被强行解释，而是与市场实际表现并列呈现"],
      },
      {
        date: "2026-05-20",
        version: "v0.3",
        title: "实现市场主线评分算法",
        reason: "项目需要识别 A 股主线，而不是只展示单条新闻或单个指数情绪。",
        additions: ["mainline-service", "价格强度评分", "成交量评分", "涨停与连板因子", "资金与新闻催化因子", "星象共振因子"],
        benefits: ["市场主线识别有了可解释评分结构", "右侧新闻催化可以和主线阶段一起展示"],
      },
      {
        date: "2026-05-16",
        version: "v0.2",
        title: "搭建本地星象计算和报告生成服务",
        reason: "星象数据不能完全依赖外部接口，需要保留本地计算和模板回退能力。",
        additions: ["astro-engine", "月相观察", "逆行观察", "相位叙事", "report-service", "模板回退报告"],
        benefits: ["星象叙事有稳定基础", "AI 生成不可用时仍能输出确定性报告"],
      },
      {
        date: "2026-05-08",
        version: "v0.1",
        title: "确定三层 Provider 架构和数据模型",
        reason: "项目同时涉及星象、市场、用户记忆和 AI 生成，需要先拆清楚数据来源和服务边界。",
        additions: ["astro-provider", "market-provider", "user-provider", "Prisma 数据模型", "Supabase 数据表规划"],
        benefits: ["页面可以直接调用 Provider", "后续替换 API 或 mock 数据不会影响页面结构"],
      },
      {
        date: "2026-05-01",
        version: "v0.0",
        title: "完成 AstroAShare 产品立项",
        reason: "希望做一个区别于传统行情工具的项目，用星象叙事、市场主线和用户记忆提供情绪陪伴式分析。",
        additions: ["项目定位", "5 月到 6 月开发计划", "10 个页面规划", "AI 安全边界草案", "数据库模型草案"],
        benefits: ["明确不做投资建议的产品红线", "形成了从 2026 年 5 月持续开发到 6 月的功能蓝图"],
      },
    ],
  },
  {
    id: "sales-meeting-copilot",
    title: "Local-first Sales Meeting Copilot",
    tagline: "面向销售会议的本地优先实时转写、翻译与 AI 辅助插件",
    description:
      "在获得会议使用授权后捕获当前标签页和麦克风音频，实时生成转写、翻译、客户意图、风险信号和销售回复建议；知识文件、API Key 与业务上下文优先保存在本地设备。",
    status: "开发中",
    role: "产品设计 / 前端开发 / AI 销售辅助",
    techStack: ["Browser Extension", "React", "TypeScript", "Web Audio", "IndexedDB", "LLM API"],
    images: [
      "/projects/sales-meeting-copilot/live-meeting.png",
      "/projects/sales-meeting-copilot/knowledge-base.png",
      "/projects/sales-meeting-copilot/settings.png",
    ],
    background:
      "销售人员在远程会议中需要同时倾听客户、识别异议、检索资料并组织回复，容易错过关键意图。这个插件把会议转写、翻译、销售建议和本地知识库放进同一个侧边工作台，同时明确提示录音授权并坚持 Local-first 数据策略。",
    features: [
      "捕获当前标签页与麦克风音频，生成实时会议转写",
      "识别客户意图、风险信号，并解释建议产生的原因",
      "基于销售手册、定价 FAQ 和客户笔记生成推荐回复",
      "支持手动粘贴客户语句，在无真实音频时进行分析演示",
      "本地知识库支持 TXT / Markdown 文件上传、预览和删除",
      "支持目标翻译语言、客户语言、销售回复语言和 Mock 模式配置",
    ],
    technicalPlan: [
      "使用浏览器扩展作为会议侧边工作台，减少销售人员切换工具的成本。",
      "通过 Web Audio 捕获标签页与麦克风音频，并将转写结果按客户与销售角色分组。",
      "将客户意图、风险信号、推荐回复、解释原因和关联知识组织成结构化 AI 输出。",
      "使用 IndexedDB 保存本地知识文件，API Key 仅存储在本地浏览器。",
      "提供 Mock Mode，用模拟转写和回复验证交互链路，避免开发阶段必须采集真实会议音频。",
    ],
    solvedProblems: [
      "降低销售人员在会议中同时记录、检索资料和组织回答的认知负担。",
      "让 AI 建议不仅给出回复，还展示客户意图、风险点、原因和相关上下文。",
      "通过本地优先存储降低客户资料、销售手册和 API Key 外泄风险。",
      "用明确授权提示和 Mock Mode 平衡会议辅助能力、隐私边界与开发验证效率。",
    ],
    roadmap: [
      "接入稳定的实时语音转写与说话人区分能力。",
      "增加多语言实时翻译和销售回复流式生成。",
      "完善本地知识检索、引用来源和上下文压缩。",
      "增加会后摘要、异议清单和跟进任务导出。",
    ],
    timeline: [
      {
        date: "2026-06-09",
        version: "v0.5",
        title: "完成三个核心页面并加入作品集",
        reason: "插件已经具备完整产品轮廓，需要用实际界面展示销售辅助流程和本地优先设计。",
        additions: ["Live Meeting 页面", "Knowledge Base 页面", "Settings 页面", "实际项目截图"],
        benefits: ["访问者可以快速理解插件的使用流程", "项目从功能原型进入可展示阶段"],
      },
      {
        date: "2026-06-05",
        version: "v0.4",
        title: "增加本地知识库和关联上下文",
        reason: "通用模型回复难以符合具体销售团队的话术、定价和客户背景，需要让回复基于本地业务资料。",
        additions: ["TXT / Markdown 上传", "IndexedDB 本地存储", "知识文件列表", "相关上下文展示"],
        benefits: ["推荐回复更贴合销售场景", "业务资料不需要上传到独立服务端保存"],
      },
      {
        date: "2026-06-01",
        version: "v0.3",
        title: "实现 AI 销售建议结构",
        reason: "只提供转写不能真正帮助销售，需要把客户表达转化成可行动的信息。",
        additions: ["Recommended Reply", "Customer Intent", "Risk Signal", "Why", "Related Context"],
        benefits: ["销售可以快速识别客户关注点", "AI 建议更可解释，也更方便人工判断"],
      },
      {
        date: "2026-05-27",
        version: "v0.2",
        title: "开发实时会议与 Mock Mode",
        reason: "需要先验证会议交互流程，同时避免开发演示阶段采集真实音频。",
        additions: ["开始与停止控制", "角色化 Transcript", "自动滚动", "模拟会议转写", "手动客户输入"],
        benefits: ["可以独立验证完整 UI 链路", "减少测试过程中的隐私和授权风险"],
      },
      {
        date: "2026-05-22",
        version: "v0.1",
        title: "确定 Local-first 产品方向",
        reason: "销售会议涉及客户对话、业务资料和 API Key，产品需要从第一版就明确数据安全边界。",
        additions: ["会议授权提示", "本地优先原则", "三页信息架构", "语言配置草案", "数据存储边界"],
        benefits: ["明确了插件的隐私定位", "为后续音频、知识库和 AI 建议开发提供统一约束"],
      },
    ],
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { personalProfile } from "@/data/projects";

const skillGroups = [
  {
    title: "AI 核心与 Agent",
    items: [
      "LangChain",
      "Multi-Agent 协作",
      "RAG 全链路",
      "pgvector 向量检索",
      "混合搜索",
      "上下文压缩",
      "Prompt Engineering",
      "输出治理",
    ],
    summary: "能把非标数据、检索链路和多角色推演组织成可解释的 AI 应用流程。",
  },
  {
    title: "AI 工程化与质量",
    items: [
      "AI Eval Harness",
      "LLM-as-a-Judge",
      "离线逻辑回归",
      "确定性监控",
      "一致性评估",
      "自动化链路监控",
    ],
    summary: "关注模型输出是否稳定、可复现、可回归，而不是只停留在一次性 Demo。",
  },
  {
    title: "全栈与部署",
    items: [
      "Next.js",
      "React",
      "Node.js",
      "NestJS",
      "Python",
      "PostgreSQL",
      "Prisma",
      "SSE 流式交互",
      "Docker",
      "Nginx",
      "CI/CD",
    ],
    summary: "能从前端界面、后端服务、数据库到部署运维完成项目闭环。",
  },
];

export function Hero() {
  return (
    <section className="flex flex-col gap-8 pt-10">
      <div className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-signal/30 bg-cyan-signal/10 px-4 py-2 text-sm text-cyan-signal">
          <Sparkles size={16} />
          个人简介
        </div>
        <h1 className="mt-6 text-3xl font-semibold leading-tight text-white sm:text-5xl">
          {personalProfile.name}
        </h1>
        <p className="mt-4 text-lg leading-8 text-cyan-signal">{personalProfile.role}</p>
        <p className="mt-6 text-base leading-8 text-slate-300">{personalProfile.intro}</p>
        <p className="mt-4 text-base leading-8 text-slate-400">{personalProfile.personality}</p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-cyan-signal px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            查看项目
          </Link>
        </div>
      </div>

      <div className="glass-panel rounded-lg p-6 sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-400">
          Skills
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          {personalProfile.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-line bg-slate-950/50 px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {skillGroups.map((group) => (
            <section key={group.title} className="rounded-lg border border-line bg-white/[0.04] p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-white">{group.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{group.summary}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-signal/20 bg-cyan-signal/10 px-3 py-1 text-xs text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

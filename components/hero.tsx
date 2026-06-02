import Link from "next/link";
import { Sparkles } from "lucide-react";
import { personalProfile } from "@/data/projects";

export function Hero() {
  return (
    <section className="grid gap-8 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <div className="glass-panel rounded-lg p-6 sm:p-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-signal/30 bg-cyan-signal/10 px-4 py-2 text-sm text-cyan-signal">
          <Sparkles size={16} />
          个人简介
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-white sm:text-6xl">
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
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            ["项目展示", "把项目拆成背景、方案、价值和迭代"],
            ["工程实现", "关注可维护的数据结构和组件边界"],
            ["持续复盘", "用时间轴记录每次更新的原因和收益"],
          ].map(([title, text]) => (
            <div key={title} className="rounded-lg border border-line bg-white/[0.04] p-4">
              <h2 className="text-base font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

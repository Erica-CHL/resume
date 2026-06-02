import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { AvatarAssistant } from "@/components/avatar-assistant";
import { ImageCarousel } from "@/components/image-carousel";
import { InfoSection } from "@/components/info-section";
import { Timeline } from "@/components/timeline";
import { getProjectById, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-5 py-8 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-cyan-signal/60 hover:text-white"
        >
          <ArrowLeft size={16} />
          返回项目列表
        </Link>

        <section className="glass-panel rounded-lg p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-cyan-signal/30 bg-cyan-signal/10 px-3 py-1 text-xs text-cyan-signal">
              {project.status}
            </span>
            <span className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-slate-300">
              {project.role}
            </span>
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-signal">
            Project Detail
          </p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">{project.description}</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-slate-400">{project.background}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-slate-950/40 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">项目图片</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              这里展示项目截图或概念图，后续把图片放到 public/projects/ 并在配置里引用即可。
            </p>
          </div>
          <ImageCarousel images={project.images} title={project.title} />
        </section>

        <section className="space-y-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">项目时间轴</h2>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              你可以在 data/projects.ts 里自行填写日期、版本、事件简介、更新原因和收益；页面会默认按最新时间倒序显示。
            </p>
          </div>
          <div className="glass-panel rounded-lg p-5">
            <Timeline items={project.timeline} />
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <InfoSection title="核心功能" items={project.features} />
          <InfoSection title="技术方案" items={project.technicalPlan} />
          <InfoSection title="解决的问题" items={project.solvedProblems} />
          <InfoSection title="后续规划" items={project.roadmap} />
        </section>
      </div>
      <AvatarAssistant projectId={project.id} />
    </main>
  );
}

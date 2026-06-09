"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, AudioLines, Database, LockKeyhole, Route } from "lucide-react";
import { ImageCarousel } from "@/components/image-carousel";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  if (project.id === "sales-meeting-copilot") {
    return <SalesMeetingProjectCard project={project} />;
  }

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="glass-panel overflow-hidden rounded-lg"
    >
      <div className="flex flex-col gap-4 border-b border-line p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
            <span className="rounded-full border border-cyan-signal/35 bg-cyan-signal/10 px-3 py-1 text-xs text-cyan-signal">
              {project.status}
            </span>
          </div>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">{project.tagline}</p>
        </div>
        <Link
          href={`/projects/${project.id}`}
          className="inline-flex w-fit items-center gap-2 rounded-md bg-cyan-signal px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
        >
          查看项目
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <Link href={`/projects/${project.id}`} className="group block">
        <div className="relative aspect-[16/7] min-h-64 overflow-hidden bg-slate-950">
          <Image
            src={project.images[0]}
            alt={`${project.title} 预览图`}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>

      <div className="space-y-4 p-5">
        <p className="max-w-4xl text-sm leading-7 text-slate-300">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-slate-950/40 px-3 py-1 text-xs text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

function SalesMeetingProjectCard({ project }: ProjectCardProps) {
  const highlights = [
    {
      icon: AudioLines,
      title: "真实音频采集链路",
      detail: "基于 tabCapture、Offscreen Document 与 getUserMedia，持续管理标签页及麦克风音频流。",
    },
    {
      icon: Database,
      title: "本地轻量知识检索",
      detail: "使用 IndexedDB 保存产品与客户资料，以近期会话为 Query 完成关键词检索和上下文补充。",
    },
    {
      icon: LockKeyhole,
      title: "Local-first 隐私边界",
      detail: "知识资料、用户设置与 API Key 保存在浏览器本地，停止会议后主动释放音频资源。",
    },
  ];

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="glass-panel overflow-hidden rounded-lg"
    >
      <div className="border-b border-line p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
          <span className="rounded-full border border-amber-300/35 bg-amber-300/10 px-3 py-1 text-xs text-amber-200">
            V1 / MVP
          </span>
          <span className="rounded-full border border-cyan-signal/35 bg-cyan-signal/10 px-3 py-1 text-xs text-cyan-signal">
            Chrome Extension
          </span>
        </div>
        <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-400">
          面向跨语言 B2B 销售会议的 Chrome 实时辅助插件，在浏览器侧边栏中整合会议理解、知识检索与销售回复建议。
        </p>
      </div>

      <div className="grid items-stretch lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="border-b border-line p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <ImageCarousel images={project.images} title={project.title} fillHeight />
        </div>

        <div className="flex flex-col p-5 sm:p-6 lg:p-7">
          <div className="border-b border-line pb-5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-signal">
              <Route size={15} />
              产品定位
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              针对非英语母语销售在会议中难以及时理解客户诉求、检索产品资料并组织专业回复的问题，构建转写展示、内容翻译、客户意图识别、风险提示、本地知识检索和回复建议的一体化辅助流程。
            </p>
            <p className="mt-3 rounded-md border border-amber-300/20 bg-amber-300/5 px-4 py-3 text-sm leading-6 text-amber-100/80">
              当前版本已完成真实音频采集基础设施与完整业务流程演示；实时语音转写和真实大模型调用仍使用 Mock 服务验证。
            </p>
          </div>

          <div className="grid gap-4 border-b border-line py-5 sm:grid-cols-3">
            {highlights.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="min-w-0">
                <Icon className="mb-3 text-cyan-signal" size={19} />
                <h3 className="text-sm font-semibold text-white">{title}</h3>
                <p className="mt-2 text-xs leading-6 text-slate-400">{detail}</p>
              </div>
            ))}
          </div>

          <div className="py-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-lime-signal">未来展望</p>
            <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
              {project.roadmap.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-6 text-slate-300">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-lime-signal" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-line pt-5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-slate-950/40 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

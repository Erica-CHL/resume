"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
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

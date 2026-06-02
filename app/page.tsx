import { AvatarAssistant } from "@/components/avatar-assistant";
import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { SectionHeader } from "@/components/section-header";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-35" />
      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 py-8 sm:px-8 lg:px-10">
        <Hero />

        <section id="projects" className="space-y-7">
          <SectionHeader
            eyebrow="Projects"
            title="项目展示"
            description="每个项目都是一个独立板块：上方是项目名称和查看入口，中间展示项目图片，进入详情后可以查看轮播图和时间轴。"
          />
          <div className="space-y-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
      </div>
      <AvatarAssistant />
    </main>
  );
}

"use client";

import { motion } from "framer-motion";
import type { TimelineItem } from "@/data/projects";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  const orderedItems = [...items].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="max-h-[430px] overflow-y-auto pr-2 [scrollbar-color:#44d9e8_#111827] [scrollbar-width:thin]">
      <div className="relative space-y-5 border-l border-cyan-signal/25 pl-5">
        {orderedItems.map((item, index) => (
          <motion.article
            key={`${item.version}-${item.date}`}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.28, delay: index * 0.04 }}
            className="relative rounded-lg border border-line bg-slate-950/45 p-4"
          >
            <span className="absolute -left-[29px] top-5 h-3 w-3 rounded-full border-2 border-surface bg-cyan-signal shadow-glow" />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs text-slate-400">{item.date}</p>
                <h3 className="mt-1 text-base font-semibold text-white">
                  {item.version} · {item.title}
                </h3>
              </div>
              {index === 0 ? (
                <span className="rounded-full bg-lime-signal/15 px-3 py-1 text-xs text-lime-signal">
                  最新版本
                </span>
              ) : null}
            </div>
            <div className="mt-4 space-y-4 text-sm leading-6 text-slate-300">
              <div>
                <p className="font-medium text-slate-100">原因</p>
                <p className="mt-1 text-slate-400">{item.reason}</p>
              </div>
              <TimelineList title="新增" items={item.additions} />
              <TimelineList title="收益" items={item.benefits} />
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

function TimelineList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="font-medium text-slate-100">{title}</p>
      <ul className="mt-2 space-y-1">
        {items.map((item) => (
          <li key={item} className="text-slate-400">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

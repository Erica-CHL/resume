"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";
import { sendAvatarMessage } from "@/services/avatarClient";

type Message = {
  role: "assistant" | "user";
  content: string;
};

type AvatarAssistantProps = {
  projectId?: string;
};

export function AvatarAssistant({ projectId }: AvatarAssistantProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "你好，我是项目展示页的小助理，目前正在开发中。",
    },
  ]);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = input.trim();

    if (!message || loading) {
      return;
    }

    setInput("");
    setMessages((current) => [...current, { role: "user", content: message }]);
    setLoading(true);

    try {
      const response = await sendAvatarMessage({ message, projectId });
      setMessages((current) => [...current, { role: "assistant", content: response.reply }]);
    } catch {
      setMessages((current) => [
        ...current,
        { role: "assistant", content: "小助理接口暂时不可用，请稍后再试。" },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="mb-4 flex h-[520px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-cyan-signal/30 bg-slate-950/92 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-cyan-signal/15 p-2 text-cyan-signal">
                  <Bot size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">数字分身</p>
                  <p className="text-xs text-slate-400">项目顾问入口</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="关闭聊天窗口"
                className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <p
                    className={`max-w-[82%] rounded-lg px-3 py-2 text-sm leading-6 ${
                      message.role === "user"
                        ? "bg-cyan-signal text-slate-950"
                        : "border border-line bg-white/5 text-slate-200"
                    }`}
                  >
                    {message.content}
                  </p>
                </div>
              ))}
              {loading ? <p className="text-xs text-slate-500">正在生成回复...</p> : null}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2 border-t border-line p-3">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="问问这个项目..."
                className="min-w-0 flex-1 rounded-md border border-line bg-slate-900 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-signal"
              />
              <button
                type="submit"
                aria-label="发送消息"
                className="rounded-md bg-cyan-signal p-2.5 text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                disabled={loading}
              >
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full border border-cyan-signal/40 bg-slate-950/90 px-4 py-3 text-sm font-semibold text-white shadow-glow backdrop-blur transition hover:border-cyan-signal"
      >
        <Bot size={19} className="text-cyan-signal" />
        AI 项目顾问
      </button>
    </div>
  );
}

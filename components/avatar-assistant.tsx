"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, RotateCcw, Send, X } from "lucide-react";
import { FormEvent, useState } from "react";
import {
  sendAvatarMessage,
  type AvatarSource,
} from "@/services/avatarClient";

type Message = {
  role: "assistant" | "user";
  content: string;
  retrievalStatus?: string;
  sources?: AvatarSource[];
};

type AvatarAssistantProps = {
  projectId?: string;
};

const initialMessage: Message = {
  role: "assistant",
  content: "你好，我是 Casey 的项目顾问。你可以问我项目定位、核心功能、技术方案和开发过程。",
};

export function AvatarAssistant({ projectId }: AvatarAssistantProps) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [loading, setLoading] = useState(false);

  function startNewConversation() {
    setInput("");
    setMessages([initialMessage]);
  }

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
      const response = await sendAvatarMessage({
        message,
        projectId,
      });

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: response.reply,
          retrievalStatus: response.retrievalStatus,
          sources: response.sources,
        },
      ]);
    } catch {
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: "项目问答服务暂时不可用，请稍后重试。",
          retrievalStatus: "SERVICE_UNAVAILABLE",
        },
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
            className="mb-4 flex h-[560px] w-[calc(100vw-2.5rem)] max-w-sm flex-col overflow-hidden rounded-lg border border-cyan-signal/30 bg-slate-950/92 shadow-glow backdrop-blur-xl"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <div className="flex items-center gap-3">
                <span className="rounded-md bg-cyan-signal/15 p-2 text-cyan-signal">
                  <Bot size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">项目顾问</p>
                  <p className="text-xs text-slate-400">本地项目知识问答</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={startNewConversation}
                  aria-label="新建对话"
                  title="新建对话"
                  className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <RotateCcw size={17} />
                </button>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="关闭聊天窗口"
                  className="rounded-md p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="flex-1 space-y-3 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className="max-w-[86%]">
                    <p
                      className={`rounded-lg px-3 py-2 text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-cyan-signal text-slate-950"
                          : "border border-line bg-white/5 text-slate-200"
                      }`}
                    >
                      {message.content}
                    </p>
                    {message.role === "assistant" && message.sources?.length ? (
                      <p className="mt-1 px-1 text-xs text-slate-500">
                        参考资料：{message.sources.map((source) => source.title).join("、")}
                      </p>
                    ) : null}
                    {message.retrievalStatus === "NO_RELEVANT_KNOWLEDGE" ? (
                      <p className="mt-1 px-1 text-xs text-amber-300/80">未匹配到相关项目资料</p>
                    ) : null}
                  </div>
                </div>
              ))}
              {loading ? <p className="text-xs text-slate-500">正在查询本地知识库...</p> : null}
            </div>

            <form onSubmit={handleSubmit} className="border-t border-line p-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {(projectId
                  ? ["这个项目是做什么的？", "使用了哪些技术？", "开发过程是怎样的？"]
                  : ["有哪些项目？", "Casey 擅长什么？"]
                ).map((question) => (
                  <button
                    key={question}
                    type="button"
                    onClick={() => setInput(question)}
                    className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-slate-400 transition hover:border-cyan-signal/50 hover:text-slate-200"
                  >
                    {question}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="问问这个项目..."
                  maxLength={projectId ? 260 : 300}
                  className="min-w-0 flex-1 rounded-md border border-line bg-slate-900 px-3 py-2 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-signal"
                />
                <button
                  type="submit"
                  aria-label="发送消息"
                  className="rounded-md bg-cyan-signal p-2.5 text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                  disabled={loading || !input.trim()}
                >
                  <Send size={18} />
                </button>
              </div>
              <p className="mt-2 text-right text-xs text-slate-600">
                {input.length}/{projectId ? 260 : 300}
              </p>
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

"use client";
import { useMemo, useRef, useState } from "react";
import Link from "next/link";

type Message = { id: number; role: "assistant" | "user"; content: string };

const ALL_MODELS = [
  { id: "gpt-4o", name: "GPT-4o" },
  { id: "gpt-4.1-mini", name: "GPT-4.1 Mini" },
  { id: "llama-3.1-70b", name: "Llama 3.1 70B" },
  { id: "mistral-large", name: "Mistral Large" },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "assistant", content: "Hello, I’m ClarifyAI! How can I help you today?" },
    { id: 2, role: "user", content: "Give me tips to study biology." },
    { id: 3, role: "assistant", content: "Start with key concepts, make flashcards, and test yourself!" },
  ]);
  const [input, setInput] = useState("");
  const [selectedModelIds, setSelectedModelIds] = useState<string[]>(["gpt-4o"]);
  const [openModels, setOpenModels] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const history = useMemo(
    () => [
      "Photosynthesis summary",
      "Explain Newton's laws",
      "What is mitosis?",
      "Derive quadratic formula",
      "Best study techniques",
    ],
    []
  );

  const onSend = () => {
    if (!input.trim()) return;
    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;
    setMessages([...messages, { id: nextId, role: "user", content: input }]);
    setInput("");
  };

  const toggleModel = (id: string) => {
    setSelectedModelIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  return (
    <main className="flex h-[100dvh]">
      {/* Left: History (ChatGPT-like sidebar) */}
      <aside className="hidden w-64 shrink-0 border-r border-white/10 bg-black/40 p-4 md:block">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-zinc-200">History</h2>
          <Link href="/dashboard" className="text-xs text-zinc-400 hover:text-white">Dashboard</Link>
        </div>
        <div className="space-y-2">
          {history.map((h, i) => (
            <button key={i} className="w-full truncate rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-left text-xs text-zinc-300 hover:bg-white/[0.07]">
              {h}
            </button>
          ))}
        </div>
      </aside>

      {/* Right: Chat area */}
      <section className="flex w-full flex-1 flex-col">
        {/* Top bar with model selector */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-black/40 px-4 py-3 backdrop-blur">
          <Link href="/dashboard" className="text-sm text-zinc-300 hover:text-white">← Back to Dashboard</Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenModels((v) => !v)}
              className="glow rounded-xl border border-white/15 bg-white/[0.05] px-3 py-2 text-xs text-zinc-200 hover:bg-white/[0.09]"
            >
              {selectedModelIds.length > 0 ? `${selectedModelIds.length} model${selectedModelIds.length > 1 ? "s" : ""} selected` : "Select models"}
            </button>
            {openModels && (
              <div className="absolute right-0 z-20 mt-2 w-56 rounded-xl border border-white/10 bg-black/80 p-2 shadow-xl backdrop-blur">
                {ALL_MODELS.map((m) => (
                  <label key={m.id} className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-2 text-xs text-zinc-200 hover:bg-white/[0.06]">
                    <input
                      type="checkbox"
                      checked={selectedModelIds.includes(m.id)}
                      onChange={() => toggleModel(m.id)}
                      className="h-3.5 w-3.5 accent-blue-600"
                    />
                    <span>{m.name}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Messages list (centered column, ChatGPT-like) */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-3xl px-4">
            {messages.map((m, idx) => (
              <div key={m.id} className={
                `flex gap-4 py-6 ${idx % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"}`
              }>
                {/* Avatar */}
                <div className="mt-1 h-8 w-8 shrink-0 rounded-full border border-white/10 bg-white/[0.06] text-center text-xs leading-8 text-white">
                  {m.role === "assistant" ? "AI" : "You"}
                </div>
                {/* Bubble/content */}
                <div className="prose prose-invert max-w-none text-sm text-zinc-100">
                  {m.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Composer fixed at bottom - wider and slightly elevated */}
        <div className="sticky bottom-0 z-10 border-t border-white/10 bg-black/40 px-2 py-4 backdrop-blur">
          <div className="mx-auto flex w-full max-w-4xl items-end gap-3">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              rows={1}
              placeholder={
                selectedModelIds.length > 0
                  ? `Message ClarifyAI (${selectedModelIds.length} model${selectedModelIds.length > 1 ? "s" : ""})`
                  : "Select at least one model to send"
              }
              className="max-h-40 min-h-[48px] flex-1 resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder-zinc-400 outline-none focus:border-blue-500/60 shadow-lg"
            />
            <button
              onClick={onSend}
              className="glow rounded-2xl bg-[var(--accent)] px-5 py-4 text-sm font-semibold text-white hover:bg-blue-500/90 shadow-lg"
            >
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}



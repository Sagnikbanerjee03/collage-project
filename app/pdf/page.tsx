import Link from "next/link";
import GlowButton from "../components/GlowButton";

export default function PdfAssistantPage() {
  return (
    <main className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <Link href="/dashboard" className="text-sm text-zinc-300 hover:text-white">← Back to Dashboard</Link>

        <h1 className="mt-4 text-2xl font-semibold text-white">PDF Assistant</h1>
        <p className="mt-1 text-zinc-400">Upload a PDF and take notes side-by-side</p>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center justify-between">
              <GlowButton variant="secondary" className="">Upload PDF</GlowButton>
            </div>
            <textarea className="mt-4 h-[420px] w-full resize-none rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white placeholder-zinc-400 outline-none focus:border-blue-500/60" placeholder="Write your notes here..." />
          </div>

          <div className="flex h-[520px] items-center justify-center rounded-2xl border border-dashed border-white/15 bg-zinc-900/40 text-zinc-400">
            Mock PDF Viewer
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <GlowButton>Ask AI</GlowButton>
          <GlowButton href="/dashboard" variant="secondary">Back</GlowButton>
        </div>
      </div>
    </main>
  );
}



import Link from "next/link";
import GlowButton from "../components/GlowButton";
import TopBar from "../components/TopBar";

export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold text-white">Welcome to ClarifyAI Dashboard</h1>
        <p className="mt-1 text-zinc-400">Choose a tool to get started</p>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Link href="/pdf" className="group flex min-h-[18rem] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-12 transition hover:bg-white/[0.06]">
            <div className="text-6xl">📄</div>
            <h3 className="mt-5 text-3xl font-semibold text-white">PDF Assistant</h3>
            <p className="mt-3 text-lg text-zinc-300">Upload PDFs and take notes side-by-side</p>
          </Link>

          <Link href="/chat" className="group flex min-h-[18rem] flex-col justify-center rounded-3xl border border-white/10 bg-white/[0.03] p-12 transition hover:bg-white/[0.06]">
            <div className="text-6xl">💬</div>
            <h3 className="mt-5 text-3xl font-semibold text-white">Chatbot</h3>
            <p className="mt-3 text-lg text-zinc-300">Chat with ClarifyAI for quick answers</p>
          </Link>
        </div>

        <div className="mt-10">
          <GlowButton href="/" variant="secondary">Back to Home</GlowButton>
        </div>
      </section>
    </main>
  );
}



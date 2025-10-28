import GlowButton from "./components/GlowButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-600/30 via-indigo-700/20 to-transparent" />
      <section className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">ClarifyAI</h1>
        <p className="mt-4 text-lg text-zinc-300">Your Free Study Assistant</p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <GlowButton href="/login" className="w-40">Login</GlowButton>
          <GlowButton href="/signup" variant="secondary" className="w-40">Sign Up</GlowButton>
        </div>
      </section>
    </main>
  );
}

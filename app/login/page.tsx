"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import GlowButton from "../components/GlowButton";

export default function LoginPage() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/30 p-6 shadow-xl backdrop-blur">
        <h1 className="text-2xl font-semibold text-white">Login</h1>
        <p className="mt-1 text-sm text-zinc-400">Welcome back to ClarifyAI</p>

        <form className="mt-6 space-y-4" onSubmit={(e) => { e.preventDefault(); router.push("/dashboard"); }}>
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Phone Number</label>
            <input type="tel" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none focus:border-blue-500/60" placeholder="Enter your phone number" />
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Password</label>
            <input type="password" className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-400 outline-none focus:border-blue-500/60" placeholder="••••••••" />
          </div>
          <GlowButton className="w-full" onClick={() => router.push("/dashboard")}>Login</GlowButton>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-400">
          Don’t have an account? <Link href="/signup" className="text-blue-400 hover:text-blue-300">Sign Up</Link>
        </p>
      </div>
    </main>
  );
}



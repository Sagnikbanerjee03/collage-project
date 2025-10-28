import Link from "next/link";

export default function TopBar() {
  return (
    <header className="w-full border-b border-white/10 bg-black/20 backdrop-blur supports-[backdrop-filter]:bg-black/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-sm font-semibold tracking-wide text-white">
          ClarifyAI
        </Link>
        <nav className="flex items-center gap-3">
          <Link href="/" className="text-xs text-zinc-300 hover:text-white transition-colors">Logout</Link>
        </nav>
      </div>
    </header>
  );
}



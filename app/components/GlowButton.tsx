"use client";
import React from "react";
import Link from "next/link";

type GlowButtonProps = {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export default function GlowButton({ href, onClick, children, variant = "primary", className = "" }: GlowButtonProps) {
  const base = "glow inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-colors";
  const styles = variant === "primary"
    ? "bg-[var(--accent)] text-white hover:bg-blue-500/90"
    : "bg-white/10 text-white hover:bg-white/20";

  const content = (
    <span className={`${base} ${styles} ${className}`}>
      {children}
    </span>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }
  return (
    <button onClick={onClick} className="appearance-none">
      {content}
    </button>
  );
}



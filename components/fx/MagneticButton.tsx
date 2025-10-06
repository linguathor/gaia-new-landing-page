"use client";
import { useRef } from "react";
import Link from "next/link";

export default function MagneticButton({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  return (
    <Link
      href={href}
      role="button"
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
        const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
        el.style.transform = `translate(${dx * 4}px, ${dy * 4}px)`;
      }}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0,0)";
      }}
      className="btn-primary text-xl px-10 py-5 will-change-transform min-h-[56px] min-w-[200px] relative overflow-hidden group flex items-center justify-center"
    >
      <span className="relative z-10 flex items-center justify-center">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
    </Link>
  );
}

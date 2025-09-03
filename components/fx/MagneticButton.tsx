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
      className="inline-flex items-center justify-center rounded-md border border-amber-600 bg-amber-600 px-6 py-3 font-semibold text-white shadow-sm transition will-change-transform hover:bg-amber-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}

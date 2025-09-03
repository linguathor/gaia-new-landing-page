"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function StickyCta({ href, label }: { href: string; label: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll(); window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 block sm:hidden">
      <div className="mx-auto max-w-screen-sm">
        <div className="m-3 rounded-lg bg-amber-600 shadow-lg">
          <Link
            href={href}
            role="button"
            aria-label={label}
            className="block px-5 py-3 text-center font-semibold text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {label}
          </Link>
        </div>
      </div>
    </div>
  );
}

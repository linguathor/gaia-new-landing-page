"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Parallax({
  children,
  yFrom = -40,
  yTo = 40
}: {
  children: React.ReactNode;
  yFrom?: number;
  yTo?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [yFrom, yTo]);
  return (
    <div ref={ref} className="relative">
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

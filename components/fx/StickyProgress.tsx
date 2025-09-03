"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function StickyProgress() {
  const { scrollYProgress } = useScroll({ offset: ["start start", "end end"] });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 18,
    mass: 0.3
  });
  return (
    <div className="sticky top-0 z-40 h-1 w-full bg-transparent">
      <motion.div
        style={{ scaleX }}
        className="h-1 origin-left bg-amber-600"
      />
    </div>
  );
}

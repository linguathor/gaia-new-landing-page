// components/Section.tsx
import { ReactNode } from "react";

type Variant = "plain" | "muted" | "alt" | "pattern" | "band";

export default function Section({
  id,
  titleId,
  variant = "plain",
  center = false,
  children,
}: {
  id?: string;
  titleId: string;        // pass the <h2> id for aria-labelledby
  variant?: Variant;
  center?: boolean;
  children: ReactNode;
}) {
  const base = "px-4 py-12 sm:py-16";
  const bg =
    variant === "plain"   ? "bg-white" :
    variant === "muted"   ? "bg-gray-50" :
    variant === "alt"     ? "bg-amber-50" :
    variant === "band"    ? "bg-gradient-to-r from-amber-50 via-white to-amber-50" :
    // pattern
    "bg-white [background-image:radial-gradient(theme(colors.gray.200)_1px,transparent_1px)] [background-size:16px_16px]";

  return (
    <section id={id} aria-labelledby={titleId} className={bg}>
      <div className={`mx-auto max-w-screen-xl ${base} ${center ? "text-center" : ""}`}>
        {children}
      </div>
    </section>
  );
}

// components/Split.tsx
import { ReactNode } from "react";

export default function Split({
  reverse = false,
  kicker,
  title,
  summary,
  children,
  media
}: {
  reverse?: boolean;
  kicker?: string;
  title: string;
  summary?: string;
  children: ReactNode;     // text content (lists, paragraphs)
  media: ReactNode;        // <Image>, <video>, etc.
}) {
  return (
    <div className={`grid gap-8 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}>
      <div>
        {kicker && <div className="text-sm font-semibold text-amber-700">{kicker}</div>}
        <h2 id={title.replace(/\s+/g, "-").toLowerCase()} className="text-2xl font-bold sm:text-3xl">{title}</h2>
        {summary && <p className="mt-2 text-gray-700">{summary}</p>}
        <div className="mt-4 text-gray-800">{children}</div>
      </div>
      <div>{media}</div>
    </div>
  );
}

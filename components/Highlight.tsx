// components/Highlight.tsx
import { ReactNode } from "react";

export default function Highlight({ children }: { children: ReactNode }) {
  return (
    <span className="bg-amber-200/60 px-1 -mx-1 rounded [box-decoration-break:clone]">
      {children}
    </span>
  );
}

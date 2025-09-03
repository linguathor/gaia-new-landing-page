export default function Marquee({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden">
      <div
        className="flex gap-6 whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 18s linear infinite" }}
      >
        {/* duplicate content so it loops seamlessly */}
        <div className="flex gap-6">{children}</div>
        <div className="flex gap-6" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

export default function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative group">
      <span className="absolute inset-0 rounded bg-amber-200/70 [transform-origin:left] scale-x-0 group-hover:scale-x-100 group-focus-within:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)]"></span>
      <span className="relative font-semibold">{children}</span>
    </span>
  );
}

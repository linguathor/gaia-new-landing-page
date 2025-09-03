// components/IconList.tsx
function Check() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M9 16.17l-3.88-3.88-1.41 1.41L9 19 20.29 7.71 18.88 6.3z"/>
    </svg>
  );
}

export default function IconList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2 text-gray-800">
          <span className="mt-0.5 text-amber-600" aria-hidden><Check /></span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

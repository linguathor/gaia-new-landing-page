// components/ProgressMeter.tsx
import { academy } from '../content/germanAiAcademy';

function Arrow({ up }: { up: boolean }) {
  return (
    <svg className={`h-4 w-4 ${up ? 'text-emerald-600' : 'text-rose-600'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      {up ? <path d="M12 4l6 6h-4v8H10v-8H6l6-6z" /> : <path d="M12 20l-6-6h4V6h4v8h4l-6 6z" />}
    </svg>
  );
}

function MetricCard({
  label, value, unit, help
}: { label: string; value: number; unit?: string; help?: string }) {
  const isNegative = value < 0;
  const showArrow = label.toLowerCase().includes('füllwörter');
  const display = `${Math.abs(value).toLocaleString('de-DE')}${unit ?? ''}`;
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="text-sm font-medium text-gray-700">{label}</div>
      <div className="mt-1 flex items-center gap-2">
        {showArrow && <Arrow up={isNegative} />}
        <div className="text-2xl font-bold tracking-tight">
          {display}
        </div>
      </div>
      {help ? <div className="mt-1 text-xs text-gray-500">{help}</div> : null}
    </div>
  );
}

export default function ProgressMeter() {
  const m = (academy.progress as any).metrics ?? [];
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-10" id="progress">
      <h2 className="text-2xl font-bold sm:text-3xl">{academy.progress.title}</h2>
      <p className="mt-1 text-gray-700">{academy.progress.summary}</p>

      {/* Metric chips */}
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        {m.slice(0, 3).map((mm: any) => (
          <MetricCard key={mm.key} label={mm.label} value={mm.value} unit={mm.unit} help={mm.help} />
        ))}
      </div>

      {/* Goal progress bar */}
      <div className="mt-6 rounded-xl border bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Lernziel-Fortschritt</span>
          <span className="text-sm text-gray-600">{(academy.progress as any).percentage}%</span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-gray-200" aria-hidden>
          <div
            className="h-2 rounded-full bg-[#1183B7] transition-all duration-500"
            style={{ width: `${(academy.progress as any).percentage}%` }}
          />
        </div>
        <p className="mt-3 text-sm text-gray-600">
          {(academy.progress as any).guarantee} <a href="#garantie" className="underline">Mehr erfahren</a>.
        </p>
      </div>
    </div>
  );
}

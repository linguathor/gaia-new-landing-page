export default function BlobBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-16 -left-8 h-56 w-56 rounded-full bg-amber-300/40 blur-3xl animate-[blob_10s_infinite]"></div>
      <div className="absolute top-24 -right-10 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl animate-[blob_12s_infinite]"></div>
    </div>
  );
}

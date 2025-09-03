// lib/analytics.ts
export function track(event: string, data?: Record<string, any>) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("gaia", { detail: { event, ...data } }));
}

// app/actions/optin.ts
"use server";

type State = { ok?: boolean; error?: string };

export async function optin(prev: State, formData: FormData): Promise<State> {
  try {
    // Honeypot: ignore bots
    const trap = (formData.get("website") as string) || "";
    if (trap.trim()) return { ok: true };

    const email = (formData.get("email") as string)?.trim();
    const channel = (formData.get("channel") as string)?.trim() || "email";

    if (!email) return { error: "E-Mail fehlt." };

    const payload = { type: "accountability-optin", email, channel, ts: Date.now() };

    const url = process.env.OPTIN_WEBHOOK_URL;
    if (url) {
      await fetch(url, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload)
      });
    } else {
      console.log("[OPTIN]", payload);
    }
    return { ok: true };
  } catch {
    return { error: "Unerwarteter Fehler. Bitte erneut versuchen." };
  }
}

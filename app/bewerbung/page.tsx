// app/bewerbung/page.tsx
import { Metadata } from "next";
import EliteApplyForm from "@/components/EliteApplyForm";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Elite-Mastermind Bewerbung – German AI Academy",
  description: "Bewirb dich für die Elite-Mastermind (4 Monate). Kleine Gruppen, 3×/Woche Konversation, 1:1-Strategie.",
  keywords: ["Elite-Mastermind", "Deutsch lernen", "KI Sprachlernen", "German AI Academy"],
  openGraph: {
    title: "Elite-Mastermind Bewerbung – German AI Academy",
    description: "Bewirb dich für die Elite-Mastermind (4 Monate). Kleine Gruppen, 3×/Woche Konversation, 1:1-Strategie.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elite-Mastermind Bewerbung – German AI Academy",
    description: "Bewirb dich für die Elite-Mastermind (4 Monate). Kleine Gruppen, 3×/Woche Konversation, 1:1-Strategie.",
  },
};

async function submit(fd: FormData) {
  "use server";

  // Spam honeypot
  if ((fd.get("company") as string)?.trim()) {
    redirect("/bewerbung?ok=1"); // silently ignore bots
  }

  // Collect fields
  const data = Object.fromEntries(fd.entries());

  // TODO: integrate with your CRM/email.
  // For now we just log on the server and redirect.
  console.log("Elite application:", data);

  // Optional: send to webhook if set
  const webhook = process.env.ELITE_WEBHOOK_URL;
  if (webhook) {
    await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ type: "elite-application", data })
    }).catch(() => {});
  }

  redirect("/bewerbung?ok=1");
}

export default function BewerbungsPage({
  searchParams
}: {
  searchParams: { ok?: string };
}) {
  const ok = searchParams?.ok === "1";
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-screen-md px-4 py-12 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Elite-Mastermind – Bewerbung
        </h1>
        <p className="mt-3 max-w-2xl text-gray-700">
          4 Monate. Mini-Gruppen (max. 6). 3×/Woche Konversation. Zwei 1:1-Sessions. Persönlicher Chat.
        </p>

        {ok ? (
          <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-4 text-green-900">
            <p className="font-semibold">Danke!</p>
            <p className="mt-1 text-sm">
              Deine Bewerbung ist eingegangen. Wir melden uns in Kürze.
            </p>
          </div>
        ) : (
          <div className="mt-8 rounded-xl border bg-gray-50 p-6">
            <EliteApplyForm action={submit} />
          </div>
        )}
      </section>
    </main>
  );
}

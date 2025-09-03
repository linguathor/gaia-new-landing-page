import { Metadata } from 'next';
import { academy } from '../content/germanAiAcademy';

export function buildMetadata(): Metadata {
  const title = academy.hero.h1;
  const description = academy.hero.sub;
  const url = 'https://gaia-new-landing-page.vercel.app/german-ai-academy';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'German AI Academy',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@germanaiacademy',
    },
    keywords: ['Deutsch lernen', 'C1 Deutsch', 'KI Sprachlernen', 'German AI Academy'],
    authors: [{ name: 'German AI Academy' }],
    creator: 'German AI Academy',
    publisher: 'German AI Academy',
  };
}

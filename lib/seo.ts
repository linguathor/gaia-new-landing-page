import { Metadata } from 'next';
import { academy } from '../content/germanAiAcademy';

export function buildMetadata(): Metadata {
  const title = academy.hero.h1;
  const description = academy.hero.sub;
  const url = 'https://gaia-new-landing-page.vercel.app/german-ai-academy';
  // TODO: Create a proper 1200x630 og-image.jpg for social media sharing
  const ogImage = 'https://gaia-new-landing-page.vercel.app/images/David-Flemming.jpg';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
      siteName: 'German AI Academy',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'German AI Academy - 4-monatiger C1-Fluency Sprint',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: '@germanaiacademy',
      images: [ogImage],
    },
    keywords: ['Deutsch lernen', 'C1 Deutsch', 'KI Sprachlernen', 'German AI Academy'],
    authors: [{ name: 'German AI Academy' }],
    creator: 'German AI Academy',
    publisher: 'German AI Academy',
  };
}

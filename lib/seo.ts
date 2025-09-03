import { Metadata } from 'next';

export function generateSEO(title: string, description: string, url: string): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'German AI Academy',
  description: 'Dein schnellster Weg zu sicherem C1-Deutsch in 4 Monaten',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}

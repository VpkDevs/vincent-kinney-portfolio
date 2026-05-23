import type { Metadata } from 'next'
import './globals.css'

const siteUrl = process.env.GITHUB_PAGES === 'true'
  ? 'https://vpkdevs.github.io/vincent-kinney-portfolio/'
  : 'https://vincentkinney.dev'

export const metadata: Metadata = {
  title: 'Vincent Kinney | AI-Native Product Architect & Founder',
  description: 'I build AI-native software systems and turn a large project surface into public products, services, and proof.',
  openGraph: {
    title: 'Vincent Kinney',
    description: 'AI-Native Product Architect & Founder',
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vincent Kinney',
    description: 'AI-Native Product Architect & Founder',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-surface text-text">
        {children}
      </body>
    </html>
  )
}

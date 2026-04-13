import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bay Area Driveway Connect | Contractor Matching Service',
  description: 'Connect with trusted local contractors for driveway, paver, concrete, and outdoor surface projects across the Bay Area.',
  keywords: 'driveway contractors, paver installation, concrete work, Bay Area contractors, outdoor surfaces',
  openGraph: {
    title: 'Bay Area Driveway Connect',
    description: 'Find trusted driveway and outdoor contractors across the Bay Area',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Love Letter',
  description: 'A romantic Valentine gift',
  generator: 'v0.app',
  openGraph: {
    title: 'Love Letter',
    description: 'A romantic Valentine gift',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-gradient-romantic min-h-screen">{children}</body>
    </html>
  )
}

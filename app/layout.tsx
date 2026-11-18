import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Keydex: Keyboard, Shortcuts — Never Switch Apps Again',
  description:
    'Keydex is a private, 100% offline keyboard designed for speed. Instant shortcuts for text, saved snippets, photos, PDFs, contacts, and billing directly where you type.',
  metadataBase: new URL('https://keydex-landing.vercel.app'),
  applicationName: 'Keydex',
  authors: [{ name: 'Nehal Nadaf', url: 'https://keydex-landing.vercel.app' }],
  keywords: [
    'Keydex',
    'shortcuts keyboard',
    'offline keyboard',
    'text expander',
    'photo shortcuts',
    'pdf keyboard',
    'private keyboard',
    'instant billing',
    'upi keyboard',
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Keydex',
  },
  icons: {
    icon: '/icons/android-chrome-192x192.png',
    apple: '/icons/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Keydex: Keyboard, Shortcuts — Never Switch Apps Again',
    description: 'Instant shortcuts for text, photos, PDFs, contacts, and billing directly where you type. 100% offline.',
    url: 'https://keydex-landing.vercel.app',
    siteName: 'Keydex',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Keydex — never switch apps again',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keydex: Keyboard, Shortcuts — Never Switch Apps Again',
    description: 'Instant shortcuts for text, photos, PDFs, contacts, and billing directly where you type. 100% offline.',
    images: ['/og-image.jpg'],
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#F8FAFC]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen text-shark antialiased selection:bg-accent/20 selection:text-accent font-sans">
        {children}
      </body>
    </html>
  );
}

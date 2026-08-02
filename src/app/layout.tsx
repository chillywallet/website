import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SITE_URL } from '@/lib/site';
import { TAGLINE } from '@/content/copy';

/*
 * Both faces are vendored from the wallet (extension/fonts/) and self-hosted.
 * Not Google Fonts: this page's whole claim is that it makes no third-party
 * requests, and a font CDN would leak every visitor's IP on the way to reading
 * the privacy policy. next/font/local also fingerprints, preloads, and sets
 * fallback metrics so the headline does not shift on load.
 */
const figtree = localFont({
    src: './fonts/figtree-var.woff2',
    variable: '--font-figtree',
    weight: '300 900',
    display: 'swap',
});

const spaceGrotesk = localFont({
    src: './fonts/space-grotesk-var.woff2',
    variable: '--font-space-grotesk',
    weight: '300 700',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: 'Chilly Wallet — a cool multi-chain crypto wallet',
        template: '%s · Chilly Wallet',
    },
    description: TAGLINE,
    applicationName: 'Chilly Wallet',
    alternates: { canonical: '/' },
    openGraph: {
        type: 'website',
        url: SITE_URL,
        siteName: 'Chilly Wallet',
        title: 'Chilly Wallet — a cool multi-chain crypto wallet',
        description: TAGLINE,
        images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Chilly Wallet' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Chilly Wallet',
        description: TAGLINE,
        images: ['/og.png'],
    },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className={`${figtree.variable} ${spaceGrotesk.variable} h-full`}>
            <body className="bg-darker text-ice flex min-h-full flex-col font-sans antialiased">
                {children}
            </body>
        </html>
    );
}

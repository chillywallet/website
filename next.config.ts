import type { NextConfig } from 'next';

/*
 * Deliberately NOT `output: 'export'`. On Vercel the default build already
 * prerenders both routes to static HTML at the edge, and export would forfeit
 * headers() below. Nothing here uses a server-only feature, so switching to
 * export later stays a one-line change.
 *
 * Deliberately NO `trailingSlash`. It would turn /privacy into a 308 to
 * /privacy/, and the Chrome Web Store's reachability check on that exact URL is
 * the one place not to add a redirect hop.
 */
const nextConfig: NextConfig = {
    reactStrictMode: true,
    poweredByHeader: false,
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    { key: 'X-Content-Type-Options', value: 'nosniff' },
                    { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
                    { key: 'X-Frame-Options', value: 'DENY' },
                    {
                        key: 'Permissions-Policy',
                        value: 'camera=(), microphone=(), geolocation=(), payment=()',
                    },
                    {
                        // The site loads nothing third-party, so this can stay tight.
                        // 'unsafe-inline' on script-src is what Next's bootstrap needs
                        // without nonce middleware.
                        key: 'Content-Security-Policy',
                        value: [
                            "default-src 'self'",
                            "img-src 'self' data:",
                            "style-src 'self' 'unsafe-inline'",
                            "script-src 'self' 'unsafe-inline'",
                            "font-src 'self'",
                            "connect-src 'self'",
                            "frame-ancestors 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                        ].join('; '),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;

import Link from 'next/link';
import { ChillyWordmark } from '@/components/Brand';
import { CHROME_STORE_URL, GITHUB_URL, SUPPORT_EMAIL } from '@/lib/site';

/**
 * Pill buttons, 48px tall, matching the wallet's `.btn` spec.
 *
 * Coral is reserved for the primary call to action and appears exactly once per
 * page. Everything else is the bordered ghost variant.
 */
export function PillLink({
    href,
    variant = 'ghost',
    children,
}: {
    href: string;
    variant?: 'primary' | 'ghost';
    children: React.ReactNode;
}) {
    const base =
        'inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-colors';
    const styles =
        variant === 'primary'
            ? 'bg-coral text-white hover:bg-coraldark'
            : 'border border-darkline text-ice hover:bg-header';

    return (
        <Link href={href} className={`${base} ${styles}`}>
            {children}
        </Link>
    );
}

export function FrostCard({
    className = '',
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
    /* Quiet raised panel with a hairline and no drop shadow — the wallet's rule. */
    return (
        <div className={`border-darkline/60 bg-dark rounded-2xl border p-6 ${className}`}>
            {children}
        </div>
    );
}

export function SiteHeader() {
    return (
        <header className="border-darkline/60 bg-darker/80 sticky top-0 z-50 border-b backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" aria-label="Chilly Wallet home">
                    <ChillyWordmark />
                </Link>
                <nav className="flex items-center gap-6 text-sm">
                    <Link href="/privacy" className="text-ice/70 hover:text-ice transition-colors">
                        Privacy
                    </Link>
                    <a
                        href={GITHUB_URL}
                        className="text-ice/70 hover:text-ice transition-colors"
                        rel="noreferrer noopener"
                        target="_blank">
                        Source
                    </a>
                </nav>
            </div>
        </header>
    );
}

export function SiteFooter() {
    return (
        <footer className="border-darkline/60 mt-24 border-t">
            <div className="mx-auto max-w-6xl px-6 py-12">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <ChillyWordmark size={28} />
                        <p className="text-ice/50 mt-3 max-w-sm text-sm">
                            A self-custodial crypto wallet for the EVM ecosystem. No account, no
                            backend, no tracking.
                        </p>
                    </div>
                    <nav className="flex flex-col gap-2 text-sm">
                        <Link href="/privacy" className="text-ice/70 hover:text-ice">
                            Privacy policy
                        </Link>
                        <a
                            href={GITHUB_URL}
                            className="text-ice/70 hover:text-ice"
                            rel="noreferrer noopener"
                            target="_blank">
                            Source on GitHub
                        </a>
                        <a href={`mailto:${SUPPORT_EMAIL}`} className="text-ice/70 hover:text-ice">
                            {SUPPORT_EMAIL}
                        </a>
                        {CHROME_STORE_URL && (
                            <a
                                href={CHROME_STORE_URL}
                                className="text-ice/70 hover:text-ice"
                                rel="noreferrer noopener"
                                target="_blank">
                                Chrome Web Store
                            </a>
                        )}
                    </nav>
                </div>
                <p className="text-ice/35 mt-10 text-xs">
                    Not affiliated with any network, protocol or data provider named on this site.
                    Network names are used descriptively. © {new Date().getFullYear()} Chilly
                    Wallet.
                </p>
            </div>
        </footer>
    );
}

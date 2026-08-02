/*
 * The Chilly mark and wordmark.
 *
 * The mark is the Classic variant inlined from the wallet's
 * src/assets/images/icon-chilly-classic.svg — 318 bytes, so inlining costs less
 * than a request and stays sharp at any size. Regenerate it there with
 * `node scripts/render-icons.js`, never hand-edit.
 *
 * The wordmark is rebuilt as type rather than shipping logo-chilly-white-text.png,
 * which is 458x96 and would be soft on a retina header. Space Grotesk at -1px
 * tracking is the wordmark spec.
 */
export function ChillyMark({ size = 40, className = '' }: { size?: number; className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width={size}
            height={size}
            className={className}
            role="img"
            aria-label="Chilly Wallet">
            <rect width="48" height="48" rx="12" fill="#152B40" />
            <path
                d="M24 9c-5 0-8.5 4.4-8.5 10.2 0 3.1-.9 5-2.5 7.1-1.2 1.6-.9 3.4.8 3.9-.4 3.7 1.7 8.8 10.2 8.8s10.6-5.1 10.2-8.8c1.7-.5 2-2.3.8-3.9-1.6-2.1-2.5-4-2.5-7.1C32.5 13.4 29 9 24 9z"
                fill="#69C4EE"
            />
        </svg>
    );
}

export function ChillyWordmark({ size = 32 }: { size?: number }) {
    return (
        <span className="flex items-center gap-2.5">
            <ChillyMark size={size} />
            <span className="font-display text-ice text-lg font-semibold tracking-[-0.5px]">
                Chilly Wallet
            </span>
        </span>
    );
}

/** Reserved for hero moments — see globals.css. Exactly one per page. */
export function AuroraLine({ className = '' }: { className?: string }) {
    return <div className={`aurora-line ${className}`} aria-hidden="true" />;
}

import Image from 'next/image';
import { AuroraLine, ChillyMark } from '@/components/Brand';
import { FrostCard, PillLink, SiteFooter, SiteHeader } from '@/components/Chrome';
import { FEATURES } from '@/content/features';
import { NETWORKS } from '@/content/networks';
import {
    HERO_HEADLINE,
    HERO_SUB,
    INSPECT_BODY,
    INSPECT_POINTS,
    SELF_CUSTODY_NOTE,
} from '@/content/copy';
import { CHROME_STORE_URL, GITHUB_URL, SITE_URL } from '@/lib/site';

const SCREENS = [
    {
        file: '01-home',
        alt: 'Chilly Wallet home screen showing total balance and token list',
        caption: 'Your whole portfolio',
    },
    {
        file: '02-coin-detail',
        alt: 'Coin detail screen with a price chart and market statistics',
        caption: 'Prices and charts',
    },
    {
        file: '03-swap',
        alt: 'Swap screen showing a live quote between two tokens',
        caption: 'Swap with live quotes',
    },
    {
        file: '04-activity',
        alt: 'Activity screen with transactions grouped by day',
        caption: 'Activity by day',
    },
    {
        file: '05-networks',
        alt: 'Network picker listing the supported EVM networks',
        caption: 'Switch networks',
    },
];

/*
 * No aggregateRating and no offers — the listing is not published, and inventing
 * a rating on a wallet's site is both a manual-action risk and a trust problem.
 */
const JSON_LD = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Chilly Wallet',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Chrome',
    url: SITE_URL,
    description:
        'A self-custodial multi-chain crypto wallet for Chrome. Backend-free: your keys never leave your device.',
};

export default function Home() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
            />
            <SiteHeader />

            <main className="flex-1">
                <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 text-center sm:pt-28">
                    <ChillyMark size={72} className="mx-auto" />
                    <h1 className="font-display text-ice mt-8 text-4xl leading-tight font-medium tracking-[-1px] sm:text-5xl">
                        {HERO_HEADLINE}
                    </h1>
                    <AuroraLine className="mx-auto mt-6 w-16" />
                    <p className="text-ice/70 mx-auto mt-6 max-w-2xl text-lg leading-relaxed">
                        {HERO_SUB}
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        {CHROME_STORE_URL ? (
                            <PillLink href={CHROME_STORE_URL} variant="primary">
                                Add to Chrome
                            </PillLink>
                        ) : (
                            <PillLink href={GITHUB_URL} variant="primary">
                                View the source
                            </PillLink>
                        )}
                        <PillLink href="/privacy">Read the privacy policy</PillLink>
                    </div>
                    {!CHROME_STORE_URL && (
                        <p className="text-ice/45 mt-4 text-sm">Coming to the Chrome Web Store.</p>
                    )}
                </section>

                <section className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="font-display text-ice text-2xl font-medium tracking-[-0.5px]">
                        What you can do
                    </h2>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {FEATURES.map(feature => (
                            <FrostCard key={feature.title}>
                                <h3 className="font-display text-accent text-base font-medium">
                                    {feature.title}
                                </h3>
                                <p className="text-ice/70 mt-2 text-sm leading-relaxed">
                                    {feature.body}
                                </p>
                            </FrostCard>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="font-display text-ice text-2xl font-medium tracking-[-0.5px]">
                        A look inside
                    </h2>
                    <div className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
                        {SCREENS.map(screen => (
                            <figure key={screen.file} className="w-56 shrink-0 snap-start sm:w-64">
                                <div className="border-darkline/60 overflow-hidden rounded-[20px] border">
                                    <Image
                                        src={`/screens/${screen.file}.png`}
                                        alt={screen.alt}
                                        width={800}
                                        height={1280}
                                        sizes="(max-width: 640px) 224px, 256px"
                                        className="h-auto w-full"
                                    />
                                </div>
                                <figcaption className="text-ice/50 mt-3 text-center text-sm">
                                    {screen.caption}
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="mx-auto max-w-6xl px-6 py-16">
                    <h2 className="font-display text-ice text-2xl font-medium tracking-[-0.5px]">
                        {NETWORKS.length} EVM networks, one wallet
                    </h2>
                    <ul className="mt-8 flex flex-wrap gap-2">
                        {NETWORKS.map(network => (
                            <li
                                key={network}
                                className="border-darkline/60 bg-dark text-ice/80 rounded-full border px-3 py-1.5 text-sm">
                                {network}
                            </li>
                        ))}
                    </ul>
                    <p className="text-ice/50 mt-6 text-sm">
                        Plus test networks for development. Swaps are available on the networks that
                        support them.
                    </p>
                </section>

                <section className="mx-auto max-w-6xl px-6 py-16">
                    <FrostCard className="sm:p-10">
                        <h2 className="font-display text-ice text-2xl font-medium tracking-[-0.5px]">
                            Built to be inspected
                        </h2>
                        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                            {INSPECT_POINTS.map(point => (
                                <li key={point} className="text-accent text-sm font-medium">
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p className="text-ice/70 mt-6 max-w-3xl text-sm leading-relaxed">
                            {INSPECT_BODY}
                        </p>
                        <div className="mt-8">
                            <PillLink href={GITHUB_URL}>Read the code</PillLink>
                        </div>
                    </FrostCard>
                </section>

                <section className="mx-auto max-w-6xl px-6 pb-8">
                    <div className="border-coral/40 bg-coral/5 rounded-2xl border p-6">
                        <h2 className="font-display text-ice text-base font-medium">
                            You hold the keys
                        </h2>
                        <p className="text-ice/70 mt-2 max-w-3xl text-sm leading-relaxed">
                            {SELF_CUSTODY_NOTE}
                        </p>
                    </div>
                </section>
            </main>

            <SiteFooter />
        </>
    );
}

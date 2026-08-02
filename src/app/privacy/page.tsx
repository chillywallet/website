import fs from 'node:fs/promises';
import path from 'node:path';
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { SiteFooter, SiteHeader } from '@/components/Chrome';

export const metadata: Metadata = {
    title: 'Privacy Policy',
    description:
        'Chilly Wallet collects nothing. There is no backend, no account and no telemetry — this policy sets out what stays on your device and what the extension sends to third-party blockchain APIs.',
    alternates: { canonical: '/privacy' },
};

/*
 * The policy is rendered from a verbatim mirror of the wallet repo's PRIVACY.md
 * rather than hand-ported to JSX.
 *
 * It is a legal document that a Chrome Web Store submission points at, so the two
 * copies have to stay identical — a hand-port drifts the first time the wallet adds
 * a data provider, and nobody notices until a reviewer does. Keeping it as markdown
 * means `diff` can prove they match.
 *
 * This is a Server Component: the policy is in the initial HTML with zero client
 * JavaScript, so a checker that does not run scripts still sees the text.
 */
export default async function PrivacyPage() {
    const source = await fs.readFile(path.join(process.cwd(), 'src/content/privacy.md'), 'utf8');

    return (
        <>
            <SiteHeader />
            <main className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        h1: props => (
                            <h1
                                className="font-display text-ice text-3xl leading-tight font-medium tracking-[-1px]"
                                {...props}
                            />
                        ),
                        h2: props => (
                            <h2
                                className="font-display text-accent mt-12 mb-3 text-xl font-medium"
                                {...props}
                            />
                        ),
                        p: props => <p className="text-ice/75 mt-4 leading-relaxed" {...props} />,
                        ul: props => (
                            <ul
                                className="text-ice/75 mt-4 list-disc space-y-2 pl-6 leading-relaxed"
                                {...props}
                            />
                        ),
                        li: props => <li className="pl-1" {...props} />,
                        strong: props => <strong className="text-ice font-semibold" {...props} />,
                        a: props => (
                            <a
                                className="text-primary underline underline-offset-2 hover:text-accent"
                                rel="noreferrer noopener"
                                {...props}
                            />
                        ),
                        hr: () => <hr className="border-darkline/60 mt-10" />,
                        table: props => (
                            <div className="border-darkline/60 bg-dark mt-6 overflow-x-auto rounded-2xl border">
                                <table className="w-full text-left text-sm" {...props} />
                            </div>
                        ),
                        th: props => (
                            <th
                                className="border-darkline/60 text-ice border-b px-4 py-3 font-medium"
                                {...props}
                            />
                        ),
                        td: props => (
                            <td
                                className="border-darkline/60 text-ice/70 border-b px-4 py-3 align-top"
                                {...props}
                            />
                        ),
                    }}>
                    {source}
                </ReactMarkdown>
            </main>
            <SiteFooter />
        </>
    );
}

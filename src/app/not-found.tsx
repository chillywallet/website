import { ChillyMark } from '@/components/Brand';
import { PillLink, SiteFooter, SiteHeader } from '@/components/Chrome';

export default function NotFound() {
    return (
        <>
            <SiteHeader />
            <main className="mx-auto flex max-w-3xl flex-1 flex-col items-center justify-center px-6 py-28 text-center">
                <ChillyMark size={56} />
                <h1 className="font-display text-ice mt-8 text-3xl font-medium tracking-[-1px]">
                    Nothing here
                </h1>
                <p className="text-ice/60 mt-3">That page does not exist.</p>
                <div className="mt-8">
                    <PillLink href="/">Back to the start</PillLink>
                </div>
            </main>
            <SiteFooter />
        </>
    );
}

/*
 * Feature cards.
 *
 * Every hedge in here is load-bearing — the wallet genuinely does not do these
 * things everywhere, and the store listing is worded the same way:
 *
 *   - swap is per-chain, derived from whether a chain carries an aggregator slug
 *   - atomic batching needs a deployed batch-calls contract: Monad and Base only
 *   - liquid staking is a fixed Monad-only list
 *   - name resolution is Monad-scoped, not ENS everywhere
 *
 * Never add: gasless or sponsored gas (removed from the product entirely),
 * automatic RPC failover (the extra endpoints are alternatives, not failover).
 */
export type Feature = { title: string; body: string };

export const FEATURES: Feature[] = [
    {
        title: 'Tokens and NFTs',
        body: 'Hold, send and receive tokens and NFTs across every supported network, with balances and history from public block explorers.',
    },
    {
        title: 'Swaps',
        body: 'Swap tokens through an on-chain aggregator, on the networks that support it. Quotes come back as ready-to-send calldata.',
    },
    {
        title: 'Any dapp',
        body: 'Connect to anything that speaks EIP-1193, with per-site permissions you can revoke at any time. Nothing is shared until you approve it.',
    },
    {
        title: 'Batch calls',
        body: 'EIP-5792 batch calls. Atomic execution on Monad and Base; on other networks the calls are submitted in sequence.',
    },
    {
        title: 'Prices and charts',
        body: 'Track portfolio value and per-coin prices, with a chart for every coin you hold and a market list to explore.',
    },
    {
        title: 'Liquid staking',
        body: 'Stake into liquid staking protocols on Monad — aPriori, Kintsu and FastLane, on-chain and non-custodial.',
    },
    {
        title: 'Hardware wallets',
        body: 'Use a Ledger or Trezor for hardware-backed accounts. Keys stay on the device; the extension only relays the signing request.',
    },
    {
        title: 'Readable names',
        body: 'Resolve .nad names on Monad instead of pasting hex addresses, so you can check who you are paying at a glance.',
    },
    {
        title: 'Popup or side panel',
        body: 'Work from the toolbar popup, or pin the wallet to the Chrome side panel so it stays open next to a dapp.',
    },
];

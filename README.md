# chillywallet.com

The marketing site for [Chilly Wallet](https://github.com/chillywallet/chrome-extension), a
self-custodial multi-chain crypto wallet for Chrome.

Two pages: a landing page at `/` and the privacy policy at `/privacy`. Next.js App Router,
Tailwind v4, deployed on Vercel. Both routes are prerendered to static HTML.

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm run typecheck    # tsc --noEmit
npm run format       # prettier
```

Node 22 (`.nvmrc`).

## The privacy policy is a mirror — do not edit it here

`src/content/privacy.md` is a **verbatim copy** of `PRIVACY.md` in the wallet repo. It is a legal
document that the Chrome Web Store listing points at, so the two must stay identical.

Edit the wallet repo first, then copy the file across and diff to confirm:

```bash
cp ../haha-chrome-extension/PRIVACY.md src/content/privacy.md
diff ../haha-chrome-extension/PRIVACY.md src/content/privacy.md   # must be empty
```

It is rendered with `react-markdown` in a Server Component, so the policy is in the initial HTML
with zero client JavaScript — a checker that does not run scripts still sees the text.

## Design

The "Frost" design system is shared with the wallet. Colour tokens in `src/app/globals.css` are
copied from the wallet's `tailwind.config.js`, and the fonts in `src/app/fonts/` are the same
variable woff2 files the extension bundles.

Three rules carried over from the app, each easy to break by accident:

- **This site is dark only.** No `dark:` variants — the wallet has a light mode, a marketing page
  does not need one.
- **Coral appears exactly once per page**, on the primary call to action. It is the CTA colour and
  nothing else.
- **The aurora line appears exactly once**, under the hero headline. It is reserved for hero
  moments; repeating it as a section divider is what would kill it.

`.frost-card` surfaces have a hairline border and **no drop shadow**.

Network names are plain text rather than logos. The wallet renders generated monogram badges for
the same reason: the project does not redistribute marks it has no licence for.

## Assets

| What             | Where it comes from                                                                                             |
| ---------------- | --------------------------------------------------------------------------------------------------------------- |
| Fonts            | `extension/fonts/` in the wallet repo                                                                           |
| The penguin mark | Inlined in `src/components/Brand.tsx` from `icon-chilly-classic.svg`                                            |
| Screenshots      | `store-assets/screenshots/raw/` — the unframed captures, produced by the wallet's `render-store-screenshots.js` |
| `public/og.png`  | `scripts/render-og.mjs` (see the note in that file about Playwright)                                            |

Brand assets are generated in the wallet repo, never hand-edited. Regenerate them there.

## The install button

`src/lib/site.ts` holds `CHROME_STORE_URL`. While it is `null` the hero points at the source repo
and the page says the extension is coming to the Chrome Web Store. Set it to the listing URL once
the extension is approved — that is the whole change.

## Licence

The Chilly name, the penguin mark and the wordmarks are reserved; this repo carries no open-source
licence. The wallet itself is MIT — see
[chillywallet/chrome-extension](https://github.com/chillywallet/chrome-extension).

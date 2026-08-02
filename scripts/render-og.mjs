/*
 * Renders public/og.png, the 1200x630 link-preview card.
 *
 *   node scripts/render-og.mjs
 *
 * Not next/og — Satori cannot render variable fonts, and both Chilly faces are
 * variable-only, so ImageResponse would silently fall back to a generic sans on
 * the one asset whose entire job is brand recognition. This drives a real browser
 * instead, the same approach the wallet's screenshot renderer uses.
 *
 * Playwright is deliberately NOT a dependency of this project: it would download
 * a browser on every Vercel build to produce a file that is already committed.
 * The PNG is regenerated rarely, so run this from a checkout that has Playwright
 * (the wallet repo does) or install it here temporarily:
 *
 *   npm i --no-save playwright && npx playwright install chromium
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');

const MARK = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="120" height="120"><rect width="48" height="48" rx="12" fill="#152B40"/><path d="M24 9c-5 0-8.5 4.4-8.5 10.2 0 3.1-.9 5-2.5 7.1-1.2 1.6-.9 3.4.8 3.9-.4 3.7 1.7 8.8 10.2 8.8s10.6-5.1 10.2-8.8c1.7-.5 2-2.3.8-3.9-1.6-2.1-2.5-4-2.5-7.1C32.5 13.4 29 9 24 9z" fill="#69C4EE"/></svg>`;

const font = fs
    .readFileSync(path.join(ROOT, 'src/app/fonts/space-grotesk-var.woff2'))
    .toString('base64');

const html = `<html><head><style>
@font-face { font-family:'Space Grotesk'; src:url(data:font/woff2;base64,${font}) format('woff2'); font-weight:100 900 }
html,body { margin:0; padding:0 }
#card {
    width:1200px; height:630px; display:flex; flex-direction:column;
    align-items:center; justify-content:center; gap:26px;
    font-family:'Space Grotesk', sans-serif;
    background:
        radial-gradient(1100px 620px at 50% -18%, #1B3A57 0%, transparent 62%),
        linear-gradient(168deg, #0B1B2B 0%, #0E2136 52%, #0B1B2B 100%);
}
h1 { margin:0; color:#F4FAFD; font-size:60px; font-weight:600; letter-spacing:-1.5px }
.rule { width:74px; height:3px; border-radius:2px; background:linear-gradient(90deg,#7FD9F5,#4FA8E8) }
p { margin:0; color:#DCF1FB; opacity:.72; font-size:26px; font-weight:400; max-width:900px; text-align:center; line-height:1.4 }
</style></head><body><div id="card">
    ${MARK}
    <h1>Chilly Wallet</h1>
    <div class="rule"></div>
    <p>A cool multi-chain crypto wallet. Your keys never leave your device.</p>
</div></body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(300);
await page.locator('#card').screenshot({ path: path.join(ROOT, 'public/og.png') });
await browser.close();

console.log('wrote public/og.png');

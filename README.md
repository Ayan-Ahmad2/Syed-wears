# Syed Wears — Free Website + PWA

A static, mobile-first streetwear storefront recreated from scratch.

## Run locally
Open `index.html` in a browser for the website. For PWA installation/service-worker testing, serve the folder through HTTPS or a local development server.

## Free deployment
1. Create a GitHub repository named `syed-wears`.
2. Upload all files/folders in this project.
3. Connect that repository to Cloudflare Pages.
4. Build command: none for this static version.
5. Output/root directory: `/` (the folder containing `index.html`).
6. Deploy.

Cloudflare will provide a `pages.dev` URL.

## PWA
The project already includes `manifest.json`, `sw.js`, and 192/512px icons. Once deployed over HTTPS, supported mobile browsers can offer Install/Add to Home Screen.

## Important
The checkout is intentionally a demo. Do not accept real payments until a real payment provider and secure backend are added.

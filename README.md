# Tropical Bathroom

Standalone bathroom renovation website for London. Plain HTML, CSS and JavaScript, following KitchenEZZ's lightweight approach. This folder is independent of the parent SilicoRender Next.js application.

## Preview

From this folder run `npm run dev` (requires Python 3), then open http://127.0.0.1:4173. No dependency installation or build is needed. `npm run check` checks JavaScript syntax.

## Publish on GitHub Pages

1. Create a separate GitHub repository for Tropical Bathroom. Upload **the contents of this folder** as the repository root, including `.github/workflows/pages.yml`. Do not upload the parent SilicoRender project or any `.env` files.
2. Use `main` as the default branch. In Settings → Pages, choose **GitHub Actions** as the source.
3. Push to `main` or run the deployment workflow. The workflow publishes the static site.
4. To connect the domain, add `tropicalbathroom.com` under Settings → Pages → Custom domain, verify ownership and follow GitHub's DNS instructions. Enable HTTPS once the certificate is ready. A CNAME file is deliberately omitted until domain setup to avoid assigning a domain prematurely.

All asset paths are relative and also work at a GitHub project URL. The canonical URL and sitemap target the intended final domain. The same static folder can be imported on Vercel using the Other preset without a build command.

## Enquiries

Phone: +447380268355. Email: quote@tropicalbathroom.com.

The form validates required fields and phone length, then prepares a WhatsApp or email message. **It does not automatically send or store leads.** Visitors review and send messages in their chosen app; an installed mail handler is needed for email links. No API keys or environment files are required. Verify the mailbox and WhatsApp number before launch.

## Before public launch

- Confirm the services, coverage and trading/legal details with the owner. Add the confirmed legal business identity and a fuller privacy notice including retention arrangements where applicable.
- Replace the labelled bathroom design illustration with genuine project photos if available. No reviews, accreditations, prices or completed projects are invented.
- Confirm domain ownership and DNS setup, and test calls, WhatsApp and email on a real phone.
- The current design requests fonts from Google Fonts; system fonts are used if unavailable.

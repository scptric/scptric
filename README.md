# Scptric

Scptric’s marketing website for scptric.com, built with React, TypeScript, Vite, and custom responsive CSS. The design retains the original logo, blue/black/white palette, Space Grotesk typography, angular borders, and offset shadows.

## Development

- `npm install`
- `npm run dev` — local preview at http://localhost:3000
- `npm run build` — production files in `dist`
- `npx tsc --noEmit` — TypeScript validation

## Content

The page covers systems development, software engineering, data engineering, the product portfolio, the delivery approach, company principles, FAQs, and contact details. Qimah is a distinct personal asset management system in development; print shop management is a separate future project. Neither is advertised as publicly available.

Contact is configured near the top of `App.tsx`. The public address is `hello@scptric.com`. Social links use `scptric`. Canonical and social metadata use `https://scptric.com/`.

The site uses Google Fonts with a local fallback stack. Styling is bundled by Vite and does not depend on the Tailwind browser CDN. Navigation and contact actions use standard links. No inquiry data is collected by this site; email links open the visitor’s email client.

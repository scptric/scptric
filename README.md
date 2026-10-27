# Scptric

Scptric’s marketing website for scptric.com, built with React, TypeScript, Vite, and custom responsive CSS. The design retains the original logo, blue/black/white palette, Space Grotesk typography, angular borders, and offset shadows.

## Development

- `npm install`
- `npm run dev` — local preview at http://localhost:3000
- `npm run build` — production files in `dist`
- `npx tsc --noEmit` — TypeScript validation

## Content

The page covers:
- **Hero**: Atmospheric ambient background motion video (`bg-motion`) rendered with a frosted glassmorphism overlay, precision grid pattern, and interactive system visual stack. Includes full `prefers-reduced-motion` accessibility support.
- **Technology Partners & Integrations**: Showcase of core technology partners and platforms (Cloudflare, GitHub, Google Analytics, Sanity, Stripe) in responsive glassy cards with subtle hover luminescence.
- **Capabilities**: Systems development, software engineering, and data engineering.
- **Product Portfolio**: Dedicated systems incubator showcase including Qimah (personal asset OS in development) and print shop management (future project).
- **Delivery Approach**: 4-step delivery lifecycle (Understand, Design, Build & validate, Launch & evolve).
- **Company Principles & FAQ**: Operating philosophy and project inquiry guidance.
- **Contact & Footer**: Project conversation channels, direct email copy helper, and social links.

## Assets & Media

- **Hero Motion Video**: `public/assets/bg-motion.webm` (ambient motion video) and `public/assets/bg-motion-poster.jpg` (initial frame poster).
- **Partner Logos**: SVG vector assets located in `public/partners/` (`cloudflare.svg`, `github.svg`, `google-analytics.svg`, `sanity.svg`, `stripe.svg`).
- **Brand Assets**: Scptric logo, icon, and Qimah vector marks located in `assets/` and `public/assets/`.

Contact is configured near the top of `App.tsx`. The public address is `hello@scptric.com`. Social links use `scptric`. Canonical and social metadata use `https://scptric.com/`.

The site uses Google Fonts with a local fallback stack. Styling is bundled by Vite and does not depend on the Tailwind browser CDN. Navigation and contact actions use standard links. No inquiry data is collected by this site; email links open the visitor’s email client.

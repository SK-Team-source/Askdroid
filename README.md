# Askdroid — Next.js Rebuild

A modern, production-ready Next.js (App Router, JavaScript only — no TypeScript)
rebuild of [askdroid.com](https://askdroid.com/), an AI and Robotics directory
and media site. Same pages, navigation, information architecture and content
intent as the original; a new premium editorial design system.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

The project builds cleanly with `next build` (verified) and produces a mix of
static and dynamic routes — see the route summary printed at the end of the
build.

## Tech stack

- Next.js 15 (App Router)
- React 19
- Plain JavaScript (`.js` files only — no TypeScript, no `.tsx`/`.ts`)
- Plain CSS with custom properties (`app/globals.css`) — no Tailwind
- Self-hosted fonts via `@fontsource` (Fraunces, IBM Plex Sans, IBM Plex Mono)
  — no external font requests at build or run time

## Project structure

```
askdroid-nextjs/
├── app/
│   ├── layout.js            Root layout, global metadata, header/footer
│   ├── page.js               Homepage
│   ├── globals.css           Design tokens + all site styles
│   ├── icon.svg               Favicon (Next.js metadata file convention)
│   ├── about-us/page.js
│   ├── contact-us/page.js
│   ├── ai/page.js             AI directory listing (search + category filter)
│   ├── ai/[slug]/page.js      AI directory item detail page
│   ├── robotics/page.js       Robotics directory listing
│   ├── robotics/[slug]/page.js
│   ├── podcasts/page.js
│   ├── news/page.js
│   ├── news/[slug]/page.js
│   ├── blog/page.js
│   └── blog/[slug]/page.js
├── components/                Header, Footer, Hero, SearchBar, ContactForm,
│                               ContactSection, ListingRow, CategoryFilter,
│                               DirectorySidebar, PostCard, PageHero,
│                               Icon (inline SVG set), MonogramThumb
├── lib/data/                  Content: categories, AI items, robotics items,
│                               news posts, blog posts, podcast episodes
├── public/images/              See README.txt inside — asset notes
├── next.config.js
├── jsconfig.json
└── package.json
```

## Pages recreated from the original site

| Original route              | Rebuilt route         |
|------------------------------|------------------------|
| `/`                          | `/` (Home)             |
| `/about-us/`                 | `/about-us`             |
| `/contact-us/`               | `/contact-us`            |
| `/ai/`                       | `/ai` (+ item detail pages) |
| `/robotics/`                 | `/robotics` (+ item detail pages) |
| `/podcasts/`                 | `/podcasts`              |
| `/news/`                     | `/news` (+ article pages) |
| `/blog/`                     | `/blog` (+ article pages) |

## About the directory content

askdroid.com's AI and Robotics sections are large WordPress directories
(the Robotics archive alone spans 64 listing pages). This rebuild ships a
curated, representative set of real entries pulled directly from the live
site for each directory (12 AI entries, 12 robotics entries, plus news,
blog and podcast content), fully wired up with:

- Category filtering (`/ai?category=...`, `/robotics?category=...`)
- Client-side search that navigates to a filtered URL
  (`/ai?q=...`, `/robotics?q=...`)
- Individual detail pages for every entry, generated at build time
  (`generateStaticParams`)
- A sidebar with categories, recent posts, and a "suggest a listing" CTA

To extend the directory with more entries, add objects to
`lib/data/aiItems.js` / `lib/data/roboticsItems.js` (and their categories in
`lib/data/categories.js`) — new detail pages and listing rows are generated
automatically, no other code changes required.

## About images

Two kinds of images are used:

1. **Real, stable source images** (hero/about photography, category icons,
   the ethical-AI video, blog/news thumbnails) are referenced directly from
   `askdroid.com`'s WordPress media library via `next/image` with
   `remotePatterns` configured in `next.config.js`. These URLs were verified
   as live and fetchable while building this project.
2. **Directory listing thumbnails**: the original site loads these via
   client-side JavaScript, so no stable image URL exists for most listings.
   Rather than invent a fake `/images/xyz.jpg` path that doesn't exist, each
   listing renders a deterministic, on-brand generated monogram thumbnail
   (`components/MonogramThumb.js`).

See `public/images/README.txt` for instructions on fully self-hosting every
image if you'd prefer not to hotlink the original site.

## Contact form

`components/ContactForm.js` is a fully functional frontend (validation,
state, success/error messaging) but does not send data anywhere yet — this
environment can't provision a backend for you. To wire it up:

- Add an API route at `app/api/contact/route.js` that accepts a POST and
  sends an email / writes to a database, and `fetch('/api/contact', ...)`
  from the form's `handleSubmit`, **or**
- Point the form at a hosted forms backend (Formspree, Getform, Resend, etc.)

## SEO

Metadata (title, description, Open Graph, Twitter card, canonical URLs) is
set in `app/layout.js` and per-page via each route's exported `metadata` /
`generateMetadata`, based on the original site's meta tags where available.

## Accessibility

- Semantic headings, landmark elements (`header`, `main`, `nav`, `footer`)
- Skip-to-content link
- Visible focus states (`:focus-visible`)
- Labeled form fields, `aria-label`/`aria-expanded` on interactive controls
- Sufficient color contrast in the light editorial palette

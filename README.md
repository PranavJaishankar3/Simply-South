# Simply South website

New marketing site for [simplysouth.us](https://simplysouth.us). It's a plain static site: no framework and no dependencies, just Node (18+) to build.

**What it handles vs. what stays where it is**

| Feature | Lives on | Changed? |
|---|---|---|
| Home, locations, catering, story, contact, careers, Signature Club, franchise, press | This site | Redesigned |
| Online ordering, menu, rewards, sign in, customer accounts | Owner.com | No, linked from every Order / Sign in button |
| Mobile app | Owner.com | No |
| Reservations | Toast | No, each location's Reserve button opens its Toast page |
| Gift card balance | Toast | No |

## Working on it

```bash
npm run build      # builds the site into dist/
npm run serve      # view dist/ at http://localhost:4321
npm run preview    # builds preview/ with relative links (open preview/index.html directly)
```

Almost everything the owners might change (hours, phone numbers, Toast links, featured dishes, reviews, press) is in **`src/data.mjs`**. Pages are in `src/pages/`, shared header/footer in `src/layout.mjs`, styles in `assets/css/site.css`, behaviour in `assets/js/site.js`.

## The 3-click map

| Task | Clicks from any page |
|---|---|
| Order food | 2 (Order online → pick location → Owner menu). 1 once a location is remembered via the Menu link |
| Book a table | 2 (Reserve → pick location → Toast) |
| Call / directions | 2 on mobile (bottom bar → location) |
| Hours for every location | 1 (Locations), or 0 on the homepage |
| Catering request | 1 |
| Story, press, careers, franchise, Signature Club, contact | 1–2 (About menu or footer) |

## Hosting

Recommended: **Cloudflare Pages** (free). The domain already runs through Cloudflare, so connecting it later is a couple of clicks.

1. In Cloudflare: Workers & Pages → Create → Pages → Connect to Git → pick this repo.
2. Build command: `node build.mjs`. Output directory: `dist`.
3. You get a free preview link like `simplysouth.pages.dev` to share with the owners.

Netlify works the same way (same build command and folder); the `_redirects` file works on both.

## Before launch: checklist

1. **Owner subdomain.** Owner (the restaurant owner, not us) asks Owner.com support to serve ordering from `order.simplysouth.us`. Customers, the app and rewards points are unaffected.
2. **Point the site at it.** In `src/data.mjs` set `ORDER_BASE = "https://order.simplysouth.us"` and rebuild. Every Order, Sign in and menu link updates, and `_redirects` starts sending old links (`/menu/irving`, `/login`, `/tags/dosa`, printed QR codes, Google "Order" buttons) to the right place automatically.
3. **Forms.** Catering, contact and careers currently open the guest's email app, addressed to the right location. To have them send directly, create free endpoints at [Formspree](https://formspree.io) (or similar) and paste them into `FORM_ENDPOINTS` in `src/data.mjs`. Careers needs a plan that supports file uploads for PDF resumes.
4. **Domain.** In Cloudflare Pages → Custom domains → add `simplysouth.us` and `www.simplysouth.us`. Done in the same Cloudflare account that holds the domain.
5. **Search.** Submit `https://simplysouth.us/sitemap.xml` in Google Search Console, and update each location's Google Business Profile website link if needed.

## Photos

All photos are in `assets/img` and ship with the site, so nothing depends on Owner's image server. They're the restaurant's own photos (storefronts, dining room, table shots) plus the dish photos the current site already uses. To swap or add one, drop the file in `assets/img` and change its name in `src/data.mjs` or the page file. The owners' professional menu photos in Owner would be a good upgrade: ask them for the originals.

## Things to confirm with the owners

- **Katy ZIP:** the old site uses both 77493 and 77494. This site uses 77494 (matches the Toast and Google listings).
- **Katy hours:** the Katy page says 5–10 PM daily, but the ordering system shows lunch too. This site uses the ordering system's hours.
- **Location count:** the old Signature Club and Franchise pages said "four locations". This site says five.
- **Social links:** the old footer only linked Warrenville's accounts. This site links all five.
- **Gift card balance:** the link goes to McKinney's Toast gift card page (same as the old site). Check it works for cards from other locations.

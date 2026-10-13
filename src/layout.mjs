import { SITE, LOCATIONS, ORDER_BASE, owner, FORM_ENDPOINTS } from "./data.mjs";

// ---------- helpers ----------------------------------------------------------
export const esc = (s = "") =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Photos live in assets/img. The placeholder is resolved per page so links
// work in both the live build and the relative-link preview build.
export const img = (name) => `{{ASSET:img/${name}}}`;

// Internal link resolver. In "preview" builds every link is made relative
// and ends in index.html so the site works from any static host or folder.
export function makeLinker(currentPath, preview) {
  return (to) => {
    if (/^(https?:|mailto:|tel:|#)/.test(to)) return to;
    const [p, hash = ""] = to.split("#");
    const h = hash ? "#" + hash : "";
    if (!preview) return p + h;
    const depth = currentPath.split("/").filter(Boolean).length;
    const up = "../".repeat(depth);
    const target = p.replace(/^\//, "");
    if (target === "" || target.endsWith("/")) return up + target + "index.html" + h;
    return up + target + h;
  };
}

export const statusSlot = (slug) =>
  `<span class="status" data-status="${slug}"><span class="status-dot" aria-hidden="true"></span><span class="status-text">Checking hours…</span></span>`;

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const fmt = (t) => {
  let [h, m] = t.split(":").map(Number);
  const ap = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  return m ? `${h}:${String(m).padStart(2, "0")} ${ap}` : `${h} ${ap}`;
};
export const hoursTable = (loc) => `
  <table class="hours" data-hours="${loc.slug}">
    <caption class="visually-hidden">Hours for ${esc(loc.label)}</caption>
    <tbody>
    ${loc.hours
      .map(
        (d, i) => `<tr data-day="${i}"><th scope="row">${DAYS[i]}</th><td>${d
          .map(([a, b]) => `${fmt(a)} – ${fmt(b)}`)
          .join("<br>")}</td></tr>`
      )
      .join("")}
    </tbody>
  </table>`;

// Kolam: a pulli-kolam style lattice drawn around a grid of dots.
const kolamSvg = (stroke, dot, op = 1) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='36' height='36' viewBox='0 0 36 36'><g fill='none' stroke='${stroke}' stroke-width='1.3' stroke-opacity='${op}' stroke-linecap='round'><path d='M0 18Q18 2 36 18Q18 34 0 18Z'/><path d='M18 0Q34 18 18 36Q2 18 18 0Z'/></g><circle cx='18' cy='18' r='1.7' fill='${dot}' fill-opacity='${op}'/><circle cx='0' cy='0' r='1.2' fill='${dot}' fill-opacity='${op}'/><circle cx='36' cy='0' r='1.2' fill='${dot}' fill-opacity='${op}'/><circle cx='0' cy='36' r='1.2' fill='${dot}' fill-opacity='${op}'/><circle cx='36' cy='36' r='1.2' fill='${dot}' fill-opacity='${op}'/></svg>`
  )}")`;
export const KOLAM_CSS = `:root{--kolam-on-leaf:${kolamSvg("#F2D58A", "#F7F8F3", 0.55)};--kolam-on-white:${kolamSvg("#A97E36", "#A97E36", 0.35)};}`;

// ---------- app buttons ------------------------------------------------------
export const appButtons = (cls = "") => `
  <div class="app-buttons ${cls}">
    <a class="app-btn" href="${SITE.appStore}"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M10.5 18.5h3"/></svg><span><small>Download on the</small>App Store</span></a>
    <a class="app-btn" href="${SITE.googlePlay}"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor"><path d="M4.5 2.8 14 12l-9.5 9.2c-.3-.2-.5-.6-.5-1V3.8c0-.4.2-.8.5-1Zm10.6 10.3 2.4 2.3-10.8 6.2 8.4-8.5Zm0-2.2L6.7 2.4l10.8 6.2-2.4 2.3Zm3.5 1.1 1.9 1.1c.7.4.7 1.4 0 1.8l-1.9 1.1-2.6-2.5 2.6-2.5Z"/></svg><span><small>Get it on</small>Google Play</span></a>
  </div>`;

// ---------- icons ------------------------------------------------------------
const ic = (d, extra = "") =>
  `<svg class="icon" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${extra}>${d}</svg>`;
export const ICON = {
  bag: ic('<path d="M5 8h14l-1.2 11.2a2 2 0 0 1-2 1.8H8.2a2 2 0 0 1-2-1.8L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>'),
  table: ic('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  phone: ic('<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>'),
  pin: ic('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  menu: ic('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: ic('<path d="M6 6l12 12M18 6 6 18"/>'),
  chevron: ic('<path d="m6 9 6 6 6-6"/>'),
  star: `<svg class="star" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M10 1.8l2.5 5.2 5.7.8-4.1 4 1 5.6L10 14.7l-5.1 2.7 1-5.6-4.1-4 5.7-.8z"/></svg>`,
  instagram: ic('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>'),
  facebook: ic('<path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8Z"/>'),
};

// ---------- head -------------------------------------------------------------
function head({ title, description, path, ogImage }) {
  const canonical = SITE.url + (path === "/" ? "/" : path);
  const og = `${SITE.url}/assets/img/${ogImage || SITE.ogImage}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="${SITE.themeColor}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="${img("icon-48.png")}">
<link rel="apple-touch-icon" href="${img("icon-180.png")}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Gloock&family=Hanken+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="{{ASSET:css/site.css}}">
<style>${KOLAM_CSS}</style>
</head>`;
}

// ---------- header -----------------------------------------------------------
function header(L, path) {
  const cur = (p) => (path === p ? ' aria-current="page"' : "");
  const about = [
    ["/story/", "Our story"],
    ["/page/press/", "Press & accolades"],
    ["/page/signature-club/", "Signature Club"],
    ["/careers/", "We're hiring"],
    ["/page/franchise/", "Franchise"],
    ["/contact/", "Contact"],
  ];
  const aboutActive = about.some(([p]) => p === path);
  return `
<a class="skip" href="#main">Skip to main content</a>
<header class="masthead">
  <div class="masthead-inner">
    <a class="brand" href="${L("/")}" aria-label="Simply South home">
      <img src="${img(SITE.logo)}" alt="Simply South, pure Indian vegetarian" width="146" height="64">
    </a>
    <nav class="primary" aria-label="Main">
      <a href="${owner.menu()}" data-order-link>Menu</a>
      <a href="${L("/page/locations/")}"${cur("/page/locations/")}>Locations</a>
      <a href="${L("/catering/")}"${cur("/catering/")}>Catering</a>
      <div class="dropdown">
        <button type="button" class="dropdown-toggle" aria-expanded="false" aria-controls="about-menu"${aboutActive ? ' data-active="true"' : ""}>About ${ICON.chevron}</button>
        <ul class="dropdown-menu" id="about-menu">
          ${about.map(([p, t]) => `<li><a href="${L(p)}"${cur(p)}>${t}</a></li>`).join("")}
        </ul>
      </div>
    </nav>
    <div class="masthead-actions">
      <a class="signin" href="${owner.login()}">Sign in</a>
      <button type="button" class="btn btn-outline" data-sheet="reserve">Reserve</button>
      <button type="button" class="btn btn-primary" data-sheet="order">Order online</button>
    </div>
    <button type="button" class="drawer-toggle" aria-expanded="false" aria-controls="drawer" aria-label="Open navigation"><span class="i-open">${ICON.menu}</span><span class="i-close">${ICON.close}</span></button>
  </div>
  <div class="drawer" id="drawer" hidden>
    <nav aria-label="Mobile">
      <ul class="drawer-primary">
        <li><a href="${owner.menu()}" data-order-link>Menu</a></li>
        <li><a href="${L("/page/locations/")}">Locations & reservations</a></li>
        <li><a href="${L("/catering/")}">Catering</a></li>
      </ul>
      <ul class="drawer-secondary">
        ${about.map(([p, t]) => `<li><a href="${L(p)}">${t}</a></li>`).join("")}
        <li><a href="${owner.login()}">Sign in or join rewards</a></li>
      </ul>
    </nav>
  </div>
</header>`;
}

// ---------- footer -----------------------------------------------------------
function footer(L) {
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&format=svg&margin=0&data=${encodeURIComponent(SITE.appDownload)}`;
  return `
<footer class="site-footer">
  <div class="kolam-band" aria-hidden="true"></div>
  <div class="footer-inner">
    <div class="footer-col footer-locations">
      <a class="footer-badge" href="${L("/")}"><img src="${img(SITE.logoBadge)}" alt="Simply South, pure Indian vegetarian" width="200" height="105" loading="lazy"></a>
      <h2>Visit</h2>
      <ul>
        ${LOCATIONS.map(
          (l) => `<li><a href="${L("/" + l.slug + "/")}">${l.label}</a><a class="footer-phone" href="tel:${l.tel}">${l.phone}</a></li>`
        ).join("")}
      </ul>
    </div>
    <div class="footer-col">
      <h2>Explore</h2>
      <ul>
        <li><a href="${owner.menu()}" data-order-link>Menu</a></li>
        <li><a href="${L("/page/locations/")}">Reservations</a></li>
        <li><a href="${L("/catering/")}">Catering</a></li>
        <li><a href="${L("/story/")}">Our story</a></li>
        <li><a href="${L("/contact/")}">Contact</a></li>
        <li><a href="${L("/careers/")}">We're hiring</a></li>
        <li><a href="${L("/page/signature-club/")}">Signature Club</a></li>
        <li><a href="${L("/page/franchise/")}">Franchise</a></li>
        <li><a href="${L("/page/press/")}">Press & accolades</a></li>
      </ul>
    </div>
    <div class="footer-col footer-app">
      <h2>Get the app</h2>
      <p>Order faster and earn points toward free food.</p>
      <div class="app-row">
        <img class="qr" src="${qr}" alt="QR code to download the Simply South app" width="92" height="92" loading="lazy">
        ${appButtons()}
      </div>
    </div>
    <div class="footer-col footer-social">
      <h2>Follow your location</h2>
      <ul>
        ${LOCATIONS.map(
          (l) => `<li><span>${l.city}</span>
            <a href="${l.instagram}" aria-label="${l.city} on Instagram">${ICON.instagram}</a>
            <a href="${l.facebook}" aria-label="${l.city} on Facebook">${ICON.facebook}</a></li>`
        ).join("")}
      </ul>
    </div>
  </div>
  <div class="footer-base">
    <p>© ${new Date().getFullYear()} Simply South. All rights reserved.</p>
    <ul>
      <li><a href="${owner.legal("privacy")}">Privacy</a></li>
      <li><a href="${owner.legal("terms")}">Terms of service</a></li>
      <li><a href="${owner.legal("accessibility")}">Accessibility</a></li>
      <li><a href="https://owner.com/?utm_source=customer-website&amp;utm_medium=powered-by">Online ordering powered by Owner</a></li>
    </ul>
  </div>
</footer>`;
}

// ---------- location sheet + mobile bar --------------------------------------
function sheet() {
  return `
<dialog class="sheet" id="location-sheet" aria-labelledby="sheet-title">
  <div class="sheet-head">
    <h2 id="sheet-title">Choose a location</h2>
    <button type="button" class="sheet-close" data-close aria-label="Close">${ICON.close}</button>
  </div>
  <p class="sheet-sub" id="sheet-sub"></p>
  <ul class="sheet-list">
    ${LOCATIONS.map(
      (l) => `<li><a class="sheet-option" data-loc="${l.slug}" href="#">
        <span class="sheet-city">${l.label}</span>
        <span class="sheet-addr">${l.address}</span>
        ${statusSlot(l.slug)}
      </a></li>`
    ).join("")}
  </ul>
  <p class="sheet-foot" data-foot="order"><a href="${SITE.appDownload}">Order with the Simply South app</a> to earn points on every order.</p>
</dialog>

<dialog class="lightbox" id="lightbox" aria-label="Photo">
  <button type="button" class="sheet-close" data-close aria-label="Close photo">${ICON.close}</button>
  <img alt="">
</dialog>

<nav class="dock" aria-label="Quick actions">
  <button type="button" data-sheet="order">${ICON.bag}<span>Order</span></button>
  <button type="button" data-sheet="reserve">${ICON.table}<span>Reserve</span></button>
  <button type="button" data-sheet="call">${ICON.phone}<span>Call</span></button>
  <button type="button" data-sheet="directions">${ICON.pin}<span>Directions</span></button>
</nav>`;
}

function siteData() {
  const data = {
    order: ORDER_BASE,
    forms: FORM_ENDPOINTS,
    locations: LOCATIONS.map((l) => ({
      slug: l.slug, label: l.label, city: l.city, email: l.email, tel: l.tel, phone: l.phone,
      maps: l.maps, toast: l.toast, order: owner.menu(l.slug), hours: l.hours,
    })),
  };
  return `<script type="application/json" id="site-data">${JSON.stringify(data)}</script>`;
}

function schema() {
  const s = {
    "@context": "https://schema.org",
    "@graph": LOCATIONS.map((l) => ({
      "@type": "Restaurant",
      name: `Simply South ${l.city}`,
      servesCuisine: ["South Indian", "Vegetarian", "Indian"],
      telephone: l.tel,
      email: l.email,
      url: `${SITE.url}/${l.slug}`,
      acceptsReservations: l.toast,
      hasMenu: owner.menu(l.slug),
      address: {
        "@type": "PostalAddress",
        streetAddress: l.address,
        addressLocality: l.city,
        addressRegion: l.state,
        postalCode: l.cityLine.split(" ").pop(),
        addressCountry: "US",
      },
      openingHoursSpecification: l.hours.flatMap((d, i) =>
        d.map(([o, c]) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: DAYS[i],
          opens: o,
          closes: c,
        }))
      ),
    })),
  };
  return `<script type="application/ld+json">${JSON.stringify(s)}</script>`;
}

export function page({ path, file, title, description, body, ogImage, preview, withSchema }) {
  const L = makeLinker(file ? "/" : path, preview);
  const html = `${head({ title, description, path, ogImage })}
<body>
${header(L, path)}
<main id="main">
${typeof body === "function" ? body(L) : body}
</main>
${footer(L)}
${sheet()}
${siteData()}
${withSchema ? schema() : ""}
<script src="{{ASSET:js/site.js}}" defer></script>
</body>
</html>`;
  return html.replace(/\{\{ASSET:([^}]+)\}\}/g, (_, a) => L("/assets/" + a));
}

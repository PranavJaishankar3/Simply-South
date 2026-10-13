import { LOCATIONS, owner } from "../data.mjs";
import { img, esc, statusSlot, hoursTable } from "../layout.mjs";

const contactList = (l) => `
  <ul class="loc-contact">
    <li><a href="${l.maps}">${l.address}, ${l.cityLine}</a></li>
    <li><a href="tel:${l.tel}">${l.phone}</a></li>
    <li><a href="mailto:${l.email}">${l.email}</a></li>
  </ul>`;

const actions = (l, L, withPage = false) => `
  <div class="btn-row">
    <a class="btn btn-primary" href="${l.toast}">Reserve a table</a>
    <a class="btn btn-outline" href="${owner.menu(l.slug)}">Order online</a>
    ${withPage ? `<a class="btn btn-quiet" href="${L("/" + l.slug + "/")}">About ${l.city}</a>` : `<a class="btn btn-quiet" href="${l.maps}">Directions</a>`}
  </div>`;

const hub = {
  path: "/page/locations/",
  title: "Locations & Reservations | Simply South",
  description:
    "Reserve a table or order online at Simply South in Irving, Frisco, McKinney, Katy and Warrenville. Addresses, phone numbers and today's hours for every location.",
  withSchema: true,
  body: (L) => `
<section class="page-hero">
  <div class="page-hero-inner">
    <h1>Locations and reservations</h1>
    <p>Five kitchens, one menu. Pick a location to book a table, order for pickup or delivery, or check today's hours.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${LOCATIONS.map(
      (l) => `<article class="loc-block" id="${l.slug}">
        <img src="${img(l.hero)}" alt="${esc(l.heroAlt)}" loading="lazy">
        <div>
          <h2><a href="${L("/" + l.slug + "/")}">${l.label}</a></h2>
          <p class="loc-tagline">${l.tagline}</p>
          ${statusSlot(l.slug)}
          ${contactList(l)}
          ${actions(l, L, true)}
        </div>
        <details class="hours-details" data-desktop-open>
          <summary>See all hours</summary>
          ${hoursTable(l)}
          <p class="hours-note">Dining room hours. Pickup and delivery times show when you order.</p>
        </details>
      </article>`
    ).join("")}
  </div>
</section>`,
};

const cityPage = (l) => ({
  path: `/${l.slug}/`,
  title: `Best Indian Food in ${l.city} | Simply South ${l.city}`,
  description: `Simply South ${l.city}: pure South Indian vegetarian, named one of America's 50 best restaurants by The New York Times. ${l.address}, ${l.cityLine}. Reserve a table or order online.`,
  ogImage: l.hero,
  body: (L) => `
<section class="page-hero has-photo">
  <div class="page-hero-inner">
    <div>
      <h1>Best Indian food in ${l.city}</h1>
      <p>${l.tagline}${l.slug === "irving" ? " Named one of America's 50 best restaurants in 2024." : " Named one of America's 50 best restaurants by The New York Times."}</p>
      <p>${statusSlot(l.slug).replace('class="status"', 'class="status status-on-leaf"')}</p>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="${l.toast}">Reserve a table</a>
        <a class="btn btn-light btn-lg" href="${owner.menu(l.slug)}">Order online</a>
      </div>
    </div>
    <img src="${img(l.hero)}" alt="${esc(l.heroAlt)}" fetchpriority="high">
  </div>
</section>

<section class="section">
  <div class="wrap info-grid">
    <div>
      <h2>Simply South ${l.city}</h2>
      <p class="lede">${l.intro}</p>
      <ul class="loc-contact">
        <li><strong>Address</strong><br><a href="${l.maps}">${l.address}<br>${l.cityLine}</a></li>
        <li><strong>Phone</strong><br><a href="tel:${l.tel}">${l.phone}</a></li>
        <li><strong>Email</strong><br><a href="mailto:${l.email}">${l.email}</a></li>
        ${l.parking ? `<li><strong>Parking</strong><br>${l.parking}</li>` : ""}
      </ul>
      <div class="btn-row">
        <a class="btn btn-outline" href="${l.maps}">Get directions</a>
        <a class="btn btn-quiet" href="${l.instagram}">Instagram</a>
        <a class="btn btn-quiet" href="${l.facebook}">Facebook</a>
      </div>
    </div>
    <div class="info-card">
      <h2>Hours</h2>
      ${hoursTable(l)}
      <p class="hours-note">Dining room hours. Pickup and delivery times show when you <a href="${owner.menu(l.slug)}">order online</a>.</p>
    </div>
  </div>
</section>

<section class="section section-tint">
  <div class="wrap stack">
    <div class="split split-top">
      <div>
        <h2>${l.reviewsHeading}</h2>
        <p>${l.reviewsBody}</p>
      </div>
      <div>
        <h2>${l.specialHeading}</h2>
        <p>${l.specialBody}</p>
        <a class="btn btn-primary" href="${owner.menu(l.slug)}">Explore the full menu</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>From the ${l.city} kitchen</h2>
    <ul class="gallery-3">
      ${l.gallery
        .map(([id, alt]) => `<li><button type="button" class="photo" data-lightbox="${img(id, 1600)}"><img src="${img(id, 640, 640)}" alt="${esc(alt)}" loading="lazy"></button></li>`)
        .join("")}
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>Our other locations</h2>
    <p class="lede">Same menu, same kitchen standards, across Texas and Illinois.</p>
    <div class="other-locs">
      ${LOCATIONS.filter((o) => o.slug !== l.slug).map((o) => `<a href="${L("/" + o.slug + "/")}">${o.label}</a>`).join("")}
      <a href="${L("/page/locations/")}">All locations</a>
    </div>
  </div>
</section>`,
});

export default [hub, ...LOCATIONS.map(cityPage)];

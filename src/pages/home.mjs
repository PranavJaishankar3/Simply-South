import { SITE, LOCATIONS, FEATURED, KITCHEN_PHOTOS, REVIEWS, KNOWN_FOR, AREAS, owner } from "../data.mjs";
import { img, esc, statusSlot, ICON, appButtons } from "../layout.mjs";

export const reviewsSection = (heading = "What guests say") => `
<section class="reviews" aria-labelledby="reviews-h">
  <div class="wrap">
    <h2 id="reviews-h">${heading}</h2>
    <div class="review-grid">
      ${REVIEWS.map(
        ([name, text]) => `<figure class="review">
          <div class="stars" role="img" aria-label="5 out of 5 stars">${ICON.star.repeat(5)}</div>
          <blockquote><p>${esc(text)}</p></blockquote>
          <figcaption>${esc(name)}</figcaption>
        </figure>`
      ).join("")}
    </div>
  </div>
</section>`;

export const rewardsSection = (L) => `
<section class="rewards" aria-labelledby="rewards-h">
  <div class="wrap rewards-inner">
    <div class="rewards-copy">
      <h2 id="rewards-h">Simply South Rewards</h2>
      <p>Earn a point for every dollar you spend, dine-in or online, and trade 1,000 points for $25 of food at any location.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="${owner.login()}">Join Simply South Rewards</a>
        <a class="btn btn-quiet" href="${L("/page/signature-club/")}">How the Signature Club works</a>
      </div>
    </div>
    <div class="rewards-app">
      <p>Or order through the app and your points add up on their own.</p>
      ${appButtons()}
    </div>
  </div>
</section>`;

export const todayStrip = (L, heading = "Today at Simply South") => `
<section class="today" aria-labelledby="today-h">
  <div class="wrap">
    <h2 id="today-h">${heading}</h2>
    <ul class="today-list">
      ${LOCATIONS.map(
        (l) => `<li class="today-item">
          <a class="today-city" href="${L("/" + l.slug + "/")}">${l.city}<span class="today-state">${l.state}</span></a>
          ${statusSlot(l.slug)}
          <p class="today-addr">${l.address}</p>
          <p class="today-links">
            <a href="${owner.menu(l.slug)}">Order</a>
            <a href="${l.toast}">Reserve</a>
            <a href="${l.maps}">Directions</a>
          </p>
        </li>`
      ).join("")}
    </ul>
  </div>
</section>`;

export default {
  path: "/",
  title: "Simply South | South Indian Vegetarian | Best Indian Food in Town",
  description:
    "Simply South: pure South Indian vegetarian cooking, named one of America's 50 best restaurants by The New York Times. Order online for pickup or delivery, or reserve a table in Irving, Frisco, McKinney, Katy or Warrenville.",
  withSchema: true,
  body: (L) => `
<section class="hero" aria-labelledby="hero-h">
  <div class="hero-panel">
    <div class="hero-copy">
      <p class="hero-accolade"><span>The New York Times</span> named us one of America's 50 best restaurants</p>
      <h1 id="hero-h">The best Indian food in town is South Indian, and all vegetarian.</h1>
      <p class="hero-sub">Dosas, idlis, thalis and 200 more dishes from the regional kitchens of South India. Five restaurants in Texas and Illinois.</p>
      <div class="btn-row">
        <button type="button" class="btn btn-primary btn-lg" data-sheet="order">Order online</button>
        <button type="button" class="btn btn-light btn-lg" data-sheet="reserve">Reserve a table</button>
      </div>
    </div>
  </div>
  <div class="hero-photo">
    <img src="${img(SITE.ogImage)}" alt="${esc(SITE.heroAlt)}" fetchpriority="high">
  </div>
</section>

${todayStrip(L)}

<section class="featured" aria-labelledby="featured-h">
  <div class="wrap featured-inner">
    <div class="menu-card">
      <h2 id="featured-h">From the menu</h2>
      <p class="menu-card-sub">A few of the dishes people drive across town for. Tap any one to order it.</p>
      <ul class="dish-list">
        ${FEATURED.map(
          ([id, name, desc]) => `<li><a href="${owner.item(id, name)}"><span class="dish-name">${name}</span><span class="dish-desc">${desc}</span></a></li>`
        ).join("")}
      </ul>
      <a class="btn btn-primary" href="${owner.menu()}" data-order-link>See the full menu</a>
    </div>
    <div class="kitchen">
      <h3 class="visually-hidden">From the kitchen</h3>
      <ul class="photo-grid">
        ${KITCHEN_PHOTOS.map(
          ([id, alt]) => `<li><button type="button" class="photo" data-lightbox="${img(id, 1600)}"><img src="${img(id, 640, 640)}" alt="${esc(alt)}" loading="lazy" width="320" height="320"></button></li>`
        ).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="story-band" aria-labelledby="story-h">
  <div class="wrap story-inner">
    <img class="story-img" src="${img("thali-spread.jpg")}" alt="A full thali with naan, curries, rice and a dosa on a steel platter at a Simply South table." loading="lazy">
    <div class="story-copy">
      <h2 id="story-h">200 dishes. One tradition.</h2>
      <p>From Nellore karam masala dosa to the Pelli Bhojanam thali, every dish on the menu comes from the regional cooking of South India. All of it vegetarian, none of it watered down.</p>
      <p>In 2024 The New York Times came to Irving and put us on its list of America's 50 best restaurants, one of only a handful of vegetarian restaurants in the country to earn that recognition.</p>
      <div class="btn-row">
        <a class="btn btn-light" href="${SITE.nytStory}">Read the New York Times list</a>
        <a class="btn btn-ghost-light" href="${L("/story/")}">Our story</a>
      </div>
    </div>
  </div>
</section>

<section class="catering-band" aria-labelledby="cat-h">
  <div class="wrap catering-inner">
    <div>
      <h2 id="cat-h">Bring Simply South to your event</h2>
      <p>Full catering for weddings, office lunches and celebrations: biryanis, tiffins, starters and more, cooked with the same care as every plate in the restaurant. No minimum order, 24 hours' notice.</p>
      <a class="btn btn-primary" href="${L("/catering/")}">Plan your event</a>
    </div>
    <img src="${img("catering-trays.jpg")}" alt="Puri, dosas, biryani and curries in brass serving trays." loading="lazy">
  </div>
</section>

${reviewsSection()}

${rewardsSection(L)}

<section class="faq" aria-labelledby="faq-h">
  <div class="wrap faq-inner">
    <h2 id="faq-h">Questions people ask</h2>
    <div class="faq-list">
      <details>
        <summary>What are you known for?</summary>
        <div class="faq-body">
          <p>Dosas, idlis and thalis above all, but guests come back for plenty more. Tap a dish to see it on the menu.</p>
          <ul class="tags">${KNOWN_FOR.map(([t, s]) => `<li><a href="${owner.tag(s)}">${t}</a></li>`).join("")}</ul>
        </div>
      </details>
      <details>
        <summary>What meals do you serve?</summary>
        <div class="faq-body"><p>We serve <a href="${owner.tag("breakfast")}">breakfast</a>, <a href="${owner.tag("lunch")}">lunch</a> and <a href="${owner.tag("dinner")}">dinner</a>. Breakfast hours vary by location, so check your location's hours before you head over.</p></div>
      </details>
      <details>
        <summary>Do you offer delivery or takeout?</summary>
        <div class="faq-body"><p>Yes, both. <a href="${owner.tag("takeout")}">Takeout</a> and <a href="${owner.tag("delivery")}">delivery</a> are available when you <a href="${owner.menu()}" data-order-link>order online</a>.</p></div>
      </details>
      <details>
        <summary>Do you take reservations?</summary>
        <div class="faq-body"><p>Yes, at every location. <a href="${L("/page/locations/")}">Pick a location</a> to book a table.</p></div>
      </details>
      <details>
        <summary>What areas do you serve?</summary>
        <div class="faq-body"><p>${AREAS.join(", ")}.</p></div>
      </details>
      <details>
        <summary>Anything else?</summary>
        <div class="faq-body"><p>We're a <a href="${owner.tag("family-friendly-restaurant")}">family-friendly restaurant</a>, and the menu has a kids' section.</p></div>
      </details>
    </div>
  </div>
</section>
`,
};

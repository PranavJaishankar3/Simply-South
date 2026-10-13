import { SITE, PRESS, PRESS_PHOTOS, LOCATIONS, owner } from "../data.mjs";
import { img, esc } from "../layout.mjs";

const split = (id, alt, heading, body, flip = false) => `
  <div class="split${flip ? " flip" : ""}">
    <img src="${img(id, 1200)}" alt="${esc(alt)}" loading="lazy">
    <div><h2>${heading}</h2>${body}</div>
  </div>`;

const story = {
  path: "/story/",
  title: "Our Story | Simply South",
  description:
    "How Simply South grew from one restaurant in Irving, Texas into five, and why The New York Times named it one of America's 50 best restaurants in 2024.",
  ogImage: "thali-spread.jpg",
  body: (L) => `
<section class="page-hero has-photo">
  <div class="page-hero-inner">
    <div>
      <h1>South Indian vegetarian cooking, taken seriously</h1>
      <p>Simply South started in Irving, Texas, on the belief that the vegetarian cooking of South India deserved serious attention. In 2024, The New York Times agreed.</p>
    </div>
    <img src="${img("thali-spread.jpg")}" alt="A full thali with naan, curries, rice and a dosa on a steel platter." fetchpriority="high">
  </div>
</section>

<section class="section">
  <div class="wrap stack">
    ${split("irving-exterior.jpg", "The Simply South Irving restaurant at dusk.", "The Irving beginning",
      `<p>Our menu is a tribute to the spices, herbs and vegetables of India, prepared carefully enough that every bite tastes like it came from a home kitchen there. We started in Irving with an invitation: come explore what Indian vegetarian food can be.</p>`)}
    ${split("fried-idli.jpg", "Fried idlis with sambar, podi and chutneys.", "A kitchen built on specificity",
      `<p>No meat, and nothing missing. We cook with fresh ingredients and good spices, and our chefs aim for food that's as nourishing as it is delicious. The dishes are regional and specific: a Guntur thatte idli is not a Nellore one, and we cook them both.</p>`, true)}
    ${split("nyt-poster.jpg", "A Simply South poster announcing its place on The New York Times list of favorite restaurants for 2024.", "The New York Times, 2024",
      `<p>The Times named Simply South to its list of America's 50 Best Restaurants, making it one of only a handful of vegetarian restaurants in the country to earn that recognition.</p><a class="btn btn-outline" href="${L("/page/press/")}">Read the coverage</a>`)}
    ${split("dining-room.jpg", "A Simply South dining room with green booths and a temple mural on the wall.", "Where tradition lives",
      `<p>Brass serving ware, a Ganesha shrine draped in marigolds, and a staff who like nothing more than walking you through the menu. The rooms are warm and spacious: right for a celebration, never stuffy about it.</p>`, true)}
    ${split("warrenville-exterior.jpg", "The Simply South Warrenville restaurant.", "From one restaurant to five",
      `<p>Irving became three restaurants across Dallas–Fort Worth, then Katy in the Houston area and Warrenville in the Chicago suburbs. More are on the way.</p><a class="btn btn-primary" href="${L("/page/locations/")}">Find a location</a>`)}
  </div>
</section>`,
};

const club = {
  path: "/page/signature-club/",
  title: "Signature Club Rewards | Simply South",
  description:
    "Join the Simply South Signature Club. Earn 1 point for every $1 spent, dine-in or online, and redeem 1,000 points for $25 at any location. Check your gift card balance.",
  body: () => `
<section class="page-hero has-photo">
  <div class="page-hero-inner">
    <div>
      <h1>Earn with every visit</h1>
      <p>Every visit earns, every meal rewards. One account works at every Simply South location.</p>
      <div class="btn-row">
        <a class="btn btn-primary btn-lg" href="${owner.login()}">Join now</a>
        <a class="btn btn-ghost-light btn-lg" href="${owner.login()}">View your rewards</a>
      </div>
    </div>
    <img src="${img("sweets.jpg")}" alt="Kaju katli, ladoos and other sweets on a wooden platter." fetchpriority="high">
  </div>
</section>

<section class="section">
  <div class="wrap stack">
    <div class="split">
      <div>
        <h2>How it works</h2>
        <div class="earn-rate">
          <div><strong>1 point</strong>for every $1 you spend, dine-in or online</div>
          <div><strong>$25 off</strong>for every 1,000 points, at any location</div>
        </div>
      </div>
      <img src="${img("thali.jpg")}" alt="A thali with rice, curries, roti and a samosa on a steel platter." loading="lazy">
    </div>
    <div class="split">
      <img src="${img("dining-room.jpg")}" alt="A Simply South dining room with green booths and a temple mural." loading="lazy">
      <div>
        <h2>Sign up at your location</h2>
        <p>Create your account online, in the app or at your nearest Simply South. Your points are yours at every location we operate.</p>
        <div class="btn-row">
          <a class="btn btn-primary" href="${owner.login()}">Create your account</a>
          <a class="btn btn-quiet" href="${SITE.appDownload}">Get the app</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>Check your gift card balance</h2>
    <p>See exactly what's on your Simply South gift card before your next visit.</p>
    <a class="btn btn-light" href="${SITE.giftCardBalance}">Check balance</a>
  </div>
</section>`,
};

const franchise = {
  path: "/page/franchise/",
  title: "Franchise Opportunities | Simply South",
  description:
    "Bring Simply South to your city. A New York Times America's 50 Best restaurant with five locations and a menu of over 200 South Indian vegetarian dishes.",
  ogImage: "frisco-exterior.jpg",
  body: () => `
<section class="page-hero has-photo">
  <div class="page-hero-inner">
    <div>
      <h1>Bring Simply South to your city</h1>
      <p>Named one of America's 50 best restaurants by The New York Times, Simply South is a proven brand with a devoted following, and we're growing.</p>
      <div class="btn-row"><a class="btn btn-primary btn-lg" href="${SITE.franchiseWhatsApp}">Start the conversation</a></div>
    </div>
    <img src="${img("frisco-exterior.jpg")}" alt="The Simply South Frisco storefront." fetchpriority="high">
  </div>
</section>

<section class="section">
  <div class="wrap stack">
    ${split("thali-spread.jpg", "A full thali with naan, curries, rice and a dosa on a steel platter.", "A brand built on something real",
      `<p>Five locations across Texas and Illinois. Pure South Indian vegetarian cuisine. A menu of more than 200 dishes that guests drive miles to eat.</p>`)}
    <div>
      <h2>The Simply South experience</h2>
      <ul class="gallery-3">
        ${[
          ["dining-room.jpg", "A Simply South dining room with green booths and a temple mural."],
          ["irving-exterior.jpg", "The Simply South Irving restaurant at dusk."],
          ["square-dosa.jpg", "A crisp square dosa with onion, herbs and a cup of chutney on a brass tray."],
        ].map(([id, alt]) => `<li><button type="button" class="photo" data-lightbox="${img(id, 1600)}"><img src="${img(id, 640, 640)}" alt="${esc(alt)}" loading="lazy"></button></li>`).join("")}
      </ul>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="wrap">
    <h2>Start the conversation</h2>
    <p>Reach out on WhatsApp to learn about franchise opportunities with Simply South.</p>
    <a class="btn btn-light" href="${SITE.franchiseWhatsApp}">Message us on WhatsApp</a>
  </div>
</section>`,
};

const press = {
  path: "/page/press/",
  title: "Press & Accolades | Simply South",
  description:
    "Simply South in the news: named to The New York Times list of America's 50 best restaurants in 2024, with coverage from WFAA, The Dallas Morning News, Dallas Observer and more.",
  body: (L) => `
<section class="page-hero">
  <div class="page-hero-inner">
    <h1>One of America's 50 best restaurants</h1>
    <p>In 2024 The New York Times put Simply South on its list of the best restaurants in the country. Here's what the press has said since.</p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <ul class="press-list">
      ${PRESS.map(
        ([pub, title, desc, url]) => `<li><a href="${url}">
          <span class="press-pub">${pub}</span>
          <span><span class="press-title">${title}</span><span class="press-desc">${desc}</span></span>
        </a></li>`
      ).join("")}
    </ul>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <h2>The food that earned it</h2>
    <ul class="gallery-3">
      ${PRESS_PHOTOS.map(([id, alt]) => `<li><button type="button" class="photo" data-lightbox="${img(id, 1600)}"><img src="${img(id, 640, 640)}" alt="${esc(alt)}" loading="lazy"></button></li>`).join("")}
    </ul>
    <div class="btn-row" style="margin-top:32px">
      <a class="btn btn-primary" href="${owner.menu()}" data-order-link>See the menu</a>
      <a class="btn btn-outline" href="${L("/page/locations/")}">Reserve a table</a>
    </div>
  </div>
</section>`,
};

const notFound = {
  path: "/404",
  file: "404.html",
  title: "Page not found | Simply South",
  description: "This page doesn't exist.",
  body: (L) => `
<section class="not-found">
  <div class="wrap">
    <h1>We couldn't find that page</h1>
    <p class="lede">The link may be old. Everything is still here: start from one of these.</p>
    <div class="btn-row">
      <a class="btn btn-primary" href="${owner.menu()}" data-order-link>Order online</a>
      <a class="btn btn-outline" href="${L("/page/locations/")}">Locations and reservations</a>
      <a class="btn btn-quiet" href="${L("/")}">Home</a>
    </div>
  </div>
</section>`,
};

export default [story, club, franchise, press, notFound];

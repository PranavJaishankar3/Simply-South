import { LOCATIONS } from "../data.mjs";
import { img } from "../layout.mjs";

const req = '<span class="req" aria-hidden="true">*</span>';

const locSelect = (id = "location") => `
  <div class="field">
    <label for="${id}">Location ${req}</label>
    <select id="${id}" name="location" required data-label="Location">
      <option value="">Select a location</option>
      ${LOCATIONS.map((l) => `<option value="${l.slug}">${l.label}</option>`).join("")}
    </select>
  </div>`;

const text = (name, label, type = "text", required = true, auto = "") => `
  <div class="field">
    <label for="${name}">${label}${required ? " " + req : ""}</label>
    <input id="${name}" name="${name}" type="${type}" ${required ? "required" : ""} data-label="${label}" ${auto ? `autocomplete="${auto}"` : ""}>
  </div>`;

const success = (heading, body) => `
  <div class="form-success" hidden>
    <h2 tabindex="-1">${heading}</h2>
    <p>${body}</p>
    <button type="button" data-again>Send another</button>
  </div>`;

const locationAside = (heading) => `
  <aside>
    <h2>${heading}</h2>
    <ul class="aside-list">
      ${LOCATIONS.map(
        (l) => `<li><strong>${l.label}</strong>${l.address}, ${l.cityLine}<br><a href="tel:${l.tel}">${l.phone}</a><br><a href="mailto:${l.email}">${l.email}</a></li>`
      ).join("")}
    </ul>
  </aside>`;

const catering = {
  path: "/catering/",
  title: "Catering | Simply South",
  description:
    "Order catering from Simply South. South Indian vegetarian catering for corporate events, private parties, weddings and more, from any of our five locations. No minimum order.",
  body: () => `
<section class="page-hero has-photo">
  <div class="page-hero-inner">
    <div>
      <h1>Planning an event? Let's make it easy.</h1>
      <p>Weddings, office lunches, birthdays, pujas. Biryanis, tiffins, starters and more, cooked with the same care as every plate in the restaurant.</p>
      <div class="btn-row"><a class="btn btn-primary btn-lg" href="#catering-form">Request catering</a></div>
    </div>
    <img src="${img("catering-trays.jpg")}" alt="Puri, dosas, biryani and curries in brass serving trays." fetchpriority="high">
  </div>
</section>

<section class="section">
  <div class="wrap form-layout">
    <form class="form" id="catering-form" data-form="catering" data-subject="Catering request" novalidate>
      <div class="form-fields">
        <h2>Tell us about your event</h2>
        <p class="lede">Fill this in and the location's team will get back to you shortly.</p>
        <div class="field-row">${text("name", "Name", "text", true, "name")}${text("email", "Email", "email", true, "email")}</div>
        <div class="field-row">${text("phone", "Phone number", "tel", true, "tel")}${locSelect("cat-location")}</div>
        <div class="field-row">
          ${text("event_date", "Event date", "date")}
          ${text("event_time", "Event time", "time")}
        </div>
        <div class="field">
          <label for="guests">Number of guests ${req}</label>
          <select id="guests" name="guests" required data-label="Number of guests">
            <option value="">Select a range</option>
            <option>1-10</option><option>10-20</option><option>20-30</option><option>30-40</option><option>40-50</option><option>50+</option>
          </select>
        </div>
        <div class="field">
          <label for="details">Questions or details <span class="hint">(dishes you have in mind, dietary needs, delivery or pickup)</span></label>
          <textarea id="details" name="details" data-label="Questions or details"></textarea>
        </div>
        <button class="btn btn-primary btn-lg" type="submit">Submit catering request</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </div>
      ${success("Request sent", "We'll be in touch soon.")}
    </form>

    <aside>
      <h2>Good to know</h2>
      <div class="faq-list">
        <details open><summary>How much notice do you need?</summary><div class="faq-body"><p>Catering orders need 24 hours' notice.</p></div></details>
        <details><summary>Is there a minimum order?</summary><div class="faq-body"><p>No. There's no minimum to place an order or to get it delivered.</p></div></details>
        <details><summary>Can you handle dietary restrictions?</summary><div class="faq-body"><p>We'll do our best with gluten-free, vegan and allergy requests. Our Katy kitchen can accommodate a wide range of dietary needs. Call your location before ordering so we can talk it through.</p></div></details>
        <details><summary>Do you provide plates, napkins and cutlery?</summary><div class="faq-body"><p>They aren't included with catering orders. Call your location if you need them and we'll see what we can do.</p></div></details>
      </div>
    </aside>
  </div>
</section>

<section class="section section-tint">
  <div class="wrap">${locationAside("Prefer to call?")}</div>
</section>`,
};

const contact = {
  path: "/contact/",
  title: "Contact | Simply South",
  description: "Contact Simply South. Send a message to any of our locations in Irving, Frisco, McKinney, Katy or Warrenville, or call us directly.",
  body: () => `
<section class="page-hero">
  <div class="page-hero-inner">
    <h1>Get in touch</h1>
    <p>Send a message and the right location will get back to you as soon as they can. For anything about today, calling is fastest.</p>
  </div>
</section>

<section class="section">
  <div class="wrap form-layout">
    <form class="form" data-form="contact" data-subject="Website message" novalidate>
      <div class="form-fields">
        <h2>Send a message</h2>
        <div class="field-row">${text("name", "Name", "text", true, "name")}${text("email", "Email", "email", true, "email")}</div>
        <div class="field-row">${text("phone", "Phone number", "tel", false, "tel")}${locSelect("contact-location")}</div>
        <div class="field">
          <label for="message">Message ${req}</label>
          <textarea id="message" name="message" required data-label="Message"></textarea>
        </div>
        <button class="btn btn-primary btn-lg" type="submit">Send message</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </div>
      ${success("Message sent", "We'll be in touch soon.")}
    </form>
    ${locationAside("Our locations")}
  </div>
</section>`,
};

const careers = {
  path: "/careers/",
  title: "We're Hiring | Careers at Simply South",
  description: "Join the Simply South team. Apply to work at our restaurants in Irving, Frisco, McKinney, Katy or Warrenville.",
  body: () => `
<section class="page-hero">
  <div class="page-hero-inner">
    <h1>Join a growing team with a love for food</h1>
    <p>We're always looking for good people at all five restaurants. Send your resume and a few sentences about yourself.</p>
  </div>
</section>

<section class="section">
  <div class="wrap form-layout">
    <form class="form" data-form="careers" data-subject="Job application" data-either="comment,resume" novalidate enctype="multipart/form-data">
      <div class="form-fields">
        <h2>Apply today</h2>
        <fieldset class="field">
          <legend>Where would you like to work? ${req}</legend>
          <div class="choice-grid">
            ${LOCATIONS.map(
              (l, i) => `<label class="choice"><input type="radio" name="location" value="${l.slug}" ${i === 0 ? "required" : ""} data-label="Location"><span>${l.city}<small>${l.address}</small></span></label>`
            ).join("")}
          </div>
        </fieldset>
        ${text("name", "Full name", "text", true, "name")}
        <div class="field-row">${text("email", "Email", "email", true, "email")}${text("phone", "Phone number", "tel", true, "tel")}</div>
        <div class="field">
          <label for="comment">About you <span class="hint">(a few sentences, or attach a resume below)</span></label>
          <textarea id="comment" name="comment" data-label="About you"></textarea>
        </div>
        <div class="field">
          <label for="resume">Resume <span class="hint">(PDF only)</span></label>
          <input id="resume" name="resume" type="file" accept="application/pdf,.pdf">
        </div>
        <p class="hint">Add a note about yourself, a resume, or both.</p>
        <button class="btn btn-primary btn-lg" type="submit">Submit application</button>
        <p class="form-status" role="status" aria-live="polite"></p>
      </div>
      ${success("Application received", "You're all set. The team at your chosen location will be in touch.")}
    </form>
    <aside>
      <h2>Working at Simply South</h2>
      <p class="lede">A kitchen The New York Times put among the 50 best in America, and a menu of more than 200 dishes. If you care about food and hospitality, there's a lot to learn here.</p>
    </aside>
  </div>
</section>`,
};

export default [catering, contact, careers];

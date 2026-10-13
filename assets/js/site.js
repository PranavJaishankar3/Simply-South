/* Simply South — site behaviour (no dependencies) */
(function () {
  "use strict";
  var DATA = JSON.parse(document.getElementById("site-data").textContent);
  var LOCS = DATA.locations;
  var bySlug = {};
  LOCS.forEach(function (l) { bySlug[l.slug] = l; });

  // ---------- remembered location -----------------------------------------
  var KEY = "ss-location";
  function getSaved() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function save(slug) { try { localStorage.setItem(KEY, slug); } catch (e) {} }

  function applySaved() {
    var s = getSaved();
    if (!s || !bySlug[s]) return;
    document.querySelectorAll("[data-order-link]").forEach(function (a) { a.href = bySlug[s].order; });
  }

  // ---------- open / closed ------------------------------------------------
  // All five locations are on US Central time.
  function nowCentral() {
    var parts = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Chicago", weekday: "short", hour: "numeric", minute: "numeric", hourCycle: "h23",
    }).formatToParts(new Date());
    var o = {};
    parts.forEach(function (p) { o[p.type] = p.value; });
    var day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(o.weekday);
    return { day: day, min: (+o.hour % 24) * 60 + +o.minute };
  }
  function toMin(t) { var a = t.split(":"); return +a[0] * 60 + +a[1]; }
  function fmt(t) {
    var a = t.split(":"), h = +a[0], m = +a[1], ap = h >= 12 ? "PM" : "AM";
    h = h % 12 || 12;
    return h + (m ? ":" + (m < 10 ? "0" : "") + m : "") + " " + ap;
  }
  var DAYNAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function status(loc) {
    var n = nowCentral();
    var today = loc.hours[n.day] || [];
    for (var i = 0; i < today.length; i++) {
      var o = toMin(today[i][0]), c = toMin(today[i][1]);
      if (n.min >= o && n.min < c) {
        return c - n.min <= 45
          ? { state: "soon", text: "Closing soon, " + fmt(today[i][1]) }
          : { state: "open", text: "Open until " + fmt(today[i][1]) };
      }
      if (n.min < o) return { state: "closed", text: "Opens at " + fmt(today[i][0]) };
    }
    for (var d = 1; d <= 7; d++) {
      var idx = (n.day + d) % 7, h = loc.hours[idx];
      if (h && h.length) {
        return { state: "closed", text: "Opens " + (d === 1 ? "tomorrow" : DAYNAMES[idx]) + " " + fmt(h[0][0]) };
      }
    }
    return { state: "closed", text: "Closed" };
  }

  function paintStatus() {
    document.querySelectorAll("[data-status]").forEach(function (el) {
      var loc = bySlug[el.getAttribute("data-status")];
      if (!loc) return;
      var s = status(loc);
      el.setAttribute("data-state", s.state);
      el.querySelector(".status-text").textContent = s.text;
    });
    var d = nowCentral().day;
    document.querySelectorAll(".hours tr").forEach(function (tr) {
      tr.classList.toggle("today", +tr.getAttribute("data-day") === d);
    });
  }

  // ---------- location sheet ----------------------------------------------
  var sheet = document.getElementById("location-sheet");
  var ACTIONS = {
    order: { title: "Order from which location?", sub: "Pickup and delivery, straight from the kitchen.", url: function (l) { return l.order; } },
    reserve: { title: "Reserve a table", sub: "Choose a location to see open times.", url: function (l) { return l.toast; } },
    call: { title: "Call a location", sub: "Tap to call.", url: function (l) { return "tel:" + l.tel; } },
    directions: { title: "Get directions", sub: "Opens in your maps app.", url: function (l) { return l.maps; } },
  };

  function openSheet(action) {
    var a = ACTIONS[action] || ACTIONS.order;
    sheet.querySelector("#sheet-title").textContent = a.title;
    sheet.querySelector("#sheet-sub").textContent = a.sub;
    var saved = getSaved();
    var list = sheet.querySelector(".sheet-list");
    sheet.querySelectorAll(".sheet-option").forEach(function (opt) {
      var l = bySlug[opt.getAttribute("data-loc")];
      opt.href = a.url(l);
      opt.removeAttribute("data-remembered");
      var extra = opt.querySelector(".sheet-phone");
      if (extra) extra.remove();
      if (action === "call") {
        var p = document.createElement("span");
        p.className = "sheet-addr sheet-phone";
        p.textContent = l.phone;
        opt.querySelector(".sheet-addr").after(p);
      }
      if (saved === l.slug) {
        opt.setAttribute("data-remembered", "");
        list.prepend(opt.parentNode);
      }
    });
    sheet.querySelector('[data-foot="order"]').hidden = action !== "order";
    paintStatus();
    if (typeof sheet.showModal === "function") sheet.showModal();
    else sheet.setAttribute("open", "");
  }

  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-sheet]");
    if (t) { e.preventDefault(); openSheet(t.getAttribute("data-sheet")); return; }
    var opt = e.target.closest(".sheet-option");
    if (opt) { save(opt.getAttribute("data-loc")); applySaved(); }
    var close = e.target.closest("[data-close]");
    if (close) { close.closest("dialog").close(); return; }
    if (e.target.tagName === "DIALOG") e.target.close(); // backdrop click
  });

  // ---------- About dropdown ----------------------------------------------
  var dd = document.querySelector(".dropdown-toggle");
  var ddMenu = document.getElementById("about-menu");
  function setDD(open) { dd.setAttribute("aria-expanded", String(open)); ddMenu.classList.toggle("open", open); }
  if (dd) {
    dd.addEventListener("click", function () { setDD(dd.getAttribute("aria-expanded") !== "true"); });
    document.addEventListener("click", function (e) { if (!e.target.closest(".dropdown")) setDD(false); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { setDD(false); } });
  }

  // ---------- mobile drawer -----------------------------------------------
  var dt = document.querySelector(".drawer-toggle");
  var drawer = document.getElementById("drawer");
  if (dt) {
    dt.addEventListener("click", function () {
      var open = dt.getAttribute("aria-expanded") !== "true";
      dt.setAttribute("aria-expanded", String(open));
      drawer.hidden = !open;
      dt.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      document.body.classList.toggle("drawer-open", open);
    });
  }

  // ---------- lightbox ----------------------------------------------------
  var lb = document.getElementById("lightbox");
  document.addEventListener("click", function (e) {
    var p = e.target.closest("[data-lightbox]");
    if (!p) return;
    var im = lb.querySelector("img");
    im.src = p.getAttribute("data-lightbox");
    im.alt = (p.querySelector("img") || {}).alt || "";
    lb.showModal();
  });

  // ---------- forms -------------------------------------------------------
  function fieldError(input, msg) {
    var wrap = input.closest(".field");
    var err = wrap.querySelector(".field-error");
    if (msg) {
      if (!err) { err = document.createElement("p"); err.className = "field-error"; err.id = (input.name || "f") + "-err"; wrap.appendChild(err); }
      err.textContent = msg;
      input.setAttribute("aria-invalid", "true");
      input.setAttribute("aria-describedby", err.id);
    } else if (err) {
      err.remove(); input.removeAttribute("aria-invalid"); input.removeAttribute("aria-describedby");
    }
  }

  function validate(form) {
    var first = null;
    form.querySelectorAll("[required]").forEach(function (el) {
      var bad = false, msg = "";
      if (el.type === "radio") {
        if (!form.querySelector('[name="' + el.name + '"]:checked')) { bad = true; msg = "Choose a location."; }
        if (el !== form.querySelector('[name="' + el.name + '"]')) return;
      } else if (!el.value.trim()) { bad = true; msg = "Enter your " + (el.getAttribute("data-label") || "answer").toLowerCase() + "."; }
      else if (el.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) { bad = true; msg = "Enter an email address like name@example.com."; }
      else if (el.tagName === "SELECT" && !el.value) { bad = true; msg = "Choose an option."; }
      fieldError(el, bad ? msg : "");
      if (bad && !first) first = el;
    });
    var either = form.getAttribute("data-either");
    if (either) {
      var names = either.split(","), ok = names.some(function (n) {
        var el = form.elements[n]; return el && (el.type === "file" ? el.files.length : el.value.trim());
      });
      var c = form.elements[names[0]];
      fieldError(c, ok ? "" : "Add a short note about yourself or attach your resume.");
      if (!ok && !first) first = c;
    }
    var file = form.querySelector('input[type="file"]');
    if (file && file.files.length && !/\.pdf$/i.test(file.files[0].name)) {
      fieldError(file, "Upload your resume as a PDF."); if (!first) first = file;
    }
    if (first) first.focus();
    return !first;
  }

  function summary(form) {
    var lines = [];
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.type === "file" || el.type === "submit") return;
      if (el.type === "radio" && !el.checked) return;
      var label = el.getAttribute("data-label") || el.name;
      if (el.value) lines.push(label + ": " + el.value);
    });
    return lines.join("\n");
  }

  function showSuccess(form, text) {
    var box = form.querySelector(".form-success");
    form.querySelector(".form-fields").hidden = true;
    box.hidden = false;
    if (text) box.querySelector("p").textContent = text;
    box.querySelector("h2").focus();
  }

  document.querySelectorAll("form[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate(form)) return;
      var name = form.getAttribute("data-form");
      var endpoint = (DATA.forms || {})[name];
      var btn = form.querySelector('[type="submit"]');
      var statusEl = form.querySelector(".form-status");
      if (endpoint) {
        btn.disabled = true; statusEl.textContent = "Sending…";
        fetch(endpoint, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
          .then(function (r) { if (!r.ok) throw new Error(r.status); showSuccess(form); })
          .catch(function () {
            statusEl.textContent = "That didn't send. Check your connection and try again, or call the location directly.";
          })
          .finally(function () { btn.disabled = false; });
        return;
      }
      // No form service yet: open the guest's email app, addressed to the location.
      var locEl = form.querySelector('[name="location"]:checked') || form.elements.location;
      var loc = locEl && bySlug[locEl.value];
      var to = loc ? loc.email : LOCS[0].email;
      var subject = form.getAttribute("data-subject") + (loc ? " — " + loc.city : "");
      var body = summary(form);
      if (form.querySelector('input[type="file"]')) body += "\n\n(Please attach your PDF resume to this email.)";
      window.location.href = "mailto:" + to + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
      showSuccess(form, "Your email app should open with everything filled in. Press send there to finish. If it didn't open, email " + to + ".");
    });
    var again = form.querySelector("[data-again]");
    if (again) again.addEventListener("click", function () {
      form.reset();
      form.querySelector(".form-success").hidden = true;
      form.querySelector(".form-fields").hidden = false;
    });
    form.addEventListener("input", function (e) { if (e.target.getAttribute("aria-invalid")) fieldError(e.target, ""); });
  });

  // ---------- broken images ----------------------------------------------
  function markBroken(im) { im.classList.add("is-broken"); }
  document.addEventListener("error", function (e) { if (e.target.tagName === "IMG") markBroken(e.target); }, true);
  document.querySelectorAll("img").forEach(function (im) { if (im.complete && im.naturalWidth === 0) markBroken(im); });

  // ---------- hours: open on larger screens, tap to open on phones ---------
  var wide = window.matchMedia("(min-width: 641px)");
  function syncDetails() {
    document.querySelectorAll("details[data-desktop-open]").forEach(function (d) { if (wide.matches) d.open = true; });
  }
  syncDetails();
  if (wide.addEventListener) wide.addEventListener("change", syncDetails);

  // ---------- put the guest's remembered location first --------------------
  (function () {
    var s = getSaved(), list = document.querySelector(".today-list");
    if (!s || !list) return;
    var item = list.querySelector('[data-status="' + s + '"]');
    if (item) list.prepend(item.closest(".today-item"));
  })();

  applySaved();
  paintStatus();
  setInterval(paintStatus, 60000);
})();

// ---------------------------------------------------------------------------
// Simply South — site data
// Everything the owners might ever need to change lives in this one file.
// ---------------------------------------------------------------------------

// Where Owner.com (online ordering, rewards, accounts) lives.
// BEFORE launch: Owner still serves simplysouth.us, so links go there.
// AT launch: once Owner moves ordering to the subdomain, change this to
//   "https://order.simplysouth.us" and rebuild. Every order/rewards/sign-in
//   link on the site and the redirect file update automatically.
export const ORDER_BASE = "https://simplysouth.us";

// Photos live in /assets/img inside this project, so they load everywhere
// (previews, the live site, and after Owner moves to its own subdomain).

// Form delivery. Leave "" to fall back to opening the guest's email app,
// addressed to the chosen location. Paste a Formspree / Basin / Getform
// endpoint (or your own) to have submissions emailed automatically.
export const FORM_ENDPOINTS = {
  catering: "",
  contact: "",
  careers: "",
};

export const SITE = {
  name: "Simply South",
  url: "https://simplysouth.us",
  themeColor: "#1E4A2E",
  logo: "logo.png",
  logoBadge: "logo-badge.jpg",
  ogImage: "square-dosa.jpg",
  heroAlt: "A crisp square dosa with onion and herbs and a cup of chutney on a brass tray at Simply South.",
  appDownload: "https://2538eb1881094349806506c36852ae5a.app.ordersave.com/download-app",
  appStore: "https://apps.apple.com/app/id6814561934",
  googlePlay: "https://play.google.com/store/apps/details?id=com.owner.simplysouth",
  giftCardBalance: "https://www.toasttab.com/simplysouthmckinney/findcard",
  franchiseWhatsApp: "https://api.whatsapp.com/send/?phone=18474975040&text&type=phone_number&app_absent=0",
  nytStory: "https://www.nytimes.com/interactive/2024/dining/best-restaurants-america.html",
};

// Order/rewards links (all point at Owner).
export const owner = {
  menu: (slug) => `${ORDER_BASE}/menu${slug ? "/" + slug : ""}`,
  item: (id, name) => `${ORDER_BASE}/menu?item=${id}&matchItemName=${encodeURIComponent(name)}`,
  login: () => `${ORDER_BASE}/login`,
  tag: (t) => `${ORDER_BASE}/tags/${t}`,
  legal: (p) => `${ORDER_BASE}/${p}`,
};

// Hours: [open, close] pairs in 24h "HH:MM", local Central time (all five
// locations are on Central). Index 0 = Sunday.
const H = (...pairs) => pairs;

export const LOCATIONS = [
  {
    slug: "irving",
    city: "Irving",
    state: "TX",
    label: "Irving, TX",
    tagline: "The original. The one The New York Times came to.",
    address: "1001 MacArthur Park Dr",
    cityLine: "Irving, TX 75063",
    phone: "(972) 787-6884",
    tel: "+19727876884",
    email: "Irving@SimplySouth.us",
    maps: "https://maps.google.com/?cid=10495055576036630133",
    toast: "https://toast.app/r/simplysouthirving?partySize=2",
    facebook: "https://www.facebook.com/simplysouthirving",
    instagram: "https://www.instagram.com/simplysouthirving",
    parking: "Plenty of parking in the shopping center.",
    hero: "irving-exterior.jpg",
    heroAlt: "The Simply South Irving restaurant at dusk.",
    intro:
      "Our first restaurant, in the MacArthur Park shopping center. It's the kitchen The New York Times named one of America's 50 best restaurants in 2024, and it still runs the full menu, breakfast tiffins through dinner thalis.",
    reviewsHeading: "Why Irving keeps coming back",
    reviewsBody:
      "Regulars order the Guntur thatte idli, crisp dosas and the biryanis with chutneys and sambar. Peak hours mean a wait, and most guests will tell you it's worth it.",
    specialHeading: "Beyond the standard menu",
    specialBody:
      "Malabar parotta with kheema masala, Nellore karam dosa, and the pongal, vada and idli combo with house chutneys — served all day.",
    gallery: [
      ["idli-sambar.jpg", "Idlis with curry leaves, served with a bowl of sambar."],
      ["dosa-banana-leaf.jpg", "A dosa on a banana leaf with two chutneys in brass bowls."],
      ["biryani.jpg", "Vegetable biryani in a black bowl with raita."],
    ],
    hours: [
      H(["08:00", "16:00"], ["17:00", "22:00"]),
      H(["11:00", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["08:00", "16:00"], ["17:00", "22:30"]),
      H(["08:00", "16:00"], ["17:00", "22:30"]),
    ],
  },
  {
    slug: "frisco",
    city: "Frisco",
    state: "TX",
    label: "Frisco, TX",
    tagline: "The full Simply South experience for North DFW.",
    address: "8250 State Hwy 121",
    cityLine: "Frisco, TX 75034",
    phone: "(972) 787-6666",
    tel: "+19727876666",
    email: "Frisco@SimplySouth.us",
    maps: "https://maps.google.com/?cid=16067651394628784399",
    toast: "https://toast.app/r/simplysouthfrisco?partySize=2",
    facebook: "https://www.facebook.com/simplysouthfrisco",
    instagram: "https://www.instagram.com/simplysouthfrisco",
    parking: "Plenty of parking, with easy access from Hwy 121.",
    hero: "frisco-exterior.jpg",
    heroAlt: "The Simply South Frisco storefront.",
    intro:
      "Right off State Highway 121, serving the same 200-dish menu as Irving to Frisco, Plano, The Colony and the rest of North DFW.",
    reviewsHeading: "What Frisco orders",
    reviewsBody:
      "Morning tiffin is the draw here: idli, vada and benne masala dosa. Guests mention the clean dining room, generous portions and attentive service. Weekend mornings get busy.",
    specialHeading: "Made fresh, every time",
    specialBody:
      "Benne dosa, soft idly and a team that's happy to steer first-timers toward a new favorite.",
    gallery: [
      ["idli-sambar.jpg", "Idlis with curry leaves, served with a bowl of sambar."],
      ["square-dosa.jpg", "A crisp square dosa with onion, herbs and a cup of chutney on a brass tray."],
      ["fried-idli.jpg", "Fried idlis with sambar, podi and chutneys."],
    ],
    hours: [
      H(["08:30", "16:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:30"], ["17:30", "22:30"]),
      H(["08:30", "16:00"], ["17:30", "22:30"]),
    ],
  },
  {
    slug: "mckinney",
    city: "McKinney",
    state: "TX",
    label: "McKinney, TX",
    tagline: "Your neighborhood South Indian kitchen in Collin County.",
    address: "4781 S Custer Rd",
    cityLine: "McKinney, TX 75070",
    phone: "(972) 255-6666",
    tel: "+19722556666",
    email: "McKinney@SimplySouth.us",
    maps: "https://maps.google.com/?cid=6758075538053496145",
    toast: "https://toast.app/r/simplysouthmckinney?partySize=2",
    facebook: "https://www.facebook.com/simplysouthmckinney",
    instagram: "https://www.instagram.com/simplysouthmckinney",
    parking: "Ample surface parking — drop in for lunch or stay for dinner.",
    hero: "biryani-bowls.jpg",
    heroAlt: "Two bowls of biryani topped with curry and sliced onion.",
    intro:
      "On South Custer Road, serving McKinney, Allen and the rest of Collin County with the full menu and a room that works for families and long dinners alike.",
    reviewsHeading: "What McKinney loves",
    reviewsBody:
      "Thousands of reviews mention the same things: fresh food, generous portions, the specialty dosas and biryanis, and service that looks after families and older guests.",
    specialHeading: "Dishes that go deeper",
    specialBody:
      "Regional plates you won't find elsewhere in the northern suburbs — ghee karam thatte idly, benne veg kheema dosa — served with six or seven house-made chutneys.",
    gallery: [
      ["dosa-banana-leaf.jpg", "A dosa on a banana leaf with two chutneys in brass bowls."],
      ["biryani.jpg", "Vegetable biryani in a black bowl with raita."],
      ["sweets.jpg", "Kaju katli, ladoos and other sweets on a wooden platter."],
    ],
    hours: [
      H(["08:00", "16:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:00"]),
      H(["10:30", "15:00"], ["17:30", "22:30"]),
      H(["08:00", "16:00"], ["17:30", "22:30"]),
    ],
  },
  {
    // URL stays /houston so existing Google rankings and links keep working.
    slug: "houston",
    city: "Katy",
    state: "TX",
    label: "Katy, TX",
    tagline: "Pure vegetarian South Indian for the Houston area.",
    address: "24600 Katy Fwy #1020",
    cityLine: "Katy, TX 77494",
    phone: "(281) 241-6666",
    tel: "+12812416666",
    email: "Katy@SimplySouth.us",
    maps: "https://www.google.com/maps/dir/?api=1&destination=24600+Katy+Fwy+%231020%2C+Katy%2C+TX+77494",
    toast: "https://toast.app/r/simplysouthhouston?partySize=2",
    facebook: "https://www.facebook.com/simplysouthhouston",
    instagram: "https://www.instagram.com/simplysouthhouston/",
    parking: "",
    hero: "thali-spread.jpg",
    heroAlt: "A full thali with naan, curries, rice and a dosa on a steel platter.",
    intro:
      "On the Katy Freeway, serving Katy, Cinco Ranch and greater Houston with dosas, thalis and traditional starters — the same pure vegetarian menu as our other kitchens.",
    reviewsHeading: "What Katy orders",
    reviewsBody:
      "Dosas, idlis and the Indo-Chinese dishes come up again and again in reviews, along with the warm, family-friendly room. The flavors hold up even at the dinner rush.",
    specialHeading: "Accommodating by design",
    specialBody:
      "Our Katy kitchen can handle a wide range of dietary needs, catering included. Call ahead and tell us what you need.",
    gallery: [
      ["dosa-banana-leaf.jpg", "A dosa on a banana leaf with two chutneys in brass bowls."],
      ["idli-sambar.jpg", "Idlis with curry leaves, served with a bowl of sambar."],
      ["catering-trays.jpg", "Puri, dosas, biryani and curries in brass serving trays."],
    ],
    hours: [
      H(["11:00", "15:00"], ["17:30", "21:00"]),
      H(["11:00", "15:00"], ["17:30", "22:00"]),
      H(["11:00", "15:00"], ["17:30", "22:00"]),
      H(["11:00", "15:00"], ["17:30", "22:00"]),
      H(["11:00", "15:00"], ["17:30", "22:00"]),
      H(["11:00", "15:00"], ["17:30", "22:30"]),
      H(["11:00", "15:00"], ["17:30", "22:30"]),
    ],
  },
  {
    slug: "warrenville",
    city: "Warrenville",
    state: "IL",
    label: "Warrenville, IL",
    tagline: "Our first home outside Texas, cooking for Chicagoland.",
    address: "28258 W Diehl Rd",
    cityLine: "Warrenville, IL 60555",
    phone: "(331) 209-6666",
    tel: "+13312096666",
    email: "Warrenville@SimplySouth.us",
    maps: "https://maps.google.com/?cid=15628108437455578789",
    toast: "https://toast.app/r/simplysouthwarrenville?partySize=2",
    facebook: "https://www.facebook.com/simplysouthwarrenville",
    instagram: "https://www.instagram.com/simplysouthwarrenville",
    parking: "Ample parking, just off Diehl Road.",
    hero: "warrenville-exterior.jpg",
    heroAlt: "The Simply South Warrenville restaurant.",
    intro:
      "Just off Diehl Road, bringing the full Simply South menu to Warrenville, Naperville, Aurora, Wheaton, Lisle and the western suburbs.",
    reviewsHeading: "Why Warrenville loves it",
    reviewsBody:
      "Flaky parotta, pullattu and the spiced biryanis lead the reviews, along with friendly service and Jain-friendly options. Peak hours can be busy.",
    specialHeading: "Regional specialties, done right",
    specialBody:
      "Benne dosa, Nellore karam masala dosa and thatte idli, served with rasam, sambar and a rotating set of chutneys.",
    gallery: [
      ["thali.jpg", "A thali with rice, curries, roti and a samosa on a steel platter."],
      ["biryani.jpg", "Vegetable biryani in a black bowl with raita."],
      ["sweets.jpg", "Kaju katli, ladoos and other sweets on a wooden platter."],
    ],
    hours: [
      H(["09:00", "22:00"]),
      H(["11:30", "15:00"], ["17:30", "22:00"]),
      H(["11:30", "15:00"], ["17:30", "22:00"]),
      H(["11:30", "15:00"], ["17:30", "22:00"]),
      H(["11:30", "15:00"], ["17:30", "22:00"]),
      H(["11:30", "15:00"], ["17:30", "22:30"]),
      H(["09:00", "22:30"]),
    ],
  },
];

export const FEATURED = [
  ["weekday-lunch-thali-gFYF", "Weekday Lunch Thali", "A full plate of small dishes, rice, bread and dessert. Monday to Friday lunch."],
  ["masala-dosa-lrdj", "Masala Dosa", "Crisp rice-and-lentil crepe around spiced potato, with chutneys and sambar."],
  ["davangere-benne-dosa-zTMZ", "Davangere Benne Dosa", "The buttery, soft-crisp dosa from Karnataka."],
  ["sambar-idly-gENi", "Sambar Idli", "Steamed idlis soaked in hot sambar."],
  ["plain-pesarattu-9jod", "Plain Pesarattu", "Andhra-style green moong dal dosa."],
  ["ghee-ven-pongal-N9rc", "Ghee Ven Pongal", "Rice and moong dal cooked soft with ghee, pepper and cumin."],
  ["guntur-ghee-kaaram-thatte-idly-jQ0Y", "Guntur Ghee Kaaram Thatte Idly", "Plate-sized idli, ghee and fiery Guntur podi."],
  ["nellore-ghee-kaaram-thatte-idly-nxXf", "Nellore Ghee Kaaram Thatte Idly", "The Nellore take on thatte idli, with its own spice blend."],
  ["ghee-kaaram-fried-button-idly-NeE7", "Ghee Kaaram Fried Button Idly", "Bite-sized idlis, fried and tossed in ghee and podi."],
  ["mix-veg-uthappam-lhtR", "Mix Veg Uthappam", "A thick, soft rice pancake topped with vegetables."],
];

export const KITCHEN_PHOTOS = [
  ["fried-idli.jpg", "Fried idlis with sambar, podi and chutneys."],
  ["dosa-banana-leaf.jpg", "A dosa on a banana leaf with two chutneys in brass bowls."],
  ["idli-sambar.jpg", "Idlis with curry leaves, served with a bowl of sambar."],
  ["biryani.jpg", "Vegetable biryani in a black bowl with raita."],
  ["sweets.jpg", "Kaju katli, ladoos and other sweets on a wooden platter."],
  ["thali.jpg", "A thali with rice, curries, roti and a samosa on a steel platter."],
];

export const REVIEWS = [
  ["Madhu P.", "We went out for dinner last night and had an absolutely phenomenal dining experience! If you're looking for authentic, high-quality Indian vegetarian food in the Dallas area, this restaurant is an absolute must-visit."],
  ["Nikhila K.", "Simply South is a wonderful spot for anyone craving authentic vegetarian Indian cuisine. The ambience is warm and inviting, making it a great place for both families and casual dining. The service was attentive and friendly, and the staff made sure we were well taken care of throughout our visit."],
  ["Pallavi M.", "We booked a table for Valentine's Day and were impressed by the warm welcome. Our server, Soonu, provided excellent service. The menu is extensive, and we enjoyed trying several dishes – the chili gobhi was a standout. The seating was comfortable, adding to the pleasant atmosphere. Highly recommend!"],
  ["Vamsi P.", "Had an amazing breakfast at Simply South! The food was fresh, authentic, and full of flavor. The ambiance was clean and welcoming, making it a great spot to start the day."],
];

export const PRESS = [
  ["The New York Times", "America's Best Restaurants, 2024", "Simply South named to the list for its South Indian vegetarian cooking.", "https://www.nytimes.com/interactive/2024/dining/best-restaurants-america.html"],
  ["WFAA", "One of the 50 best restaurants in the U.S.", "Coverage of the Irving restaurant's place on the Times list.", "https://www.wfaa.com/article/life/food/best-restaurant-new-york-times-simply-south/287-8aff049e-e6ae-4841-89e3-8029d9caf090"],
  ["Dallas Observer", "An Irving restaurant makes the Times' best 50", "On the Irving kitchen's national recognition.", "https://www.dallasobserver.com/food-drink/this-dallas-indian-restaurant-named-one-of-the-top-50-in-america-20675379/"],
  ["The Dallas Morning News", "Irving restaurant named to the NYT 50 best", "September 2024.", "https://www.dallasnews.com/food/2024/09/27/irving-restaurant-on-nyt-list-of-50-best-in-the-country/"],
  ["Dallas Innovates", "Why the Times put Simply South on its 2024 list", "A look at what earned the recognition.", "https://dallasinnovates.com/the-last-word-why-the-new-york-times-put-irvings-simply-south-on-its-2024-americas-best-restaurants-list/"],
  ["Lone Star Live", "Texas restaurants winning over diners", "October 2024. Simply South alongside two other Texas kitchens.", "https://www.lonestarlive.com/dining/2024/10/from-creole-soul-food-to-veggie-indian-fare-these-3-texas-restaurants-are-winning-over-diners.html"],
  ["KISS FM El Paso", "Three Texas restaurants among the best in the U.S.", "Texas's showing on the Times list.", "https://kisselpaso.com/3-texas-restaurants-best-in-us/"],
  ["CultureMap Dallas", "Simply South named a New York Times favorite", "On the Irving restaurant's selection.", "https://dallas.culturemap.com/news/restaurants-bars/newyork-times-simply-south-irving/"],
];

export const PRESS_PHOTOS = [
  ["idli-sambar.jpg", "Idlis with curry leaves, served with a bowl of sambar."],
  ["biryani.jpg", "Vegetable biryani in a black bowl with raita."],
  ["square-dosa.jpg", "A crisp square dosa with onion, herbs and a cup of chutney on a brass tray."],
];

// "What are you known for?" — kept from the current site for search.
export const KNOWN_FOR = [
  ["Dosa", "dosa"], ["Masala Dosa", "masala-dosa"], ["Benne Dosa", "benne-dosa"], ["Idli", "idli"],
  ["Pongal", "pongal"], ["Sambar", "sambar"], ["Rasam", "rasam"], ["Chutneys", "chutneys"],
  ["Thali", "thali"], ["Bhojanam", "bhojanam"], ["Biryani", "biryani"], ["Biryani Restaurant", "biryani-restaurant"],
  ["Andhra Food", "andhra-food"], ["Vegetarian Food", "vegetarian-food"], ["Breakfast", "breakfast"],
  ["Filter Coffee", "filter-coffee"], ["Coffee", "coffee"], ["Badam Milk", "badam-milk"], ["Mango Lassi", "mango-lassi"],
  ["Lassi", "lassi"], ["Samosa", "samosa"], ["Mirchi Bajji", "mirchi-bajji"], ["Kebab", "kebab"],
  ["Soya Chaap", "soya-chaap"], ["Paneer Bhurji", "paneer-bhurji"], ["Palak Paneer", "palak-paneer"],
  ["Malai Kofta", "malai-kofta"], ["Aloo Gobi", "aloo-gobi"], ["Gobi", "gobi"], ["Gobi Manchurian", "gobi-manchurian"],
  ["Keema", "keema"], ["Curry", "curry"], ["Dal", "dal"], ["Tadka", "tadka"], ["Parotta", "parotta"],
  ["Naan", "naan"], ["Butter Naan", "butter-naan"], ["Garlic Naan", "garlic-naan"], ["Roti", "roti"], ["Kulcha", "kulcha"],
  ["Hakka Noodles", "hakka-noodles"], ["Veg Hakka Noodles", "veg-hakka-noodles"], ["Fried Rice", "fried-rice"],
  ["Veg Fried Rice", "veg-fried-rice"], ["French Fries", "french-fries"], ["Fries", "fries"],
  ["Gulab Jamun", "gulab-jamun"], ["Double Ka Meetha", "double-ka-meetha"], ["Gajar Ka Halwa", "gajar-ka-halwa"],
  ["Bobbatlu", "bobbatlu"], ["Apricot Delight", "apricot-delight"], ["Pastries", "pastries"],
  ["Family Friendly Restaurant", "family-friendly-restaurant"],
];

export const AREAS = [
  "Irving", "Coppell", "Carrollton", "Farmers Branch", "Frisco", "Plano", "The Colony", "McKinney", "Allen",
  "Katy", "Cinco Ranch", "Warrenville", "Naperville", "Aurora", "Wheaton", "Lisle", "Winfield", "Eola",
  "Warrenhurst", "Johnsue",
];

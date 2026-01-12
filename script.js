// --- DATA ("The Backend") ---

const MENU_DATA = {
    "IDLY SPECIAL": {
        subtitle: "Idly, Thatte Idly, Button/Chitti Idly",
        items: [
            { name: "Plain Idly", price: "", description: "" },
            { name: "Ghee Idly", price: "", description: "" },
            { name: "Bezawada Babai Podi Idly", price: "", description: "" },
            { name: "Ghee Kaaram Fried Idly", price: "", description: "" },
            { name: "Gunturu Idly", price: "", description: "" },
            { name: "Nellore Ghee Kaaram Idly", price: "", description: "" },
            { name: "Sambar Idly", price: "", description: "" },
            { name: "Rasam Idly", price: "", description: "" },
            { name: "Ulavacharu Idly", price: "", description: "" },
            { name: "3 in 1 Idly", price: "", description: "1 plain, 1 Ghee Kaaram, 1 Gunturu" },
            { name: "Plain Thatte Idly", price: "", description: "" },
            { name: "Gunturu Thatte Idly", price: "", description: "" },
            { name: "Nellore Ghee Kaaram Thatte Idly", price: "", description: "" },
            { name: "Sambar Thatte Idly", price: "", description: "" },
            { name: "3 in 1 Thatte Idly", price: "", description: "1 plain, 1 Ghee Kaaram, 1 Gunturu" },
            { name: "Button Idly/ Chitti Idly", price: "", description: "" },
            { name: "Ghee Kaaram Fried Button Idly", price: "", description: "" },
            { name: "Tawa Button Idly", price: "", description: "" },
            { name: "Gunturu Button Idly", price: "", description: "" },
            { name: "Nellore Ghee Kaaram Button Idly", price: "", description: "" },
            { name: "Sambar Button Idly", price: "", description: "" },
            { name: "Rasam Button Idly", price: "", description: "" }
        ]
    },
    "WADA": {
        subtitle: "Lentil Donuts & Fritters",
        items: [
            { name: "Wada", price: "", description: "" },
            { name: "Chitti Wada", price: "", description: "" },
            { name: "Nellore Ghee Kaaram Wada", price: "", description: "" },
            { name: "Gunta Ponganalu", price: "", description: "" },
            { name: "Sambar Wada", price: "", description: "" },
            { name: "Dahi Wada", price: "", description: "" },
            { name: "3 in 1 Wada", price: "", description: "1 plain, 1 Nellore Ghee Kaaram, 1 Sambar" }
        ]
    },
    "TIFFINS": {
        subtitle: "Pongal, Upma, Puri & More",
        items: [
            { name: "Ghee Ven Pongal", price: "", description: "" },
            { name: "Ghee Cashew Khara Ven Pongal", price: "", description: "" },
            { name: "Ghee Mix Veg Upma", price: "", description: "" },
            { name: "Tomato Bath", price: "", description: "" },
            { name: "Jeedipappu Upma", price: "", description: "" },
            { name: "Bisi Bele Bath", price: "", description: "" },
            { name: "Special Bisi Bele Bath", price: "", description: "With MealMaker" },
            { name: "Plain Uthappam", price: "", description: "" },
            { name: "Mix Veg Uthappam", price: "", description: "" },
            { name: "Onion Chilli Uthappam", price: "", description: "" },
            { name: "Masala Uthappam", price: "", description: "" },
            { name: "Nellore Ghee Kaaram Uthappam", price: "", description: "" },
            { name: "3 in 1 Uthappam", price: "", description: "Mini Plain, Onion Chilli, Guntur Podi" },
            { name: "Pullattu/Majjigattu", price: "", description: "" },
            { name: "Ghee Kaaram Pullattu", price: "", description: "" },
            { name: "Plain Dibbarotte", price: "", description: "25 mins cooking time" },
            { name: "Puri with Aloo Bhaji", price: "", description: "" },
            { name: "Puri with Chole", price: "", description: "" },
            { name: "Bature with Chole", price: "", description: "" },
            { name: "Malabar Parotta with Veg Kurma", price: "", description: "" }
        ]
    },
    "DOSA BAZAAR": {
        subtitle: "South Indian Crepes",
        items: [
            { name: "Plain Dosa", price: "", description: "" },
            { name: "Masala Dosa", price: "", description: "" },
            { name: "Ghee Roast Dosa", price: "", description: "" },
            { name: "Onion Chilli Dosa", price: "", description: "" },
            { name: "Mysore Masala Dosa", price: "", description: "" },
            { name: "70mm Dosa", price: "", description: "" },
            { name: "Davangere Benne Masala Dosa", price: "", description: "" },
            { name: "Neyyi Kaaram Onion Dosa", price: "", description: "" },
            { name: "Nellore Neyyi Kaaram Dosa", price: "", description: "" },
            { name: "Ulavacharu Dosa", price: "", description: "" },
            { name: "Steam Dosa/Megastar Dosa", price: "", description: "" },
            { name: "Pesarattu Ghee Upma", price: "", description: "" },
            { name: "Onion Ravva Masala Dosa", price: "", description: "" },
            { name: "Paneer Tikka Dosa", price: "", description: "" },
            { name: "Cheese Dosa", price: "", description: "" }
        ]
    },
    "AARAMBHAM": {
        subtitle: "Starters & Appetizers",
        items: [
            { name: "Samosa (2 Pcs)", price: "", description: "" },
            { name: "Baby Corn 65", price: "", description: "" },
            { name: "Gobi Manchurian", price: "", description: "" },
            { name: "Paneer Pasanda Bites", price: "", description: "" },
            { name: "Chilli Mushroom", price: "", description: "" },
            { name: "Crispy LotusRoot ChatPata", price: "", description: "" },
            { name: "Karivepaku Paneer", price: "", description: "" },
            { name: "Tandoori Veggie Chaaps", price: "", description: "" },
            { name: "Paneer Tikka Kebab", price: "", description: "" }
        ]
    },
    "AMOGHAM": {
        subtitle: "Main Course Entrees",
        items: [
            { name: "Gutti Vankaya Curry", price: "", description: "" },
            { name: "Paneer Butter Masala", price: "", description: "" },
            { name: "Cashew Mushroom Masala", price: "", description: "" },
            { name: "Veg Kheema Masala", price: "", description: "" },
            { name: "Palak Paneer", price: "", description: "" },
            { name: "Methi Chaman", price: "", description: "" },
            { name: "Dal Makhni", price: "", description: "" },
            { name: "Mamidikay Pappu (Mango Daal)", price: "", description: "" }
        ]
    },
    "RUCHIKARAM": {
        subtitle: "Biryanis & Pulao",
        items: [
            { name: "Veg Dum Biryani", price: "", description: "" },
            { name: "Paneer Tikka Biryani", price: "", description: "" },
            { name: "Jackfruit Dum Pulao", price: "", description: "" },
            { name: "Veg Kheema Biryani", price: "", description: "" },
            { name: "Ulavacharu Paneer Biryani", price: "", description: "" },
            { name: "Gongura Veg Biryani", price: "", description: "" },
            { name: "Avakai Paneer Pulao", price: "", description: "" }
        ]
    },
    "VIDESI RUCHULU": {
        subtitle: "Indo-Chinese Specials",
        items: [
            { name: "Veg Fried Rice", price: "", description: "" },
            { name: "Paneer Fried Rice", price: "", description: "" },
            { name: "Schezwan Noodles", price: "", description: "" },
            { name: "Veg Hakka Noodles", price: "", description: "" },
            { name: "Impossible Veg Fried Rice", price: "", description: "" },
            { name: "Impossible Veg Hakka Noodles", price: "", description: "" }
        ]
    },
    "THALIS": {
        subtitle: "Traditional Meals",
        items: [
            { name: "Weekday Lunch Thali", price: "", description: "Mon-Fri (12PM-3PM). Roti, Curry, Sambar, Rasam, Daal, Rice, Dessert." },
            { name: "Weekend Bhojanam", price: "", description: "Sat-Sun (12PM-3PM). Unlimited South Indian Feast with Specials." },
            { name: "South Indian Dinner Thali", price: "", description: "Everyday (7PM-Close). Poori, Veg Fry, Kurma, Bisi Bele Bath, Curd Rice, Dessert." },
            { name: "North Indian Dinner Thali", price: "", description: "Everyday (7PM-Close). Naan, Paneer Butter Masala, Methi Chaman, Jeera Rice, Dessert." }
        ]
    },
    "AMRUTHAM": {
        subtitle: "Beverages & Desserts",
        items: [
            { name: "Filter Coffee", price: "", description: "" },
            { name: "Ginger Pepper Tea", price: "", description: "" },
            { name: "Mango Lassi", price: "", description: "" },
            { name: "Signature Dry Fruit Falooda", price: "", description: "" },
            { name: "Gulab Jamun with Ice Cream", price: "", description: "" },
            { name: "Qubani Ka Meetha", price: "", description: "" },
            { name: "Rasamalai", price: "", description: "" }
        ]
    }
};

const LOCATIONS = [
    {
        name: "Irving, TX",
        address: "1001 MACARTHUR PARK DR, IRVING, TX 75063, USA",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=1001+MACARTHUR+PARK+DR,+IRVING,+TX+75063",
        mapImage: "images/irvingmap.png",
        labels: ["MACARTHUR PK", "VALLEY VIEW", "LAS COLINAS"]
    },
    {
        name: "Frisco, TX",
        address: "8250 STATE HWY 121, FRISCO, TX 75034, USA",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=8250+STATE+HWY+121,+FRISCO,+TX+75034",
        mapImage: "images/friscomap.png",
        labels: ["HWY 121", "STONEBRIAR", "SAM RAYBURN"]
    },
    {
        name: "Warrenville, IL",
        address: "28258 DIEHL RD, WARRENVILLE, IL 60555, USA",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=28258+DIEHL+RD,+WARRENVILLE,+IL+60555",
        mapImage: "images/warrenvillemap.png",
        labels: ["DIEHL RD", "I-88", "CANTERA"]
    }
];

// --- LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    // 1. Render Menu Content (if on menu page)
    const menuContainer = document.getElementById('menu-content');
    if (menuContainer) {
        let menuHTML = '';
        for (const [category, data] of Object.entries(MENU_DATA)) {
            menuHTML += `
                <section class="menu-section" id="${category.toLowerCase().replace(/\s+/g, '-')}">
                    <h2 class="menu-category-title">${category}</h2>
                    <p class="section-tag">${data.subtitle}</p>
                    <div class="menu-grid">
                        ${data.items.map(item => `
                            <div class="menu-item">
                                <h3><span>${item.name}</span> <span class="price">${item.price}</span></h3>
                                <p>${item.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }
        menuContainer.innerHTML = menuHTML;
    }

    // 2. Handle Location Switching (if on main page)
    const locationEntries = document.querySelectorAll('.location-entry');
    const mapLabels = document.querySelectorAll('.map-label');
    const mapPin = document.querySelector('.map-pin');
    const mapLink = document.querySelector('.map-frame'); // The container we want to make a link

    if (locationEntries.length > 0) {
        // Function to update map
        const updateMap = (index) => {
            const data = LOCATIONS[index];

            // Update UI active state
            locationEntries.forEach(e => e.classList.remove('active'));
            locationEntries[index].classList.add('active');

            // Update Map Labels
            if (mapLabels.length >= 3) {
                mapLabels[0].textContent = data.labels[0];
                mapLabels[1].textContent = data.labels[1];
                mapLabels[2].textContent = data.labels[2];
            }

            // Update map background image
            const mandala = document.querySelector('.map-mandala');
            if (mandala) {
                if (data.mapImage) {
                    // Use the specific map image for this location
                    mandala.style.backgroundImage = `url('${data.mapImage}')`;
                } else {
                    // Default Irving map - use the Google Maps tile URL
                    mandala.style.backgroundImage = "url('https://www.google.com/maps/vt/pb=!1m4!1m3!1i14!2i3954!3i6666!2m3!1e0!2sm!3i666666666!3m8!2sen!2sus!5e1105!12m4!1e68!2m2!1sset!2sRoadmap!4e0!5m1!1e0!23i1347507')";
                }
                mandala.style.backgroundSize = 'cover';
                mandala.style.backgroundPosition = 'center';
            }

            // Update Link
            if (mapLink) {
                mapLink.onclick = () => window.open(data.mapUrl, '_blank');
            }

            // Animate pin
            if (mapPin) {
                mapPin.style.transform = 'scale(1.2) rotate(10deg)';
                setTimeout(() => {
                    mapPin.style.transform = 'scale(1) rotate(0deg)';
                }, 300);
            }
        };

        // Initialize first location
        updateMap(0);

        locationEntries.forEach((entry, index) => {
            entry.addEventListener('click', () => updateMap(index));
        });

        // Map control buttons (buttons located next to the map)
        const mapSwitchBtns = document.querySelectorAll('.map-switch-btn');
        const keyToIndex = { irving: 0, frisco: 1, warrenville: 2 };
        if (mapSwitchBtns.length > 0) {
            mapSwitchBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    const key = btn.dataset.key;
                    const idx = keyToIndex[key];
                    if (typeof idx === 'number') updateMap(idx);
                });
            });
        }
    }
});

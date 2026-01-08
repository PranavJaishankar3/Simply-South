// --- DATA ("The Backend") ---

const MENU_DATA = {
    "AARAMBHAM": {
        subtitle: "Starters & Appetizers",
        items: [
            { name: "Medhu Vada", price: "$8.49", description: "Crispy fried lentil donuts served with chutney and sambar." },
            { name: "Guntur Idli", price: "$9.99", description: "Steamed rice cakes tossed in spicy Guntur podi and ghee." },
            { name: "Onion Bhaji", price: "$7.99", description: "Crispy onion fritters seasoned with Indian spices." },
            { name: "Mysore Bonda", price: "$8.99", description: "Crispy outside, fluffy inside lentil dumplings." }
        ]
    },
    "AMOGHAM": {
        subtitle: "Entrees & Daal",
        items: [
            { name: "Paneer Butter Masala", price: "$14.99", description: "Soft paneer cubes in a rich, creamy tomato-based gravy." },
            { name: "Bagara Baingan", price: "$13.99", description: "Baby eggplants cooked in a sesame, peanut, and tamarind sauce." },
            { name: "Dal Tadka", price: "$12.49", description: "Yellow lentils tempered with ghee, cumin, and garlic." },
            { name: "Vegetable Kurma", price: "$13.49", description: "Seasonal veggies cooked in a coconut-based spiced gravy." }
        ]
    },
    "RUCHIKARAM": {
        subtitle: "Biryanis & Pulao",
        items: [
            { name: "Hyderabadi Veg Biryani", price: "$15.99", description: "Fragrant basmati rice slow-cooked with vegetables and aromatic spices." },
            { name: "Jackfruit Biryani", price: "$16.99", description: "A unique biryani featuring tender jackfruit pieces." },
            { name: "Paneer Pulao", price: "$14.49", description: "Mildly spiced rice cooked with marinated paneer cubes." }
        ]
    }
};

const LOCATIONS = [
    {
        name: "Irving, TX",
        address: "1001 MACARTHUR PARK DR, IRVING, TX 75063, USA",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=1001+MACARTHUR+PARK+DR,+IRVING,+TX+75063",
        labels: ["MACARTHUR PK", "VALLEY VIEW", "LAS COLINAS"]
    },
    {
        name: "Frisco, TX",
        address: "8250 STATE HWY 121, FRISCO, TX 75034, USA",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=8250+STATE+HWY+121,+FRISCO,+TX+75034",
        labels: ["STONEBRIAR", "HWY 121", "LEGACY"]
    },
    {
        name: "Warrenville, IL",
        address: "28258 DIEHL RD, WARRENVILLE, IL 60555, USA",
        mapUrl: "https://www.google.com/maps/search/?api=1&query=28258+DIEHL+RD,+WARRENVILLE,+IL+60555",
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
                <section class="menu-section" id="${category.toLowerCase()}">
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

            // Panning effect (simulate moving to a new area)
            const offsets = [
                'center',
                'top left',
                'bottom right'
            ];
            const mandala = document.querySelector('.map-mandala');
            if (mandala) {
                mandala.style.backgroundPosition = offsets[index] || 'center';
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
    }
});

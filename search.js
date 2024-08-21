// Search Filter: Locations

export const locations = [
    "Queens, New York",
    "Brooklyn, New York",
    "Manhattan, New York",
    "Bronx, New York",
    "Staten Island, New York",
    "Hollywood, Los Angeles",
    "Downtown, Los Angeles",
    "Beverly Hills, Los Angeles",
    "Chinatown, Los Angeles",
    "Lincoln Park, Chicago",
    "Hyde Park, Chicago",
    "Englewood, Chicago",
    "Downtown, Houston",
    "Midtown, Houston",
    "Uptown, Houston",
    "Desert Ridge, Phoenix",
    "Paradise Valley, Phoenix",
    "Encanto Village, Phoenix",
    "Mission District, San Francisco",
    "Castro District, San Francisco",
    "Chinatown, San Francisco",
    "South Beach, Miami",
    "Wynwood, Miami",
    "Little Havana, Miami"
];

export const input = document.getElementById('location');
export const dropdownContent = document.getElementById('dropdown-content');

export function filterLocations(value) {
    dropdownContent.innerHTML = '';
    if (value) {
        const filteredLocations = locations.filter(location =>
            location.toLowerCase().includes(value.toLowerCase())
        );

        const limitedSuggestions = filteredLocations.slice(0, 6);

        limitedSuggestions.forEach(location => {
            const div = document.createElement('div');
            div.textContent = location;
            div.addEventListener('click', function () {
                input.value = location;
                dropdownContent.classList.remove('show');
            });
            dropdownContent.appendChild(div);
        });
    }
    dropdownContent.classList.add('show');
}

input.addEventListener('input', function () {
    const value = input.value.toLowerCase();
    filterLocations(value);
    if (value === '') {
        dropdownContent.classList.remove('show');
    }
});



// Search Filter Prices
export const deafultPrice = document.getElementById("default-price");
export const priceSelected = document.querySelector('.price-dropdown-selected');
export const imgHTML = '<img class="cursor-pointer-price ml-1" src="/img/Arrow - Down 2.svg" alt="">';
export let prices = document.querySelectorAll(".price");
export let originalPrices = Array.from(prices).map(price => price.textContent);
export let newPrices = [
    "$0 - $500M",
    "$500 - $1,000M",
    "$1,000 - $1,500M",
    "$1,500 - $2,000M",
    "$2,000 - $3,000M",
    "$3,000 - $5,000M",
    "$5,000 - $7,500M",
    "$7,500 - $10,000M",
    "$10,000 - $15,000M",
    "$15,000 - $20,000M",
    "$20,000M+"
];


export function changeData() {
    prices.forEach((price, index) => {
        if (index < newPrices.length) {
            price.textContent = newPrices[index];
        }
    });
    priceSelected.innerHTML = newPrices[0] + imgHTML;
}

export function revertData() {
    prices.forEach((price, index) => {
        price.textContent = originalPrices[index];
    });
    priceSelected.innerHTML = deafultPrice.textContent + imgHTML;
}

// Search bar Top Buttons functionality
export const buyBtn = document.querySelector('.buy-btn');
export function buyBtnAssign() {
    buyBtn.classList.add('active')
    rentBtn.classList.remove('active')
    revertData();
};

export const rentBtn = document.querySelector('.rent-btn');
export function rentBtnAssign() {
    buyBtn.classList.remove('active');
    rentBtn.classList.add('active');
    changeData();
};


export const priceDropdownContent = document.querySelector('.price-dropdown-content');
export const priceShow = document.querySelector(".price-show")

prices.forEach(function (priceRange) {
    priceRange.addEventListener("click", function () {
        priceSelected.innerHTML = priceRange.textContent + imgHTML;
        priceDropdownContent.classList.remove("show-price");
    })
})

buyBtnAssign();


// Property Filter

export const selected = document.querySelector('.property-dropdown-selected');
export const propertyDropdownContent = document.querySelector('.property-dropdown-content');
export const propertyValue = document.querySelectorAll(".property-value");
export const propertyTypeShow = document.querySelector(".type-show");

propertyTypeShow.addEventListener("click", function () {
    propertyDropdownContent.classList.toggle("show");
});

propertyValue.forEach(function (propertyType) {
    propertyType.addEventListener("click", function () {
        selected.innerHTML = propertyType.textContent;
        propertyDropdownContent.classList.remove("show");
    });
});

// Event Listeners
rentBtn.addEventListener('click', rentBtnAssign);
buyBtn.addEventListener('click', buyBtnAssign);

priceShow.addEventListener("click", function () {
    priceDropdownContent.classList.toggle("show-price");
});

document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
        dropdownContent.classList.remove('show');
    }
    if (!event.target.closest('.property-dropdown')) {
        propertyDropdownContent.classList.remove("show");
    }
    if (!event.target.closest('.price-dropdown')) {
        priceDropdownContent.classList.remove("show-price");
    }
});

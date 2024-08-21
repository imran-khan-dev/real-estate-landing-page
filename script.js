
// Import funcionts from Slides.js
import { getElement, getElementAll, nextListing, prevListing, nextItems, prevItems, createDotsTestimonial, createDotsRecommendations } from './slides.js';
import { buyBtnAssign } from './search.js';
import { screenBreakpoints } from './breakpoints.js';

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Media queries for each breakpoint from breakpoints.js
    const mediaQuries = {};
    for (const [category, breakpoints] of Object.entries(screenBreakpoints)) {
        mediaQuries[category] = breakpoints.map(query => window.matchMedia(query));
    };

    // Event listeners for next and previous buttons: Best Recommendations 1.0018 1.0035
    const listings = getElementAll(".featured-listing-item-style");
    const listingContainerWidth = getElement(".listing-container").offsetWidth;
    getElement(".right-reccommendation-slide").addEventListener("click", function () {
        if (mediaQuries.xl[0].matches) {
            nextListing(listings, listingContainerWidth, 2, 3.17);
        } else if (mediaQuries.lg[0].matches) {
            nextListing(listings, listingContainerWidth, 2, 3.228);
        } else if (mediaQuries.tablet[0].matches) {
            nextListing(listings, listingContainerWidth, 1.5, 1.97);
        } else if (mediaQuries.tablet[1].matches) {
            nextListing(listings, listingContainerWidth, 1.5, 1.999);
        } else if (mediaQuries.mobile[1].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1.0040);
        } else if (mediaQuries.mobile[2].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1.0037);
        } else if (mediaQuries.mobile[3].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1.0022);
        } else if (mediaQuries.mobile[4].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1.003);
        } else if (mediaQuries.mobile[5].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1);
        } else if (mediaQuries.mobile[6].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1.0031);
        } else if (mediaQuries.mobile[0].matches) {
            nextListing(listings, listingContainerWidth, 1.4, 1.0018);
        } else if (mediaQuries.medium[0].matches) {
            nextListing(listings, listingContainerWidth, 2, 3.26);
        } else if (mediaQuries.medium[1].matches) {
            nextListing(listings, listingContainerWidth, 2, 3.268);
        } else if (mediaQuries.medium[3].matches) {
            nextListing(listings, listingContainerWidth, 2, 3.268);
        } else {
            nextListing(listings, listingContainerWidth, 2, 3.26);
        };
    });

    getElement(".left-reccommendation-slide").addEventListener("click", function () {
        if (mediaQuries.xl[0].matches) {
            prevListing(listings, listingContainerWidth, 3.17);
        } else if (mediaQuries.lg[0].matches) {
            prevListing(listings, listingContainerWidth, 3.23);
        } else if (mediaQuries.tablet[0].matches) {
            prevListing(listings, listingContainerWidth, 1.97);
        } else if (mediaQuries.tablet[1].matches) {
            prevListing(listings, listingContainerWidth, 2);
        } else if (mediaQuries.mobile[1].matches) {
            prevListing(listings, listingContainerWidth, 1.0040);
        } else if (mediaQuries.mobile[2].matches) {
            prevListing(listings, listingContainerWidth, 1.0037);
        } else if (mediaQuries.mobile[3].matches) {
            prevListing(listings, listingContainerWidth, 1.0022);
        } else if (mediaQuries.mobile[4].matches) {
            prevListing(listings, listingContainerWidth, 1.003);
        } else if (mediaQuries.mobile[5].matches) {
            prevListing(listings, listingContainerWidth, 1);
        } else if (mediaQuries.mobile[6].matches) {
            prevListing(listings, listingContainerWidth, 1.0031);
        } else if (mediaQuries.mobile[0].matches) {
            prevListing(listings, listingContainerWidth, 1.0018);
        } else if (mediaQuries.medium[0].matches) {
            prevListing(listings, listingContainerWidth, 3.26);
        } else if (mediaQuries.medium[1].matches) {
            prevListing(listings, listingContainerWidth, 3.268);
        } else if (mediaQuries.medium[3].matches) {
            prevListing(listings, listingContainerWidth, 3.268);
        } else {
            prevListing(listings, listingContainerWidth, 3.26);
        };

    });


    // Event listeners for next and previous buttons: Testimonials

    const testimonials = getElementAll(".testimonial-item-style");
    const containerWidth = getElement(".testimonial-container").offsetWidth;

    getElement(".right-testimonial-slide").addEventListener("click", function () {
        if (mediaQuries.xl[0].matches) {
            nextItems(testimonials, containerWidth, 2, 3.17);
        } else if (mediaQuries.lg[0].matches) {
            nextItems(testimonials, containerWidth, 2, 3.23);
        } else if (mediaQuries.tablet[0].matches) {
            nextItems(testimonials, containerWidth, 1.5, 2.32);
        } else if (mediaQuries.tablet[1].matches) {
            nextItems(testimonials, containerWidth, 1.5, 2.317);
        } else if (mediaQuries.mobile[0].matches) {
            nextItems(testimonials, containerWidth, 1.4, 1.177);
        } else if (mediaQuries.medium[3].matches) {
            nextItems(testimonials, containerWidth, 2, 3.27);
        } else if (mediaQuries.medium[4].matches) {
            nextItems(testimonials, containerWidth, 2, 3.267);
        } else if (mediaQuries.medium[0].matches) {
            nextItems(testimonials, containerWidth, 2, 3.3);
        } else if (mediaQuries.medium[1].matches) {
            nextItems(testimonials, containerWidth, 2, 3.305);
        } else if (mediaQuries.medium[2].matches) {
            nextItems(testimonials, containerWidth, 2, 3.31);
        } else {
            nextItems(testimonials, containerWidth, 2, 3.297);
        };
    });
    getElement(".left-testimonial-slide").addEventListener("click", function () {
        if (mediaQuries.xl[0].matches) {
            prevItems(testimonials, containerWidth, 3.17);
        } else if (mediaQuries.lg[0].matches) {
            prevItems(testimonials, containerWidth, 3.23);
        } else if (mediaQuries.tablet[0].matches) {
            prevItems(testimonials, containerWidth, 2.32);
        } else if (mediaQuries.tablet[1].matches) {
            prevItems(testimonials, containerWidth, 2.317);
        } else if (mediaQuries.mobile[0].matches) {
            prevItems(testimonials, containerWidth, 1.177);
        } else if (mediaQuries.medium[3].matches) {
            prevItems(testimonials, containerWidth, 3.27);
        } else if (mediaQuries.medium[4].matches) {
            prevItems(testimonials, containerWidth, 3.267);
        } else if (mediaQuries.medium[0].matches) {
            prevItems(testimonials, containerWidth, 3.3);
        } else if (mediaQuries.medium[1].matches) {
            prevItems(testimonials, containerWidth, 3.305);
        } else if (mediaQuries.medium[2].matches) {
            prevItems(testimonials, containerWidth, 3.31);
        } else {
            prevItems(testimonials, containerWidth, 3.297);
        };
    });

    // Create dots for both slides
    (function showDots() {
        if (mediaQuries.mobile[0].matches) {
            createDotsRecommendations(getElement('.reccommendations-dots'), getElementAll('.featured-listing-item-style').length / 1);
            createDotsTestimonial(getElement('.testimonials-dots'), getElementAll('.testimonial-item-style').length / 1);
        } else if (mediaQuries.tablet[0].matches || mediaQuries.tablet[1].matches) {
            createDotsRecommendations(getElement('.reccommendations-dots'), getElementAll('.featured-listing-item-style').length / 1.2);
            createDotsTestimonial(getElement('.testimonials-dots'), getElementAll('.testimonial-item-style').length / 1.2);
        } else {
            createDotsTestimonial(getElement('.testimonials-dots'), getElementAll('.testimonial-item-style').length / 1.5);
            createDotsRecommendations(getElement('.reccommendations-dots'), getElementAll('.featured-listing-item-style').length / 1.5);
        }
    })();


    // Initialize the search default price
    buyBtnAssign();


    // Email Validation
    const emailError = document.querySelector('.email-error');
    const emailSuccuss = document.querySelector('.email-succuss');
    const emailSubmit = document.querySelector('.subscription-form');
    const emailSubscribe = document.getElementById("subscribe");

    function validateEmail() {
        emailSuccuss.textContent = "";
        const emailSubscribeValue = emailSubscribe.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailSubscribeValue)) {
            emailError.textContent = "Invalid email address";
            return false;
        } else {
            emailError.textContent = "";
            emailSuccuss.textContent = "Thank you for subscribe!";
            return true;
        }
    }

    emailSubmit.addEventListener("submit", function (event) {
        event.preventDefault();
        validateEmail()
    });


    // Functionality of mobile and tab Menu
    const menuIcon = document.getElementById("menu-icon");
    const overlay = document.getElementById("overlay");
    const container = document.getElementById("container");
    const closeBtn = document.getElementById("close-btn");
    const backgroundOverlay = document.getElementById('background-overlay');


    menuIcon.addEventListener("click", function () {
        overlay.classList.toggle("active");
        container.classList.toggle("dimmed");
        backgroundOverlay.classList.toggle('show');
    });

    closeBtn.addEventListener("click", function () {
        overlay.classList.remove("active");
        container.classList.remove("dimmed");
        backgroundOverlay.classList.remove('show');
    });

    // Close menu overlay when clicking outside of it
    backgroundOverlay.addEventListener("click", function (e) {
        if (
            overlay.classList.contains("active") &&
            !overlay.contains(e.target) &&
            !menuIcon.contains(e.target)
        ) {
            overlay.classList.remove("active");
            container.classList.remove("dimmed");
            backgroundOverlay.classList.remove('show');
        }

    });

    // Lg and XL screen Menu Navigation additional style
    const menuItems = document.querySelectorAll(".menu-item");
    const homeMenu = document.getElementById('home-menu');

    // To make "home" menu option styled on page load
    (function menuOnLoadStyle() {
        homeMenu.style.setProperty('--after-opacity-home', '1');
        homeMenu.style.transform = 'translateY(-20%)';
        homeMenu.style.color = '#69B99D';
    })();

    // To clear previous style when new option of menu get styled
    function clearMenuStyle() {
        homeMenu.style.setProperty('--after-opacity-home', '0');
        menuItems.forEach((singleItem) => {
            singleItem.style.setProperty('--after-opacity', '0');
            singleItem.style.transform = 'translateY(0%)';
            singleItem.style.color = '#8E8E8E';
        })
    }

    // To clear 
    function clearMenuStyle2() {
        const menuAddtionalStyle = document.querySelectorAll(".menu-style");
        menuAddtionalStyle.forEach((singleItem) => {
            singleItem.style.setProperty('--after-opacity', '0');
            singleItem.style.transform = 'translateY(0%)';
            singleItem.style.color = '#8E8E8E';
        })
    }

    menuItems.forEach(function (singleitem) {
        singleitem.style.setProperty('--after-opacity', '0');

        singleitem.addEventListener('click', function (event) {
            const firstMenuItem = menuItems[0];
            if (event.currentTarget === firstMenuItem) {
                homeMenu.style.setProperty('--after-opacity-home', '1');
                homeMenu.style.transform = 'translateY(-20%)';
                homeMenu.style.color = '#69B99D';
                clearMenuStyle2();
            } else {
                clearMenuStyle();
                singleitem.style.setProperty('--after-opacity', '1');
                singleitem.style.transform = 'translateY(-20%)';
                singleitem.style.color = '#69B99D';
            }

        })
    })

});

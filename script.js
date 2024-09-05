
// Import funcionts from Slides.js
import { buyBtnAssign } from './search.js';

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    // Slide Function for Listing
    let currentListingSlide = 0;
    const dotsListing = document.querySelectorAll('.dot-listing');

    function showListingSlide(index) {
        const listingSlider = document.querySelector('.listing-container-inner');
        const listingSlides = Array.from(listingSlider.children);
        const totalListingSlides = listingSlides.length;
        const listingSlidesToShow = 3;

        if (index < 0) {
            currentListingSlide = 0;
        } else if (index > totalListingSlides - listingSlidesToShow) {
            currentListingSlide = 0;
        } else {
            currentListingSlide = index;
        }

        const listingSlideWidth = function () {
            if (window.innerWidth < 1280) {
                return listingSlides[0].offsetWidth + 15;
            } else {
                return listingSlides[0].offsetWidth + 34;
            }
        };

        listingSlider.style.transform = `translateX(-${currentListingSlide * listingSlideWidth()}px)`;

        // Update dots
        dotsListing.forEach(dot => dot.classList.remove('active'));
        dotsListing[currentListingSlide].classList.add('active');
    }

    function nextListingSlide() {
        showListingSlide(currentListingSlide + 1);
    }

    function prevListingSlide() {
        showListingSlide(currentListingSlide - 1);
    }


    const leftListingSlide = document.querySelector('.left-reccommendation-slide');
    const rightListingSlide = document.querySelector('.right-reccommendation-slide');

    leftListingSlide.addEventListener('click', function () {
        prevListingSlide();
    })

    rightListingSlide.addEventListener('click', function () {
        nextListingSlide();
    })

    // Initialize the first dot as active
    dotsListing[currentListingSlide].classList.add('active');

    dotsListing.forEach(function (dotL) {
        dotL.addEventListener('click', function () {
            if (dotL.getAttribute('data-value') === '1') {
                showListingSlide(0);
            } else if (dotL.getAttribute('data-value') === '2') {
                showListingSlide(1);
            } else if (dotL.getAttribute('data-value') === '3') {
                showListingSlide(2);
            } else {
                showListingSlide(3);
            }
        })
    })



    // Slide for Testimonails
    let currentTestimonailSlide = 0;
    const dotsTestimonail = document.querySelectorAll('.dot-testimonial');

    function showTestimonailSlide(index) {
        const testimonailSlider = document.querySelector('.testimonial-inner-container');
        const testimonailSlides = Array.from(testimonailSlider.children);
        const totalTestimonailSlides = testimonailSlides.length;
        const testimonailSlidesToShow = 3;

        if (index < 0) {
            currentTestimonailSlide = 0;
        } else if (index > totalTestimonailSlides - testimonailSlidesToShow) {
            currentTestimonailSlide = 0;
        } else {
            currentTestimonailSlide = index;
        }

        const testimonailSlideWidth = function () {
            if (window.innerWidth < 1280) {
                return testimonailSlides[0].offsetWidth + 15;
            } else {
                return testimonailSlides[0].offsetWidth + 34;
            }
        };

        // const testimonailSlideWidth = testimonailSlides[0].offsetWidth + 34; 
        testimonailSlider.style.transform = `translateX(-${currentTestimonailSlide * testimonailSlideWidth()}px)`;

        // Update dots
        dotsTestimonail.forEach(dot => dot.classList.remove('active'));
        dotsTestimonail[currentTestimonailSlide].classList.add('active');
    }

    function nextTestimonialSlide() {
        showTestimonailSlide(currentTestimonailSlide + 1);
    }

    function prevTestimonailSlide() {
        showTestimonailSlide(currentTestimonailSlide - 1);
    }

    const leftTestimonailSlide = document.querySelector('.left-testimonial-slide');
    const rightTestimonailSlide = document.querySelector('.right-testimonial-slide');

    leftTestimonailSlide.addEventListener('click', function () {
        prevTestimonailSlide();
    })

    rightTestimonailSlide.addEventListener('click', function () {
        nextTestimonialSlide();
    })

    // Initialize the first dot as active
    dotsTestimonail[currentTestimonailSlide].classList.add('active');

    dotsTestimonail.forEach(function (dotT) {
        dotT.addEventListener('click', function () {
            if (dotT.getAttribute('data-value') === '1') {
                showTestimonailSlide(0);
            } else if (dotT.getAttribute('data-value') === '2') {
                showTestimonailSlide(1);
            } else if (dotT.getAttribute('data-value') === '3') {
                showTestimonailSlide(2);
            } else {
                showTestimonailSlide(3);
            }
        })
    })


    // Testimonial Slides Height Adjustment
    window.onload = function () {
        setEqualHeight();
    };

    window.onresize = function () {
        setEqualHeight();
    };

    function setEqualHeight() {
        const testimonialsTextHeight = document.querySelectorAll('.testimonial-text-style');
        let maxHeight = 0;

        // Reset height to auto for all testimonials before calculating
        testimonialsTextHeight.forEach(testimonial => {
            testimonial.style.height = 'auto';
        });

        // Find the maximum height
        testimonialsTextHeight.forEach(testimonial => {
            const height = testimonial.offsetHeight;
            if (height > maxHeight) {
                maxHeight = height;
            }
        });

        // Set all testimonials to the maximum height
        testimonialsTextHeight.forEach(testimonial => {
            testimonial.style.height = maxHeight + 'px';
        });
    }


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

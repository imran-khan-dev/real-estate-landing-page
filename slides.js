// Utility functions and Variable
export const getElement = (selector) => document.querySelector(selector);
export const getElementAll = (selector) => document.querySelectorAll(selector);
export let currentIndex = 0;
export let currentIndexTestimonial = 0;
import { screenBreakpoints } from './breakpoints.js';

// Media queries for each breakpoint from breakpoints.js
const mediaQuries = {};
for (const [category, breakpoints] of Object.entries(screenBreakpoints)) {
    mediaQuries[category] = breakpoints.map(query => window.matchMedia(query));
};

// Function for showing property listings slide by adjusting the translateX property
export function showlisting(index, subject, containerWidth, transformRatio) {
    subject.forEach((item) => {
        item.style.transform = `translateX(-${(containerWidth / transformRatio) * index}px)`;
    });

    updateRecommendationsDots(index);
}


// Next button function: RECOMMENDATIONS OF LISTING
export function nextListing(subject, containerWidth, itemsPerView, transformRatio) {
    if (currentIndex < subject.length / itemsPerView) {
        currentIndex++;
        showlisting(currentIndex, subject, containerWidth, transformRatio);
    } else {
        currentIndex = 0;
        showlisting(currentIndex, subject, containerWidth, transformRatio);
    }
}

// Previous button function: RECOMMENDATIONS OF LISTING
export function prevListing(subject, containerWidth, transformRatio) {
    if (currentIndex > 0) {
        currentIndex--;
        showlisting(currentIndex, subject, containerWidth, transformRatio);
    }
}

// Dots for Recommendations Slide
export function createDotsRecommendations(container, count) {
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot-r');
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            currentIndex = i;
            // showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 3.095);

            if (mediaQuries.xl[0].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 3.17);
            } else if (mediaQuries.lg[0].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 3.23);
            } else if (mediaQuries.tablet[2].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 1.971);
            } else if (mediaQuries.tablet[3].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 1.9788);
            } else if (mediaQuries.tablet[1].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 1.999);
            } else if (mediaQuries.mobile[7].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 1.0027);
            } else if (mediaQuries.mobile[8].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 1.0010);
            } else if (mediaQuries.mobile[9].matches) {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 1.006);
            } else {
                showlisting(currentIndex, getElementAll('.featured-listing-item-style'), getElement('.listing-container').offsetWidth, 3.26);
            };
        });
        container.appendChild(dot);
    }
    updateRecommendationsDots(0);
}

export function updateRecommendationsDots(index) {
    const dots = getElementAll('.dot-r');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}


// Function for showing testimonials slide by adjusting the translateX property
export function showTestimonials(index, subject, containerWidth, transformRatio) {
    subject.forEach((item) => {
        item.style.transform = `translateX(-${(containerWidth / transformRatio) * index}px)`;
    });

    updateTestimonialsDots(index);
}

// Next button function: TESTIMONIALS
export function nextItems(subject, containerWidth, itemsPerView, transformRatio) {
    if (currentIndexTestimonial < subject.length / itemsPerView) {
        currentIndexTestimonial++;
        showTestimonials(currentIndexTestimonial, subject, containerWidth, transformRatio);
    } else {
        currentIndexTestimonial = 0;
        showTestimonials(currentIndexTestimonial, subject, containerWidth, transformRatio);
    }
}

// Previous button function: TESTIMONIALS
export function prevItems(subject, containerWidth, transformRatio) {
    if (currentIndexTestimonial > 0) {
        currentIndexTestimonial--;
        showTestimonials(currentIndexTestimonial, subject, containerWidth, transformRatio);
    }
}


// Dots for Testimonial Slide
export function createDotsTestimonial(container2, count) {
    for (let i = 0; i < count; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot-t');
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            currentIndexTestimonial = i;
            if (mediaQuries.xl[0].matches) {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 3.17);
            } else if (mediaQuries.lg[0].matches) {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 3.23);
            } else if (mediaQuries.mobile[0].matches) {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 1.177);
            } else if (mediaQuries.tablet[0].matches) {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 2.319);
            } else if (mediaQuries.tablet[1].matches) {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 2.317);
            } else if (mediaQuries.medium[3].matches) {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 3.275);
            } else {
                showTestimonials(currentIndexTestimonial, getElementAll('.testimonial-item-style'), getElement('.testimonial-container').offsetWidth, 3.30);
            };
        });
        container2.appendChild(dot);
    }
    updateTestimonialsDots(0);
}

export function updateTestimonialsDots(index) {
    const dots = getElementAll('.dot-t');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

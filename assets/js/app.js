
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');

const options = {
    threshold: 0.7
};

const setActive = [
    "home",
    "about",
    "project",
    "contact"
];

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries) {

    entries.forEach(entry => {

        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const activeIndex = entry.target.getAttribute('data-index');
        const coords = activeAnchor.getBoundingClientRect();

        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        console.log(entry);

        if (entry.isIntersecting) {

            bubble.style.setProperty('left', `${directions.left}px`);
            bubble.style.setProperty('top', `${directions.top}px`);
            bubble.style.setProperty('width', `${directions.width}px`);
            bubble.style.setProperty('height', `${directions.height}px`);

            // activeAnchor.classList.add('active');
        }

    });
}

sections.forEach(section => {
    observer.observe(section);
});

hamburger.addEventListener('click', () => {
    header.classList.toggle('header-open');
    navLinks.classList.toggle('open');
});
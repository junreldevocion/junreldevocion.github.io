
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');

hamburger.addEventListener('click', () => {
    header.classList.toggle('header-open');
    navLinks.classList.toggle('open');

});
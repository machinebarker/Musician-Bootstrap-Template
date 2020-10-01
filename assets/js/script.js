const text = `I'm a Musician`;

let i = 0;

function writeText() {
    document.querySelector('.musician').innerText = text.slice(0, i);
    i++;
    if (i > text.length) {
        index = 0;
    }
}
setInterval(writeText, 150);

const toggler = document.querySelector('.navbar-toggler');
var navbar = document.querySelector('.navbar');
var prevScroll = window.pageYOffset;

window.onscroll = function () {
    var currentScroll = window.pageYOffset;
    if (prevScroll > currentScroll) {
        navbar.style.top = "0";
        navbar.style.background = "rgba(0, 0, 0, .8)";
    } else {
        navbar.style.top = "-50%";
        navbar.style.transition = ".5s";
        navbar.style.background = "transparent";
    }
    prevScroll = currentScroll;
}

window.addEventListener('load', () => {
    const preloader = document.querySelector('.preload');
    preloader.classList.add('preload-finish')
});

// toggler.addEventListener('click', () => {
//     navbar.classList.toggle('nav-bg');
// });
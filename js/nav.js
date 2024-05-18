const menu = document.querySelector('.toggle');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');

// nav menu
menu.addEventListener('click', () => nav.classList.add('open-nav'), nav.classList.remove("hide"));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

function closeNav() {
    nav.classList.remove('open-nav');
}

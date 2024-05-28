const menu = document.querySelector('.toggle');
const navFs = document.querySelector('.full-screen-nav');
const backdropNav = document.querySelector('.backdrop');

// nav menu
menu.addEventListener('click', () => navFs.classList.add('open-nav'), navFs.classList.remove("hide"));
backdropNav.addEventListener('click', () => navFs.classList.remove('open-nav'));

function closeNav() {
    navFs.classList.remove('open-nav');
}

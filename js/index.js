const menu = document.querySelector('.toggle');
const nav = document.querySelector('.full-screen-nav');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const darkModeSwitch = document.querySelector('input');

// nav menu
menu.addEventListener('click', () => nav.classList.add('open-nav'));
backdrop.addEventListener('click', () => nav.classList.remove('open-nav'));

function closeNav() {
    nav.classList.remove('open-nav');
}

//dark mode


darkModeSwitch.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
     body.classList.remove("dark-mode");
     console.log("to light mode");
    } else {
      body.classList.add("dark-mode");
      console.log("to dark mode");
    }
  });

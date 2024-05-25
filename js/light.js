const nav = document.querySelector('.full-screen-nav');
const navClose = document.querySelector('.nav-close');
const navHome = document.querySelector('.nav-home');
const navHtml = document.querySelector('.nav-html');
const navCss = document.querySelector('.nav-css');
const navJs = document.querySelector('.nav-js');
const navCombo = document.querySelector('.nav-combo');
const navGit = document.querySelector('.nav-git');
const navContact = document.querySelector('.nav-contact');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const darkModeSwitch = document.querySelector('.mode-toggle i');
const darkModeText = document.querySelector('.mode-toggle p');
const bars = document.querySelector('.toggle i');
const acknowledgement = document.querySelector('.acknowledgement');
const socials1 = document.querySelector('#socials .fa-envelope');
const socials2 = document.querySelector('#socials .fa-github');
const socials3 = document.querySelector('#socials .fa-linkedin');

//light mode
darkModeSwitch.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        bars.style.color = "white";
        nav.style.background="black"; //nav was still appearing with black background despite adding light-mode class; needed to add background specifically
        navClose.style.color = "white"; //each Nav item needed individual selection for color change
        navHome.style.color = "white";
        navHtml.style.color = "white";
        navCss.style.color = "white";
        navJs.style.color = "white";
        navCombo.style.color = "white";
        navGit.style.color = "white";
        navContact.style.color = "white";
        socials1.style.color = "white";
        socials2.style.color = "white";
        socials3.style.color = "white";
        nav.classList.add("light-mode");
        acknowledgement.style.border="2px dotted white";
        darkModeSwitch.style.color="#ffef5c";
        darkModeText.style.color="#ffef5c";
        darkModeText.innerText="Turn on the light?";
        console.log("light off");
    } else {
        body.classList.add("light-mode");
        nav.classList.add("light-mode");
        nav.style.background="white"; //nav was still appearing with black background despite adding light-mode class
        bars.style.color = "black";
        navClose.style.color = "black";
        navHome.style.color = "black";
        navHtml.style.color = "black";
        navCss.style.color = "black";
        navJs.style.color = "black";
        navCombo.style.color = "black";
        navGit.style.color = "black";
        navContact.style.color = "black";
        socials1.style.color = "black";
        socials2.style.color = "black";
        socials3.style.color = "black";
        nav.classList.remove("light-mode");
        acknowledgement.style.border="2px dotted black";
        darkModeSwitch.style.color="#3e390a";
        darkModeText.style.color="#3e390a";
        darkModeText.innerText="Turn the light off!";
        console.log("light on");
    }
});
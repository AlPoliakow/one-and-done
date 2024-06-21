const nav = document.querySelector('.full-screen-nav');
const navList = document.querySelectorAll('nav ul li a');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const darkModeSwitch = document.querySelector('.mode-toggle i');
const darkModeText = document.querySelector('.mode-toggle p');
const darkModeBox = document.querySelector('.mode-toggle');
const button= document.querySelector('.mode-button');
const bars = document.querySelector('.toggle i');
const acknowledgement = document.querySelector('.acknowledgement');
const socials = document.querySelectorAll('#socials i');
const paragraphText = document.querySelectorAll('article p');
const headings = document.querySelectorAll('article h2');
const icon = document.querySelector('.logo');

//light mode
darkModeSwitch.addEventListener("click", function () {
    if (body.classList.contains("light-mode")) {
        body.classList.remove("light-mode");
        icon.style.color="white";
        bars.style.color = "white";
        nav.style.background="black"; 
        button.style.background="black";
        acknowledgement.style.border="2px dotted white";
        darkModeSwitch.style.color="#ffef5c";
        //darkModeBox.style.border=-"dotted 1.5px #ffef5c";
        darkModeText.style.color="#ffef5c";
        darkModeText.innerText="Turn on the light?";
        //forEach loop for all multiples
        paragraphText.forEach((paragraph) => {
            paragraph.classList.remove("light-mode");
          });
        headings.forEach((heading) => {
            heading.classList.remove("light-mode");
          });
        navList.forEach((listItem) => {
            listItem.style.color = "white";
          });
        socials.forEach((icon) => {
            icon.style.color = "white";
          });
    } else {
        body.classList.add("light-mode");
        nav.style.background="white"; //nav was still appearing with black background despite adding light-mode class
        bars.style.color = "black";
        icon.style.color="black";
        button.style.background="white";
        nav.classList.remove("light-mode");
        acknowledgement.style.border="2px dotted black";
        darkModeSwitch.style.color="#3e390a";
        //darkModeBox.style.border="dotted 1.5px #3e390a";
        darkModeText.style.color="#3e390a";
        darkModeText.innerText="Turn the light off!";
        //forEach loops for all multiples
        paragraphText.forEach((paragraph) => {
            paragraph.classList.add("light-mode");
          });
        headings.forEach((heading) => {
            heading.classList.add("light-mode");
          });
        navList.forEach((listItem) => {
            listItem.style.color = "black";
          });
        socials.forEach((icon) => {
            icon.style.color = "black";
          });
        
    }
});

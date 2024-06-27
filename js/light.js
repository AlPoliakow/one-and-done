const nav = document.querySelector('.full-screen-nav');
const navList = document.querySelectorAll('nav ul li a');
const backdrop = document.querySelector('.backdrop');
const body = document.querySelector('body');
const darkModeSwitch = document.querySelector('.toggle-btn');
const darkModeBox = document.querySelector('.mode-toggle');
const button = document.querySelector('.mode-button');
const bars = document.querySelector('.toggle i');
const acknowledgement = document.querySelector('.acknowledgement');
const socials = document.querySelectorAll('#socials i');
const paragraphText = document.querySelectorAll('article p');
const heading = document.querySelector('h2');
const linkedHeadings = document.querySelectorAll('h2 a');
const icon = document.querySelector('.logo');

//light mode
darkModeSwitch.addEventListener("click", function () {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    icon.style.color = "white";
    bars.style.color = "white";
    nav.style.background = "black";
    acknowledgement.style.border = "2px dotted white";
    //darkModeBox.style.border=-"dotted 1.5px #ffef5c";
    //forEach loop for all multiples
    paragraphText.forEach((paragraph) => {
      paragraph.classList.remove("light-mode");
    });
    heading.style.color = "white";
    linkedHeadings.forEach((linkedHeading) => {
      linkedHeading.style.color = "white";
    });
    navList.forEach((listItem) => {
      listItem.style.color = "white";
    });
    socials.forEach((icon) => {
      icon.style.color = "white";
    });
  } else {
    body.classList.add("light-mode");
    nav.style.background = "white"; //nav was still appearing with black background despite adding light-mode class
    bars.style.color = "black";
    icon.style.color = "black";
    nav.classList.remove("light-mode");
    acknowledgement.style.border = "2px dotted black";
    //darkModeBox.style.border="dotted 1.5px #3e390a";
    //forEach loops for all multiples
    paragraphText.forEach((paragraph) => {
      paragraph.classList.add("light-mode");
    });
    heading.style.color = "black";
    linkedHeadings.forEach((linkedHeading) => {
      linkedHeading.style.color = "black";
    });
    navList.forEach((listItem) => {
      listItem.style.color = "black";
    });
    socials.forEach((icon) => {
      icon.style.color = "black";
    });

  }
});

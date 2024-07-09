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
const readMores = document.querySelectorAll('.read-more a');
const icon = document.querySelector('.logo');

//light mode
darkModeSwitch.addEventListener("click", function () {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    icon.style.color = "white";
    bars.style.color = "white";
    nav.style.background = "black";
    acknowledgement.style.border = "2px dotted white";
    heading.style.color = "white";
    //forEach loop for all multiples
    paragraphText.forEach((paragraph) => {
      paragraph.classList.remove("light-mode");
    });
    linkedHeadings.forEach((linkedHeading) => {
      linkedHeading.style.color = "white";
    });
    readMores.forEach((readMore) => {
      readMore.style.color = "#b266ff";
      readMore.style.fontWeight = "400";
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
    heading.style.color = "black";
    //forEach loops for all multiples
    paragraphText.forEach((paragraph) => {
      paragraph.classList.add("light-mode");
    });
    linkedHeadings.forEach((linkedHeading) => {
      linkedHeading.style.color = "black";
    });
    readMores.forEach((readMore) => {
      readMore.style.color = "#8024dc";
      readMore.style.fontWeight = "600";
    });
    navList.forEach((listItem) => {
      listItem.style.color = "black";
    });
    socials.forEach((icon) => {
      icon.style.color = "black";
    });

  }
});

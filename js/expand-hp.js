const aboutBase = document.querySelector('.about-base');
const aboutContent = document.querySelector('.about-content');
const aboutExpand = document.querySelector('.about-base .collapsible');
const blueBase = document.querySelector('.html-base');
const blueContent = document.querySelector('.html-content');
const blueExpand = document.querySelector('.html-base .collapsible');
const redBase = document.querySelector('.css-base');
const redContent = document.querySelector('.css-content');
const redExpand = document.querySelector('.css-base .collapsible');
const yellowBase = document.querySelector('.js-base');
const yellowContent = document.querySelector('.js-content');
const yellowExpand = document.querySelector('.js-base .collapsible');
const greenBase = document.querySelector('.all-base');
const greenContent = document.querySelector('.all-content');
const greenExpand = document.querySelector('.all-base .collapsible');
const purpleBase = document.querySelector('.git-base');
const purpleContent = document.querySelector('.git-content');
const purpleExpand = document.querySelector('.git-base .collapsible');

//Expand and collapse About content
aboutExpand.addEventListener('click', function () {
    if (aboutExpand.innerText == "➕") {
        aboutExpand.innerText = "➖";
        aboutContent.style.display="block";
        console.log("expand");
    } else {
        aboutExpand.innerText = "➕";
        aboutContent.style.display="none";
        console.log("collapse");
    }
});

// Expand and collapse HTML content
blueExpand.addEventListener('click', function () {
    if (blueExpand.innerText == "➕") {
        blueExpand.innerText = "➖";
        blueContent.style.display="block";
        console.log("expand");
    } else {
        blueExpand.innerText = "➕";
        blueContent.style.display="none";
        console.log("collapse");
    }
});

// Expand and collapse CSS content
redExpand.addEventListener('click', function () {
    if (redExpand.innerText == "➕") {
        redExpand.innerText = "➖";
        redContent.style.display="block";
        console.log("expand");
    } else {
        redExpand.innerText = "➕";
        redContent.style.display="none";
        console.log("collapse");
    }
});

// Expand and collapse JavaScript content
yellowExpand.addEventListener('click', function () {
    if (yellowExpand.innerText == "➕") {
        yellowExpand.innerText = "➖";
        yellowContent.style.display="block";
        console.log("expand");
    } else {
        yellowExpand.innerText = "➕";
        yellowContent.style.display="none";
        console.log("collapse");
    }
});

// Expand and collapse All content
greenExpand.addEventListener('click', function () {
    if (greenExpand.innerText == "➕") {
        greenExpand.innerText = "➖";
        greenContent.style.display="block";
        console.log("expand");
    } else {
        greenExpand.innerText = "➕";
        greenContent.style.display="none";
        console.log("collapse");
    }
});

// Expand and collapse Terminal content
purpleExpand.addEventListener('click', function () {
    if (purpleExpand.innerText == "➕") {
        purpleExpand.innerText = "➖";
        purpleContent.style.display="block";
        console.log("expand");
    } else {
        purpleExpand.innerText = "➕";
        purpleContent.style.display="none";
        console.log("collapse");
    }
});




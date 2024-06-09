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
const greenBase = document.querySelector('.green-base');
const greenContent = document.querySelector('.green-content');
const greenExpand = document.querySelector('.green-base .collapsible');
const purpleBase = document.querySelector('.purple-base');
const purpleContent = document.querySelector('.purple-content');
const purpleExpand = document.querySelector('.purple-base .collapsible');

//Expand and collapse About content
aboutExpand.addEventListener('click', function () {
    if (aboutExpand.innerText == "➕") {
        aboutExpand.innerText = "➖";
        aboutContent.classList.remove("hide");
        console.log("expand");
    } else {
        aboutExpand.innerText = "➕";
        aboutContent.classList.add("hide");
        console.log("collapse");
    }
});

// Expand and collapse HTML content
blueExpand.addEventListener('click', function () {
    if (blueExpand.innerText == "➕") {
        blueExpand.innerText = "➖";
        blueContent.classList.remove("hide");
        console.log("expand");
    } else {
        blueExpand.innerText = "➕";
        blueContent.classList.add("hide");
        console.log("collapse");
    }
});

// Expand and collapse CSS content
redExpand.addEventListener('click', function () {
    if (redExpand.innerText == "➕") {
        redExpand.innerText = "➖";
        redContent.classList.remove("hide");
        console.log("expand");
    } else {
        redExpand.innerText = "➕";
        redContent.classList.add("hide");
        console.log("collapse");
    }
});

// Expand and collapse JavaScript content
yellowExpand.addEventListener('click', function () {
    if (yellowExpand.innerText == "➕") {
        yellowExpand.innerText = "➖";
        yellowContent.classList.remove("hide");
        console.log("expand");
    } else {
        yellowExpand.innerText = "➕";
        yellowContent.classList.add("hide");
        console.log("collapse");
    }
});

// Expand and collapse All content
greenExpand.addEventListener('click', function () {
    if (greenExpand.innerText == "➕") {
        greenExpand.innerText = "➖";
        greenContent.classList.remove("hide");
        console.log("expand");
    } else {
        greenExpand.innerText = "➕";
        greenContent.classList.add("hide");
        console.log("collapse");
    }
});

// Expand and collapse Terminal content
purpleExpand.addEventListener('click', function () {
    if (purpleExpand.innerText == "➕") {
        purpleExpand.innerText = "➖";
        purpleContent.classList.remove("hide");
        console.log("expand");
    } else {
        purpleExpand.innerText = "➕";
        purpleContent.classList.add("hide");
        console.log("collapse");
    }
});




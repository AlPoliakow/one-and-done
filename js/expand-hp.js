const aboutBase = document.querySelector('.about-base');
const aboutContent = document.querySelector('.about-content');
const aboutExpand = document.querySelector('.about-base .collapsible');


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



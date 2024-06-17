const ffBase = document.querySelector('.ff-base');
const ffContent = document.querySelector('.ff-content');
const ffExpand = document.querySelector('.ff-base .collapsible');
const branchesBase = document.querySelector('.branches-base');
const branchesContent = document.querySelector('.branches-content');
const branchesExpand = document.querySelector('.branches-base .collapsible');
const repoBase = document.querySelector('.repo-base');
const repoContent = document.querySelector('.repo-content');
const repoExpand = document.querySelector('.repo-base .collapsible');
const irregularBase = document.querySelector('.irregular-base');
const irregularContent = document.querySelector('.irregular-content');
const irregularExpand = document.querySelector('.irregular-base .collapsible');
const movingBase = document.querySelector('.moving-base');
const movingContent = document.querySelector('.moving-content');
const movingExpand = document.querySelector('.moving-base .collapsible');
const createBase = document.querySelector('.create-base');
const createContent = document.querySelector('.create-content');
const createExpand = document.querySelector('.create-base .collapsible');
const hardBase = document.querySelector('.hard-base');
const hardContent = document.querySelector('.hard-content');
const hardExpand = document.querySelector('.hard-base .collapsible');
const resourcesBase = document.querySelector('.resources-base');
const resourcesContent = document.querySelector('.resources-content');
const resourcesExpand = document.querySelector('.resources-base .collapsible');
const hintsBase = document.querySelector('.hints-base');
const hintsContent = document.querySelector('.hints-content');
const hintsExpand = document.querySelector('.hints-base .collapsible');
const doneBase = document.querySelector('.done-base');
const doneContent = document.querySelector('.done-content');
const doneExpand = document.querySelector('.done-base .collapsible');

//Expand and collapse Frequent Fliers content
ffExpand.addEventListener('click', function () {
    if (ffExpand.innerText == "➕") {
        ffExpand.innerText = "➖";
        ffContent.style.display="block";
        console.log("expand");
    } else {
        ffExpand.innerText = "➕";
        ffContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Branches content
branchesExpand.addEventListener('click', function () {
    if (branchesExpand.innerText == "➕") {
        branchesExpand.innerText = "➖";
        branchesContent.style.display="block";
        console.log("expand");
    } else {
        branchesExpand.innerText = "➕";
        branchesContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Repo content
repoExpand.addEventListener('click', function () {
    if (repoExpand.innerText == "➕") {
        repoExpand.innerText = "➖";
        repoContent.style.display="block";
        console.log("expand");
    } else {
        repoExpand.innerText = "➕";
        repoContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Irregular content
irregularExpand.addEventListener('click', function () {
    if (irregularExpand.innerText == "➕") {
        irregularExpand.innerText = "➖";
        irregularContent.style.display="block";
        console.log("expand");
    } else {
        irregularExpand.innerText = "➕";
        irregularContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Moving Directories content
movingExpand.addEventListener('click', function () {
    if (movingExpand.innerText == "➕") {
        movingExpand.innerText = "➖";
        movingContent.style.display="block";
        console.log("expand");
    } else {
        movingExpand.innerText = "➕";
        movingContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Create a repo content
createExpand.addEventListener('click', function () {
    if (createExpand.innerText == "➕") {
        createExpand.innerText = "➖";
        createContent.style.display="block";
        console.log("expand");
    } else {
        createExpand.innerText = "➕";
        createContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and delete commits content
hardExpand.addEventListener('click', function () {
    if (hardExpand.innerText == "➕") {
        hardExpand.innerText = "➖";
        hardContent.style.display="block";
        console.log("expand");
    } else {
        hardExpand.innerText = "➕";
        hardContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Resources content
resourcesExpand.addEventListener('click', function () {
    if (resourcesExpand.innerText == "➕") {
        resourcesExpand.innerText = "➖";
        resourcesContent.style.display="block";
        console.log("expand");
    } else {
        resourcesExpand.innerText = "➕";
        resourcesContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse Hints content
hintsExpand.addEventListener('click', function () {
    if (hintsExpand.innerText == "➕") {
        hintsExpand.innerText = "➖";
        hintsContent.style.display="block";
        console.log("expand");
    } else {
        hintsExpand.innerText = "➕";
        hintsContent.style.display="none";
        console.log("collapse");
    }
});

//Expand and collapse One and Done content
doneExpand.addEventListener('click', function () {
    if (doneExpand.innerText == "➕") {
        doneExpand.innerText = "➖";
        doneContent.style.display="block";
        console.log("expand");
    } else {
        doneExpand.innerText = "➕";
        doneContent.style.display="none";
        console.log("collapse");
    }
});


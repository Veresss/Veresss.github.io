document.getElementById("subMindennapiImak").style.display = "none";
document.getElementById("subEstiImak").style.display = "none";
document.getElementById("subImakKulonbozoAlkalmakra").style.display = "none";
document.getElementById("subAldozasUtaniImak").style.display = "none";
document.getElementById("subSzentirasOlvasashoz").style.display = "none";

let sidebar = document.getElementById("sidebar");
sidebar.style.display = "none";
function Sidebar() {
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
    } else {
        sidebar.style.display = "none";
    }
}

function SubSidebar(elem) {
    elem = document.getElementById(elem);
    if (elem.style.display === "none") {
        elem.style.display = "block";
    } else {
        elem.style.display = "none";
    }
}

function Ima(ima) {
    console.log(imak[ima])
    let article = document.getElementById("article");
    let h1 = document.getElementById("cim");
    h1.innerHTML = imak[ima].Cim;
    article.innerHTML = imak[ima].Ima;
    sidebar.style.display = "none";
}
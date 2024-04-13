let subMindennapiImak = document.getElementById("subMindennapiImak")
let subEstiImak = document.getElementById("subEstiImak")
let subImakKulonbozoAlkalmakra= document.getElementById("subImakKulonbozoAlkalmakra")
let subAldozasUtaniImak = document.getElementById("subAldozasUtaniImak")
let subSzentirasOlvasashoz = document.getElementById("subSzentirasOlvasashoz")
subMindennapiImak.style.display = "none";
subEstiImak.style.display = "none";
subImakKulonbozoAlkalmakra.style.display = "none";
subAldozasUtaniImak.style.display = "none";
subSzentirasOlvasashoz.style.display = "none";

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
    subMindennapiImak.style.display = "none";
    subEstiImak.style.display = "none";
    subImakKulonbozoAlkalmakra.style.display = "none";
    subAldozasUtaniImak.style.display = "none";
    subSzentirasOlvasashoz.style.display = "none";
}
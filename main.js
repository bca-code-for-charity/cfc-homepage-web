/*
This JS will run on every single page of the website
*/
const wideRoot = document.getElementById("wide");
const narrowRoot = document.getElementById("narrow");
function resize() {
    if (window.outerWidth <= 756) {
        narrowRoot.removeAttribute("style");
        wideRoot.setAttribute("style", "display: none;");
    } else {
        wideRoot.removeAttribute("style");
        narrowRoot.setAttribute("style", "display: none;");
    }
}
resize();
let anchors = document.getElementsByClassName("link");
for (let a = 0; a < anchors.length; ++a) {
    if (anchors[a].getAttribute("href") === "") {
        anchors[a].setAttribute("style", "text-decoration: underline;");
    }
}
setInterval(resize, 1);
const links = document.getElementById("links-narrow");
document.getElementById("narrow").addEventListener("click", () => {
    if (links.getAttribute("style")) {
        links.removeAttribute("style");
    } else {
        links.setAttribute("style", "display: none;");
    }
});

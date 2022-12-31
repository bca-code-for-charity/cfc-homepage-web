/*
This JS will run on every single page of the website
*/

let anchors = document.getElementById("links").children[0].children;

for (let a = 0; a < anchors.length; ++a) {
    if (anchors[a].getAttribute("href") === "") {
        anchors[a].setAttribute("style", "text-decoration: underline;")
    }
}
let butn = document.createElement("button");
butn.classList.add('colorize');
butn.innerHTML = '<span class="color">Colorize</span>';
var enable = 1;
var enable2 = 1;
var enable3 = 1;
var enable4 = 1;
var enable5 = 1;
var enable6 = 1;
var enable7 = 1;
butn.onclick = function() {
    if (enable == 1) {
        colorize();
        enable -= 1;
    } else {
        enable += 1;
        decolorize();
    }
};
document.body.appendChild(butn);

const h1 = document.getElementsByTagName("h1")
const h2 = document.getElementsByTagName("h2")
const h3 = document.getElementsByTagName("h3")
const h4 = document.getElementsByTagName("h4")
const h5 = document.getElementsByTagName("h5")
const h6 = document.getElementsByTagName("h6")
const p = document.getElementsByTagName("p")
const li = document.getElementsByTagName("li")
const a = document.getElementsByTagName("a")
const q = document.getElementsByTagName("q")
const span = document.getElementsByTagName("span")
const em = document.getElementsByTagName("em")
const cite = document.getElementsByTagName("cite")

function colorize() {
    for (var i=0; i < h1.length; i++) {
        h1[i].style.color = "green";
    }
    for (var i=0; i < h2.length; i++) {
        h2[i].style.color = "brown";
    }
    for (var i=0; i < h3.length; i++) {
        h3[i].style.color = "red";
    }
    for (var i=0; i < h4.length; i++) {
        h4[i].style.color = "orange";
    }
    for (var i=0; i < h5.length; i++) {
        h5[i].style.color = "purple";
    }
    for (var i=0; i < h6.length; i++) {
        h6[i].style.color = "grey";
    }
    for (var i=0; i < p.length; i++) {
        p[i].style.color = "blue";
    }
    for (var i=0; i < li.length; i++) {
        li[i].style.color = "rgb(100,0,100)";
    }
    for (var i=0; i < a.length; i++) {
        a[i].style.color = "rgb(204, 158, 239)";
    }
    for (var i=0; i < q.length; i++) {
        q[i].style.color = "rgb(119, 71, 91)";
    }
    for (var i=0; i < span.length; i++) {
        span[i].style.color = "rgb(3,186,141)";
    }
    for (var i=0; i < em.length; i++) {
        em[i].style.color = "rgb(3,186,141)";
    }
    for (var i=0; i < cite.length; i++) {
        cite[i].style.color = "#FFE5B4";
    }
}

function decolorize() {
    for (var i=0; i < h1.length; i++) {
        h1[i].style.color = "black";
    }
    for (var i=0; i < h2.length; i++) {
        h2[i].style.color = "black";
    }
    for (var i=0; i < h3.length; i++) {
        h3[i].style.color = "black";
    }
    for (var i=0; i < h4.length; i++) {
        h4[i].style.color = "black";
    }
    for (var i=0; i < h5.length; i++) {
        h5[i].style.color = "black";
    }
    for (var i=0; i < h6.length; i++) {
        h6[i].style.color = "black";
    }
    for (var i=0; i < p.length; i++) {
        p[i].style.color = "black";
    }
    for (var i=0; i < li.length; i++) {
        li[i].style.color = "black";
    }
    for (var i=0; i < a.length; i++) {
        a[i].style.color = "black";
    }
    for (var i=0; i < q.length; i++) {
        q[i].style.color = "black";
    }
    for (var i=0; i < span.length; i++) {
        span[i].style.color = "black";
    }
    for (var i=0; i < em.length; i++) {
        em[i].style.color = "black";
    }
    for (var i=0; i < cite.length; i++) {
        cite[i].style.color = "black";
    }
}

function highlights(color) {
    document.designMode = "on";
    if (window.getSelection) {
        try {
            if (!document.execCommand("BackColor", false, colour)) {
                if (document.execCommand("HiliteColor", false, color)) {
                    !document.execCommand("BackColor", false, color);
                }
            }
        } catch (ex) {
            if (document.execCommand("HiliteColor", false, color)) {
                !document.execCommand("BackColor", false, color);
            }
        }
    }
    document.designMode = "off";
}

let btn = document.createElement("button");
btn.classList.add('highlight');
btn.innerHTML = '<span class="high">Highlight</span>';
btn.onclick = function () {
    if (enable2 == 1) {
        highlights("yellow");
        enable2 -= 1;
    } else {
        enable2 += 1;
        highlights("Transparent");
    }
};
document.body.appendChild(btn);

let btn2 = document.createElement("button");
btn2.classList.add('highlight2');
btn2.innerHTML = '<span class="high2">Highlight</span>';
btn2.onclick = function () {
    if (enable3 == 1) {
        highlights("#ff5349");
        enable3 -= 1;
    } else {
        enable3 += 1;
        highlights("Transparent");
    }
};
document.body.appendChild(btn2);

let btn3 = document.createElement("button");
btn3.classList.add('highlight3');
btn3.innerHTML = '<span class="high3">Highlight</span>';
btn3.onclick = function () {
    if (enable4 == 1) {
        highlights("#ffadd2");
        enable4 -= 1;
    } else {
        enable4 += 1;
        highlights("Transparent");
    }
};
document.body.appendChild(btn3);

let btn4 = document.createElement("button");
btn4.classList.add('highlight4');
btn4.innerHTML = '<span class="high4">Highlight</span>';
btn4.onclick = function () {
    if (enable5 == 1) {
        highlights("cyan");
        enable5 -= 1;
    } else {
        enable5 += 1;
        highlights("Transparent");
    }
};
document.body.appendChild(btn4);

let btn5 = document.createElement("button");
btn5.classList.add('highlight5');
btn5.innerHTML = '<span class="high5">Highlight</span>';
btn5.onclick = function () {
    if (enable6 == 1) {
        highlights("#90ee90");
        enable6 -= 1;
    } else {
        enable6 += 1;
        highlights("Transparent");
    }
};
document.body.appendChild(btn5);

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendresponse) {
    if (message.txt === "click") {
        let button = document.getElementsByTagName('button');
        let color = document.getElementsByClassName('colorize');
        let highlight = document.getElementsByClassName('highlight');
        let highlight2 = document.getElementsByClassName('highlight2');
        let highlight3 = document.getElementsByClassName('highlight3');
        let highlight4 = document.getElementsByClassName('highlight4');
        let highlight5 = document.getElementsByClassName('highlight5');
        if (enable7 != 1) {
            for (elt of color) {
                elt.innerHTML = "Colorize";
                enable7 = 1;
            }
            for (elt of highlight) {
                elt.innerHTML = "Highlight";
                enable7 = 1;
            }
            for (elt of highlight2) {
                elt.innerHTML = "Highlight";
                enable7 = 1;
            }
            for (elt of highlight3) {
                elt.innerHTML = "Highlight";
                enable7 = 1;
            }
            for (elt of highlight4) {
                elt.innerHTML = "Highlight";
                enable7 = 1;
            }
            for (elt of highlight5) {
                elt.innerHTML = "Highlight";
                enable7 = 1;
            }
        } else {
            for (elt of button) {
                elt.innerHTML = "";
                enable7 += 1;
        }
    }
}
}
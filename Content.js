let butn = document.createElement("button");
butn.classList.add('colorize');
butn.innerHTML = '<span class="color">Colorize</span>';
var enable = 1;
var enable2 = 1;
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
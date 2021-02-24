document.body.style.opacity = 0;

let anim = document.body.animate([{ opacity: 0 }, { opacity: 1 }], 1000);

anim.onfinish = function () {
    document.body.style.opacity = 1;
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

let color_data = {
    "r": {
        "bg": "#FB7477",
        "detail": "#E73639"
    },
    "o": {
        "bg": "#F5915B",
        "detail": "#F86820"
    },
    "y": {
        "bg": "#FAD57F",
        "detail": "#F8961E"
    },
    "g": {
        "bg": "#ACCE92",
        "detail": "#79B04F"
    },
    "b": {
        "bg": "#319BC9",
        "detail": "#236F90"
    },
    "p": {
        "bg": "#9E70A9",
        "detail": "#764D80"
    }
}

let data = {
    flavor: {
        1: "#ffdccc",
        2: "#5E363C",
        3: "#a53536",
        4: "#FCE797",
        5: "#F6BCBD"
    },
    topping: {
        1: "#814236",
        2: "#e87485",
        3: "#fff9e2"
    }
}

document.documentElement.style.setProperty('--bgColor', color_data[urlParams.get('color')].bg);
document.documentElement.style.setProperty('--detailColor', color_data[urlParams.get('color')].detail);
document.documentElement.style.setProperty('--topping', data.topping[urlParams.get('topping')]);
document.documentElement.style.setProperty('--flavor', data.flavor[urlParams.get('flavor')]);

var body = document.body, html = document.documentElement;
var height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
document.documentElement.style.setProperty('--height', height + "px");
console.log(height)

let xhr = new XMLHttpRequest();
xhr.open("GET", "assets/details.svg", false);
xhr.onload = function (e) {
    document.getElementById("detail").appendChild(xhr.responseXML.documentElement);
}
xhr.send("");

xhr = new XMLHttpRequest();
xhr.open("GET", "assets/topping.svg", false);
xhr.onload = function (e) {
    document.getElementById("topping").appendChild(xhr.responseXML.documentElement);
}
xhr.send("");

xhr = new XMLHttpRequest();
xhr.open("GET", "assets/cake.svg", false);
xhr.onload = function (e) {
    document.getElementById("flavor").appendChild(xhr.responseXML.documentElement);
}
xhr.send("");

xhr = new XMLHttpRequest();
xhr.open("GET", "assets/candles.svg", false);
xhr.onload = function (e) {
    document.getElementById("candle-wax").appendChild(xhr.responseXML.documentElement);
}
xhr.send("");

let age_binary = (parseInt(urlParams.get('age')) >>> 0).toString(2);
let zeros2add = 7 - age_binary.length;
for (let i = 0; i < zeros2add; i++) {
    age_binary = "0" + age_binary;
}
age_binary = age_binary.replaceAll("0", "0 ").replaceAll("1", "1 ").trim();
document.getElementById("binary").textContent = age_binary;

age_binary.split(" ").forEach(function (bit, i) {
    if (bit === "0") document.getElementById("candle-" + (i + 1)).style.display = "none";
});
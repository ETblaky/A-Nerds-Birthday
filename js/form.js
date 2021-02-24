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

function ready() {
    let color = document.getElementById("color").value;
    let flavor = document.getElementById("flavor").value;
    let topping = document.getElementById("topping").value;
    let age = document.getElementById("age").value;
    if (!parseInt(age) || parseInt(age) === 0) {
        alert("Oops! It seems like your forgot to specify your age. Remember to enter a valid number :)")
    } else if (parseInt(age) > Math.pow(2, 5)) {
        alert("Oops! The age you chose is too big! Pls choose a number up to 127")
    }
    else {
        let anim = document.body.animate([{ opacity: 1 }, { opacity: 0 }], 1000);
        anim.onfinish = function () {
            document.body.style.opacity = 0;
            window.location.href = 'cake.html?color=' + color + "&topping=" + topping + "&flavor=" + flavor + "&age=" + age;
        }
    }

};

function setColor() {
    let color = document.getElementById("color").value;

    document.documentElement.style.setProperty('--bgColor', color_data[color].bg);
    document.documentElement.style.setProperty('--detailColor', color_data[color].detail);
}
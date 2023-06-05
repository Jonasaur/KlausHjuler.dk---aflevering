
// Burgermenu

function menuToggle() {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

// Collapsible

let coll = document.getElementsByClassName("collapsible")
let i

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active")
        let content = this.nextElementSibling
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    })   
}

let plus1 = document.getElementById("plus1")
let plus2 = document.getElementById("plus2")
let plus3 = document.getElementById("plus3")

function plus1Toggle() {
    if (plus1.innerHTML === "+") {
        plus1.innerHTML = "-"
    } else {
        plus1.innerHTML = "+"
    }
}

function plus2Toggle() {
    if (plus2.innerHTML === "+") {
        plus2.innerHTML = "-"
    } else {
        plus2.innerHTML = "+"
    }
}

function plus3Toggle() {
    if (plus3.innerHTML === "+") {
        plus3.innerHTML = "-"
    } else {
        plus3.innerHTML = "+"
    }
}


/** collapsible 2 til min historie side*/

let coll2 = document.getElementsByClassName("collapsible2")
let i2

for (i2 = 0; i2 < coll2.length; i2++) {
    coll2[i2].addEventListener("click", function() {
        this.classList.toggle("active")
        let content = this.nextElementSibling
        if (content.style.display === "block") {
            content.style.display = "none"
        } else {
            content.style.display = "block"
        }
    })   
}


function plus4Toggle() {
    if (plus4.innerHTML === "+") {
        plus4.innerHTML = "-"
    } else {
        plus4.innerHTML = "+"
    }
}

function plus5Toggle() {
    if (plus5.innerHTML === "+") {
        plus5.innerHTML = "-"
    } else {
        plus5.innerHTML = "+"
    }
}

// funktion der skifter mellem baggrunde på workshop


document.addEventListener("DOMContentLoaded", function() {
    let BGIndex2 = 0;
    let wimages = [
        "img/KHworkshop2_web.webp",
        "img/KHworkshop1_web.webp"
    ];

    function changeBG2() {
        let heroImage = document.getElementById("workshop-heroImage");
        if (heroImage) {
            heroImage.style.backgroundImage = "url(" + wimages[BGIndex2] + ")";
            BGIndex2++;

            if (BGIndex2 >= wimages.length) {
                BGIndex2 = 0;
            }
        }
    }
    changeBG2();
    setInterval(changeBG2, 5000);
});


/** Om mig side - script til billeder */


document.addEventListener("DOMContentLoaded", function() {
    let BGIndex3 = 0;
    let oimages = [
        "img/KHommig2_web.webp",
        "img/KHommig1_web.webp"
    ];

    function changeBG3() {
        let heroImage = document.getElementById("omMig-heroImage");
        if (heroImage) {
            heroImage.style.backgroundImage = "url(" + oimages[BGIndex3] + ")";
            BGIndex3++;

            if (BGIndex3 >= oimages.length) {
                BGIndex3 = 0;
            }
        }
    }
    changeBG3();
    setInterval(changeBG3, 5000);
});


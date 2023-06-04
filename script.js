
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

// funktion der skifter mellem baggrunde på foredrag

// let BGIndex1 = 0
// let fimages = [
//     "img/Cocktail Kitten.jpg",
//     "img/foredragKlaus.png",
//     "img/portrætKlaus.jpg"
// ]

// function changeBG1() {
//     document.getElementById("foredrag-heroImage").style.backgroundImage = "url('" + fimages[BGIndex1] + "')"
//     BGIndex1 ++
  
//     if (BGIndex1 >= fimages.length) {
//         BGIndex1 = 0
//     }
// }

// setInterval(changeBG1, 5000)

let BGIndex2 = 0
let wimages = [
    "img/KHworkshop2_web.webp",
    "img/KHworkshop1_web.webp"
]

function changeBG2() {
    document.getElementById("workshop-heroImage").style.backgroundImage = "url('" + wimages[BGIndex2] + "')"
    BGIndex2 ++
  
    if (BGIndex2 >= wimages.length) {
        BGIndex2 = 0
    }
}

setInterval(changeBG2, 5000)


/** prøver lige noget */


let BGIndex3 = 0
let oimages = [
    "img/KHommig2_web.webp",
    "img/KHommig1_web.webp"
]

function changeBG3() {
    document.getElementById("omMig-heroImage").style.backgroundImage = "url('" + oimages[BGIndex3] + "')"
    BGIndex3 ++
  
    if (BGIndex3 >= oimages.length) {
        BGIndex3 = 0
    }
}

setInterval(changeBG3, 5000)
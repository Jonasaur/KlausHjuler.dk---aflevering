
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

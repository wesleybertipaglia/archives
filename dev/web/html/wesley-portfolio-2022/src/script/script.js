// contact form
let contactForm = document.querySelector("#contact form")
let notify = document.createElement("div")
let txtNotify
notify.setAttribute("class", "notify")
contactForm.addEventListener("submit", sendForm)

function sendForm() {
    setTimeout(() => {
        contactForm.reset()
        txtNotify = document.createTextNode("Enviado com sucesso")
        notify.appendChild(txtNotify)
        contactForm.appendChild(notify)
    }, 500);

    setTimeout(() => {
        contactForm.removeChild(notify)
    }, 2000);
}

// div close
let div2close = document.querySelectorAll(".divClose")
let btn2close = document.querySelectorAll(".btnClose")

function closeDiv(div) {
    div2close[div].style.display = "none"
}

const toTopButton = document.getElementById("button-to-top")
toTopButton.addEventListener("click", topFunction)

window.onscroll = function() {
    scrollFunction()
}
        
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        toTopButton.style.display = "block"
    } else {
        toTopButton.style.display = "none"
    }
}

function topFunction() {
    window.scroll({top: 0, left: 0, behavior: 'smooth'})
}

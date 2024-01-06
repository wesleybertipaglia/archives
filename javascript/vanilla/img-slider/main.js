
const imgs = [
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1501949997128-2fdb9f6428f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1494935362342-566c6d6e75b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1466354424719-343280fe118b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
]

const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const slider = document.querySelector('#slider-img')
let i = 0

// set the first img
slider.style.background = `url(${imgs[0]}) no-repeat center center`
slider.style.backgroundSize = 'cover'

prev.addEventListener('click', prevImg)
next.addEventListener('click', nextImg)

function prevImg() {
    i--
    if (i < 0) { // check if count is less than array
        i = imgs.length - 1
    }
    console.log(i)
    setImg()
}

function nextImg() {
    i++
    if (i > imgs.length - 1) { // check if count is higer than array
        i = 0
    }
    console.log(i)
    setImg()
}

function setImg() {
    slider.style.background = `url(${imgs[i]}) no-repeat center center`
    slider.style.backgroundSize = 'cover'
}
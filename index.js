//часы
const clock = document.querySelector('.box__clock');
// список
let message = document.querySelector('#text')
let addButton = document.querySelector('.form__button')
let messageList = document.querySelector('.form__list')
let list = []
// свайп
const container = document.querySelector('.container')
const slide = document.querySelector('.swipe-container')
const box = document.querySelectorAll('.box')
let start
let change
//
function showSlide() {
    if (change > 90) {
        slide.style.left = '-100vw'
    } else {
        slide.style.left = '0'
    }
}
//
if (localStorage.getItem('allMessages')) {
    list = JSON.parse(localStorage.getItem('allMessages'))
    list.forEach((item) => item.toAdd = false)
    showMessages()
}
function addMessage(e) {
    e.preventDefault()
    localStorage.setItem('allMessages', JSON.stringify(list))
    list = JSON.parse(localStorage.getItem('allMessages'))
    list.forEach((item) => item.toAdd = false)
    let messageObj = {
        value: message.value,
        toAdd: true
    }
    list.push(messageObj)
    showMessages()
}
function showMessages() {
    let showMessage = ''
    list.forEach((item) => {
        if (item.value !== '') {
            showMessage += `<li>${item.value}<span ${item.toAdd && `class="added"`}></span></li>`
            messageList.innerHTML = showMessage
        }
    })
}
localStorage.removeItem('allMessages')
//
function showTime() {
    const time = new Date()
    let h = time.getHours().toString()
    let m = time.getMinutes().toString()
    let s = time.getSeconds().toString()
    if (h.length < 2) {
        h = '0' + h
    }
    if (m.length < 2) {
        m = '0' + m
    }
    if (s.length < 2) {
        s = '0' + s
    }
    let clockString = h + ':' + m + ':' + s
    clock.textContent = clockString
}
showTime()
setInterval(showTime, 1000)



container.addEventListener('touchstart', (e) => {
    start = e.touches[0].clientX
})

container.addEventListener('touchmove', (e) => {
    let touch = e.touches[0].clientX
    change = start - touch
})

container.addEventListener('touchend', showSlide)
addButton.addEventListener('click', addMessage);
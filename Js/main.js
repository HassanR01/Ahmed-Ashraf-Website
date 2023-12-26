let menu = document.querySelector('.menu')
let icon = document.querySelector('.bIcon')
let spanIcons = document.querySelectorAll('.bIcon span')
icon.addEventListener('mouseover' , () => {
    menu.classList.toggle('active')
    spanIcons.forEach(spanIcon => {
        spanIcon.classList.toggle("full")
    })
})

icon.addEventListener('mouseout' , () => {
    menu.classList.toggle('active')
    spanIcons.forEach(spanIcon => {
        spanIcon.classList.toggle("full")
    })
})

let date = document.querySelector('.dateCR')
let year = new Date().getFullYear()
date.textContent = `${year}`
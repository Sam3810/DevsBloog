let nav = document.querySelector('.nav')
let abrir = document.querySelector('.abrir-menu')
let cerrar = document.querySelector('.cerrar-menu')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})
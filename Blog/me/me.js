let nav = document.querySelector('.nav')
let abrir = document.querySelector('.abrir-menu')
let cerrar = document.querySelector('.cerrar-menu')

abrir.addEventListener('click', () => {
    nav.classList.add('visible')
})

cerrar.addEventListener('click', () => {
    nav.classList.remove('visible')
})

//Scroll

//Proyectos
let buttonNext = document.querySelector('#next')
let buttonBack = document.querySelector('#back')
let art1 = document.querySelector('#article1')
let art2 = document.querySelector('#article2')
let i = 0

buttonNext.addEventListener('click', () => {
    switch(true) {
        case i == 0:
            art1.classList.remove('article')
            art2.classList.add('article')
            i += 1
            break
        case i == 1:
            art2.classList.remove('article')
            art1.classList.add('article')
            i -= 1
            break
    }
})

buttonBack.addEventListener('click', () => {
    switch(true) {
        case i == 0:
            art1.classList.remove('article')
            art2.classList.add('article')
            i += 1
            break
        case i == 1:
            art2.classList.remove('article')
            art1.classList.add('article')
            i -= 1
            break
    }
})
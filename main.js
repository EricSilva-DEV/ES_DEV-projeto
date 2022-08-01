
/*=== Abrir e fechar menu ====*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
    element.addEventListener('click', function () {
        nav.classList.toggle('show')
    })
}

/*==== Acção de clicar e fechar menu ======*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
    link.addEventListener('click', function () {
        nav.classList.remove('show')
    })
}

/*==== Sombra do cabeçalho com scroll =======*/
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
    if (window.scrolly >= navHeight) {
        /* ===== quando o scroll for maior que altura do header ====*/
        header.classList.remove('scroll')
    } else {
        header.classList.add('scroll')
    }
})
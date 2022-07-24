
document.querySelector(".menu-bars").addEventListener("click", animateBars);

var line1 = document.querySelector(".line1-bars");

var line2 = document.querySelector(".line2-bars");

var line3 = document.querySelector(".line3-bars");

var menu__desplegable = document.querySelector(".nav-list");

var capa_gris = document.querySelector(".capa-gris")

function animateBars() {
    // LINEAS DEL MENU

    line1.classList.toggle("active__line1-bars");
    line2.classList.toggle("active__line2-bars");
    line3.classList.toggle("active__line3-bars");

    // LINEAS DEL MENU

    // MENU DESPLEGABLE

    menu__desplegable.classList.toggle("nav__active")

    // MENU DESPLEGABLE

    capa_gris.classList.toggle("capa-gris__active")


}
var btn = document.querySelector('.menu-btn');
var showMenu = document.querySelector('.main-menu');

btn.addEventListener('click',Menu);

function Menu(){
    showMenu.classList.toggle('show');
}


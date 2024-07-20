
var btnMenu = document.querySelector('.btn-menu');
var menu = document.querySelector('.menu');

//console.log(btnMenu);
//console.log(menu);
//console.log('👌')

function controlMenu(){
    menu.classList.toggle('menu-open');
    btnMenu.classList.toggle('x');
}

btnMenu.addEventListener('click', controlMenu);
menu.addEventListener('click', controlMenu);
let menu = document.getElementById('menu');
let btn = document.getElementById('menu-btn');
let menuStyle = window.getComputedStyle(menu);

const openMenu = () => {
    if (menuStyle.display === 'none') {
        menu.style.display = 'flex';
    }

    else {
        menu.style.display = 'none';
    }
}




btn.addEventListener('click', openMenu);


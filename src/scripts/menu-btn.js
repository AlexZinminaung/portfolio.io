const menuBtn = document.getElementsByClassName('menu-btn')[0];
const mobileNav = document.getElementsByClassName('mb-nav')[0];


const onAndOff = () => {
    if (mobileNav.style.display === 'flex')
    {
        mobileNav.style.display = 'none'
    }

    else {
        mobileNav.style.display = 'flex'
    }

}


menuBtn.addEventListener('click', onAndOff);
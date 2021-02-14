let navbar = document.querySelector('.navbar');
let menuBtn = document.querySelector('#menu-icon');
let navbarShow;
menuBtn.addEventListener('click', () => {
    if (navbarShow) {
        navbar.style = 'display: none;';
        navbarShow = false;
    } 
    else {
        navbar.style = 'display: flex;';
        navbarShow = true;
    }
});


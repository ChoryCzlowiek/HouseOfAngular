// Show and Hide Menu

const hamburger = document.querySelector('.navbar__icon');
const navigation = document.querySelector('.navigation');

function toogleMenu() {
    navigation.classList.toggle('navigation--active');
}

hamburger.addEventListener('click', toogleMenu);
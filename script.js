const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clossingCross = document.querySelector('.closing-cross');

hamBurger.addEventListener('click', () => {
  mobileMenu.classList.add('mobile-menu-active');
  console.log('showMenu');
});

function hideMenu() {
  mobileMenu.classList.remove('mobile-menu-active');
  console.log('hideMenu');
}

clossingCross.addEventListener('click', hideMenu);

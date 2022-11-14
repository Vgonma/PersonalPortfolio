const hamBurger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const clossingCross = document.querySelector('.closing-cross');

hamBurger.addEventListener('click', function() {
  mobileMenu.classList.add('mobile-menu-active')
});

clossingCross.addEventListener('click', function() {
  mobileMenu.classList.remove('mobile-menu-active')
});
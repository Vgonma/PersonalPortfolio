const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileMenuItems = document.querySelectorAll('.mobile-menu ul li');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu-active');
  hamburger.classList.toggle('is-active');
});

mobileMenuItems.forEach((li) => {
  li.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu-active');
    hamburger.classList.remove('is-active');
  });
});

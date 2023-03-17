const hamburgerMenu = document.getElementById('hamburger-menu');
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
});

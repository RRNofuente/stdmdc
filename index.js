const mobileMenu = document.querySelector(".mobile-menu");
const navLinksList = document.querySelector("#nav-links-list");

mobileMenu.addEventListener("click", mobileMenuOpen);

function mobileMenuOpen(e) {
    mobileMenu.classList.toggle("close");
    navLinksList.classList.toggle("menu-closed");
}
const mobileMenu = document.querySelector(".mobile-menu");
const navLinksList = document.querySelector("#nav-links-list");
const navLinks = document.querySelectorAll("#nav-links-list > li");

mobileMenu.addEventListener("click", mobileMenuOpen);

const about = new Event("click");

function mobileMenuOpen(e) {
    mobileMenu.classList.toggle("close");
    navLinksList.classList.toggle("menu-closed");
}

navLinks.forEach((item)=> {
    item.addEventListener("click", () => {
        const anchor = item.querySelector('a');
        if (anchor) {
            window.location.href = anchor.href;
        }
    });
});
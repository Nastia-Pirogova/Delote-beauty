const refs = {
    menuBtn: document.getElementById("menuBtn"),
    menuContainer: document.getElementById("js-menu-container"),
    btnCloseMenu: document.getElementById("btnCloseMenu"),
}

refs.menuBtn.addEventListener('click', toggleMenu);
refs.btnCloseMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
    const isMenuOpen =
    refs.menuBtn.getAttribute('aria-expanded') === 'true' || false;
    refs.menuBtn.setAttribute('aria-expanded', !isMenuOpen);
    refs.menuContainer.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
        ? 'disableBodyScroll'
        : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
}




// function toggleMenu() {
//     var dropdownMenu = document.getElementById("dropdownMenu");
//     if (dropdownMenu.style.display === "none") {
//         dropdownMenu.style.display = "block";
//     } else {
//         dropdownMenu.style.display = "none";
//     }
// }
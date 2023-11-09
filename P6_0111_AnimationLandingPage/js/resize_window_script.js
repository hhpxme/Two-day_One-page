function collapseMenu () {
    if (window.innerWidth < 660 || window.innerHeight < 560) {
        document.querySelector('.menu-container').classList.add("collapse");
    } else {
        document.querySelector('.menu-container').classList.remove("collapse");
    }
}

window.onresize = collapseMenu;



function extendMenubar(id) {
    const menuBar = document.getElementById(id);
    const btn = menuBar.querySelectorAll('.menu-sticky-button');
    btn.forEach(element => {
       element.classList.toggle("show"); 
    });
}

collapseMenu();



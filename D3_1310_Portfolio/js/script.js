const hd = document.querySelector("header");
const mainContainer = document.querySelector(".container");

function scrollSticky() {
    if (mainContainer.scrollTop >= 520) {
        hd.classList.add("sticky");
        hd.classList.add("glassmorphism-overlay");
    } else {
        hd.classList.remove("sticky");
        hd.classList.remove("glassmorphism-overlay");
    }
}


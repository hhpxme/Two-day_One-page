function scrollMain() {
    if (document.querySelector("main").scrollTop > 72) {
        document.querySelector("header").classList.add("sticky");
    } else {
        document.querySelector("header").classList.remove("sticky");
    }
}
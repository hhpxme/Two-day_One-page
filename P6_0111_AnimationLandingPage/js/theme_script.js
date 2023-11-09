const body = document.querySelector('body');
const themeToggle = document.querySelectorAll('#theme-toggle');

themeToggle.forEach(element => {
    element.addEventListener("click", () => {
        body.classList.toggle('dark');
    });
});
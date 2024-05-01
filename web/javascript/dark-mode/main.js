let body = document.body;
let button = document.querySelector(".theme-switch");

button.addEventListener("click", darkMode);

function darkMode() {
    body.classList.toggle("dark-mode");
    button.textContent = body.classList.contains("dark-mode")
        ? "Light Mode"
        : "Dark Mode";
}

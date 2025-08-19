const root = document.documentElement;
const togglers = document.querySelectorAll("[data-theme-toggler]");

function init() {
    root.setAttribute("data-theme", "light");
    for (toggler of togglers) {
        toggler.innerText = `Thème dark`;
    }
}

init();

function toggleDarkMode() {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    for (toggler of togglers) {
        toggler.innerText = `Thème ${currentTheme}`;
    }
}


togglers.forEach((toggler) => {
    toggler.addEventListener("click", toggleDarkMode);
});



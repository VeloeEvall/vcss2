// theme toggle section
var darkmodeactive = localStorage.getItem("darkmode");
function goDark() {
    document.body.classList.add("dark");
}
function stayDark() {
    goDark();
    localStorage.setItem("darkmode", true);
    darkmodeactive = localStorage.getItem("darkmode");
}
function goLight() {
    document.body.classList.remove("dark");
}
function stayLight() {
    goLight();
    localStorage.setItem("darkmode", false);
    darkmodeactive = localStorage.getItem("darkmode");
}
window
    .matchMedia("(prefers-color-scheme: dark)")
    .addListener((e) => e.matches && stayDark());
window
    .matchMedia("(prefers-color-scheme: light)")
    .addListener((e) => e.matches && stayLight());
if (document.querySelector(".toggle-switch")) {
    document.querySelector(".toggle-switch").addEventListener("click", () => {
        if (document.body.classList.contains("dark")) {
            stayLight();
        } else {
            stayDark();
        }
    });
}
window.onload = () => {
    document.querySelectorAll("*").forEach((el) => {
        el.classList.add("disableEasingTemporarily");
    });
    if (localStorage.darkmode == "true") {
        goDark();
    } else if (localStorage.darkmode == "false") {
        goLight();
    }
    setTimeout(() => {
        document.querySelectorAll("*").forEach((el) => {
            el.classList.remove("disableEasingTemporarily");
        });
    }, 20);
};

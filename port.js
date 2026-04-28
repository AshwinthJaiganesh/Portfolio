// THEME TOGGLE
document.getElementById("theme-btn").onclick = () => {
    document.body.classList.toggle("light-mode");
};

// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});

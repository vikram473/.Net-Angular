const button = document.getElementById("toggleTheme");

const applyTheme = theme => {
    document.body.style.backgroundColor =
        theme === "dark" ? "#222" : "#fff";
    document.body.style.color =
        theme === "dark" ? "#fff" : "#000";
};

const savedTheme = localStorage.getItem("theme") || "light";
applyTheme(savedTheme);

button.addEventListener("click", () => {
    const newTheme =
        localStorage.getItem("theme") === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    applyTheme(newTheme);
});
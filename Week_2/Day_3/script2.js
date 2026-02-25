const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTask");
const list = document.getElementById("taskList");

addBtn.addEventListener("click", () => {
    if (input.value === "") return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${input.value}</span>
        <button class="delete">X</button>
    `;
    list.appendChild(li);
    input.value = "";
});

// Event Delegation
list.addEventListener("click", event => {
    if (event.target.classList.contains("delete")) {
        event.target.parentElement.remove();
    } else if (event.target.tagName === "SPAN") {
        event.target.style.textDecoration =
            event.target.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    }
});
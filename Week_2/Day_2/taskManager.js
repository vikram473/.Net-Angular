import {
    addTaskCallback,
    deleteTaskCallback,
    listTasksCallback
} from "./taskStorage.js";

// Convert callbacks to Promises
const addTask = task =>
    new Promise(resolve => addTaskCallback(task, resolve));

const deleteTask = task =>
    new Promise(resolve => deleteTaskCallback(task, resolve));

const listTasks = () =>
    new Promise(resolve => listTasksCallback(resolve));

// Async/Await version
const runTaskManager = async () => {
    await addTask("Learn JavaScript");
    await addTask("Practice ES6");
    await deleteTask("Learn JavaScript");

    const tasks = await listTasks();

    document.getElementById("tasks").innerHTML = `
        ${tasks.map(t => `<p>${t}</p>`).join("")}
    `;
};

window.runTaskManager = runTaskManager;
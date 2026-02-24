let tasks = [];

export const addTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks.push(task);
        callback();
    }, 1000);
};

export const deleteTaskCallback = (task, callback) => {
    setTimeout(() => {
        tasks = tasks.filter(t => t !== task);
        callback();
    }, 1000);
};

export const listTasksCallback = callback => {
    setTimeout(() => {
        callback(tasks);
    }, 1000);
};
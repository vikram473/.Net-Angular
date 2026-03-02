$(document).ready(function () {

    // Function to update counters
    function updateCounts() {
        const total = $("#taskList li").length;
        const completed = $("#taskList li.completed").length;

        $("#totalCount").text(total);
        $("#completedCount").text(completed);
    }

    // Add Task
    $("#addTask").on("click", function () {

        const taskText = $("#taskInput").val().trim();

        if (taskText !== "") {

            $("#taskList").append(`
                <li class="task-item">
                    <span class="task-text">${taskText}</span>
                    <span class="delete-btn">❌</span>
                </li>
            `);

            $("#taskInput").val(""); // clear input
            updateCounts();
        }
    });

    // Event Delegation for complete task
    $("#taskList").on("click", ".task-text", function () {
        $(this).parent().toggleClass("completed");
        updateCounts();
    });

    // Event Delegation for delete task
    $("#taskList").on("click", ".delete-btn", function () {
        $(this).parent().remove();
        updateCounts();
    });

});
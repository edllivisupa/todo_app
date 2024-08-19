const form = document.querySelector("form");
const toDoList = document.querySelector("#tasks-list");

// Retrieve tasks from localStorage or initialize an empty array
let tasksList = JSON.parse(localStorage.getItem("savedToDoList")) || [];

// Function to render tasks on the page
function renderTasks() {
    toDoList.innerHTML = ""; // Clear the list before re-rendering
    tasksList.forEach((taskObj, index) => {
        const newToDo = document.createElement("li");
        newToDo.innerText = taskObj.task;

        const newDoneButton = document.createElement("button");
        const newDeleteButton = document.createElement("button");

        newDoneButton.innerText = "Done";
        newDeleteButton.innerText = "Delete";

        // Apply strikethrough if the task is marked as done
        if (taskObj.isCompleted) {
            newToDo.style.textDecoration = "line-through";
        }

        // Event listener to mark task as done
        newDoneButton.addEventListener("click", function () {
            tasksList[index].isCompleted = !tasksList[index].isCompleted;
            localStorage.setItem("savedToDoList", JSON.stringify(tasksList));
            renderTasks();
        });

        // Event listener to delete the task
        newDeleteButton.addEventListener("click", function () {
            tasksList.splice(index, 1);
            localStorage.setItem("savedToDoList", JSON.stringify(tasksList));
            renderTasks();
        });

        newToDo.append(newDoneButton);
        newToDo.append(newDeleteButton);
        toDoList.append(newToDo);
    });
}

// Initial render of tasks when page loads
renderTasks();

// Event listener to add new tasks
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const newToDoInput = document.querySelector('input[name="new-task"]');

    // Create a task object
    const newTask = {
        task: newToDoInput.value,
        isCompleted: false,
    };

    // Add new task to the tasks list and update localStorage
    tasksList.push(newTask);
    localStorage.setItem("savedToDoList", JSON.stringify(tasksList));

    // Re-render the tasks
    renderTasks();

    // Clear the input field
    form.reset();
});

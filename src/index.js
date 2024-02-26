// event listener for when button is pressed
function submitTask() {
  event.preventDefault();
  let taskInput = document.querySelector("#submit-task");
}

let task = document.querySelector("#todo-list");
task.innerHTML = `${taskInput.value}`;

let submitButton = document.querySelector("#submit-btn");
submitButton.addEventListener("click", submitTask);

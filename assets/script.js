console.log(window.document);
console.dir(window.document);
 
var buttonEl = document.querySelector("#save-task");
console.log(buttonEl);

var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});
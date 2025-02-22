const inputBox = document.getElementById("input");
const taskList = document.getElementById("task-list");

// Load existing tasks from local storage
function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const tasks = JSON.parse(storedTasks);
    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = task;
      taskList.appendChild(li);
      const span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
    });
  }
}

// Save tasks to local storage
function saveTasks() {
  const tasks = Array.from(taskList.children).map((li) => li.textContent);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add task to list and save to local storage
function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
  } else {
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    taskList.appendChild(li);
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    saveTasks();
  }
  inputBox.value = "";
}

// Remove task from list and save to local storage
taskList.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentNode.remove();
    saveTasks();
  }
});

inputBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

// Load existing tasks on page load
loadTasks();
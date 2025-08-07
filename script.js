// ========== TO-DO LIST ==========
let taskList = document.getElementById("taskList");
let taskInput = document.getElementById("taskInput");

function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    taskList.removeChild(li);
    saveTasks();
  }

  taskList.appendChild(li);
  taskInput.value = "";
  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";
}

loadTasks();


// ========== CALCULATOR ==========
let display = document.getElementById("display");

function press(val) {
  display.value += val;
}

function equal() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function clearDisplay() {
  display.value = "";
}

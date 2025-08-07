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

  let span = document.createElement("span");
  span.textContent = taskText;

  // Toggle complete on click
  span.onclick = function () {
    span.classList.toggle("completed");
    saveTasks();
  };

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "delete-btn";
  delBtn.onclick = function () {
    taskList.removeChild(li);
    saveTasks();
  };

  li.appendChild(span);
  li.appendChild(delBtn);
  taskList.appendChild(li);
  taskInput.value = "";

  saveTasks();
}

function saveTasks() {
  localStorage.setItem("tasks", taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem("tasks") || "";

  // Restore event listeners
  const spans = taskList.querySelectorAll("span");
  const delBtns = taskList.querySelectorAll(".delete-btn");

  spans.forEach(span => {
    span.onclick = function () {
      span.classList.toggle("completed");
      saveTasks();
    };
  });

  delBtns.forEach(btn => {
    btn.onclick = function () {
      btn.parentElement.remove();
      saveTasks();
    };
  });
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

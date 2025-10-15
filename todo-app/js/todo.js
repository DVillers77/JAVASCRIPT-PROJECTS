/* --- APPLICATION STATE AND STORAGE --- */

// The main array to hold all todo objects.
let todos = [];
// Array to hold deleted tasks for the undo feature.
let history = [];

// Dev Comment (Best Practice): Loads tasks from localStorage on startup.
function loadTodos() {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

// Dev Comment (Best Practice): Saves the current state of the array to localStorage.
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Dev Comment (Utility): Shows a temporary feedback message to the user.
function showFeedback(message, isError = false) {
  const feedbackElement = document.getElementById("feedback");
  feedbackElement.textContent = message;
  feedbackElement.classList.remove("hidden");

  // Optional: Add a class for error styling
  if (isError) {
    feedbackElement.style.color = "var(--color-danger)";
  } else {
    feedbackElement.style.color = "var(--color-primary)";
  }

  // Hide the message after 3 seconds
  setTimeout(() => {
    feedbackElement.classList.add("hidden");
    feedbackElement.style.color = ""; // Reset color
  }, 3000);
}

/* --- CORE LOGIC: ADD, REMOVE, COMPLETE --- */

// Adds a new task object to the todos array.
function add() {
  const taskInput = document.getElementById("task");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    showFeedback("Task cannot be empty!", true);
    return;
  }

  const newTask = {
    id: Date.now().toString(), // Simple unique ID
    text: taskText,
    completed: false,
  };

  todos.push(newTask);
  taskInput.value = ""; // Clear input
  saveTodos();
  show(); // Update the UI
  showFeedback("Task added successfully!");
}

// Removes a task based on its ID.
function removeTask(taskId) {
  const index = todos.findIndex((task) => task.id === taskId);

  if (index !== -1) {
    // Store the removed task in history for potential undo
    const removedTask = todos.splice(index, 1)[0];
    history.push({ action: "remove", task: removedTask, index: index });

    saveTodos();
    show();
    showFeedback("Task removed.");
  }
}

// Toggles the completed status of a task.
function toggleCompletion(taskId) {
  const task = todos.find((task) => task.id === taskId);

  if (task) {
    // Store the state before change for undo
    history.push({
      action: "complete",
      task: { id: taskId, completed: task.completed },
    });

    task.completed = !task.completed;
    saveTodos();
    show();
  }
}

// Removes all completed tasks and updates the UI.
function removeAll() {
  // Store all removed items for a single undo action
  const removedItems = todos.filter((task) => task.completed);
  history.push({ action: "removeAll", tasks: removedItems });

  todos = todos.filter((task) => !task.completed);
  saveTodos();
  show();
  showFeedback("Completed tasks cleared.");
}

// Undoes the last action (remove or complete toggle).
function undo() {
  const lastAction = history.pop();

  if (!lastAction) {
    showFeedback("Nothing left to undo.");
    return;
  }

  if (lastAction.action === "remove") {
    // Re-insert the removed task at its original position
    todos.splice(lastAction.index, 0, lastAction.task);
    showFeedback("Task restored.");
  } else if (lastAction.action === "complete") {
    // Find the task and toggle its completion status back
    const task = todos.find((t) => t.id === lastAction.task.id);
    if (task) {
      task.completed = lastAction.task.completed; // Revert to previous state
      showFeedback("Completion status reverted.");
    }
  } else if (lastAction.action === "removeAll") {
    // Restore all tasks that were removed by the 'Clear All' action
    todos.push(...lastAction.tasks);
    showFeedback("Cleared tasks restored.");
  }

  saveTodos();
  show(); // Update the UI
}

/* --- UI RENDERING --- */

// Renders the current todos array to the HTML.
function show() {
  const todosDiv = document.getElementById("todos");
  const removeAllButton = document.getElementById("removeAll");
  const undoButton = document.getElementById("undo");

  let html = "<ul>";
  const hasCompletedTasks = todos.some((task) => task.completed);
  const hasHistory = history.length > 0;

  todos.forEach((task) => {
    const isChecked = task.completed ? "checked" : "";
    const completionClass = task.completed ? "completed" : "";

    // Template literal generates the HTML for one list item.
    html += `
            <li class="${completionClass}" data-task-id="${task.id}">
                <input type="checkbox" data-task-id="${task.id}" ${isChecked} />
                <span class="task-text">${task.text}</span>
                <button class="remove" data-task-id="${task.id}">x</button>
            </li>
        `;
  });
  html += "</ul>";

  todosDiv.innerHTML = html;

  // Toggle button visibility based on state
  if (hasCompletedTasks) {
    removeAllButton.classList.remove("hidden");
  } else {
    removeAllButton.classList.add("hidden");
  }

  if (hasHistory) {
    undoButton.classList.remove("hidden");
  } else {
    undoButton.classList.add("hidden");
  }
}

/* --- LIGHT/DARK MODE THEME MANAGEMENT --- */

// Dev Comment (Best Practice): setTheme manages the application's visual state AND updates the icon for the user.
function setTheme(theme) {
  const body = document.body;
  const toggleButton = document.getElementById("theme-toggle");

  if (theme === "dark") {
    body.classList.add("dark-theme");
    body.classList.remove("light-theme-manual");
    localStorage.setItem("theme", "dark");
    // UX FIX: Show the sun icon when in dark mode (indicating a click switches to light mode)
    if (toggleButton) {
      toggleButton.textContent = "☀️";
    }
  } else {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme-manual");
    localStorage.setItem("theme", "light");
    // UX FIX: Show the moon icon when in light mode (indicating a click switches to dark mode)
    if (toggleButton) {
      toggleButton.textContent = "🌙";
    }
  }
}

// Dev Comment (UX Feature): Called by the theme-toggle button to alternate the current theme state.
function toggleTheme() {
  const currentTheme = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";
  const newTheme = currentTheme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

// Dev Comment (UX Feature): Determines the initial theme and sets the correct initial icon.
function loadThemePreference() {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    setTheme(savedTheme);
  } else if (prefersDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

/* GLOBAL EXECUTION AND EVENT HOOKS */

// Dev Comment (Best Practice): Attaches event listeners to specific, non-delegated buttons.
document.getElementById("add").addEventListener("click", add);
document.getElementById("removeAll").addEventListener("click", removeAll);
document.getElementById("undo").addEventListener("click", undo);
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// NEW: Event Listener for the Enter key on the input field (A11y/UX Feature).
document.getElementById("task").addEventListener("keypress", function (event) {
  // Core Logic: Checks if the pressed key is the 'Enter' key.
  if (event.key === "Enter") {
    event.preventDefault(); // Prevents default form submission/page reload
    add(); // Calls the same function used by the click button
  }
});

// Dev Comment (Best Practice): Event Delegation. Attaching one listener to the parent container (#todos) handles all actions (delete, checkbox) for current and future list items efficiently.
document.getElementById("todos").addEventListener("click", function (event) {
  const target = event.target;

  // closest() finds the nearest ancestor <li>, ensuring we get the correct task ID.
  const listItem = target.closest("li");
  if (!listItem) return;

  const taskId = listItem.dataset.taskId;

  // Checks the target element's class to determine if it's the remove button.
  if (target.classList.contains("remove")) {
    removeTask(taskId);
  }
  // Checks the target element's type to determine if it's the checkbox.
  else if (target.type === "checkbox") {
    toggleCompletion(taskId);
  }
});

// Dev Comment (Startup Sequence): Calls functions required for application initialization.
loadTodos(); // Load data first
loadThemePreference(); // Set initial theme
show(); // Render the UI

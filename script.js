document.addEventListener('DOMContentLoaded', () => {
// DOM element selections
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Load saved tasks on page load
loadTasks();

// Function to load tasks from localStorage
function loadTasks() {
const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
storedTasks.forEach(taskText => addTask(taskText, false)); // false to avoid double-saving
}

// Function to add a task
function addTask(taskText, save = true) {
taskText = taskText.trim();

if (taskText === '') {
alert('Please enter a task.');
return;
}

// Create task item
const li = document.createElement('li');
li.textContent = taskText;

// Create remove button
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'remove-btn';

// Remove button logic
removeButton.onclick = function () {
taskList.removeChild(li);
removeFromStorage(taskText);
};

li.appendChild(removeButton);
taskList.appendChild(li);

// Save to localStorage
if (save) {
const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
storedTasks.push(taskText);
localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Clear input
taskInput.value = '';
}

// Remove task from localStorage
function removeFromStorage(taskText) {
let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
storedTasks = storedTasks.filter(task => task !== taskText);
localStorage.setItem('tasks', JSON.stringify(storedTasks));
}

// Add task on button click
addButton.addEventListener('click', () => {
addTask(taskInput.value);
});

// Add task on Enter key
taskInput.addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
 addTask(taskInput.value);
}
});
});

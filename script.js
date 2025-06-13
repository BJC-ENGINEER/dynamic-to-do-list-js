document.addEventListener('DOMContentLoaded', () => {
// Select elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add task
function addTask() {
const taskText = taskInput.value.trim();

if (taskText === '') {
alert('Please enter a task.');
return;
}

// Create <li> element and set textContent directly
const li = document.createElement('li');
li.textContent = taskText;

// Create "Remove" button
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'remove-btn';

// Use onclick instead of addEventListener
removeButton.onclick = function () {
taskList.removeChild(li);
};

// Append button after textContent has been set
li.appendChild(removeButton);

// Add the list item to the task list
taskList.appendChild(li);

// Clear the input field
taskInput.value = '';
}

// Add task on button click
addButton.addEventListener('click', addTask);

// Add task on Enter key press
taskInput.addEventListener('keypress', function (event) {
if (event.key === 'Enter') {
addTask();
}
});
});

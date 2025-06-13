// Wait for the DOM to load before running the script
document.addEventListener('DOMContentLoaded', () => {
// Select elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a new task
function addTask() {
const taskText = taskInput.value.trim(); // Get input and remove spaces

if (taskText === "") {
alert("Please enter a task.");
return;
}

// Create new list item (li)
const taskItem = document.createElement('li');
taskItem.textContent = taskText;

// Create remove button
const removeBtn = document.createElement('button');
removeBtn.textContent = 'Remove';
removeBtn.className = 'remove-btn';

// Add event to remove this task when button is clicked
removeBtn.onclick = function () {
taskList.removeChild(taskItem);
};

// Append button to task item, then add to the list
taskItem.appendChild(removeBtn);
taskList.appendChild(taskItem);

// Clear input field
taskInput.value = '';
}

// Add event listeners
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(event) {
if (event.key === 'Enter') {
addTask();
}
});
});

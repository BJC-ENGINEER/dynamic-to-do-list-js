// Run this script after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
// Select DOM elements
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Function to add a task
function addTask() {
const taskText = taskInput.value.trim();

// Only add if not empty
if (taskText === '') {
    alert('Please enter a task.');
return;
}

// Create <li> for the task
const li = document.createElement('li');
li.textContent = taskText;

// Create remove button
const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'remove-btn';

// Event listener for removing task
removeButton.addEventListener('click', () => {
li.remove(); // Remove the <li> element itself
});

// Append remove button to task item
li.appendChild(removeButton);

// Add task to the list
taskList.appendChild(li);

// Clear the input field
taskInput.value = '';
}

// Add task on button click
addButton.addEventListener('click', addTask);

// Add task on pressing Enter
taskInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
addTask();
}
});
});

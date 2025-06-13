document.addEventListener('DOMContentLoaded', () => {
const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
const taskText = taskInput.value.trim();

if (taskText === '') {
alert('Please enter a task.');
return;
}

const li = document.createElement('li');

// Use textNode to avoid textContent overwrite issues
const textNode = document.createTextNode(taskText);
li.appendChild(textNode);

const removeButton = document.createElement('button');
removeButton.textContent = 'Remove';
removeButton.className = 'remove-btn';

removeButton.addEventListener('click', () => {
li.remove();
});

li.appendChild(removeButton);
taskList.appendChild(li);
taskInput.value = '';
}
addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (event) => {
if (event.key === 'Enter') {
addTask();
}
});
});

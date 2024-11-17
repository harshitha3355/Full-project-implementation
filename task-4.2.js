const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

window.onload = () => {
    loadTasks();
};

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = { text: taskText };
        appendTaskToDOM(task);
        saveTaskToLocalStorage(task);
        taskInput.value = '';
    }
}

function appendTaskToDOM(task) {
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <span>${task.text}</span>
        <button class="delete-btn" onclick="deleteTask(this, '${task.text}')">Delete</button>
    `;
    taskList.appendChild(li);
}

function saveTaskToLocalStorage(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => appendTaskToDOM(task));
}

function deleteTask(button, taskText) {
    button.parentElement.remove();
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task.text !== taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
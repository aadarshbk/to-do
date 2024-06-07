document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') {
            alert('Please enter a task.');
            return;
        }

        const taskItem = document.createElement('li');
        taskItem.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function handleTaskClick(event) {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        } else {
            event.target.classList.toggle('done');
        }
    }
});

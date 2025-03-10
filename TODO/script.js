const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');



addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const li = document.createElement('li');
    li.className = 'task';

    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button onclick="toggleDone(this)">✔</button>
        <button onclick="deleteTask(this)">✖</button>
      </div>
    `;
    

    taskList.appendChild(li);
    taskInput.value = '';
  }
});

function toggleDone(button) {
  const task = button.parentElement.parentElement;
  task.classList.toggle('done');
}

function deleteTask(button) {
  const task = button.parentElement.parentElement;
  taskList.removeChild(task);
}

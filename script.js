// Contact form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const msg = document.getElementById('form-msg');

  const emailRegex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !message) {
    msg.textContent = 'All fields are required.';
    msg.style.color = 'red';
  } else if (!emailRegex.test(email)) {
    msg.textContent = 'Enter a valid email address.';
    msg.style.color = 'red';
  } else {
    msg.textContent = 'Thank you for contacting us!';
    msg.style.color = 'green';
    this.reset();
  }
});

// To-Do List functionality
document.getElementById('task-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const taskInput = document.getElementById('task-input');
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button onclick="markComplete(this)">✔</button>
        <button onclick="editTask(this)">✏</button>
        <button onclick="deleteTask(this)">🗑</button>
      </div>
    `;
    document.getElementById('task-list').appendChild(li);
    taskInput.value = '';
  }
});

function markComplete(btn) {
  const task = btn.parentElement.parentElement.querySelector('span');
  task.style.textDecoration = task.style.textDecoration === 'line-through' ? 'none' : 'line-through';
}

function editTask(btn) {
  const span = btn.parentElement.parentElement.querySelector('span');
  const newText = prompt('Edit your task:', span.textContent);
  if (newText) span.textContent = newText;
}

function deleteTask(btn) {
  btn.parentElement.parentElement.remove();
}





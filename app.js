// app.js - Logika utama Todo App

let todos = [];

function addTodo() {
  const input = document.getElementById('todoInput');
  const text = input.value.trim();
  if (!text) return;

  const todo = { id: Date.now(), text, done: false };
  todos.push(todo);
  input.value = '';
  render();
}

function toggleTodo(id) {
  todos = todos.map(t => t.id === id ? { ...t, done: !t.done } : t);
  render();
}

function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  render();
}

function render() {
  const list = document.getElementById('todoList');
  list.innerHTML = todos.map(t => `
    <li class="${t.done ? 'done' : ''}">
      <input type="checkbox" ${t.done ? 'checked' : ''} onchange="toggleTodo(${t.id})" />
      <span>${t.text}</span>
      <button class="delete-btn" onclick="deleteTodo(${t.id})">Hapus</button>
    </li>
  `).join('');
}

// Enter key support
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('todoInput').addEventListener('keydown', e => {
    if (e.key === 'Enter') addTodo();
  });
});

// Fitur Dark Mode
function toggleDarkMode() { document.body.classList.toggle('dark'); }

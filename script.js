document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    loadTodos();

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            addTodoItem(todoText);
            saveTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function addTodoItem(todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '&times;';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', function() {
            removeTodoItem(todoText);
            todoList.removeChild(li);
            alert('Well done! 🎉');
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
  function saveTodoItem(todoText) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.push(todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function loadTodos() {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos.forEach(todoText => addTodoItem(todoText));
    }

    function removeTodoItem(todoText) {
        let todos = JSON.parse(localStorage.getItem('todos')) || [];
        todos = todos.filter(todo => todo !== todoText);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
});
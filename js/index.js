const addTodoForm = document.querySelector('#add-todo');
const addTodoInput = document.querySelector('#add-todo input');
const todoList = document.querySelector('#todo-list');
const clearCompletedBtn = document.querySelector('#clear-completed');
const themeBtn = document.querySelector('#switcher-theme')
// filters buttons
const allBtn = document.querySelector('#all');
const activeBtn = document.querySelector('#active');
const completedBtn = document.querySelector('#completed');

// Event linteners
addTodoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodo();
    }
});
todoList.addEventListener('click', todoCheckClose);
clearCompletedBtn.addEventListener('click', clearCompleted);
themeBtn.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('light-theme');
});

// Event listeners for filter buttons
allBtn.addEventListener('click', allFilter)
activeBtn.addEventListener('click', activeFilter)
completedBtn.addEventListener('click', completedFilter)

// Functions

function addTodo() {
    // create li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todos', 'handle');
    // create div.todo-checks
    const todoCheckDiv = document.createElement('div');
    todoCheckDiv.classList.add('todo-checks');
    todoLi.appendChild(todoCheckDiv);
    // create p.todo-names
    const todoNameP = document.createElement('p');
    todoNameP.classList.add('todo-names')
    todoNameP.innerText = addTodoInput.value;
    todoLi.appendChild(todoNameP);
    // create div.todo-closes
    const todoClosesDiv = document.createElement('div');
    todoClosesDiv.classList.add('todo-closes');
    todoLi.appendChild(todoClosesDiv);
    // append the created li to the list
    todoList.appendChild(todoLi);
    // clear the input field
    addTodoInput.value = '';

    todosCount();

    // check a filter 
    if (todoList.classList.contains('completed')) {
        completedFilter()
    }
}

function todoCheckClose(event) {
    const item = event.target;
    if (item.classList[0] === 'todo-closes') {
        const todo = item.parentElement;
        todo.remove();
    } else if (item.classList[0] === 'todo-names' || item.classList[0] === 'todo-checks') {
        const todo = item.parentElement;
        todo.classList.add('completed');

        if (todoList.classList.contains('active')) {
            activeFilter()
        }
    }
    todosCount();
}

function todosCount() {
    const todos = document.querySelectorAll('.todos');
    const counter = document.querySelector('#todos-counter');
    let number = 0;
    todos.forEach((todo) => {
        if (!todo.classList.contains('completed')) {
            number++
        }
    })
    counter.innerText = `${number} items left`;
}

function clearCompleted() {
    const todos = document.querySelectorAll('#todo-list .todos');
    todos.forEach((todo) => {
        if (todo.classList.contains('completed')) {
            todo.remove();
        }
    })
    todosCount();
}

function allFilter() {
    // set color for active link
    document.querySelectorAll('.filters').forEach((btn) => btn.style.color = 'var(--color)')
    document.querySelector('#all').style.color = '#3a7bfd';
    // set class for todo list
    todoList.classList = 'todoList all';
    // filter
    const todos = document.querySelectorAll('.todos');
    todos.forEach(function (todo) {
        todo.style.display = 'flex';
    })
}

function activeFilter(e) {
    // set color for active link
    document.querySelectorAll('.filters').forEach((btn) => btn.style.color = 'var(--color)')
    document.querySelector('#active').style.color = '#3a7bfd';
    // set class for todo list
    todoList.classList = 'todoList active';
    // filter
    const todos = document.querySelectorAll('.todos');
    todos.forEach(function (todo) {
        if (!todo.classList.contains('completed')) {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    })
}

function completedFilter(e) {
    // set color for active link
    document.querySelectorAll('.filters').forEach((btn) => btn.style.color = 'var(--color)')
    document.querySelector('#completed').style.color = '#3a7bfd';
    // set class for todo list
    todoList.classList = 'todoList completed';
    // filter
    const todos = document.querySelectorAll('.todos');
    todos.forEach(function (todo) {
        if (todo.classList.contains('completed')) {
            todo.style.display = 'flex';
        } else {
            todo.style.display = 'none';
        }
    })
}


// Drag and drop sortable functionality from liblary Sortable.js

new Sortable(todoList, {
    handle: '.handle',
    animation: 200
})

// Functions which fires when page load

allFilter();
todosCount();
const addTodoForm = document.querySelector('#add-todo');
const addTodoInput = document.querySelector('#add-todo input');
const todoList = document.querySelector('#todo-list');
const todoNames = document.querySelector('.todo-names');
const clearCompletedBtn = document.querySelector('#clear-completed')

addTodoInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        addTodo();
    }
});
todoList.addEventListener('click', todoCheckClose);
clearCompletedBtn.addEventListener('click', clearCompleted);


function addTodo() {
    // create li
    const todoLi = document.createElement('li');
    todoLi.classList.add('todos');
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

    // todosCount();
}

function todoCheckClose(event) {
    const item = event.target;
    if (item.classList[0] === 'todo-closes') {
        const todo = item.parentElement;
        todo.remove();
    } else if (item.classList[0] === 'todo-names') {
        const todo = item.parentElement;
        todo.classList.add('completed');
    }
}

// function todosCount() {
//     const todos = document.querySelectorAll('.todos');
//     const counter = document.querySelector('#todos-counter');
//     let number = 0;
//     const todosNumberCheck = () => {
//         todos.forEach((todo) => {
//             if (!todo.)
//         })
//     }
//     counter.innerText = `${todos.length} items left`;
// }
// todosCount();

function clearCompleted() {
    const todos = document.querySelectorAll('#todo-list .todos')
    todos.forEach((todo) => {
        Array.from(todo.children).forEach((child) => {
            if (child.classList.contains('crossline')) {
                todo.remove();
            }
        })
    })
    todosCount();
}
// Get the todo list element
const todoList = document.getElementById('todo-list');

// Get the add button element
const addButton = document.getElementById('add-btn');

// Get the todo input element
const todoInput = document.getElementById('todo-input');

// Add an event listener to the add button
addButton.addEventListener('click', () => {
    // Get the todo text from the input field
    const todoText = todoInput.value.trim();

    // If the todo text is not empty, add it to the todo list
    if (todoText !== '') {
        // Create a new todo item element
        const todoItem = document.createElement('li');
        todoItem.classList.add('todo-item');

        // Create a new text node with the todo text
        const todoTextNode = document.createTextNode(todoText);

        // Append the text node to the todo item element
        todoItem.appendChild(todoTextNode);

        // Create a new remove button element
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-btn');
        removeButton.textContent = 'Remove';

        // Append the remove button to the todo item element
        todoItem.appendChild(removeButton);

        // Add an event listener to the remove button
        removeButton.addEventListener('click', () => {
            // Remove the todo item from the todo list
            todoList.removeChild(todoItem);
        });

        // Add the todo item to the todo list
        todoList.appendChild(todoItem);

        // Clear the input field
        todoInput.value = '';
    }
});

// Add an event listener to the todo list
todoList.addEventListener('click', (event) => {
    // If the event target is a todo item, toggle its done state
    if (event.target.classList.contains('todo-item')) {
        event.target.classList.toggle('done');
    }
});
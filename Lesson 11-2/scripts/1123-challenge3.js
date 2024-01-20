const todoList = JSON.parse(localStorage.getItem('todoList')) || [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];
//2: objects can be used as the values in an array and works to group multiple values together, in this case the name and the dueDate
/*for second todo list, these are the following steps for the algorithm
1) Loop through the array
2) create some HTML code for each todo
3) put the HTML on web page
*/
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;
    //4: here we destructure: its a shortcut in which we save the property into a new variable that has the same name as shown in the above code. we can also do it for multiple variables at a time
    //3: now we have to generate the HTML on the webpage so we need to take out the name and due date at each index of the array and insert them into the backstring in the following code
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button onclick= "
        todoList.splice(${i}, 1);
        renderTodoList();
        saveToStorage();
      " class="delete-todo-button">Delete</button>
    `;
    //1: this technique is called "generating the HTML": instead of writing all the HTML by hand, we used a JS function to generate the HTML. splice() deletes values in an array. the first value tells splice at which index to start and the second value tells splice how many values to delete.
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

/*steps for algorithm
1. create array to store todos
2. when we click "add"
3. get text from textbox
4. add it to array
5. console.log() the array
*/
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  //5: we'll now also grab the due date out of the input and be able to add it to the array
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    //name: name,
    //dueDate: dueDate,
    //6: here we do the shorthand property: when the property and the variable have the same name, you can just type it out once and it will be the same code as above. pick up at 9:40
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoList();

  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}
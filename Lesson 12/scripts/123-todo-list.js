const todoList = [{
  name: 'make dinner',
  dueDate: '2022-12-22'
}, {
  name: 'wash dishes',
  dueDate: '2022-12-22'
}];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  //123: we replaced the for loop with forEach method and used todoObject as its value and index in the parameter. GO TO 121-ADVANCED-FUNCTIONS TO LEARN MORE DETAILS ABOUT ADVANCED FUNCTIONS
  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button js-delete-todo-button">Delete</button>
    `; //ADVANCED FUNCTIONS PART 2.2: at this point the delete button is just a string

    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML; //ADVANCED FUNCTIONS PART 2.3: here, the delete button gets created on the webpage so now we can add the eventListener. problem 2) there are multiple buttons that have the js-delete-todo-button class but querySelector will only give us the first one, there is another method: querySelectorAll that will select all the elements w the given class and make an array out of them. so now we can use the forEach method to loop through the list, to give it the code we want it to run which includes the eventListener that will delete the todo. now we'll learn more features that use functions as values. go back to 1221-advanced-functions.html
  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        //AF PART 2.5: if a function has access to a vlue, it will always have acces to that value. the value gets packaged together (enclosed) with the function
        //console.log(index); NOW GO BACK TO 1221-ADVANCED-FUNCTIONS.HTML LINE 170
        todoList.splice(index, 1);
        renderTodoList();
      });
    });

  /*ADVANCED FUNCTIONS PART 2.4: index from the .forEach method on line 30 will be deleted once its done looping. we can see this by console.log(index) outside and inside of the method
  console.log(index);
  */
}

//ADVANCED FUNCTIONS PART 2.1: added eventListener to the add button and took of the onclick attribute. next do it for the delete buttons, however there are problems 1) its just a string at first so we have to add the eventListener after its on the page
document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    name,
    dueDate,
  });

  inputElement.value = '';

  renderTodoList();
}
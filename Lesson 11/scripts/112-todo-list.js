const todoList = ['make dinner', 'wash dishes'];
/*GO HERE AFTER PART 4: for second todo list, these are the following steps for the algorithm
1) Loop through the array
2) create some HTML code for each todo
3) put the HTML on web page using the DOM
*/
renderTodoList();

function renderTodoList() {
  let todoListHTML = '';//this is our accumulator variable

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    //this technique is called "generating the HTML": instead of writing all the HTML by hand, we used a JS function to generate the HTML
    todoListHTML += html; //here we're using the accumulator pattern
  }

  console.log(todoListHTML);

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
  
  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';

  renderTodoList();
}

/* this is how the first Todo List is done
function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);
  console.log(todoList);

  inputElement.value = '';
}
const toDos = document.querySelector('#todos')
const form = document.querySelector('form');
const textInput = document.querySelector('form input');

form.addEventListener('submit', event => {
  event.preventDefault();

  const toDoTitle = textInput.value;
  createToDo(toDoTitle);

  textInput.value = '';
})

function createToDo(title) {
  const toDo = document.createElement('li');
  toDo.classList.add('todo-item');
  
  const titleSpan = document.createElement('span');
  titleSpan.innerText = title;

  toDo.append(titleSpan);

  toDos.append(toDo);
}
const toDo = document.querySelector('.js-toDo'),
toDoinput = toDo.querySelector('input'),
toDoList = document.querySelector('.js-toDoList');

const todo = 'todo';
let ListToDo = [];

function inApp(text){
  localStorage.setItem(todo,JSON.stringify(text));
}

function delToDo(event){
  const btn = event.target.parentNode;
  console.log(btn.id);
  toDoList.removeChild(btn);
  const cleanToDo = ListToDo.filter(function(element){
    return element.id !=parseInt(btn.id);
  });
  ListToDo = cleanToDo;
  inApp(ListToDo);
}

function saveList(text){
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  span.innerText = text;
  li.id = ListToDo.length+1;
  li.appendChild(span);
  delBtn.innerHTML = '👇';
  delBtn.addEventListener("click",delToDo);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  const toDoObj = {
    text,
    id : ListToDo.length+1
  };
  ListToDo.push(toDoObj);
  inApp(ListToDo);
}

function handleToDo(event){
  event.preventDefault();
  const toDoValue = toDoinput.value;
  saveList(toDoValue);
  toDoinput.value="";
}

function saveToDo(){
  const checkToDo = localStorage.getItem(todo);
  if (checkToDo !== null){
    // console.log(checkToDo);
    const parsedToDo = JSON.parse(checkToDo);
    parsedToDo.forEach(function(element){
      saveList(element.text);
    })
  }
}

function init(){
  saveToDo();
  toDo.addEventListener("submit",handleToDo);
}
init();
const askName = document.querySelector('.js-name'),
input = askName.querySelector('input'),
showName = document.querySelector('.js-showname');

const currentUser = 'hello';

function saveName(text){
  askName.classList.add("noshow")
  showName.classList.add("show")
  showName.innerText = `Hello ${text}`
  localStorage.setItem(currentUser,text); 
}

function handleInput(event){
  event.preventDefault();
  const value = input.value;
  saveName(value);
}

function noInMan(){
  askName.addEventListener("submit",handleInput)
}

function inMan(text){
  askName.classList.add("noshow");
  showName.classList.add("show");
  showName.innerText = `Hello ${text}`;
}


function matchPerson(){
  const User = localStorage.getItem(currentUser);
  if (User === null){
    noInMan();
  }
  else{
    inMan(User);
  }
}


function init(){
  matchPerson();
}

init();
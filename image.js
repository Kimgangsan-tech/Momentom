const body = document.querySelector('body');

function setImage(num){
  const image = new Image();
  image.src = `./Images/${num}.jpeg`;
  image.classList.add("bgimage");
  body.appendChild(image);
}

function init(){
  const randomNum = Math.ceil(Math.random()*3);
  setImage(randomNum);
}
init();
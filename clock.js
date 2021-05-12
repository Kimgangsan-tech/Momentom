const clock = document.querySelector('.js-clock'),
realClock = clock.querySelector('h1');

function setTime(){
  const time = new Date();
  const time1 = String(time);
  realClock.innerText = time1.slice(16,24);
}


function init(){
  setInterval(setTime,1000);
}
init();
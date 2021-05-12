API_key = '51bbea6491d3ebc2cf7d4da5e51f91b3';
const coords = 'coords';
const date = document.querySelector('.js-date');

function getWeather(lat,lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`)
  .then(function(element){
    return element.json();
  }).then(function(ele){
    date.innerText = `${ele.main.temp} & ${ele.name}`;
  })
}

function success(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const geo = {
    lat,
    lon
  }
  localStorage.setItem(coords,JSON.stringify(geo));
}
function error(){
  console.log('error')
}

function askCoords(){
  navigator.geolocation.getCurrentPosition(success,error);
}

function loadCoords(){
  const getCoords = localStorage.getItem(coords)
  if (getCoords ===null){
    askCoords();
  }
  else{
    const parseCoords = JSON.parse(getCoords);
    getWeather(parseCoords.lat,parseCoords.lon);
  }
}

function init(){
  loadCoords();
}
init();

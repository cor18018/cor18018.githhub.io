const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    var today = new Date();

    today = days[d.getDay()]

    document.getElementById('current-temp').textContent = Math.round(jsObject.main.temp);
    document.getElementById('today').textContent = today;
    document.getElementById('status').textContent = jsObject.weather[0].main;   
  });

  const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5605242&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial'
  fetch(apiURL2)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.getElementById('friday').innerHTML = Math.round(jsObject.list[7].main.temp) + "&deg;";
    document.getElementById('saturday').innerHTML = Math.round(jsObject.list[15].main.temp) + "&deg;";
    document.getElementById('sunday').innerHTML = Math.round(jsObject.list[23].main.temp) + "&deg;";
    document.getElementById('monday').innerHTML = Math.round(jsObject.list[31].main.temp) + "&deg;";
    document.getElementById('tuesday').innerHTML = Math.round(jsObject.list[39].main.temp) + "&deg;";

  });
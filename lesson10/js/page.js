window.addEventListener("load", () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    var today = new Date();

    today = days[d.getDay()] + ", " + String(today.getDate()).padStart(2, "0") + " " + monthNames[d.getMonth()] +
        " " + today.getFullYear();

    const current_date = document.querySelector("#currentDate");
    current_date.textContent = today;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    const menubutton = document.querySelector(".menu");
    const mainnav = document.querySelector("#nav");
    menubutton.addEventListener("click", () => {
        mainnav.classList.toggle("resonsive")
    }, false);
    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove("responsive");
    };

    const message = document.querySelector(".alert_message");
    var friday = d.getDate();
    if (friday != 5) {
        message.classList.toggle("no_alert");
    } else {
        message.classList.remove("no_alert");
    }
    


    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial';
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current').innerHTML = Math.round(jsObject.main.temp) + " °F";
        document.getElementById('high').innerHTML = Math.round(jsObject.main.temp_max) + " °F";
        
        if (jsObject.main.temp_max <= 50 || jsObject.wind.speed >= 3) {
            document.getElementById('chill').innerHTML = Math.round(jsObject.main.feels_like) + " °F";  
        }
        else {
            chill.textContent = "N/A"
        }        
        
        document.getElementById('humidity').innerHTML = jsObject.main.humidity + "%";  
        document.getElementById('speed').innerHTML = jsObject.wind.speed + " mph";  
    });

    const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial'
    fetch(apiURL2)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        
        for (var i = 0; jsObject.list.length; i++) {
            let time = jsObject.list[i]["dt_txt"];
            time_of_day = time.substr(time.indexOf(' ')+1);
            date = time.substr(0,time.indexOf(' '))
            short = new Date(date).toLocaleString('en-us', {weekday:'short'});

            if (time_of_day == "18:00:00") {
            let card = document.createElement('div');
            let day = document.createElement('h3');
            let weather_icon = document.createElement('img')
            let temp = document.createElement('p');

            day.textContent = short;
            temp.textContent = Math.round(jsObject.list[i].main.temp) + " °F"
            weather_icon.setAttribute('src', "http://openweathermap.org/img/wn/" + jsObject.list[i].weather[0].icon + "@2x.png");
            weather_icon.setAttribute('alt', jsObject.list[i].weather[0].main);


            card.appendChild(day);
            card.appendChild(weather_icon);
            card.appendChild(temp);

            document.querySelector('div.week').appendChild(card);
            }
        }
        

        // document.getElementById('friday').innerHTML = Math.round(jsObject.list[7].main.temp) + "&deg;";
        // document.getElementById('saturday').innerHTML = Math.round(jsObject.list[15].main.temp) + "&deg;";
        // document.getElementById('sunday').innerHTML = Math.round(jsObject.list[23].main.temp) + "&deg;";
        // document.getElementById('monday').innerHTML = Math.round(jsObject.list[31].main.temp) + "&deg;";
        // document.getElementById('tuesday').innerHTML = Math.round(jsObject.list[39].main.temp) + "&deg;";

    });


});
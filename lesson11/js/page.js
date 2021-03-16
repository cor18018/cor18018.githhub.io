window.addEventListener("load", () => {
    //Current Date and Copyright
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

    //Menu
    const menubutton = document.querySelector(".menu");
    const mainnav = document.querySelector("#nav");
    menubutton.addEventListener("click", () => {
        mainnav.classList.toggle("resonsive")
    }, false);
    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove("responsive");
    };

    //Alert Message
    const message = document.querySelector(".alert_message");
    var friday = d.getDate();
    if (friday != 5) {
        message.classList.toggle("no_alert");
    } else {
        message.classList.remove("no_alert");
    }
    
    //Home Api
    const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        console.table(jsonObject);
        
        for (let i = 0; i < towns.length; i++ ) {

            if ((towns[i].name === 'Preston') || (towns[i].name === 'Soda Springs')
            ||(towns[i].name === 'Fish Haven')) {

                let town = document.createElement('section');
                let h2 = document.createElement('h2');
                let h3 = document.createElement('h3');
                let info = document.createElement('div');
                let founded = document.createElement('p');
                let pop = document.createElement('p');
                let rain = document.createElement('p');
                let image = document.createElement('img');

                h2.textContent = towns[i].name;
                h3.textContent = towns[i].motto;
                image.setAttribute('src', 'images/' + towns[i].photo);
                image.setAttribute('alt', towns[i].name);
                founded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                pop.textContent = 'Population: ' + towns[i].currentPopulation;
                rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall + '%';

                town.appendChild(h2);
                town.appendChild(h3);
                town.appendChild(image);
                town.appendChild(info);
                info.appendChild(founded);
                info.appendChild(pop);
                info.appendChild(rain);

                document.querySelector('div.towns').appendChild(town);  

        }}

    });

    //Preston API
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
        
        for (var i = 0; i < jsObject.list.length; i++) {
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
    
    });

});
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
    


    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5605242&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial';
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        document.getElementById('current').textContent = Math.round(jsObject.main.temp);
        document.getElementById('high').textContent = Math.round(jsObject.main.temp_max);
        document.getElementById('chill').textContent = Math.round(jsObject.main.feels_like);  
        document.getElementById('humidity').textContent = Math.round(jsObject.main.feels_like);  
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


});
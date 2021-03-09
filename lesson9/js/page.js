window.addEventListener("load", (event) => {
     
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

});
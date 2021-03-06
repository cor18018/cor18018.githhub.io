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
    
        let town1 = document.createElement('section');
        let h2t1 = document.createElement('h2');
        let h3t1 = document.createElement('h3');
        let foundedt1 = document.createElement('p');
        let popt1 = document.createElement('p');
        let raint1 = document.createElement('p');
        let imaget1 = document.createElement('img');

        h2t1.textContent = towns[5].name;
        h3t1.textContent = towns[5].motto;
        imaget1.setAttribute('src', towns[5].photo);
        imaget1.setAttribute('alt', towns[5].name);
        foundedt1.textContent = 'Year Founded: ' + towns[5].yearFounded;
        popt1.textContent = 'Population: ' + towns[5].currentPopulation;
        raint1.textContent = 'Annual Rain Fall: ' + towns[5].averageRainfall;

        town1.appendChild(h2t1);
        town1.appendChild(h3t1);
        town1.appendChild(imaget1);
        town1.appendChild(foundedt1);
        town1.appendChild(popt1);
        town1.appendChild(raint1);

        let town2 = document.createElement('section');
        let h2t2 = document.createElement('h2');
        let h3t2 = document.createElement('h3');
        let foundedt2 = document.createElement('p');
        let popt2 = document.createElement('p');
        let raint2 = document.createElement('p');
        let imaget2 = document.createElement('img');

        h2t2.textContent = towns[6].name;
        h3t2.textContent = towns[6].motto;
        imaget2.setAttribute('src', towns[6].photo);
        imaget2.setAttribute('alt', towns[6].name);
        foundedt2.textContent = 'Year Founded: ' + towns[6].yearFounded;
        popt2.textContent = 'Population: ' + towns[6].currentPopulation;
        raint2.textContent = 'Annual Rain Fall: ' + towns[6].averageRainfall;

        town2.appendChild(h2t2);
        town2.appendChild(h3t2);
        town2.appendChild(imaget2);
        town2.appendChild(foundedt2);
        town2.appendChild(popt2);
        town2.appendChild(raint2);

        let town3 = document.createElement('section');
        let h2t3 = document.createElement('h2');
        let h3t3 = document.createElement('h3');
        let foundedt3 = document.createElement('p');
        let popt3 = document.createElement('p');
        let raint3 = document.createElement('p');
        let imaget3 = document.createElement('img');

        h2t3.textContent = towns[1].name;
        h3t3.textContent = towns[1].motto;
        imaget3.setAttribute('src', towns[1].photo);
        imaget3.setAttribute('alt', towns[1].name);
        foundedt3.textContent = 'Year Founded: ' + towns[1].yearFounded;
        popt3.textContent = 'Population: ' + towns[1].currentPopulation;
        raint3.textContent = 'Annual Rain Fall: ' + towns[1].averageRainfall;
        

        town3.appendChild(h2t3);
        town3.appendChild(h3t3);
        town3.appendChild(imaget3);
        town3.appendChild(foundedt3);
        town3.appendChild(popt3);
        town3.appendChild(raint3);

        document.querySelector('div.towns').appendChild(town1);  
        document.querySelector('div.towns').appendChild(town2);        
        document.querySelector('div.towns').appendChild(town3);  
    });

});
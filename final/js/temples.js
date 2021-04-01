window.addEventListener("load", (event) => {

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
    
    /*API*/
    const requestURL = 'js/temples.json'
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            Object.entries(jsonObject).forEach(([key,temple])=> {
                buildTempleCard(temple);
            });
        });
    
    function buildTempleCard(temple){

        let card = document.createElement("section");
        let heading1 = document.createElement("p");
        let heading2 = document.createElement("p");
        let heading3 = document.createElement("p");
        let heading4 = document.createElement("p");
        let weather = document.createElement("div");
        let current = document.createElement("span");
        let high = document.createElement("span");
        let city = temple.zip;
        const apiURL = 'https://api.openweathermap.org/data/2.5/weather?zip='+city+'&appid=70a3382c326cf2cbb5e5cc5922554860&units=imperial';
        card.classList.add("temple");
        card.innerHTML = `<h3>${temple.name}</h3>
                            <img src="${temple.imageurl}" alt="${temple.name}">
                            <p>Contact Info: </p>
                            <p>Address: ${temple.address1} ${temple.city}, ${temple.state} ${temple.zip}</p>
                            <p>Phone Number: <a href="#">${temple.phone}</a></p>
                            <p>Email: <a href="#">${temple.email}</a></p>
                            <p>Status: ${temple.status}</p>
                            <p>Services: </p>`;
        
        for(var i = 0; i < temple.services.length; i++){
            let service = document.createElement("p");
            service.textContent = temple.services[i];
            card.appendChild(service);
        }
        heading1.textContent = "Closures: ";
        card.appendChild(heading1);
        for(var i = 0; i < temple.closures.length; i++){
            let closures = document.createElement("p");
            closures.textContent = temple.closures[i];
            card.appendChild(closures);
        }
        heading2.textContent = "History: ";
        card.appendChild(heading2);
        for(var i = 0; i < temple.history.length; i++){
            let history = document.createElement("p");
            history.textContent = temple.history[i];
            card.appendChild(history);
        }
        fetch(apiURL)
        .then((response) => response.json())
        .then((jsObject) => {
            console.log(jsObject);
            heading3.textContent = "Current Weather: ";
            weather.appendChild(heading3);
            current.textContent = Math.round(jsObject.main.temp) + " °F";
            heading3.appendChild(current);
            heading4.textContent = "High: ";
            weather.appendChild(heading4);
            high.textContent = Math.round(jsObject.main.temp_max) + " °F";
            heading4.appendChild(high);
        });
        document.querySelector(".card").appendChild(card);
        card.appendChild(weather);
    }
});

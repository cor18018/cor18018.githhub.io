window.addEventListener("load", () => {
    const requestURL = 'https://www.ahfx.com/events.php'
    fetch(requestURL)
        .then((response) => {
            return response.json();
        })
        .then((jsonObject) => {
            console.log(jsonObject);
            let counter = 1;   // CM ADDED THIS
            Object.entries(jsonObject).forEach(([key,event])=> {
                buildEventCard(event);
            });
        });
});
function buildEventCard(event){
    let card = document.createElement("section");
    card.classList.add("event");
    let start = event.properties.start;
    start_time = start.substr(start.indexOf(' ')+1);
    start_date = start.substr(0,start.indexOf(' '))
    let end = event.properties.end;
    end_time = end.substr(end.indexOf(' ')+1);
    end_date = end.substr(0,end.indexOf(' '))
    for (var i = 0; i < event.tags.length; i++){
                            
        }
    card.innerHTML = `<div class="box-${counter}">
                    <p>${event.tags[0]}</p>
                     <h2>${event.properties.name}</h2>
                     <p>Location: ${event.properties.location}</p>
                     <p>Event Time: ${start_time}</p>
                     <p>Event Date: ${start_date}</p>
                     <p><em>Event organized by: ${event.properties.organized_by} </em></p>
                     <p><em>Event type: ${event.type}</em></p></div>`;
    document.querySelector(".card").appendChild(card);
}

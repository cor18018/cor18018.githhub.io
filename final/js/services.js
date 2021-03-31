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
        .then((templeImages) => {
            console.log(templeImages);
            
        })
        // .then((jsonObject) => {
        //     console.log(jsonObject);
        //     Object.entries(jsonObject).forEach(([key,temple])=> {
        //         buildTempleCard(temple);
        //     });
        // });
});
// function buildTempleCard(temple){
//     let card = document.createElement("section");
//     card.classList.add("temple");
//     card.innerHTML = `<h2>${temple.name}</h2>
//                      <img src="${temple.imageurl}" alt="${temple.name}">
//                      <p>Address: ${temple.address1} ${temple.city}, ${temple.state} ${temple.zip}</p>
//                      <p>Contact Info: ${temple.phone}</p>
//                      <p>Status: Open</p>
//                      <p>First President: ${temple.presidents[0]} 1st of ${temple.presidents.length}</p>
//                      <p>Current President: ${temple.presidents[temple.presidents.length-1]}</p>`;
//     document.querySelector("#temples").appendChild(card);
// }
window.addEventListener("load", (event) => {
const images = document.querySelectorAll("[data-src]");
function preloadImage(img){
    console.log("trying to load " + img);
    const src= img.getAttribute("data-src");
    if(!src){
        return;
    }
    img.src= src;
}
const imgOptions = {
    threshold:0,
    rootMargin: "0px 0px 50px 0px"
}
const imgObserver = new IntersectionObserver( (entries,imgObserver)=>{
    console.log(entries)
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }
        else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);
images.forEach(image=>{
    imgObserver.observe(image);
})

const requestURL = 'https://www.ahfx.com/person.php';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const person = jsonObject['person'];
    console.table(jsonObject);
    
    let card = document.createElement('section');
    let fullName = document.createElement('p');
    let password = document.createElement('p');
    let email = document.createElement('p');
    let eye = document.createElement('p');
    let city = document.createElement('p');
    let children = document.createElement('p');
    let ip = document.createElement('p');

    fullName.textContent = 'Fullname: ' + person.personal.name + ' ' + person.personal.last_name;
    password.textContent = 'Password: ' + person.online_info.password;
    email.textContent = 'Email: ' + person.online_info.email;
    eye.textContent = 'Eye color: ' + person.personal.eye_color;
    city.textContent = 'Country: ' + person.personal.country + ', ' + person.personal.city;
    if(person.marriage.married == false){
        children.textContent = 'Single and Ready to Mingle'
    }
    else if(person.marriage.children == '0'){
        children.textContent = 'No Children'
    }
    else {
        children.textContent = 'How Many Children: ' + person.marriage.children;
    };
    
    ip.textContent = 'IP Address: ' + person.online_info.ip_address

    card.appendChild(fullName);
    card.appendChild(password);
    card.appendChild(email);
    card.appendChild(eye);
    card.appendChild(city);
    card.appendChild(children);
    card.appendChild(ip);
    
    document.querySelector('div.cards').appendChild(card);

    
  });
});
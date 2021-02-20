window.addEventListener("load", (event) => {
    const images = document.querySelectorAll("[data-src]");
    //console.log(images);
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
        rootMargin: "0px 0px 300px 0px"
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
});
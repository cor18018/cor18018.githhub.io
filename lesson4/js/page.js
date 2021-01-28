window.addEventListener("load", ()=>{
    const lu = document.querySelector("#lastupdated");
    lu.textContent = document.lastModified;

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    const menubutton = document.querySelector(".menu");
    const mainnav = document.querySelector("#nav");

    menubutton.addEventListener("click", ()=> {mainnav.classList.toggle("resonsive")},false);

    window.onresize = ()=> {if(window.innerWidth>760) mainnav.classList.remove("responsive");};
    
});
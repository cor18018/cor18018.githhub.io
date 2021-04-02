window.addEventListener("load", (event) => {

    const cry = document.querySelector("#copyrightyear");
    cry.textContent = new Date().getFullYear();

    const menubutton = document.querySelector(".menu");
    const mainnav = document.querySelector("#nav");
    const services = document.querySelector("#services");
    menubutton.addEventListener("click", () => {
        mainnav.classList.toggle("resonsive")
        services.classList.toggle("resonsive")
    }, false);
    window.onresize = () => {
        if (window.innerWidth > 760) mainnav.classList.remove("responsive");
        else if (window.innerWidth > 760) services.classList.remove("responsive");
    };
});
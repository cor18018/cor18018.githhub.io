window.addEventListener("load", ()=> {
    const hambutton = document.querySelector(".ham");
    const mainnav = document.querySelector("#navigation");

    hambutton.addEventListener("click", ()=> {mainnav.classList.toggle("resonsive")},false);
});
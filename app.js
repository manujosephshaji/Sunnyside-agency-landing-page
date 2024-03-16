const toggel = document.querySelector(".toggel");
const links = document.querySelector(".links");

toggel.addEventListener("click",()=>{
    links.classList.toggle("showlinks");
    toggel.classList.toggle("toggelRotate");
    links.classList.toggle("showslide");
    
})
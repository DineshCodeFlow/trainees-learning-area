const hamberger=document.querySelector(".hamburger");
const navBar=document.querySelector(".nav_bar");

hamberger.addEventListener("click",()=>{
    hamberger.classList.toggle("active");
    navBar.classList.toggle("active");
})

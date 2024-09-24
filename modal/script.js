const btn = document.querySelector(".btn");
const overlay = document.querySelector(".overlay");
const closebtn = document.querySelector(".btn2");

btn.addEventListener("click",()=>{
    overlay.classList.add("active")
})

closebtn.addEventListener("click",()=>{

    overlay.classList.remove("active")
})
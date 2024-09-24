const toggle = document.querySelector(".toggle")
const nav = document.querySelector(".navbar")


toggle.addEventListener("click",()=>{
    nav.classList.toggle("show")
})

const navbar = document.querySelector("nav")
const btn = document.querySelector(".btn")

window.addEventListener("scroll",()=>{
    const yHeight = window.scrollY
    if(yHeight>110){
        navbar.classList.add("mid")
    }
    else{
        navbar.classList.remove("mid")
        
    }

    console.log(yHeight)
    if(yHeight>120){
        navbar.classList.add("fixed")
    }
    else if (yHeight<120){
        navbar.classList.remove("fixed")
    }

    if (yHeight>605){
        btn.classList.add("showbtn")
    }
    else{
        btn.classList.remove("showbtn")
    }
    btn.addEventListener("click",()=>{
        yHeight==0
    })
    
})





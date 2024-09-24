const ham = document.querySelector(".toggle");
const nav = document.querySelector(".navbar");
const togglex = document.querySelector(".togglex");
ham.addEventListener("click", () => {
    nav.classList.toggle("show-nav");
    togglex.classList.add("active")
    ham.classList.add("nonactive")
    
    
})
togglex.addEventListener("click", () => {
    nav.classList.remove("show-nav");
    togglex.classList.remove("active")
    ham.classList.remove("nonactive") 
})
// function toggle(){
//     if(nav.classList.contains("active")){
      
//     }
//     else if(nav.classList.contains("noactive")){
//           }
// }

  


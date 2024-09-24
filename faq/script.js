const btn1 = document.querySelectorAll(".btn1")
const btn2 = document.querySelectorAll(".btn2")
const answers = document.querySelectorAll(".answer")


btn1.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        let target = e.currentTarget
        let answer = target.parentElement.parentElement.parentElement.children[1]
        // console.log(btn2);
         answers.forEach((item)=>
        {
            if(item!==answer){
                item.classList.remove("show")
            }
        })
        answer.classList.toggle("show")
        
        
    })
})



// btn1.addEventListener("click",()=>{
   
// })

// btn2.addEventListener("click", ()=>{
//     answer.classList.remove("show")
//     btn1.classList.remove("dontshow")
//     btn2.classList.remove("show")
// })

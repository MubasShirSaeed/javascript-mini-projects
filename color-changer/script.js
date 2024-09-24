const simple = document.querySelector(".simple");
const hex = document.querySelector(".Hex");
const button = document.querySelector("#btn");
const color = document.querySelector(".color");
const colorArr = ["#FFFFFF", "#FFFAFA", "#F8F8FF", "#FFFFF0", "#FAF0E6"]
const hexArr =[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
hex.addEventListener("click", () => {
    if (simple.classList.contains("active")) {

        simple.classList.remove("active")
        hex.classList.add("active")

    }
    else{
        hex.classList.add("active")
    }

})
simple.addEventListener("click", () => {
    if (hex.classList.contains("active")) {

        hex.classList.remove("active")
        simple.classList.add("active")

    }
    else{
        simple.classList.add("active")
    }
})

button.addEventListener("click", () => {
    if(!simple.classList.contains('active') && !hex.classList.contains("active")){
        alert("please select simple or hex ")
    }
   if(simple.classList.contains("active")){
    let clr =Random();
    document.body.style.backgroundColor = colorArr[clr];
    color.textContent = colorArr[clr];
    color.style.color= "blue";
    function Random() {
        return Math.floor(Math.random() * colorArr.length);
    }

   }
   else if(hex.classList.contains("active")){
        let hexclr = "#";
        for (let i = 0; i < 6; i++) {
            hexclr += hexArr[Random()];
            
   }
   document.body.style.backgroundColor = hexclr;
   color.textContent = hexclr
   color.style.color=hexclr

   function Random(){
    return Math.floor(Math.random() * hexArr.length)
   }
   }
});




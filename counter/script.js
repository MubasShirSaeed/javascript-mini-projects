const num = document.querySelector(".num");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const reset = document.querySelector("#reset");
let count = 0;
btn1.addEventListener("click", () => {
    count++;
    num.textContent = count;
    updateColor()
})
btn2.addEventListener("click", () => {
    count--;
    num.textContent = count;
    updateColor()
})

reset.addEventListener("click", () => {

    count = 0;
    num.textContent = count;
    updateColor()
})


function updateColor(){
    if (count < 0) {
        num.style.color = "red";
    }
    else if (count > 0) {
        num.style.color = "green";
    }
    else {
        num.style.color = "black";
    }
}


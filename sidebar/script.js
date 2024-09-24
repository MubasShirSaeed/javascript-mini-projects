const toggle = document.querySelector(".toggle");
const sideNav = document.querySelector(".sidebar");
const toggleX = document.querySelector(".togglex");
toggle.addEventListener("click", () => {
    sideNav.classList.toggle("active")})

toggleX.addEventListener("click", () => {
    sideNav.classList.remove("active")})
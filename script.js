const mobileMenuPlaceHolder1 = document.querySelector(".open");
const mobileMenuPlaceHolder2 = document.querySelector(".close");
const mainMenu = document.querySelector(".main-menu");

// mobileMenuPlaceHolder.addEventListener("click", function () {
//     mainMenu.classList.toggle("active");
// });

function fun1() {
    mainMenu.classList.remove("active");
    mobileMenuPlaceHolder1.classList.add("active");
    mobileMenuPlaceHolder2.classList.remove("active");
}

function fun2() {
    mainMenu.classList.add("active");
    mobileMenuPlaceHolder2.classList.add("active");
    mobileMenuPlaceHolder1.classList.remove("active");
}

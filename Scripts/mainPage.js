const logo = document.querySelectorAll("#logo path");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const intro = document.querySelector(".intro");
const mainProductBtn = document.querySelector(".main-page-btn");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  intro.classList.toggle("visibi-hi");
  mainProductBtn.classList.toggle("visibi-hi");
});

for (let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`); //To calculate tatal lenght of letter
}



const logo = document.querySelectorAll("#logo path");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const frameChanger = document.querySelector(".swiper");
const woodenBtn = document.getElementById("woodenBtn");
const designerBtn = document.getElementById("designerBtn");
const blackBtn = document.getElementById("blackBtn");
const whiteBtn = document.getElementById("whiteBtn");
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

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    intro.classList.toggle("visibi-hi");
    mainProductBtn.classList.toggle("visibi-hi");
  })
);

woodenBtn.addEventListener("click", () => {
  frameChanger.classList.add("wooden-frame");
  frameChanger.classList.remove("designer-frame");
  frameChanger.classList.remove("white-frame");
});

designerBtn.addEventListener("click", () => {
  frameChanger.classList.add("designer-frame");
  frameChanger.classList.remove("wooden-frame");
  frameChanger.classList.remove("white-frame");
});

blackBtn.addEventListener("click", () => {
  frameChanger.classList.remove("wooden-frame");
  frameChanger.classList.remove("designer-frame");
  frameChanger.classList.remove("white-frame");
});

whiteBtn.addEventListener("click", () => {
  frameChanger.classList.add("white-frame");
  frameChanger.classList.remove("wooden-frame");
  frameChanger.classList.remove("designer-frame");
});

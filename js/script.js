let menu = document.querySelector(".fa-solid"),
  navitems = document.querySelector(".navlinks"),
  typedText = document.querySelector("#typed");

menu.addEventListener("click", () => {
  menu.classList.toggle("fa-xmark");
  navitems.classList.toggle("open");
});
window.addEventListener("scroll", () => {
  menu.classList.remove("fa-xmark");
  navitems.classList.remove("open");
});

const typed = new Typed(typedText, {
  strings: ["Front-End Developer", "Full Stack Developer", "Ui Developer"],
  typeSpeed: 40,
  loop: true,
});
document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "assets/cv.pdf";
  link.download = "Shainy_CV.pdf";
  link.click();
});
document.getElementById("contactBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "#contact";
  link.click();
});
AOS.init();

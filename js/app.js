let theme__container = document.querySelector(".theme__container"),
  theme__btn = document.querySelector(".theme__btn"),
  body = document.querySelector("body"),
  menu = document.querySelector(".menu__bar i"),
  navlinks = document.querySelector(".navlinks"),
  typedText = document.querySelector("#typed"),
  download_link = document.querySelector("#downloadBtn"),
  links = navlinks.querySelectorAll("a"),
  topIcon = document.querySelector(".top__icon");

// -------------menu ------------
menu.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  if (navlinks.classList.contains("open")) {
    menu.classList.replace("ri-menu-3-line", "ri-close-fill");
  } else {
    menu.classList.replace("ri-close-fill", "ri-menu-3-line");
  }
});
window.addEventListener("scroll", () => {
  navlinks.classList.remove("open");
  menu.classList.replace("ri-close-fill", "ri-menu-3-line");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ------------ typed text -----------
const typed = new Typed(typedText, {
  strings: ["Front-End Developer", "Full Stack Developer", "Ui Developer"],
  typeSpeed: 40,
  loop: true,
});

// ------------- download cv link ----------
download_link.addEventListener("click", () => {
  let link_cv = document.createElement("a");
  link_cv.href = "assets/shainy_v_achary.pdf";
  link_cv.download = "shainy_achary_cv.pdf";
  link_cv.click();
});
// ---------- theme ----------
theme__btn.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    theme__btn
      .querySelector("i")
      .classList.replace("ri-moon-line", "ri-sun-line");
  } else {
    body.classList.remove("light");
    theme__btn
      .querySelector("i")
      .classList.replace("ri-sun-line", "ri-moon-line");
  }
});

// move to top:
window.addEventListener("scroll", () => {
  if (window.scrollY < 100) {
    topIcon.style.display = "none";
  } else {
    topIcon.style.display = "block";
  }
});

topIcon.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

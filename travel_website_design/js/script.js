let navbar = document.querySelector(".header .navbar");
let bars = document.querySelector(".header .flex .icons .fa-bars");
let times = document.querySelector(".header .flex .icons .fa-xmark");

bars.addEventListener("click", () => {
  navbar.classList.add("show");
  times.classList.add("show");
  bars.classList.add("hide");
});

times.addEventListener("click", () => {
  navbar.classList.remove("show");
  times.classList.remove("show");
  bars.classList.remove("hide");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};
ScrollReveal().reveal(".home .content", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".popular h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".popular p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".popular .box-container", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".services h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".services p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".services .box-container .box", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about img", {
  ...scrollRevealOption,
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".about .content", {
  ...scrollRevealOption,
  delay: 500,
  origin: "right",
});
ScrollReveal().reveal(".rating .box.first", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".rating .box.second", {
  ...scrollRevealOption,
  delay: 800,
});

ScrollReveal().reveal(".rating .box.third", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".clients h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".clients p", {
  ...scrollRevealOption,
  delay: 700,
});
ScrollReveal().reveal(".clients .box-container", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".gallery h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".gallery p", {
  ...scrollRevealOption,
  delay: 600,
});
ScrollReveal().reveal(".gallery img", {
  ...scrollRevealOption,
  delay: 1000,
});

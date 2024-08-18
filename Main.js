//variables
const navbar = document.querySelector("#navbar");
const arrow = document.querySelector("#arrow");

//this isfor the navbar
const forNavbarScroll = () => {
  const myScroll = document.documentElement.scrollTop;
  const myPixel = 50;

  myScroll > myPixel
    ? navbar.classList.add("sticky")
    : navbar.classList.remove("sticky");
};
window.addEventListener("scroll", forNavbarScroll);

//this is for the scroll to top
const forArrowScroll = () => {
  const myScroll = document.documentElement.scrollTop;
  const myPixel = 150;

  myScroll > myPixel
    ? arrow.classList.add("for-show-arrow")
    : arrow.classList.remove("for-show-arrow");
};
window.addEventListener("scroll", forArrowScroll);

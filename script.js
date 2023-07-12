document.querySelector(".hamburger-menu").addEventListener("click", () => {
  document.querySelector(".container").classList.toggle("change");
});
Array.from(document.querySelectorAll(".menu-link")).forEach((item) => {
  item.onclick = () => {
    document.querySelector(".container").classList.remove("change");
  };
});

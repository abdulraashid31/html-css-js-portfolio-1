function toggleMenu() {
  const menu = document.querySelector("#hamburger-nav .nav");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

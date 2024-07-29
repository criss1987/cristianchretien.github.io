function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function goToLogo() {
  const logo = document.querySelector(".logo");
  logo.classList.toggle("open");
}

function goToWithArrow(htmlElementToScroll) {
  htmlElementToScroll.scrollIntoView({ behavior: 'smooth' });
}

function openLinkInNewTab(url) {
  window.open(url, '_blank')
}





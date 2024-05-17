const navbarMenu = document.querySelector("#section-nav");
const mainContent = document.querySelector(".hero-section-contents");
const navbarButton = document.querySelector(".hs-getintouch-button");

let isOpen = open;
function toggleBtn() {
  if (isOpen) {
    navbarMenu.style.display = "flex";
    mainContent.style.display = "none";
    navbarButton.style.display = "inline-block";
    document.body.style.overflow = "hidden";
    isOpen = !isOpen;
  } else {
    console.log("test");
    navbarMenu.style.display = "none";
    mainContent.style.display = "inline-block";
    navbarButton.style.display = "none";
    document.body.style.overflow = "auto";
    isOpen = !isOpen;
  }
}

function handleResize() {
  const width = window.innerWidth;

  console.log("Window width:", width);

  if (width > 1000) {
    navbarMenu.style.display = "flex";
    navbarButton.style.display = "inline-block";
    document.body.style.overflow = "auto";
    isOpen = open;
  } else {
    navbarMenu.style.display = "none";
    mainContent.style.display = "inline-block";
    navbarButton.style.display = "none";
    document.body.style.overflow = "auto";
    isOpen = close;
  }
}

window.addEventListener("resize", handleResize);
handleResize();

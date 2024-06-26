// Packages Page Tab Section
const navbarPackages = document.getElementsByClassName("nav-button");
const pageContent = document.getElementsByClassName("page-content");

function showContent(pageId) {
  for (let i = 0; i < pageContent.length; i++) {
    if (pageContent[i].id === pageId) {
      pageContent[i].style.display = "block";
    } else {
      pageContent[i].style.display = "none";
    }
  }
}

function addClass(active) {
  for (let i = 0; i < navbarPackages.length; i++) {
    if (navbarPackages[i] === active) {
      navbarPackages[i].classList.add("active-btn");
    } else {
      navbarPackages[i].classList.remove("active-btn");
    }
  }
}

for (let i = 0; i < navbarPackages.length; i++) {
  navbarPackages[i].addEventListener("click", function () {
    const pageId = this.getAttribute("data-page");
    showContent(pageId);
    addClass(this);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("default-open").click();
});

// Main Navigation Section
const navbarMenu = document.querySelector("#section-nav");

let isOpen = open;
function toggleBtn() {
  if (isOpen) {
    navbarMenu.style.display = "flex";
    document.body.style.overflow = "hidden";
    isOpen = !isOpen;
  } else {
    console.log("test");
    navbarMenu.style.display = "none";
    document.body.style.overflow = "auto";
    isOpen = !isOpen;
  }
}

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    navbarMenu.style.display = "flex";
    document.body.style.overflow = "auto";
    isOpen = open;
  } else {
    navbarMenu.style.display = "none";
    document.body.style.overflow = "auto";
    isOpen = close;
  }
}

window.addEventListener("resize", handleResize);
handleResize();

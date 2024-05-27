function openPage(elmnt, color) {
  var infoNavBtn, i;

  // Remove active class from all buttons
  infoNavBtn = document.getElementsByClassName("info-nav-btn");
  for (i = 0; i < infoNavBtn.length; i++) {
    infoNavBtn[i].style.backgroundColor = "";
  }

  // Set background color of the clicked button
  elmnt.style.backgroundColor = color;
}

// Click the default button when the page loads
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("default-open").click();
});

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

  console.log("Window width:", width);

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

//trip-image-gallery
document.getElementById('galleryLink').addEventListener('click', ()=>{
  showSection('gallery');
});
  document.getElementById('default-open').addEventListener('click', ()=>{
      showSection('information');
});

function showSection(sectionId) {
  document.getElementById('gallery').classList.add('hidden');
  document.getElementById('information').classList.add('hidden');   
  document.getElementById(sectionId).classList.remove('hidden');
}


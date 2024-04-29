const navbarMenu = document.querySelector(".hero-section-nav");
    let isOpen = false;
    function toggleBtn() {
        if (isOpen) {
            navbarMenu.style.display = "flex";
            isOpen = !isOpen;
        } else {
            navbarMenu.style.display = "none";
            isOpen = !isOpen;
        }
    
    }
 









// const toggleMenu = document.querySelector(".menu-toggle");
//  const navbarMenu = document.querySelector(".hero-section-nav");
//  const navbarButton = document.querySelector(".hs-getintouch-button");

//  let isOpen = false;

//  toggleMenu.addEventListener("click", () => {    
//      if (isOpen) {
//          navbarMenu.style.display = "flex";
//          navbarButton.style.display = "inline-block";
//         isOpen = !isOpen;
//      } else {
//          navbarMenu.style.display = "none";
//         navbarButton.style.display = "none";
//         isOpen = !isOpen;
//      }
//  });
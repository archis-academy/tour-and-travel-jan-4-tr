const navbarMenu = document.querySelector(".hero-section-nav");
const mainContent = document.querySelector(".hero-section-contents");
const navbarButton = document.querySelector(".hs-getintouch-button");


    let isOpen = false;
    function toggleBtn() {
        if (isOpen) {
            navbarMenu.style.display = "flex";
            mainContent.style.display = "none";
            navbarButton.style.display = "inline-block";
            document.body.style.overflow = "hidden";
            isOpen = !isOpen;
        } else {
            navbarMenu.style.display = "none";
            mainContent.style.display = "inline-block";
            navbarButton.style.display = "none";
            document.body.style.overflow = "auto";
            isOpen = !isOpen;
        }
    
    }
 


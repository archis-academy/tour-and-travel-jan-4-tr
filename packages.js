const.infonav = document.querySelectorAll(".info-nav-btn");

for (let i = 0; i < infonav.length; i++) {
    infonav[i].addEventListener("click", function chBackcolor(color) {
        infonav[i].classList.toggle("info-nav-btn-active");
        infonav[i].nextElementSibling.classList.toggle("info-nav-btn-active");
    });
}
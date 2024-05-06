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

// Code to click the default button when the page loads
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("default-open").click();
});
document.addEventListener("DOMContentLoaded", function() {
    var links = document.querySelectorAll("a");
    var clickSound = document.getElementById("click-sound");

    links.forEach(function(link) {
        link.addEventListener("click", function() {
            clickSound.play();
        });
    });
});
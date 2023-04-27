window.addEventListener("resize", function(e) {
    var mapElement = document.getElementById("phototest");
    mapElement.style.height = mapElement.style.width + mapElement.style.width * 1.41;
});
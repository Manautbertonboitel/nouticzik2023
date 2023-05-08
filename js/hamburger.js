// Look for specified elements

var hamburger = document.querySelector(".header__main__navs__button");
var header = document.querySelector("header");
var body = document.querySelector("body");
// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

window.addEventListener('resize', function() {
    var w = window.innerWidth;
    if (w > 768) {
        header.classList.remove("navs--collapse--open");
        body.classList.remove("no-scroll");
    }
});
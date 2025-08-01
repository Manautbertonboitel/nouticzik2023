// Look for specified elements

var hamburger = document.querySelector(".hamburger");
var header = document.querySelector("header");
var body = document.querySelector("body");
var toggle1 = document.querySelector(".toggle1");
var toggle2 = document.querySelector(".toggle2");
var toggle3 = document.querySelector(".toggle3");
var toggle4 = document.querySelector(".toggle4");
const menucollapsed = document.querySelector('.header__main__navs--collapse');

// On click
hamburger.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");

});

toggle1.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

toggle2.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

toggle3.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

toggle4.addEventListener("click", function() {
    // Toggle class "is-active" && "open"
    header.classList.toggle("navs--collapse--open");
    body.classList.toggle("no-scroll");
});

function reportWindowSize() {
    var w = window.innerWidth;
    if (w > 1000) {
        header.classList.remove("navs--collapse--open");
        body.classList.remove("no-scroll");
    }
}

window.onresize = reportWindowSize;
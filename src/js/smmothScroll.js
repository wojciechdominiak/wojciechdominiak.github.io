"use strict";
exports.__esModule = true;
function smoothScroll() {
    var scrollLinks = document.querySelectorAll(".links__scroll");
    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            var navbar = document.getElementById("nav");
            var linksContainer = document.querySelector(".links-container");
            e.preventDefault();
            var currentTarget = e.currentTarget;
            var id = currentTarget.getAttribute("href").slice(1);
            var element = document.getElementById(id);
            var navHeight = navbar.getBoundingClientRect().height;
            var containerHeight = linksContainer.getBoundingClientRect().height;
            var position = element.offsetTop - navHeight;
            if (navHeight > 92) {
                position = position + containerHeight;
            }
            window.scrollTo({
                left: 0,
                top: position
            });
            linksContainer.style.height = "0";
        });
    });
}
exports["default"] = smoothScroll;

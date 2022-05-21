"use strict";
exports.__esModule = true;
function closeLinks() {
    {
        var navToggle = document.querySelector(".nav-header__toggle");
        var linksContainer_1 = document.querySelector(".links-container");
        var links_1 = document.querySelector(".links");
        navToggle.addEventListener("click", function () {
            var linksHeight = links_1.getBoundingClientRect().height;
            var containerHeight = linksContainer_1.getBoundingClientRect().height;
            containerHeight === 0
                ? (linksContainer_1.style.height = "".concat(linksHeight, "px"))
                : (linksContainer_1.style.height = "0");
        });
        var navbar = document.getElementById("nav");
    }
}
exports["default"] = closeLinks;

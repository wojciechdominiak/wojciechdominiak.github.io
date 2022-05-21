"use strict";
exports.__esModule = true;
function projectsBtn() {
    var about = document.querySelector(".projects__maincontent");
    var btns = document.querySelectorAll(".tab-btn");
    var articles = document.querySelectorAll(".content");
    about.addEventListener("click", function (e) {
        var target = e.target;
        var id = target.dataset.id;
        if (id) {
            btns.forEach(function (btn) {
                btn.classList.remove("active");
                target.classList.add("active");
            });
            articles.forEach(function (article) {
                article.classList.remove("active");
            });
            var element = document.getElementById(id).classList.add("active");
        }
    });
}
exports["default"] = projectsBtn;

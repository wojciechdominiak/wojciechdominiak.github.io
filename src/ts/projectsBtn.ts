export default function projectsBtn() {
  const about = document.querySelector(".projects__maincontent")!;
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");

  about.addEventListener("click", function (e) {
    const target = e.target as HTMLElement;
    const id = target.dataset.id;
    if (id) {
      btns.forEach(function (btn) {
        btn.classList.remove("active");
        target.classList.add("active");
      });
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id)!.classList.add("active");
      console.log(element);
    }
  });
}

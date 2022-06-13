export default function smoothScroll() {
  const scrollLinks = document.querySelectorAll(".links__scroll");

  scrollLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const navbar = document.getElementById("nav")!;
      const linksContainer = document.querySelector<HTMLElement>(".links-container")!;
      e.preventDefault();
      const currentTarget=e.currentTarget as HTMLElement;
      const id =currentTarget.getAttribute("href")!.slice(1)!;
      const element = document.getElementById(id)!;
      const navHeight = navbar.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;
      let position = element.offsetTop - navHeight;

      if (navHeight > 92) {
        position = position + containerHeight;
      }

      window.scrollTo({
        left: 0,
        top: position,
      });
      linksContainer.style.height = "0";
    });
  });
}

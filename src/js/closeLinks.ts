export default function closeLinks() {
  {
    const navToggle = document.querySelector(".nav-header__toggle");
    const linksContainer = document.querySelector<HTMLElement>(".links-container");
    const links = document.querySelector(".links");

    navToggle.addEventListener("click", () => {
      const linksHeight = links.getBoundingClientRect().height;
      const containerHeight = linksContainer.getBoundingClientRect().height;

      containerHeight === 0
        ? (linksContainer.style.height = `${linksHeight}px`)
        : (linksContainer.style.height = "0");
    });
    const navbar = document.getElementById("nav");
  }
}

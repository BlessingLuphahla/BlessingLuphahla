const images = document.querySelectorAll(
  "body > div > div > h3 > ul > li > img"
);

images.forEach((image) =>
  image.addEventListener("click", function () {
    const p = this.nextElementSibling;
    p.classList.toggle("project-text");
  })
);

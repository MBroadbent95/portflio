document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");
  const carouselInner = document.querySelector(".carousel-inner");
  const carouselItems = document.querySelectorAll(".carousel-item");
  let currentIndex = 0;

  function slide(direction) {
    const itemWidth = carouselInner.children[0].offsetWidth;
    currentIndex = (currentIndex + direction) % carouselInner.children.length;
    carouselInner.style.transform = `translateX(-${
      currentIndex * itemWidth
    }px)`;
  }

  prevButton.addEventListener("click", () => slide(-1));
  nextButton.addEventListener("click", () => slide(1));

  carouselItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevents the carousel from sliding when clicking the item
      const link = this.getAttribute("href");
      window.open(link, "_blank");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const carouselItems = document.querySelectorAll(".carousel-item");
  const prevButton = document.querySelector(".prev-button");
  const nextButton = document.querySelector(".next-button");

  let currentItemIndex = 0;

  function hideAllItems() {
    carouselItems.forEach((item) => {
      item.style.display = "none";
    });
  }

  function showCurrentItem() {
    hideAllItems();
    carouselItems[currentItemIndex].style.display = "block";
  }

  function showNextItem() {
    currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
    showCurrentItem();
  }

  function showPrevItem() {
    currentItemIndex =
      (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
    showCurrentItem();
  }

  prevButton.addEventListener("click", showPrevItem);
  nextButton.addEventListener("click", showNextItem);

  showCurrentItem();
});

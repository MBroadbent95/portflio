document.addEventListener("DOMContentLoaded", function () {
  //   const prevButton = document.querySelector(".prev-button");
  //   const nextButton = document.querySelector(".next-button");
  //   const carouselInner = document.querySelector(".carousel-inner");
  //   const carouselItems = document.querySelectorAll(".carousel-item");
  //   let currentIndex = 0;

  //   function slide(direction) {
  //     const itemWidth = carouselInner.children[0].offsetWidth;
  //     currentIndex = (currentIndex + direction) % carouselInner.children.length;
  //     carouselInner.style.transform = `translateX(-${
  //       currentIndex * itemWidth
  //     }px)`;
  //   }

  //   function showCurrentItem() {
  //     carouselItems.forEach((item, index) => {
  //       if (index === currentItemIndex) {
  //         item.style.display = "block";
  //       } else {
  //         item.style.display = "none";
  //       }
  //     });
  //   }

  //   function showNextItem() {
  //     currentItemIndex = (currentItemIndex + 1) % carouselItems.length;
  //     showCurrentItem();
  //   }

  //   function showPrevItem() {
  //     currentItemIndex =
  //       (currentItemIndex - 1 + carouselItems.length) % carouselItems.length;
  //     showCurrentItem();
  //   }

  //   //   prevButton.addEventListener("click", () => slide(-1));
  //   //   nextButton.addEventListener("click", () => slide(1));

  //   prevButton.addEventListener("click", showPrevItem);
  //   nextButton.addEventListener("click", showNextItem);

  //   carouselItems.forEach((item) => {
  //     item.addEventListener("click", function (event) {
  //       event.stopPropagation(); // Prevents the carousel from sliding when clicking the item
  //       const link = this.getAttribute("href");
  //       window.open(link, "_blank");
  //     });
  //   });

  //   showCurrentItem();

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

  // Initially show the first item
  showCurrentItem();
});

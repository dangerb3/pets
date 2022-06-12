const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  //loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,
  slidesPerView: 3,
  watchOverflow: true,
  spaceBetween: 30,
  slidesPerGroup: 3,
});

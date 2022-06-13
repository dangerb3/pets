jQuery(($) => {
  function changeClassClick(par){
    $(par).on("click", function () {
      if (!$(this).hasClass("active")) {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
      }
    });
  }
  changeClassClick(".category-item");
  changeClassClick(".animal-item");
  changeClassClick(".bread-item");
  changeClassClick(".age-item");
})
const swiper2 = new Swiper(".filter-slider", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

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

  watchOverflow: true,

});
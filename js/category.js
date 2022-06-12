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
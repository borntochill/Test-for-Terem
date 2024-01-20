$(document).ready(function () {
  // скрытие заголовка
  $(".btn-warning").click("click", function () {
    $(".row-top").slideToggle(500);
  });
  // перемещение среднего блока
  $(".btn-success").click("click", function () {
    $(".column-center").toggleClass("order-first");
  });
  // модальное окно
  $(".popup-close").click(function () {
    $(".popup-fade").hide(500);
  });

  $(".popup-fade").click(function (e) {
    if ($(e.target).closest(".popup")) {
      $(this).fadeOut();
    }
  });
});

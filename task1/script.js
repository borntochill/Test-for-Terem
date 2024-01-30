// $(document).ready(function () {
//   // скрытие заголовка
//   $(".btn-warning").click("click", function () {
//     $(".row-top").slideToggle(500);
//   });
//   // перемещение среднего блока
//   $(".btn-success").click("click", function () {
//     $(".column-center").toggleClass("order-first");
//   });
//   // модальное окно
//   $(".popup-close").click(function () {
//     $(".popup-fade").hide(500);
//   });

//   $(".popup-fade").click(function (e) {
//     if ($(e.target).closest(".popup")) {
//       $(this).fadeOut();
//     }
//   });
// });

const titleBlock = document.querySelector(".row-top");
const columnCenter = document.querySelector(".column-center");
const popupBlock = document.querySelector(".popup-fade");
const btnHideTitle = document.querySelector(".btn-warning");
const btnSwap = document.querySelector(".btn-success");
const btnClose = document.querySelector(".popup-close");

// btnHideTitle.addEventListener("click", function () {
//   titleBlock.classList.toggle("hidden");
// });

// btnSwap.addEventListener("click", function () {
//   columnCenter.classList.toggle("order-first");
// });

let bntClick = function (btn, block, cssClass) {
  btn.addEventListener("click", function () {
    block.classList.toggle(cssClass);
  });
};

bntClick(btnHideTitle, titleBlock, "hidden");
bntClick(btnSwap, columnCenter, "order-first");

btnClose.addEventListener("click", function () {
  popupBlock.classList.add("hidden");
});

popupBlock.addEventListener("click", function (e) {
  if (e.target == popupBlock) {
    popupBlock.classList.add("hidden");
  }
});

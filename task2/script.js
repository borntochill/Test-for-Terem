// $(document).ready(function () {
//   let $data = {};

//   let renderData = function (data) {
//     let text = JSON.stringify(data);
//     $(`<p>${text}</p>`).appendTo("body");
//   };

//   $(".form").submit(function (e) {
//     e.preventDefault();
//     $(".form")
//       .find("input, select")
//       .each(function () {
//         $data[this.name] = $(this).val();
//       });
//     renderData($data);

//     $.ajax({
//       type: "GET",
//       url: "./index.html",
//       data: $data,
//       success: function () {
//         alert("Успех! 🥳 🥳");
//       },
//     });
//   });
// });

const form = document.querySelector(".form");
const list = document.querySelector(".list");

const renderItem = function (item) {
  const markup = `
    <li class="list__item">
    ${item}
    </li>
    `;
  list.insertAdjacentHTML("beforeend", markup);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataArr = new FormData(form);
  const dataObj = Object.fromEntries(dataArr);
  const text = JSON.stringify(dataObj);
  renderItem(text);
  getResponse(dataArr);
});

async function getResponse(data) {
  const response = await fetch("./index.html", data);
  if (response.ok) alert("good");
}

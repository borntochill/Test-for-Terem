$(document).ready(function () {
  let $data = {};

  let renderData = function (data) {
    let text = JSON.stringify(data);
    $(`<p>${text}</p>`).appendTo("body");
  };

  $(".form").submit(function (e) {
    e.preventDefault();
    $(".form")
      .find("input, select")
      .each(function () {
        $data[this.name] = $(this).val();
      });
    renderData($data);

    $.ajax({
      type: "GET",
      url: "./index.html",
      data: $data,
      success: function () {
        alert("Успех! 🥳 🥳");
      },
    });
  });
});

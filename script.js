$(document).ready(function () {

  function init() {
    $(".main_parts_parts_heading,.main_parts_parts_description,.main_parts_parts_description2,.main_parts_parts_documentation,.video").hide();
    $("#nav_item_1,#nav_item_2").removeClass("active");

  }

  init();
  $("#nav_item_1").click(function () {
    init();
    $(".main_parts_parts_heading,.main_parts_parts_description,.main_parts_parts_description2,.main_parts_parts_documentation").toggle();
    $(this).addClass("active");
  });
  $("#nav_item_2").click(function () {
    init();
    $(".video").toggle();
    $(this).addClass("active");

  });
});




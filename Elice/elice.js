$(".header__menu__service").on("click", function () {
  var toggle = $(".toggle__service");

  if (!toggle.hasClass("on")) {
    $(".toggle__service").addClass("on");
  } else {
    $(".toggle__service").removeClass("on");
  }
});

$(".header__menu__elice").on("click", function () {
  var toggle = $(".toggle__elice");

  if (!toggle.hasClass("on")) {
    $(".toggle__elice").addClass("on");
  } else {
    $(".toggle__elice").removeClass("on");
  }
});

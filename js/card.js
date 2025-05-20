$(document).ready(function () {
  $(".desktop").click(function () {
    if (!$(".desktop").hasClass("open")) {
      $(".desktop").addClass("open");
    } else {
      $(".desktop").addClass("closing");
      setTimeout(() => {
        $(".desktop").removeClass("open");
        $(".desktop").removeClass("closing");
      }, 2 * 2 * 1000);
    }
  });
});

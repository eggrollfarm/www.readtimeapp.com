$(document).ready(function() {
  var showArticle = function() {
    $(".getting-read").fadeOut(350);
    $(".good-time").fadeIn(350);
    $(".fake-phone .article").addClass("onscreen", 400, function() {
      setTimeout(hideArticle, 3000);
    });
  }

  var hideArticle = function() {
    $(".getting-read").fadeIn(450);
    $(".good-time").fadeOut(450);
    $(".fake-phone .article").switchClass("onscreen", "offscreen-left", 400, function() {
      $(this).removeClass("offscreen-left")
      setTimeout(showArticle, 3000);
    });
  }

  setTimeout(showArticle, 3000);
});

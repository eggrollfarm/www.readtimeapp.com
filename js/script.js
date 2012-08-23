$(document).ready(function() {
  var showArticle = function() {
    $(".getting-read").fadeOut();
    $(".good-time").fadeIn();
    $(".fake-phone .article").addClass("onscreen", 300, function() {
      setTimeout(hideArticle, 3000);
    });
  }

  var hideArticle = function() {
    $(".getting-read").fadeIn();
    $(".good-time").fadeOut();
    $(".fake-phone .article").switchClass("onscreen", "offscreen-left", 300, function() {
      $(this).removeClass("offscreen-left")
      setTimeout(showArticle, 3000);
    });
  }

  setTimeout(showArticle, 3000);
});

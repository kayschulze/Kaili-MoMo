$(function() {
  $("button#purple").click(function() {
    $("body").removeClass();
    $("body").addClass("purple-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background")
  });

  $("button#original-color").click(function() {
    $("body").removeClass();
    $("body").addClass("original-color")
  });
});

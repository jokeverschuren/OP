var main = function () {
  "use strict";

  $(".foto").on("mouseover", function() {
    $(this).closest("div");
    $(".zwart1").addClass("hidden");      
  });

  $(".foto").on("mouseout", function(){
    $(this).closest("div");
    $(".zwart1").removeClass("hidden");   
  });


};

$("document").ready(main);

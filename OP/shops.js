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

 $(".foto2").on("mouseover", function() {
    $(this).closest("div");
    $(".zwart2").addClass("hidden");      
  });

  $(".foto2").on("mouseout", function(){
    $(this).closest("div");
    $(".zwart2").removeClass("hidden");   
  });

   $(".foto3").on("mouseover", function() {
   $(this).closest("div");
    $(".zwart3").addClass("hidden");      
  });

  $(".foto3").on("mouseout", function(){
    $(this).closest("div");
    $(".zwart3").removeClass("hidden");
  });

  
};

$("document").ready(main);

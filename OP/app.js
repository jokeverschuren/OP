var main = function () {
  "use strict";

  $(".foto").on("mouseover", function() {
    $(this).closest("img");
  	$(".art1").removeClass("hidden");
      
  });

  $(".foto").on("mouseout", function(){
    $(this).closest("img");
    $(".art1").addClass("hidden");
   
  });

 $(".foto2").on("mouseover", function() {
    $(this).closest("img");
    $(".art2").removeClass("hidden");
      
  });

  $(".foto2").on("mouseout", function(){
    $(this).closest("img");
    $(".art2").addClass("hidden");
   
  });

   $(".foto3").on("mouseover", function() {
    $(this).closest("img");
    $(".art3").removeClass("hidden");
      
  });

  $(".foto3").on("mouseout", function(){
    $(this).closest("img");
    $(".art3").addClass("hidden");
   
  });

   $(".foto4").on("mouseover", function() {
    $(this).closest("img");
    $(".art4").removeClass("hidden");
      
  });

  $(".foto4").on("mouseout", function(){
    $(this).closest("img");
    $(".art4").addClass("hidden");
   
  });


   $(".foto5").on("mouseover", function() {
    $(this).closest("img");
    $(".art5").removeClass("hidden");
      
  });

  $(".foto5").on("mouseout", function(){
    $(this).closest("img");
    $(".art5").addClass("hidden");
   
  });


   $(".foto6").on("mouseover", function() {
    $(this).closest("img");
    $(".art6").removeClass("hidden");
      
  });

  $(".foto6").on("mouseout", function(){
    $(this).closest("img");
    $(".art6").addClass("hidden");
   
  });
 

};

$("document").ready(main);

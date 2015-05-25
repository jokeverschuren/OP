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

   $(".foto4").on("mouseover", function() {
    $(this).closest("div");
    $(".zwart4").addClass("hidden");      
  });

  $(".foto4").on("mouseout", function(){
   $(this).closest("div");
    $(".zwart4").removeClass("hidden");
  });


   $(".foto5").on("mouseover", function() {
    $(this).closest("div");
    $(".zwart5").addClass("hidden");
  });

  $(".foto5").on("mouseout", function(){
    $(this).closest("div");
    $(".zwart5").removeClass("hidden");
  });


   $(".foto6").on("mouseover", function() {
    $(this).closest("div");
    $(".zwart6").addClass("hidden");
  });

  $(".foto6").on("mouseout", function(){
    $(this).closest("div");
    $(".zwart6").removeClass("hidden");
  });

  $(".foto7").on("mouseover", function() {
    $(this).closest("div");
    $(".zwart7").addClass("hidden");
  });

  $(".foto7").on("mouseout", function(){
    $(this).closest("div");
    $(".zwart7").removeClass("hidden");  
  });

};

$("document").ready(main);

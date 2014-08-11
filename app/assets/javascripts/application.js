// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require masonry
//= require_tree .

var msnry = new Masonry( "#container", {
  // options
  // "columnWidth":1,
  "isFitWidth":true,
  "itemSelector": '.item'
});


$(".item").on("click", function(){
   window.open($(this).find("a").attr("href"));
   return false;
});

$(".hide").on("click", function() {
  $("#extension").addClass("visuallyhidden");
});

// $(".public").on("click", function() {
//   $(".private").toggleClass("visuallyhidden");
//   $(".public").toggleClass("visuallyhidden");
// });

// $(".private").on("click",function() {
//   $(".private").toggleClass("visuallyhidden");
//   $(".public").toggleClass("visuallyhidden");
// });

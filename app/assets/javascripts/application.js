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
//= require imagesloaded
//= require_tree .

// var container = document.querySelector('#container');
// var msnry;
// // initialize Masonry after all images have loaded
// imagesLoaded( container, function() {
//   msnry = new Masonry( container, {
//     // options
//   "columnWidth":100,
//   // "gutter": 10,
//   "isFitWidth":true,
//   "itemSelector": '.item'
//   } );
// });

var msnry = new Masonry( "#container", {
  // options
  // "columnWidth":100,
  "isFitWidth":true,
  "itemSelector": '.item'
});


$(".item").click(function(){
   window.open($(this).find("a").attr("href"));
   return false;
});

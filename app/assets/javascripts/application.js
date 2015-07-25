// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require materialize-sprockets
//= require turbolinks
//= require_tree .
$(document).ready(function (){
$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
  });

$('select').material_select();


	var widthCheck = function() {

	  var $window = $(window);
	  var w = $window.width();
	  var h = $window.height();

		  if (w <= 580) {

		  } else {
		  	// $('.secondary-nav').addClass('non-mobile');
	        var windowsize = $window.height();
	        var footerHeight = $('footer').outerHeight();
	        var top = $('.site-header').outerHeight();
	        var remainHeight = parseInt('22');
	        $('.welcome-banner').css({"height": $window.height(), "width": $window.width() });
	        $('body').css('overflow','hidden');

		    // Execute on load
		    // Bind event listener

		  }

	};

	widthCheck();


});
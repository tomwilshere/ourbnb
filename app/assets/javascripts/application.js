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

		    // Execute on load
		    // Bind event listener

		  }

		};

		widthCheck();


	var options = {  videoId: 'eTOsAJyF1jk', 
                   start: 0, 
                   repeat: true
                };  
  
	$('body').tubular(options); 

});

function addMarker(lat, lng, tweet, sentiment) {

  // Check to see if we want to do any sentiment analysis
    if (sentiment != undefined) {
      // Use our API to get a number
      $.ajax({url: "http://sentiment.decoded.com/api/"+sentiment+"/?txt="+encodeURIComponent(tweet), jsonp: "callback", dataType: "jsonp", success: function (data) {
          keepGoing(tweet, data.result.sentiment);
        }
      });
    }
    // If we don't want sentiment, just continue
    else
    {
      keepGoing(tweet);
    }

    // Once we have the tweet and sentiment, we can define the way the markers look
    function keepGoing(tweet, sentiment) {

      // Define our mood icons
      if (sentiment != undefined) {

        // If the sentiment is positive, create this sort of marker
        if (sentiment == 'Positive') {
          var theIcon = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: positiveSize,
          fillOpacity: positiveStrength,
          fillColor: positiveColour,
          strokeWeight: 0
          }
        }

        // If the sentiment is neutral, create this sort of marker
        else if (sentiment == 'Neutral') {
          var theIcon = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: neutralSize,
          fillOpacity: neutralStrength,
          fillColor: neutralColour,
          strokeWeight: 0
          }
        }

        // If the sentiment is negative, create this sort of marker
        else if (sentiment == 'Negative') {
          var theIcon = {
          path: google.maps.SymbolPath.CIRCLE,
          scale: negativeSize,
          fillOpacity: negativeStrength,
          fillColor: negativeColour,
          strokeWeight: 0
          }
        }
        // If we are doing sentiment analysis, create this sort of marker
      var marker = new google.maps.Marker({
        // Set the position of the marker
        position: new google.maps.LatLng(lat, lng),
        // Put the marker on a Google map
        map: map,
        icon: theIcon
      });
      }
      // If we're not doing sentiment analysis, create this sort of marker
      else {
      var marker = new google.maps.Marker({
        // Set the position of the marker
        position: new google.maps.LatLng(lat, lng),
        // Put the marker on a Google map
        map: map
      });
      }


      // Create an info window with the contents of this tweet
      var infowindow = new google.maps.InfoWindow({
        content: tweet
      });
      // Listen for when someone clicks on a marker
      google.maps.event.addListener(marker, 'click', function() {
        // When someone does click, open the info window
        infowindow.open(map,marker);
      });
    }
  }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var map;
function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 9,
    center: {lat: 52.912143, lng: -3.892274},
    styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#fd9b54"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"color":"#e95b00"},{"visibility":"simplified"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"lightness":"100"}]},{"featureType":"poi","elementType":"all","stylers":[{"lightness":"86"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"lightness":"-60"},{"visibility":"on"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":"89"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#fedcc3"},{"visibility":"on"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"lightness":"46"},{"visibility":"on"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"simplified"},{"hue":"#ff2800"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"81"}]},{"featureType":"road.local","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"49"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"75"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"lightness":"-46"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"simplified"},{"lightness":"51"}]},{"featureType":"transit","elementType":"labels","stylers":[{"hue":"#ff2200"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#fd9b54"},{"visibility":"on"}]}]
  });
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
  addMarker(getRandomArbitrary(53.34, 52.51),getRandomArbitrary(-4.07, -3.66) , "Llanfair")
}

google.maps.event.addDomListener(window, 'load', initialize);



 $(function(){
  $('.sm-drop').on('click', function(){   /*при клике на globe мы обращаемся к icons и показываем их при повторном клике- скрываем*/
	$('.sm-dropdown').slideToggle();
  });
 }); 



// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;(function($) {

	 // DOM Ready
	$(function() {

		// Binding a click event
		// From jQuery v.1.7.0 use .on() instead of .bind()
		$('.button_left').bind('click', function(e) {

			// Prevents the default action to be triggered. 
			e.preventDefault();

			// Triggering bPopup when click event is fired
			$('.form-wrapper-meet').bPopup();

		});

	});

})(jQuery);

// Semicolon (;) to ensure closing of earlier scripting
// Encapsulation
// $ is assigned to jQuery
;(function($) {

 // DOM Ready
$(function() {

	// Binding a click event
	// From jQuery v.1.7.0 use .on() instead of .bind()
	$('.button_right').bind('click', function(e) {

		// Prevents the default action to be triggered. 
		e.preventDefault();

		// Triggering bPopup when click event is fired
		$('.form-wrapper-ask').bPopup();

	});

});

})(jQuery);

   // Semicolon (;) to ensure closing of earlier scripting
	// Encapsulation
	// $ is assigned to jQuery
	;(function($) {

		 // DOM Ready
		$(function() {

			// Binding a click event
			// From jQuery v.1.7.0 use .on() instead of .bind()
			$('.items-img1').bind('click', function(e) {

				// Prevents the default action to be triggered. 
				e.preventDefault();

				// Triggering bPopup when click event is fired
				$('.more1').bPopup();

			});

		});

	})(jQuery);

   // Semicolon (;) to ensure closing of earlier scripting
	// Encapsulation
	// $ is assigned to jQuery
	;(function($) {

		 // DOM Ready
		$(function() {

			// Binding a click event
			// From jQuery v.1.7.0 use .on() instead of .bind()
			$('.items-img2').bind('click', function(e) {

				// Prevents the default action to be triggered. 
				e.preventDefault();

				// Triggering bPopup when click event is fired
				$('.more2').bPopup();

			});

		});

	})(jQuery);

   // Semicolon (;) to ensure closing of earlier scripting
	// Encapsulation
	// $ is assigned to jQuery
	;(function($) {

		 // DOM Ready
		$(function() {

			// Binding a click event
			// From jQuery v.1.7.0 use .on() instead of .bind()
			$('.items-img3').bind('click', function(e) {

				// Prevents the default action to be triggered. 
				e.preventDefault();

				// Triggering bPopup when click event is fired
				$('.more3').bPopup();

			});

		});

	})(jQuery);
   // Semicolon (;) to ensure closing of earlier scripting
	// Encapsulation
	// $ is assigned to jQuery
	;(function($) {

		 // DOM Ready
		$(function() {

			// Binding a click event
			// From jQuery v.1.7.0 use .on() instead of .bind()
			$('.items-img4').bind('click', function(e) {

				// Prevents the default action to be triggered. 
				e.preventDefault();

				// Triggering bPopup when click event is fired
				$('.more4').bPopup();

			});

		});

	})(jQuery);

   // Semicolon (;) to ensure closing of earlier scripting
	// Encapsulation
	// $ is assigned to jQuery
	;(function($) {

		 // DOM Ready
		$(function() {

			// Binding a click event
			// From jQuery v.1.7.0 use .on() instead of .bind()
			$('.items-img5').bind('click', function(e) {

				// Prevents the default action to be triggered. 
				e.preventDefault();

				// Triggering bPopup when click event is fired
				$('.more5').bPopup();

			});

		});

	})(jQuery);

   // Semicolon (;) to ensure closing of earlier scripting
	// Encapsulation
	// $ is assigned to jQuery
	;(function($) {

		 // DOM Ready
		$(function() {

			// Binding a click event
			// From jQuery v.1.7.0 use .on() instead of .bind()
			$('.items-img6').bind('click', function(e) {

				// Prevents the default action to be triggered. 
				e.preventDefault();

				// Triggering bPopup when click event is fired
				$('.more6').bPopup();

			});

		});

	})(jQuery);					

// Stiky menu	
// Create a clone of the menu, right next to original.
$('.nav').addClass('original').clone().insertAfter('.nav').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;               

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.     
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;  
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}

function initMap() {
  var mapOptions = {
    zoom: 4,
    center: {lat: -33, lng: 151},
    disableDefaultUI: true
  }
  var map = (document.querySelector(".map"),
       mapOptions);
}
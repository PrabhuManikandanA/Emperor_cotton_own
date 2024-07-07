(function($, document, window){
	
	$(document).ready(function(){

		// hero-slider
		$(".home-hero-slider").flexslider({
			controlNav: false,
			directionNav: true,
			animation: "fade",
			prevText:'<i class="fa fa-angle-left"></i>',
			nextText:'<i class="fa fa-angle-right"></i>',
			slideshow: true, // Enable autoplay
			slideshowSpeed: 3000, // Set autoplay speed to 3 seconds
			pauseOnHover: true // Pause autoplay on hover
		});

		$(".testimonial-slider").flexslider({
			controlNav: true,
			directionNav: false,
			animation: "slide"
		});

	    if( $(".map").length ) {
			$('.map').gmap3({
				map: {
					options: {
						maxZoom: 14 
					}  
				},
				marker:{
					address: "40 Sibley St, Detroit",
				}
			},
			"autofit" );
	    }
	});

	
})(jQuery, document, window);

// Mobile menu
$('#mobile_menu_button').on('touchstart', function() {
	let menu = $('header .menu');
	if ( !$(this).hasClass('active') ) {
		$(this).addClass('active');
		menu.fadeIn(300);
		if ( $('#catalog').length ) {
			let button = $('#aside_button_filters');
			button.fadeOut(300);
		} else if ( $('#checkout').length ) {
			let button = $('#details_button');
			button.fadeOut(300);
		}
	} else {
		$(this).removeClass('active');
		menu.fadeOut(300);
		if ( $('#catalog').length ) {
			let button = $('#aside_button_filters');
			button.fadeIn(300);
		} else if ( $('#checkout').length ) {
			let button = $('#details_button');
			button.fadeIn(300);
		}
	}
});

// Catalog filter's

// Filter's open
$('.common-side-button').on('touchstart', function() {
	let menu = $('#common_side_menu');
	let menuBtn = $(this).siblings('.common-side-button');
	if ( !menu.hasClass('active') ) {
		$(this).fadeOut(200);
		menu.addClass('active');
		if ( window.matchMedia('screen and (max-width: 767px)').matches ) {
			setTimeout(function() {
				menuBtn.fadeIn(200);
				$('body').addClass('fixed');
			}, 600);
		}
	} else {
		$(this).fadeOut(200);
	    menu.removeClass('active');
	    $('body').removeClass('fixed');
	    setTimeout(function() {
			menuBtn.fadeIn(200);
		}, 600);
	}
});

// Filter's close
$(document).on('touchstart', function(e) {
	let filters = $('#catalog .aside-wrapper');
	let filtersButton = $('#aside_button_filters');
	let catalogBtn = $('#aside_button_catalog');
    if( filters.hasClass('active') 
    	&& $(e.target).closest(filtersButton).length == 0 
    	&& $(e.target).closest(filters).length == 0 
    	&& window.matchMedia('screen and (min-width: 768px)').matches ) {
	    	catalogBtn.fadeOut(200);
	        filters.removeClass('active');
	        $('body').removeClass('fixed');
	        setTimeout(function() {
		        filtersButton.fadeIn(200);
		    }, 600);
    }
});

$(document).ready(function() {

	// Product slider
	var productSwiper = new Swiper('.product-slider', {
		slidesPerView: 2,
		spaceBetween: 15,
		speed: 600,
		loop: true,
		autoplay: {
		  delay: 8000,
		  disableOnInteraction: false
		}
	});

});
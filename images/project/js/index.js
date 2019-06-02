$(document).ready(function() {
	
	/* testimonial ======================================= */
	$('.carousel').carousel();
	
	/* One Page Navigation Setup ======================================= */
	$('#main-nav').singlePageNav({
		offset: 50,
		filter: ':not(.external)',
		speed: 750,
		currentClass: 'active',
		beforeStart: function() {},
		onComplete: function() {}
	});
	
	/* Bootstrap Affix ======================================= */		
	$('#navbar').affix({
		offset: {
			top: $('#topbar').outerHeight(),
		}
	});
		
	/* Smooth Hash Link Scroll ======================================= */	
	$('.smooth-scroll').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
						scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
		
	$('.nav a').on('click', function() {
		if ($('.navbar-toggle').css('display') != 'none') {
			$(".navbar-toggle").click();
		}
	});
	
	/* Menu navigation ======================================= */	
	$(window).scroll(function(){
		if ($(window).scrollTop()<=60){
			var wi5 = $(window).width();
			if (wi5 >= 768){
				$('#main-nav').addClass('mymenu');
			}	
		}
		else{
			$('#main-nav').removeClass('mymenu');    
		}
	});
	$('.navbar-toggle').click(function(){
		if($('#main-nav').hasClass('mymenu')){
			$('#main-nav').removeClass('mymenu');
		}
	});    
	
	/* PieChart ==============================================*/	
	$('.chart').easyPieChart({
		size: 140,
		animate: 2000,
		lineCap: 'butt',
		scaleColor: false,
		barColor: '#2AAFC3',
		trackColor: '#f2f2f2',
		lineWidth: 15
	}); 
	
	
	
//==================== Work Section Slider ========================//
$(document).ready(function(){
	  $('#project-slider').flexslider({
	    animation: "slide",
	    controlNav: "false",
	    DirectionNav: "true"
	  });
});


//==================== Work Section Filter ========================//
$(function () {
	var filterList = {
		init: function () {
			// MixItUp plugin
			// http://mixitup.io
			$('#portfoliolist').mixitup({
				targetSelector: '.portfolio',
				filterSelector: '.filter',
				effects: ['fade'],
				easing: 'snap',
				// call the hover effect
				onMixEnd: filterList.hoverEffect()
			});				
		},
		hoverEffect: function () {
		}
	};
	// Run the show!
	filterList.init();
});
	
});
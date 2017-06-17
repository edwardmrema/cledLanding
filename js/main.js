$(document).ready(function(){

	$('section#screenshots a').on('click', function(){

		$('div#modal img').attr('src', $(this).attr('data-image-url') );

	});

	var nav=$('.navbar-fixed-top');
	var distance= $('.navbar-fixed-top').offset();
	if(distance.top>=300){
		nav.addClass('effect');
	}

	$(window).scroll(function(){

			var scroll =$(window).scrollTop();

			if(scroll >=300){

				nav.addClass('effect');

			}else{

				nav.removeClass('effect');
			}
	});



	$('#about .blue-circle').waypoint(function(){

		$('#about .blue-circle').addClass('animated wobble')
	}, {
		offset:'50%'

	})


	
	$('.item-feature').waypoint(function(){

		$(this.element).addClass('animated fadeInUp')
	}, {
		offset:'50%'

	})


	$('.feature-image img').waypoint(function(){

		$('.feature-image img').addClass('animated rubberBand')
	}, {
		offset:'50%'

	})


	$('#screenshots .col-xs-4').waypoint(function(){

		$('#screenshots .col-xs-4').addClass('animated zoomIn')
	}, {
		offset:'50%'

	})	
});

smoothScroll.init({



	speed:700,
	easing:'easeInOutQuad',
	updateURL: false,
	offset:0


});
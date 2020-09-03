jQuery(window).trigger('resize').trigger('scroll');

var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	orientation: 'right'
});

$('.owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	responsive: {
		0: {
			items: 1
		},
		600: {
			items: 3
		},
		1000: {
			items: 2
		}
	}
});


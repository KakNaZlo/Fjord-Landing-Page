//iphone-slider
let colors = ['#26e6e6', '#a579c7', '#a94177'];
$('.iphone-slider-content').slick();
$('.iphone-section-container').on('beforeChange', function(event, slick, currentSlide, nextSlide){	
	$('.iphone-section-container').css('background-color', colors[nextSlide]);
});

//quotes-blocks-slider
$('.quotes-blocks-slider').slick({
	centerMode:true,
	slidesToShow: 1,
	speed: 3000,
	infinite: true,
	cssEase: 'linear',
	variableWidth: true,
	autoplay: true,
	autoplaySpeed: 2000,	
});



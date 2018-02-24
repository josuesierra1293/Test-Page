var count = 0
$('imagesCarousel').carousel({height: '100%'})
$('.carousel.carousel-slider').carousel({fullWidth: true})



function cuenta(){
	if(count == 5){
    $('.carousel').carousel('next', 1); // Move next n times
    count = 0
}else{
	count ++
}
}

function ini(){
	cuenta();
	setInterval("cuenta()",1000);
}

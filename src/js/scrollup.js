function backToTop(){
	let button= $('.scroll-up');
	$(window).on('scroll',() => {
		if ($(this).scrollTop()>=50){
			button.fadeIn();
		} else {
			button.fadeOut();
		}
	});
	button.on('click', (e) => {
e.preventDefault();
$('html').animate({scrollTop:0}, 400)
	})

}
backToTop();

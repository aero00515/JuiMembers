 $('a[href*=#]').click(function(e) {
 	var target = $(this).attr('href');
 	e.preventDefault();

 	$('html, body').animate({
 		scrollTop: $(target).offset().top-50
 	}, 400);
 });
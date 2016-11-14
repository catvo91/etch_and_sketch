$(document).ready(function(){
	var i = 1;
	var setting = 0;
	while (i <= 500) {
		$('#smallWrapper').append("<div class = 'grid'> </div>");
		i++;
	}
	$('.buttons').click(function(){
		$(this).toggleClass('highlight');
	})
	$('#norm').click(function(){
		if (setting === 1) {
			setting = 0;
		} else {
			setting = 1;
		}
		console.log(setting);
			if (setting === 1) {
				$('.grid').mouseenter(function() {
					$(this).addClass('etch');
				})		
			}
	})

	$('#fade').click(function(){
		if (setting === 2) {
			setting = 0;
		} else {
			setting = 2;
		}
		console.log(setting);
		if (setting === 2) {
			$('.grid').mouseenter(function(){
				$(this).fadeTo('slow', 0.5);
			})
			$('.grid').mouseleave(function(){
				$(this).fadeTo('slow', 1);
			})
		}
	})
	$('#clear').click(function(){
		$('.grid').removeClass('etch');
	})

});


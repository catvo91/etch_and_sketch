$(document).ready(function(){
	var i = 1;
	var setting = 0;
	var rainbow = ["#dc8c8c", "#918cdc", "#3bb980", "#e6db3b", "#e6ab3b", "#ea9be7"];
	while (i <= 625) {
		$('#smallWrapper').append("<div class = 'grid'> </div>");
		i++;
	}
	$('.buttons').click(function(){
		if ($(this).hasClass('highlight')) {
    		$(this).removeClass('highlight');
    	} 
    	else {
    		$('.highlight').removeClass('highlight');
	    	$(this).addClass('highlight');
		}
	})
	$('#norm').click(function(){
		if (setting === 1) {
			setting = 0;
		} else {
			setting = 1;
		}
		console.log(setting);
	})
		$('#fade').click(function(){
		if (setting === 2) {
			setting = 0;
		} else {
			setting = 2;
		}
		console.log(setting);
	})
		$('#rainbow').click(function(){
		if (setting === 3) {
			setting = 0;
		} else {
			setting = 3;
		}
		console.log(setting);
	})
		$('#epilepsy').click(function(){
		if (setting === 4) {
			setting = 0;
		} else {
			setting = 4;
		}
		console.log(setting);
	})
		$('#emo').click(function(){
		if (setting === 5) {
			setting = 0;
		} else {
			setting = 5;
		}
		console.log(setting);
	})
	$('#clear').click(function(){
		$('.grid').removeClass('etch');
		$('.grid').css('opacity', 1);
		$('.grid').css('background-color', 'pink');
	})
	$('.grid').mouseenter(function() {
		if (setting === 1) {
			$(this).css('background-color', 'red');
		}
		else if (setting === 2)
		{
			$(this).fadeTo('slow', 0.5);
		}
		else if (setting === 3)
		{
			var random = rainbow[Math.floor(Math.random() * rainbow.length)];
			$(this).css('background-color', random);
		}
		else if (setting === 4)
		{
			var random = rainbow[Math.floor(Math.random() * rainbow.length)];
			$(this).addClass('etch');
			$('.etch').css('background-color', random);
		}
		else if (setting === 5)
		{
			var currentOpacity = $(this).css('opacity');
			$(this).css('background-color', 'red');
			$(this).css('opacity', currentOpacity - 0.1);
		}
	})
	$('.grid').mouseleave(function(){
		if (setting === 2) {
			$(this).fadeTo('slow', 1);
		}
	})
});




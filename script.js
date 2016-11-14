$(document).ready(function(){
	var i = 1;
	var j = 1;
	var setting = 1;
	var rainbow = ["#dc8c8c", "#918cdc", "#3bb980", "#e6db3b", "#e6ab3b", "#ea9be7"];
	var size = 3;
	var hue = 1;
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
		$('.grid, .grid2').removeClass('etch');
		$('.grid, .grid2').css('opacity', 1);
		$('.grid, .grid2').css('background-color', 'pink');
	})
	$('.grid, .grid2').mouseenter(function() {
		if (setting === 1 && hue === 1) {
			$(this).css('background-color', 'red');
		}
		else if (setting === 1 && hue === 2) {
			$(this).css('background-color', '#ad6ead');
		}
		else if (setting === 1 && hue === 3) {
			$(this).css('background-color', '#8ba1e2');
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
		else if (setting === 5 && hue === 1)
		{
			var currentOpacity = $(this).css('opacity');
			$(this).css('background-color', 'red');
			$(this).css('opacity', currentOpacity - 0.2);
		}
		else if (setting === 5 && hue === 2)
		{
			var currentOpacity = $(this).css('opacity');
			$(this).css('background-color', '#ad6ead');
			$(this).css('opacity', currentOpacity - 0.2);
		}
		else if (setting === 5 && hue === 3)
		{
			var currentOpacity = $(this).css('opacity');
			$(this).css('background-color', '#8ba1e2');
			$(this).css('opacity', currentOpacity - 0.2);
		}
	})
	$('.grid, .grid2').mouseleave(function(){
		if (setting === 2) {
			$(this).fadeTo('slow', 1);
		}
	})
	$('#size1').click(function(){
		size = 1;
		$('.grid').remove();
		console.log(size);
		console.log(hue);
		console.log(setting); //can i do this with a for loop? was thinking size[i] but would i need an array? cuz size is a string and i would be a number
		while (j <= 16) {
			$('#smallWrapper').append("<div class = 'grid2'> </div>");
			j++;
		}
	})
	$('#size2').click(function(){
		size = 2;
		console.log(size);
		$('#choice').replaceWith('<div id = "choice"> 16 x 16 </div>')
	})
	$('#size3').click(function(){
		size = 3;
		console.log(size);
		$('#choice').replaceWith('<div id = "choice"> 25 x 25 </div>')
	})
	$('#red').click(function(){
		hue = 1;
		$('#choice2').replaceWith('<div id = "choice2"> Red </div>')
		console.log(hue); //can i do this with a for loop? was thinking size[i] but would i need an array? cuz size is a string and i would be a number
	})
	$('#purple').click(function(){
		hue = 2;
		console.log(hue);
		$('#choice2').replaceWith('<div id = "choice2"> Purple </div>')
	})
	$('#blue').click(function(){
		hue = 3;
		console.log(hue);
		$('#choice2').replaceWith('<div id = "choice2"> Blue </div>')
	})
});






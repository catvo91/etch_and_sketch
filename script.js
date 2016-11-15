$(document).ready(function(){
	var i = 1;
	var setting = 1;
	var rainbow = ["#dc8c8c", "#918cdc", "#3bb980", "#e6db3b", "#e6ab3b", "#ea9be7"];
	var hue = 1;
	var sketch = function() {
	$('.grid').mouseenter(function() {
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
	$('.grid').mouseleave(function(){
		if (setting === 2) {
			$(this).fadeTo('slow', 1);
		}
	})
}
	while (i <= 625) {
		$('#smallWrapper').append("<div class = 'grid'> </div>");
		i++;
	}
	sketch();
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
	})
		$('#fade').click(function(){
		if (setting === 2) {
			setting = 0;
		} else {
			setting = 2;
		}
	})
		$('#rainbow').click(function(){
		if (setting === 3) {
			setting = 0;
		} else {
			setting = 3;
		}
	})
		$('#epilepsy').click(function(){
		if (setting === 4) {
			setting = 0;
		} else {
			setting = 4;
		}
	})
		$('#emo').click(function(){
		if (setting === 5) {
			setting = 0;
		} else {
			setting = 5;
		}
	})
	$('#clear').click(function(){
		$('.grid').removeClass('etch');
		$('.grid').css('opacity', 1);
		$('.grid').css('background-color', 'pink');
	})
	$('#size1').click(function(){
		$('#choice').replaceWith('<div id = "choice"> 5 x 5 </div>')
		i = 1;
		$('.grid').remove();
		while (i <= 25) {
			$('#smallWrapper').append("<div class = 'grid'> </div>");
			$('.grid').css('height', 125);
			$('.grid').css('width', 125);
			$('#smallWrapper').css('height', 625)
			i++;
		}
		sketch();
	})
	$('#size2').click(function(){
		i = 1;
		$('#choice').replaceWith('<div id = "choice"> 10 x 10 </div>')
		$('.grid').remove();
		while (i <= 100) {
			$('#smallWrapper').append("<div class = 'grid'> </div>");
			$('.grid').css('height', (62.5));
			$('.grid').css('width', (62.5));
			$('#smallWrapper').css('height', 630)
			i++;
		}
		sketch();
	})
	$('#size3').click(function(){
		i = 1;
		$('#choice').replaceWith('<div id = "choice"> 25 x 25 </div>')
		$('.grid').remove();
		while (i <= 625) {
			$('#smallWrapper').append("<div class = 'grid'> </div>");
			$('.grid').css('height', (25));
			$('.grid').css('width', (25));
			$('#smallWrapper').css('height', 625)
			i++;
		}
		sketch();
	})
	$('#red').click(function(){
		hue = 1;
		$('#choice2').replaceWith('<div id = "choice2"> Red </div>')
	})
	$('#purple').click(function(){
		hue = 2;
		$('#choice2').replaceWith('<div id = "choice2"> Purple </div>')
	})
	$('#blue').click(function(){
		hue = 3;
		$('#choice2').replaceWith('<div id = "choice2"> Blue </div>')
	})
});





$(document).ready(function(){
	var i = 1;
	while (i <= 500)
	{
		$('#smallWrapper').append("<div class = 'grid'> </div>");
		i++;
	}
	$('.grid').mouseenter(function() {
		$(this).addClass('etch');
	})
});
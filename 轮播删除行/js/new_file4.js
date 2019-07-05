$(function(){
	$('ul').mouseenter(function(){
		$('div').slideDown('slow');
	})
	$('ul').mouseleave(function(){
		$('div').slideUp('slow');
	})
})

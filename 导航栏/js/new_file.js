$(function(){
	$('.menu').mouseenter(function(){
		$(this).children("ul").show()
	})
		$('.menu').mouseleave(function(){
		$(this).children("ul").hide()
	})
})

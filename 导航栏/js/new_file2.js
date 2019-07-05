$(function(){
	$('.menu').click(function(){
		$(this).children("ul").show()
		$(this).siblings().children("ul").hide()
	})
})
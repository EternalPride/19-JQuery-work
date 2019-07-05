$(function(){
	$('li').mouseenter(function(){
		var n=($(this).index())*71+5+2*($(this).index())
		$('#zydli1').stop(true,true).animate({'left':n+'px'},800)
	})
	$('li').mouseleave(function(){
		$('#zydli1').stop(true,true).animate({'left':'10px'},800)
	})
})

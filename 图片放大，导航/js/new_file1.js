$(function(){
	var $li=$('#zyddiv1 li');
	$li.each(function(i){
		$(this).css('background-image','url(img/'+(i+1)+'.jpg)')
	})
	$li.mouseenter(function(){
		$(this).stop(true,true).animate({'width':'800px'},600).siblings().stop(true,true).animate({'width':'50px'},600)
		$(this).addClass('act').siblings().removeClass('act')
	})
	$li.mouseleave(function(){
		$li.stop(true,true).animate({'width':'200px'})
		$li.removeClass('act')
	})
})

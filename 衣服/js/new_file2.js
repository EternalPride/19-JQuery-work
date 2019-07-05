$(function(){
	var $li=$('#zydmain li');
	$li.mouseenter(function(){
		$li.css('opacity','0.4')
		$(this).css('opacity','1')
	})
	$li.mouseleave(function(){
		$li.css('opacity','1')
	})
})

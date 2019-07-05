$(function(){
	var $li=$('#zydleft li');
	$li.mouseenter(function(){
		$(this).css('background-color','#CCC')
		$('#zydcenter li').hide()
		var $img=$(this).index();
		$('#zydcenter li:eq('+$img+')').show()
	})
	$li.mouseleave(function(){
		$(this).css('background-color','white')
	})
	
	
	var $li=$('#zydright li');
	$li.mouseenter(function(){
		$(this).css('background-color','#CCC')
		$('#zydcenter li').hide()
		var $img=$(this).index()+9;
		$('#zydcenter li:eq('+$img+')').show()
	})
	$li.mouseleave(function(){
		$(this).css('background-color','white')
	})
})

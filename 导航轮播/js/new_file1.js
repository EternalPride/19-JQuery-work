$(function(){
	$('input').eq(0).click(function(){
		var $li=$('#nav li:first-child')
		$li.animate({marginLeft:-1000+'px'},500,function(){
			$('#nav li').eq(0).appendTo('ul');
			$li.css('margin-left',0);
		})
	})
	$('input').eq(1).click(function(){
		var $li=$('#nav li:last-child')
		$li.prependTo('ul');
	    $li.eq(0).css({'margin-left':-1000+'px'},500);
		$('#nav li').animate({marginLeft:0+'px'},500,function(){	
		})
	})
})

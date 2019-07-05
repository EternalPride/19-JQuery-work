$(function(){
	$('input').eq(0).click(function(){
		var $li=$('#nav li:first-child')
		$li.animate({marginTop:-1000+'px'},500,function(){
			$('#nav li').eq(0).appendTo('ul');
			$li.css('margin-top',0);
		})
	})
	$('input').eq(1).click(function(){
		var $li=$('#nav li:last-child')
		$li.prependTo('ul');
	    $li.eq(0).css({'margin-top':-1000+'px'},500);
		$('#nav li').animate({marginTop:0+'px'},500,function(){	
		})
	})
})
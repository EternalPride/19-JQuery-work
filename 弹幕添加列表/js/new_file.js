$(function(){
	
	$('#fabu').click(function(){
		var randy=Math.random()*200
		$p=$('<p></p>');
		var talk=$('textarea').val();
		$p.html(talk)
		$p.css({'font-size':'30',
		        'position': 'absolute',
		         left:'500px',
		         top:randy
		     })
		.animate({'left':0},3000,
		         function(){
		         	$(this).remove()
		         })
		.appendTo('#show')
	})
})

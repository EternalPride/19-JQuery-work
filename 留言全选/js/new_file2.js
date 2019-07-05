$(function(){
	$('#zydgo').click(function(){
		var tex=$("textarea");
		var con=$("#zydcontent").html();
		$('#zydcontent').html('<h1>'+tex.val()+'</h1>'+'<br />')
	})
	$('#zydtex').click(function(){
		$(this).text("")
	})
})

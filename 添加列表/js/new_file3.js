$(function(){
	$('input').click(function(){
    var $zydp=$('<p>滚动公告</p>').appendTo('#zydshow')
    $('#zydshow')[0].scrollTop=$('#zydshow')[0].scrollHeight
	})
	
})

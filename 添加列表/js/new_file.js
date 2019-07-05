$(function(){
	$('#zydinput').click(function(){
		var len=$('tr').size();
		var $oneclone=$('tr:eq(1)').clone(true);
		$oneclone.find('td:eq(0)').text(len)
		$oneclone.appendTo('table')
	})
	$('tr:contains(删除)').click(function(){
		$(this).remove()
	})
})

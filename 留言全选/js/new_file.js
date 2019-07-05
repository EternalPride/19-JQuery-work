$(function(){
	 $all=$('#zydall');
     $check=$('#zydopt input');
	//全选
	$('input:button').eq(0).click(function(){
		$('#zydopt input,#zydall').prop('checked',true)
	})
	//不选
	$('input:button').eq(1).click(function(){
		$('#zydopt input,#zydall').prop('checked',false)
	})
	//反选
	$('input:button').eq(2).click(function(){
		$check.each(function(){
			$(this).prop('checked',!$(this).prop('checked'))
			allcheckbox();
			//调用函数
			
		})
	})
	//获取元素的值
	$('input:button').eq(3).click(function(){
		$('#zydopt input:checked').each(function(){
			alert($(this).val())
		})
	})
	$all.click(function(){
		$check.prop('checked',$(this).prop('checked'))
	})
	//下面所有checkbox写事件
$check.click(function(){
	allcheckbox();
})
function allcheckbox(){
	var num=$check.length;
	if($('#zydopt input:checked').length==num)
	{
		$all.prop('checked',true)
	}
	else
	{
		$all.prop('checked',false)
	}
}
})

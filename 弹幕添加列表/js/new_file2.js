$(function(){
	$('#btn1').click(function(){
		$('#inset').show();
	})
	$('#btn2').click(function(){
				    $a=$('<tr></tr>');
					$b=$('<td></td>');
					$b2=$('<td></td>');
					$b3=$('<td class="td1">删除</td>');
					var name=$('#classname').val();
					var sch=$('#school').val();
					$b.html(name);
					$b2.html(sch);
					$b.appendTo($a);
					$b2.appendTo($a);
					$b3.appendTo($a);
					$a.appendTo('#table1');
					$('#inset').hide(400);
				})
				$('.td1').click(function(){
					$(this).parent().detach();

			})

})

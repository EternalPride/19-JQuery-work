$(function(){
	var $mid=$('#middle')
	var $mask=$('#mask')
	var $large=$('#large')
	
	$('#small img').click(function(){
			var index=$(this).index();
			$('#middle img').attr('src','images/'+(index+1)+'.jpg');
			$('#large img').attr('src','images/'+(index+1)+'.jpg')
			})
	
	$mid.hover(function(){
		$large.show()
	},function(){
		$large.hide()
	})
	$mid.mousemove(function(ev){
	    $mask.css('display','block');
		var X=ev.pageX-$mask.width()/2;
		var Y=ev.pageY-$mask.height()/2;
		
		if(X<0)
		{
			X=0;
		}
		else if(X>$mid.width()-$mask.width())
		{
			X=$mid.width()-$mask.width()
		}
		if(Y<0)
		{
			Y=0;
		}
		else if(Y>$mid.height()-$mask.height())
		{
			Y=$mid.height()-$mask.height()
		}
		$('#mask').css('left',X+'px');
		$('#mask').css('top',Y+'px');
		var percentX=X/($mid.width()-$mask.width());
		var percenty=Y/($mid.height()-$mask.height());
		
		var bigimgwidth=$large.find('img').width()
		var bigimgheight=$large.find('img').height()
		$large.find('img').css({
			left:-percentX*(bigimgwidth-$large.width()),
			top:-percenty*(bigimgheight-$large.height())
		})
	})
})

$(function(){
	//选项卡
	$('#zydsection h2 span').mouseenter(function(){
		var index=$(this).index();
		$(this).addClass("zydactive").siblings().removeClass("zydactive")
		$('#zydsection .zydsecdiv div').eq(index).addClass('zydactivediv').siblings().removeClass('zydactivediv')
	})
	
	
	//图片轮播
	
	var i=0;
	function auto(){
		i++;
		if(i==$('#play img').length)
		{i=0}
		$('#play img').eq(i).addClass('ac').siblings().removeClass('ac')
		$('li').eq(i).addClass('ab').siblings().removeClass('ab')
	}
	setInterval(auto,1000);

})
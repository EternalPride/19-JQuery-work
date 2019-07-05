$(function(){
	$ul=$('#nav #pic')
	var ind=0;
	var tabi=0;
	var olddate=new Date();
	$('#next').click(function(){
		ind++;
		tabi++;
		auto();
	})
	$('#prev').click(function(){
		ind--;
		tabi--;
		auto();
	})
	$('#nav .tab li').mouseenter(function(){
		var index=$(this).index()
		$('#nav .tab li').eq(index).addClass('cur').siblings().removeClass('cur');
		$ul.animate({'marginLeft':-(index+1)*1000+'px'});
		ind=tabi=index;
	})
	function auto(){
		$ul.animate({
			'marginLeft':-(ind+1)*1000+"px"
		},function(){//youwenti 
			if(ind==4)
			{
				ind=0;
				$ul.css('marginLeft','-1000px')
			}
			if(ind==-1)
			{
				ind=3;
				$ul.css('marginLeft','-4000px')
			}
		})
		if(tabi==4)
		{
			tabi=0
		}
		if(tabi==-1)
		{
		tabi=3	
		}
		$('#nav .tab li').eq(tabi).addClass('cur').siblings().removeClass('cur')
	}
	
})

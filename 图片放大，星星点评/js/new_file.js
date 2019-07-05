$(function(){
	var $zydimgbig1;
	var $zydimgbig2;
	var $zydimgbig3;
	var $zydimgbig4;
	$('#zydimg1').mouseover(function(e){
		$zydimgbig1=$('<img src="img/big/1.jpg">')
		$zydimgbig1.css({
			'border':'1px solid white',
			'border-radius':'20px',
			'position':'absolute',
			'left':e.pageX+2+'px',
			'top':e.pageY+3+'px'
		})
		.appendTo('body')
	})
	$('#zydimg1').mouseout(function(){
		$zydimgbig1.remove()
	})
	
	$('#zydimg1').mousemove(function(e){
		$zydimgbig1.css({'left':e.pageX+2+'px',
			            'top':e.pageY+3+'px'})
	})
	//第二张图
		$('#zydimg2').mouseover(function(e){
		$zydimgbig2=$('<img src="img/big/2.jpg">')
		$zydimgbig2.css({
			'border':'1px solid white',
			'border-radius':'20px',
			'position':'absolute',
			'left':e.pageX+2+'px',
			'top':e.pageY+3+'px'
		})
		.appendTo('body')
	})
	$('#zydimg2').mouseout(function(){
		$zydimgbig2.remove()
	})
	
	$('#zydimg2').mousemove(function(e){
		$zydimgbig2.css({'left':e.pageX+2+'px',
			            'top':e.pageY+3+'px'})
	})
	//第三张图
		$('#zydimg3').mouseover(function(e){
		$zydimgbig3=$('<img src="img/big/3.jpg">')
		$zydimgbig3.css({
			'border':'1px solid white',
			'border-radius':'20px',
			'position':'absolute',
			'left':e.pageX+2+'px',
			'top':e.pageY+3+'px'
		})
		.appendTo('body')
	})
	$('#zydimg3').mouseout(function(){
		$zydimgbig3.remove()
	})
	
	$('#zydimg3').mousemove(function(e){
		$zydimgbig3.css({'left':e.pageX+2+'px',
			            'top':e.pageY+3+'px'})
	})
	//第四张图
		$('#zydimg4').mouseover(function(e){
		$zydimgbig4=$('<img src="img/big/4.jpg">')
		$zydimgbig4.css({
			'border':'1px solid white',
			'border-radius':'20px',
			'position':'absolute',
			'left':e.pageX+2+'px',
			'top':e.pageY+3+'px'
		})
		.appendTo('body')
	})
	$('#zydimg4').mouseout(function(){
		$zydimgbig4.remove()
	})
	
	$('#zydimg4').mousemove(function(e){
		$zydimgbig4.css({'left':e.pageX+2+'px',
			            'top':e.pageY+3+'px'})
	})
})

$(function(){
	function zydautofall(){
		var $zydsnow=$('<img src="img/s1.png">')
		var zydrandh=Math.random()*40
		var zydrandleft=Math.random()*$('body').width()
		$zydsnow.height(zydrandh)
		     .css({'position':'absolute'
		           ,'left':zydrandleft
		           ,'top':-20+'px'})
		     .animate({"top":$('body').height(),"opacity":0.2},3000,function(){
		     	$(this).remove()
		     })
		     .appendTo('body')
	}
	setInterval(zydautofall,100)
})

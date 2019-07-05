$(function() {
	$('div').mouseover(function(){
		$(this).addClass('zyd');
		$(this).prevAll().addClass('zyd');
		$(this).nextAll().removeClass('zyd');
	})
    $('div').mouseout(function(){
		$('div').removeClass('zyd');
})
//  $('div').click(function(){
//		$(this).addClass('zyd');
//		$(this).nextAll().removeClass('zyd');
//  })
})

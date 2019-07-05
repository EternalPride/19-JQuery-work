$(function(){
   var $li=$('#nav li')
   $li.mouseenter(function(){
   	$(this).find('span').stop(true,true).animate({'top':'0'})
   })
   $li.mouseleave(function(){
   	$(this).find('span').stop(true,true).animate({'top':'40px'})
   })
   $(document).keydown(function(){
   var code=e.keyCode
   if(flag==true)
   {
   	if(code>=49&&code<=57)
   	{
   		$('#nav li').eq(code-49).mouseenter()
   	}
   	flag=false;
   }
 })
$(document).keyup(function(e){
	flag=true;
	$('#nav li').mouseleave()
})
})

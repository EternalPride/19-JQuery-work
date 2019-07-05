$(function(){
   var $li=$('#nav li')
   $li.mouseenter(function(){
   	$(this).find('span').stop(true,true).animate({'top':'0'})
   })
   $li.mouseleave(function(){
   	$(this).find('span').stop(true,true).animate({'top':'40px'})
   })
})

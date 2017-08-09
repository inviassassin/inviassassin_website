
$(document).ready(function(){
	$(".itemMenu li").on("click",function(e){
	 e.preventDefault();
  		$(this).find("ul").toggle();
	});
})
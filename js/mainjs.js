
$(document).ready(function(){
	$(".itemMenu li").on("click",function(e){
	 e.preventDefault();
  		$(this).find("ul").toggle();
	});

	$('#myCarousel').carousel({
                interval: 5000
        });
 
        $('#carousel-text').html($('#slide-content-0').html());
 
        //Handles the carousel thumbnails
       $('[id^=carousel-selector-]').click( function(){
            var id = this.id.substr(this.id.lastIndexOf("-") + 1);
            var id = parseInt(id);
            $('#myCarousel').carousel(id);
        });
 
 
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
                
                $(".thumbnail").removeAttr("style");
                $('#carousel-selector-'+id).css({"background-color": "yellow"});
        });
})
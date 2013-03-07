$(document).ready(function() {

	$('.js-scroll-ban').cycle({ 
	    fx:      'scrollHorz', 
	    timeout:  0, 
        pager:  '.scroll-nav',
        pagerAnchorBuilder: function(index, el) {
            return '<button></button>'; // whatever markup you want
        }
	});

    $(".scroll__main").scrollable().navigator({
        navi: ".scroll__nav",
        naviItem: 'button',
        activeClass: 'is-active',
        indexed: true
    });

    $(".scroll__slide").click(function(){
        if($(this).hasClass("is-active")) {
             $(this).removeClass("is-active");
        }
        else {
            $(this).addClass("is-active");
        }
       
    });

});
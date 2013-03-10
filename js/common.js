$(document).ready(function() {

// --------------------- Scroll banners ---------------------------- //
	$('.js-scroll-ban').cycle({ 
	    fx:      'scrollHorz', 
	    timeout:  0, 
        pager:  '.scroll-nav',
        pagerAnchorBuilder: function(index, el) {
            return '<button></button>'; // whatever markup you want
        }
	});

// --------------------- Scrollable test ---------------------------- //
    $(".scroll__main").scrollable().navigator({
        navi: ".scroll__nav",
        naviItem: 'button',
        activeClass: 'is-active',
        indexed: true
    });

// --------------------- Active test in scroll ---------------------------- //
    $(".scroll__slide").click(function(){
        if($(this).hasClass("is-active")) {
             $(this).removeClass("is-active");
        }
        else {
            $(this).addClass("is-active");
        }
    });

// --------------------- Input change ---------------------------- //
    // $('.code__input').change(function() {
    //    var text_length = $(this).val().length;
    //    if (text_length >= 9) {
    //         alert("YES");
    //    }
    //    else {
    //         alert("NO");
    //    }
    // });



});
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
    });

    // --------- Active test in scroll -------------
    $(".scroll__item").click(function(){
        if($(this).hasClass("is-active")) {
            $(this).removeClass("is-active");
        }
        else {
            $(this).parent().children(".scroll__item").removeClass("is-active");
            $(this).addClass("is-active");
        }
    });
    
    // ---- Scroll to next slide
    api = $('.scroll__main').data('scrollable');
    $('.scroll__item').click(function() {
        next = $(this).parent().next();
        api.seekTo(next, 700);
    });

// --------------------- Scrollable video ---------------------------- //
    $(".video-scroll").scrollable({
        prev: ".video-nav_prev",
        next: ".video-nav_next"
    });
    if ($(".video-scroll").length>0) {
      // Get the Scrollable control
      var scrollable_list_1 = $(".video-scroll").data("scrollable");
      // Set to the number of visible items
      var number_list = 3;
      // Handle the Scrollable control's onSeek event
      scrollable_list_1.onSeek(function(event, index) {
        // Check to see if we're at the end
        if (this.getIndex() >= this.getSize() - number_list) {      // Disable the Next link
          $(".video-nav_next").addClass("disabled");
        }
      });
      // Handle the Scrollable control's onBeforeSeek event
      scrollable_list_1.onBeforeSeek(function(event, index) {
        // Check to see if we're at the end
        if (this.getIndex() >= this.getSize() - number_list) { 
          // Check to see if we're trying to move forward
          if (index > this.getIndex()) {
            // Cancel navigation
            return false;
          }
        }
      });
    } 
    else {}


// --------------------- Products tabs ---------------------------- // 
    $(".tab1").show();
    $(".scroll-tabs li:first").addClass("is-active");
    $(".scroll-tabs li").click(function(){
        if ($(this).hasClass("is-active")) {
            return false;
        }
        else {
            $(".scroll-tabs li").removeClass("is-active");
            $(".js-tab-cont").slideUp();
            var active = $(this).attr("data-tab");
            $(this).addClass("is-active");
            $(active).slideDown();
        }
    });
// --------------------- Products tabs ---------------------------- // 
    $(".tab1").show();
    $(".prof-tab li:first").addClass("is-active");
    $(".prof-tab li").click(function(){
        if ($(this).hasClass("is-active")) {
            return false;
        }
        else {
            $(".prof-tab li").removeClass("is-active");
            $(".tab-cont").hide();
            var active = $(this).attr("data-tab");
            $(this).addClass("is-active");
            $(active).slideDown();
        }
    });

// --------------------- Scrollable products  ---------------------------- //
    $(".scroll-prod-wrap").each(function(){
        var current = $(this).children(".scroll-prod");
        var current_prev = $(this).children(".prod-prev");
        var current_next = $(this).children(".prod-next");
        current.scrollable({
            prev: current_prev,
            next: current_next
        });
    });
    
    // get product description
    $(".scroll-prod__item").click(function(){
        $(this).parent().children(".scroll-prod__item").removeClass("is-active");
        $(this).addClass("is-active");
        var descr = $(this).children(".hidden-text").html();
        $(this).parent().parent().parent().children(".scroll-message").html(descr);
    });
// --------------------- Input change ---------------------------- //
    $('.code__input').focusin(function() {
         $(this).next().fadeIn();
    });
    $('.code__input').focusout(function() {
        $(this).next().fadeOut();
        if($(this).val() == "") {
            $(this).next().removeClass("is-active");
        }

    });
    $('.code__input').keydown(function() {
        var text_length = $(this).val().length;
        if (text_length >= 8) {
            $(this).next().addClass("is-active");
        }
        else {}   
    });

// --------------------- Scrollable shop ---------------------------- //
    $(".scroll-shop").each(function(){
        var current = $(this).children(".js-scroll-shop");
        var prev = $(this).children(".prod-prev");
        var next = $(this).children(".prod-next");
        var nav = $(this).children(".scroll-nav_mod");
        current.scrollable({
            prev: prev,
            next: next
        }).navigator({
            navi: nav,
            naviItem: 'button',
            activeClass: 'is-active'
        });
    });
    


});
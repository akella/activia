$(document).ready(function() {
// masked input

$(".phone").mask("+ 38(099) 999-99-99",{placeholder:"."});


$('.js-aday').cycle({
        fx:      'scrollHorz', 
        timeout:  0, 
        next:  '.aday__next',
        prev:  '.aday__prev',
        speed: 400
    });

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

// --------------------- Scrollable shop for boutique pages ---------------------------- //
    $(".scroll-shop div").each(function(){
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
    

// ----------------add new form for test ----------------
    $(".children input:radio").click(function() {
         if ($(this).hasClass("children-true")) {
            $(".child").addClass("child_is-checked");
        }
        else {
            $(".child").removeClass("child_is-checked");
        }
    });


// ---------------add more children to new form-----------
    var a = new Array("Перша", "Друга", "Третя", "Четверта", "П'ята", "Шоста", "Сьома", "Восьма", "Дев'ята");

    $(".btn_add-child").click(function() {
        var html = $('.child__1:eq(0)').clone().appendTo('.child');
        var i = 0;
        $('.child__1').each(function(index, val) {
             $(this).children('span').text(a[i]);
             i++;
        });
        //html = html.wrap('<div class="child__1" />')
        //$('.child').after(html);
    });   
    $('#sendeverything').click(function () {
        error = 0;
        // $('.row__item').each(function(event) {
        //     alert('a');
        // });
        num1 = $('input[name=row__radio]:checked').length;
        if(num1==0){$('.row__item1').addClass('error');error = 1;} else{$('.row__item1').removeClass('error');}

        num2 = $('input[name=row__radio1]:checked').length;
        if(num2==0){$('.row__item2').addClass('error');error = 1;} else{$('.row__item2').removeClass('error');}


        num3 = $('input[name=row__radio2]:checked').length;
        if(num3==0){$('.row__item3').addClass('error');error = 1;} else{$('.row__item3').removeClass('error');}

        num4 = $('.row__item4 input[type=radio]:checked').length;
        if(num4 != 7){$('.row__item4').addClass('error');error = 1;} else{$('.row__item4').removeClass('error');}

        num5 = $('.row__item5 input[type=radio]:checked').length;
        if(num5 != 4){$('.row__item5').addClass('error');error = 1;} else{$('.row__item5').removeClass('error');}

        if(!error) {$('.popup_tnx').show();}
        else{
            $("html, body").animate({ scrollTop: $('.error:eq(0)').offset().top - 150 }, 1000);
        }
    });

    $('.popup__close').click(function (e) {
        $(this).parent().hide();
    });

});




/*
    Masked Input plugin for jQuery
    Copyright (c) 2007-2013 Josh Bush (digitalbush.com)
    Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
    Version: 1.3.1
*/
(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);
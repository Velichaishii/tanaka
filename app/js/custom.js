$(document).ready(function(){



    var doc = $(document),
        siteWrap = $(".site-wrap");
    var siteWrapOverlay = $(".site-wrap-overlay");
    var burgerMenuWrap = $(".burger-menu-wrap");
    var btnUp = $(".btn-up");
    var burgerMenuItem = $(".burger-menu__item");
    var burgerMenuListSL = $(".burger-menu__list_second-level");
    var burgerMenuListTL = $(".burger-menu__list_third-level");



    doc.click(function (e) {
        var target = $(e.target),
            popup = target.closest(".popup");
        popup_open = target.closest(".popup-open");

        if ((!popup.length > 0 ) && (!popup_open.length > 0 )) {
            $(".popup").removeClass("visible");
            siteWrap.removeClass("active");
            siteWrap.width('100%');
            siteWrapOverlay.fadeOut(300);
        }

    });



    $(".btn-burger-menu").click(function(){
        if(burgerMenuWrap.hasClass("visible") === true) {
            $(".popup").removeClass("visible");
            siteWrap.removeClass("active");
            siteWrap.width("100%");
            siteWrapOverlay.fadeOut(400);
        } else {
            burgerMenuWrap.addClass("visible");
            siteWrap.addClass("active");
            siteWrap.width(siteWrap.outerWidth());
            siteWrapOverlay.fadeIn(300);
        }

    });



    $(".btn-close").click(function(){
        $(".popup").removeClass("visible");
        siteWrap.removeClass("active");
        siteWrap.width('100%');
        siteWrapOverlay.fadeOut(400);
    });



    $(".menu__item-first-level").mousemove(function(){
        $(this).find(".menu__list-second-level").stop().fadeIn(200);
    });

    $(".menu__item-first-level").mouseout(function(){
        $(this).find(".menu__list-second-level").stop().fadeOut(200);
    });



    $(".menu__item-second-level").mousemove(function(){
        $(this).find(".menu__list-third-level").stop().fadeIn(200);
    });

    $(".menu__item-second-level").mouseout(function(){
        $(this).find(".menu__list-third-level").stop().fadeOut(200);
    });



    $(".btn-explode").click(function(e){
        if (($(this).closest(burgerMenuItem).hasClass("active")) || (!$(this).closest(burgerMenuItem).find(burgerMenuListSL).length) ) {
            $(this).closest(burgerMenuItem).find(burgerMenuListSL).stop().slideUp(400);
            $(this).closest(burgerMenuItem).removeClass('active');
        } else {
            $(this).closest(burgerMenuItem).find(burgerMenuListSL).stop().slideDown(400);
            $(this).closest(burgerMenuItem).addClass('active');
        }
        e.preventDefault();
    });



    $(".btn-explode").click(function(e){
        if (($(this).closest(burgerMenuItem).hasClass("active")) || (!$(this).closest(burgerMenuItem).find(burgerMenuListTL).length) ) {
            $(this).closest(burgerMenuItem).find(burgerMenuListTL).stop().slideUp(400);
            $(this).closest(burgerMenuItem).removeClass('active');
        } else {
            $(this).closest(burgerMenuItem).find(burgerMenuListTL).stop().slideDown(400);
            $(this).closest(burgerMenuItem).addClass('active');
        }
        e.preventDefault();
    });



    $(document).scroll(function() {
        if ($(window).scrollTop() > 500) {
            btnUp.fadeIn(400);
            btnUp.addClass("btn-up-visible");
        }
        else {
            btnUp.fadeOut(400);
            btnUp.removeClass("btn-up-visible");
        }
    });



    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500);
                    return false;
                }
            }
        });
    });



    $('[data-type="bg_paralax"]').each(function(){
        var $bgobj = $(this);
        var pos_this = $(this).offset().top;
        $(window).scroll(function() {
            var ww = $(window).width();
            if (ww < 959)
                return;
            var pos_window = $(window).scrollTop();
            if (pos_this < pos_window + 500 ) {
                var yPos = -((pos_this - $(window).scrollTop()) / $bgobj.data('speed')); //
                var coords = 'center '+ yPos + 'px';
                $bgobj.css("background-position", coords );
            }

        });
    });



});
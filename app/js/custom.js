$(document).ready(function(){



    var doc = $(document),
        siteWrap = $('.site-wrap');
    var siteWrapOverlay = $('.site-wrap-overlay');
    var burgerMenuWrap = $('.burger-menu-wrap');


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
        if(burgerMenuWrap.hasClass('visible') === true) {
            $(".popup").removeClass("visible");
            siteWrap.removeClass("active");
            siteWrap.width('100%');
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



    $(".btn-explode").click(function(e){
        if (($(this).closest(".burger-menu__item").hasClass("active")) || (!$(this).closest(".burger-menu__item").find(".burger-menu__list_second-level").length) ) {
            $(this).closest(".burger-menu__item").find(".burger-menu__list_second-level").stop().slideUp(400);
            $(this).closest(".burger-menu__item").removeClass('active');
        } else {
            $(this).closest(".burger-menu__item").find(".burger-menu__list_second-level").stop().slideDown(400);
            $(this).closest(".burger-menu__item").addClass('active');
        }
        e.preventDefault();
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
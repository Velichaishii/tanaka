$(document).ready(function(){
    $('[data-type="bg_paralax"]').each(function(){
        var $bgobj = $(this);
        var pos_this = $(this).offset().top;
        $(window).scroll(function() {
            var pos_window = $(window).scrollTop();
            if (pos_this < pos_window + 500 ) {
                var yPos = -((pos_this - $(window).scrollTop()) / $bgobj.data('speed')); //
                var coords = 'center '+ yPos + 'px';
                $bgobj.css("background-position", coords );
            }

        });
    });
});
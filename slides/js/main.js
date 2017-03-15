$(document).ready(function () {

    var n = $(".slider-slide-wrap").length,
        width = 680,
        newwidth = width * n;

    $('.slide-wrap').css({
        'width': newwidth
    });

    $(".slider-slide-wrap").each(function (i) {
        var thiswid = 680;
        $(this).css({
            'left': thiswid * i
        });

    });
    /*on scroll move the indicator 'shown' class to the
    most visible slide on viewport
    */
    $('.slider-wrap').scroll(function () {
        var scrollLeft = $(this).scrollLeft();
        $(".slider-slide-wrap").each(function (i) {
            var posLeft = $(this).position().left
            var w = $(this).width();
           
            if (scrollLeft >= posLeft && scrollLeft < posLeft + w) {
              $(this).addClass('shown').siblings().removeClass('shown');
            }
        });
    });
    /* on left button click scroll to the previous sibling of the current visible slide */
    $('#slider-left').click(function () {
        var $prev = $('.slide-wrap .shown').prev();

        if ($prev.length) {
            $('.slider-wrap').animate({
                scrollLeft: $prev.position().left
            }, 'slow');
        }
    });
    /* on right button click scroll to the next sibling of the current visible slide */
    $('#slider-right').click(function () {
        var $next = $('.slide-wrap .shown').next();

        if ($next.length) {
            $('.slider-wrap').animate({
                scrollLeft: $next.position().left
            }, 'slow');
        }
    });
});

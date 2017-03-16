/*background color changing according to mousemove

$('document').ready(function()
{var $win = $(window),
    w = 0,h = 0,
    rgb = [],
    getWidth = function() {
        w = $win.width();
        h = $win.height();
    };

$win.resize(getWidth).mousemove(function(e) {

    rgb = [
        Math.round(e.pageX/w * 255),
        Math.round(e.pageY/h * 255),
        150
    ];

    $(document.body).css('background','rgb('+rgb.join(',')+')');

}).resize();});

*/
/*moving text homepage*/

$('document').ready(function()
{var ob = $(".intro"),
    tw = ob.width(),
    ww = ob.parent().outerWidth();

function animate() {
    ob.animate({
        right: '+=' + ww
    }, 7000, 'linear');
    ob.animate({
        right: '0px'
    }, 1, animate);
};

$(animate);

ob.mouseenter(function() {
    ob.stop(true, false);
});

ob.mouseleave(function() {
    animate();
});

});

/*background color changing according to mousemove*/

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



/*draggable*/


var selected = null, // Object of the element to be moved
    x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
    x_elem = 0, y_elem = 0; // Stores top, left values (edge) of the element

// Will be called when user starts dragging an element
function _drag_init(elem) {
    // Store the object of the element which needs to be moved
    selected = elem;
    x_elem = x_pos - selected.offsetLeft;
    y_elem = y_pos - selected.offsetTop;
}

// Will be called when user dragging an element
function _move_elem(e) {
    x_pos = document.all ? window.event.clientX : e.pageX;
    y_pos = document.all ? window.event.clientY : e.pageY;
    if (selected !== null) {
        selected.style.left = (x_pos - x_elem) + 'px';
        selected.style.top = (y_pos - y_elem) + 'px';
    }
}

// Destroy the object when we are done
function _destroy() {
    selected = null;
}

// Bind the functions...
document.getElementById('draggable-element').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element-1').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element-2').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element-3').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element-4').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.getElementById('draggable-element-5').onmousedown = function () {
    _drag_init(this);
    return false;
};

document.onmousemove = _move_elem;
document.onmouseup = _destroy;

/*mute

$('document').ready(function(){
  var audio = document.getElementById('background_audio');

document.getElementById('mute').addEventListener('click', function (e)
{
    e = e || window.event;
    audio.muted = !audio.muted;
    e.preventDefault();
}, false);
});
*/

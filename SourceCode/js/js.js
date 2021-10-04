/* $(document).ready(function () {
    $('img').bind('contextmenu', function (e) {
        return false;
    });
}); */


var movementStrength = 25;
var w = $(window).width();
var h = $(window).height();

$(window).mousemove(function (e) {
    var pageX = (e.pageX - w / 4) / w / 4;
    var pageY = (e.pageY - h / 4) / h / 4;
    var newvalueX = pageX * movementStrength;
    var newvalueY = pageY * movementStrength;
    $('.top-image').css({
        left: newvalueX + 'px',
        top: newvalueY + 'px'
    });
});

/* PreLoader start */

(function ($) {
    'use strict';

    // Preloader
    $(window).on('load', function () {
        $('#preloader')
            .delay(850)
            .fadeOut('slow', function () {
                $(this).remove();
            });
    });
})(window.jQuery);


/* PreLoader End */

const observer = lozad();
observer.observe();


/* Dark mode start */



document.addEventListener("DOMContentLoaded", function (event) {
    document.documentElement.setAttribute("data-theme", "dark");
});


/* Scoll up */

var btn = $('#buttonS');

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});


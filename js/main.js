/*global $, window, WOW, document*/

$(window).on('load', function () {
    "use strict";
  
    ////////// Loader

    $('.loader div').fadeOut(800, function () {
        $('.loader').fadeOut(1000);
        $('body').css({
            "overflow-y": "scroll"
        });
    });
});

$(window).scroll(function () {

    "use strict";

    ////////// Navbar

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 90) {
        $('.diy-navbar').addClass('bg-white shadow');
        $('.diy-navbar .navbar-brand').removeClass('text-white');
        $('.navbar-nav .nav-item .nav-link').removeClass('text-white');
    } else {
        $('.diy-navbar').removeClass('bg-white shadow');
        $('.diy-navbar .navbar-brand').addClass('text-white');
        $('.navbar-nav .nav-item .nav-link').addClass('text-white');
    }
});

$(document).ready(function () {
    "use strict";
    
    ////////// Navbar

    var scrollTop = $(window).scrollTop();

    if (scrollTop > 90) {
        $('.diy-navbar').addClass('bg-white shadow');
        $('.diy-navbar .navbar-brand').removeClass('text-white');
        $('.navbar-nav .nav-item .nav-link').removeClass('text-white');
    } else {
        $('.diy-navbar').removeClass('bg-white shadow');
        $('.diy-navbar .navbar-brand').addClass('text-white');
        $('.navbar-nav .nav-item .nav-link').addClass('text-white');
    }
    
    ////////// FAQs Section

    $('.colap').click(function () {

        if ($(this).hasClass('active')) {
            
            $('.plus').removeClass('active');
            $('.colap').removeClass('active');
            $(this).children('span').removeClass('active');
            
        } else {
            
            $('.plus').removeClass('active');
            $(this).addClass('active');
            $(this).children('span').addClass('active');
        }

    });
});


//// WOW js 

new WOW().init();

/// ScrollIt

$(function () {

    "use strict";

    $.scrollIt({
        upKey: 40, // key code to navigate to the next section
        downKey: 40, // key code to navigate to the previous section
        easing: 'ease-in-out', // the easing function for animation
        scrollTime: 600, // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null, // function(pageIndex) that is called when page is changed
        topOffset: -80 // offste (in px) for fixed top navigation
    });
});

(function ($) {
    "use strict";

    // navbar ----------------

    if ($(window).width() < 1025) {
        $("<span class='clickD'></span>").insertAfter(".navbar-nav li.menu-item-has-children > a");
    }
    $('.navbar-nav li .clickD').click(function (e) {
        e.preventDefault();
        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
            $this.next().hide();
        } else {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.parent().parent().find('.sub-menu').hide();
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
            $this.next().show();
        }
    });

    $('html').click(function () {
        $('.navbar-nav li .clickD').removeClass('toggled');
        $('.toggled').removeClass('toggled');
        $('.sub-menu').hide();

    });
    $(document).click(function () {
        $('.navbar-nav li .clickD').removeClass('toggled');
        $('.toggled').removeClass('toggled');
        $('.sub-menu').hide();
    });
    $('.navbar-nav').click(function (e) {
        e.stopPropagation();
    });

    $('.close-menu').click(function () {
        $('.navbar-collapse').removeClass('show');
        $("body").removeClass("overlay-block");
    });

    // banner-carousel-------------
    // $('.banner_sec').slick({
    //   dots: true,
    //   infinite: true,
    //   arrows: false,
    //   speed: 300,
    //   slidesToShow: 1,
    //   adaptiveHeight: true
    // });

    // navbar-animation-----------------
    $(".navbar-toggler").click(function () {
        $(".navbar-toggler").toggleClass("navbar-animate");
        $("body").addClass("overlay-block");
    });

    $(window).scroll(function () {

        // sticky-menu ---------------
        if ($(window).scrollTop() >= 2) {
            $('.main_head').addClass('fixed-header');
        } else {
            $('.main_head').removeClass('fixed-header');
        }

        // back-to-top--------------
        if ($(this).scrollTop() >= 400) {
            $('.back-to-top-area').addClass('active-backTop');
        }
        else {
            $('.back-to-top-area').removeClass('active-backTop');
        }
    });

    // menu-close-on-outside-click
    // $(document).on('click', function (e) {
    //     if ($(e.target).closest(".navbar-collapse").length === 0 && $(e.target).closest(".navbar-toggler").length === 0) {
    //         $(".navbar-collapse").removeClass("show");
    //         $("body").removeClass("overlay-block");
    //     }
    // });
    $(".header-overlay").on('click', function (e) {
        $(".navbar-collapse").removeClass('show');
        $(".navbar-toggler").removeClass("navbar-animate");
        $("body").removeClass("overlay-block");
    });

    // online-offline

    window.addEventListener('offline', function (evt) {
        document.body.classList.add("offline");
    });
    window.addEventListener('online', function (evt) {
        document.body.classList.remove("offline");
    });

    // wow-animation
    // (function($){
    new WOW().init();
    // })(jQuery);

    // testimonial-carousel
    $('.testimonial-carousel').slick({
        dots: false,
        infinite: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // blog-carousel
    $('.theblog-carousel').slick({
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    });
}(jQuery));
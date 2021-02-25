$(document).ready(function() {



    $('html').click(function() {
        $('.navbar-nav li .clickD').removeClass('toggled');
        $('.toggled').removeClass('toggled');
        $('.sub-menu').hide();
    });
    $(document).click(function() {
        $('navbar-nav li .clickD').removeClass('toggled');
        $('.toggled').removeClass('toggled');
        $('.sub-menu').hide();
    });
    $('.navbar-nav').click(function(e) {
        e.stopPropagation();
    });

    if (jQuery(window).width() < 1025) {
        jQuery("<span class='clickD'></span>").insertAfter("ul.navbar-nav li.menu-item-has-children > a");
    }
    $('ul.navbar-nav li .clickD').click(function(e) {
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


    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > 0 && $(window).width() > 1024) {
            $(".header").addClass("fixed");
        } else
            $(".header").removeClass("fixed");
    });


    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false

    });


    $('.testimn_main_area').slick({
        arrows: true,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });





});
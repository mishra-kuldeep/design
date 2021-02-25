$( document ).ready(function() {
     $("#owl-demo").owlCarousel({
        loop:true,
        nav:false,
        autoplay: 200,
        
        responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
       }
     });
     $("#owl-demo2").owlCarousel({
        loop:true,
        nav:true,
        autoplay: 400,
             margin: 10,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
       }
     });
       $("#owl-demo3").owlCarousel({
        loop:true,
        nav:true,
        autoplay: 300,
        margin: 10,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
       }
     });
       
       

       
        $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
       


       $( window ).on( "load", function() {

     var imgHeight = $(".footer-img img").height();
    $('.landing-area').css({
        'padding-bottom': imgHeight + 30 +'px',
    });
});
$(window).resize(function(event) {
    var imgHeight = $(".footer-img img").height();
    $('.landing-area').css({
        'padding-bottom': imgHeight + 30 +'px',
    });
});

});

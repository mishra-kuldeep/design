//main navigation

$(document).ready(function(){

    if($(window).width() < 1025)
    {
        $( "<span class='clickD'></span>" ).insertAfter(".main_head.navbar-nav > li.menu-item-has-children > a");
    }
     $('.main_head .navbar-nav li .clickD').click(function(e) {
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

     $('html').click(function(){
        $('.main_head .navbar-nav li .clickD').removeClass('toggled');
    });
      $(document).click(function(){
         $('.main_head .navbar-nav li .clickD').removeClass('toggled');
    });
      $('.main_head .navbar-nav').click(function(e){
      e.stopPropagation();
    });


    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();    
        if (scroll > 20 && $(window).width() > 767) {
            $(".main_head").addClass("fixed");
        }
        else
           $(".main_head").removeClass("fixed");
    })


new WOW().init();



$('.partner_slider').slick({
  dots: true,
  infinite: false,
  speed: 300,
  arrows:false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    
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
  ]
});


});




var $scrollingDiv = $(".down_arr span");
$(window).scroll(function() {
    var winScrollTop = $(window).scrollTop() + 0,
        zeroSizeHeight = $(document).height() - $(window).height(),
        newSize = 150 - 150 * (1 - ( winScrollTop / zeroSizeHeight));
        $scrollingDiv.css({
        width: newSize
    }, 500, 'easeInOutSine');

     var scroll = $(window).scrollTop();    
      if (scroll > 20) {
          $(".down_arr").addClass("start-line");
      }
      else
      { $(".down_arr").removeClass("start-line");
        $(".down_arr span").css("width" , "150");
      }
    
});















//main navigation

$(document).ready(function(){





if($(window).width() < 1025)
{
    $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
}
 $('.navbar-nav li .clickD').click(function(e) {
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
    $('.navbar-nav li .clickD').removeClass('toggled');
    $('.toggled').removeClass('toggled');
    $('.sub-menu').hide();

});
$(document).click(function(){
    $('.navbar-nav li .clickD').removeClass('toggled');
    $('.toggled').removeClass('toggled');
    $('.sub-menu').hide();
});
$('.navbar-nav').click(function(e){
  e.stopPropagation();
});





// accordian
$('.accordion .toggle').click(function(e) {
    e.preventDefault();
  
    var $this = $(this);
  
    if ($this.next().hasClass('show')) {
        $this.next().removeClass('show');
        $this.removeClass('active');
        $this.parent().removeClass("active_tow");
        $this.next().hide();
    } else {
        $this.parent().parent().find('li .inner').removeClass('show');
        $this.parent().parent().find('.active').removeClass('active');
        $this.parent().parent().find('li .inner').hide();
        $(".accordion > li").removeClass("active_tow");
        $this.parent().addClass("active_tow");


        $this.next().toggleClass('show');
        $this.toggleClass('active');
        $this.next().toggle();
    }
});



$('.banner').slick({
  dots: true,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});



 $('.single_product_carousel .slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: false,
  infinite: true,
  asNavFor: '.single_product_carousel .slider-nav'
});
$('.single_product_carousel .slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.single_product_carousel .slider-for',
  arrows: false,
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  vertical: true,
  infinite: true
});



$('.similar_prod_carousel').slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
   autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
 
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
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }

  ]
});


$(".main_head .navbar-nav > li > a").on("click touchend", function (e) {
        var el = $(this);
        var link = el.attr("href");
        window.location = link;
});




$("#shopby").click(function() {    
    
    if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("#shopby_content").removeClass("open");
        
    }
    else
      {
        $(this).addClass("open");
        $("#shopby_content").addClass("open");
      }
})





})



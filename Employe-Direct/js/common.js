    
jQuery(document).ready(function($) {
  // document start
  
  
  
  // Navbar For Click On tab
   $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
   $('.navbar-nav li .clickD').click(function(e) {
       e.preventDefault();
       var $this = $(this);
   
       if ($this.next().hasClass('show')) {
           $this.next().removeClass('show');
           $this.removeClass('toggled');
       } else {
           $this.parent().parent().find('.sub-menu').removeClass('show');
           $this.parent().parent().find('.toggled').removeClass('toggled');
           $this.next().toggleClass('show');
           $this.toggleClass('toggled');
       }
   });
  
   $(window).on('resize', function(){
       var win = $(this); //this = window
       if (win.width() < 1025) {
           $('html').click(function(){
               $('.navbar-nav li .clickD').removeClass('toggled');
               $('.toggled').removeClass('toggled');
               $('.sub-menu').removeClass('show');
           });
           $(document).click(function(){
               $('.navbar-nav li .clickD').removeClass('toggled');
               $('.toggled').removeClass('toggled');
               $('.sub-menu').removeClass('show');
           });
           $('.navbar-nav').click(function(e){
           e.stopPropagation();
           });
       }
   });
   // Navbar end
  
  /* ===== For menu animation === */
  $(".navbar-toggler").click(function(){
      $(".navbar-toggler .stick").toggleClass("open");
  });
  
  // Navbar end

/*Testomonial Slider*/
$('.tesmnl_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: false,
    adaptiveHeight: false,
    centerPadding: '0px',
    responsive: [
        {
          breakpoint:992,
          settings: {
            slidesToShow:2,
          }
        },
        {
            breakpoint:768,
            settings: {
              slidesToShow:1,
            }
          }
  ]
  });

  
 /*Fancybox*/
 $(".fancybox").fancybox({
  type: "iframe",
  
  })
  $('[data-fancybox]').fancybox({
  buttons : ['close']
  });
    !!window['addEventListener'] && new WOW().init();
  });  // document end
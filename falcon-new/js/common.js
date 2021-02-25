//main navigation

$(document).ready(function(){




// menu
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


$(".navbar-toggler").click(function(){
  $("body, html").toggleClass("overflow-hide");
  $(".collapse-navbar-outer").toggleClass("active");

});



//  $('html').click(function(){
//     $('.navbar-nav li .clickD').removeClass('toggled');
//     $('.toggled').removeClass('toggled');
//     $('.sub-menu').hide();

// });
// $(document).click(function(){
//     $('.navbar-nav li .clickD').removeClass('toggled');
//     $('.toggled').removeClass('toggled');
//     $('.sub-menu').hide();
// });
// $('.navbar-nav').click(function(e){
//   e.stopPropagation();
// });





// accordian
// $('.accordion .toggle').click(function(e) {
//     e.preventDefault();
  
//     var $this = $(this);
  
//     if ($this.next().hasClass('show')) {
//         $this.next().removeClass('show');
//         $this.removeClass('active');
//         $this.next().hide();
//     } else {
//         $this.parent().parent().find('li .inner').removeClass('show');
//         $this.parent().parent().find('.active').removeClass('active');
//         $this.parent().parent().find('li .inner').hide();
//         $this.next().toggleClass('show');
//         $this.toggleClass('active');
//         $this.next().toggle();
//     }
// });

// agencies slider

$('.agencies-slider').slick({
  dots: false,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 360,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
  ]
});
		

})



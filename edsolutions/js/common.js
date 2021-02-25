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



$('#review-slider').slick({
  dots: false,
  infinite: true,
  arrows: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000
});

 // sticky
$(window).scroll(function () {
   if ($(window).width() > 1024) {
if($(window).scrollTop() > 75) {
    $(".bottom-header ").addClass('sticky');
  } else {
    $(".bottom-header ").removeClass('sticky');

}
}
  
});
// sticky

 $('a[href*="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      $('.navbar-nav li a').each(function () {
          $(this).parent('li').removeClass('current-menu-item');
      });
      $(this).parent('li').addClass('current-menu-item');
      var target = this.hash, $target = $(target)
;
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top - 0
      }, 500, 'swing', function () {
          window.location.href.substr(0, window.location.href.indexOf('#'));
          $(document).on("scroll", onScroll);
      });
  });

})
function onScroll(event){
        var scrollPos = $(document).scrollTop() + 200;
        $('.navbar-nav li a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.navbar-nav li').removeClass("current-menu-item");
                currLink.parent('li').addClass("current-menu-item");
            }
            else{
                currLink.parent('li').removeClass("current-menu-item");
            }
        });
    }


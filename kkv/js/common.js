//main navigation


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



$('.banner_sec').slick({
  dots: true,
  infinite: true,
  arrows: false,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});


if(jQuery(window).width() > 1024){
  $('[data-paroller-factor]').paroller();
}




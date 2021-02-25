

$('.feature-product .owl-carousel').owlCarousel({
    loop:true,
    margin:26,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        },
    }
})


if(jQuery(window).width() < 1025)
{
    jQuery( "<span class='clickD'></span>" ).insertAfter(".navbar-nav > li.menu-item-has-children > a");
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
});
  $(document).click(function(){
     $('.navbar-nav li .clickD').removeClass('toggled');
});
  $('.navbar-nav').click(function(e){
  e.stopPropagation();
});

/*navtoggle*/
$(document).ready(function() {
            $("#toggle").click(function(){
               $(".navbar-nav").toggle( 'slow', function(){
               });
            });
         });
           




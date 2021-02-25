jQuery(document).ready(function () {
  //stickey_nav();
  // sticky menu end

  /*--toggle menu for mobile--*/
  jQuery('.navbar-toggler').click(function () {
    jQuery(this).toggleClass('open');
  });
  /*--END-toggle menu for mobile--*/

  // wordpress menu open
  jQuery("<span class='clickD'></span>").insertAfter(
    '.navbar-nav > li.menu-item-has-children > a'
  );
  if (jQuery(window).width() < 992) {
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
    });
    $(document).click(function () {
      $('.navbar-nav li .clickD').removeClass('toggled');
    });
    $('.navbar-nav').click(function (e) {
      e.stopPropagation();
    });
  }
  // wordpress menu end

});

// function stickey_nav() {
//   if (jQuery(window).scrollTop() > 1) {
//     jQuery('.navbar').addClass('scroll_nav');
//   } else {
//     jQuery('.navbar').removeClass('scroll_nav');
//   }
// }
$(document).ready(function ($) {


  // $('.inner-slide').slick({
  //   dots: true,
  //   arrows:false,
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1

  // });

  // $("#e1").select2();


  $('.slider_main_area').slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
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



  $('.js-example-basic-single').select2();

  $('.lass_btn').click(function () {
    $(this).siblings(".additional_main_area").slideToggle();

    if ($(this).text() == "More") {
      $(this).text("Less");
      $(this).addClass("btn_active");

    } else {
      $(this).text("More");

      $(this).removeClass("btn_active");
    }
  });






  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".header").addClass("fixed");
    } else
      $(".header").removeClass("fixed");
  });


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50 && $(window).width() > 1024) {
      $(".top_compare").addClass("fixed2");
    } else
      $(".top_compare").removeClass("fixed2");
  });

  // $("a").on("click touchend", function (e) {
  //         var el = $(this);
  //         var link = el.attr("href");
  //         window.location = link;
  //     });


  $('html').click(function () {
    $('.navbar-nav li .clickD').removeClass('toggled');
    $('.toggled').removeClass('toggled');
    $('.sub-menu').hide();
  });
  $(document).click(function () {
    $('navbar-nav li .clickD').removeClass('toggled');
    $('.toggled').removeClass('toggled');
    $('.sub-menu').hide();
  });
  $('.navbar-nav').click(function (e) {
    e.stopPropagation();
  });

  if (jQuery(window).width() < 1025) {
    jQuery("<span class='clickD'></span>").insertAfter("ul.navbar-nav li.menu-item-has-children > a");
  }
  $('ul.navbar-nav li .clickD').click(function (e) {
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




  $(".information span").mouseleave(function () {
    $(this).next().slideUp()
  });

  $(".information span").mouseenter(function () {
    $(this).next().slideDown()
  });




  // $(".details_collapse span").on("click", function(){
  //   $(".details_area").slideToggle();
  //   $(".details_collapse span").toggleClass("active");
  // });





});

$('#horizontalTab').easyResponsiveTabs({
  type: 'default', //Types: default, vertical, accordion           
  width: 'auto', //auto or any width like 600px
  fit: true, // 100% fit in a container
  closed: 'accordion', // Start closed if in accordion view
  activate: function (event) { // Callback function if tab is switched
    var $tab = $(this);
    var $info = $('#tabInfo');
    var $name = $('span', $info);
    $name.text($tab.text());
    $info.show();
  }
});
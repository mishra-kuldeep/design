$( window ).on("load", function() {

var $grid = $('.grid').packery({
  itemSelector: '.grid-item',
  columnWidth: 100
});

// make all grid-items draggable
$grid.find('.grid-item').each( function( i, gridItem ) {
  var draggie = new Draggabilly( gridItem );
  // bind drag events to Packery
  $grid.packery( 'bindDraggabillyEvents', draggie );
});
});

$(".play-btn").click(function(){
  $(".pazzel-img").hide();
  $(".play-btn").hide();
  $(".pazzel-game").show();
});


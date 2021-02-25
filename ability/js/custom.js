$(document).ready(function(e) {
    $(document).ready(function() {
      $("#owl-demo").owlCarousel({
		  autoPlay: 3000,
		  navigation : true,
		  pagination: false,
		  slideSpeed : 300,
		  paginationSpeed : 400,
		  singleItem : true,
      });
    });
	
	$("#owl-demo2").owlCarousel({
        autoPlay: 3000,
        items : 6,
        navigation:true,
		pagination: false,
        //itemsDesktop : [1199,3],
        //itemsDesktopSmall : [979,3]
      });
});
$( document ).ready(function() {
	
    $("#all-button").hover(
	  function () {
	    $(this).attr('src', 'img/All-Selected.png');
	  },
	  function () {
	    $(this).attr('src', 'img/All--NOT-Selected.png');
	  }
	);
	
	$("#hat-button").hover(
	  function () {
	    $(this).attr('src', 'img/Hat-Selected.png');
	  },
	  function () {
	    $(this).attr('src', 'img/Hat--NOT-Selected.png');
	  }
	);
	
	$("#beanie-button").hover(
	  function () {
	    $(this).attr('src', 'img/Beanie-Selected.png');
	  },
	  function () {
	    $(this).attr('src', 'img/Beanie--NOT-Selected.png');
	  }
	);
	
	$("#cap-button").hover(
	  function () {
	    $(this).attr('src', 'img/Cap-Selected.png');
	  },
	  function () {
	    $(this).attr('src', 'img/Cap--NOT-Selected.png');
	  }
	);
    
    var currentProduct = null;
    $(".product").hover(hoverProduct, unhoverProduct);
    
    function hoverProduct() {
    	$( ".product" ).each(function( index ) {
    		if ($(this).is(':hover')) {
    			$(this).find(".product-preview").stop().animate({ left: -250 });
    			currentProduct = $(this);
    		}
		});
    }
    
    function unhoverProduct() {
    	$( ".product" ).each(function( index ) {
    			if (currentProduct != null) {
    				currentProduct.find(".product-preview").stop().animate({ left: 0 });
    				currentProduct = null;
    			}
		});
    }
    
   
    
});
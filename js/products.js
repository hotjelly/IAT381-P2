$( document ).ready(function() {
    //alert( "ready!" );
    var currentProduct = null;
    $(".product").hover(hoverProduct, unhoverProduct)
    
    $("#all-button").hover(
	  function () {
	    $(this).attr('src', 'img/All-Selected.png');
	  },
	  function () {
	    $(this).find("span:last").remove();
	  }
	);
	
	$("#hat-button").hover(
	  function () {
	    $(this).attr('src', 'img/Hat-Selected.png');
	  },
	  function () {
	    $(this).find("span:last").remove();
	  }
	);
    
    
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
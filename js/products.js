$( document ).ready(function() {
	
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
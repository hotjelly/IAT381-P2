$( document ).ready(function() {
	
	if (!$("#all-button").hasClass("selected")) {
		$("#all-button").hover(
		  function () {
		    $(this).children("img").attr('src', 'img/All-Selected.png');
		  },
		  function () {
		    $(this).children("img").attr('src', 'img/All--NOT-Selected.png');
		  }
		);
	}
    
	if (!$("#hat-button").hasClass("selected")) {
		$("#hat-button").hover(
		  function () {
		    $(this).children("img").attr('src', 'img/Hat-Selected.png');
		  },
		  function () {
		    $(this).children("img").attr('src', 'img/Hat--NOT-Selected.png');
		  }
		);
	}
	
	if (!$("#beanie-button").hasClass("selected")) {
		$("#beanie-button").hover(
		  function () {
		    $(this).children("img").attr('src', 'img/Beanie-Selected.png');
		  },
		  function () {
		    $(this).children("img").attr('src', 'img/Beanie--NOT-Selected.png');
		  }
		);
	}
	
	if (!$("#cap-button").hasClass("selected")) {
		$("#cap-button").hover(
		  function () {
		    $(this).children("img").attr('src', 'img/Cap-Selected.png');
		  },
		  function () {
		    $(this).children("img").attr('src', 'img/Cap--NOT-Selected.png');
		  }
		);
	}
    
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
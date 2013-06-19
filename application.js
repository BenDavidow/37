$(function() {
    $('.js-badge-header, .js-badge-about').hide()
    var oldHeader = $('.js-header').html()
	var oldSubHeader = $('.js-subheader').html()
	$('.js-arrow').hide()
    $('.js-badge').hover( 
	    	function() {
	    		$('.main').addClass('js-main')
	    		var newHeader = $(this).find('.js-badge-header').html()
	    		var newSubHeader = $(this).find('.js-badge-about').html()
	    		$(this).find('.js-arrow').show()
	    	    $('.js-header').html(newHeader)
	    	  				   .addClass('badge-header')
	    	    $('.js-subheader').html(newSubHeader)
	    	    			   .addClass('badge-about')
	    	    $('.main').before('<a href="">')
	    		$('.main').after("</a>")
	    	}, // end mouseover
			function() {
				$('.main').removeClass('js-main')
				$(this).find('.js-arrow').hide()				
				$('.js-header').removeClass('badge-header')
							   .html(oldHeader)
				$('.js-subheader').removeClass('badge-about')
								  .html(oldSubHeader)
			} // end mouseout
		); // end hover
});
	
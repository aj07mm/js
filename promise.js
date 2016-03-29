Template.productIndex.rendered = function(){

	function unSlick(element) {
	  debugger;
	  element.unslick();
	  return {
	    thenSlick: function(element) {
	      	element.slick({
		        arrows: true,
		        slidesToShow: 3
		    });	
	    }
	  };
	};

	unSlick($('#carousel')).thenSlick($('#carousel'));
}
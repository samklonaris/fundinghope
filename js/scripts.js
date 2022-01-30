function setup() {
  	// open/close faq item
	$( ".faq-item" ).click(function(e) {
		$(this).find('.faq-body').toggleClass('hidden')
		$(this).find('.arrow-img').toggleClass('up')
	});


	// move hero image
	var HERO_1_OFFSET = 50
	var HERO_2_OFFSET = -100
	$(window).on("load resize scroll", function() {
	  $("#hero-pane").each(function() {
	  	// No scroll on mobile
  		if (window.innerWidth < 990) {
  			return
  		}

	    var windowTop = $(window).scrollTop();
	    var elementTop = $(this).offset().top;
	    var bottomPosition = windowTop - elementTop + HERO_2_OFFSET;
	    if (bottomPosition <= 400) {
	    	$(this).find("#hero-2").css({ bottom: bottomPosition });
	    }

		var topPosition = HERO_1_OFFSET - ((windowTop - elementTop) / 4);
		if (800 <= topPosition <= 10000000) {
	    	$(this).find("#hero-1").css({ top: topPosition });
	    }

	  });
	});
}


window.onload = setup
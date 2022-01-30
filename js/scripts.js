function setup() {
  	// open/close faq item
	$( ".faq-item" ).click(function(e) {
		$(this).find('.faq-body').toggleClass('hidden')
		$(this).find('.arrow-img').toggleClass('up')
	});


	// move hero image
	var HERO_2_OFFSET = -300
	$(window).on("load resize scroll", function() {
	  $("#hero-pane").each(function() {
	    var windowTop = $(window).scrollTop();
	    var elementTop = $(this).offset().top;
	    var bottomPosition = windowTop - elementTop + HERO_2_OFFSET;
	    if (bottomPosition <= 400) {
	    	$(this).find("#hero-2").css({ bottom: bottomPosition });
	    }
	  });
	});
}


window.onload = setup
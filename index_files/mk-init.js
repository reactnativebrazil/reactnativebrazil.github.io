jQuery(function() {

   jQuery('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
jQuery(function() {
    jQuery(window).bind("load resize", function() {
        topOffset = 50;
        width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 768) {
            jQuery('div.navbar-collapse').addClass('collapse');
            topOffset = 100; // 2-row-menu
        } else {
            jQuery('div.navbar-collapse').removeClass('collapse');
        }

        height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            jQuery("#mk-page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    var element = jQuery('ul.nav a').filter(function() {
        return this.href == url || url.href.indexOf(this.href) == 0;
    }).addClass('active').parent().parent().addClass('in').parent();
    if (element.is('li')) {
        element.addClass('active');
    }
});


jQuery(document).ready(function(){
			/*
				Header search
			*/

			jQuery("#search-btn, #lnt-close-search-bar").click(function (e) {
            e.preventDefault();
            jQuery('#level-nine-search-container').fadeToggle();
			});
		
			jQuery('#level-nine-search-container input[type="text"]').on('blur', function() {
				 jQuery('#level-nine-search-container').fadeToggle();
			});		
			
			/*
				Post Image hover animation
			*/
			
            jQuery("div.mk-blog-item").mouseenter(function(){
                jQuery(this).addClass("hover");
            })
            .mouseleave(function(){
               jQuery(this).removeClass("hover");
            });
			
		
    });
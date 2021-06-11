jQuery( document ).ready( function( $ ) {
    // responsive menu js
    $('body').addClass('js');
    var $menu = $('#menu'),
            $menulink = $('.menu-link'),
            $menuTrigger = $('.has-submenu');

    $menulink.click(function(e) {
        e.preventDefault();
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
    });

    $menuTrigger.click(function(e) {
        e.preventDefault();
        var $this = $(this);
        $('.menu ul').removeClass('active');
        $this.toggleClass('active').next('ul').toggleClass('active');
    });

    // scroll js for bottom top arrow
    $(".scroll").click(function(event){  
        event.preventDefault();  
        var full_url = this.href;  
        var parts = full_url.split("#");  
        var trgt = parts[1];  
        var target_offset = $("#"+trgt).offset();  
        var target_top = target_offset.top;  
        $('html, body').animate({scrollTop:target_top}, 1000);  
    });  

    // sticky menu 
    jQuery(window).scroll(function() {
        var sd = jQuery(window).scrollTop();
        if ( sd > 0 ) 
            jQuery(".TopMenu").addClass('StickyMenu');
        else 
        jQuery(".TopMenu").removeClass('StickyMenu');
    });
});
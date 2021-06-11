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

    // sticky menu 
    jQuery(window).scroll(function() {
        var sd = jQuery(window).scrollTop();
        if ( sd > 0 ) 
            jQuery(".TopMenu").addClass('StickyMenu');
        else 
        jQuery(".TopMenu").removeClass('StickyMenu');
    });
});
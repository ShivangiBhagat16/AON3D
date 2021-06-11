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

    // balance height
    var highestBox1, highestBox2 = 0;
    $('.ServicesBalanceCol').each(function(){  
            if($(this).height() > highestBox1){  
            highestBox1 = $(this).height();  
    }});
    $('.ServicesWrap .Desc').each(function(){  
            if($(this).height() > highestBox2){  
            highestBox2 = $(this).height();  
    }});    
    $('.ServicesBalanceCol').height(highestBox1);
    $('.ServicesWrap .Desc').height(highestBox2);

    // ajax to populate REST API data
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        type:'get',
        dataType:'json',

        success:function(response){
        for(var i=0; i<=response.length; i++) {//response.length
            var photogallery = "<div class='col-sm-3 Col3'><a href='#'><div class='Image'><img src='"+response[i].url+"' alt=''/></div><h6>"+response[i].title+"</h6></a></div>"
            $('#PhotoGallery').append(photogallery)
        }
        },
        error:function(error){
            console.log(error)
        },
        always:function(){}
    })
});
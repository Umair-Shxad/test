$(function(){
    
    // Toggal Menu
    
    $("#toggle-btn").click(function(){
        $(this).toggleClass("fa-times");
        $(".menu").toggleClass("menu-toggle");
    });
    
    // Scroll off
    
    $(window).on("scroll load",function(){
        $("#toggle-btn").removeClass("fa-times");
        $(".menu").removeClass("menu-toggle");
    });
    
    
    // box class changes
    
    $(".service-box .box").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // Owl Carousel

    $('.owl-carousel').owlCarousel({
        items:1,
        merge:true,
        loop:true,
        margin:10,
        video:true,
        lazyLoad:true,
        center:true,
        autoplay:true,
        responsive:{
            480:{
                items:2
            },
            600:{
                items:4
            }
        }
    })
    
});
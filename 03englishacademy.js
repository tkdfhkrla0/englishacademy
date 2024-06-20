$(function(){
    $('.banner .close-banner').click(function(){
        $('.banner-outer').slideUp();
    })
    $('.trigger').click(function(){
        $(this).toggleClass('active')
        $('.gnb li:last-child').toggleClass('active')
        $('.sitemap-outer').fadeToggle();
    })
})
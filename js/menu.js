$(document).ready(function() {
    $('.menu-cha').click(function() {
        $('.Menu-items.active .menu-con').slideDown();
        $(this).parent().toggleClass('active');
        $(this).parent().children('.menu-con').slideToggle();
    })
})
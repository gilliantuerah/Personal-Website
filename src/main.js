$(document).ready(function () {
    $('.top-nav .top-link').on('Click', function () {
        $('.top-nav').removeClass('open');
    });
    $('nav a[href*="#"]').on('Click', function () {
        $('html,body').animate(Keyframes: {
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, options: 2000);
    });
});
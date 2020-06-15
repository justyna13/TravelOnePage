
$(document).ready(function () {

    let hideMenu = false;

    $('.main-nav__link-home').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#home').offset().top
        }, 700);

    });

    $('.main-nav__link-travels').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#travels').offset().top - $('.main-nav').innerHeight()
        }, 700);

    });

    $('.main-nav__link-community').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#community').offset().top - $('.main-nav').innerHeight()
        }, 700);

    });

    $('.main-nav__link-map').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#map').offset().top - $('.main-nav').innerHeight()
        }, 700);

    });

    $('.main-nav__link-contact').on('click', function () {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top - $('.main-nav').innerHeight()
        }, 700);

    });


    $('.show-menu').on('click', function () {
        if (hideMenu) {
            $('.main-nav').animate({ top: 0 }, 700);
            hideMenu = false;
        } else {
            $('.main-nav').animate({ top: 220 }, 700);
            hideMenu = true;
        }
    });

})

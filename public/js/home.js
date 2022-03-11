$(document).ready(function () {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 120,
        loop: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            300: {
                items: 2,
                nav: false
            },
            700: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: false
            }
        }
    });
});
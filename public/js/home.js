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

    // toggle content table
    $('#section-1').click(function () {
        $('.content-items').removeClass("active");
        $('#section-1').toggleClass("active");
    });

    $('#section-2').click(function () {
        $('.content-items').removeClass("active");
        $('#section-2').toggleClass("active");
    });

    $('#section-3').click(function () {
        $('.content-items').removeClass("active");
        $('#section-3').toggleClass("active");
    });

    $('#section-4').click(function () {
        $('.content-items').removeClass("active");
        $('#section-4').toggleClass("active");
    });

    $('#section-5').click(function () {
        $('.content-items').removeClass("active");
        $('#section-5').toggleClass("active");
    });

    $('#section-6').click(function () {
        $('.content-items').removeClass("active");
        $('#section-6').toggleClass("active");
    });

    // typing animation
    var typed = new Typed(".typing", {
        strings: ["Parkistan", "Slovakia", "Russia", "Laos", "Germany", "Afganistan"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
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
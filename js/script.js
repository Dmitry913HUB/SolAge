$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 5,
        autoplay: false,
        speed: 2000,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 10,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
const element = $('.js-tilt').tilt();


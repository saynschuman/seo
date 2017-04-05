(function($) {
    $(function() {

        $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        });

    });


    $('.slider-cont').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        prevArrow: '<img src="img/arr_l.png">',
        nextArrow: '<img src="img/arr_r.png">',
        responsive: [
            {
                breakpoint: 993,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }            
        ]
    });



    $('.slider-one-block').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        dotsClass: "my-dots",
    });

    $('.menu_link').click(function(e){
        e.preventDefault();
        $('.da-thumbs').slideToggle();
    })


})(jQuery);
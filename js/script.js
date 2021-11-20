//Якорные ссылки anchor

$('a[href^="#"]').on('click', function(event) {
    event.preventDefault()
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top - $('header.site-header').height()
    $('html, body').animate({scrollTop: dn}, 700)
})


//Слайдер для первого блока на главной

    $('.fs-slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        autoplay: true,
		autoplaySpeed: 5000, 
		arrows: true,
        appendArrows: $('.fs-slider-arrows'),
        prevArrow: '<span class="prev slick-prev slick-arrow" style="background-image:url(img/left-arrow.png);"></span>',
        nextArrow: '<span class="next slick-next slick-arrow" style="background-image:url(img/right-arrow.png);"></span>',
		dots: true,
		appendDots: $('.fs-slider-dots'),
		     customPaging : function(slider, i) {
    var thumb = $(slider.$slides[i]).data();

      return '0' + (i + 1);
            },
		 dotsClass: 'fs-slider-dots-list',
    });

    

   //Слайдер для блока category на главной

    $('.categories-slider').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
		autoplaySpeed: 2000, 
		arrows: true,
        appendArrows: $('.categories-slider-arrows'),
        prevArrow: '<span class="prev slick-prev slick-arrow" style="background-image:url(img/second-arrow-l.png);"></span>',
        nextArrow: '<span class="next slick-next slick-arrow" style="background-image:url(img/second-arrow-r.png);"></span>',
		dots: false,
        responsive: [
            {
            breakpoint: 767,
            settings: {  
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            }
        }
    
    ]
        
    });


  //Неактивная кнопка «prev, next» на последнем слайде в слайдере category 

$('.categories-slider').on('beforeChange', function(e, slick, nextSlide) {
    $(this).find('.slick-next').prop('disabled', nextSlide === slick.slideCount - 1);
});


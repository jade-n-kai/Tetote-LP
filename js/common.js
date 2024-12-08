(function($){

   'use strict';

  $(".portfolio-slider .slider-items")
  .on("init", function (event, slick) {
    $(this).append('<div class="slick-number"><span class="slick-number__current"></span> / 5</div>');
    $(".slick-number__current").text(slick.currentSlide + 1);
  })
  .slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    infinite: true,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    dots: true,

    responsive: [
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ],
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    $(".slick-number__current").text(nextSlide + 1);
  });

  $('.voice-slider')
  .on("init", function (event, slick) {
    $(this).append('<div class="slick-number"><span class="slick-number__current"></span> / <span class="slick-number__all"></span></div>');
    $(".slick-number__current").text(slick.currentSlide + 1);
    $(".slick-number__all").text(slick.slideCount);
  })
  .slick({
  dots: true,
  arrows: true,
  speed: 1500,

  responsive: [
    {
      breakpoint: 780,
      settings: {
        arrows: true,
        speed: 800,
      }
    }
  ],
})
.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
  $(".slick-number__current").text(nextSlide + 1);
});

$('.faq__item:first-child .faq-item__plus').addClass('is-open');
$('.faq__item:nth-child(n + 2) .faq-item__a').hide();
$('.faq__item:first-child .faq-item__line').addClass('is-open');
$('.faq-item__q').on('click', function() {
  $(this).next().slideToggle();
  $(this).children('.faq-item__plus').toggleClass('is-open');
  $(this).children('.faq-item__line').toggleClass('is-open');
});

})(jQuery);
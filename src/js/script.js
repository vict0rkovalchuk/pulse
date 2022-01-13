$(document).ready(function () {
  $('.carousel__inner').slick({
    speed: 1200,
    adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/arrows/left.svg"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/arrows/right.svg"></button>',
    responsive: [
      {
        breakpoint: 993,
        settings: {
          dots: true,
          arrows: false
        }
      }
    ]
  });
});

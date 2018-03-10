
$(document).ready(function() {

  $('.carousel').slick({
      accessibility: true,
      lazyLoad: 'ondemand',
      infinite: false,
      focusOnSelect: false,
      nextArrow: $('.arrow-next'),
      prevArrow: $('.arrow-prev'),
      appendArrows: $('.carousel'),
      responsive: [
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
  });
    
  var photo = $('.carousel');
  var offset = photo.offset();
  var photoViewportOffsetTop = offset.top - $(document).scrollTop();
  var carouselViewportOffsetLeft = offset.left - $(document).scrollLeft();

  $('.arrow-next').css("right", carouselViewportOffsetLeft + $('.arrow-next').outerWidth() / 2);
  $('.arrow-prev').css("left", carouselViewportOffsetLeft +  $('.arrow-prev').outerWidth() / 2);

  $(window).resize(function() {
      let offset = photo.offset();
      let photoViewportOffsetTop = offset.top - $(document).scrollTop();
      let carouselViewportOffsetLeft = offset.left - $(document).scrollLeft();

      $('.arrow-next').css("right", carouselViewportOffsetLeft + $('.arrow-next').outerWidth() / 2);
      $('.arrow-prev').css("left", carouselViewportOffsetLeft +  $('.arrow-prev').outerWidth() / 2);
  })
  
});

document.querySelector('.arrow-next').addEventListener('click', function() {
  console.log($('.carousel').slick('slickCurrentSlide'));
  console.log($('.team-box').length)

  if ($(window).width() < 992 && $('.carousel').slick('slickCurrentSlide') === $('.team-box').length / 2 + 1) {
    $('.carousel').slick('goTo', 0);
  }

  else if ($(window).width() < 1500 && $(window).width() > 992 && $('.carousel').slick('slickCurrentSlide') === $('.team-box').length / 2) {
    $('.carousel').slick('goTo', 0);
  }
});

document.querySelector('.arrow-prev').addEventListener('click', function() {
  console.log($('.carousel').slick('slickCurrentSlide'));
  console.log($('.team-box').length);

  if ($(window).width() < 992 && $('.carousel').slick('slickCurrentSlide') === $('.team-box').length / 2 + 1) {
    $('.carousel').slick('goTo', 0);
  }

  else if ($(window).width() < 1500 && $(window).width() > 992 && $('.carousel').slick('slickCurrentSlide') === 0) {
    $('.carousel').slick('goTo', $('.team-box').length / 2);
  }
});
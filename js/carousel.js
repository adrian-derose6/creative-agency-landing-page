
$(document).ready(function() {

  $('.carousel').slick({
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 5000,
      lazyLoad: 'ondemand',
      infinite: false,
      focusOnSelect: false,
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
});
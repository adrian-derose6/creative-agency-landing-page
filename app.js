function changeNavOpacity() {
    $(document).ready(function() {
        $navLink = $('.navigation-menu > li > a');
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 50) { 
              $('#top-nav').addClass('solid');
              $navLink.addClass('colored-link');
              $('.logo').addClass('colored-logo')
          } else {
              $('#top-nav').removeClass('solid');
              $navLink.removeClass('colored-link');
              $('.logo').removeClass('colored-logo');
          }
        });
    });
}

function smoothLink() {
    $('.navigation-menu a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
}

changeNavOpacity();
smoothLink();



        
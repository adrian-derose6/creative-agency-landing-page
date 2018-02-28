function changeNavOpacity() {
    $(document).ready(function() {
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 50) { 
              $('#top-nav').addClass('solid');
          } else {
              $('#top-nav').removeClass('solid');
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



        
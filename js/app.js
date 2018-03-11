function changeNav() {
    $(document).ready(function() {
        $navLink = $('.navigation-menu > li > a');
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 50px, adds/removes solid class
          if($(this).scrollTop() > 50) { 
              $('#top-nav').addClass('solid');
              $('#top-nav').removeClass('border');
              $navLink.addClass('colored-link');
              $('.logo').addClass('colored-logo');
              $('#company-logo').attr('src', './photos/camera-shutter-black.png');
          } else {
              $('#top-nav').removeClass('solid');
              $('#top-nav').addClass('border');
              $navLink.removeClass('colored-link');
              $('.logo').removeClass('colored-logo');
              $('#company-logo').attr('src', './photos/camera-shutter-white.png');
          }
        });
    });
}

function toggleClass(elem, isClassSelected) {
    const HIGHLIGHT = 'link-highlight';
    var navLink = document.querySelector(`a[href="#${elem.getAttribute('id')}"]`);

    if (isClassSelected && !navLink.classList.contains(HIGHLIGHT)) {
        navLink.classList.add(HIGHLIGHT);
    }
    else if (!isClassSelected && navLink.classList.contains(HIGHLIGHT)) {
        navLink.classList.remove(HIGHLIGHT);
    } 
}

function scrollSpy() {
    var sectionsList = document.getElementsByTagName('section');
    var currentSection = 'home';
    toggleClass(sectionsList[0], currentSection === sectionsList[0].getAttribute('id'));

    window.onscroll = function() { 
        for (var i = 0; i < sectionsList.length; i++) {
            let each = sectionsList[i];
            let elemRect = each.getBoundingClientRect();

            if (elemRect.bottom > window.innerHeight * 0.5) {
                currentSection = each.getAttribute("id");
                break;
            }
        }
        
        for (var x = 0; x < sectionsList.length; x++) {
            let each = sectionsList[x];
            let isClassSelected = currentSection === each.getAttribute('id')
            toggleClass(each, isClassSelected);
        }
      
    };
}

function smoothScrollLink() {
    var $root = $('html, body');

    $('a[href^="#"]').click(function () {
        $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

        return false;
    });
}


$(document).ready(function() {
    changeNav();
    scrollSpy();
    smoothScrollLink();
});





        
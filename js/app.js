function changeNav() {
    $navLink = $('.navigation-menu > li > a');
    $window = $(window);
    // Transition effect for navbar 
    $window.scroll(function() {
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
        }, 1500, 'easeInOutExpo');

        return false;
    });

    $('#scroll-circle').click(function () {
        $root.animate({
            scrollTop: $("#scroll-circle").offset().top + 65
        }, 1500, 'easeInOutExpo');

        return false;
    });
}

function animationScroll() {
    //Cache reference to window and animation items
    var animationElements = document.querySelectorAll('.animation-element')
    var $window = $(window);

    $window.on('scroll resize', function() {
        for (var i = 0; i < animationElements.length; i++) {
            if (isInViewport(animationElements[i]) && !animationElements[i].classList.contains('.in-view')) {
                animationElements[i].classList.add('in-view');
            }
        }
    });
}

// Determine if an element is in the visible viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}


$(document).ready(function() {
    changeNav();
    scrollSpy();
    smoothScrollLink();
    animationScroll();
});





        
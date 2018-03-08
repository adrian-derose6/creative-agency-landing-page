function changeNav() {
    $(document).ready(function() {
        $navLink = $('.navigation-menu > li > a');
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 50px, adds/removes solid class
          if($(this).scrollTop() > 50) { 
              $('#top-nav').addClass('solid');
              $navLink.addClass('colored-link');
              $('.logo').addClass('colored-logo');
              $('#company-logo').attr('src', './photos/camera-shutter-black.png');
          } else {
              $('#top-nav').removeClass('solid');
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


function smoothScroll(element) {
    window.scrollTo({
        'behavior': 'smooth',
        'left': 0,
        'top': element.offsetTop
    });
}

function scrollToSections () {
    const btns = document.querySelectorAll('.navigation-menu li a');
    const sections = document.querySelectorAll('section');
    console.log(sections)

    btns[0].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[0]);
        
        event.stopPropagation();
    }, false);

    btns[1].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[1]);
        
        event.stopPropagation();
    }, false);

    btns[2].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[2]);
        
        event.stopPropagation();
    }, false);

    btns[3].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[3]);
        
        event.stopPropagation();
    }, false);

    btns[4].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[4]);
        
        event.stopPropagation();
    }, false);

    btns[5].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[5]);
        
        event.stopPropagation();
    }, false);

    btns[6].addEventListener('click', function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[6]);
        
        event.stopPropagation();
    }, false);

    document.querySelector('#scroll-circle').addEventListener("click", function (event) {
        event.preventDefault();
        console.log('button clicked')
        smoothScroll(sections[1]);
        
        event.stopPropagation();
    }, false);

}

changeNav();
scrollSpy();
scrollToSections();



        
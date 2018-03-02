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

function toggleClass(elem, isClassSelected) {
    const HIGHLIGHT = 'link-highlight';
    var navLink = document.querySelector(`a[href="#${elem.getAttribute('id')}"]`);

    console.log(`${elem.getAttribute('id')} - ${isClassSelected ? 'Selected' : 'Not selected'}`);

    if (isClassSelected && !navLink.classList.contains(HIGHLIGHT)) {
        navLink.classList.add(HIGHLIGHT);
    }
    else if (!isClassSelected && navLink.classList.contains(HIGHLIGHT)) {
        navLink.classList.remove(HIGHLIGHT);
    } 
}

function scrollSpy() {
    var sectionsList = document.getElementsByTagName('section');
    var navLinkList;
    var currentSection = 'home';
    toggleClass(sectionsList[0], currentSection === sectionsList[0].getAttribute('id'));

    window.onscroll = function() { 
        for (var i = 0; i < sectionsList.length; i++) {
            let each = sectionsList[i];
            let elemRect = each.getBoundingClientRect();

            if (elemRect.bottom > window.innerHeight * 0.5) {
                currentSection = each.getAttribute("id");
                console.log(currentSection);
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

changeNavOpacity();
scrollSpy();




        
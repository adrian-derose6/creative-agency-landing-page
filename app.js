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

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;
 
  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
 
      xPos += (el.offsetLeft - xScroll + el.clientLeft);
      yPos += (el.offsetTop - yScroll + el.clientTop);
    } else {
      // for all other non-BODY elements
      xPos += (el.offsetLeft - el.scrollLeft + el.clientLeft);
      yPos += (el.offsetTop - el.scrollTop + el.clientTop);
    }
 
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

function scrollSpy() {
    var sectionsList = document.getElementsByTagName('section');
    var currentSection = sectionsList[1];

    console.log(sectionsList[0]);


   //window.onscroll = function() { 
       // let scrollPosition = document.body.scrollTop;


    //};  
}


// Check current scroll position -- 
// Check whether scroll is in section field
// 



changeNavOpacity();
scrollSpy();




        
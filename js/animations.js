function animationScroll() {
    //Cache reference to window and animation items
    var $animationElements = $('.animation-element');
    var $window = $(window);

    $window.on('scroll resize', function() {
        if (checkIfInView($animationElements)) {
            $animationElements.addClass('in-view');
        }
    });
}


function checkIfInView(animationElements) {
   
    var windowHeight = $window.height();
    var windowTopPosition = $window.scrollTop();
    var windowBottomPosition = (windowTopPosition + windowHeight);

    $.each(animationElements, function() {
        var $element = $(this);
        var elementHeight = $element.outerHeight();
        var elementTopPosition = $element.offset().top;
        var elementBottomPosition = (elementTopPosition + elementHeight);

        if ((elementBottomPosition - elementHeight / 2 >= windowTopPosition) && (elementTopPosition <= windowBottomPosition)) {
            return true;
        }
        else {
            return false;
        }
    });
}

export { animationScroll };
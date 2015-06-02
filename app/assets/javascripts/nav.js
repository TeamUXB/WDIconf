// Script to implement 'sticky Nav'

$(document).ready(function(){

  //$('.main-nav').addClass('fixed');

 $(window).bind('scroll', function() {
 var navHeight = $( window ).height() - 400;
   if ($(window).scrollTop() > navHeight) {
     $('nav').addClass('fixed');
   }
   else {
     $('nav').removeClass('fixed');
   }
});

  $('.show-nav').on('click', function(){
    $('nav.mobile').toggleClass('open');
  });

  $('#NavClose').on('click', function(){
    $('nav.mobile').removeClass('open');
  });


});


// ScrollMagic - Provides Scrolling between sections

// Init controller
var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    duration: $('section').height(),
    triggerHook: .025,
    reverse: true
  }
});


// Change behaviour of controller
// to animate scroll instead of jump
controller.scrollTo(function(target) {

  TweenMax.to(window, 0.5, {
    scrollTo : {
      y : target,
      autoKill : true // Allow scroll position to change outside itself
    },
    ease : Cubic.easeInOut
  });

});


//  Bind scroll to anchor links
$(document).on("click", "a[href^=#]", function(e) {
  var id = $(this).attr("href");

  if($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);
    $('nav.mobile').removeClass('open');

    // If supported by the browser we can also update the URL
    if (window.history && window.history.pushState) {
      history.pushState("", document.title, id);
    }
  }

});



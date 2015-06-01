// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Phil's Slide Script

$(document).ready(function(){

  // slide animation toggle
  function sliderToggle() {
    // if mobile nav is open, make it not be
    $('nav.mobile').removeClass('open');

    // disable background scrolling while schedule open
    if ($('.schedule-slider-cover:hidden').length == 0 &&
        $(this).attr('data-slider-page') == '.schedule') {
      $('#content').css('overflow', '');
      $('#content').css('height', '');
    } else {
      $('#content').css('overflow', 'hidden');
      $('#content').css('height', '100vh');
    }
    // animate slider and toggle cover grey out
    $($(this).attr('data-slider-page')+'-slider').toggleClass('slider-open');
    $($(this).attr('data-slider-page')+'-slider-cover').toggle();
  }

  // elements w/ .slider-toggle draws slide target from data
  $('.slider-toggle').on('click', sliderToggle);

});

// hover effect in Speaker section

$(function() {

  $(' #thumbs > li ').each( function() { $(this).hoverdir({
    hoverDelay : 75
  }); } );

});


// FAQ accordian

$('.accordion-trigger').on('click', function() {
    $('.accordion-content').removeClass('content-open');
    // cache the link so you don't have to keep getting a jQuery object
    var triggerDOM = $(this);
    // if closed
    if(triggerDOM.hasClass('closed')) {
      triggerDOM.removeClass('closed').addClass('open');
      triggerDOM.next().addClass('content-open');
    // if open
    } else if(triggerDOM.hasClass('open')) {
      triggerDOM.removeClass('open').addClass('closed');
      triggerDOM.next().removeClass('content-open');
      console.log("closed now");
    } 
});



// MR ELEVATOR
window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.elevator-button'),
    mainAudio: './assets/elevator.mp3',
    endAudio: './assets/ding.mp3',
    duration: 30000 // milliseconds
  });
}



$(document).ready(function(){

// Filtering for Speakers (using Isotope)
  var $thumbs = $('#thumbs');
  var $thumbs_mobile = $('#thumbs-mobile');
  //$thumbs.isotope({ filter: '.cat-frontend' });

  var $BtnShowAll = $('#BtnShowAll');

  $BtnShowAll.on('click', function(){
    // if this is already active
    if($(this).hasClass('active')){
      $(this).removeClass('active').addClass('inactive');
      $('.badge').addClass('inactive');
    } else if ($(this).hasClass('inactive')){ // if this is inactive
      $(this).addClass('active').removeClass('inactive');
      //$('.badge').removeClass('inactive');
      $('#BtnFilterFrontend').addClass('inactive');
      $('#BtnFilterBackend').addClass('inactive');
      $('#BtnFilterTech').addClass('inactive');
    }
    
    $('.badge').toggleClass('inactive');
    //$('.badge').toggleClass('inactive');
    //$(this).toggleClass('inactive');
    $thumbs.isotope({ 
      filter: '*'
    });
    $thumbs_mobile.isotope({ 
      filter: '*'
    });
  });

  $('#BtnFilterFrontend').on('click', function(){
    $('#BtnFilterTech').addClass('inactive');
    $('#BtnFilterBackend').addClass('inactive');
    //$('.badge').addClass('inactive');
    $(this).toggleClass('inactive');
    $BtnShowAll.removeClass('active').addClass('inactive');
    $thumbs.isotope({ filter: '.cat-frontend' });
    $thumbs_mobile.isotope({ filter: '.cat-frontend' });
  });


  $('#BtnFilterBackend').on('click', function(){
    $('#BtnFilterFrontend').addClass('inactive');
    $('#BtnFilterTech').addClass('inactive');
    //$('.badge').addClass('inactive');
    $(this).toggleClass('inactive');
    $BtnShowAll.removeClass('active').addClass('inactive');
    $thumbs.isotope({ filter: '.cat-backend' });
    $thumbs_mobile.isotope({ filter: '.cat-backend' });
  });

  $('#BtnFilterTech').on('click', function(){
    $('#BtnFilterFrontend').addClass('inactive');
    $('#BtnFilterBackend').addClass('inactive');
    $(this).toggleClass('inactive');
    $BtnShowAll.removeClass('active').addClass('inactive');
    $thumbs.isotope({ filter: '.cat-tech' });
    $thumbs_mobile.isotope({ filter: '.cat-tech' });
  });


});




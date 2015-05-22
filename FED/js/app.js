// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();



function initialize() {
  var mapCanvas = document.getElementById('Map-canvas');
  var myLatlng = new google.maps.LatLng(-37.818266, 144.962388);

  var mapOptions = {
    center: new google.maps.LatLng(-37.818266, 144.962388),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }

  var styles = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]

  var contentString = '<div id="content">'+
    '<div id="bodyContent">'+
    '<span>General Assembly, Level 1</span>' +
    '<br>' +
    '<span>20 Queen Street, Melbourne VIC 3000</span>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var map = new google.maps.Map(mapCanvas, mapOptions)

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'General Assembly'
  });
  map.setOptions({styles: styles});
  infowindow.open(map,marker);
}

google.maps.event.addDomListener(window, 'load', initialize);
setTimeout(function(){
  $('.gm-style-iw').parent().children().last().hide();
}, 3000); // to improve this in refactoring, make this occur on update of <div id="Map-canvas"></div>
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
    mainAudio: './assets/doctorwho.mp3',
    endAudio: './assets/ding.mp3',
    duration: 7580 // milliseconds
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




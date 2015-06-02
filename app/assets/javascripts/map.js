function initialize() {
  var mapCanvas = document.getElementById('Map-canvas');
  var myLatlng = new google.maps.LatLng(-37.818266, 144.962388);

  var mapOptions = {
    center: new google.maps.LatLng(-37.818266, 144.962388),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false
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
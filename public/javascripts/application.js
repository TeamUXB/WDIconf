// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require turbolinks
//= require underscore-min
//= require modernizr
//= require jquery.hoverdir
//= require foundation.min
//= require google-maps-api
//= require map
//= require app
//= require ScrollMagic.min
//= require ScrollToPlugin.min
//= require TweenMax.min
//= require nav
//= require emailPost
//= require backbone-min
//= require backboneApp/ticket
//= require backboneApp/tickets
//= require backboneApp/speaker
//= require backboneApp/speakers
//= require backboneApp/speakerDesktopView
//= require backboneApp/speakerMobileView
//= require backboneApp/speakersView
//= require backboneApp/talk
//= require backboneApp/talks
//= require backboneApp/chosenTalks
//= require backboneApp/talkView
//= require backboneApp/talksView
//= require backboneApp/backboneMain
//= require isotope
//= require elevator
//= require_self

//$(function() {
var talk_draggable = function() {

  //$('.single-talk').disableSelection();
  //talk_draggable();

  $('.dropTarget').droppable({
    drop: function(ev, ui) {
      $(this)
        .html( $(this).text().trim() + ($(ui.draggable).html()) )
        .attr( "class", "inline-block" );
      // $(this).droppable('disable');
      //
      var cell = $( $(this).parent()[0] );
      var cell_time = cell.find('.cell-time').text().trim().split(':');
      // this is debug code to help with AJAX call
      var url = ($(ui.draggable).find('a').attr('href')).split('/');
      $.ajax({
        url: "/api/talks/time/" + url[2],
        method: "PATCH",
        data: {
          hour: cell_time[0],
          minutes: cell_time[1],
        }
      });
      $(ui.draggable).remove();
      $(this).find('.talk-box-close').css("display","block");

      // remove the data from the cell via X in top-right
      $(this).on('click', '.talk-box-close', function(){
        $parentBeforeMove = $(this).parent().parent();
        $parentBeforeMove.removeClass("inline-block").addClass('cell-content dropTarget ui-droppable');
        $removed = $(this).parent().appendTo('#talk-list').addClass("single-talk");
        $removed =  $(this)
                      .parent()
                      .clone()
                      .appendTo('#talk-list')
                      .draggable()
                      .addClass("single-talk");
        $removeParent = $removed.parent();
        $removeParent.droppable({disabled: false});

        $(this)
          .parent()
          .fadeOut("slow",function(){
            $(this).remove();
        });
      });
    }
  });
}
//});

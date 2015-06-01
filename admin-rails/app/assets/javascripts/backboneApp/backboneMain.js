_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
}

//--------------------------------------

var speakers = new Speakers();
speakers.fetch().done(function(){
  var speakersView = new SpeakersView({model: speakers});
  speakersView.render();

  // make hover on speakers work
  $(function() {
    $(' #thumbs > li ').each( function() { $(this).hoverdir({
      hoverDelay : 75
    }); } );
  });
});

var talks = new Talks();
talks.fetch().done(function(){
  var talksView = new TalksView({model: talks});
  $(".schedule-container").append(talksView.render().el);
});


// var chosenTalks = new ChosenTalks([
//   new Talk({talk_id: 1, title: "DT talk"}),
//   new Talk({talk_id: 1, title: "DT talk"}),
//   new Talk({talk_id: 2, title: "DT talasdsafsagk"}),
//   new Talk({talk_id: 3, title: "DT talasdsafsagqwfwqfwqfwqfk"}),
// ]);

var chosenTalks = new ChosenTalks();

// var tickets = new Tickets();


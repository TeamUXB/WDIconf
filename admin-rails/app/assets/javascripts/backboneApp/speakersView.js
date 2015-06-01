var SpeakersView = Backbone.View.extend({
  
  initialize: function(){
    var firstImgUrl = this.model.at(0).get('image');
    var firstImg = firstImgUrl;
    $('#Speakers-details-highlightedImage').attr('src', firstImg);
    var title = this.model.at(0).get('talks')[0]['title'];
    $(".hide-for-small-only").find('h3').html(title);
    var blurb = this.model.at(0).get('talks')[0]['blurb'];
    $(".hide-for-small-only").find('p').html(blurb);
    var name = this.model.at(0).get('name');
    $(".talk-details").find('h4').html(name);
    var start_time = this.model.at(0).get('talks')[0]['start_time'];
    var end_time = this.model.at(0).timePlusMinutes(start_time,15);
    $(".talk-details").find('h5').html(start_time + " - " + end_time);
    switch(this.model.at(0).get('talks')[0]['badge']) {
      case "FE":
        $("#Speakers-details").find('img.has-tip').attr('src','assets/badge_fed.svg');
        break;
      case "BE":
        $("#Speakers-details").find('img.has-tip').attr('src','assets/badge_bed.svg');
        break;
      case "Tech":
        $("#Speakers-details").find('img.has-tip').attr('src','assets/badge_tech.svg');
        break;
    };
  },

  events:{
    
  },

  addOneDesktop: function(speaker){
    var view = new SpeakerDesktopView({model: speaker});
    $("#thumbs").append(view.render().el);
  },

  addAllDesktop: function(){
    this.model.each(this.addOneDesktop, this);
  },

  addOneMobile: function(speaker){
    var view = new SpeakerMobileView({model: speaker});
    $("#thumbs-mobile").append(view.render().el);
  },

  addAllMobile: function(){
    this.model.each(this.addOneMobile, this);
  },

  render: function(){
    this.addAllDesktop();
    this.addAllMobile();
  }
});

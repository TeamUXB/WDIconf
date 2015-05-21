var SpeakerDesktopView = Backbone.View.extend({

  tagName: 'li',

  className: '',
  
  initialize: function(){
    var badge = this.model.get('talks')[0]['badge'];
    this.model.set('badge', badge);
    switch(this.model.get('badge')) {
      case "FE":
        return "cat-frontend";
        break;
      case "BE":
        return  "cat-backend";
        break;
      case "Tech":
        // this.className = "cat-tech";
        this.el = "cat-tech";
        console.log(this.el);
        break;
    };
  },

  events:{
    'click': "selectSpeaker"
  },

  selectSpeaker: function(event) {
    event.preventDefault();
    var name = this.model.attributes['name'];
    var title = this.model.get('talks')[0]['title'];
    var image_url = "http://localhost:3000" + this.model.get('image')['url'];
    var start_time = this.model.timePlusMinutes(this.model.get('talks')[0]['start_time']);
    var end_time = this.model.timePlusMinutes(start_time,15);
    switch(this.model.get('badge')) {
      case "FE":
        $("#Speakers-details").find('img.has-tip').attr('src','img/badge_fed.svg');
        break;
      case "BE":
        $("#Speakers-details").find('img.has-tip').attr('src','img/badge_bed.svg');
        break;
      case "Tech":
        $("#Speakers-details").find('img.has-tip').attr('src','img/badge_tech.svg');
        break;
    }

    this.renderSpeakersDetails(name, title, image_url, start_time, end_time);
  },

  renderSpeakersDetails: function(name, title, image_url, start_time, end_time) {
    var $bigSpeaker = $('#Speakers-details');
    $bigSpeaker.find('h4').text("By: " + name);
    $bigSpeaker.find('h3').text(title);
    $bigSpeaker.find("#Speakers-details-highlightedImage").attr('src', image_url);
    $bigSpeaker.find('h5').text(start_time + " - " + end_time);
  },

  render: function(){
    var desktopTemplate = _.template( $('#speaker-desktop-template').html());
    var model = this.model.toJSON();
    var name = model['name'];
    var title = model['talks'][0]['title'];
    var image_url =  model['image']['url'];
    this.$el.html(desktopTemplate({name: name, title: title, image_url: image_url} ));

    return this;
  }
});
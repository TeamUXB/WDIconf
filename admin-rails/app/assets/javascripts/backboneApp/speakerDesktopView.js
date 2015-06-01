var SpeakerDesktopView = Backbone.View.extend({

  tagName: 'li',

  className: '',
  
  initialize: function(){
    var badge = this.model.get('talks')[0]['badge'];
    this.model.set('badge', badge);
    $(this.el).attr('class',this.model.badgeClassName(badge));
  },

  events:{
    'click': "selectSpeaker"
  },

  selectSpeaker: function(event) {
    event.preventDefault();
    var name = this.model.attributes['name'];
    var title = this.model.get('talks')[0]['title'];
    var image_url = this.model.get('image');
    var start_time = this.model.timePlusMinutes(this.model.get('talks')[0]['start_time']);
    var end_time = this.model.timePlusMinutes(start_time,15);
    var blurb = this.model.get('talks')[0]['blurb'];
    var badge_url = this.model.badgeUrl(this.model.get('badge'));
    $("#Speakers-details").find('img.has-tip').attr('src', badge_url);

    this.renderSpeakersDetails(name, title, image_url, start_time, end_time, blurb);
  },

  renderSpeakersDetails: function(name, title, image_url, start_time, end_time, blurb) {
    var $bigSpeaker = $('#Speakers-details');
    $bigSpeaker.find('h4').text("By: " + name);
    $bigSpeaker.find('h3').text(title);
    $bigSpeaker.find("#Speakers-details-highlightedImage").attr('src', image_url);
    $bigSpeaker.find('h5').text(start_time + " - " + end_time);
    $bigSpeaker.find('p').html(blurb);
  },

  render: function(){
    var desktopTemplate = _.template( $('#speaker-desktop-template').html());
    var model = this.model.toJSON();
    var name = model['name'];
    var title = model['talks'][0]['title'];
    var image_url = model['image'];
    console.log(model['image']);
    this.$el.html(desktopTemplate({name: name, title: title, image_url: image_url} ));

    return this;
  }
});

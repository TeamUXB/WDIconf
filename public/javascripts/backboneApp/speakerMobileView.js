var SpeakerMobileView = Backbone.View.extend({

  tagName: 'li',

  className: 'Speakers-item',
  
  initialize: function(){
    var badge = this.model.get('talks')[0]['badge'];
    $(this.el).attr('class',this.model.badgeClassName(badge));
  },

  events:{
    
  },

  render: function(){
    var desktopTemplate = _.template( $('#speaker-mobile-template').html());
    var model = this.model.toJSON();
    var name = model['name'];
    var title = model['talks'][0]['title'];
    var start_time = this.model.timePlusMinutes(this.model.get('talks')[0]['start_time']);
    var end_time = this.model.timePlusMinutes(start_time,15);
    var image_url = model['image'];
    var badge_url = this.model.badgeUrl(this.model.get('badge'));
    this.$el.html(desktopTemplate({name:name, title: title, image_url: image_url, start_time: start_time, end_time: end_time, badge_url: badge_url}));

    return this;
  }
});

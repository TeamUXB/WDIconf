var TalkView = Backbone.View.extend({
  tagName: 'li',

  className: 'sched-row row medium-collapse',
  
  initialize: function(){
    
  },

  events:{
    "click #add-qty" : "addQty",
    "click #minus-qty" : "minusQty"
  },

  addQty: function(){
    // need validation that qty is <= limit
    var currentQty = parseInt($(this.el).find("#qty-input").val(),10);
    var totalQty = parseInt($("#ticketsQty").html(),10);
    $(this.el).find("#qty-input").val(currentQty + 1);
    $("#ticketsQty").html(totalQty + 1);
    this.qty = currentQty + 1;
    chosenTalks.add(new Talk({
      title: this.model.get('title'), 
      speaker: this.model.get('speaker')['name'],
      start_time: this.model.get('start_time'),
      end_time: this.model.timePlusMinutes(this.model.get('start_time'),15)
    }));
    console.log(chosenTalks);
  },

  minusQty: function(){
    //need validation that qty is > 0
    var currentQty = parseInt($(this.el).find("#qty-input").val(),10);
    var totalQty = parseInt($("#ticketsQty").html(),10);
    $(this.el).find("#qty-input").val(currentQty - 1);
    $("#ticketsQty").html(totalQty - 1);
    this.qty = currentQty - 1;
    chosenTalks.remove(chosenTalks.findWhere({title: this.model.get('title')}));
    console.log(chosenTalks);
  },

  render: function(){
    var talksTemplate = _.template( $('#talk-template').html());
    var model = this.model.toJSON();
    var title = model['title'];
    var speaker = model['speaker']['name'];
    var startTime = this.model.timePlusMinutes(model['start_time']);
    var endTime = this.model.timePlusMinutes(startTime, 15);
    this.$el.html(talksTemplate({title: title, speaker: speaker, startTime: startTime, endTime: endTime}));
    return this;
  }
});
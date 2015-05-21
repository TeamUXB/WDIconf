var TalksView = Backbone.View.extend({
  // className: 'schedule',
  
  initialize: function(){
    
  },

  events:{
    "click #FE" : "filterCollection",
    "click #BE" : "filterCollection",
    "click #Tech" : "filterCollection",
    "click #All" : "filterCollection",
    "click #talks-next" : "displayNextCollection",
    "click #previous-next" : "displayPreviousCollection"
  },

  displayNextCollection: function(){
    this.model.currentPage += 1;
    console.log(this.model.displayFilteredPagination(this.model.currentSelectedTag, this.model.currentPage));
  },

  filterCollection: function(e){
    this.model.currentSelectedTag = e.currentTarget.id;
    this.model.currentPage = 1;
    console.log(this.model.displayFilteredPagination(this.model.currentSelectedTag, this.model.currentPage));
  },

  addOne: function(talk){
    var view = new TalkView({model: talk});
    $("#Sched").append(view.render().el);
  },

  addAll: function(){
    this.model.each(this.addOne, this);
  },

  render: function(){
    var talksTemplate = _.template( $('#talks-template').html());
    this.$el.html(talksTemplate({currentPage: this.model.currentPage,maxPage: this.model.maxPage()}));
    this.addAll;
    return this;
  }
});
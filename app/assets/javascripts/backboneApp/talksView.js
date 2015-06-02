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
    "click #talks-previous" : "displayPreviousCollection",
  },

  displayNextCollection: function(){
    this.model.currentPage += 1;
    this.render();
    console.log(this.model.displayFilteredPagination(this.model.currentSelectedTag, this.model.currentPage));
  },

  displayPreviousCollection: function(){
    this.model.currentPage -= 1;
    this.render();
  },

  filterCollection: function(e){
    this.model.currentSelectedTag = e.currentTarget.id;
    this.model.currentPage = 1;
    console.log(this.model.displayFilteredPagination(this.model.currentSelectedTag, this.model.currentPage));
  },

  addOne: function(talk){
    var view = new TalkView({model: talk});
    $($(this.el).find("#Sched")).append(view.render().el);
  },

  addAll: function(){
    var tag = this.model.currentSelectedTag;
    var currentPage = this.model.currentPage;
    var filteredPagination = this.model.displayFilteredPagination(tag, currentPage);
    _.each(filteredPagination,this.addOne, this);
  },

  render: function(){
    var talksTemplate = _.template( $('#talks-template').html());
    this.$el.html(talksTemplate({currentPage: this.model.currentPage,maxPage: this.model.maxPage()}));
    this.addAll();
    return this;
  }
});
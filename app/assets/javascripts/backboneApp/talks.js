var Talks = Backbone.Collection.extend({
  model: Talk,

  url: '/api/talks',

  displayFilteredCollection: function(tag){
    tag = tag || 'All';
    if(tag === 'All'){
      return this;
    } else {
      return this.filter(function(talk) {
        return talk.get("badge") === tag;
      });
    };
  },
  
  displayFilteredPagination: function(tag, currentPage){
    tag = tag || 'All';
    var filtered = this.displayFilteredCollection(tag)
    var maxPage = this.maxPage();
    var startItem = (currentPage - 1) * this.perDesktopPage;
    var endItem = startItem + this.perDesktopPage;
    return filtered.slice(startItem, endItem);
  },

  perDesktopPage: 5,

  currentPage: 1,

  currentSelectedTag: 'All',

  maxPage: function(tag){
    tag = tag || 'All';
    var filtered = this.displayFilteredCollection(tag)
    return Math.ceil(filtered.length / this.perDesktopPage);
  }

});

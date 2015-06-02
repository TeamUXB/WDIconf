var Speakers = Backbone.Collection.extend({
  model: Speaker,
  url: '/api/speakers'
});

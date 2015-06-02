var Speakers = Backbone.Collection.extend({
  model: Speaker,
  url: 'http://localhost:3000/api/speakers'
});
var Tickets = Backbone.Collection.extend({
  model: Ticket,
  url: 'http://localhost:3000/api/tickets'
});
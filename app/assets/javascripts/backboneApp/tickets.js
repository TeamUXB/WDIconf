var Tickets = Backbone.Collection.extend({
  model: Ticket,
  url: '/api/tickets'
});

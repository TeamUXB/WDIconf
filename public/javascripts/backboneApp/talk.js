var Talk = Backbone.Model.extend({
  urlRoot: 'http://localhost:3000/api/talks',

  qty: 0,
  
  timePlusMinutes: function(startTime, minutesToAdd){
    minutesToAdd = minutesToAdd || 0;
    var array = startTime.split(':');
    var hours = parseInt(array[0]);
    var minutes = parseInt(array[1]);
    var date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setMinutes(date.getMinutes() + minutesToAdd);
    if (date.getMinutes() === 0){
      return date.getHours() + ":00";
    } else {
      return date.getHours() + ":" + date.getMinutes();
    }
  },
  //validation to check if qty <= limit
});

var runContactEmail = function(e) {
  e.preventDefault();

  // ajax to post email to dude
  var data = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  $.post('http://localhost:3000/api/mailer/contact', data);
};

var runPaymentEmail = function(e) {
  e.preventDefault();

  // ajax to post moneys to us
  var data = {
    first_name: e.target[0].value,
    surname: e.target[1].value,
    email: e.target[2].value,
    full_name: e.target[3].value,
    card_number: e.target[4].value,
    card_month: e.target[5].value,
    card_ccv: e.target[6].value
  };

  $.post('http://localhost:3000/api/mailer/payment', data, function(){
    console.log(' ~~~MODAL GO!');
    // ~~~MODAL GO!
  });
};

$(document).ready(function() {
  $('#myForm').submit(runPaymentEmail);
  $('#contactForm').submit(runContactEmail);
});




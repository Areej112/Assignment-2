
$(document).ready(function() {

  $('#first_form').submit(function(e) {
    e.preventDefault();
    var first_name = $('#first_name').val();
    var last_name = $('#last_name').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var age = $('#age').val();

    $(".error").remove();

    if (first_name.length < 1) {
      $('#first_name').after('<span class="error">This field is required</span>');
    }
    if (last_name.length < 1) {
      $('#last_name').after('<span class="error">This field is required</span>');
    }
    if (age.length < 1) {
      $('#age').after('<span class="error">This field is required</span>');
    }
    if (email.length < 1) {
      $('#email').after('<span class="error">This field is required</span>');
    } else {
      var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
      var validEmail = regEx.test(email); }
      if (!validEmail) {
       $('#email').after('<span class="error"></span>');
      }
    
    if (password.length < 5) {
      $('#password').after('<span class="error">Password must be at least 5 characters long</span>');
    }
  });

});
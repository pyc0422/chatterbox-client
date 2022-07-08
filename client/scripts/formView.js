// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form

    event.preventDefault();
    //App.$spinner.show();
    //FormView.setStatus(true);
    var message = {
      username: App.username,
      text: $('#message').val(),
      roomname: $('#rooms select').find(':selected').text()
    };
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.
    App.startSpinner();
    Parse.create(message, RoomsView.handleChange);
    console.log('click!');
    App.stopSpinner();
    event.target.reset();

  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};
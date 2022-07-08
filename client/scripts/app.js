// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    //App.startSpinner();
    //App.fetch(App.stopSpinner);
    App.stopSpinner();

    App.fetch();
    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    //setInterval(MessagesView.render, 5000);
  },

  fetch: function(callback = ()=>{}) {

    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      data.forEach((item) => {
        MessagesView.renderMessage(item);
        Messages.add(item);
        if (Rooms._data.indexOf(item.roomname) === -1 && item.roomname) {
          RoomsView.renderRoom(item.roomname);
          Rooms.add(item.roomname);
        }
      });
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views.
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};

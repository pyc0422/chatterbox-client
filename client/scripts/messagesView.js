// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    $('#refresh').on('click', RoomsView.handleChange);
    $('#chats').children().on('click', MessagesView.handleClick);
    // add inside $chat
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');
    Parse.readAll((data) => {
      data.forEach(item => MessagesView.renderMessage(item));
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //create a new message
    MessagesView.$chats.append(MessageView.render(message));
    // add inside $chat


    // call MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    event.preventDefault();
    var $username = $(this);
    console.log($username);
    if (Friends.toggleStatus($username.text()) === false) {
      Friends.addFriend($username.text());
    } else {
      $username.css('font-color', 'red');
    }
    console.log('friends clicked');
  }
};
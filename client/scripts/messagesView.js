// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
    $('#refresh').on('click', RoomsView.handleChange);
    MessagesView.$chats.click(MessagesView.handleClick);
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
    MessagesView.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    //event.preventDefault();
    $('#chats .username').click(function() {
      event.preventDefault();
      var username = $(this).attr('id').replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '');
      $(this).attr('id', username);
      if (!Friends.toggleStatus(username)) {
        Friends.addFriend(username);
      }
      $('#chats #' + username).siblings().css('color', 'red');
      console.log('friends clicked');
    });

  }
};
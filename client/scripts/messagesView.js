// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //var html = '';
    Parse.readAll((data) => {
      data.forEach(item => MessagesView.renderMessage(item));
    });
    //MessagesView.$chats.append(html);

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
    $('#chats .username').on('click', Friends.toggleStatus(message.username));
    // add inside $chat


    // call MessagesView.render();
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $chats.find('.username').text();

  }
};
// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.html('');
    App.fetch(MessagesView.render);
    MessagesView.render();
    $('#refresh').on('click', RoomsView.handleChange);
    MessagesView.$chats.mousemove(MessagesView.handleClick);

    // add inside $chat
  },

  render: function() {
    // TODO: Render _all_ the messages.
    MessagesView.$chats.html('');
    Parse.readAll((data) => {
      data.forEach(item => {
        if (item.username && item.username.length > 0) {
          item.username = item.username.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '');
          MessagesView.renderMessage(item);
        }
      });
    });
    console.log('friends: ', Friends._data);
    // var argArr = Array.from(arguments);
    // argArr.forEach(item => {
    //   if (item.username && item.username.length > 0) {
    //     item.username = item.username.replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '');
    //     MessagesView.renderMessage(item);
    //   }
    // });
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

      //var username = $(this).attr('id').replace(/[!"#$%&'()*+,.\/:;<=>?@[\\\]^`{|}~]/g, '');
      var username = $(this).attr('id');
      //$(this).attr('id', username);
      Friends.addFriend(username);
      //$('#chats #' + username).siblings().css('color', 'red');
      //console.log('username: ', usernames);
      // var arr = usernames.split(' ');
      // console.log('arr: ', arr);

    });
  }
};
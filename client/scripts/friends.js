// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  _data: [],

  // TODO: Define methods which allow you to add, toggle,

  toggleStatus: function(friend) {
    $('#chats #' + friend).attr('class', 'friend');
    $('#chats #' + friend).siblings().css('color', 'red');
  },
  // and check the friendship status of other users.
  addFriend: function(name) {
    if (Friends._data.indexOf(name) === -1 && name !== App.username) {
      Friends._data.push(name);
      Friends.toggleStatus(name);
    }
  }
};
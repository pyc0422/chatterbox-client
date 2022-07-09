// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // claer html
    //RoomsView.$select.html('');
    // get all the data from API and add roomname to our Rooms._data
    // Parse.readAll((data) => {
    //   data.forEach(function(item) {
    //     if (Rooms._data.indexOf(item.roomname) === -1 && item.roomname) {
    //       RoomsView.renderRoom(item.roomname);
    //       Rooms.add(item.roomname);
    //     }
    //   });
    // });
    //RoomsView.$select.html('');
    RoomsView.render();

    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.change(RoomsView.handleChange);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    RoomsView.$select.html('');
    RoomsView.$select.show();
    var initialOption = '<option> Lobby </option>';
    RoomsView.$select.append(initialOption);
    var roomOption = '<option class="editable" value="Create new room">Create new room</option>';
    RoomsView.$select.append(roomOption);
    Rooms._data.forEach(function(room) {
      RoomsView.renderRoom(room);
    });
    $('.editOption').hide();
    var initialText = $('.editable').val();
    $('.editOption').attr('placeholder', initialText);
    var selected = $('select option:selected').attr('class');
    // when new room has been selected hide 'selec' show input so user can tpye
    RoomsView.$select.change(function() {
      var selected = $('select option:selected').attr('class');
      if (selected === 'editable') {
        $('.editOption').show();
        RoomsView.$select.hide();
        // change option's value to user input
        $('.editOption').keyup(function() {
          var editText = $('.editOption').val();
          $('.editable').val(editText);
          $('.editable').html(editText);
        });
      }
    });
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room.
    //create a room by the roomname
    var room = $('<option></option>').text(roomname).attr('value', roomname);
    // add room to roomsview
    RoomsView.$select.append(room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var selectedRoom = $('select option:selected').val();
    $('#chats').html('');
    if (selectedRoom === 'Lobby') {
      MessagesView.render();
    } else {
      // App.fetch(function(data) {
      //   data.forEach((item) => {
      //     if (item.roomname === selectedRoom) {
      //       MessagesView.renderMessage(item);
      //     }
      //   });
      // });
      Parse.readAll((data) => {
        data.forEach((item) => {
          if (item.roomname === selectedRoom) {
            MessagesView.renderMessage(item);
          }
        });
      });
    }
    console.log('rooms view friends data: ', Friends._data);
    // Friends._data.forEach(function(friend) {
    //   var a = $('#chats #' + friend).attr('id');//.addClass('class', 'friend');
    //   console.log(a);
    //   $('#chats #' + friend).siblings().css('color', 'red');
    //   //Friends.toggleStatus(friend);
    // });


  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.
    event.preventDefault();
    //var editText = $('.editOption').val();
    var roomname = $('select option:selected').val();
    if (roomname && roomname.length > 0) {
      console.log('selected val: ', roomname);
      Rooms.add(roomname);
      console.log('add room clicked');
      RoomsView.render();
      MessagesView.render();
    }
  }

};

// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
    <div class="chat">
      <div class="username" id="<%- username %>"><%- username %> - <em class="roomname"><%- roomname %></em></div>

      <div class="text"><%- text %></div>
    </div>
    `
  )
};

// // render: _.template(`
// <div class="chat">
//   <div class="username" id="<%- username %>"><%- username %> -
// <em><%-roomname %></em></div>
//   <div class="message"><%- text %></div>
// </div>
// `)
/*   '<--'+
      '<div class="chat">' +
        '<div class="username">' + <%- username %> + '</div>' +
        '<div class="text">' + <%- text %> + '</div>' +
      '</div>'
     '-->'
        <a class="roomname" id="<%- roomname %>"><%- roomname %></a>
  */
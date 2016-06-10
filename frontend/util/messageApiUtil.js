var ServerActions = require('./../actions/serverActions');

var UsersApiUtil = {
  createNewConversation: function (targetUser) {
    $.ajax({
      url: '/api/conversations',
      type: 'POST',
      dataType: 'json',
      data: { other_user: targetUser },
      success: function (conversation) {
        ServerActions.receiveConversation(conversation);
      },
    });
  },

  openConversation: function (targetUser) {
    $.ajax({
      url: '/api/user/conversations/' + targetUser.username,
      type: 'GET',
      dataType: 'json',
      success: function (conversation) {
        ServerActions.receiveConversation(conversation);
      },
    });
  },

  sendMessage: function (message, receiver_id) {
    var new_message = { content: message, receiver_id: receiver_id };
    $.ajax({
      url: '/api/messages',
      type: 'POST',
      dataType: 'json',
      data: { message: new_message },
      success: function (message) {
        ServerActions.receiveMessage(message);
      },
    });
  }
};

module.exports = UsersApiUtil;

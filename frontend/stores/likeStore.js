var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var LikeConstants = require('../constants/likeConstants');

// var _users = [];

var LikeStore = new Store(AppDispatcher);

// LikeStore.allUsers = function () {
//   return _users;
// };
//
// LikeStore.__onDispatch = function (payload) {
//   switch(payload.actionType) {
//     case LikeConstants.GET_ALL_USERS:
//       break;
//     }
//     this.__emitChange();
// };

module.exports = LikeStore;
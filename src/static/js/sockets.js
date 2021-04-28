(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  return socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
  aSocket.on(events.disconnected, _notifications.handleDisconnected);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfN2VlZDVhLmpzIl0sIm5hbWVzIjpbInNvY2tldCIsImdldFNvY2tldCIsInVwZGF0ZVNvY2tldCIsImFTb2NrZXQiLCJpbml0U29ja2V0cyIsIndpbmRvdyIsImV2ZW50cyIsIm9uIiwibmV3VXNlciIsImhhbmRsZU5ld1VzZXIiLCJkaXNjb25uZWN0ZWQiLCJoYW5kbGVEaXNjb25uZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxNQUFNLEdBQUcsSUFBYjs7QUFFTyxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLFNBQU1ELE1BQU47QUFBQSxDQUFsQjs7OztBQUVBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUFDLE9BQU87QUFBQSxTQUFLSCxNQUFNLEdBQUdHLE9BQWQ7QUFBQSxDQUE1Qjs7OztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNELE9BQUQsRUFBYTtBQUNwQyxnQkFBaUJFLE1BQWpCO0FBQUEsTUFBT0MsTUFBUCxXQUFPQSxNQUFQO0FBQ0FKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDQU4sRUFBQUEsT0FBTyxDQUFDSSxFQUFSLENBQVdELE1BQU0sQ0FBQ0ksWUFBbEIsRUFBZ0NDLGlDQUFoQztBQUNILENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVEaXNjb25uZWN0ZWQsIGhhbmRsZU5ld1VzZXIgfSBmcm9tIFwiLi9ub3RpZmljYXRpb25zXCI7XHJcblxyXG5sZXQgc29ja2V0ID0gbnVsbDtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXQgPSAoKSA9PiBzb2NrZXQ7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0ID0gYVNvY2tldCA9PiAoc29ja2V0ID0gYVNvY2tldCk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xyXG4gICAgY29uc3Qge2V2ZW50c30gPSB3aW5kb3c7XHJcbiAgICB1cGRhdGVTb2NrZXQoYVNvY2tldCk7XHJcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcclxuICAgIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCwgaGFuZGxlRGlzY29ubmVjdGVkKTtcclxufTsiXX0=
},{"./notifications":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var body = document.querySelector("body");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.className = "notification";
  body.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  fireNotification("".concat(nickname, " just joined!"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGFzc05hbWUiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FDLEVBQUFBLFlBQVksQ0FBQ0ssU0FBYixHQUF5QixjQUF6QjtBQUNBWCxFQUFBQSxJQUFJLENBQUNZLFdBQUwsQ0FBaUJOLFlBQWpCO0FBQ0gsQ0FORDs7QUFRTyxJQUFNTyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWdCO0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjO0FBQ3pDWCxFQUFBQSxnQkFBZ0IsV0FBSVcsUUFBSixvQkFBNkIsa0JBQTdCLENBQWhCO0FBQ0gsQ0FGTTs7OztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsUUFBZ0I7QUFBQSxNQUFkRCxRQUFjLFNBQWRBLFFBQWM7QUFDOUNYLEVBQUFBLGdCQUFnQixXQUFJVyxRQUFKLGtCQUEyQixrQkFBM0IsQ0FBaEI7QUFDSCxDQUZNIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cclxuY29uc3QgZmlyZU5vdGlmaWNhdGlvbiA9ICh0ZXh0LCBjb2xvcikgPT4ge1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG5vdGlmaWNhdGlvbi5pbm5lclRleHQgPSB0ZXh0O1xyXG4gICAgbm90aWZpY2F0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG4gICAgbm90aWZpY2F0aW9uLmNsYXNzTmFtZSA9IFwibm90aWZpY2F0aW9uXCI7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHtuaWNrbmFtZX0pID0+IHtcclxuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDAsIDEyMiwgMjU1KVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RlZCA9ICh7bmlja25hbWV9KSA9PiB7XHJcbiAgICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xyXG59Il19
},{}]},{},[1])
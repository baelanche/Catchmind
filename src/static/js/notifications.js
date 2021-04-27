(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var notifications = document.getElementById("jsNotifications");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notifications.appendChild(notification);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmJiNjExYTQuanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9ucyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaXJlTm90aWZpY2F0aW9uIiwidGV4dCIsImNvbG9yIiwibm90aWZpY2F0aW9uIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiYXBwZW5kQ2hpbGQiLCJoYW5kbGVOZXdVc2VyIiwibmlja25hbWUiLCJoYW5kbGVEaXNjb25uZWN0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUF0Qjs7QUFFQSxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUN0QyxNQUFNQyxZQUFZLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixLQUF2QixDQUFyQjtBQUNBRCxFQUFBQSxZQUFZLENBQUNFLFNBQWIsR0FBeUJKLElBQXpCO0FBQ0FFLEVBQUFBLFlBQVksQ0FBQ0csS0FBYixDQUFtQkMsZUFBbkIsR0FBcUNMLEtBQXJDO0FBQ0FMLEVBQUFBLGFBQWEsQ0FBQ1csV0FBZCxDQUEwQkwsWUFBMUI7QUFDSCxDQUxEOztBQU9PLElBQU1NLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBZ0I7QUFBQSxNQUFkQyxRQUFjLFFBQWRBLFFBQWM7QUFDekNWLEVBQUFBLGdCQUFnQixXQUFJVSxRQUFKLG9CQUE2QixrQkFBN0IsQ0FBaEI7QUFDSCxDQUZNOzs7O0FBSUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixRQUFnQjtBQUFBLE1BQWRELFFBQWMsU0FBZEEsUUFBYztBQUM5Q1YsRUFBQUEsZ0JBQWdCLFdBQUlVLFFBQUosa0JBQTJCLGtCQUEzQixDQUFoQjtBQUNILENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmaWNhdGlvbnNcIik7XHJcblxyXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcbiAgICBub3RpZmljYXRpb25zLmFwcGVuZENoaWxkKG5vdGlmaWNhdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHtuaWNrbmFtZX0pID0+IHtcclxuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkIWAsIFwicmdiKDAsIDEyMiwgMjU1KVwiKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RlZCA9ICh7bmlja25hbWV9KSA9PiB7XHJcbiAgICBmaXJlTm90aWZpY2F0aW9uKGAke25pY2tuYW1lfSBqdXN0IGxlZnQhYCwgXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xyXG59Il19
},{}]},{},[1])
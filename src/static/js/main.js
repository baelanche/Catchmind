(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewMessage = void 0;

var _sockets = require("./sockets");

var messages = document.getElementById("jsMessages");
var sendMsg = document.getElementById("jsSendMsg");

var appendMsg = function appendMsg(text, nickname) {
  var li = document.createElement("li");
  li.innerHTML = "\n        <span class=\"author ".concat(nickname ? "out" : "self", "\">").concat(nickname ? nickname : "You", "</span> : ").concat(text, "\n    ");
  messages.appendChild(li);
};

var handleSendMsg = function handleSendMsg(event) {
  event.preventDefault();
  var input = sendMsg.querySelector("input");
  var value = input.value;
  (0, _sockets.getSocket)().emit(window.events.sendMsg, {
    message: value
  });
  input.value = "";
  appendMsg(value);
};

var handleNewMessage = function handleNewMessage(_ref) {
  var message = _ref.message,
      nickname = _ref.nickname;
  appendMsg(message, nickname);
};

exports.handleNewMessage = handleNewMessage;

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYXQuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImVtaXQiLCJ3aW5kb3ciLCJldmVudHMiLCJtZXNzYWdlIiwiaGFuZGxlTmV3TWVzc2FnZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUFqQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWhCOztBQUVBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsUUFBUCxFQUFvQjtBQUNsQyxNQUFNQyxFQUFFLEdBQUdOLFFBQVEsQ0FBQ08sYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELEVBQUFBLEVBQUUsQ0FBQ0UsU0FBSCw0Q0FDMEJILFFBQVEsR0FBRyxLQUFILEdBQVcsTUFEN0MsZ0JBQ3dEQSxRQUFRLEdBQUdBLFFBQUgsR0FBYyxLQUQ5RSx1QkFDZ0dELElBRGhHO0FBR0FMLEVBQUFBLFFBQVEsQ0FBQ1UsV0FBVCxDQUFxQkgsRUFBckI7QUFDSCxDQU5EOztBQVFBLElBQU1JLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQUMsS0FBSyxFQUFJO0FBQzNCQSxFQUFBQSxLQUFLLENBQUNDLGNBQU47QUFDQSxNQUFNQyxLQUFLLEdBQUdYLE9BQU8sQ0FBQ1ksYUFBUixDQUFzQixPQUF0QixDQUFkO0FBQ0EsTUFBT0MsS0FBUCxHQUFnQkYsS0FBaEIsQ0FBT0UsS0FBUDtBQUNBLDRCQUFZQyxJQUFaLENBQWlCQyxNQUFNLENBQUNDLE1BQVAsQ0FBY2hCLE9BQS9CLEVBQXdDO0FBQUNpQixJQUFBQSxPQUFPLEVBQUNKO0FBQVQsR0FBeEM7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNILENBUEQ7O0FBU08sSUFBTUssZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQUF5QjtBQUFBLE1BQXZCRCxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkZCxRQUFjLFFBQWRBLFFBQWM7QUFDckRGLEVBQUFBLFNBQVMsQ0FBQ2dCLE9BQUQsRUFBVWQsUUFBVixDQUFUO0FBQ0gsQ0FGTTs7OztBQUlQLElBQUdILE9BQUgsRUFBWTtBQUNSQSxFQUFBQSxPQUFPLENBQUNtQixnQkFBUixDQUF5QixRQUF6QixFQUFtQ1gsYUFBbkM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFNvY2tldCB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IG1lc3NhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc01lc3NhZ2VzXCIpO1xyXG5jb25zdCBzZW5kTXNnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc1NlbmRNc2dcIik7XHJcblxyXG5jb25zdCBhcHBlbmRNc2cgPSAodGV4dCwgbmlja25hbWUpID0+IHtcclxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGkuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYXV0aG9yICR7bmlja25hbWUgPyBcIm91dFwiIDogXCJzZWxmXCJ9XCI+JHtuaWNrbmFtZSA/IG5pY2tuYW1lIDogXCJZb3VcIn08L3NwYW4+IDogJHt0ZXh0fVxyXG4gICAgYDtcclxuICAgIG1lc3NhZ2VzLmFwcGVuZENoaWxkKGxpKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlU2VuZE1zZyA9IGV2ZW50ID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IHNlbmRNc2cucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY29uc3Qge3ZhbHVlfSA9IGlucHV0O1xyXG4gICAgZ2V0U29ja2V0KCkuZW1pdCh3aW5kb3cuZXZlbnRzLnNlbmRNc2csIHttZXNzYWdlOnZhbHVlfSk7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBhcHBlbmRNc2codmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3TWVzc2FnZSA9ICh7bWVzc2FnZSwgbmlja25hbWV9KSA9PiB7XHJcbiAgICBhcHBlbmRNc2cobWVzc2FnZSwgbmlja25hbWUpO1xyXG59XHJcblxyXG5pZihzZW5kTXNnKSB7XHJcbiAgICBzZW5kTXNnLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlU2VuZE1zZyk7XHJcbn0iXX0=
},{"./sockets":6}],2:[function(require,module,exports){
"use strict";

require("./login");

require("./sockets");

require("./chat");

require("./paint");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfYTI4MGQ1MWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjtcclxuaW1wb3J0IFwiLi9zb2NrZXRzXCI7XHJcbmltcG9ydCBcIi4vY2hhdFwiO1xyXG5pbXBvcnQgXCIuL3BhaW50XCI7Il19
},{"./chat":1,"./login":3,"./paint":5,"./sockets":6}],3:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var NICKNAME = "nickname";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  logIn(value);
  body.className = LOGGED_IN;
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCSCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNSSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDeEIsTUFBTUksTUFBTSxHQUFHQyxFQUFFLENBQUMsR0FBRCxDQUFqQjtBQUNBRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWUMsTUFBTSxDQUFDQyxNQUFQLENBQWNDLFdBQTFCLEVBQXVDO0FBQUNULElBQUFBLFFBQVEsRUFBUkE7QUFBRCxHQUF2QztBQUNBLDRCQUFZSSxNQUFaO0FBQ0gsQ0FKRDs7QUFNQSxJQUFHSixRQUFRLEtBQUssSUFBaEIsRUFBc0I7QUFDbEJSLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJiLFVBQWpCO0FBQ0gsQ0FGRCxNQUVPO0FBQ0hMLEVBQUFBLElBQUksQ0FBQ2tCLFNBQUwsR0FBaUJaLFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBRUQsSUFBTVcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR25CLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBT3FCLEtBQVAsR0FBZ0JELEtBQWhCLENBQU9DLEtBQVA7QUFDQUQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJqQixRQUFyQixFQUErQmdCLEtBQS9CO0FBQ0FaLEVBQUFBLEtBQUssQ0FBQ1ksS0FBRCxDQUFMO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWixTQUFqQjtBQUNILENBUkQ7O0FBVUEsSUFBR0gsU0FBSCxFQUFjO0FBQ1ZBLEVBQUFBLFNBQVMsQ0FBQ3NCLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluaXRTb2NrZXRzIH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5jb25zdCBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIik7XHJcblxyXG5jb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIjtcclxuY29uc3QgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiO1xyXG5jb25zdCBOSUNLTkFNRSA9IFwibmlja25hbWVcIjtcclxuY29uc3Qgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dJbiA9IChuaWNrbmFtZSkgPT4ge1xyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpO1xyXG4gICAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwge25pY2tuYW1lfSk7XHJcbiAgICBpbml0U29ja2V0cyhzb2NrZXQpO1xyXG59XHJcblxyXG5pZihuaWNrbmFtZSA9PT0gbnVsbCkge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dJbihuaWNrbmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY29uc3Qge3ZhbHVlfSA9IGlucHV0O1xyXG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICAgIGxvZ0luKHZhbHVlKTtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG59XHJcblxyXG5pZihsb2dpbkZvcm0pIHtcclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpXHJcbn0iXX0=
},{"./sockets":6}],4:[function(require,module,exports){
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
},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleFilled = exports.handleStrokedPath = exports.handleBeganPath = void 0;

var _sockets = require("./sockets");

var canvas = document.getElementById("jsCanvas");
var ctx = canvas.getContext("2d");
var colors = document.getElementsByClassName("jsColor");
var mode = document.getElementById("jsMode");
var INITIAL_COLOR = "#2c2c2c";
var CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;
var painting = false;
var filling = false;

var stopPainting = function stopPainting() {
  painting = false;
};

var startPainting = function startPainting() {
  painting = true;
};

var beginPath = function beginPath(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

var strokePath = function strokePath(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var currentColor = ctx.strokeStyle;

  if (color !== null) {
    currentColor = color;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

var onMouseMove = function onMouseMove(event) {
  var x = event.offsetX;
  var y = event.offsetY;

  if (!painting) {
    beginPath(x, y);
    (0, _sockets.getSocket)().emit(window.events.beginPath, {
      x: x,
      y: y
    });
  } else if (!filling) {
    strokePath(x, y);
    (0, _sockets.getSocket)().emit(window.events.strokePath, {
      x: x,
      y: y,
      color: ctx.strokeStyle
    });
  }
};

var handleColorClick = function handleColorClick(event) {
  var color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

var handleModeClick = function handleModeClick() {
  if (filling === true) {
    filling = false;
    mode.innerText = "Fill";
  } else {
    filling = true;
    mode.innerText = "Paint";
  }
};

var fill = function fill() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var currentColor = ctx.fillStyle;

  if (color !== null) {
    ctx.fillStyle = color;
  }

  ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  ctx.fillStyle = currentColor;
};

var handleCanvasClick = function handleCanvasClick() {
  if (filling) {
    fill();
    (0, _sockets.getSocket)().emit(window.events.fill, {
      color: ctx.fillStyle
    });
  }
};

var handleCM = function handleCM(event) {
  event.preventDefault();
};

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(function (color) {
  return color.addEventListener("click", handleColorClick);
});

if (mode) {
  mode.addEventListener("click", handleModeClick);
}

var handleBeganPath = function handleBeganPath(_ref) {
  var x = _ref.x,
      y = _ref.y;
  return beginPath(x, y);
};

exports.handleBeganPath = handleBeganPath;

var handleStrokedPath = function handleStrokedPath(_ref2) {
  var x = _ref2.x,
      y = _ref2.y,
      color = _ref2.color;
  return strokePath(x, y, color);
};

exports.handleStrokedPath = handleStrokedPath;

var handleFilled = function handleFilled(_ref3) {
  var color = _ref3.color;
  return fill(color);
};

exports.handleFilled = handleFilled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhaW50LmpzIl0sIm5hbWVzIjpbImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjdHgiLCJnZXRDb250ZXh0IiwiY29sb3JzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm1vZGUiLCJJTklUSUFMX0NPTE9SIiwiQ0FOVkFTX1NJWkUiLCJ3aWR0aCIsImhlaWdodCIsImZpbGxTdHlsZSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJsaW5lV2lkdGgiLCJwYWludGluZyIsImZpbGxpbmciLCJzdG9wUGFpbnRpbmciLCJzdGFydFBhaW50aW5nIiwiYmVnaW5QYXRoIiwieCIsInkiLCJtb3ZlVG8iLCJzdHJva2VQYXRoIiwiY29sb3IiLCJjdXJyZW50Q29sb3IiLCJsaW5lVG8iLCJzdHJva2UiLCJvbk1vdXNlTW92ZSIsImV2ZW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwiaGFuZGxlQ29sb3JDbGljayIsInRhcmdldCIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaGFuZGxlTW9kZUNsaWNrIiwiaW5uZXJUZXh0IiwiZmlsbCIsImhhbmRsZUNhbnZhc0NsaWNrIiwiaGFuZGxlQ00iLCJwcmV2ZW50RGVmYXVsdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJBcnJheSIsImZyb20iLCJmb3JFYWNoIiwiaGFuZGxlQmVnYW5QYXRoIiwiaGFuZGxlU3Ryb2tlZFBhdGgiLCJoYW5kbGVGaWxsZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixVQUF4QixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQU1DLE1BQU0sR0FBR0osUUFBUSxDQUFDSyxzQkFBVCxDQUFnQyxTQUFoQyxDQUFmO0FBQ0EsSUFBTUMsSUFBSSxHQUFHTixRQUFRLENBQUND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Q0FBL0I7QUFBQSxDQUExQjs7OztBQUNBLElBQU0yQixZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBLE1BQUUzQixLQUFGLFNBQUVBLEtBQUY7QUFBQSxTQUFhaUIsSUFBSSxDQUFDakIsS0FBRCxDQUFqQjtBQUFBLENBQXJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0U29ja2V0IH0gZnJvbSBcIi4vc29ja2V0c1wiO1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0NhbnZhc1wiKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuY29uc3QgY29sb3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImpzQ29sb3JcIik7XHJcbmNvbnN0IG1vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTW9kZVwiKTtcclxuXHJcbmNvbnN0IElOSVRJQUxfQ09MT1IgPSBcIiMyYzJjMmNcIjtcclxuY29uc3QgQ0FOVkFTX1NJWkUgPSA3MDA7XHJcblxyXG5jYW52YXMud2lkdGggPSBDQU5WQVNfU0laRTtcclxuY2FudmFzLmhlaWdodCA9IENBTlZBU19TSVpFO1xyXG5cclxuY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbmN0eC5zdHJva2VTdHlsZSA9IElOSVRJQUxfQ09MT1I7XHJcbmN0eC5maWxsU3R5bGUgPSBJTklUSUFMX0NPTE9SO1xyXG5jdHgubGluZVdpZHRoID0gMi41O1xyXG5cclxubGV0IHBhaW50aW5nID0gZmFsc2U7XHJcbmxldCBmaWxsaW5nID0gZmFsc2U7XHJcblxyXG5jb25zdCBzdG9wUGFpbnRpbmcgPSAoKSA9PiB7XHJcbiAgcGFpbnRpbmcgPSBmYWxzZTtcclxufVxyXG5cclxuY29uc3Qgc3RhcnRQYWludGluZyA9ICgpID0+IHtcclxuICBwYWludGluZyA9IHRydWU7XHJcbn1cclxuXHJcbmNvbnN0IGJlZ2luUGF0aCA9ICh4LCB5KSA9PiB7XHJcbiAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gIGN0eC5tb3ZlVG8oeCwgeSk7XHJcbn07XHJcblxyXG5jb25zdCBzdHJva2VQYXRoID0gKHgsIHksIGNvbG9yID0gbnVsbCkgPT4ge1xyXG4gIGxldCBjdXJyZW50Q29sb3IgPSBjdHguc3Ryb2tlU3R5bGU7XHJcbiAgaWYoY29sb3IgIT09IG51bGwpIHtcclxuICAgIGN1cnJlbnRDb2xvciA9IGNvbG9yO1xyXG4gIH1cclxuICBjdHgubGluZVRvKHgsIHkpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBjdXJyZW50Q29sb3I7XHJcbn07XHJcblxyXG5jb25zdCBvbk1vdXNlTW92ZSA9IChldmVudCkgPT4ge1xyXG4gIGNvbnN0IHggPSBldmVudC5vZmZzZXRYO1xyXG4gIGNvbnN0IHkgPSBldmVudC5vZmZzZXRZO1xyXG4gIGlmICghcGFpbnRpbmcpIHtcclxuICAgIGJlZ2luUGF0aCh4LCB5KTtcclxuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5iZWdpblBhdGgsIHsgeCwgeSB9KTtcclxuICB9IGVsc2UgaWYoIWZpbGxpbmcpIHtcclxuICAgIHN0cm9rZVBhdGgoeCwgeSk7XHJcbiAgICBnZXRTb2NrZXQoKS5lbWl0KHdpbmRvdy5ldmVudHMuc3Ryb2tlUGF0aCwgeyB4LCB5LCBjb2xvcjogY3R4LnN0cm9rZVN0eWxlIH0pO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ29sb3JDbGljayA9IChldmVudCkgPT4ge1xyXG4gIGNvbnN0IGNvbG9yID0gZXZlbnQudGFyZ2V0LnN0eWxlLmJhY2tncm91bmRDb2xvcjtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBjb2xvcjtcclxuICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZU1vZGVDbGljayA9ICgpID0+IHtcclxuICBpZiAoZmlsbGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgZmlsbGluZyA9IGZhbHNlO1xyXG4gICAgbW9kZS5pbm5lclRleHQgPSBcIkZpbGxcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgZmlsbGluZyA9IHRydWU7XHJcbiAgICBtb2RlLmlubmVyVGV4dCA9IFwiUGFpbnRcIjtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGZpbGwgPSAoY29sb3IgPSBudWxsKSA9PiB7XHJcbiAgbGV0IGN1cnJlbnRDb2xvciA9IGN0eC5maWxsU3R5bGU7XHJcbiAgaWYoY29sb3IgIT09IG51bGwpIHtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICB9XHJcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIENBTlZBU19TSVpFLCBDQU5WQVNfU0laRSk7XHJcbiAgY3R4LmZpbGxTdHlsZSA9IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlQ2FudmFzQ2xpY2sgPSAoKSA9PiB7XHJcbiAgaWYgKGZpbGxpbmcpIHtcclxuICAgIGZpbGwoKTtcclxuICAgIGdldFNvY2tldCgpLmVtaXQod2luZG93LmV2ZW50cy5maWxsLCB7Y29sb3I6IGN0eC5maWxsU3R5bGV9KTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUNNID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxufVxyXG5cclxuaWYgKGNhbnZhcykge1xyXG4gIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uTW91c2VNb3ZlKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydFBhaW50aW5nKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgc3RvcFBhaW50aW5nKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNhbnZhc0NsaWNrKTtcclxuICBjYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNvbnRleHRtZW51XCIsIGhhbmRsZUNNKTtcclxufVxyXG5cclxuQXJyYXkuZnJvbShjb2xvcnMpLmZvckVhY2goY29sb3IgPT5cclxuICBjb2xvci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ29sb3JDbGljaylcclxuKTtcclxuXHJcbmlmIChtb2RlKSB7XHJcbiAgbW9kZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlTW9kZUNsaWNrKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZUJlZ2FuUGF0aCA9ICh7IHgsIHkgfSkgPT4gYmVnaW5QYXRoKHgsIHkpO1xyXG5leHBvcnQgY29uc3QgaGFuZGxlU3Ryb2tlZFBhdGggPSAoeyB4LCB5LCBjb2xvciB9KSA9PiBzdHJva2VQYXRoKHgsIHksIGNvbG9yKTtcclxuZXhwb3J0IGNvbnN0IGhhbmRsZUZpbGxlZCA9ICh7Y29sb3J9KSA9PiBmaWxsKGNvbG9yKTsiXX0=
},{"./sockets":6}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.getSocket = void 0;

var _chat = require("./chat");

var _notifications = require("./notifications");

var _paint = require("./paint");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  socket = aSocket;
  socket.on(events.newUser, _notifications.handleNewUser);
  socket.on(events.disconnected, _notifications.handleDisconnected);
  socket.on(events.newMsg, _chat.handleNewMessage);
  socket.on(events.beganPath, _paint.handleBeganPath);
  socket.on(events.strokedPath, _paint.handleStrokedPath);
  socket.on(events.filled, _paint.handleFilled);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwiaW5pdFNvY2tldHMiLCJhU29ja2V0Iiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciIsImRpc2Nvbm5lY3RlZCIsImhhbmRsZURpc2Nvbm5lY3RlZCIsIm5ld01zZyIsImhhbmRsZU5ld01lc3NhZ2UiLCJiZWdhblBhdGgiLCJoYW5kbGVCZWdhblBhdGgiLCJzdHJva2VkUGF0aCIsImhhbmRsZVN0cm9rZWRQYXRoIiwiZmlsbGVkIiwiaGFuZGxlRmlsbGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7O0FBRU8sSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxTQUFNRCxNQUFOO0FBQUEsQ0FBbEI7Ozs7QUFFQSxJQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxPQUFELEVBQWE7QUFDcEMsZ0JBQWlCQyxNQUFqQjtBQUFBLE1BQU9DLE1BQVAsV0FBT0EsTUFBUDtBQUNBTCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDQUgsRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ0UsT0FBakIsRUFBMEJDLDRCQUExQjtBQUNBUixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDSSxZQUFqQixFQUErQkMsaUNBQS9CO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ00sRUFBUCxDQUFVRCxNQUFNLENBQUNNLE1BQWpCLEVBQXlCQyxzQkFBekI7QUFDQVosRUFBQUEsTUFBTSxDQUFDTSxFQUFQLENBQVVELE1BQU0sQ0FBQ1EsU0FBakIsRUFBNEJDLHNCQUE1QjtBQUNBZCxFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDVSxXQUFqQixFQUE4QkMsd0JBQTlCO0FBQ0FoQixFQUFBQSxNQUFNLENBQUNNLEVBQVAsQ0FBVUQsTUFBTSxDQUFDWSxNQUFqQixFQUF5QkMsbUJBQXpCO0FBQ0gsQ0FUTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGhhbmRsZU5ld01lc3NhZ2UgfSBmcm9tIFwiLi9jaGF0XCI7XHJcbmltcG9ydCB7IGhhbmRsZURpc2Nvbm5lY3RlZCwgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuaW1wb3J0IHsgaGFuZGxlQmVnYW5QYXRoLCBoYW5kbGVTdHJva2VkUGF0aCwgaGFuZGxlRmlsbGVkIH0gZnJvbSBcIi4vcGFpbnRcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U29ja2V0cyA9IChhU29ja2V0KSA9PiB7XHJcbiAgICBjb25zdCB7ZXZlbnRzfSA9IHdpbmRvdztcclxuICAgIHNvY2tldCA9IGFTb2NrZXQ7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLm5ld1VzZXIsIGhhbmRsZU5ld1VzZXIpO1xyXG4gICAgc29ja2V0Lm9uKGV2ZW50cy5kaXNjb25uZWN0ZWQsIGhhbmRsZURpc2Nvbm5lY3RlZCk7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLm5ld01zZywgaGFuZGxlTmV3TWVzc2FnZSk7XHJcbiAgICBzb2NrZXQub24oZXZlbnRzLmJlZ2FuUGF0aCwgaGFuZGxlQmVnYW5QYXRoKTtcclxuICAgIHNvY2tldC5vbihldmVudHMuc3Ryb2tlZFBhdGgsIGhhbmRsZVN0cm9rZWRQYXRoKTtcclxuICAgIHNvY2tldC5vbihldmVudHMuZmlsbGVkLCBoYW5kbGVGaWxsZWQpO1xyXG59OyJdfQ==
},{"./chat":1,"./notifications":4,"./paint":5}]},{},[2])
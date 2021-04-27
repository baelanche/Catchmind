(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzdiNmRkMzQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjsiXX0=
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var NICKNAME = "nickname";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  var socket = io("/");
  socket.emit("setNickname", {
    nickname: nickname
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0IiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0FBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNHLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBbEI7QUFFQSxJQUFNQyxVQUFVLEdBQUcsV0FBbkI7QUFDQSxJQUFNQyxTQUFTLEdBQUcsVUFBbEI7QUFDQSxJQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxJQUFNQyxRQUFRLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQkgsUUFBckIsQ0FBakI7O0FBRUEsSUFBTUksS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQ3hCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVksYUFBWixFQUEyQjtBQUFDTixJQUFBQSxRQUFRLEVBQVJBO0FBQUQsR0FBM0I7QUFDSCxDQUhEOztBQUtBLElBQUdBLFFBQVEsS0FBSyxJQUFoQixFQUFzQjtBQUNsQlIsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCVixVQUFqQjtBQUNILENBRkQsTUFFTztBQUNITCxFQUFBQSxJQUFJLENBQUNlLFNBQUwsR0FBaUJULFNBQWpCO0FBQ0FLLEVBQUFBLEtBQUssQ0FBQ0gsUUFBRCxDQUFMO0FBQ0g7O0FBRUQsSUFBTVEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxDQUFELEVBQU87QUFDNUJBLEVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBLE1BQU1DLEtBQUssR0FBR2hCLFNBQVMsQ0FBQ0QsYUFBVixDQUF3QixPQUF4QixDQUFkO0FBQ0EsTUFBT2tCLEtBQVAsR0FBZ0JELEtBQWhCLENBQU9DLEtBQVA7QUFDQUQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBWCxFQUFBQSxZQUFZLENBQUNZLE9BQWIsQ0FBcUJkLFFBQXJCLEVBQStCYSxLQUEvQjtBQUNBVCxFQUFBQSxLQUFLLENBQUNTLEtBQUQsQ0FBTDtBQUNBcEIsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCVCxTQUFqQjtBQUNILENBUkQ7O0FBVUEsSUFBR0gsU0FBSCxFQUFjO0FBQ1ZBLEVBQUFBLFNBQVMsQ0FBQ21CLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDTixnQkFBckM7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5cclxuY29uc3QgTE9HR0VEX09VVCA9IFwibG9nZ2VkT3V0XCI7XHJcbmNvbnN0IExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIjtcclxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTtcclxuICAgIHNvY2tldC5lbWl0KFwic2V0Tmlja25hbWVcIiwge25pY2tuYW1lfSk7XHJcbn1cclxuXHJcbmlmKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn0gZWxzZSB7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ0luKG5pY2tuYW1lKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7dmFsdWV9ID0gaW5wdXQ7XHJcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSwgdmFsdWUpO1xyXG4gICAgbG9nSW4odmFsdWUpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbn1cclxuXHJcbmlmKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdClcclxufSJdfQ==
},{}]},{},[1])
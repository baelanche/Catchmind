(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
  input.value = "";
  appendMsg(value);
};

if (sendMsg) {
  sendMsg.addEventListener("submit", handleSendMsg);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmY5OWE2MzMuanMiXSwibmFtZXMiOlsibWVzc2FnZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2VuZE1zZyIsImFwcGVuZE1zZyIsInRleHQiLCJuaWNrbmFtZSIsImxpIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiaGFuZGxlU2VuZE1zZyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBakI7QUFDQSxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixXQUF4QixDQUFoQjs7QUFFQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBb0I7QUFDbEMsTUFBTUMsRUFBRSxHQUFHTixRQUFRLENBQUNPLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBWDtBQUNBRCxFQUFBQSxFQUFFLENBQUNFLFNBQUgsNENBQzBCSCxRQUFRLEdBQUcsS0FBSCxHQUFXLE1BRDdDLGdCQUN3REEsUUFBUSxHQUFHQSxRQUFILEdBQWMsS0FEOUUsdUJBQ2dHRCxJQURoRztBQUdBTCxFQUFBQSxRQUFRLENBQUNVLFdBQVQsQ0FBcUJILEVBQXJCO0FBQ0gsQ0FORDs7QUFRQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLEtBQUssRUFBSTtBQUMzQkEsRUFBQUEsS0FBSyxDQUFDQyxjQUFOO0FBQ0EsTUFBTUMsS0FBSyxHQUFHWCxPQUFPLENBQUNZLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBZDtBQUNBLE1BQU9DLEtBQVAsR0FBZ0JGLEtBQWhCLENBQU9FLEtBQVA7QUFDQUYsRUFBQUEsS0FBSyxDQUFDRSxLQUFOLEdBQWMsRUFBZDtBQUNBWixFQUFBQSxTQUFTLENBQUNZLEtBQUQsQ0FBVDtBQUNILENBTkQ7O0FBUUEsSUFBR2IsT0FBSCxFQUFZO0FBQ1JBLEVBQUFBLE9BQU8sQ0FBQ2MsZ0JBQVIsQ0FBeUIsUUFBekIsRUFBbUNOLGFBQW5DO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZXNzYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNNZXNzYWdlc1wiKTtcclxuY29uc3Qgc2VuZE1zZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwianNTZW5kTXNnXCIpO1xyXG5cclxuY29uc3QgYXBwZW5kTXNnID0gKHRleHQsIG5pY2tuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxpLmlubmVySFRNTCA9IGBcclxuICAgICAgICA8c3BhbiBjbGFzcz1cImF1dGhvciAke25pY2tuYW1lID8gXCJvdXRcIiA6IFwic2VsZlwifVwiPiR7bmlja25hbWUgPyBuaWNrbmFtZSA6IFwiWW91XCJ9PC9zcGFuPiA6ICR7dGV4dH1cclxuICAgIGA7XHJcbiAgICBtZXNzYWdlcy5hcHBlbmRDaGlsZChsaSk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZVNlbmRNc2cgPSBldmVudCA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBzZW5kTXNnLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHt2YWx1ZX0gPSBpbnB1dDtcclxuICAgIGlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgIGFwcGVuZE1zZyh2YWx1ZSlcclxufVxyXG5cclxuaWYoc2VuZE1zZykge1xyXG4gICAgc2VuZE1zZy5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVNlbmRNc2cpO1xyXG59Il19
},{}]},{},[1])
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlePlayerUpdate = void 0;
var board = document.getElementById("jsPBoard");

var addPlayers = function addPlayers(players) {
  board.innerText = "";
  players.forEach(function (player) {
    var playerElement = document.createElement("span");
    playerElement.innerText = "".concat(player.nickname, ": ").concat(player.points);
    board.appendChild(playerElement);
  });
};

var handlePlayerUpdate = function handlePlayerUpdate(_ref) {
  var sockets = _ref.sockets;
  return addPlayers(sockets);
};

exports.handlePlayerUpdate = handlePlayerUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfODk2ZGI5NWUuanMiXSwibmFtZXMiOlsiYm9hcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkUGxheWVycyIsInBsYXllcnMiLCJpbm5lclRleHQiLCJmb3JFYWNoIiwicGxheWVyIiwicGxheWVyRWxlbWVudCIsImNyZWF0ZUVsZW1lbnQiLCJuaWNrbmFtZSIsInBvaW50cyIsImFwcGVuZENoaWxkIiwiaGFuZGxlUGxheWVyVXBkYXRlIiwic29ja2V0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsVUFBeEIsQ0FBZDs7QUFFQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFBQyxPQUFPLEVBQUk7QUFDMUJKLEVBQUFBLEtBQUssQ0FBQ0ssU0FBTixHQUFrQixFQUFsQjtBQUNBRCxFQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBQUMsTUFBTSxFQUFJO0FBQ3RCLFFBQU1DLGFBQWEsR0FBR1AsUUFBUSxDQUFDUSxhQUFULENBQXVCLE1BQXZCLENBQXRCO0FBQ0FELElBQUFBLGFBQWEsQ0FBQ0gsU0FBZCxhQUE2QkUsTUFBTSxDQUFDRyxRQUFwQyxlQUFpREgsTUFBTSxDQUFDSSxNQUF4RDtBQUNBWCxJQUFBQSxLQUFLLENBQUNZLFdBQU4sQ0FBa0JKLGFBQWxCO0FBQ0gsR0FKRDtBQUtILENBUEQ7O0FBU08sSUFBTUssa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQUVDLE9BQUYsUUFBRUEsT0FBRjtBQUFBLFNBQWVYLFVBQVUsQ0FBQ1csT0FBRCxDQUF6QjtBQUFBLENBQTNCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzUEJvYXJkXCIpO1xyXG5cclxuY29uc3QgYWRkUGxheWVycyA9IHBsYXllcnMgPT4ge1xyXG4gICAgYm9hcmQuaW5uZXJUZXh0ID0gXCJcIjtcclxuICAgIHBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYXllckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBwbGF5ZXJFbGVtZW50LmlubmVyVGV4dCA9IGAke3BsYXllci5uaWNrbmFtZX06ICR7cGxheWVyLnBvaW50c31gO1xyXG4gICAgICAgIGJvYXJkLmFwcGVuZENoaWxkKHBsYXllckVsZW1lbnQpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVBsYXllclVwZGF0ZSA9ICh7c29ja2V0c30pID0+IGFkZFBsYXllcnMoc29ja2V0cyk7Il19
},{}]},{},[1])
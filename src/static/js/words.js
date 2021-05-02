(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseWord = void 0;
var words = ["apple", "arm", "banana", "bike", "bird", "book", "chin", "clam", "class", "clover", "club", "corn", "crayon", "crow", "crown", "crowd", "crib", "desk", "dime", "dirt", "dress", "fang ", "field", "flag", "flower", "fog", "game", "heat", "hill", "home", "horn", "hose", "joke", "juice", "kite", "lake", "maid", "mask", "mice", "milk", "mint", "meal", "meat", "moon", "mother", "morning", "name", "nest", "nose", "pear", "pen", "pencil", "plant", "rain", "river", "road", "rock", "room", "rose", "seed", "shape", "shoe", "shop", "show", "sink", "snail", "snake", "snow", "soda", "sofa", "star", "step", "stew", "stove", "straw", "string", "summer", "swing", "table", "tank", "team", "tent", "test", "toes", "tree", "vest", "water", "wing", "winter", "woman", "women"];

var chooseWord = function chooseWord() {
  return words[Math.floor(Math.random() * words.length)];
};

exports.chooseWord = chooseWord;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjUwMGI3YjIuanMiXSwibmFtZXMiOlsid29yZHMiLCJjaG9vc2VXb3JkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVixPQURVLEVBRVYsS0FGVSxFQUdWLFFBSFUsRUFJVixNQUpVLEVBS1YsTUFMVSxFQU1WLE1BTlUsRUFPVixNQVBVLEVBUVYsTUFSVSxFQVNWLE9BVFUsRUFVVixRQVZVLEVBV1YsTUFYVSxFQVlWLE1BWlUsRUFhVixRQWJVLEVBY1YsTUFkVSxFQWVWLE9BZlUsRUFnQlYsT0FoQlUsRUFpQlYsTUFqQlUsRUFrQlYsTUFsQlUsRUFtQlYsTUFuQlUsRUFvQlYsTUFwQlUsRUFxQlYsT0FyQlUsRUFzQlYsT0F0QlUsRUF1QlYsT0F2QlUsRUF3QlYsTUF4QlUsRUF5QlYsUUF6QlUsRUEwQlYsS0ExQlUsRUEyQlYsTUEzQlUsRUE0QlYsTUE1QlUsRUE2QlYsTUE3QlUsRUE4QlYsTUE5QlUsRUErQlYsTUEvQlUsRUFnQ1YsTUFoQ1UsRUFpQ1YsTUFqQ1UsRUFrQ1YsT0FsQ1UsRUFtQ1YsTUFuQ1UsRUFvQ1YsTUFwQ1UsRUFxQ1YsTUFyQ1UsRUFzQ1YsTUF0Q1UsRUF1Q1YsTUF2Q1UsRUF3Q1YsTUF4Q1UsRUF5Q1YsTUF6Q1UsRUEwQ1YsTUExQ1UsRUEyQ1YsTUEzQ1UsRUE0Q1YsTUE1Q1UsRUE2Q1YsUUE3Q1UsRUE4Q1YsU0E5Q1UsRUErQ1YsTUEvQ1UsRUFnRFYsTUFoRFUsRUFpRFYsTUFqRFUsRUFrRFYsTUFsRFUsRUFtRFYsS0FuRFUsRUFvRFYsUUFwRFUsRUFxRFYsT0FyRFUsRUFzRFYsTUF0RFUsRUF1RFYsT0F2RFUsRUF3RFYsTUF4RFUsRUF5RFYsTUF6RFUsRUEwRFYsTUExRFUsRUEyRFYsTUEzRFUsRUE0RFYsTUE1RFUsRUE2RFYsT0E3RFUsRUE4RFYsTUE5RFUsRUErRFYsTUEvRFUsRUFnRVYsTUFoRVUsRUFpRVYsTUFqRVUsRUFrRVYsT0FsRVUsRUFtRVYsT0FuRVUsRUFvRVYsTUFwRVUsRUFxRVYsTUFyRVUsRUFzRVYsTUF0RVUsRUF1RVYsTUF2RVUsRUF3RVYsTUF4RVUsRUF5RVYsTUF6RVUsRUEwRVYsT0ExRVUsRUEyRVYsT0EzRVUsRUE0RVYsUUE1RVUsRUE2RVYsUUE3RVUsRUE4RVYsT0E5RVUsRUErRVYsT0EvRVUsRUFnRlYsTUFoRlUsRUFpRlYsTUFqRlUsRUFrRlYsTUFsRlUsRUFtRlYsTUFuRlUsRUFvRlYsTUFwRlUsRUFxRlYsTUFyRlUsRUFzRlYsTUF0RlUsRUF1RlYsT0F2RlUsRUF3RlYsTUF4RlUsRUF5RlYsUUF6RlUsRUEwRlYsT0ExRlUsRUEyRlYsT0EzRlUsQ0FBZDs7QUE4RlMsSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxTQUFNRCxLQUFLLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JKLEtBQUssQ0FBQ0ssTUFBakMsQ0FBRCxDQUFYO0FBQUEsQ0FBbkIiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB3b3JkcyA9IFtcclxuICAgIFwiYXBwbGVcIixcclxuICAgIFwiYXJtXCIsXHJcbiAgICBcImJhbmFuYVwiLFxyXG4gICAgXCJiaWtlXCIsXHJcbiAgICBcImJpcmRcIixcclxuICAgIFwiYm9va1wiLFxyXG4gICAgXCJjaGluXCIsXHJcbiAgICBcImNsYW1cIixcclxuICAgIFwiY2xhc3NcIixcclxuICAgIFwiY2xvdmVyXCIsXHJcbiAgICBcImNsdWJcIixcclxuICAgIFwiY29yblwiLFxyXG4gICAgXCJjcmF5b25cIixcclxuICAgIFwiY3Jvd1wiLFxyXG4gICAgXCJjcm93blwiLFxyXG4gICAgXCJjcm93ZFwiLFxyXG4gICAgXCJjcmliXCIsXHJcbiAgICBcImRlc2tcIixcclxuICAgIFwiZGltZVwiLFxyXG4gICAgXCJkaXJ0XCIsXHJcbiAgICBcImRyZXNzXCIsXHJcbiAgICBcImZhbmcgXCIsXHJcbiAgICBcImZpZWxkXCIsXHJcbiAgICBcImZsYWdcIixcclxuICAgIFwiZmxvd2VyXCIsXHJcbiAgICBcImZvZ1wiLFxyXG4gICAgXCJnYW1lXCIsXHJcbiAgICBcImhlYXRcIixcclxuICAgIFwiaGlsbFwiLFxyXG4gICAgXCJob21lXCIsXHJcbiAgICBcImhvcm5cIixcclxuICAgIFwiaG9zZVwiLFxyXG4gICAgXCJqb2tlXCIsXHJcbiAgICBcImp1aWNlXCIsXHJcbiAgICBcImtpdGVcIixcclxuICAgIFwibGFrZVwiLFxyXG4gICAgXCJtYWlkXCIsXHJcbiAgICBcIm1hc2tcIixcclxuICAgIFwibWljZVwiLFxyXG4gICAgXCJtaWxrXCIsXHJcbiAgICBcIm1pbnRcIixcclxuICAgIFwibWVhbFwiLFxyXG4gICAgXCJtZWF0XCIsXHJcbiAgICBcIm1vb25cIixcclxuICAgIFwibW90aGVyXCIsXHJcbiAgICBcIm1vcm5pbmdcIixcclxuICAgIFwibmFtZVwiLFxyXG4gICAgXCJuZXN0XCIsXHJcbiAgICBcIm5vc2VcIixcclxuICAgIFwicGVhclwiLFxyXG4gICAgXCJwZW5cIixcclxuICAgIFwicGVuY2lsXCIsXHJcbiAgICBcInBsYW50XCIsXHJcbiAgICBcInJhaW5cIixcclxuICAgIFwicml2ZXJcIixcclxuICAgIFwicm9hZFwiLFxyXG4gICAgXCJyb2NrXCIsXHJcbiAgICBcInJvb21cIixcclxuICAgIFwicm9zZVwiLFxyXG4gICAgXCJzZWVkXCIsXHJcbiAgICBcInNoYXBlXCIsXHJcbiAgICBcInNob2VcIixcclxuICAgIFwic2hvcFwiLFxyXG4gICAgXCJzaG93XCIsXHJcbiAgICBcInNpbmtcIixcclxuICAgIFwic25haWxcIixcclxuICAgIFwic25ha2VcIixcclxuICAgIFwic25vd1wiLFxyXG4gICAgXCJzb2RhXCIsXHJcbiAgICBcInNvZmFcIixcclxuICAgIFwic3RhclwiLFxyXG4gICAgXCJzdGVwXCIsXHJcbiAgICBcInN0ZXdcIixcclxuICAgIFwic3RvdmVcIixcclxuICAgIFwic3RyYXdcIixcclxuICAgIFwic3RyaW5nXCIsXHJcbiAgICBcInN1bW1lclwiLFxyXG4gICAgXCJzd2luZ1wiLFxyXG4gICAgXCJ0YWJsZVwiLFxyXG4gICAgXCJ0YW5rXCIsXHJcbiAgICBcInRlYW1cIixcclxuICAgIFwidGVudFwiLFxyXG4gICAgXCJ0ZXN0XCIsXHJcbiAgICBcInRvZXNcIixcclxuICAgIFwidHJlZVwiLFxyXG4gICAgXCJ2ZXN0XCIsXHJcbiAgICBcIndhdGVyXCIsXHJcbiAgICBcIndpbmdcIixcclxuICAgIFwid2ludGVyXCIsXHJcbiAgICBcIndvbWFuXCIsXHJcbiAgICBcIndvbWVuXCJcclxuICBdO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBjaG9vc2VXb3JkID0gKCkgPT4gd29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogd29yZHMubGVuZ3RoKV07Il19
},{}]},{},[1])
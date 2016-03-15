(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Global dependencies
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var $ = require('jquery');
var Exo = require('exoskeleton');

exports['default'] = (function () {
	'use strict';

	// Save a reference to the global object
	var root = window;
	var App = root.App = window.App || {};

	App.$ = $;

	// Versioning
	App.version = "0.0.1";

	// Feature detection
	App.support = App.support || {};
	App.support.touch = 'ontouchstart' in window;

	return App;
}).call(undefined);

module.exports = exports['default'];

},{"exoskeleton":"exoskeleton","jquery":"jquery"}],2:[function(require,module,exports){
// Global dependencies
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var $ = require('jquery');

console.log('JS initialized in version:', _app2['default'].version);

},{"./app":1,"jquery":"jquery"}]},{},[2])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOi94YW1wcC9odGRvY3Mvd29ya3Nob3BzL1ZlYW1zLUNsaS1Xb3Jrc2hvcC9fTEVTU09OUy9MZXNzb24tMDIvcHJvamVjdC12ZWFtcy9yZXNvdXJjZXMvanMvYXBwLmpzIiwiQzoveGFtcHAvaHRkb2NzL3dvcmtzaG9wcy9WZWFtcy1DbGktV29ya3Nob3AvX0xFU1NPTlMvTGVzc29uLTAyL3Byb2plY3QtdmVhbXMvcmVzb3VyY2VzL2pzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUNDQSxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDMUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztxQkFFbEIsQ0FBQyxZQUFVO0FBQ3pCLGFBQVksQ0FBQzs7O0FBR2IsS0FBSSxJQUFJLEdBQUcsTUFBTSxDQUFDO0FBQ2xCLEtBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUM7O0FBRXRDLElBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7QUFHVixJQUFHLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7O0FBR3RCLElBQUcsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUM7QUFDaEMsSUFBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsY0FBYyxJQUFJLE1BQU0sQ0FBQzs7QUFFN0MsUUFBTyxHQUFHLENBQUM7Q0FFWCxDQUFBLENBQUUsSUFBSSxXQUFNOzs7Ozs7Ozs7O21CQ3JCRyxPQUFPOzs7O0FBRXZCLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsRUFBRSxpQkFBSSxPQUFPLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBHbG9iYWwgZGVwZW5kZW5jaWVzIFxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG52YXIgRXhvID0gcmVxdWlyZSgnZXhvc2tlbGV0b24nKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpe1xyXG5cdCd1c2Ugc3RyaWN0JztcclxuXHJcblx0Ly8gU2F2ZSBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsIG9iamVjdFxyXG5cdHZhciByb290ID0gd2luZG93O1xyXG5cdHZhciBBcHAgPSByb290LkFwcCA9IHdpbmRvdy5BcHAgfHwge307XHJcblxyXG5cdEFwcC4kID0gJDtcclxuXHJcblx0Ly8gVmVyc2lvbmluZ1xyXG5cdEFwcC52ZXJzaW9uID0gXCIwLjAuMVwiO1xyXG5cclxuXHQvLyBGZWF0dXJlIGRldGVjdGlvblxyXG5cdEFwcC5zdXBwb3J0ID0gQXBwLnN1cHBvcnQgfHwge307XHJcblx0QXBwLnN1cHBvcnQudG91Y2ggPSAnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3c7XHJcblxyXG5cdHJldHVybiBBcHA7XHJcblxyXG59KS5jYWxsKHRoaXMpOyIsIi8vIEdsb2JhbCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XHJcblxyXG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxuY29uc29sZS5sb2coJ0pTIGluaXRpYWxpemVkIGluIHZlcnNpb246JywgQXBwLnZlcnNpb24pOyJdfQ==

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*! respimage - v1.4.2 - 2015-08-22
 Licensed MIT */
!function(a,b,c){"use strict";function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(){var b;R=!1,U=a.devicePixelRatio,S={},T={},b=(U||1)*D.xQuant,D.uT||(D.maxX=Math.max(1.3,D.maxX),b=Math.min(b,D.maxX),v.DPR=b),V.width=Math.max(a.innerWidth||0,B.clientWidth),V.height=Math.max(a.innerHeight||0,B.clientHeight),V.vw=V.width/100,V.vh=V.height/100,V.em=v.getEmValue(),V.rem=V.em,o=D.lazyFactor/2,o=o*b+o,q=.4+.1*b,l=.5+.2*b,m=.5+.25*b,p=b+1.3,(n=V.width>V.height)||(o*=.9),I&&(o*=.9),u=[V.width,V.height,b].join("-")}function f(a,b,c){var d=b*Math.pow(a-.4,1.9);return n||(d/=1.3),a+=d,a>c}function g(a){var b,c=v.getSet(a),d=!1;"pending"!=c&&(d=u,c&&(b=v.setRes(c),d=v.applySetCandidate(b,a))),a[v.ns].evaled=d}function h(a,b){return a.res-b.res}function i(a,b,c){var d;return!c&&b&&(c=a[v.ns].sets,c=c&&c[c.length-1]),d=j(b,c),d&&(b=v.makeUrl(b),a[v.ns].curSrc=b,a[v.ns].curCan=d,d.res||_(d,d.set.sizes)),d}function j(a,b){var c,d,e;if(a&&b)for(e=v.parseSet(b),a=v.makeUrl(a),c=0;c<e.length;c++)if(a==v.makeUrl(e[c].url)){d=e[c];break}return d}function k(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[v.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}var l,m,n,o,p,q,r,s,t,u,v={},w=function(){},x=b.createElement("img"),y=x.getAttribute,z=x.setAttribute,A=x.removeAttribute,B=b.documentElement,C={},D={xQuant:1,lazyFactor:.4,maxX:2},E="data-pfsrc",F=E+"set",G="webkitBackfaceVisibility"in B.style,H=navigator.userAgent,I=/rident/.test(H)||/ecko/.test(H)&&H.match(/rv\:(\d+)/)&&RegExp.$1>35,J="currentSrc",K=/\s+\+?\d+(e\d+)?w/,L=/((?:\([^)]+\)(?:\s*and\s*|\s*or\s*|\s*not\s*)?)+)?\s*(.+)/,M=/^([\+eE\d\.]+)(w|x)$/,N=/\s*\d+h\s*/,O=a.respimgCFG,P=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),Q="font-size:100%!important;",R=!0,S={},T={},U=a.devicePixelRatio,V={px:1,"in":96},W=b.createElement("a"),X=!1,Y=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},Z=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},$=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=Z(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(b,d){var e;if(!(b in S))if(S[b]=!1,d&&(e=b.match(a)))S[b]=e[1]*V[e[2]];else try{S[b]=new Function("e",c(b))(V)}catch(f){}return S[b]}}(),_=function(a,b){return a.w?(a.cWidth=v.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.x,a},ab=function(c){var d,e,f,g=c||{};if(g.elements&&1==g.elements.nodeType&&("IMG"==g.elements.nodeName.toUpperCase()?g.elements=[g.elements]:(g.context=g.elements,g.elements=null)),g.reparse&&(g.reevaluate=!0,a.console&&console.warn&&console.warn("reparse was renamed to reevaluate!")),d=g.elements||v.qsa(g.context||b,g.reevaluate||g.reselect?v.sel:v.selShort),f=d.length){for(v.setupRun(g),X=!0,e=0;f>e;e++)v.fillImg(d[e],g);v.teardownRun(g)}},bb=Z(function(a){var b=[1,"x"],c=d(a||"");return c&&(c=c.replace(N,""),b=c.match(M)?[1*RegExp.$1,RegExp.$2]:!1),b});if(J in x||(J="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("ri"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.supPicture=!!a.HTMLPictureElement,v.supSrcset&&v.supPicture&&!v.supSizes&&!function(a){x.srcset="data:,a",a.src="data:,a",v.supSrcset=x.complete===a.complete,v.supPicture=v.supSrcset&&v.supPicture}(b.createElement("img")),v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=D,v.supSrcset&&(v.sel+=",img["+F+"]"),v.DPR=U||1,v.u=V,v.types=C,s=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=Z(function(a){return W.href=a,W.href}),v.qsa=function(a,b){return a.querySelectorAll(b)},v.matchesMedia=function(){return v.matchesMedia=a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(a){return!a||matchMedia(a).matches}:v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(a){return a?$(a):!0},v.calcLength=function(a){var b=$(a,!0)||!1;return 0>b&&(b=!1),b},v.supportsType=function(a){return a?C[a]:!0},v.parseSize=Z(function(a){var b=(a||"").match(L);return{media:b&&b[1],length:b&&b[2]}}),v.parseSet=function(a){if(!a.cands){var b,c,d,e,f,g,h=a.srcset;for(a.cands=[];h;)h=h.replace(/^\s+/g,""),b=h.search(/\s/g),d=null,-1!=b?(c=h.slice(0,b),e=c.charAt(c.length-1),","!=e&&c||(c=c.replace(/,+$/,""),d=""),h=h.slice(b+1),null==d&&(f=h.indexOf(","),-1!=f?(d=h.slice(0,f),h=h.slice(f+1)):(d=h,h=""))):(c=h,h=""),c&&(d=bb(d))&&(g={url:c.replace(/^,+/,""),set:a},g[d[1]]=d[0],"x"==d[1]&&1==d[0]&&(a.has1x=!0),a.cands.push(g))}return a.cands},v.getEmValue=function(){var a;if(!r&&(a=b.body)){var c=b.createElement("div"),d=B.style.cssText,e=a.style.cssText;c.style.cssText=P,B.style.cssText=Q,a.style.cssText=Q,a.appendChild(c),r=c.offsetWidth,a.removeChild(c),r=parseFloat(r,10),B.style.cssText=d,a.style.cssText=e}return r||16},v.calcListLength=function(a){if(!(a in T)||D.uT){var b,c,e,f,g,h,i=d(a).split(/\s*,\s*/),j=!1;for(g=0,h=i.length;h>g&&(b=i[g],c=v.parseSize(b),e=c.length,f=c.media,!e||!v.matchesMedia(f)||(j=v.calcLength(e))===!1);g++);T[a]=j?j:V.width}return T[a]},v.setRes=function(a){var b;if(a){b=v.parseSet(a);for(var c=0,d=b.length;d>c;c++)_(b[c],a.sizes)}return b},v.setRes.res=_,v.applySetCandidate=function(a,b){if(a.length){var c,d,e,g,j,k,n,r,s,t,w,x,y,z=b[v.ns],A=u,B=o,C=q;if(r=z.curSrc||b[J],s=z.curCan||i(b,r,a[0].set),d=v.DPR,y=s&&s.res,!n&&r&&(x=I&&!b.complete&&s&&y-.2>d,x||s&&!(p>y)||(s&&d>y&&y>l&&(m>y&&(B*=.8,C+=.04*d),s.res+=B*Math.pow(y-C,2)),t=!z.pic||s&&s.set==a[0].set,s&&t&&s.res>=d&&(n=s))),!n)for(y&&(s.res=s.res-(s.res-y)/2),a.sort(h),k=a.length,n=a[k-1],e=0;k>e;e++)if(c=a[e],c.res>=d){g=e-1,n=a[g]&&(j=c.res-d)&&(x||r!=v.makeUrl(c.url))&&f(a[g].res,j,d)?a[g]:c;break}return y&&(s.res=y),n&&(w=v.makeUrl(n.url),z.curSrc=w,z.curCan=n,w!=r&&v.setSrc(b,n),v.setSize(b)),A}},v.setSrc=function(a,b){var c;a.src=b.url,G&&(c=a.style.zoom,a.style.zoom="0.999",a.style.zoom=c)},v.getSet=function(a){var b,c,d,e=!1,f=a[v.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&v.matchesMedia(c.media)&&(d=v.supportsType(c.type))){"pending"==d&&(c=d),e=c;break}return e},v.parseSets=function(a,b,d){var e,f,g,h,i="PICTURE"==b.nodeName.toUpperCase(),l=a[v.ns];(l.src===c||d.src)&&(l.src=y.call(a,"src"),l.src?z.call(a,E,l.src):A.call(a,E)),(l.srcset===c||!v.supSrcset||a.srcset||d.srcset)&&(e=y.call(a,"srcset"),l.srcset=e,h=!0),l.sets=[],i&&(l.pic=!0,k(b,l.sets)),l.srcset?(f={srcset:l.srcset,sizes:y.call(a,"sizes")},l.sets.push(f),g=(s||l.src)&&K.test(l.srcset||""),g||!l.src||j(l.src,f)||f.has1x||(f.srcset+=", "+l.src,f.cands.push({url:l.src,x:1,set:f}))):l.src&&l.sets.push({srcset:l.src,sizes:null}),l.curCan=null,l.curSrc=c,l.supported=!(i||f&&!v.supSrcset||g),h&&v.supSrcset&&!l.supported&&(e?(z.call(a,F,e),a.srcset=""):A.call(a,F)),l.supported&&!l.srcset&&(!l.src&&a.src||a.src!=v.makeUrl(l.src))&&(null==l.src?a.removeAttribute("src"):a.src=l.src),l.parsed=!0},v.fillImg=function(a,b){var c,d,e=b.reselect||b.reevaluate;if(a[v.ns]||(a[v.ns]={}),d=a[v.ns],e||d.evaled!=u){if(!d.parsed||b.reevaluate){if(c=a.parentNode,!c)return;v.parseSets(a,c,b)}d.supported?d.evaled=u:g(a)}},v.setupRun=function(b){(!X||R||U!=a.devicePixelRatio)&&(e(),b.elements||b.context||clearTimeout(t))},v.supPicture?(ab=w,v.fillImg=w):(b.createElement("picture"),function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";h=setTimeout(e,"loading"==a?200:999),b.body&&(c=c||d.test(a),v.fillImgs(),c&&clearTimeout(h))},f=function(){v.fillImgs()},g=function(){clearTimeout(t),R=!0,t=setTimeout(f,99)},h=setTimeout(e,b.body?0:20);Y(a,"resize",g),Y(b,"readystatechange",e)}()),v.respimage=ab,v.fillImgs=ab,v.teardownRun=w,ab._=v,a.respimage=a.picturefill||ab,!a.picturefill)for(a.respimgCFG={ri:v,push:function(a){var b=a.shift();"function"==typeof v[b]?v[b].apply(v,a):(D[b]=a[0],X&&v.fillImgs({reselect:!0}))}};O&&O.length;)a.respimgCFG.push(O.shift());a.picturefill||(a.picturefill=a.respimage,a.picturefillCFG||(a.picturefillCFG=a.respimgCFG))}(window,document);
},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _utilsHelpers = require('./utils/helpers');

var _utilsHelpers2 = _interopRequireDefault(_utilsHelpers);

var _utilsEvents = require('./utils/events');

var _utilsEvents2 = _interopRequireDefault(_utilsEvents);

var $ = require('jquery');
var Exoskeleton = require('exoskeleton');

require('respimage');

exports['default'] = (function () {
	'use strict';

	// ----------------------------------
	// GLOBAL NAMESPACE
	// ----------------------------------

	// Save a reference to the global object
	var root = window;
	root.Backbone = {};
	root.Backbone.$ = $;

	// @borrow objects
	var App = root.App = _utilsHelpers2['default'].extend(window.App || {}, {
		Vent: _utilsHelpers2['default'].extend({}, Exoskeleton.Events)
	});

	// Add globals
	App.Exoskeleton = Exoskeleton;
	App.$ = $;
	App.EVENTS = _utilsEvents2['default'];

	/**
  * Create custom view with own properties and
  * take this view in our modules
  * register only one reference to our global library Exoskeleton
  */
	App.ComponentView = function (options) {
		Exoskeleton.View.call(this, options);
	};
	App.ComponentModel = function (options) {
		Exoskeleton.Model.call(this, options);
	};
	App.ComponentCollection = function (options) {
		Exoskeleton.Collection.call(this, options);
	};

	_utilsHelpers2['default'].extend(App.ComponentView.prototype, Exoskeleton.View.prototype, {});
	_utilsHelpers2['default'].extend(App.ComponentModel.prototype, Exoskeleton.Model.prototype, {});
	_utilsHelpers2['default'].extend(App.ComponentCollection.prototype, Exoskeleton.Collection.prototype, {});

	App.ComponentView.extend = Exoskeleton.View.extend;
	App.ComponentModel.extend = Exoskeleton.Model.extend;
	App.ComponentCollection.extend = Exoskeleton.Collection.extend;

	/**
  * Add our Mixin to our View object.
  */
	App.ComponentView.classMixin = _utilsHelpers2['default'].classMixin;

	// Feature detection
	App.support = App.support || {};
	App.support.touch = _utilsHelpers2['default'].isTouch();
	App.clickHandler = _utilsHelpers2['default'].clickHandler();

	// Versioning
	App.version = "0.0.1";

	// Media Query
	var head = document.querySelectorAll('head');
	App.currentMedia = window.getComputedStyle(head[0], null).getPropertyValue('font-family');

	// Screen Size
	App.screenSize = {
		width: root.innerWidth,
		height: root.innerHeight
	};

	// ----------------------------------
	// CHECKING
	// ----------------------------------

	// disable devmode logging if not on ie9 and parameter "devmode" not present
	if (document.querySelectorAll('html')[0].className.indexOf('ie9') < 0) {
		if (document.location.search.indexOf('devmode') < 0) {
			// hide all warnings and logs if not in devmode
			console.log = console.warn = function () {};
		} else {
			App.devmode = true;
		}
	} else {
		// IE9 FIX: in ie9 window.console seems to be undefined until you open dev tools
		if (!window.console) {
			window.console = {};
			console.log = console.warn = function () {};
		}
	}

	// ----------------------------------
	// GLOBAL EVENTS
	// ----------------------------------

	/**
  * Triggers
  */

	// Trigger global resize event
	window.onresize = function (e) {
		var currentMedia = window.getComputedStyle(head[0], null).getPropertyValue('font-family');
		var width = window.innerWidth;

		if (currentMedia !== App.currentMedia) {
			var oldMedia = App.currentMedia;

			App.currentMedia = currentMedia;
			console.log('App.currentMedia: ', App.currentMedia);

			App.Vent.trigger(App.EVENTS.mediachange, {
				type: App.EVENTS.mediachange,
				currentMedia: currentMedia,
				oldMedia: oldMedia
			});
		}

		if (width != App.screenSize.width) {
			App.screenSize.width = width;
			App.Vent.trigger(App.EVENTS.resize, e);
		}
	};

	document.onscroll = function (e) {
		App.Vent.trigger(App.EVENTS.scroll, e);
	};

	return App;
}).call(undefined);

module.exports = exports['default'];

},{"./utils/events":4,"./utils/helpers":5,"exoskeleton":"exoskeleton","jquery":"jquery","respimage":1}],3:[function(require,module,exports){
// Main Requirements
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _utilsHelpers = require('./utils/helpers');

var _utilsHelpers2 = _interopRequireDefault(_utilsHelpers);

// ES6 Modules

// @INSERTPOINT :: @ref: js-import

// Vars
var $ = _app2['default'].$;

'use strict';

// Main Functionality

var Core = (function () {
	function Core() {
		_classCallCheck(this, Core);

		this.initialize();
	}

	/**
  * Initialize our core functionality
  * This function will only be executed once.
  */

	_createClass(Core, [{
		key: 'initialize',
		value: function initialize() {
			console.log('App initialized with version: ', _app2['default'].version);

			/**
    * Detect Touch
    */
			if (!_app2['default'].support.touch) {
				$('html').addClass('no-touch');
			} else {
				$('html').addClass('touch');
			}

			// Redirect
			_app2['default'].Vent.on(_app2['default'].EVENTS.DOMredirect, function (obj) {
				if (!obj && !obj.url) throw new Error('Object is not defined. Please provide an url in your object!');

				// Redirect to page
				window.location.href = String(obj.url);
			});

			// @INSERTPOINT :: @ref: js-init-once-v3
		}
	}, {
		key: 'preRender',
		value: function preRender() {
			_utilsHelpers2['default'].saveDOM();
		}
	}, {
		key: 'render',
		value: function render(context) {
			// @INSERTPOINT :: @ref: js-init-v3

		}
	}]);

	return Core;
})();

document.addEventListener("DOMContentLoaded", function () {
	var core = new Core();

	/**
  * Render modules
  */
	core.preRender();
	core.render(document);

	/**
  * Initialize modules which are loaded after initial load
  * via custom event 'DOMchanged'
  */
	_app2['default'].Vent.on(_app2['default'].EVENTS.DOMchanged, function (context) {
		console.log('Dom has changed. Initialising new modules in: ', context);
		core.preRender();
		core.render(context);
	});
});

},{"./app":2,"./utils/helpers":5}],4:[function(require,module,exports){
/**
 * Const for events (pub/sub)
 *
 * @author: Sebastian Fitzner
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var EVENTS = {
	btnClose: 'button:close',
	btnOpen: 'button:open',
	DOMchanged: 'DOMchanged',
	DOMredirect: 'dom:redirect',
	equalRender: 'equal:render',
	formComplete: 'form:complete',
	formReset: 'form:reset',
	mediachange: 'mediachange',
	paginationClose: 'pagination:closed',
	paginationRendered: 'pagination:rendered',
	resize: 'resize',
	scroll: 'scroll',
	selectChanged: 'select:changed',
	selectRendered: 'select:rendered',
	toggleContent: 'toggle:toggleContent',
	uiOverlayPopulate: 'overlay:populate',
	uiOverlayClose: 'uiOverlay:populate'
};

exports['default'] = EVENTS;
module.exports = exports['default'];

},{}],5:[function(require,module,exports){
/**
 * Represents a Helper Object.
 * @module Helper
 *
 * @author Sebastian Fitzner
 */

"use strict";

/**
 * @alias module:Helper
 */
Object.defineProperty(exports, '__esModule', {
	value: true
});
var Helpers = {};

// ----------------------------------
// MODULE HELPERS
// ----------------------------------

/**
 * Save/Update DOM references for JS Modules
 *
 *
 */
Helpers.saveDOM = function () {
	Helpers.dataJsModules = Helpers.querySelectorArray('[data-js-module]');
};

/**
 * Initialize a module and render it and/or provide a callback function
 *
 * @param {Object} obj - Definition of our module
 * @param {string} obj.el - Required: element
 * @param {Object} obj.Module - Required: class which will be used to render your module
 * @param {boolean} [obj.render=true] - Optional: render the class, if false the class will only be initialized
 * @param {function} [obj.cb] - Optional: provide a function which will be executed after initialisation
 * @param {Object} [obj.context] - Optional: context of module
 *
 */
Helpers.loadModule = function (obj) {
	if (!obj.domName) throw new Error('In order to work with loadModule you need to define the module name (defined in data-js-module attribute) as string! ');
	if (!obj.module) throw new Error('In order to work with loadModule you need to define a Module!');

	var context = obj.context || document.querySelector('html');
	var renderOnInit = obj.render !== false;

	Helpers.forEach(Helpers.dataJsModules, function (i, el) {
		var dataModules = el.getAttribute('data-js-module').split(' ');

		if (dataModules.indexOf(obj.domName) != -1 && Helpers.checkElementInContext(el, context)) {
			var attrs = el.getAttribute('data-js-options');
			var options = JSON.parse(attrs);
			var _module2 = new obj.module({
				el: el,
				options: options
			});

			// Render after initial module loading
			if (renderOnInit) _module2.render();
			// Provide callback function in which you can use module and options
			if (obj.cb && typeof obj.cb === "function") obj.cb(_module2, options);
		}
	});
};

// ----------------------------------
// EXTENDING HELPERS
// ----------------------------------

/**
 * Simple extend method to extend the properties of an object.
 *
 * @param {Object} obj - object which will be extended
 *
 * @return {Object} obj - extended object
 */
Helpers.extend = function extend(obj) {
	[].slice.call(arguments, 1).forEach(function (item) {
		for (var key in item) {
			obj[key] = item[key];
		}
	});
	return obj;
};

/**
 * Simple extend method, which extends an object.
 *
 * @param {Object} obj - object which will be extended
 *
 * @return {Object} obj - extended object
 */
Helpers.defaults = function defaults(obj) {
	[].slice.call(arguments, 1).forEach(function (item) {
		for (var key in item) {
			if (obj[key] === undefined) obj[key] = item[key];
		}
	});
	return obj;
};

/**
 * Merge method functions.
 *
 * @param {Object} from - Mixin object which will be merged via Helpers.defaults with the methods of our class
 * @param {Array} methods - Array of method names which will be extended.
 */
Helpers.classMixin = function (from) {
	var methods = arguments.length <= 1 || arguments[1] === undefined ? ['initialize', 'render'] : arguments[1];

	var to = this.prototype;

	/** Add those methods which exists on `from` but not on `to` to the latter */
	Helpers.defaults(to, from);

	/** we do the same for events */
	if (to.events) {
		Helpers.defaults(to.events, from.events);
	}

	// Extend to's methods
	methods.forEach(function (method) {
		Helpers.extendMethod(to, from, method);
	});
};

/**
 * Helper method to extend an already existing method.
 *
 * @param {Object} to - view which will be extended
 * @param {Object} from - methods which comes from mixin
 * @param {string} methodName - function name
 */
Helpers.extendMethod = function (to, from, methodName) {
	function isUndefined(value) {
		return typeof value == 'undefined';
	}

	// if the method is defined on from ...
	if (!isUndefined(from[methodName])) {
		(function () {
			var old = to[methodName];

			// ... we create a new function on to
			to[methodName] = function () {

				// wherein we first call the method which exists on `to`
				var oldReturn = old.apply(this, arguments);

				// and then call the method on `from`
				from[methodName].apply(this, arguments);

				// and then return the expected result,
				// i.e. what the method on `to` returns
				return oldReturn;
			};
		})();
	}
};

// ----------------------------------
// FUNCTIONAL HELPERS
// ----------------------------------

/**
 * Get dom elements in an array
 *
 * @param {String} elem - Required: selector
 * @param {Object} [context] - Optional: context
 *
 * @return {Array}
 */
Helpers.querySelectorArray = Helpers.$ = function (elem, context) {
	if (!elem) throw new Error('In order to work with querySelectorArray you need to define an element as string!');
	var el = elem;
	var customContext = context || document;

	return Array.prototype.slice.call(customContext.querySelectorAll(el));
};

/**
 * Simple forEach method
 *
 * @param {Array} array - array of objects
 * @param {function} callback - callback function
 * @param {string} scope - scope of function
 */
Helpers.forEach = function (array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]);
	}
};

/**
 * Find index of a specific item in an array.
 *
 * @param {Array} array - array in which we search for
 * @param {Object} item - item which will be searched
 */
Helpers.indexOf = function (array, item) {
	if (array == null) return -1;
	var l = undefined;
	var i = undefined;

	for (i = 0, l = array.length; i < l; i++) if (array[i] === item) return i;
	return -1;
};

/**
 * Return new RegExp
 *
 * @param {string} regEx - Regular Expression
 *
 * @return {RegExp}
 */
Helpers.regExp = function (regEx) {
	return new RegExp("(^|\\s+)" + regEx + "(\\s+|$)");
};

/**
 * Throttle method for resize events and more
 *
 * @param {function} func - Function which will be executed.
 * @param {number} wait - number to wait in milliseconds.
 * @param {boolean} immediate - execute function immediately.
 */

Helpers.throttle = function (func, wait, immediate) {
	var timeout = undefined;

	return function () {
		var context = this;
		var args = arguments;
		var callNow = immediate && !timeout;
		var later = function later() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};

		clearTimeout(timeout);

		timeout = setTimeout(later, wait);

		if (callNow) func.apply(context, args);
	};
};

// ----------------------------------
// DETECTION HELPERS
// ----------------------------------

/**
 * Touch Detection
 */
Helpers.isTouch = function () {
	return 'ontouchstart' in window;
};

/**
 * Detect transitionend event.
 */
Helpers.transitionEndEvent = function () {
	var t = undefined;
	var el = document.createElement('fakeelement');
	var transitions = {
		'transition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'MozTransition': 'transitionend',
		'WebkitTransition': 'webkitTransitionEnd'
	};

	for (t in transitions) {
		if (el.style[t] !== undefined) {
			return transitions[t];
		}
	}
};

/**
 * Detect animationend event.
 */
Helpers.animationEndEvent = function () {
	var t = undefined;
	var el = document.createElement('fakeelement');
	var animations = {
		'animation': 'animationend',
		'OAnimation': 'oAnimationEnd',
		'MozAnimation': 'animationend',
		'WebkitAnimation': 'webkitAnimationEnd'
	};

	for (t in animations) {
		if (el.style[t] !== undefined) {
			return animations[t];
		}
	}
};

/**
 * Request animation frame
 *
 * @return {function}
 */
Helpers.requestAniFrame = function () {
	return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
		window.setTimeout(callback, 1000 / 60);
	};
};

// ----------------------------------
// CHECK HELPERS
// ----------------------------------

/**
 * based on https://github.com/inuyaksa/jquery.nicescroll/blob/master/jquery.nicescroll.js
 *
 * Todo: merge with checkElementInContext
 * @return {boolean}
 */
Helpers.hasParent = function (e, p) {
	if (!e) return false;
	var el = e.target || e.srcElement || e || false;
	while (el && el != p) {
		el = el.parentNode || false;
	}
	return el !== false;
};

/**
 * Check if element is in a specific context
 * and return state as boolean
 *
 * Todo: merge with hasParent
 * @param {Object} elem - Element, which will be checked
 * @param {Object} context - Context element, in which our element could persists
 *
 * @return {boolean}
 */
Helpers.checkElementInContext = function (elem, context) {
	var currentNode = elem;
	var contextNode = context || context;

	while (currentNode.parentNode) {
		currentNode = currentNode.parentNode;

		if (Helpers.checkNodeEquality(currentNode, contextNode)) {
			return true;
		}
	}

	return false;
};

/**
 * Check if node is really the same
 *
 * @param {Object} obj1 - Object, which we want to check
 * @param {Object} obj2 - Element, which we want to check against equality
 *
 * @return {boolean}
 */
Helpers.checkNodeEquality = function (obj1, obj2) {
	return obj1 === obj2;
};

/**
 * Check if element is in viewport
 *
 * @param {Object} elem - Object, which we want to check
 * @param {boolean} useBounds - if true, whole element must be visible
 *
 * @return {boolean}
 */
Helpers.isInViewport = function (elem, useBounds) {
	var el = elem;
	var top = el.offsetTop;
	var left = el.offsetLeft;
	var width = el.offsetWidth;
	var height = el.offsetHeight;
	var cond = false;

	while (el.offsetParent) {
		el = el.offsetParent;
		top += el.offsetTop;
		left += el.offsetLeft;
	}

	if (useBounds) {
		cond = top >= window.pageYOffset && left >= window.pageXOffset && top + height <= window.pageYOffset + window.innerHeight && left + width <= window.pageXOffset + window.innerWidth;
	} else {
		cond = top < window.pageYOffset + window.innerHeight && left < window.pageXOffset + window.innerWidth && top + height > window.pageYOffset && left + width > window.pageXOffset;
	}

	return cond;
};

// ----------------------------------
// LAYOUT HELPERS
// ----------------------------------

/**
 * Calculates the outer height for the given DOM element, including the
 * contributions of margin.
 *
 * @param {Object} elem - the element of which to calculate the outer height
 * @param {boolean} outer - add padding to height calculation
 *
 * @return {number}
 */
Helpers.getOuterHeight = function (elem, outer) {
	var el = elem;
	var height = el.offsetHeight;

	if (outer) {
		var style = getComputedStyle(el);
		height += parseInt(style.paddingTop) + parseInt(style.paddingBottom);
	}
	return height;
};

/**
 * Templatizer cleans up template tags and insert the inner html before the tag
 *
 * @param {Object} obj - Contains all properties
 * @param {string} obj.templateName - Defines the template name which is a selector from the element
 */
Helpers.templatizer = function (obj) {
	if (!'content' in document.createElement('template')) return;
	if (!obj && !obj.templateName) throw new Error('You need to pass a template namespace as string!');

	Helpers.querySelectorArray(obj.templateName).forEach(function (tpl) {
		var parent = tpl.parentNode;
		var content = tpl.content.children[0];

		parent.insertBefore(content, tpl);
	});
};

// ----------------------------------
// OTHER HELPERS
// ----------------------------------

/**
 * Determine click handler.
 *
 * @return {string}
 */
Helpers.clickHandler = function () {
	return Helpers.isTouch() ? 'touchstart' : 'click';
};

/**
 * Check if script is already added,
 * and returns true or false
 *
 * @param {string} url - URL to your script
 *
 * @return {boolean}
 */
Helpers.checkScript = function (url) {
	var x = document.getElementsByTagName("script");
	var scriptAdded = false;

	for (var i = 0; i < x.length; i++) {
		if (x[i].src == url) {
			scriptAdded = true;
		}
	}
	return scriptAdded;
};

/**
 * Load scripts asynchronous,
 * check if script is already added,
 * optional check if script is fully loaded and
 * execute callback function.
 *
 * @param {string} url - URL to your script
 * @param {function} callbackFn - callback function
 * @param {Object} callbackObj - this context
 */
Helpers.loadScript = function (url, callbackFn, callbackObj) {
	var scriptAdded = Helpers.checkScript(url);
	var script = undefined;

	if (scriptAdded === false) {
		script = document.createElement("script");
		script.src = url;
		document.body.appendChild(script);
	}

	if (callbackFn && typeof callbackFn === "function") {
		if (scriptAdded === true) {
			callbackFn.apply(callbackObj);
		} else {
			script.onreadystatechange = function () {
				if (x.readyState == 'complete') {
					callbackFn.apply(callbackObj);
				}
			};
			script.onload = function () {
				callbackFn.apply(callbackObj);
			};
		}
	}

	return false;
};

Helpers.hasClass = function (elem, className) {
	var el = elem;

	if ('classList' in document.documentElement) {
		return el.classList.contains(className);
	} else {
		return Helpers.regExp(className).test(el.className);
	}
};

Helpers.addClass = function (elem, className) {
	var el = elem;

	if ('classList' in document.documentElement) {
		el.classList.add(className);
	} else {
		if (!Helpers.hasClass(el, className)) {
			el.className = el.className + ' ' + className;
		}
	}
};

Helpers.removeClass = function (elem, className) {
	var el = elem;

	if ('classList' in document.documentElement) {
		el.classList.remove(className);
	} else {
		el.className = el.className.replace(Helpers.regExp(className), ' ');
	}
};

/**
 * Add/Update a parameter for given url
 *
 * @deprecated use Helpers.updateUrl instead
 * @param {String} url - url on which the parameter should be added / updated
 * @param {String} paramName - parameter name
 * @param {(String|Number)} paramValue - parameter value
 *
 * @return {String} - url
 */
Helpers.addParamToUrl = function (url, paramName, paramValue) {
	var params = {};

	params[paramName] = paramValue;

	return Helpers.updateUrl(url, params);
};

/**
 * Add/Update multiple parameters for given url
 *
 * @param {String} url - url on which parameters should be added / updated
 * @param {Object} params - parameters (name/value)
 *
 * @return {String} - resulting url
 */
Helpers.updateUrl = function (url, params) {
	var urlParts = url.split('?');
	var tmpParams = [];
	var originalParams = [];
	var newParams = [];
	var baseUrl = '';
	var property = '';
	var updated = false;
	var i = 0;
	var j = 0;

	for (property in params) {
		if (params.hasOwnProperty(property)) {
			tmpParams.push([property, '=', params[property]].join(''));
		}
	}

	baseUrl = urlParts[0];
	originalParams = urlParts.length > 1 ? urlParts[1].split('&') : [];

	for (i; i < tmpParams.length; i++) {
		updated = false;

		for (j = 0; j < originalParams.length; j++) {
			if (tmpParams[i] && originalParams[j].split('=')[0] === tmpParams[i].split('=')[0]) {
				originalParams[j] = tmpParams[i];
				updated = true;
				break;
			}
		}

		if (!updated) {
			newParams.push(tmpParams[i]);
		}
	}

	return [baseUrl, '?', originalParams.concat(newParams).join('&')].join('');
};

/**
 * Generates alphanumeric id.
 *
 * @param {Number} [length=5] - length of generated id.
 *
 * @return {String} - generated id
 */
Helpers.makeId = function (length) {
	var idLength = length || 5;
	var charPool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var i = 0;
	var id = '';

	for (; i < idLength; i++) id += charPool.charAt(Math.floor(Math.random() * charPool.length));

	return id;
};

exports['default'] = Helpers;
module.exports = exports['default'];

},{}]},{},[3])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvcmVzcGltYWdlL3Jlc3BpbWFnZS5taW4uanMiLCJDOi94YW1wcC9odGRvY3Mvd29ya3Nob3BzL1ZlYW1zLUNsaS1Xb3Jrc2hvcC9fTEVTU09OUy9MZXNzb24tMDQvU29sdXRpb24vcHJvamVjdC12ZWFtcy9yZXNvdXJjZXMvanMvYXBwLmpzIiwiQzoveGFtcHAvaHRkb2NzL3dvcmtzaG9wcy9WZWFtcy1DbGktV29ya3Nob3AvX0xFU1NPTlMvTGVzc29uLTA0L1NvbHV0aW9uL3Byb2plY3QtdmVhbXMvcmVzb3VyY2VzL2pzL21haW4uanMiLCJDOi94YW1wcC9odGRvY3Mvd29ya3Nob3BzL1ZlYW1zLUNsaS1Xb3Jrc2hvcC9fTEVTU09OUy9MZXNzb24tMDQvU29sdXRpb24vcHJvamVjdC12ZWFtcy9yZXNvdXJjZXMvanMvdXRpbHMvZXZlbnRzLmpzIiwiQzoveGFtcHAvaHRkb2NzL3dvcmtzaG9wcy9WZWFtcy1DbGktV29ya3Nob3AvX0xFU1NPTlMvTGVzc29uLTA0L1NvbHV0aW9uL3Byb2plY3QtdmVhbXMvcmVzb3VyY2VzL2pzL3V0aWxzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7NEJDRm9CLGlCQUFpQjs7OzsyQkFDbEIsZ0JBQWdCOzs7O0FBRW5DLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QixJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7O0FBRTNDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQzs7cUJBRU4sQ0FBQyxZQUFZO0FBQzNCLGFBQVksQ0FBQzs7Ozs7OztBQU9iLEtBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUNuQixLQUFJLENBQUMsUUFBUSxD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UUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLENBQUM7QUFDM0IsS0FBSSxRQUFRLEdBQUcsZ0VBQWdFLENBQUM7QUFDaEYsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ1YsS0FBSSxFQUFFLEdBQUcsRUFBRSxDQUFDOztBQUVaLFFBQU8sQ0FBQyxHQUFHLFFBQVEsRUFBRSxDQUFDLEVBQUUsRUFDdkIsRUFBRSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7O0FBRXBFLFFBQU8sRUFBRSxDQUFDO0NBQ1YsQ0FBQzs7cUJBRWEsT0FBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiEgcmVzcGltYWdlIC0gdjEuNC4yIC0gMjAxNS0wOC0yMlxuIExpY2Vuc2VkIE1JVCAqL1xuIWZ1bmN0aW9uKGEsYixjKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBkKGEpe3JldHVybiBhLnRyaW0/YS50cmltKCk6YS5yZXBsYWNlKC9eXFxzK3xcXHMrJC9nLFwiXCIpfWZ1bmN0aW9uIGUoKXt2YXIgYjtSPSExLFU9YS5kZXZpY2VQaXhlbFJhdGlvLFM9e30sVD17fSxiPShVfHwxKSpELnhRdWFudCxELnVUfHwoRC5tYXhYPU1hdGgubWF4KDEuMyxELm1heFgpLGI9TWF0aC5taW4oYixELm1heFgpLHYuRFBSPWIpLFYud2lkdGg9TWF0aC5tYXgoYS5pbm5lcldpZHRofHwwLEIuY2xpZW50V2lkdGgpLFYuaGVpZ2h0PU1hdGgubWF4KGEuaW5uZXJIZWlnaHR8fDAsQi5jbGllbnRIZWlnaHQpLFYudnc9Vi53aWR0aC8xMDAsVi52aD1WLmhlaWdodC8xMDAsVi5lbT12LmdldEVtVmFsdWUoKSxWLnJlbT1WLmVtLG89RC5sYXp5RmFjdG9yLzIsbz1vKmIrbyxxPS40Ky4xKmIsbD0uNSsuMipiLG09LjUrLjI1KmIscD1iKzEuMywobj1WLndpZHRoPlYuaGVpZ2h0KXx8KG8qPS45KSxJJiYobyo9LjkpLHU9W1Yud2lkdGgsVi5oZWlnaHQsYl0uam9pbihcIi1cIil9ZnVuY3Rpb24gZihhLGIsYyl7dmFyIGQ9YipNYXRoLnBvdyhhLS40LDEuOSk7cmV0dXJuIG58fChkLz0xLjMpLGErPWQsYT5jfWZ1bmN0aW9uIGcoYSl7dmFyIGIsYz12LmdldFNldChhKSxkPSExO1wicGVuZGluZ1wiIT1jJiYoZD11LGMmJihiPXYuc2V0UmVzKGMpLGQ9di5hcHBseVNldENhbmRpZGF0ZShiLGEpKSksYVt2Lm5zXS5ldmFsZWQ9ZH1mdW5jdGlvbiBoKGEsYil7cmV0dXJuIGEucmVzLWIucmVzfWZ1bmN0aW9uIGkoYSxiLGMpe3ZhciBkO3JldHVybiFjJiZiJiYoYz1hW3YubnNdLnNldHMsYz1jJiZjW2MubGVuZ3RoLTFdKSxkPWooYixjKSxkJiYoYj12Lm1ha2VVcmwoYiksYVt2Lm5zXS5jdXJTcmM9YixhW3YubnNdLmN1ckNhbj1kLGQucmVzfHxfKGQsZC5zZXQuc2l6ZXMpKSxkfWZ1bmN0aW9uIGooYSxiKXt2YXIgYyxkLGU7aWYoYSYmYilmb3IoZT12LnBhcnNlU2V0KGIpLGE9di5tYWtlVXJsKGEpLGM9MDtjPGUubGVuZ3RoO2MrKylpZihhPT12Lm1ha2VVcmwoZVtjXS51cmwpKXtkPWVbY107YnJlYWt9cmV0dXJuIGR9ZnVuY3Rpb24gayhhLGIpe3ZhciBjLGQsZSxmLGc9YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNvdXJjZVwiKTtmb3IoYz0wLGQ9Zy5sZW5ndGg7ZD5jO2MrKyllPWdbY10sZVt2Lm5zXT0hMCxmPWUuZ2V0QXR0cmlidXRlKFwic3Jjc2V0XCIpLGYmJmIucHVzaCh7c3Jjc2V0OmYsbWVkaWE6ZS5nZXRBdHRyaWJ1dGUoXCJtZWRpYVwiKSx0eXBlOmUuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSxzaXplczplLmdldEF0dHJpYnV0ZShcInNpemVzXCIpfSl9dmFyIGwsbSxuLG8scCxxLHIscyx0LHUsdj17fSx3PWZ1bmN0aW9uKCl7fSx4PWIuY3JlYXRlRWxlbWVudChcImltZ1wiKSx5PXguZ2V0QXR0cmlidXRlLHo9eC5zZXRBdHRyaWJ1dGUsQT14LnJlbW92ZUF0dHJpYnV0ZSxCPWIuZG9jdW1lbnRFbGVtZW50LEM9e30sRD17eFF1YW50OjEsbGF6eUZhY3RvcjouNCxtYXhYOjJ9LEU9XCJkYXRhLXBmc3JjXCIsRj1FK1wic2V0XCIsRz1cIndlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eVwiaW4gQi5zdHlsZSxIPW5hdmlnYXRvci51c2VyQWdlbnQsST0vcmlkZW50Ly50ZXN0KEgpfHwvZWNrby8udGVzdChIKSYmSC5tYXRjaCgvcnZcXDooXFxkKykvKSYmUmVnRXhwLiQxPjM1LEo9XCJjdXJyZW50U3JjXCIsSz0vXFxzK1xcKz9cXGQrKGVcXGQrKT93LyxMPS8oKD86XFwoW14pXStcXCkoPzpcXHMqYW5kXFxzKnxcXHMqb3JcXHMqfFxccypub3RcXHMqKT8pKyk/XFxzKiguKykvLE09L14oW1xcK2VFXFxkXFwuXSspKHd8eCkkLyxOPS9cXHMqXFxkK2hcXHMqLyxPPWEucmVzcGltZ0NGRyxQPShcImh0dHBzOlwiPT1sb2NhdGlvbi5wcm90b2NvbCxcInBvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250LXNpemU6MWVtO3dpZHRoOjFlbTtvdmVyZmxvdzpoaWRkZW47Y2xpcDpyZWN0KDBweCwgMHB4LCAwcHgsIDBweClcIiksUT1cImZvbnQtc2l6ZToxMDAlIWltcG9ydGFudDtcIixSPSEwLFM9e30sVD17fSxVPWEuZGV2aWNlUGl4ZWxSYXRpbyxWPXtweDoxLFwiaW5cIjo5Nn0sVz1iLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLFg9ITEsWT1mdW5jdGlvbihhLGIsYyxkKXthLmFkZEV2ZW50TGlzdGVuZXI/YS5hZGRFdmVudExpc3RlbmVyKGIsYyxkfHwhMSk6YS5hdHRhY2hFdmVudCYmYS5hdHRhY2hFdmVudChcIm9uXCIrYixjKX0sWj1mdW5jdGlvbihhKXt2YXIgYj17fTtyZXR1cm4gZnVuY3Rpb24oYyl7cmV0dXJuIGMgaW4gYnx8KGJbY109YShjKSksYltjXX19LCQ9ZnVuY3Rpb24oKXt2YXIgYT0vXihbXFxkXFwuXSspKGVtfHZ3fHB4KSQvLGI9ZnVuY3Rpb24oKXtmb3IodmFyIGE9YXJndW1lbnRzLGI9MCxjPWFbMF07KytiIGluIGE7KWM9Yy5yZXBsYWNlKGFbYl0sYVsrK2JdKTtyZXR1cm4gY30sYz1aKGZ1bmN0aW9uKGEpe3JldHVyblwicmV0dXJuIFwiK2IoKGF8fFwiXCIpLnRvTG93ZXJDYXNlKCksL1xcYmFuZFxcYi9nLFwiJiZcIiwvLC9nLFwifHxcIiwvbWluLShbYS16LVxcc10rKTovZyxcImUuJDE+PVwiLC9tYXgtKFthLXotXFxzXSspOi9nLFwiZS4kMTw9XCIsL2NhbGMoW14pXSspL2csXCIoJDEpXCIsLyhcXGQrW1xcLl0qW1xcZF0qKShbYS16XSspL2csXCIoJDEgKiBlLiQyKVwiLC9eKD8hKGUuW2Etel18WzAtOVxcLiY9fD48XFwrXFwtXFwqXFwoXFwpXFwvXSkpLiovZ2ksXCJcIil9KTtyZXR1cm4gZnVuY3Rpb24oYixkKXt2YXIgZTtpZighKGIgaW4gUykpaWYoU1tiXT0hMSxkJiYoZT1iLm1hdGNoKGEpKSlTW2JdPWVbMV0qVltlWzJdXTtlbHNlIHRyeXtTW2JdPW5ldyBGdW5jdGlvbihcImVcIixjKGIpKShWKX1jYXRjaChmKXt9cmV0dXJuIFNbYl19fSgpLF89ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS53PyhhLmNXaWR0aD12LmNhbGNMaXN0TGVuZ3RoKGJ8fFwiMTAwdndcIiksYS5yZXM9YS53L2EuY1dpZHRoKTphLnJlcz1hLngsYX0sYWI9ZnVuY3Rpb24oYyl7dmFyIGQsZSxmLGc9Y3x8e307aWYoZy5lbGVtZW50cyYmMT09Zy5lbGVtZW50cy5ub2RlVHlwZSYmKFwiSU1HXCI9PWcuZWxlbWVudHMubm9kZU5hbWUudG9VcHBlckNhc2UoKT9nLmVsZW1lbnRzPVtnLmVsZW1lbnRzXTooZy5jb250ZXh0PWcuZWxlbWVudHMsZy5lbGVtZW50cz1udWxsKSksZy5yZXBhcnNlJiYoZy5yZWV2YWx1YXRlPSEwLGEuY29uc29sZSYmY29uc29sZS53YXJuJiZjb25zb2xlLndhcm4oXCJyZXBhcnNlIHdhcyByZW5hbWVkIHRvIHJlZXZhbHVhdGUhXCIpKSxkPWcuZWxlbWVudHN8fHYucXNhKGcuY29udGV4dHx8YixnLnJlZXZhbHVhdGV8fGcucmVzZWxlY3Q/di5zZWw6di5zZWxTaG9ydCksZj1kLmxlbmd0aCl7Zm9yKHYuc2V0dXBSdW4oZyksWD0hMCxlPTA7Zj5lO2UrKyl2LmZpbGxJbWcoZFtlXSxnKTt2LnRlYXJkb3duUnVuKGcpfX0sYmI9WihmdW5jdGlvbihhKXt2YXIgYj1bMSxcInhcIl0sYz1kKGF8fFwiXCIpO3JldHVybiBjJiYoYz1jLnJlcGxhY2UoTixcIlwiKSxiPWMubWF0Y2goTSk/WzEqUmVnRXhwLiQxLFJlZ0V4cC4kMl06ITEpLGJ9KTtpZihKIGluIHh8fChKPVwic3JjXCIpLENbXCJpbWFnZS9qcGVnXCJdPSEwLENbXCJpbWFnZS9naWZcIl09ITAsQ1tcImltYWdlL3BuZ1wiXT0hMCxDW1wiaW1hZ2Uvc3ZnK3htbFwiXT1iLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoXCJodHRwOi8vd3d3aW5kb3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjSW1hZ2VcIixcIjEuMVwiKSx2Lm5zPShcInJpXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCkpLnN1YnN0cigwLDkpLHYuc3VwU3Jjc2V0PVwic3Jjc2V0XCJpbiB4LHYuc3VwU2l6ZXM9XCJzaXplc1wiaW4geCx2LnN1cFBpY3R1cmU9ISFhLkhUTUxQaWN0dXJlRWxlbWVudCx2LnN1cFNyY3NldCYmdi5zdXBQaWN0dXJlJiYhdi5zdXBTaXplcyYmIWZ1bmN0aW9uKGEpe3guc3Jjc2V0PVwiZGF0YTosYVwiLGEuc3JjPVwiZGF0YTosYVwiLHYuc3VwU3Jjc2V0PXguY29tcGxldGU9PT1hLmNvbXBsZXRlLHYuc3VwUGljdHVyZT12LnN1cFNyY3NldCYmdi5zdXBQaWN0dXJlfShiLmNyZWF0ZUVsZW1lbnQoXCJpbWdcIikpLHYuc2VsU2hvcnQ9XCJwaWN0dXJlPmltZyxpbWdbc3Jjc2V0XVwiLHYuc2VsPXYuc2VsU2hvcnQsdi5jZmc9RCx2LnN1cFNyY3NldCYmKHYuc2VsKz1cIixpbWdbXCIrRitcIl1cIiksdi5EUFI9VXx8MSx2LnU9Vix2LnR5cGVzPUMscz12LnN1cFNyY3NldCYmIXYuc3VwU2l6ZXMsdi5zZXRTaXplPXcsdi5tYWtlVXJsPVooZnVuY3Rpb24oYSl7cmV0dXJuIFcuaHJlZj1hLFcuaHJlZn0pLHYucXNhPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGEucXVlcnlTZWxlY3RvckFsbChiKX0sdi5tYXRjaGVzTWVkaWE9ZnVuY3Rpb24oKXtyZXR1cm4gdi5tYXRjaGVzTWVkaWE9YS5tYXRjaE1lZGlhJiYobWF0Y2hNZWRpYShcIihtaW4td2lkdGg6IDAuMWVtKVwiKXx8e30pLm1hdGNoZXM/ZnVuY3Rpb24oYSl7cmV0dXJuIWF8fG1hdGNoTWVkaWEoYSkubWF0Y2hlc306di5tTVEsdi5tYXRjaGVzTWVkaWEuYXBwbHkodGhpcyxhcmd1bWVudHMpfSx2Lm1NUT1mdW5jdGlvbihhKXtyZXR1cm4gYT8kKGEpOiEwfSx2LmNhbGNMZW5ndGg9ZnVuY3Rpb24oYSl7dmFyIGI9JChhLCEwKXx8ITE7cmV0dXJuIDA+YiYmKGI9ITEpLGJ9LHYuc3VwcG9ydHNUeXBlPWZ1bmN0aW9uKGEpe3JldHVybiBhP0NbYV06ITB9LHYucGFyc2VTaXplPVooZnVuY3Rpb24oYSl7dmFyIGI9KGF8fFwiXCIpLm1hdGNoKEwpO3JldHVybnttZWRpYTpiJiZiWzFdLGxlbmd0aDpiJiZiWzJdfX0pLHYucGFyc2VTZXQ9ZnVuY3Rpb24oYSl7aWYoIWEuY2FuZHMpe3ZhciBiLGMsZCxlLGYsZyxoPWEuc3Jjc2V0O2ZvcihhLmNhbmRzPVtdO2g7KWg9aC5yZXBsYWNlKC9eXFxzKy9nLFwiXCIpLGI9aC5zZWFyY2goL1xccy9nKSxkPW51bGwsLTEhPWI/KGM9aC5zbGljZSgwLGIpLGU9Yy5jaGFyQXQoYy5sZW5ndGgtMSksXCIsXCIhPWUmJmN8fChjPWMucmVwbGFjZSgvLCskLyxcIlwiKSxkPVwiXCIpLGg9aC5zbGljZShiKzEpLG51bGw9PWQmJihmPWguaW5kZXhPZihcIixcIiksLTEhPWY/KGQ9aC5zbGljZSgwLGYpLGg9aC5zbGljZShmKzEpKTooZD1oLGg9XCJcIikpKTooYz1oLGg9XCJcIiksYyYmKGQ9YmIoZCkpJiYoZz17dXJsOmMucmVwbGFjZSgvXiwrLyxcIlwiKSxzZXQ6YX0sZ1tkWzFdXT1kWzBdLFwieFwiPT1kWzFdJiYxPT1kWzBdJiYoYS5oYXMxeD0hMCksYS5jYW5kcy5wdXNoKGcpKX1yZXR1cm4gYS5jYW5kc30sdi5nZXRFbVZhbHVlPWZ1bmN0aW9uKCl7dmFyIGE7aWYoIXImJihhPWIuYm9keSkpe3ZhciBjPWIuY3JlYXRlRWxlbWVudChcImRpdlwiKSxkPUIuc3R5bGUuY3NzVGV4dCxlPWEuc3R5bGUuY3NzVGV4dDtjLnN0eWxlLmNzc1RleHQ9UCxCLnN0eWxlLmNzc1RleHQ9USxhLnN0eWxlLmNzc1RleHQ9USxhLmFwcGVuZENoaWxkKGMpLHI9Yy5vZmZzZXRXaWR0aCxhLnJlbW92ZUNoaWxkKGMpLHI9cGFyc2VGbG9hdChyLDEwKSxCLnN0eWxlLmNzc1RleHQ9ZCxhLnN0eWxlLmNzc1RleHQ9ZX1yZXR1cm4gcnx8MTZ9LHYuY2FsY0xpc3RMZW5ndGg9ZnVuY3Rpb24oYSl7aWYoIShhIGluIFQpfHxELnVUKXt2YXIgYixjLGUsZixnLGgsaT1kKGEpLnNwbGl0KC9cXHMqLFxccyovKSxqPSExO2ZvcihnPTAsaD1pLmxlbmd0aDtoPmcmJihiPWlbZ10sYz12LnBhcnNlU2l6ZShiKSxlPWMubGVuZ3RoLGY9Yy5tZWRpYSwhZXx8IXYubWF0Y2hlc01lZGlhKGYpfHwoaj12LmNhbGNMZW5ndGgoZSkpPT09ITEpO2crKyk7VFthXT1qP2o6Vi53aWR0aH1yZXR1cm4gVFthXX0sdi5zZXRSZXM9ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSl7Yj12LnBhcnNlU2V0KGEpO2Zvcih2YXIgYz0wLGQ9Yi5sZW5ndGg7ZD5jO2MrKylfKGJbY10sYS5zaXplcyl9cmV0dXJuIGJ9LHYuc2V0UmVzLnJlcz1fLHYuYXBwbHlTZXRDYW5kaWRhdGU9ZnVuY3Rpb24oYSxiKXtpZihhLmxlbmd0aCl7dmFyIGMsZCxlLGcsaixrLG4scixzLHQsdyx4LHksej1iW3YubnNdLEE9dSxCPW8sQz1xO2lmKHI9ei5jdXJTcmN8fGJbSl0scz16LmN1ckNhbnx8aShiLHIsYVswXS5zZXQpLGQ9di5EUFIseT1zJiZzLnJlcywhbiYmciYmKHg9SSYmIWIuY29tcGxldGUmJnMmJnktLjI+ZCx4fHxzJiYhKHA+eSl8fChzJiZkPnkmJnk+bCYmKG0+eSYmKEIqPS44LEMrPS4wNCpkKSxzLnJlcys9QipNYXRoLnBvdyh5LUMsMikpLHQ9IXoucGljfHxzJiZzLnNldD09YVswXS5zZXQscyYmdCYmcy5yZXM+PWQmJihuPXMpKSksIW4pZm9yKHkmJihzLnJlcz1zLnJlcy0ocy5yZXMteSkvMiksYS5zb3J0KGgpLGs9YS5sZW5ndGgsbj1hW2stMV0sZT0wO2s+ZTtlKyspaWYoYz1hW2VdLGMucmVzPj1kKXtnPWUtMSxuPWFbZ10mJihqPWMucmVzLWQpJiYoeHx8ciE9di5tYWtlVXJsKGMudXJsKSkmJmYoYVtnXS5yZXMsaixkKT9hW2ddOmM7YnJlYWt9cmV0dXJuIHkmJihzLnJlcz15KSxuJiYodz12Lm1ha2VVcmwobi51cmwpLHouY3VyU3JjPXcsei5jdXJDYW49bix3IT1yJiZ2LnNldFNyYyhiLG4pLHYuc2V0U2l6ZShiKSksQX19LHYuc2V0U3JjPWZ1bmN0aW9uKGEsYil7dmFyIGM7YS5zcmM9Yi51cmwsRyYmKGM9YS5zdHlsZS56b29tLGEuc3R5bGUuem9vbT1cIjAuOTk5XCIsYS5zdHlsZS56b29tPWMpfSx2LmdldFNldD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZT0hMSxmPWFbdi5uc10uc2V0cztmb3IoYj0wO2I8Zi5sZW5ndGgmJiFlO2IrKylpZihjPWZbYl0sYy5zcmNzZXQmJnYubWF0Y2hlc01lZGlhKGMubWVkaWEpJiYoZD12LnN1cHBvcnRzVHlwZShjLnR5cGUpKSl7XCJwZW5kaW5nXCI9PWQmJihjPWQpLGU9YzticmVha31yZXR1cm4gZX0sdi5wYXJzZVNldHM9ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGYsZyxoLGk9XCJQSUNUVVJFXCI9PWIubm9kZU5hbWUudG9VcHBlckNhc2UoKSxsPWFbdi5uc107KGwuc3JjPT09Y3x8ZC5zcmMpJiYobC5zcmM9eS5jYWxsKGEsXCJzcmNcIiksbC5zcmM/ei5jYWxsKGEsRSxsLnNyYyk6QS5jYWxsKGEsRSkpLChsLnNyY3NldD09PWN8fCF2LnN1cFNyY3NldHx8YS5zcmNzZXR8fGQuc3Jjc2V0KSYmKGU9eS5jYWxsKGEsXCJzcmNzZXRcIiksbC5zcmNzZXQ9ZSxoPSEwKSxsLnNldHM9W10saSYmKGwucGljPSEwLGsoYixsLnNldHMpKSxsLnNyY3NldD8oZj17c3Jjc2V0Omwuc3Jjc2V0LHNpemVzOnkuY2FsbChhLFwic2l6ZXNcIil9LGwuc2V0cy5wdXNoKGYpLGc9KHN8fGwuc3JjKSYmSy50ZXN0KGwuc3Jjc2V0fHxcIlwiKSxnfHwhbC5zcmN8fGoobC5zcmMsZil8fGYuaGFzMXh8fChmLnNyY3NldCs9XCIsIFwiK2wuc3JjLGYuY2FuZHMucHVzaCh7dXJsOmwuc3JjLHg6MSxzZXQ6Zn0pKSk6bC5zcmMmJmwuc2V0cy5wdXNoKHtzcmNzZXQ6bC5zcmMsc2l6ZXM6bnVsbH0pLGwuY3VyQ2FuPW51bGwsbC5jdXJTcmM9YyxsLnN1cHBvcnRlZD0hKGl8fGYmJiF2LnN1cFNyY3NldHx8ZyksaCYmdi5zdXBTcmNzZXQmJiFsLnN1cHBvcnRlZCYmKGU/KHouY2FsbChhLEYsZSksYS5zcmNzZXQ9XCJcIik6QS5jYWxsKGEsRikpLGwuc3VwcG9ydGVkJiYhbC5zcmNzZXQmJighbC5zcmMmJmEuc3JjfHxhLnNyYyE9di5tYWtlVXJsKGwuc3JjKSkmJihudWxsPT1sLnNyYz9hLnJlbW92ZUF0dHJpYnV0ZShcInNyY1wiKTphLnNyYz1sLnNyYyksbC5wYXJzZWQ9ITB9LHYuZmlsbEltZz1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1iLnJlc2VsZWN0fHxiLnJlZXZhbHVhdGU7aWYoYVt2Lm5zXXx8KGFbdi5uc109e30pLGQ9YVt2Lm5zXSxlfHxkLmV2YWxlZCE9dSl7aWYoIWQucGFyc2VkfHxiLnJlZXZhbHVhdGUpe2lmKGM9YS5wYXJlbnROb2RlLCFjKXJldHVybjt2LnBhcnNlU2V0cyhhLGMsYil9ZC5zdXBwb3J0ZWQ/ZC5ldmFsZWQ9dTpnKGEpfX0sdi5zZXR1cFJ1bj1mdW5jdGlvbihiKXsoIVh8fFJ8fFUhPWEuZGV2aWNlUGl4ZWxSYXRpbykmJihlKCksYi5lbGVtZW50c3x8Yi5jb250ZXh0fHxjbGVhclRpbWVvdXQodCkpfSx2LnN1cFBpY3R1cmU/KGFiPXcsdi5maWxsSW1nPXcpOihiLmNyZWF0ZUVsZW1lbnQoXCJwaWN0dXJlXCIpLGZ1bmN0aW9uKCl7dmFyIGMsZD1hLmF0dGFjaEV2ZW50Py9kJHxeYy86L2QkfF5jfF5pLyxlPWZ1bmN0aW9uKCl7dmFyIGE9Yi5yZWFkeVN0YXRlfHxcIlwiO2g9c2V0VGltZW91dChlLFwibG9hZGluZ1wiPT1hPzIwMDo5OTkpLGIuYm9keSYmKGM9Y3x8ZC50ZXN0KGEpLHYuZmlsbEltZ3MoKSxjJiZjbGVhclRpbWVvdXQoaCkpfSxmPWZ1bmN0aW9uKCl7di5maWxsSW1ncygpfSxnPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KHQpLFI9ITAsdD1zZXRUaW1lb3V0KGYsOTkpfSxoPXNldFRpbWVvdXQoZSxiLmJvZHk/MDoyMCk7WShhLFwicmVzaXplXCIsZyksWShiLFwicmVhZHlzdGF0ZWNoYW5nZVwiLGUpfSgpKSx2LnJlc3BpbWFnZT1hYix2LmZpbGxJbWdzPWFiLHYudGVhcmRvd25SdW49dyxhYi5fPXYsYS5yZXNwaW1hZ2U9YS5waWN0dXJlZmlsbHx8YWIsIWEucGljdHVyZWZpbGwpZm9yKGEucmVzcGltZ0NGRz17cmk6dixwdXNoOmZ1bmN0aW9uKGEpe3ZhciBiPWEuc2hpZnQoKTtcImZ1bmN0aW9uXCI9PXR5cGVvZiB2W2JdP3ZbYl0uYXBwbHkodixhKTooRFtiXT1hWzBdLFgmJnYuZmlsbEltZ3Moe3Jlc2VsZWN0OiEwfSkpfX07TyYmTy5sZW5ndGg7KWEucmVzcGltZ0NGRy5wdXNoKE8uc2hpZnQoKSk7YS5waWN0dXJlZmlsbHx8KGEucGljdHVyZWZpbGw9YS5yZXNwaW1hZ2UsYS5waWN0dXJlZmlsbENGR3x8KGEucGljdHVyZWZpbGxDRkc9YS5yZXNwaW1nQ0ZHKSl9KHdpbmRvdyxkb2N1bWVudCk7IiwiaW1wb3J0IEhlbHBlcnMgZnJvbSAnLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCBFVkVOVFMgZnJvbSAnLi91dGlscy9ldmVudHMnO1xuXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XG5jb25zdCBFeG9za2VsZXRvbiA9IHJlcXVpcmUoJ2V4b3NrZWxldG9uJyk7XG5cbnJlcXVpcmUoJ3Jlc3BpbWFnZScpO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gKCkge1xuXHQndXNlIHN0cmljdCc7XG5cblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBHTE9CQUwgTkFNRVNQQUNFXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXHQvLyBTYXZlIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0XG5cdGxldCByb290ID0gd2luZG93O1xuXHRyb290LkJhY2tib25lID0ge307XG5cdHJvb3QuQmFja2JvbmUuJCA9ICQ7XG5cblx0Ly8gQGJvcnJvdyBvYmplY3RzXG5cdGxldCBBcHAgPSByb290LkFwcCA9IEhlbHBlcnMuZXh0ZW5kKHdpbmRvdy5BcHAgfHwge30sIHtcblx0XHRWZW50OiBIZWxwZXJzLmV4dGVuZCh7fSwgRXhvc2tlbGV0b24uRXZlbnRzKVxuXHR9KTtcblxuXHQvLyBBZGQgZ2xvYmFsc1xuXHRBcHAuRXhvc2tlbGV0b24gPSBFeG9za2VsZXRvbjtcblx0QXBwLiQgPSAkO1xuXHRBcHAuRVZFTlRTID0gRVZFTlRTO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgY3VzdG9tIHZpZXcgd2l0aCBvd24gcHJvcGVydGllcyBhbmRcblx0ICogdGFrZSB0aGlzIHZpZXcgaW4gb3VyIG1vZHVsZXNcblx0ICogcmVnaXN0ZXIgb25seSBvbmUgcmVmZXJlbmNlIHRvIG91ciBnbG9iYWwgbGlicmFyeSBFeG9za2VsZXRvblxuXHQgKi9cblx0QXBwLkNvbXBvbmVudFZpZXcgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuXHRcdEV4b3NrZWxldG9uLlZpZXcuY2FsbCh0aGlzLCBvcHRpb25zKTtcblx0fTtcblx0QXBwLkNvbXBvbmVudE1vZGVsID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRFeG9za2VsZXRvbi5Nb2RlbC5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXHR9O1xuXHRBcHAuQ29tcG9uZW50Q29sbGVjdGlvbiA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG5cdFx0RXhvc2tlbGV0b24uQ29sbGVjdGlvbi5jYWxsKHRoaXMsIG9wdGlvbnMpO1xuXHR9O1xuXG5cdEhlbHBlcnMuZXh0ZW5kKEFwcC5Db21wb25lbnRWaWV3LnByb3RvdHlwZSwgRXhvc2tlbGV0b24uVmlldy5wcm90b3R5cGUsIHt9KTtcblx0SGVscGVycy5leHRlbmQoQXBwLkNvbXBvbmVudE1vZGVsLnByb3RvdHlwZSwgRXhvc2tlbGV0b24uTW9kZWwucHJvdG90eXBlLCB7fSk7XG5cdEhlbHBlcnMuZXh0ZW5kKEFwcC5Db21wb25lbnRDb2xsZWN0aW9uLnByb3RvdHlwZSwgRXhvc2tlbGV0b24uQ29sbGVjdGlvbi5wcm90b3R5cGUsIHt9KTtcblxuXHRBcHAuQ29tcG9uZW50Vmlldy5leHRlbmQgPSBFeG9za2VsZXRvbi5WaWV3LmV4dGVuZDtcblx0QXBwLkNvbXBvbmVudE1vZGVsLmV4dGVuZCA9IEV4b3NrZWxldG9uLk1vZGVsLmV4dGVuZDtcblx0QXBwLkNvbXBvbmVudENvbGxlY3Rpb24uZXh0ZW5kID0gRXhvc2tlbGV0b24uQ29sbGVjdGlvbi5leHRlbmQ7XG5cblx0LyoqXG5cdCAqIEFkZCBvdXIgTWl4aW4gdG8gb3VyIFZpZXcgb2JqZWN0LlxuXHQgKi9cblx0QXBwLkNvbXBvbmVudFZpZXcuY2xhc3NNaXhpbiA9IEhlbHBlcnMuY2xhc3NNaXhpbjtcblxuXHQvLyBGZWF0dXJlIGRldGVjdGlvblxuXHRBcHAuc3VwcG9ydCA9IEFwcC5zdXBwb3J0IHx8IHt9O1xuXHRBcHAuc3VwcG9ydC50b3VjaCA9IEhlbHBlcnMuaXNUb3VjaCgpO1xuXHRBcHAuY2xpY2tIYW5kbGVyID0gSGVscGVycy5jbGlja0hhbmRsZXIoKTtcblxuXHQvLyBWZXJzaW9uaW5nXG5cdEFwcC52ZXJzaW9uID0gXCIwLjAuMVwiO1xuXG5cdC8vIE1lZGlhIFF1ZXJ5XG5cdGxldCBoZWFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaGVhZCcpO1xuXHRBcHAuY3VycmVudE1lZGlhID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoaGVhZFswXSwgbnVsbCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1mYW1pbHknKTtcblxuXHQvLyBTY3JlZW4gU2l6ZVxuXHRBcHAuc2NyZWVuU2l6ZSA9IHtcblx0XHR3aWR0aDogcm9vdC5pbm5lcldpZHRoLFxuXHRcdGhlaWdodDogcm9vdC5pbm5lckhlaWdodFxuXHR9O1xuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gQ0hFQ0tJTkdcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cdC8vIGRpc2FibGUgZGV2bW9kZSBsb2dnaW5nIGlmIG5vdCBvbiBpZTkgYW5kIHBhcmFtZXRlciBcImRldm1vZGVcIiBub3QgcHJlc2VudFxuXHRpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaHRtbCcpWzBdLmNsYXNzTmFtZS5pbmRleE9mKCdpZTknKSA8IDApIHtcblx0XHRpZiAoZG9jdW1lbnQubG9jYXRpb24uc2VhcmNoLmluZGV4T2YoJ2Rldm1vZGUnKSA8IDApIHtcblx0XHRcdC8vIGhpZGUgYWxsIHdhcm5pbmdzIGFuZCBsb2dzIGlmIG5vdCBpbiBkZXZtb2RlXG5cdFx0XHRjb25zb2xlLmxvZyA9IGNvbnNvbGUud2FybiA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdEFwcC5kZXZtb2RlID0gdHJ1ZTtcblx0XHR9XG5cdH1cblx0ZWxzZSB7XG5cdFx0Ly8gSUU5IEZJWDogaW4gaWU5IHdpbmRvdy5jb25zb2xlIHNlZW1zIHRvIGJlIHVuZGVmaW5lZCB1bnRpbCB5b3Ugb3BlbiBkZXYgdG9vbHNcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7XG5cdFx0XHR3aW5kb3cuY29uc29sZSA9IHt9O1xuXHRcdFx0Y29uc29sZS5sb2cgPSBjb25zb2xlLndhcm4gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR9O1xuXHRcdH1cblx0fVxuXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gR0xPQkFMIEVWRU5UU1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblx0LyoqXG5cdCAqIFRyaWdnZXJzXG5cdCAqL1xuXG5cdC8vIFRyaWdnZXIgZ2xvYmFsIHJlc2l6ZSBldmVudFxuXHR3aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoZSkge1xuXHRcdGxldCBjdXJyZW50TWVkaWEgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShoZWFkWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdmb250LWZhbWlseScpO1xuXHRcdGxldCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG5cdFx0aWYgKGN1cnJlbnRNZWRpYSAhPT0gQXBwLmN1cnJlbnRNZWRpYSkge1xuXHRcdFx0bGV0IG9sZE1lZGlhID0gQXBwLmN1cnJlbnRNZWRpYTtcblxuXHRcdFx0QXBwLmN1cnJlbnRNZWRpYSA9IGN1cnJlbnRNZWRpYTtcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAuY3VycmVudE1lZGlhOiAnLCBBcHAuY3VycmVudE1lZGlhKTtcblxuXHRcdFx0QXBwLlZlbnQudHJpZ2dlcihBcHAuRVZFTlRTLm1lZGlhY2hhbmdlLCB7XG5cdFx0XHRcdHR5cGU6IEFwcC5FVkVOVFMubWVkaWFjaGFuZ2UsXG5cdFx0XHRcdGN1cnJlbnRNZWRpYTogY3VycmVudE1lZGlhLFxuXHRcdFx0XHRvbGRNZWRpYTogb2xkTWVkaWFcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICh3aWR0aCAhPSBBcHAuc2NyZWVuU2l6ZS53aWR0aCkge1xuXHRcdFx0QXBwLnNjcmVlblNpemUud2lkdGggPSB3aWR0aDtcblx0XHRcdEFwcC5WZW50LnRyaWdnZXIoQXBwLkVWRU5UUy5yZXNpemUsIGUpO1xuXHRcdH1cblx0fTtcblxuXHRkb2N1bWVudC5vbnNjcm9sbCA9IGZ1bmN0aW9uIChlKSB7XG5cdFx0QXBwLlZlbnQudHJpZ2dlcihBcHAuRVZFTlRTLnNjcm9sbCwgZSk7XG5cdH07XG5cblx0cmV0dXJuIEFwcDtcblxufSkuY2FsbCh0aGlzKTsiLCIvLyBNYWluIFJlcXVpcmVtZW50c1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgSGVscGVycyBmcm9tICcuL3V0aWxzL2hlbHBlcnMnO1xuXG4vLyBFUzYgTW9kdWxlc1xuXG4vLyBASU5TRVJUUE9JTlQgOjogQHJlZjoganMtaW1wb3J0XG5cbi8vIFZhcnNcbmNvbnN0ICQgPSBBcHAuJDtcblxuJ3VzZSBzdHJpY3QnO1xuXG4vLyBNYWluIEZ1bmN0aW9uYWxpdHlcbmNsYXNzIENvcmUge1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLmluaXRpYWxpemUoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbml0aWFsaXplIG91ciBjb3JlIGZ1bmN0aW9uYWxpdHlcblx0ICogVGhpcyBmdW5jdGlvbiB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb25jZS5cblx0ICovXG5cdGluaXRpYWxpemUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcCBpbml0aWFsaXplZCB3aXRoIHZlcnNpb246ICcsIEFwcC52ZXJzaW9uKTtcblxuXHRcdC8qKlxuXHRcdCAqIERldGVjdCBUb3VjaFxuXHRcdCAqL1xuXHRcdGlmICghQXBwLnN1cHBvcnQudG91Y2gpIHtcblx0XHRcdCQoJ2h0bWwnKS5hZGRDbGFzcygnbm8tdG91Y2gnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0JCgnaHRtbCcpLmFkZENsYXNzKCd0b3VjaCcpO1xuXHRcdH1cblxuXHRcdC8vIFJlZGlyZWN0XG5cdFx0QXBwLlZlbnQub24oQXBwLkVWRU5UUy5ET01yZWRpcmVjdCwgKG9iaikgPT4ge1xuXHRcdFx0aWYgKCFvYmogJiYgIW9iai51cmwpIHRocm93IG5ldyBFcnJvcignT2JqZWN0IGlzIG5vdCBkZWZpbmVkLiBQbGVhc2UgcHJvdmlkZSBhbiB1cmwgaW4geW91ciBvYmplY3QhJyk7XG5cblx0XHRcdC8vIFJlZGlyZWN0IHRvIHBhZ2Vcblx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gU3RyaW5nKG9iai51cmwpO1xuXHRcdH0pO1xuXG5cdFx0Ly8gQElOU0VSVFBPSU5UIDo6IEByZWY6IGpzLWluaXQtb25jZS12M1xuXG5cdH1cblxuXHRwcmVSZW5kZXIoKSB7XG5cdFx0SGVscGVycy5zYXZlRE9NKCk7XG5cdH1cblxuXHRyZW5kZXIoY29udGV4dCkge1xuXHRcdC8vIEBJTlNFUlRQT0lOVCA6OiBAcmVmOiBqcy1pbml0LXYzXG5cblx0fVxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cdGxldCBjb3JlID0gbmV3IENvcmUoKTtcblxuXHQvKipcblx0ICogUmVuZGVyIG1vZHVsZXNcblx0ICovXG5cdGNvcmUucHJlUmVuZGVyKCk7XG5cdGNvcmUucmVuZGVyKGRvY3VtZW50KTtcblxuXHQvKipcblx0ICogSW5pdGlhbGl6ZSBtb2R1bGVzIHdoaWNoIGFyZSBsb2FkZWQgYWZ0ZXIgaW5pdGlhbCBsb2FkXG5cdCAqIHZpYSBjdXN0b20gZXZlbnQgJ0RPTWNoYW5nZWQnXG5cdCAqL1xuXHRBcHAuVmVudC5vbihBcHAuRVZFTlRTLkRPTWNoYW5nZWQsIChjb250ZXh0KSA9PiB7XG5cdFx0Y29uc29sZS5sb2coJ0RvbSBoYXMgY2hhbmdlZC4gSW5pdGlhbGlzaW5nIG5ldyBtb2R1bGVzIGluOiAnLCBjb250ZXh0KTtcblx0XHRjb3JlLnByZVJlbmRlcigpO1xuXHRcdGNvcmUucmVuZGVyKGNvbnRleHQpO1xuXHR9KTtcbn0pOyIsIi8qKlxuICogQ29uc3QgZm9yIGV2ZW50cyAocHViL3N1YilcbiAqXG4gKiBAYXV0aG9yOiBTZWJhc3RpYW4gRml0em5lclxuICovXG5cbmNvbnN0IEVWRU5UUyA9IHtcblx0YnRuQ2xvc2U6ICdidXR0b246Y2xvc2UnLFxuXHRidG5PcGVuOiAnYnV0dG9uOm9wZW4nLFxuXHRET01jaGFuZ2VkOiAnRE9NY2hhbmdlZCcsXG5cdERPTXJlZGlyZWN0OiAnZG9tOnJlZGlyZWN0Jyxcblx0ZXF1YWxSZW5kZXI6ICdlcXVhbDpyZW5kZXInLFxuXHRmb3JtQ29tcGxldGU6ICdmb3JtOmNvbXBsZXRlJyxcblx0Zm9ybVJlc2V0OiAnZm9ybTpyZXNldCcsXG5cdG1lZGlhY2hhbmdlOiAnbWVkaWFjaGFuZ2UnLFxuXHRwYWdpbmF0aW9uQ2xvc2U6ICdwYWdpbmF0aW9uOmNsb3NlZCcsXG5cdHBhZ2luYXRpb25SZW5kZXJlZDogJ3BhZ2luYXRpb246cmVuZGVyZWQnLFxuXHRyZXNpemU6ICdyZXNpemUnLFxuXHRzY3JvbGw6ICdzY3JvbGwnLFxuXHRzZWxlY3RDaGFuZ2VkOiAnc2VsZWN0OmNoYW5nZWQnLFxuXHRzZWxlY3RSZW5kZXJlZDogJ3NlbGVjdDpyZW5kZXJlZCcsXG5cdHRvZ2dsZUNvbnRlbnQ6ICd0b2dnbGU6dG9nZ2xlQ29udGVudCcsXG5cdHVpT3ZlcmxheVBvcHVsYXRlOiAnb3ZlcmxheTpwb3B1bGF0ZScsXG5cdHVpT3ZlcmxheUNsb3NlOiAndWlPdmVybGF5OnBvcHVsYXRlJ1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRVZFTlRTO1xuIiwiLyoqXG4gKiBSZXByZXNlbnRzIGEgSGVscGVyIE9iamVjdC5cbiAqIEBtb2R1bGUgSGVscGVyXG4gKlxuICogQGF1dGhvciBTZWJhc3RpYW4gRml0em5lclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIEBhbGlhcyBtb2R1bGU6SGVscGVyXG4gKi9cbmxldCBIZWxwZXJzID0ge307XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIE1PRFVMRSBIRUxQRVJTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogU2F2ZS9VcGRhdGUgRE9NIHJlZmVyZW5jZXMgZm9yIEpTIE1vZHVsZXNcbiAqXG4gKlxuICovXG5IZWxwZXJzLnNhdmVET00gPSBmdW5jdGlvbigpIHtcblx0SGVscGVycy5kYXRhSnNNb2R1bGVzID0gSGVscGVycy5xdWVyeVNlbGVjdG9yQXJyYXkoJ1tkYXRhLWpzLW1vZHVsZV0nKTtcbn07XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG1vZHVsZSBhbmQgcmVuZGVyIGl0IGFuZC9vciBwcm92aWRlIGEgY2FsbGJhY2sgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gRGVmaW5pdGlvbiBvZiBvdXIgbW9kdWxlXG4gKiBAcGFyYW0ge3N0cmluZ30gb2JqLmVsIC0gUmVxdWlyZWQ6IGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmouTW9kdWxlIC0gUmVxdWlyZWQ6IGNsYXNzIHdoaWNoIHdpbGwgYmUgdXNlZCB0byByZW5kZXIgeW91ciBtb2R1bGVcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29iai5yZW5kZXI9dHJ1ZV0gLSBPcHRpb25hbDogcmVuZGVyIHRoZSBjbGFzcywgaWYgZmFsc2UgdGhlIGNsYXNzIHdpbGwgb25seSBiZSBpbml0aWFsaXplZFxuICogQHBhcmFtIHtmdW5jdGlvbn0gW29iai5jYl0gLSBPcHRpb25hbDogcHJvdmlkZSBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQgYWZ0ZXIgaW5pdGlhbGlzYXRpb25cbiAqIEBwYXJhbSB7T2JqZWN0fSBbb2JqLmNvbnRleHRdIC0gT3B0aW9uYWw6IGNvbnRleHQgb2YgbW9kdWxlXG4gKlxuICovXG5IZWxwZXJzLmxvYWRNb2R1bGUgPSBmdW5jdGlvbihvYmopIHtcblx0aWYgKCFvYmouZG9tTmFtZSkgdGhyb3cgbmV3IEVycm9yKCdJbiBvcmRlciB0byB3b3JrIHdpdGggbG9hZE1vZHVsZSB5b3UgbmVlZCB0byBkZWZpbmUgdGhlIG1vZHVsZSBuYW1lIChkZWZpbmVkIGluIGRhdGEtanMtbW9kdWxlIGF0dHJpYnV0ZSkgYXMgc3RyaW5nISAnKTtcblx0aWYgKCFvYmoubW9kdWxlKSB0aHJvdyBuZXcgRXJyb3IoJ0luIG9yZGVyIHRvIHdvcmsgd2l0aCBsb2FkTW9kdWxlIHlvdSBuZWVkIHRvIGRlZmluZSBhIE1vZHVsZSEnKTtcblxuXHRsZXQgY29udGV4dCA9IG9iai5jb250ZXh0IHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcblx0bGV0IHJlbmRlck9uSW5pdCA9IG9iai5yZW5kZXIgIT09IGZhbHNlO1xuXG5cblx0SGVscGVycy5mb3JFYWNoKEhlbHBlcnMuZGF0YUpzTW9kdWxlcywgKGksIGVsKSA9PiB7XG5cdFx0bGV0IGRhdGFNb2R1bGVzID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWpzLW1vZHVsZScpLnNwbGl0KCcgJyk7XG5cblx0XHRpZiAoZGF0YU1vZHVsZXMuaW5kZXhPZihvYmouZG9tTmFtZSkgIT0gLTEgJiYgSGVscGVycy5jaGVja0VsZW1lbnRJbkNvbnRleHQoZWwsIGNvbnRleHQpKSB7XG5cdFx0XHRsZXQgYXR0cnMgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtanMtb3B0aW9ucycpO1xuXHRcdFx0bGV0IG9wdGlvbnMgPSBKU09OLnBhcnNlKGF0dHJzKTtcblx0XHRcdGxldCBtb2R1bGUgPSBuZXcgb2JqLm1vZHVsZSh7XG5cdFx0XHRcdGVsOiBlbCxcblx0XHRcdFx0b3B0aW9uczogb3B0aW9uc1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIFJlbmRlciBhZnRlciBpbml0aWFsIG1vZHVsZSBsb2FkaW5nXG5cdFx0XHRpZiAocmVuZGVyT25Jbml0KSBtb2R1bGUucmVuZGVyKCk7XG5cdFx0XHQvLyBQcm92aWRlIGNhbGxiYWNrIGZ1bmN0aW9uIGluIHdoaWNoIHlvdSBjYW4gdXNlIG1vZHVsZSBhbmQgb3B0aW9uc1xuXHRcdFx0aWYgKG9iai5jYiAmJiB0eXBlb2Yob2JqLmNiKSA9PT0gXCJmdW5jdGlvblwiKSBvYmouY2IobW9kdWxlLCBvcHRpb25zKTtcblx0XHR9XG5cdH0pO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVhURU5ESU5HIEhFTFBFUlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBTaW1wbGUgZXh0ZW5kIG1ldGhvZCB0byBleHRlbmQgdGhlIHByb3BlcnRpZXMgb2YgYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBvYmplY3Qgd2hpY2ggd2lsbCBiZSBleHRlbmRlZFxuICpcbiAqIEByZXR1cm4ge09iamVjdH0gb2JqIC0gZXh0ZW5kZWQgb2JqZWN0XG4gKi9cbkhlbHBlcnMuZXh0ZW5kID0gZnVuY3Rpb24gZXh0ZW5kKG9iaikge1xuXHRbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdGZvciAobGV0IGtleSBpbiBpdGVtKSBvYmpba2V5XSA9IGl0ZW1ba2V5XTtcblx0fSk7XG5cdHJldHVybiBvYmo7XG59O1xuXG4vKipcbiAqIFNpbXBsZSBleHRlbmQgbWV0aG9kLCB3aGljaCBleHRlbmRzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIC0gb2JqZWN0IHdoaWNoIHdpbGwgYmUgZXh0ZW5kZWRcbiAqXG4gKiBAcmV0dXJuIHtPYmplY3R9IG9iaiAtIGV4dGVuZGVkIG9iamVjdFxuICovXG5IZWxwZXJzLmRlZmF1bHRzID0gZnVuY3Rpb24gZGVmYXVsdHMob2JqKSB7XG5cdFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKS5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0Zm9yIChsZXQga2V5IGluIGl0ZW0pIHtcblx0XHRcdGlmIChvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSBvYmpba2V5XSA9IGl0ZW1ba2V5XTtcblx0XHR9XG5cdH0pO1xuXHRyZXR1cm4gb2JqO1xufTtcblxuLyoqXG4gKiBNZXJnZSBtZXRob2QgZnVuY3Rpb25zLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBmcm9tIC0gTWl4aW4gb2JqZWN0IHdoaWNoIHdpbGwgYmUgbWVyZ2VkIHZpYSBIZWxwZXJzLmRlZmF1bHRzIHdpdGggdGhlIG1ldGhvZHMgb2Ygb3VyIGNsYXNzXG4gKiBAcGFyYW0ge0FycmF5fSBtZXRob2RzIC0gQXJyYXkgb2YgbWV0aG9kIG5hbWVzIHdoaWNoIHdpbGwgYmUgZXh0ZW5kZWQuXG4gKi9cbkhlbHBlcnMuY2xhc3NNaXhpbiA9IGZ1bmN0aW9uKGZyb20sIG1ldGhvZHMgPSBbJ2luaXRpYWxpemUnLCAncmVuZGVyJ10pIHtcblxuXHRsZXQgdG8gPSB0aGlzLnByb3RvdHlwZTtcblxuXHQvKiogQWRkIHRob3NlIG1ldGhvZHMgd2hpY2ggZXhpc3RzIG9uIGBmcm9tYCBidXQgbm90IG9uIGB0b2AgdG8gdGhlIGxhdHRlciAqL1xuXHRIZWxwZXJzLmRlZmF1bHRzKHRvLCBmcm9tKTtcblxuXHQvKiogd2UgZG8gdGhlIHNhbWUgZm9yIGV2ZW50cyAqL1xuXHRpZiAodG8uZXZlbnRzKSB7XG5cdFx0SGVscGVycy5kZWZhdWx0cyh0by5ldmVudHMsIGZyb20uZXZlbnRzKTtcblx0fVxuXG5cdC8vIEV4dGVuZCB0bydzIG1ldGhvZHNcblx0bWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcblx0XHRIZWxwZXJzLmV4dGVuZE1ldGhvZCh0bywgZnJvbSwgbWV0aG9kKTtcblx0fSk7XG59O1xuXG4vKipcbiAqIEhlbHBlciBtZXRob2QgdG8gZXh0ZW5kIGFuIGFscmVhZHkgZXhpc3RpbmcgbWV0aG9kLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0byAtIHZpZXcgd2hpY2ggd2lsbCBiZSBleHRlbmRlZFxuICogQHBhcmFtIHtPYmplY3R9IGZyb20gLSBtZXRob2RzIHdoaWNoIGNvbWVzIGZyb20gbWl4aW5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXRob2ROYW1lIC0gZnVuY3Rpb24gbmFtZVxuICovXG5IZWxwZXJzLmV4dGVuZE1ldGhvZCA9IGZ1bmN0aW9uKHRvLCBmcm9tLCBtZXRob2ROYW1lKSB7XG5cdGZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAndW5kZWZpbmVkJztcblx0fVxuXG5cdC8vIGlmIHRoZSBtZXRob2QgaXMgZGVmaW5lZCBvbiBmcm9tIC4uLlxuXHRpZiAoIWlzVW5kZWZpbmVkKGZyb21bbWV0aG9kTmFtZV0pKSB7XG5cdFx0bGV0IG9sZCA9IHRvW21ldGhvZE5hbWVdO1xuXG5cdFx0Ly8gLi4uIHdlIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvbiB0b1xuXHRcdHRvW21ldGhvZE5hbWVdID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIHdoZXJlaW4gd2UgZmlyc3QgY2FsbCB0aGUgbWV0aG9kIHdoaWNoIGV4aXN0cyBvbiBgdG9gXG5cdFx0XHRsZXQgb2xkUmV0dXJuID0gb2xkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cblx0XHRcdC8vIGFuZCB0aGVuIGNhbGwgdGhlIG1ldGhvZCBvbiBgZnJvbWBcblx0XHRcdGZyb21bbWV0aG9kTmFtZV0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuXHRcdFx0Ly8gYW5kIHRoZW4gcmV0dXJuIHRoZSBleHBlY3RlZCByZXN1bHQsXG5cdFx0XHQvLyBpLmUuIHdoYXQgdGhlIG1ldGhvZCBvbiBgdG9gIHJldHVybnNcblx0XHRcdHJldHVybiBvbGRSZXR1cm47XG5cdFx0fTtcblx0fVxufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRlVOQ1RJT05BTCBIRUxQRVJTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogR2V0IGRvbSBlbGVtZW50cyBpbiBhbiBhcnJheVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBlbGVtIC0gUmVxdWlyZWQ6IHNlbGVjdG9yXG4gKiBAcGFyYW0ge09iamVjdH0gW2NvbnRleHRdIC0gT3B0aW9uYWw6IGNvbnRleHRcbiAqXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqL1xuSGVscGVycy5xdWVyeVNlbGVjdG9yQXJyYXkgPSBIZWxwZXJzLiQgPSBmdW5jdGlvbihlbGVtLCBjb250ZXh0KSB7XG5cdGlmICghZWxlbSkgdGhyb3cgbmV3IEVycm9yKCdJbiBvcmRlciB0byB3b3JrIHdpdGggcXVlcnlTZWxlY3RvckFycmF5IHlvdSBuZWVkIHRvIGRlZmluZSBhbiBlbGVtZW50IGFzIHN0cmluZyEnKTtcblx0bGV0IGVsID0gZWxlbTtcblx0bGV0IGN1c3RvbUNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCgoY3VzdG9tQ29udGV4dCkucXVlcnlTZWxlY3RvckFsbChlbCkpO1xufTtcblxuLyoqXG4gKiBTaW1wbGUgZm9yRWFjaCBtZXRob2RcbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIGFycmF5IG9mIG9iamVjdHNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gY2FsbGJhY2sgZnVuY3Rpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBzY29wZSAtIHNjb3BlIG9mIGZ1bmN0aW9uXG4gKi9cbkhlbHBlcnMuZm9yRWFjaCA9IGZ1bmN0aW9uKGFycmF5LCBjYWxsYmFjaywgc2NvcGUpIHtcblx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdGNhbGxiYWNrLmNhbGwoc2NvcGUsIGksIGFycmF5W2ldKTtcblx0fVxufTtcblxuLyoqXG4gKiBGaW5kIGluZGV4IG9mIGEgc3BlY2lmaWMgaXRlbSBpbiBhbiBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSAtIGFycmF5IGluIHdoaWNoIHdlIHNlYXJjaCBmb3JcbiAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIC0gaXRlbSB3aGljaCB3aWxsIGJlIHNlYXJjaGVkXG4gKi9cbkhlbHBlcnMuaW5kZXhPZiA9IGZ1bmN0aW9uKGFycmF5LCBpdGVtKSB7XG5cdGlmIChhcnJheSA9PSBudWxsKSByZXR1cm4gLTE7XG5cdGxldCBsO1xuXHRsZXQgaTtcblxuXHRmb3IgKGkgPSAwLCBsID0gYXJyYXkubGVuZ3RoOyBpIDwgbDsgaSsrKVxuXHRcdGlmIChhcnJheVtpXSA9PT0gaXRlbSkgcmV0dXJuIGk7XG5cdHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogUmV0dXJuIG5ldyBSZWdFeHBcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVnRXggLSBSZWd1bGFyIEV4cHJlc3Npb25cbiAqXG4gKiBAcmV0dXJuIHtSZWdFeHB9XG4gKi9cbkhlbHBlcnMucmVnRXhwID0gZnVuY3Rpb24ocmVnRXgpIHtcblx0cmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxccyspXCIgKyByZWdFeCArIFwiKFxcXFxzK3wkKVwiKTtcbn07XG5cbi8qKlxuICogVGhyb3R0bGUgbWV0aG9kIGZvciByZXNpemUgZXZlbnRzIGFuZCBtb3JlXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyAtIEZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgZXhlY3V0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gd2FpdCAtIG51bWJlciB0byB3YWl0IGluIG1pbGxpc2Vjb25kcy5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gaW1tZWRpYXRlIC0gZXhlY3V0ZSBmdW5jdGlvbiBpbW1lZGlhdGVseS5cbiAqL1xuXG5IZWxwZXJzLnRocm90dGxlID0gZnVuY3Rpb24oZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG5cdGxldCB0aW1lb3V0O1xuXG5cdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRsZXQgY29udGV4dCA9IHRoaXM7XG5cdFx0bGV0IGFyZ3MgPSBhcmd1bWVudHM7XG5cdFx0bGV0IGNhbGxOb3cgPSBpbW1lZGlhdGUgJiYgIXRpbWVvdXQ7XG5cdFx0bGV0IGxhdGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR0aW1lb3V0ID0gbnVsbDtcblx0XHRcdGlmICghaW1tZWRpYXRlKSBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuXHRcdH07XG5cblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cblx0XHRpZiAoY2FsbE5vdykgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcblx0fTtcbn07XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIERFVEVDVElPTiBIRUxQRVJTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogVG91Y2ggRGV0ZWN0aW9uXG4gKi9cbkhlbHBlcnMuaXNUb3VjaCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gJ29udG91Y2hzdGFydCcgaW4gd2luZG93O1xufTtcblxuLyoqXG4gKiBEZXRlY3QgdHJhbnNpdGlvbmVuZCBldmVudC5cbiAqL1xuSGVscGVycy50cmFuc2l0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbigpIHtcblx0bGV0IHQ7XG5cdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zha2VlbGVtZW50Jyk7XG5cdGxldCB0cmFuc2l0aW9ucyA9IHtcblx0XHQndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcblx0XHQnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuXHRcdCdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuXHRcdCdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG5cdH07XG5cblx0Zm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG5cdFx0aWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiB0cmFuc2l0aW9uc1t0XTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogRGV0ZWN0IGFuaW1hdGlvbmVuZCBldmVudC5cbiAqL1xuSGVscGVycy5hbmltYXRpb25FbmRFdmVudCA9IGZ1bmN0aW9uKCkge1xuXHRsZXQgdDtcblx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmFrZWVsZW1lbnQnKTtcblx0bGV0IGFuaW1hdGlvbnMgPSB7XG5cdFx0J2FuaW1hdGlvbic6ICdhbmltYXRpb25lbmQnLFxuXHRcdCdPQW5pbWF0aW9uJzogJ29BbmltYXRpb25FbmQnLFxuXHRcdCdNb3pBbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJyxcblx0XHQnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCdcblx0fTtcblxuXHRmb3IgKHQgaW4gYW5pbWF0aW9ucykge1xuXHRcdGlmIChlbC5zdHlsZVt0XSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gYW5pbWF0aW9uc1t0XTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogUmVxdWVzdCBhbmltYXRpb24gZnJhbWVcbiAqXG4gKiBAcmV0dXJuIHtmdW5jdGlvbn1cbiAqL1xuSGVscGVycy5yZXF1ZXN0QW5pRnJhbWUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcblx0XHR3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG5cdFx0d2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuXHRcdGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0XHR3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcblx0XHR9O1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQ0hFQ0sgSEVMUEVSU1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vKipcbiAqIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnV5YWtzYS9qcXVlcnkubmljZXNjcm9sbC9ibG9iL21hc3Rlci9qcXVlcnkubmljZXNjcm9sbC5qc1xuICpcbiAqIFRvZG86IG1lcmdlIHdpdGggY2hlY2tFbGVtZW50SW5Db250ZXh0XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5IZWxwZXJzLmhhc1BhcmVudCA9IGZ1bmN0aW9uKGUsIHApIHtcblx0aWYgKCFlKSByZXR1cm4gZmFsc2U7XG5cdGxldCBlbCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCB8fCBlIHx8IGZhbHNlO1xuXHR3aGlsZSAoZWwgJiYgZWwgIT0gcCkge1xuXHRcdGVsID0gZWwucGFyZW50Tm9kZSB8fCBmYWxzZTtcblx0fVxuXHRyZXR1cm4gKGVsICE9PSBmYWxzZSk7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGVsZW1lbnQgaXMgaW4gYSBzcGVjaWZpYyBjb250ZXh0XG4gKiBhbmQgcmV0dXJuIHN0YXRlIGFzIGJvb2xlYW5cbiAqXG4gKiBUb2RvOiBtZXJnZSB3aXRoIGhhc1BhcmVudFxuICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBFbGVtZW50LCB3aGljaCB3aWxsIGJlIGNoZWNrZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0IC0gQ29udGV4dCBlbGVtZW50LCBpbiB3aGljaCBvdXIgZWxlbWVudCBjb3VsZCBwZXJzaXN0c1xuICpcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbkhlbHBlcnMuY2hlY2tFbGVtZW50SW5Db250ZXh0ID0gZnVuY3Rpb24oZWxlbSwgY29udGV4dCkge1xuXHRsZXQgY3VycmVudE5vZGUgPSBlbGVtO1xuXHRsZXQgY29udGV4dE5vZGUgPSBjb250ZXh0IHx8IGNvbnRleHQ7XG5cblx0d2hpbGUgKGN1cnJlbnROb2RlLnBhcmVudE5vZGUpIHtcblx0XHRjdXJyZW50Tm9kZSA9IGN1cnJlbnROb2RlLnBhcmVudE5vZGU7XG5cblx0XHRpZiAoSGVscGVycy5jaGVja05vZGVFcXVhbGl0eShjdXJyZW50Tm9kZSwgY29udGV4dE5vZGUpKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIG5vZGUgaXMgcmVhbGx5IHRoZSBzYW1lXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9iajEgLSBPYmplY3QsIHdoaWNoIHdlIHdhbnQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmoyIC0gRWxlbWVudCwgd2hpY2ggd2Ugd2FudCB0byBjaGVjayBhZ2FpbnN0IGVxdWFsaXR5XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSGVscGVycy5jaGVja05vZGVFcXVhbGl0eSA9IGZ1bmN0aW9uKG9iajEsIG9iajIpIHtcblx0cmV0dXJuIChvYmoxID09PSBvYmoyKTtcbn07XG5cblxuLyoqXG4gKiBDaGVjayBpZiBlbGVtZW50IGlzIGluIHZpZXdwb3J0XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSBPYmplY3QsIHdoaWNoIHdlIHdhbnQgdG8gY2hlY2tcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlQm91bmRzIC0gaWYgdHJ1ZSwgd2hvbGUgZWxlbWVudCBtdXN0IGJlIHZpc2libGVcbiAqXG4gKiBAcmV0dXJuIHtib29sZWFufVxuICovXG5IZWxwZXJzLmlzSW5WaWV3cG9ydCA9IGZ1bmN0aW9uKGVsZW0sIHVzZUJvdW5kcykge1xuXHRsZXQgZWwgPSBlbGVtO1xuXHRsZXQgdG9wID0gZWwub2Zmc2V0VG9wO1xuXHRsZXQgbGVmdCA9IGVsLm9mZnNldExlZnQ7XG5cdGxldCB3aWR0aCA9IGVsLm9mZnNldFdpZHRoO1xuXHRsZXQgaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0O1xuXHRsZXQgY29uZCA9IGZhbHNlO1xuXG5cdHdoaWxlIChlbC5vZmZzZXRQYXJlbnQpIHtcblx0XHRlbCA9IGVsLm9mZnNldFBhcmVudDtcblx0XHR0b3AgKz0gZWwub2Zmc2V0VG9wO1xuXHRcdGxlZnQgKz0gZWwub2Zmc2V0TGVmdDtcblx0fVxuXG5cdGlmICh1c2VCb3VuZHMpIHtcblx0XHRjb25kID0gdG9wID49IHdpbmRvdy5wYWdlWU9mZnNldCAmJiBsZWZ0ID49IHdpbmRvdy5wYWdlWE9mZnNldCAmJiAodG9wICsgaGVpZ2h0KSA8PSAod2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0KSAmJiAobGVmdCArIHdpZHRoKSA8PSAod2luZG93LnBhZ2VYT2Zmc2V0ICsgd2luZG93LmlubmVyV2lkdGgpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbmQgPSB0b3AgPCAod2luZG93LnBhZ2VZT2Zmc2V0ICsgd2luZG93LmlubmVySGVpZ2h0KSAmJiBsZWZ0IDwgKHdpbmRvdy5wYWdlWE9mZnNldCArIHdpbmRvdy5pbm5lcldpZHRoKSAmJiAodG9wICsgaGVpZ2h0KSA+IHdpbmRvdy5wYWdlWU9mZnNldCAmJiAobGVmdCArIHdpZHRoKSA+IHdpbmRvdy5wYWdlWE9mZnNldDtcblx0fVxuXG5cdHJldHVybiBjb25kO1xufTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gTEFZT1VUIEhFTFBFUlNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBvdXRlciBoZWlnaHQgZm9yIHRoZSBnaXZlbiBET00gZWxlbWVudCwgaW5jbHVkaW5nIHRoZVxuICogY29udHJpYnV0aW9ucyBvZiBtYXJnaW4uXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGVsZW0gLSB0aGUgZWxlbWVudCBvZiB3aGljaCB0byBjYWxjdWxhdGUgdGhlIG91dGVyIGhlaWdodFxuICogQHBhcmFtIHtib29sZWFufSBvdXRlciAtIGFkZCBwYWRkaW5nIHRvIGhlaWdodCBjYWxjdWxhdGlvblxuICpcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xuSGVscGVycy5nZXRPdXRlckhlaWdodCA9IGZ1bmN0aW9uKGVsZW0sIG91dGVyKSB7XG5cdGxldCBlbCA9IGVsZW07XG5cdGxldCBoZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG5cblx0aWYgKG91dGVyKSB7XG5cdFx0bGV0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG5cdFx0aGVpZ2h0ICs9IHBhcnNlSW50KHN0eWxlLnBhZGRpbmdUb3ApICsgcGFyc2VJbnQoc3R5bGUucGFkZGluZ0JvdHRvbSk7XG5cdH1cblx0cmV0dXJuIGhlaWdodDtcbn07XG5cbi8qKlxuICogVGVtcGxhdGl6ZXIgY2xlYW5zIHVwIHRlbXBsYXRlIHRhZ3MgYW5kIGluc2VydCB0aGUgaW5uZXIgaHRtbCBiZWZvcmUgdGhlIHRhZ1xuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogLSBDb250YWlucyBhbGwgcHJvcGVydGllc1xuICogQHBhcmFtIHtzdHJpbmd9IG9iai50ZW1wbGF0ZU5hbWUgLSBEZWZpbmVzIHRoZSB0ZW1wbGF0ZSBuYW1lIHdoaWNoIGlzIGEgc2VsZWN0b3IgZnJvbSB0aGUgZWxlbWVudFxuICovXG5IZWxwZXJzLnRlbXBsYXRpemVyID0gZnVuY3Rpb24ob2JqKSB7XG5cdGlmICghJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpIHJldHVybjtcblx0aWYgKCFvYmogJiYgIW9iai50ZW1wbGF0ZU5hbWUpIHRocm93IG5ldyBFcnJvcignWW91IG5lZWQgdG8gcGFzcyBhIHRlbXBsYXRlIG5hbWVzcGFjZSBhcyBzdHJpbmchJyk7XG5cblx0SGVscGVycy5xdWVyeVNlbGVjdG9yQXJyYXkob2JqLnRlbXBsYXRlTmFtZSkuZm9yRWFjaChmdW5jdGlvbih0cGwpIHtcblx0XHRsZXQgcGFyZW50ID0gdHBsLnBhcmVudE5vZGU7XG5cdFx0bGV0IGNvbnRlbnQgPSB0cGwuY29udGVudC5jaGlsZHJlblswXTtcblxuXHRcdHBhcmVudC5pbnNlcnRCZWZvcmUoY29udGVudCwgdHBsKTtcblx0fSk7XG59O1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBPVEhFUiBIRUxQRVJTXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8qKlxuICogRGV0ZXJtaW5lIGNsaWNrIGhhbmRsZXIuXG4gKlxuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5IZWxwZXJzLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gSGVscGVycy5pc1RvdWNoKCkgPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiBzY3JpcHQgaXMgYWxyZWFkeSBhZGRlZCxcbiAqIGFuZCByZXR1cm5zIHRydWUgb3IgZmFsc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsIC0gVVJMIHRvIHlvdXIgc2NyaXB0XG4gKlxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuSGVscGVycy5jaGVja1NjcmlwdCA9IGZ1bmN0aW9uKHVybCkge1xuXHRsZXQgeCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRsZXQgc2NyaXB0QWRkZWQgPSBmYWxzZTtcblxuXHRmb3IgKGxldCBpID0gMDsgaSA8IHgubGVuZ3RoOyBpKyspIHtcblx0XHRpZiAoeFtpXS5zcmMgPT0gdXJsKSB7XG5cdFx0XHRzY3JpcHRBZGRlZCA9IHRydWU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBzY3JpcHRBZGRlZDtcbn07XG5cbi8qKlxuICogTG9hZCBzY3JpcHRzIGFzeW5jaHJvbm91cyxcbiAqIGNoZWNrIGlmIHNjcmlwdCBpcyBhbHJlYWR5IGFkZGVkLFxuICogb3B0aW9uYWwgY2hlY2sgaWYgc2NyaXB0IGlzIGZ1bGx5IGxvYWRlZCBhbmRcbiAqIGV4ZWN1dGUgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHVybCAtIFVSTCB0byB5b3VyIHNjcmlwdFxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tGbiAtIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gY2FsbGJhY2tPYmogLSB0aGlzIGNvbnRleHRcbiAqL1xuSGVscGVycy5sb2FkU2NyaXB0ID0gZnVuY3Rpb24odXJsLCBjYWxsYmFja0ZuLCBjYWxsYmFja09iaikge1xuXHRsZXQgc2NyaXB0QWRkZWQgPSBIZWxwZXJzLmNoZWNrU2NyaXB0KHVybCk7XG5cdGxldCBzY3JpcHQ7XG5cblx0aWYgKHNjcmlwdEFkZGVkID09PSBmYWxzZSkge1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cdH1cblxuXHRpZiAoY2FsbGJhY2tGbiAmJiB0eXBlb2YoY2FsbGJhY2tGbikgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdGlmIChzY3JpcHRBZGRlZCA9PT0gdHJ1ZSkge1xuXHRcdFx0Y2FsbGJhY2tGbi5hcHBseShjYWxsYmFja09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKHgucmVhZHlTdGF0ZSA9PSAnY29tcGxldGUnKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2tGbi5hcHBseShjYWxsYmFja09iaik7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRzY3JpcHQub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrRm4uYXBwbHkoY2FsbGJhY2tPYmopO1xuXHRcdFx0fTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZmFsc2U7XG59O1xuXG5IZWxwZXJzLmhhc0NsYXNzID0gZnVuY3Rpb24oZWxlbSwgY2xhc3NOYW1lKSB7XG5cdGxldCBlbCA9IGVsZW07XG5cblx0aWYgKCdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkge1xuXHRcdHJldHVybiBlbC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gSGVscGVycy5yZWdFeHAoY2xhc3NOYW1lKS50ZXN0KGVsLmNsYXNzTmFtZSk7XG5cdH1cbn07XG5cbkhlbHBlcnMuYWRkQ2xhc3MgPSBmdW5jdGlvbihlbGVtLCBjbGFzc05hbWUpIHtcblx0bGV0IGVsID0gZWxlbTtcblxuXHRpZiAoJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KSB7XG5cdFx0ZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuXHR9IGVsc2Uge1xuXHRcdGlmICghSGVscGVycy5oYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xuXHRcdFx0ZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lO1xuXHRcdH1cblx0fVxufTtcblxuSGVscGVycy5yZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZW0sIGNsYXNzTmFtZSkge1xuXHRsZXQgZWwgPSBlbGVtO1xuXG5cdGlmICgnY2xhc3NMaXN0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcblx0XHRlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0ZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UoSGVscGVycy5yZWdFeHAoY2xhc3NOYW1lKSwgJyAnKTtcblx0fVxufTtcblxuXG4vKipcbiAqIEFkZC9VcGRhdGUgYSBwYXJhbWV0ZXIgZm9yIGdpdmVuIHVybFxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBIZWxwZXJzLnVwZGF0ZVVybCBpbnN0ZWFkXG4gKiBAcGFyYW0ge1N0cmluZ30gdXJsIC0gdXJsIG9uIHdoaWNoIHRoZSBwYXJhbWV0ZXIgc2hvdWxkIGJlIGFkZGVkIC8gdXBkYXRlZFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZSAtIHBhcmFtZXRlciBuYW1lXG4gKiBAcGFyYW0geyhTdHJpbmd8TnVtYmVyKX0gcGFyYW1WYWx1ZSAtIHBhcmFtZXRlciB2YWx1ZVxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gLSB1cmxcbiAqL1xuSGVscGVycy5hZGRQYXJhbVRvVXJsID0gZnVuY3Rpb24odXJsLCBwYXJhbU5hbWUsIHBhcmFtVmFsdWUpIHtcblx0bGV0IHBhcmFtcyA9IHt9O1xuXG5cdHBhcmFtc1twYXJhbU5hbWVdID0gcGFyYW1WYWx1ZTtcblxuXHRyZXR1cm4gSGVscGVycy51cGRhdGVVcmwodXJsLCBwYXJhbXMpO1xufTtcblxuXG4vKipcbiAqIEFkZC9VcGRhdGUgbXVsdGlwbGUgcGFyYW1ldGVycyBmb3IgZ2l2ZW4gdXJsXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHVybCAtIHVybCBvbiB3aGljaCBwYXJhbWV0ZXJzIHNob3VsZCBiZSBhZGRlZCAvIHVwZGF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgLSBwYXJhbWV0ZXJzIChuYW1lL3ZhbHVlKVxuICpcbiAqIEByZXR1cm4ge1N0cmluZ30gLSByZXN1bHRpbmcgdXJsXG4gKi9cbkhlbHBlcnMudXBkYXRlVXJsID0gZnVuY3Rpb24odXJsLCBwYXJhbXMpIHtcblx0bGV0IHVybFBhcnRzID0gdXJsLnNwbGl0KCc/Jyk7XG5cdGxldCB0bXBQYXJhbXMgPSBbXTtcblx0bGV0IG9yaWdpbmFsUGFyYW1zID0gW107XG5cdGxldCBuZXdQYXJhbXMgPSBbXTtcblx0bGV0IGJhc2VVcmwgPSAnJztcblx0bGV0IHByb3BlcnR5ID0gJyc7XG5cdGxldCB1cGRhdGVkID0gZmFsc2U7XG5cdGxldCBpID0gMDtcblx0bGV0IGogPSAwO1xuXG5cdGZvciAocHJvcGVydHkgaW4gcGFyYW1zKSB7XG5cdFx0aWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcblx0XHRcdHRtcFBhcmFtcy5wdXNoKFtwcm9wZXJ0eSwgJz0nLCBwYXJhbXNbcHJvcGVydHldXS5qb2luKCcnKSk7XG5cdFx0fVxuXHR9XG5cblx0YmFzZVVybCA9IHVybFBhcnRzWzBdO1xuXHRvcmlnaW5hbFBhcmFtcyA9IHVybFBhcnRzLmxlbmd0aCA+IDEgPyB1cmxQYXJ0c1sxXS5zcGxpdCgnJicpIDogW107XG5cblx0Zm9yIChpOyBpIDwgdG1wUGFyYW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0dXBkYXRlZCA9IGZhbHNlO1xuXG5cdFx0Zm9yIChqID0gMDsgaiA8IG9yaWdpbmFsUGFyYW1zLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAodG1wUGFyYW1zW2ldICYmIG9yaWdpbmFsUGFyYW1zW2pdLnNwbGl0KCc9JylbMF0gPT09IHRtcFBhcmFtc1tpXS5zcGxpdCgnPScpWzBdKSB7XG5cdFx0XHRcdG9yaWdpbmFsUGFyYW1zW2pdID0gdG1wUGFyYW1zW2ldO1xuXHRcdFx0XHR1cGRhdGVkID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCF1cGRhdGVkKSB7XG5cdFx0XHRuZXdQYXJhbXMucHVzaCh0bXBQYXJhbXNbaV0pO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiAoW2Jhc2VVcmwsICc/Jywgb3JpZ2luYWxQYXJhbXMuY29uY2F0KG5ld1BhcmFtcykuam9pbignJicpXS5qb2luKCcnKSk7XG59O1xuXG5cbi8qKlxuICogR2VuZXJhdGVzIGFscGhhbnVtZXJpYyBpZC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gW2xlbmd0aD01XSAtIGxlbmd0aCBvZiBnZW5lcmF0ZWQgaWQuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSAtIGdlbmVyYXRlZCBpZFxuICovXG5IZWxwZXJzLm1ha2VJZCA9IGZ1bmN0aW9uKGxlbmd0aCkge1xuXHRsZXQgaWRMZW5ndGggPSBsZW5ndGggfHwgNTtcblx0bGV0IGNoYXJQb29sID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Jztcblx0bGV0IGkgPSAwO1xuXHRsZXQgaWQgPSAnJztcblxuXHRmb3IgKDsgaSA8IGlkTGVuZ3RoOyBpKyspXG5cdFx0aWQgKz0gY2hhclBvb2wuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJQb29sLmxlbmd0aCkpO1xuXG5cdHJldHVybiBpZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHBlcnM7Il19

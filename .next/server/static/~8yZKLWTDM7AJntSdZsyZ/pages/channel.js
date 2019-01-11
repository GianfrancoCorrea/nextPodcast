module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);








next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeStart = function () {
  nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.start();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeComplete = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

next_router__WEBPACK_IMPORTED_MODULE_5___default.a.onRouteChangeError = function () {
  return nprogress__WEBPACK_IMPORTED_MODULE_4___default.a.done();
};

function Layout(props) {
  var children = props.children,
      title = props.title;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3170789433"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-3170789433"
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-3170789433"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("header", {
    className: "jsx-3170789433"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3170789433"
  }, "nextPodcast"))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "508872940",
    css: ["header.jsx-3170789433{color:#fff;background:#8756ca;padding:15px;text-align:center;font-weight:600;}", "header.jsx-3170789433 a.jsx-3170789433{color:#fff;-webkit-text-decoration:none;text-decoration:none;}"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3533377404",
    css: ["body{background:#fafafa;font-family:system-ui;margin:0;}"]
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "377376329",
    css: ["#nprogress{pointer-events:none;}", "#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}", "#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}", "#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}", "#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}", ".nprogress-custom-parent{overflow:hidden;position:relative;}", ".nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}", "@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}", "@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}"]
  }));
}
Layout.defaultProps = {
  title: 'nextPodcast'
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Error =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Error, _React$Component);

  function Error() {
    _classCallCheck(this, Error);

    return _possibleConstructorReturn(this, _getPrototypeOf(Error).apply(this, arguments));
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        title: "Oh no :("
      }, statusCode === 404 ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-843739228" + " " + "message"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-843739228"
      }, "Page not found :("), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-843739228"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-843739228"
      }, "Back home")))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-843739228" + " " + "message"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-843739228"
      }, "An error occurred :("), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-843739228"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "jsx-843739228"
      }, "Back home")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "843739228",
        css: [".message.jsx-843739228{padding:100px 30px;text-align:center;}", "h1.jsx-843739228{margin-bottom:2em;}", "a.jsx-843739228{color:#8756ca;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;

      var _ref2 = res || err && err,
          statusCode = _ref2.statusCode; // const statusCode = res ? res.statusCode : err ? err.statusCode : null;


      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slug; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);

function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(17);

module.exports = routes().add('index').add('channel', '/:slug.:id', 'channel').add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);






function ChannelGrid(props) {
  var channels = props.channels,
      isFetching = props.isFetching;
  var loader = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", {
    className: "jsx-2592529584"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-2592529584"
  }, "nextPodcast")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "loader"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "bar1"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "bar2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "bar3"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "bar4"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "bar5"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2592529584" + " " + "bar6"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2592529584",
    css: ["body,html{background-color:#8756ca!important;height:100%;position:relative;overflow:hidden;}", "header a{color:#8756ca!important;}", "h2{margin:0 auto;text-align:center;font-size:20px;position:absolute;top:40%;width:100%;color:white;}", ".loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%);}", ".loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;-webkit-animation:delay 0.8s infinite ease-in-out;-webkit-animation:delay 0.8s infinite ease-in-out;animation:delay 0.8s infinite ease-in-out;}", ".loader .bar1{background-color:#754fa0;}", ".loader .bar2{background-color:#09b7bf;-webkit-animation-delay:-0.7s;-webkit-animation-delay:-0.7s;animation-delay:-0.7s;}", ".loader .bar3{background-color:#90d36b;-webkit-animation-delay:-0.6s;-webkit-animation-delay:-0.6s;animation-delay:-0.6s;}", ".loader .bar4{background-color:#f2d40d;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}", ".loader .bar5{background-color:#fcb12b;-webkit-animation-delay:-0.4s;-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}", ".loader .bar6{background-color:#ed1b72;-webkit-animation-delay:-0.3s;-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}", "@-webkit-keyframes delay{0%,40%,100%{-webkit-transform:scaleY(0.05);}20%{-webkit-transform:scaleY(1);}}", "@-webkit-keyframes delay{0%,40%,100%{-webkit-transform:scaleY(0.05);-ms-transform:scaleY(0.05);transform:scaleY(0.05);-webkit-transform:scaleY(0.05);}20%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform:scaleY(1);}}", "@keyframes delay{0%,40%,100%{-webkit-transform:scaleY(0.05);-ms-transform:scaleY(0.05);transform:scaleY(0.05);-webkit-transform:scaleY(0.05);}20%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform:scaleY(1);}}"]
  }));
  var channelsUI = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2083460930" + " " + "channels"
  }, channels.map(function (channel) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "channel",
      params: {
        slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(channel.title),
        id: channel.id
      },
      key: channel.id,
      prefetch: true
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2083460930" + " " + "channel"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: channel.urls.logo_image.original,
      alt: channel.title,
      className: "jsx-2083460930"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
      className: "jsx-2083460930"
    }, channel.title)));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2083460930",
    css: [".channels.jsx-2083460930{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}", "a.channel.jsx-2083460930{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}", ".channel.jsx-2083460930 img.jsx-2083460930{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}"]
  }));
  return !isFetching ? channelsUI : loader;
}

/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])()(ChannelGrid));

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),
/* 16 */,
/* 17 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Layout.jsx
var Layout = __webpack_require__(5);

// EXTERNAL MODULE: ./components/ChannelGrid.jsx
var ChannelGrid = __webpack_require__(14);

// EXTERNAL MODULE: ./pages/_error.jsx
var _error = __webpack_require__(9);

// EXTERNAL MODULE: ./helpers/slug.js
var slug = __webpack_require__(11);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(7);

// CONCATENATED MODULE: ./components/PodcastListWithClick.jsx




function PodcastListWithClick(props) {
  var podcasts = props.podcasts,
      onClickPodcast = props.onClickPodcast;
  return external_react_default.a.createElement("div", {
    className: "jsx-3605175331"
  }, podcasts.map(function (podcast) {
    return external_react_default.a.createElement("a", {
      href: "/".concat(Object(slug["a" /* default */])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(slug["a" /* default */])(podcast.title), ".").concat(podcast.id),
      key: podcast.id,
      onClick: function onClick(event) {
        return onClickPodcast(event, podcast);
      },
      className: "jsx-3605175331" + " " + "podcast"
    }, external_react_default.a.createElement("h3", {
      className: "jsx-3605175331"
    }, podcast.title), external_react_default.a.createElement("div", {
      className: "jsx-3605175331" + " " + "meta"
    }, Math.ceil(podcast.duration / 60), ' ', "minutes"));
  }), external_react_default.a.createElement(style_default.a, {
    styleId: "3605175331",
    css: [".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}", ".podcast.jsx-3605175331:hover{color:#000;}", ".podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}", ".podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}"]
  }));
}
// EXTERNAL MODULE: ./routes.js
var routes = __webpack_require__(13);

// CONCATENATED MODULE: ./components/podcastPlayer.jsx





function PodcastPlayer(props) {
  var clip = props.clip,
      onClose = props.onClose,
      children = props.children,
      minimized = props.minimized;
  var modalState = !minimized ? 'modal' : 'hidden';
  return external_react_default.a.createElement("div", {
    className: "jsx-3194333041" + " " + (modalState || "")
  }, external_react_default.a.createElement("div", {
    className: "jsx-3194333041" + " " + "clip"
  }, external_react_default.a.createElement("nav", {
    className: "jsx-3194333041"
  }, onClose ? external_react_default.a.createElement("a", {
    onClick: onClose,
    className: "jsx-3194333041"
  }, external_react_default.a.createElement("b", {
    className: "jsx-3194333041"
  }, external_react_default.a.createElement("span", {
    role: "img",
    "aria-label": "arrow",
    className: "jsx-3194333041"
  }, "\u23EC "), "Minimize")) : external_react_default.a.createElement(routes["Link"], {
    route: "channel",
    params: {
      slug: Object(slug["a" /* default */])(clip.channel.title),
      id: clip.channel.id
    },
    prefetch: true
  }, external_react_default.a.createElement("a", {
    className: "jsx-3194333041" + " " + "close"
  }, "< Volver"))), external_react_default.a.createElement("picture", {
    className: "jsx-3194333041"
  }, external_react_default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
    },
    className: "jsx-3194333041"
  }))), children, external_react_default.a.createElement(style_default.a, {
    styleId: "3194333041",
    css: ["nav.jsx-3194333041{background:none;}", "nav.jsx-3194333041 a.jsx-3194333041{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}", ".clip.jsx-3194333041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;z-index:100;}", ".hidden.jsx-3194333041 .clip.jsx-3194333041{display:none;}", "picture.jsx-3194333041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}", "picture.jsx-3194333041 div.jsx-3194333041{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}", ".modal.jsx-3194333041{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}"]
  }));
}
PodcastPlayer.defaultProps = {
  onClose: null,
  minimized: null
};
// CONCATENATED MODULE: ./components/Audio.jsx




function Audio(props) {
  var clip = props.clip;
  return external_react_default.a.createElement("div", {
    className: "jsx-3422780558" + " " + "player"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-3422780558"
  }, clip.title), external_react_default.a.createElement("h6", {
    className: "jsx-3422780558"
  }, clip.channel.title), external_react_default.a.createElement("audio", {
    controls: true,
    autoPlay: true,
    className: "jsx-3422780558"
  }, external_react_default.a.createElement("source", {
    src: clip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-3422780558"
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "3422780558",
    css: [".player.jsx-3422780558{width:100%;position:fixed;z-index:110;bottom:0;padding-top:1em;background:#8756ca;text-align:center;}", "h3.jsx-3422780558{margin:0;padding-left:1em;padding-right:1em;}", "h6.jsx-3422780558{margin:0;margin-top:1em;}", "audio.jsx-3422780558{margin-top:1em;width:95%;border-radius:0;}"]
  }));
}

/* harmony default export */ var components_Audio = (Audio);
// CONCATENATED MODULE: ./pages/channel.jsx
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return channel_Channel; });



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var channel_Channel =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Channel, _React$Component);

  function Channel(props) {
    var _this;

    _classCallCheck(this, Channel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Channel).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openPodcast", function (event, podcast) {
      event.preventDefault();

      _this.setState({
        openPodcast: podcast
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closePodcast", function (event) {
      event.preventDefault();

      _this.setState({
        minimized: true
      });
    });

    _this.state = {
      openPodcast: null,
      minimized: false
    };
    return _this;
  }

  _createClass(Channel, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          channel = _this$props.channel,
          series = _this$props.series,
          audioClips = _this$props.audioClips,
          statusCode = _this$props.statusCode;
      var _this$state = this.state,
          openPodcast = _this$state.openPodcast,
          minimized = _this$state.minimized;

      if (statusCode !== 200) {
        return external_react_default.a.createElement(_error["default"], {
          statusCode: statusCode
        });
      }

      return external_react_default.a.createElement(Layout["a" /* default */], {
        title: channel.title
      }, external_react_default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        className: "jsx-1601331852" + " " + "banner"
      }), external_react_default.a.createElement("h1", {
        className: "jsx-1601331852"
      }, channel.title), series.length > 0 && external_react_default.a.createElement("div", {
        className: "jsx-1601331852" + " " + "series"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1601331852"
      }, "Series"), external_react_default.a.createElement(ChannelGrid["a" /* default */], {
        channels: series
      })), external_react_default.a.createElement("div", {
        className: "jsx-1601331852" + " " + "lastPodcasts"
      }, external_react_default.a.createElement("h2", {
        className: "jsx-1601331852"
      }, "Ultimos Podcasts"), external_react_default.a.createElement(PodcastListWithClick, {
        podcasts: audioClips,
        onClickPodcast: this.openPodcast
      })), openPodcast && external_react_default.a.createElement(PodcastPlayer, {
        clip: openPodcast,
        onClose: this.closePodcast,
        minimized: minimized
      }, external_react_default.a.createElement(components_Audio, {
        clip: openPodcast,
        minimized: minimized,
        onClose: this.closePodcast
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "1601331852",
        css: [".banner.jsx-1601331852{width:100%;padding-botconst:25%;background-consttion:50% 50%;background-const:cover;background-constr:#aaa;}", "h1.jsx-1601331852{font-weight:600;padding:15px;}", "h2.jsx-1601331852{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}"]
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, requestChannel, requestSeries, requestAudios, dataChannel, channel, dataSeries, series, dataAudios, audioClips;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                _context.prev = 1;
                idChannel = query.id;
                _context.next = 5;
                return Promise.all([fetch("https://api.audioboom.com/channels/".concat(idChannel)), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/child_channels")), fetch("https://api.audioboom.com/channels/".concat(idChannel, "/audio_clips"))]);

              case 5:
                _ref2 = _context.sent;
                _ref3 = _slicedToArray(_ref2, 3);
                requestChannel = _ref3[0];
                requestSeries = _ref3[1];
                requestAudios = _ref3[2];

                if (!(requestChannel.status >= 404)) {
                  _context.next = 13;
                  break;
                }

                res.statusCode = requestChannel.status;
                return _context.abrupt("return", {
                  channel: null,
                  series: null,
                  audioClips: null,
                  statusCode: 404
                });

              case 13:
                _context.next = 15;
                return requestChannel.json();

              case 15:
                dataChannel = _context.sent;
                channel = dataChannel.body.channel;
                _context.next = 19;
                return requestSeries.json();

              case 19:
                dataSeries = _context.sent;
                series = dataSeries.body.channels;
                _context.next = 23;
                return requestAudios.json();

              case 23:
                dataAudios = _context.sent;
                audioClips = dataAudios.body.audio_clips;
                return _context.abrupt("return", {
                  channel: channel,
                  series: series,
                  audioClips: audioClips,
                  statusCode: 200
                });

              case 28:
                _context.prev = 28;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", {
                  channel: null,
                  series: null,
                  audioClips: null,
                  statusCode: 503
                });

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 28]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Channel;
}(external_react_default.a.Component);


channel_Channel.defaultProps = {
  series: null
};

/***/ })
/******/ ]);
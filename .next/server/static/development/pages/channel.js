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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Audio.jsx":
/*!******************************!*\
  !*** ./components/Audio.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function Audio(props) {
  var clip = props.clip;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3422780558" + " " + "player"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-3422780558"
  }, clip.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
    className: "jsx-3422780558"
  }, clip.channel.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("audio", {
    controls: true,
    autoPlay: true,
    className: "jsx-3422780558"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("source", {
    src: clip.urls.high_mp3,
    type: "audio/mpeg",
    className: "jsx-3422780558"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3422780558",
    css: ".player.jsx-3422780558{width:100%;position:fixed;z-index:110;bottom:0;padding-top:1em;background:#8756ca;text-align:center;}h3.jsx-3422780558{margin:0;padding-left:1em;padding-right:1em;}h6.jsx-3422780558{margin:0;margin-top:1em;}audio.jsx-3422780558{margin-top:1em;width:95%;border-radius:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvQXVkaW8uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWNpQixBQUdzQixBQVVGLEFBS0EsQUFJTSxTQVJFLEFBS0YsRUFmQSxJQW1CTCxTQUhaLENBSWtCLENBbkJKLEFBVU0sWUFUVCxHQW1CWCxHQVRBLEdBVGtCLGdCQUVHLG1CQUNELGtCQUNwQiIsImZpbGUiOiIvaG9tZS9hcnppb24tbGVub3ZvMS9Eb2N1bWVudHMvR2lhbmZyYW5jby9uZXh0cG9kY2FzdC9jb21wb25lbnRzL0F1ZGlvLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBBdWRpbyhwcm9wcykge1xuICAgIGNvbnN0IHsgY2xpcCB9ID0gcHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbGF5ZXJcIj5cbiAgICAgICAgICAgIDxoMz57Y2xpcC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPGg2PntjbGlwLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT5cbiAgICAgICAgICAgICAgICA8c291cmNlIHNyYz17Y2xpcC51cmxzLmhpZ2hfbXAzfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XG4gICAgICAgICAgICA8L2F1ZGlvPlxuXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgIC5wbGF5ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB6LWluZGV4OiAxMTA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgICAgICAgXG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgaDMge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgIH1cbiAgICAgICAgYXVkaW8ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBdWRpbztcblxuQXVkaW8ucHJvcFR5cGVzID0ge1xuICAgIGNsaXA6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBjaGFubmVsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIH0pLFxuICAgICAgICB1cmxzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgaGlnaF9tcDM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIH0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG59O1xuIl19 */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/Audio.jsx */"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Audio);
Audio.propTypes = {
  clip: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
    channel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    }),
    urls: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
      high_mp3: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
    })
  }).isRequired
};

/***/ }),

/***/ "./components/ChannelGrid.jsx":
/*!************************************!*\
  !*** ./components/ChannelGrid.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
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
    css: "body,html{background-color:#8756ca!important;height:100%;position:relative;overflow:hidden;}header a{color:#8756ca!important;}h2{margin:0 auto;text-align:center;font-size:20px;position:absolute;top:40%;width:100%;color:white;}.loader{margin:0 auto;width:60px;height:50px;text-align:center;font-size:10px;position:absolute;top:50%;left:50%;-webkit-transform:translateY(-50%) translateX(-50%);}.loader>div{height:100%;width:8px;display:inline-block;float:left;margin-left:2px;-webkit-animation:delay 0.8s infinite ease-in-out;-webkit-animation:delay 0.8s infinite ease-in-out;animation:delay 0.8s infinite ease-in-out;}.loader .bar1{background-color:#754fa0;}.loader .bar2{background-color:#09b7bf;-webkit-animation-delay:-0.7s;-webkit-animation-delay:-0.7s;animation-delay:-0.7s;}.loader .bar3{background-color:#90d36b;-webkit-animation-delay:-0.6s;-webkit-animation-delay:-0.6s;animation-delay:-0.6s;}.loader .bar4{background-color:#f2d40d;-webkit-animation-delay:-0.5s;-webkit-animation-delay:-0.5s;animation-delay:-0.5s;}.loader .bar5{background-color:#fcb12b;-webkit-animation-delay:-0.4s;-webkit-animation-delay:-0.4s;animation-delay:-0.4s;}.loader .bar6{background-color:#ed1b72;-webkit-animation-delay:-0.3s;-webkit-animation-delay:-0.3s;animation-delay:-0.3s;}@-webkit-keyframes delay{0%,40%,100%{-webkit-transform:scaleY(0.05);}20%{-webkit-transform:scaleY(1);}}@-webkit-keyframes delay{0%,40%,100%{-webkit-transform:scaleY(0.05);-ms-transform:scaleY(0.05);transform:scaleY(0.05);-webkit-transform:scaleY(0.05);}20%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform:scaleY(1);}}@keyframes delay{0%,40%,100%{-webkit-transform:scaleY(0.05);-ms-transform:scaleY(0.05);transform:scaleY(0.05);-webkit-transform:scaleY(0.05);}20%{-webkit-transform:scaleY(1);-ms-transform:scaleY(1);transform:scaleY(1);-webkit-transform:scaleY(1);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CaUIsQUFHd0QsQUFLRixBQUVmLEFBVUosQUFXRixBQVNhLEFBR0EsQUFLQSxBQUtBLEFBS0EsQUFLQSxBQU9VLEFBR0gsQUFLTCxBQUlILFlBbERkLEVBckJRLEFBVVAsUUFZVSxFQXpCYSxDQWN0QixBQW1CWixBQUc4QixBQUtBLEFBS0EsQUFLQSxBQUtBLEdBVTlCLEdBSEEsQ0EzRGUsR0FSSCxFQW1CTSxNQVdQLElBN0JPLEFBUUEsT0FzQkYsQ0FYRCxBQXFCTyxBQUtBLEFBS0EsQUFLQSxBQUtBLFVBM0ROLEFBUVIsS0FXVSxBQVdnQyxFQStDbEIsQ0FwRXJCLFFBUlgsQUF3RW1DLEdBOUR2QixJQVNKLFFBUlIsQUFTUyxJQXlEVCxLQXhEb0QsRUFrQnBELEFBS0EsQUFLQSxBQUtBLEFBS0EsS0FjQSxRQTNDMEMscUNBUjFDLHVEQVNBIiwiZmlsZSI6Ii9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmZ1bmN0aW9uIENoYW5uZWxHcmlkKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGFubmVscywgaXNGZXRjaGluZyB9ID0gcHJvcHM7XG4gICAgY29uc3QgbG9hZGVyID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGNlbnRlcj48aDI+bmV4dFBvZGNhc3Q8L2gyPjwvY2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyMlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIzXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjRcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyNVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXI2XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSwgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzU2Y2EhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgYSB7Y29sb3I6ICM4NzU2Y2EhaW1wb3J0YW50O31cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxvYWRlciA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRlbGF5IDAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZGVsYXkgMC44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIC5iYXIxIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NGZhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIC5iYXIyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YjdiZjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sb2FkZXIgLmJhcjMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBkMzZiO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxvYWRlciAuYmFyNCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0MGQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIC5iYXI1IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYjEyYjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sb2FkZXIgLmJhcjYge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYjcyO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZGVsYXkge1xuICAgICAgICAgICAgICAgICAgICAwJSwgNDAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGRlbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBjaGFubmVsc1VJID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG4gICAgICAgICAgICB7Y2hhbm5lbHMubWFwKGNoYW5uZWwgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiY2hhbm5lbFwiIHBhcmFtcz17eyBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLCBpZDogY2hhbm5lbC5pZCB9fSBrZXk9e2NoYW5uZWwuaWR9IHByZWZldGNoPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD17Y2hhbm5lbC50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNoYW5uZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuICFpc0ZldGNoaW5nID8gY2hhbm5lbHNVSSA6IGxvYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKENoYW5uZWxHcmlkKTtcbiJdfQ== */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/ChannelGrid.jsx */"
  }));
  var channelsUI = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2083460930" + " " + "channels"
  }, channels.map(function (channel) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      route: "channel",
      params: {
        slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(channel.title),
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
    css: ".channels.jsx-2083460930{display:grid;grid-gap:15px;padding:15px;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));}a.channel.jsx-2083460930{display:block;margin-bottom:0.5em;color:#333;-webkit-text-decoration:none;text-decoration:none;}.channel.jsx-2083460930 img.jsx-2083460930{border-radius:3px;box-shadow:0px 2px 6px rgba(0,0,0,0.15);width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlIaUIsQUFHc0MsQUFNQyxBQU1JLGFBWEosQ0FNTSxJQU1vQixTQVgzQixPQU1GLE1BTGlELEtBTXZDLGFBS1YsV0FDWCwwQkFMQSxHQU5BIiwiZmlsZSI6Ii9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvQ2hhbm5lbEdyaWQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmZ1bmN0aW9uIENoYW5uZWxHcmlkKHByb3BzKSB7XG4gICAgY29uc3QgeyBjaGFubmVscywgaXNGZXRjaGluZyB9ID0gcHJvcHM7XG4gICAgY29uc3QgbG9hZGVyID0gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGNlbnRlcj48aDI+bmV4dFBvZGNhc3Q8L2gyPjwvY2VudGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjFcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyMlwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXIzXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhcjRcIiAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFyNVwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYXI2XCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgYm9keSwgaHRtbCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NzU2Y2EhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBoZWFkZXIgYSB7Y29sb3I6ICM4NzU2Y2EhaW1wb3J0YW50O31cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNDAlO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxvYWRlciA+IGRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGRlbGF5IDAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZGVsYXkgMC44cyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIC5iYXIxIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NGZhMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIC5iYXIyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA5YjdiZjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjdzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sb2FkZXIgLmJhcjMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTBkMzZiO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmxvYWRlciAuYmFyNCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmQ0MGQ7XG4gICAgICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAtMC41cztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAubG9hZGVyIC5iYXI1IHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjYjEyYjtcbiAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IC0wLjRzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5sb2FkZXIgLmJhcjYge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQxYjcyO1xuICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTAuM3M7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgZGVsYXkge1xuICAgICAgICAgICAgICAgICAgICAwJSwgNDAlLCAxMDAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGRlbGF5IHtcbiAgICAgICAgICAgICAgICAgICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjA1KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC4wNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgMjAlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICBjb25zdCBjaGFubmVsc1VJID0gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW5uZWxzXCI+XG4gICAgICAgICAgICB7Y2hhbm5lbHMubWFwKGNoYW5uZWwgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPVwiY2hhbm5lbFwiIHBhcmFtcz17eyBzbHVnOiBzbHVnKGNoYW5uZWwudGl0bGUpLCBpZDogY2hhbm5lbC5pZCB9fSBrZXk9e2NoYW5uZWwuaWR9IHByZWZldGNoPlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjaGFubmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9IGFsdD17Y2hhbm5lbC50aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj57Y2hhbm5lbC50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YCAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLWdhcDogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgxNjBweCwgMWZyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBhLmNoYW5uZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNoYW5uZWwgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgcmV0dXJuICFpc0ZldGNoaW5nID8gY2hhbm5lbHNVSSA6IGxvYWRlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdCgpKENoYW5uZWxHcmlkKTtcbiJdfQ== */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/ChannelGrid.jsx */"
  }));
  return !isFetching ? channelsUI : loader;
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])()(ChannelGrid));

/***/ }),

/***/ "./components/Layout.jsx":
/*!*******************************!*\
  !*** ./components/Layout.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
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
    css: "header.jsx-3170789433{color:#fff;background:#8756ca;padding:15px;text-align:center;font-weight:600;}header.jsx-3170789433 a.jsx-3170789433{color:#fff;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQmlCLEFBR2dDLEFBT0EsV0FOUSxBQU9FLG1CQU5SLGFBQ0ssa0JBQ0YsQUFLcEIsZ0JBSkEiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvY29tcG9uZW50cy9MYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+bmV4dFBvZGNhc3Q8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXIgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xuICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cbiAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXG4gICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICduZXh0UG9kY2FzdCcsXG59O1xuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbiJdfQ== */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/Layout.jsx */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3533377404",
    css: "body{background:#fafafa;font-family:system-ui;margin:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q2lCLEFBR2dELG1CQUNHLHNCQUNiLFNBQ2IiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvY29tcG9uZW50cy9MYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+bmV4dFBvZGNhc3Q8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXIgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xuICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cbiAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXG4gICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICduZXh0UG9kY2FzdCcsXG59O1xuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbiJdfQ== */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/Layout.jsx */"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "377376329",
    css: "#nprogress{pointer-events:none;}#nprogress .bar{background:#29d;position:fixed;z-index:1031;top:0;left:0;width:100%;height:2px;}#nprogress .peg{display:block;position:absolute;right:0px;width:100px;height:100%;box-shadow:0 0 10px #29d,0 0 5px #29d;opacity:1.0;-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);-webkit-transform:rotate(3deg) translate(0px,-4px);-ms-transform:rotate(3deg) translate(0px,-4px);transform:rotate(3deg) translate(0px,-4px);}#nprogress .spinner{display:block;position:fixed;z-index:1031;top:15px;right:15px;}#nprogress .spinner-icon{width:18px;height:18px;box-sizing:border-box;border:solid 2px transparent;border-top-color:#29d;border-left-color:#29d;border-radius:50%;-webkit-animation:nprogress-spinner 400ms linear infinite;-webkit-animation:nprogress-spinner 400ms linear infinite;animation:nprogress-spinner 400ms linear infinite;}.nprogress-custom-parent{overflow:hidden;position:relative;}.nprogress-custom-parent #nprogress .spinner,.nprogress-custom-parent #nprogress .bar{position:absolute;}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);}}@-webkit-keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes nprogress-spinner{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvTGF5b3V0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRGlCLEFBSXFDLEFBSUosQUFhRixBQWVBLEFBUUgsQUFjSyxBQU1FLEFBSW1CLEFBQ0UsQUFHVixBQUNFLFdBNUJuQixHQXZCTSxBQWVILEVBM0JBLEFBaURHLEVBTWxCLEVBNURBLEdBeUNzQixNQVJULEVBM0JBLEFBeUR5QixDQTdDNUIsQ0E4QzhCLENBVHhDLFFBcENZLEFBZUgsRUEzQkgsQ0FvQ3VCLEtBbkN0QixDQTJCSSxHQWZDLEdBVkQsS0EwQlgsSUFmdUMsRUFWNUIsTUFpQ1csS0FoQ3RCLEVBdUQ4QixNQUNFLFNBdkJULFFBdkJYLFlBRXdDLEdBc0JsQyxrQkFFd0MsOEJBdkJOLDRCQXdCTSxtQkF2Qk4seUZBd0JwRCxvREF2QkEiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvY29tcG9uZW50cy9MYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKCkgPT4ge1xuICAgIE5Qcm9ncmVzcy5zdGFydCgpO1xufTtcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xuUm91dGVyLm9uUm91dGVDaGFuZ2VFcnJvciA9ICgpID0+IE5Qcm9ncmVzcy5kb25lKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dChwcm9wcykge1xuICAgIGNvbnN0IHsgY2hpbGRyZW4sIHRpdGxlIH0gPSBwcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+bmV4dFBvZGNhc3Q8L2E+PC9MaW5rPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBoZWFkZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoZWFkZXIgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLyogTWFrZSBjbGlja3MgcGFzcy10aHJvdWdoICovXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyB7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuYmFyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMjlkO1xuXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMzE7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKiBGYW5jeSBibHVyIGVmZmVjdCAqL1xuICAgICAgICAgICAgICAgICNucHJvZ3Jlc3MgLnBlZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMjlkLCAwIDAgNXB4ICMyOWQ7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMS4wO1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKSB0cmFuc2xhdGUoMHB4LCAtNHB4KTtcbiAgICAgICAgICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDNkZWcpIHRyYW5zbGF0ZSgwcHgsIC00cHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoM2RlZykgdHJhbnNsYXRlKDBweCwgLTRweCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLyogUmVtb3ZlIHRoZXNlIHRvIGdldCByaWQgb2YgdGhlIHNwaW5uZXIgKi9cbiAgICAgICAgICAgICAgICAjbnByb2dyZXNzIC5zcGlubmVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMTAzMTtcbiAgICAgICAgICAgICAgICB0b3A6IDE1cHg7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDE1cHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgI25wcm9ncmVzcyAuc3Bpbm5lci1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICAgICAgICAgICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOWQ7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG5wcm9ncmVzcy1zcGlubmVyIDQwMG1zIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbnByb2dyZXNzLXNwaW5uZXIgNDAwbXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ucHJvZ3Jlc3MtY3VzdG9tLXBhcmVudCB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLnNwaW5uZXIsXG4gICAgICAgICAgICAgICAgLm5wcm9ncmVzcy1jdXN0b20tcGFyZW50ICNucHJvZ3Jlc3MgLmJhciB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBucHJvZ3Jlc3Mtc3Bpbm5lciB7XG4gICAgICAgICAgICAgICAgMCUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgICAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbnByb2dyZXNzLXNwaW5uZXIge1xuICAgICAgICAgICAgICAgIDAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAgICAgICAgICAgICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbkxheW91dC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICduZXh0UG9kY2FzdCcsXG59O1xuTGF5b3V0LnByb3BUeXBlcyA9IHtcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbiJdfQ== */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/Layout.jsx */"
  }));
}
Layout.defaultProps = {
  title: 'nextPodcast'
};
Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
};

/***/ }),

/***/ "./components/PodcastListWithClick.jsx":
/*!*********************************************!*\
  !*** ./components/PodcastListWithClick.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastListWithClick; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);




function PodcastListWithClick(props) {
  var podcasts = props.podcasts,
      onClickPodcast = props.onClickPodcast;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3605175331"
  }, podcasts.map(function (podcast) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/".concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.channel.title), ".").concat(podcast.channel.id, "/").concat(Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_2__["default"])(podcast.title), ".").concat(podcast.id),
      key: podcast.id,
      onClick: function onClick(event) {
        return onClickPodcast(event, podcast);
      },
      className: "jsx-3605175331" + " " + "podcast"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      className: "jsx-3605175331"
    }, podcast.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3605175331" + " " + "meta"
    }, Math.ceil(podcast.duration / 60), ' ', "minutes"));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3605175331",
    css: ".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3605175331:hover{color:#000;}.podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}.podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdExpc3RXaXRoQ2xpY2suanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCaUIsQUFHeUIsQUFRSCxBQUdGLEFBR0UsU0FGYixFQUhBLEFBTW1CLEdBZEksY0FlTCxnQkFDbEIsb0JBZmEsV0FDRSxhQUMyQix3Q0FDekIsZUFDakIiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0TGlzdFdpdGhDbGljay5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvZGNhc3RMaXN0V2l0aENsaWNrKHByb3BzKSB7XG4gICAgY29uc3QgeyBwb2RjYXN0cywgb25DbGlja1BvZGNhc3QgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgcG9kY2FzdHMubWFwKHBvZGNhc3QgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtzbHVnKHBvZGNhc3QuY2hhbm5lbC50aXRsZSl9LiR7cG9kY2FzdC5jaGFubmVsLmlkfS8ke3NsdWcocG9kY2FzdC50aXRsZSl9LiR7cG9kY2FzdC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2RjYXN0XCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb2RjYXN0LmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBvbkNsaWNrUG9kY2FzdChldmVudCwgcG9kY2FzdCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDM+eyBwb2RjYXN0LnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgTWF0aC5jZWlsKHBvZGNhc3QuZHVyYXRpb24gLyA2MCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlc1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApKSB9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG4gICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Qb2RjYXN0TGlzdFdpdGhDbGljay5wcm9wVHlwZXMgPSB7XG4gICAgcG9kY2FzdHM6IFByb3BUeXBlcy5Qcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjaGFubmVsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIH0pLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxuICAgIG9uQ2xpY2tQb2RjYXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuIl19 */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/PodcastListWithClick.jsx */"
  }));
}
PodcastListWithClick.propTypes = {
  podcasts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.PropTypes.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    channel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
    })
  })).isRequired,
  onClickPodcast: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

/***/ }),

/***/ "./components/podcastPlayer.jsx":
/*!**************************************!*\
  !*** ./components/podcastPlayer.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastPlayer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../routes */ "./routes.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_routes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);





function PodcastPlayer(props) {
  var clip = props.clip,
      onClose = props.onClose,
      children = props.children,
      minimized = props.minimized;
  var modalState = !minimized ? 'modal' : 'hidden';
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3194333041" + " " + (modalState || "")
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3194333041" + " " + "clip"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: "jsx-3194333041"
  }, onClose ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    onClick: onClose,
    className: "jsx-3194333041"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
    className: "jsx-3194333041"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    role: "img",
    "aria-label": "arrow",
    className: "jsx-3194333041"
  }, "\u23EC "), "Minimize")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    route: "channel",
    params: {
      slug: Object(_helpers_slug__WEBPACK_IMPORTED_MODULE_3__["default"])(clip.channel.title),
      id: clip.channel.id
    },
    prefetch: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-3194333041" + " " + "close"
  }, "< Volver"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("picture", {
    className: "jsx-3194333041"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      backgroundImage: "url(".concat(clip.urls.image || clip.channel.urls.logo_image.original, ")")
    },
    className: "jsx-3194333041"
  }))), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3194333041",
    css: "nav.jsx-3194333041{background:none;}nav.jsx-3194333041 a.jsx-3194333041{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-3194333041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;z-index:100;}.hidden.jsx-3194333041 .clip.jsx-3194333041{display:none;}picture.jsx-3194333041{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-3194333041 div.jsx-3194333041{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.modal.jsx-3194333041{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvcG9kY2FzdFBsYXllci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkNpQixBQUcyQixBQUdLLEFBT1IsQUFTaEIsQUFFZ0IsQUFTRixBQVFJLFdBUEgsRUFaZCxFQW9CUSxDQXRDUixLQUdlLEFBb0NOLEVBUnFCLEtBU3BCLE1BcENJLEVBcUNILFNBQ0ssQ0FyQ0MsS0EyQlMsUUFXMUIsRUFyQ3VCLGFBSVQsQUFXTyxDQVlTLFdBdEJOLGlCQXVCeEIsUUEzQkEscURBS3FCLEdBVUksZ0JBVFgsWUFDQSxZQUNkLDJEQVFXLHVDQUNhLDhFQUNYLFdBQ0MsWUFDZCIsImZpbGUiOiIvaG9tZS9hcnppb24tbGVub3ZvMS9Eb2N1bWVudHMvR2lhbmZyYW5jby9uZXh0cG9kY2FzdC9jb21wb25lbnRzL3BvZGNhc3RQbGF5ZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvZGNhc3RQbGF5ZXIocHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGNsaXAsIG9uQ2xvc2UsIGNoaWxkcmVuLCBtaW5pbWl6ZWQsXG4gICAgfSA9IHByb3BzO1xuXG4gICAgY29uc3QgbW9kYWxTdGF0ZSA9ICFtaW5pbWl6ZWQgPyAnbW9kYWwnIDogJ2hpZGRlbic7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e21vZGFsU3RhdGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwXCI+XG4gICAgICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAgICAgICAgeyBvbkNsb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXtvbkNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiByb2xlPVwiaW1nXCIgYXJpYS1sYWJlbD1cImFycm93XCI+4o+sIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNaW5pbWl6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2I+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3V0ZT1cImNoYW5uZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM9e3sgc2x1Zzogc2x1ZyhjbGlwLmNoYW5uZWwudGl0bGUpLCBpZDogY2xpcC5jaGFubmVsLmlkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjbG9zZVwiPiZsdDsgVm9sdmVyPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y2xpcC51cmxzLmltYWdlIHx8IGNsaXAuY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cbiAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBuYXYgYSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNsaXAge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB9XG4gICAgICAgIC5oaWRkZW4gLmNsaXAge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZVxuICAgICAgICB9XG4gICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgIH1cbiAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsIHtcbiAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHotaW5kZXg6IDk5OTk5O1xuICAgICAgICB9XG4gICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuUG9kY2FzdFBsYXllci5kZWZhdWx0UHJvcHMgPSB7XG4gICAgb25DbG9zZTogbnVsbCxcbiAgICBtaW5pbWl6ZWQ6IG51bGwsXG59O1xuUG9kY2FzdFBsYXllci5wcm9wVHlwZXMgPSB7XG4gICAgY2xpcDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgY2hhbm5lbDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICAgICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICB1cmxzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgIGxvZ29faW1hZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuXG4gICAgfSkuaXNSZXF1aXJlZCxcbiAgICBvbkNsb3NlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgICBtaW5pbWl6ZWQ6IFByb3BUeXBlcy5ib29sLFxufTtcblxuIl19 */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/podcastPlayer.jsx */"
  }));
}
PodcastPlayer.defaultProps = {
  onClose: null,
  minimized: null
};
PodcastPlayer.propTypes = {
  clip: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    channel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number,
      title: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
      urls: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
        logo_image: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
          original: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
        }),
        image: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string
      })
    })
  }).isRequired,
  onClose: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};

/***/ }),

/***/ "./helpers/slug.js":
/*!*************************!*\
  !*** ./helpers/slug.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return slug; });
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! slugify */ "slugify");
/* harmony import */ var slugify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(slugify__WEBPACK_IMPORTED_MODULE_0__);

function slug(name) {
  return slugify__WEBPACK_IMPORTED_MODULE_0___default()(name, {
    lower: true
  }).replace(/[^\w\-]+/g, '');
}

/***/ }),

/***/ "./pages/_error.jsx":
/*!**************************!*\
  !*** ./pages/_error.jsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Error; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
        css: ".message.jsx-843739228{padding:100px 30px;text-align:center;}h1.jsx-843739228{margin-bottom:2em;}a.jsx-843739228{color:#8756ca;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L3BhZ2VzL19lcnJvci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NxQixBQUd3QyxBQUlELEFBSXZCLGNBQUMsSUFIQSxDQUpzQixrQkFDdEIiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvcGFnZXMvX2Vycm9yLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgZ2V0SW5pdGlhbFByb3BzKHsgcmVzLCBlcnIgfSkge1xuICAgICAgICBjb25zdCB7IHN0YXR1c0NvZGUgfSA9IHJlcyB8fCAoZXJyICYmIGVycik7XG4gICAgICAgIC8vIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHsgc3RhdHVzQ29kZSB9O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0IHRpdGxlPVwiT2ggbm8gOihcIj5cbiAgICAgICAgICAgICAgICB7IHN0YXR1c0NvZGUgPT09IDQwNFxuICAgICAgICAgICAgICAgICAgICA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5QYWdlIG5vdCBmb3VuZCA6KDwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PExpbmsgaHJlZj1cIi9cIj48YT5CYWNrIGhvbWU8L2E+PC9MaW5rPjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+QW4gZXJyb3Igb2NjdXJyZWQgOig8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxMaW5rIGhyZWY9XCIvXCI+PGE+QmFjayBob21lPC9hPjwvTGluaz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAzMHB4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM4NzU2Y2FcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuIl19 */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/pages/_error.jsx */"
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

/***/ "./pages/channel.jsx":
/*!***************************!*\
  !*** ./pages/channel.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Channel; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.jsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ "./pages/_error.jsx");
/* harmony import */ var _components_PodcastListWithClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PodcastListWithClick */ "./components/PodcastListWithClick.jsx");
/* harmony import */ var _components_podcastPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/podcastPlayer */ "./components/podcastPlayer.jsx");
/* harmony import */ var _components_Audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Audio */ "./components/Audio.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);



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











var Channel =
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
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_error__WEBPACK_IMPORTED_MODULE_6__["default"], {
          statusCode: statusCode
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
        title: channel.title
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(channel.urls.banner_image.original, ")")
        },
        className: "jsx-1601331852" + " " + "banner"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        className: "jsx-1601331852"
      }, channel.title), series.length > 0 && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1601331852" + " " + "series"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1601331852"
      }, "Series"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ChannelGrid__WEBPACK_IMPORTED_MODULE_5__["default"], {
        channels: series
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-1601331852" + " " + "lastPodcasts"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
        className: "jsx-1601331852"
      }, "Ultimos Podcasts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PodcastListWithClick__WEBPACK_IMPORTED_MODULE_7__["default"], {
        podcasts: audioClips,
        onClickPodcast: this.openPodcast
      })), openPodcast && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_podcastPlayer__WEBPACK_IMPORTED_MODULE_8__["default"], {
        clip: openPodcast,
        onClose: this.closePodcast,
        minimized: minimized
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Audio__WEBPACK_IMPORTED_MODULE_9__["default"], {
        clip: openPodcast,
        minimized: minimized,
        onClose: this.closePodcast
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1601331852",
        css: ".banner.jsx-1601331852{width:100%;padding-botconst:25%;background-consttion:50% 50%;background-const:cover;background-constr:#aaa;}h1.jsx-1601331852{font-weight:600;padding:15px;}h2.jsx-1601331852{padding:5px;font-size:0.9em;font-weight:600;margin:0;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L3BhZ2VzL2NoYW5uZWwuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJHcUIsQUFHb0MsQUFRSyxBQUlMLFdBWFMsQ0FZTCxJQUpGLFlBS0UsQ0FKbkIsR0FSaUMsWUFhckIsU0FDUyxRQWJNLFVBY3hCLGFBYndCLHVCQUMzQiIsImZpbGUiOiIvaG9tZS9hcnppb24tbGVub3ZvMS9Eb2N1bWVudHMvR2lhbmZyYW5jby9uZXh0cG9kY2FzdC9wYWdlcy9jaGFubmVsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgQ2hhbm5lbEdyaWQgZnJvbSAnLi4vY29tcG9uZW50cy9DaGFubmVsR3JpZCc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xuaW1wb3J0IFBvZGNhc3RMaXN0V2l0aENsaWNrIGZyb20gJy4uL2NvbXBvbmVudHMvUG9kY2FzdExpc3RXaXRoQ2xpY2snO1xuaW1wb3J0IFBvZGNhc3RQbGF5ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wb2RjYXN0UGxheWVyJztcbmltcG9ydCBBdWRpbyBmcm9tICcuLi9jb21wb25lbnRzL0F1ZGlvJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5uZWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHsgb3BlblBvZGNhc3Q6IG51bGwsIG1pbmltaXplZDogZmFsc2UgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnksIHJlcyB9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBpZENoYW5uZWwgPSBxdWVyeS5pZDtcblxuICAgICAgICAgICAgY29uc3QgW3JlcXVlc3RDaGFubmVsLCByZXF1ZXN0U2VyaWVzLCByZXF1ZXN0QXVkaW9zXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH1gKSxcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vY2hpbGRfY2hhbm5lbHNgKSxcbiAgICAgICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9jaGFubmVscy8ke2lkQ2hhbm5lbH0vYXVkaW9fY2xpcHNgKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgaWYgKHJlcXVlc3RDaGFubmVsLnN0YXR1cyA+PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RDaGFubmVsLnN0YXR1cztcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBudWxsLCBzZXJpZXM6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhQ2hhbm5lbCA9IGF3YWl0IHJlcXVlc3RDaGFubmVsLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY2hhbm5lbCB9ID0gZGF0YUNoYW5uZWwuYm9keTtcblxuICAgICAgICAgICAgY29uc3QgZGF0YVNlcmllcyA9IGF3YWl0IHJlcXVlc3RTZXJpZXMuanNvbigpO1xuICAgICAgICAgICAgY29uc3Qgc2VyaWVzID0gZGF0YVNlcmllcy5ib2R5LmNoYW5uZWxzO1xuXG4gICAgICAgICAgICBjb25zdCBkYXRhQXVkaW9zID0gYXdhaXQgcmVxdWVzdEF1ZGlvcy5qc29uKCk7XG4gICAgICAgICAgICBjb25zdCBhdWRpb0NsaXBzID0gZGF0YUF1ZGlvcy5ib2R5LmF1ZGlvX2NsaXBzO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNoYW5uZWwsIHNlcmllcywgYXVkaW9DbGlwcywgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjaGFubmVsOiBudWxsLCBzZXJpZXM6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHN0YXR1c0NvZGU6IDUwMyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvcGVuUG9kY2FzdCA9IChldmVudCwgcG9kY2FzdCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG9wZW5Qb2RjYXN0OiBwb2RjYXN0LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZVBvZGNhc3QgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBtaW5pbWl6ZWQ6IHRydWUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY2hhbm5lbCwgc2VyaWVzLCBhdWRpb0NsaXBzLCBzdGF0dXNDb2RlLFxuICAgICAgICB9ID0gdGhpcy5wcm9wcztcbiAgICAgICAgY29uc3QgeyBvcGVuUG9kY2FzdCwgbWluaW1pemVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGlmIChzdGF0dXNDb2RlICE9PSAyMDApIHtcbiAgICAgICAgICAgIHJldHVybiA8RXJyb3Igc3RhdHVzQ29kZT17c3RhdHVzQ29kZX0gLz47XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dCB0aXRsZT17Y2hhbm5lbC50aXRsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiYW5uZXJcIiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtjaGFubmVsLnVybHMuYmFubmVyX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XG4gICAgICAgICAgICAgICAgPGgxPnsgY2hhbm5lbC50aXRsZSB9PC9oMT5cbiAgICAgICAgICAgICAgICB7IHNlcmllcy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICAgICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VyaWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlNlcmllczwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxHcmlkIGNoYW5uZWxzPXtzZXJpZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhc3RQb2RjYXN0c1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDI+VWx0aW1vcyBQb2RjYXN0czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxQb2RjYXN0TGlzdFdpdGhDbGljayBwb2RjYXN0cz17YXVkaW9DbGlwc30gb25DbGlja1BvZGNhc3Q9e3RoaXMub3BlblBvZGNhc3R9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7b3BlblBvZGNhc3RcbiAgICAgICAgICAgICAgICAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb2RjYXN0UGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwPXtvcGVuUG9kY2FzdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuY2xvc2VQb2RjYXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgbWluaW1pemVkPXttaW5pbWl6ZWR9XG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxBdWRpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaXA9e29wZW5Qb2RjYXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltaXplZD17bWluaW1pemVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9e3RoaXMuY2xvc2VQb2RjYXN0fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9Qb2RjYXN0UGxheWVyPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAgICAgLmJhbm5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90Y29uc3QgMjUlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb25zdHRpb246IDUwJSA1MCU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbnN0OiBjb3ZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29uc3RyOiAjYWFhO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5DaGFubmVsLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBzZXJpZXM6IG51bGwsXG59O1xuQ2hhbm5lbC5wcm9wVHlwZXMgPSB7XG4gICAgc3RhdHVzQ29kZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICAgIGF1ZGlvQ2xpcHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7fSkpLmlzUmVxdWlyZWQsXG4gICAgc2VyaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe30pKSxcbiAgICBjaGFubmVsOiBQcm9wVHlwZXMuc2hhcGUoe30pLmlzUmVxdWlyZWQsXG59O1xuXG4iXX0= */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/pages/channel.jsx */"
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, idChannel, _ref2, _ref3, requestChannel, requestSeries, requestAudios, dataChannel, channel, dataSeries, series, dataAudios, audioClips;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


Channel.defaultProps = {
  series: null
};
Channel.propTypes = {
  statusCode: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
  audioClips: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({})).isRequired,
  series: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({})),
  channel: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({}).isRequired
};

/***/ }),

/***/ "./routes.js":
/*!*******************!*\
  !*** ./routes.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__(/*! next-routes */ "next-routes");

module.exports = routes().add('index').add('channel', '/:slug.:id', 'channel').add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast');

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/channel.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/channel.jsx */"./pages/channel.jsx");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "slugify":
/*!**************************!*\
  !*** external "slugify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("slugify");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=channel.js.map
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ 1:
/*!********************************!*\
  !*** multi ./pages/_error.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_error.jsx */"./pages/_error.jsx");


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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map
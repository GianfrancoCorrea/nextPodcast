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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

module.exports = require("next/app");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "next/app"
var app_ = __webpack_require__(18);
var app_default = /*#__PURE__*/__webpack_require__.n(app_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(6);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__(16);

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__(19);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__(20);
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__(21);

// EXTERNAL MODULE: external "isomorphic-fetch"
var external_isomorphic_fetch_ = __webpack_require__(12);
var external_isomorphic_fetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_fetch_);

// CONCATENATED MODULE: ./actions.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

 //import 'babel-polyfill'; // la doc decia que lo importe, TODO: averiguar bien si lo necesito.

var actionTypes = {
  MORE_CONTENT: 'MORE_CONTENT',
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  REQUEST_CATEGORY: 'REQUEST_CATEGORY',
  RECEIVE_CATEGORY: 'RECEIVE_CATEGORY',
  REQUEST_CHANNEL: 'REQUEST_CHANNEL',
  SELECT_CHANNEL: 'SELECT_CHANNEL',
  RECEIVE_CHANNEL: 'RECEIVE_CHANNEL'
};
var selectCategory = function selectCategory(category) {
  return {
    type: actionTypes.SELECT_CATEGORY,
    category: category
  };
};

var requestCategory = function requestCategory(category) {
  return {
    type: actionTypes.REQUEST_CATEGORY,
    category: category
  };
};

var receiveCategory = function receiveCategory(category, json) {
  return {
    type: actionTypes.RECEIVE_CATEGORY,
    category: category,
    channels: json.body,
    receivedAt: Date.now()
  };
};

var actions_fetchCategory = function fetchCategory(category) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(dispatch) {
        var response, json;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Primer envío: se actualiza el estado de la aplicación para informar
                // que la llamada al API está iniciando.
                dispatch(requestCategory(category)); // devolvemos una promesa para esperar por la respuesta.

                _context.next = 3;
                return external_isomorphic_fetch_default()("https://api.audioboom.com/channels/".concat(category));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                json = _context.sent;
                // Aquí, actualizamos el estado de la aplicación con los resultados de la llamada a la API.
                dispatch(receiveCategory(category, json)); //TODO: captura de errores aca.

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
// CONCATENATED MODULE: ./reducers.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function selectedCategory() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'recomended';
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return action.category;

    default:
      return state;
  }
}

function categoryChannels() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    isFetching: false,
    items: []
  };
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.REQUEST_CATEGORY:
      return Object.assign({}, state, {
        isFetching: true
      });

    case actionTypes.RECEIVE_CATEGORY:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.channels,
        lastUpdated: action.receivedAt
      });

    default:
      return state;
  }
}

function channelsByCategory() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.RECEIVE_CATEGORY:
    case actionTypes.REQUEST_CATEGORY:
      return Object.assign({}, state, _defineProperty({
        Nprogress: true
      }, action.category, categoryChannels(state[action.category], action)));

    default:
      return state;
  }
}

var rootReducer = Object(external_redux_["combineReducers"])({
  channelsByCategory: channelsByCategory,
  selectedCategory: selectedCategory
});
/* harmony default export */ var reducers = (rootReducer);
// CONCATENATED MODULE: ./store.js




 //TODO: ver que hacer con este initialState que no se esta usando.. 

var exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  isLoadingPage: true,
  isLoadingMoreContent: false,
  isPlayerOpen: false,
  channel: null
};
var loggerMiddleware = Object(external_redux_logger_["createLogger"])();
function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : exampleInitialState;
  return Object(external_redux_["createStore"])(reducers, Object(external_redux_devtools_extension_["composeWithDevTools"])(Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, // nos permite despachar funciones
  loggerMiddleware // buen middleware que registra las acciones
  )));
}
// CONCATENATED MODULE: ./lib/with-redux-store.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { with_redux_store_defineProperty(target, key, source[key]); }); } return target; }

function with_redux_store_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function with_redux_store_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function with_redux_store_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { with_redux_store_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { with_redux_store_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ var with_redux_store = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(AppWithRedux, _React$Component);

      _createClass(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = with_redux_store_asyncToGenerator(
          /*#__PURE__*/
          regenerator_default.a.mark(function _callee(appContext) {
            var reduxStore, context, appProps;
            return regenerator_default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    context = appContext;
                    context.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 8;
                      break;
                    }

                    _context.next = 7;
                    return App.getInitialProps(appContext);

                  case 7:
                    appProps = _context.sent;

                  case 8:
                    return _context.abrupt("return", _objectSpread({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 9:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        _classCallCheck(this, AppWithRedux);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      _createClass(AppWithRedux, [{
        key: "render",
        value: function render() {
          return external_react_default.a.createElement(App, _extends({}, this.props, {
            reduxStore: this.reduxStore
          }));
        }
      }]);

      return AppWithRedux;
    }(external_react_default.a.Component)
  );
});
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(10);

// CONCATENATED MODULE: ./pages/_app.jsx
function _app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _app_typeof = function _typeof(obj) { return typeof obj; }; } else { _app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _app_typeof(obj); }

function _app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _app_createClass(Constructor, protoProps, staticProps) { if (protoProps) _app_defineProperties(Constructor.prototype, protoProps); if (staticProps) _app_defineProperties(Constructor, staticProps); return Constructor; }

function _app_possibleConstructorReturn(self, call) { if (call && (_app_typeof(call) === "object" || typeof call === "function")) { return call; } return _app_assertThisInitialized(self); }

function _app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _app_getPrototypeOf(o) { _app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _app_getPrototypeOf(o); }

function _app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _app_setPrototypeOf(subClass, superClass); }

function _app_setPrototypeOf(o, p) { _app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _app_setPrototypeOf(o, p); }







var _app_MyApp =
/*#__PURE__*/
function (_App) {
  _app_inherits(MyApp, _App);

  function MyApp() {
    _app_classCallCheck(this, MyApp);

    return _app_possibleConstructorReturn(this, _app_getPrototypeOf(MyApp).apply(this, arguments));
  }

  _app_createClass(MyApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var reduxStore = this.props.reduxStore;
      reduxStore.dispatch(actions_fetchCategory('recommended'));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          reduxStore = _this$props.reduxStore;
      return external_react_default.a.createElement(app_["Container"], null, external_react_default.a.createElement(external_react_redux_["Provider"], {
        store: reduxStore
      }, external_react_default.a.createElement(Component, pageProps)));
    }
  }]);

  return MyApp;
}(app_default.a);

/* harmony default export */ var _app = __webpack_exports__["default"] = (with_redux_store(_app_MyApp));

/***/ })
/******/ ]);
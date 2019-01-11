webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./pages/channel.jsx":
/*!***************************!*\
  !*** ./pages/channel.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Channel; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.jsx");
/* harmony import */ var _components_ChannelGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ChannelGrid */ "./components/ChannelGrid.jsx");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_error */ "./pages/_error.jsx");
/* harmony import */ var _components_PodcastListWithClick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PodcastListWithClick */ "./components/PodcastListWithClick.jsx");
/* harmony import */ var _components_podcastPlayer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/podcastPlayer */ "./components/podcastPlayer.jsx");
/* harmony import */ var _components_Audio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Audio */ "./components/Audio.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/channel")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=channel.js.1bb2fa1151e2ba8c0d57.hot-update.js.map
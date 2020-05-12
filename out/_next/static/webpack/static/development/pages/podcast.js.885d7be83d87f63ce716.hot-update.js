webpackHotUpdate("static/development/pages/podcast.js",{

/***/ "./pages/podcast.jsx":
/*!***************************!*\
  !*** ./pages/podcast.jsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Podcast; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_error */ "./pages/_error.jsx");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Podcast =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Podcast, _React$Component);

  function Podcast() {
    _classCallCheck(this, Podcast);

    return _possibleConstructorReturn(this, _getPrototypeOf(Podcast).apply(this, arguments));
  }

  _createClass(Podcast, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          audio = _this$props.audio,
          statusCode = _this$props.statusCode;

      if (statusCode !== 200) {
        return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_error__WEBPACK_IMPORTED_MODULE_5__["default"], {
          statusCode: statusCode
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", null, "Podcasts"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-16415330" + " " + "modal"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-16415330" + " " + "clip"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
        className: "jsx-16415330"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
        href: "/channel?id=".concat(audio.channel.id)
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
        className: "jsx-16415330" + " " + "close"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", {
        className: "jsx-16415330"
      }, "< Back")))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("picture", {
        className: "jsx-16415330"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          backgroundImage: "url(".concat(audio.urls.image || audio.channel.urls.logo_image.original, ")")
        },
        className: "jsx-16415330"
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "jsx-16415330" + " " + "player"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        className: "jsx-16415330"
      }, audio.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h6", {
        className: "jsx-16415330"
      }, audio.channel.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("audio", {
        controls: true,
        autoPlay: true,
        className: "jsx-16415330"
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("source", {
        src: audio.urls.high_mp3,
        type: "audio/mpeg",
        className: "jsx-16415330"
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "1354856392",
        css: "nav.jsx-16415330{background:none;}nav.jsx-16415330 a.jsx-16415330{display:inline-block;padding:15px;color:white;cursor:pointer;-webkit-text-decoration:none;text-decoration:none;}.clip.jsx-16415330{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background:#8756ca;color:white;}picture.jsx-16415330{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex:1 1;-ms-flex:1 1;flex:1 1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:auto;padding:10%;}picture.jsx-16415330 div.jsx-16415330{width:100%;height:100%;background-position:50% 50%;background-size:contain;background-repeat:no-repeat;}.player.jsx-16415330{padding:30px;background:rgba(0,0,0,0.3);text-align:center;}h3.jsx-16415330{margin:0;}h6.jsx-16415330{margin:0;margin-top:1em;}audio.jsx-16415330{margin-top:2em;width:100%;}.modal.jsx-16415330{position:fixed;top:0;left:0;right:0;bottom:0;z-index:99999;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L3BhZ2VzL3BvZGNhc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREeUIsQUFHaUMsQUFHSyxBQU9SLEFBT0EsQUFTRixBQU9FLEFBS0osQUFHQSxBQUlNLEFBS0EsU0FYZixBQUdlLEVBZkgsRUFPZSxFQVloQixBQUtMLENBbEROLEtBR2EsQUFnRE4sRUF4QnFCLENBZTVCLEVBSUEsRUFNUSxNQWhESSxFQWlESCxJQW5CUyxLQW9CSixDQWpEQyxLQXVCUyxPQU94QixDQW9CQSxFQWpEcUIsYUFJVCxBQU9PLENBWVMsV0FsQk4saUJBbUJ0QixRQXZCQSxxREFLbUIsR0FNSSxnQkFMWCxZQUNaLHVFQUtTLHVDQUNhLDhFQUNYLFdBQ0MsWUFDWiIsImZpbGUiOiIvaG9tZS9hcnppb24tbGVub3ZvMS9Eb2N1bWVudHMvR2lhbmZyYW5jby9uZXh0cG9kY2FzdC9wYWdlcy9wb2RjYXN0LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJ2lzb21vcnBoaWMtZmV0Y2gnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBFcnJvciBmcm9tICcuL19lcnJvcic7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2RjYXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnksIHJlcyB9KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwb2RjYXN0SUQgPSBxdWVyeS5pZDtcbiAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RBdWRpbyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5hdWRpb2Jvb20uY29tL2F1ZGlvX2NsaXBzLyR7cG9kY2FzdElEfS5tcDNgKTtcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0QXVkaW8uc3RhdHVzID49IDQwNCkge1xuICAgICAgICAgICAgICAgIHJlcy5zdGF0dXNDb2RlID0gcmVxdWVzdEF1ZGlvLnN0YXR1cztcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjaGFubmVsOiBudWxsLCBzZXJpZXM6IG51bGwsIGF1ZGlvQ2xpcHM6IG51bGwsIHN0YXR1c0NvZGU6IDQwNCxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBkYXRhQXVkaW8gPSBhd2FpdCByZXF1ZXN0QXVkaW8uanNvbigpO1xuICAgICAgICAgICAgY29uc3QgYXVkaW8gPSBkYXRhQXVkaW8uYm9keS5hdWRpb19jbGlwO1xuICAgICAgICAgICAgY29uc3QgeyBzdGF0dXNDb2RlIH0gPSByZXM7XG5cbiAgICAgICAgICAgIHJldHVybiB7IGF1ZGlvLCBzdGF0dXNDb2RlIH07XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiB7IGF1ZGlvOiBudWxsLCBzdGF0dXNDb2RlOiA1MDMgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBhdWRpbywgc3RhdHVzQ29kZSB9ID0gdGhpcy5wcm9wcztcblxuICAgICAgICBpZiAoc3RhdHVzQ29kZSAhPT0gMjAwKSB7XG4gICAgICAgICAgICByZXR1cm4gPEVycm9yIHN0YXR1c0NvZGU9e3N0YXR1c0NvZGV9IC8+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGhlYWRlcj5Qb2RjYXN0czwvaGVhZGVyPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9jaGFubmVsP2lkPSR7YXVkaW8uY2hhbm5lbC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2xvc2VcIj48Yj4mbHQ7IEJhY2s8L2I+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmF2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke2F1ZGlvLnVybHMuaW1hZ2UgfHwgYXVkaW8uY2hhbm5lbC51cmxzLmxvZ29faW1hZ2Uub3JpZ2luYWx9KWAgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGljdHVyZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGxheWVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPnthdWRpby50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNj57YXVkaW8uY2hhbm5lbC50aXRsZX08L2g2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhdWRpbyBjb250cm9scyBhdXRvUGxheT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9e2F1ZGlvLnVybHMuaGlnaF9tcDN9IHR5cGU9XCJhdWRpby9tcGVnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2F1ZGlvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIG5hdiB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmF2IGEge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuY2xpcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjODc1NmNhO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGljdHVyZSBkaXYge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAucGxheWVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGg2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMWVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhdWRpbyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTk5OTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogc3lzdGVtLXVpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG5cbiAgICAgICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUG9kY2FzdC5wcm9wVHlwZXMgPSB7XG4gICAgYXVkaW86IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIGNoYW5uZWw6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICAgICAgdXJsczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgICAgICBsb2dvX2ltYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW5hbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcblxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXG4gICAgbWluaW1pemVkOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iXX0= */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/pages/podcast.jsx */"
      }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
        styleId: "460880803",
        css: "body{margin:0;font-family:system-ui;background:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L3BhZ2VzL3BvZGNhc3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRIeUIsQUFHMEIsU0FDYSxzQkFDTCxpQkFDakIiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvcGFnZXMvcG9kY2FzdC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICdpc29tb3JwaGljLWZldGNoJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgRXJyb3IgZnJvbSAnLi9fZXJyb3InO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9kY2FzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5LCByZXMgfSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcG9kY2FzdElEID0gcXVlcnkuaWQ7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0QXVkaW8gPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkuYXVkaW9ib29tLmNvbS9hdWRpb19jbGlwcy8ke3BvZGNhc3RJRH0ubXAzYCk7XG4gICAgICAgICAgICBpZiAocmVxdWVzdEF1ZGlvLnN0YXR1cyA+PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXMuc3RhdHVzQ29kZSA9IHJlcXVlc3RBdWRpby5zdGF0dXM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbm5lbDogbnVsbCwgc2VyaWVzOiBudWxsLCBhdWRpb0NsaXBzOiBudWxsLCBzdGF0dXNDb2RlOiA0MDQsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGF0YUF1ZGlvID0gYXdhaXQgcmVxdWVzdEF1ZGlvLmpzb24oKTtcbiAgICAgICAgICAgIGNvbnN0IGF1ZGlvID0gZGF0YUF1ZGlvLmJvZHkuYXVkaW9fY2xpcDtcbiAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzQ29kZSB9ID0gcmVzO1xuXG4gICAgICAgICAgICByZXR1cm4geyBhdWRpbywgc3RhdHVzQ29kZSB9O1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4geyBhdWRpbzogbnVsbCwgc3RhdHVzQ29kZTogNTAzIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgYXVkaW8sIHN0YXR1c0NvZGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgaWYgKHN0YXR1c0NvZGUgIT09IDIwMCkge1xuICAgICAgICAgICAgcmV0dXJuIDxFcnJvciBzdGF0dXNDb2RlPXtzdGF0dXNDb2RlfSAvPjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+UG9kY2FzdHM8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGlwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY2hhbm5lbD9pZD0ke2F1ZGlvLmNoYW5uZWwuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNsb3NlXCI+PGI+Jmx0OyBCYWNrPC9iPjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L25hdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHBpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHthdWRpby51cmxzLmltYWdlIHx8IGF1ZGlvLmNoYW5uZWwudXJscy5sb2dvX2ltYWdlLm9yaWdpbmFsfSlgIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BpY3R1cmU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBsYXllclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57YXVkaW8udGl0bGV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2F1ZGlvLmNoYW5uZWwudGl0bGV9PC9oNj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXVkaW8gY29udHJvbHMgYXV0b1BsYXk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2Ugc3JjPXthdWRpby51cmxzLmhpZ2hfbXAzfSB0eXBlPVwiYXVkaW8vbXBlZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hdWRpbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBuYXYge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5hdiBhIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmNsaXAge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzg3NTZjYTtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBpY3R1cmUgZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnBsYXllciB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMzBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMyk7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBoNiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXVkaW8ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAubW9kYWwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgei1pbmRleDogOTk5OTk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cblxuICAgICAgICAgICAgICAgICAgICA8L3N0eWxlPlxuXG4gICAgICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICAgICAgICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuXG4gICAgICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cblBvZGNhc3QucHJvcFR5cGVzID0ge1xuICAgIGF1ZGlvOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICBjaGFubmVsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgICAgIHVybHM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICAgICAgbG9nb19pbWFnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luYWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG5cbiAgICB9KS5pc1JlcXVpcmVkLFxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICAgIG1pbmltaXplZDogUHJvcFR5cGVzLmJvb2wsXG59O1xuIl19 */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/pages/podcast.jsx */"
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, res, podcastID, requestAudio, dataAudio, audio, statusCode;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query, res = _ref.res;
                _context.prev = 1;
                podcastID = query.id;
                _context.next = 5;
                return fetch("https://api.audioboom.com/audio_clips/".concat(podcastID, ".mp3"));

              case 5:
                requestAudio = _context.sent;

                if (!(requestAudio.status >= 404)) {
                  _context.next = 9;
                  break;
                }

                res.statusCode = requestAudio.status;
                return _context.abrupt("return", {
                  channel: null,
                  series: null,
                  audioClips: null,
                  statusCode: 404
                });

              case 9:
                _context.next = 11;
                return requestAudio.json();

              case 11:
                dataAudio = _context.sent;
                audio = dataAudio.body.audio_clip;
                statusCode = res.statusCode;
                return _context.abrupt("return", {
                  audio: audio,
                  statusCode: statusCode
                });

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", {
                  audio: null,
                  statusCode: 503
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 17]]);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Podcast;
}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);


Podcast.propTypes = {
  audio: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    channel: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
      title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
      urls: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
        logo_image: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
          original: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
        }),
        image: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string
      })
    })
  }).isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node.isRequired,
  minimized: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/podcast")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=podcast.js.885d7be83d87f63ce716.hot-update.js.map
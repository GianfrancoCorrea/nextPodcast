webpackHotUpdate("static/development/pages/channel.js",{

/***/ "./components/PodcastListWithClick.jsx":
/*!*********************************************!*\
  !*** ./components/PodcastListWithClick.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PodcastListWithClick; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_slug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/slug */ "./helpers/slug.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
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
    css: ".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3605175331:hover{color:#000;}.podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}.podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdExpc3RXaXRoQ2xpY2suanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCaUIsQUFHeUIsQUFRSCxBQUdGLEFBR0UsU0FGYixFQUhBLEFBTW1CLEdBZEksY0FlTCxnQkFDbEIsb0JBZmEsV0FDRSxhQUMyQix3Q0FDekIsZUFDakIiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0TGlzdFdpdGhDbGljay5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvZGNhc3RMaXN0V2l0aENsaWNrKHByb3BzKSB7XG4gICAgY29uc3QgeyBwb2RjYXN0cywgb25DbGlja1BvZGNhc3QgfSA9IHByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHsgcG9kY2FzdHMubWFwKHBvZGNhc3QgPT4gKFxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtzbHVnKHBvZGNhc3QuY2hhbm5lbC50aXRsZSl9LiR7cG9kY2FzdC5jaGFubmVsLmlkfS8ke3NsdWcocG9kY2FzdC50aXRsZSl9LiR7cG9kY2FzdC5pZH1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb2RjYXN0XCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtwb2RjYXN0LmlkfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBvbkNsaWNrUG9kY2FzdChldmVudCwgcG9kY2FzdCl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8aDM+eyBwb2RjYXN0LnRpdGxlIH08L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsgTWF0aC5jZWlsKHBvZGNhc3QuZHVyYXRpb24gLyA2MCkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgeycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlc1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICApKSB9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICAgICAge2BcbiAgICAgICAgLnBvZGNhc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0OmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgICAgICAucG9kY2FzdCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0IC5tZXRhIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICB9XG4gICAgICBgfVxuXG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5Qb2RjYXN0TGlzdFdpdGhDbGljay5wcm9wVHlwZXMgPSB7XG4gICAgcG9kY2FzdHM6IFByb3BUeXBlcy5Qcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGR1cmF0aW9uOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgICAgICBjaGFubmVsOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgICAgICAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICAgIH0pLFxuICAgIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuIl19 */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/PodcastListWithClick.jsx */"
  }));
}
PodcastListWithClick.propTypes = {
  podcasts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.PropTypes.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
    id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    duration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    channel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
    })
  })).isRequired
};

/***/ })

})
//# sourceMappingURL=channel.js.03068e723353cd1eb159.hot-update.js.map
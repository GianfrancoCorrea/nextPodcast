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
    css: ".podcast.jsx-3605175331{display:block;-webkit-text-decoration:none;text-decoration:none;color:#333;padding:15px;border-bottom:1px solid rgba(0,0,0,0.2);cursor:pointer;}.podcast.jsx-3605175331:hover{color:#000;}.podcast.jsx-3605175331 h3.jsx-3605175331{margin:0;}.podcast.jsx-3605175331 .meta.jsx-3605175331{color:#666;margin-top:0.5em;font-size:0.8em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Fyemlvbi1sZW5vdm8xL0RvY3VtZW50cy9HaWFuZnJhbmNvL25leHRwb2RjYXN0L2NvbXBvbmVudHMvUG9kY2FzdExpc3RXaXRoQ2xpY2suanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCaUIsQUFHeUIsQUFRSCxBQUdGLEFBR0UsU0FGYixFQUhBLEFBTW1CLEdBZEksY0FlTCxnQkFDbEIsb0JBZmEsV0FDRSxhQUMyQix3Q0FDekIsZUFDakIiLCJmaWxlIjoiL2hvbWUvYXJ6aW9uLWxlbm92bzEvRG9jdW1lbnRzL0dpYW5mcmFuY28vbmV4dHBvZGNhc3QvY29tcG9uZW50cy9Qb2RjYXN0TGlzdFdpdGhDbGljay5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHNsdWcgZnJvbSAnLi4vaGVscGVycy9zbHVnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9kY2FzdExpc3RXaXRoQ2xpY2socHJvcHMpIHtcbiAgICBjb25zdCB7IHBvZGNhc3RzLCBvbkNsaWNrUG9kY2FzdCB9ID0gcHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyBwb2RjYXN0cy5tYXAocG9kY2FzdCA9PiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke3NsdWcocG9kY2FzdC5jaGFubmVsLnRpdGxlKX0uJHtwb2RjYXN0LmNoYW5uZWwuaWR9LyR7c2x1Zyhwb2RjYXN0LnRpdGxlKX0uJHtwb2RjYXN0LmlkfWB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvZGNhc3RcIlxuICAgICAgICAgICAgICAgICAgICBrZXk9e3BvZGNhc3QuaWR9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IG9uQ2xpY2tQb2RjYXN0KGV2ZW50LCBwb2RjYXN0KX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxoMz57IHBvZGNhc3QudGl0bGUgfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyBNYXRoLmNlaWwocG9kY2FzdC5kdXJhdGlvbiAvIDYwKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB7JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpIH1cblxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgICAgICB7YFxuICAgICAgICAucG9kY2FzdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLnBvZGNhc3Q6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5wb2RjYXN0IGgzIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnBvZGNhc3QgLm1ldGEge1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgICAgIH1cbiAgICAgIGB9XG5cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cblBvZGNhc3RMaXN0LnByb3BUeXBlcyA9IHtcbiAgICBwb2RjYXN0czogUHJvcFR5cGVzLlByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgICAgICAgZHVyYXRpb246IFByb3BUeXBlcy5udW1iZXIsXG4gICAgICAgIGNoYW5uZWw6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICAgICAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgICAgfSksXG4gICAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG4iXX0= */\n/*@ sourceURL=/home/arzion-lenovo1/Documents/Gianfranco/nextpodcast/components/PodcastListWithClick.jsx */"
  }));
}
PodcastList.propTypes = {
  podcasts: PropTypes.PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    id: PropTypes.number,
    duration: PropTypes.number,
    channel: PropTypes.shape({
      id: PropTypes.string
    })
  })).isRequired
};

/***/ })

})
//# sourceMappingURL=channel.js.2a927ce80bffd9b66a8d.hot-update.js.map
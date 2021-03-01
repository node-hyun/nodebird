webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _components_style_followListStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/style/followListStyle */ "./components/style/followListStyle.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\nodebird\\front\\components\\FollowList.js",
    _this = undefined,
    _s = $RefreshSig$();

// import React from "react";




 // const FollowList = ({ header, data }) => {



var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;
  console.log("data : ", data);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(8),
      size = _useState[0],
      setSize = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    children: [header, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Space"], {
      size: size,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        gutter: 16,
        children: [data.map(function (c) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Col"], {
            span: 8,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
              title: c.nickname,
              bordered: true,
              style: {
                marginBottom: "5px"
              },
              children: "StopOutlined"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 33
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 29
          }, _this);
        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          block: true,
          children: "\uB354\uBCF4\uAE30"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, _this);
};

_s(FollowList, "efPVXQFrnpLVsOlYYYgABYRolqY=");

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FollowList);

var _c;

$RefreshReg$(_c, "FollowList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwic2l6ZSIsInNldFNpemUiLCJtYXAiLCJjIiwibmlja25hbWUiLCJtYXJnaW5Cb3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FPQTs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLE1BQXlDLFFBQXpDQSxNQUF5QztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBRTNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixJQUF2Qjs7QUFGMkQsa0JBR25DSyxzREFBUSxDQUFDLENBQUQsQ0FIMkI7QUFBQSxNQUdwREMsSUFIb0Q7QUFBQSxNQUc5Q0MsT0FIOEM7O0FBSzNELHNCQUNJO0FBQUEsZUFFS1IsTUFGTCxlQUdJLHFFQUFDLDBDQUFEO0FBQU8sVUFBSSxFQUFFTyxJQUFiO0FBQUEsNkJBQ0kscUVBQUMsd0NBQUQ7QUFBSyxjQUFNLEVBQUUsRUFBYjtBQUFBLG1CQUNLTixJQUFJLENBQUNRLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFDYiw4QkFDSSxxRUFBQyx3Q0FBRDtBQUFLLGdCQUFJLEVBQUUsQ0FBWDtBQUFBLG1DQUNJLHFFQUFDLHlDQUFEO0FBQU0sbUJBQUssRUFBRUEsQ0FBQyxDQUFDQyxRQUFmO0FBQXlCLHNCQUFRLEVBQUUsSUFBbkM7QUFBeUMsbUJBQUssRUFBRTtBQUFFQyw0QkFBWSxFQUFFO0FBQWhCLGVBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESjtBQU9ILFNBUkEsQ0FETCxlQVVJLHFFQUFDLDJDQUFEO0FBQVMsZUFBSyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW9CSCxDQXpCRDs7R0FBTWIsVTs7S0FBQUEsVTtBQTJCTkEsVUFBVSxDQUFDYyxTQUFYLEdBQXVCO0FBQ25CYixRQUFNLEVBQUVjLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJmLE1BQUksRUFBRWEsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlakIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS40MTE1NWFkMDI3NDFjMWQ1NzYzNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBTcGFjZSwgTGlzdCwgQ2FyZCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBmb2xsb3dDYXJkV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlL2ZvbGxvd0xpc3RTdHlsZVwiO1xyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgRm9sbG93TGlzdCA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nIH0pID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgOiBcIiwgZGF0YSk7XHJcbiAgICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSg4KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICB7aGVhZGVyfVxyXG4gICAgICAgICAgICA8U3BhY2Ugc2l6ZT17c2l6ZX0+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MTZ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoYykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbCBzcGFuPXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCB0aXRsZT17Yy5uaWNrbmFtZX0gYm9yZGVyZWQ9e3RydWV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU3RvcE91dGxpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uICBibG9jaz7rjZTrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICA8L1NwYWNlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkZvbGxvd0xpc3QucHJvcFR5cGVzID0ge1xyXG4gICAgaGVhZGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgICBkYXRhOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
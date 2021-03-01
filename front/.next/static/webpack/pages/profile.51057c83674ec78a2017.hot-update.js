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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Space, {
      size: size,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Row"], {
        gutter: 16,
        children: data.map(function (c) {
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
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        block: true,
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwic2l6ZSIsInNldFNpemUiLCJtYXAiLCJjIiwibmlja25hbWUiLCJtYXJnaW5Cb3R0b20iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Q0FPQTs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTRDO0FBQUE7O0FBQUEsTUFBekNDLE1BQXlDLFFBQXpDQSxNQUF5QztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBRTNEQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCSixJQUF2Qjs7QUFGMkQsa0JBR25DSyxzREFBUSxDQUFDLENBQUQsQ0FIMkI7QUFBQSxNQUdwREMsSUFIb0Q7QUFBQSxNQUc5Q0MsT0FIOEM7O0FBSzNELHNCQUNJO0FBQUEsMkJBR0kscUVBQUMsS0FBRDtBQUFPLFVBQUksRUFBRUQsSUFBYjtBQUFBLDhCQUNJLHFFQUFDLHdDQUFEO0FBQUssY0FBTSxFQUFFLEVBQWI7QUFBQSxrQkFDS04sSUFBSSxDQUFDUSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2IsOEJBQ0kscUVBQUMsd0NBQUQ7QUFBSyxnQkFBSSxFQUFFLENBQVg7QUFBQSxtQ0FDSSxxRUFBQyx5Q0FBRDtBQUFNLG1CQUFLLEVBQUVBLENBQUMsQ0FBQ0MsUUFBZjtBQUF5QixzQkFBUSxFQUFFLElBQW5DO0FBQXlDLG1CQUFLLEVBQUU7QUFBRUMsNEJBQVksRUFBRTtBQUFoQixlQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREo7QUFPSCxTQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBWUkscUVBQUMsMkNBQUQ7QUFBUSxhQUFLLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFvQkgsQ0F6QkQ7O0dBQU1iLFU7O0tBQUFBLFU7QUEyQk5BLFVBQVUsQ0FBQ2MsU0FBWCxHQUF1QjtBQUNuQmIsUUFBTSxFQUFFYyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUROO0FBRW5CZixNQUFJLEVBQUVhLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JEO0FBRkgsQ0FBdkI7QUFLZWpCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNTEwNTdjODM2NzRlYzc4YTIwMTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCB7IFN0b3BPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5cclxuaW1wb3J0IHsgTGlzdCwgQ2FyZCwgQnV0dG9uLCBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBmb2xsb3dDYXJkV3JhcHBlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3N0eWxlL2ZvbGxvd0xpc3RTdHlsZVwiO1xyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgRm9sbG93TGlzdCA9ICh7IGhlYWRlciwgZGF0YSB9KSA9PiB7XHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nIH0pID0+IHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgOiBcIiwgZGF0YSk7XHJcbiAgICBjb25zdCBbc2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSg4KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPFNwYWNlIHNpemU9e3NpemV9PlxyXG4gICAgICAgICAgICAgICAgPFJvdyBndXR0ZXI9ezE2fT5cclxuICAgICAgICAgICAgICAgICAgICB7ZGF0YS5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgc3Bhbj17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgdGl0bGU9e2Mubmlja25hbWV9IGJvcmRlcmVkPXt0cnVlfSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0b3BPdXRsaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gYmxvY2s+642U67O06riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvU3BhY2U+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgICBoZWFkZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgIGRhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9sbG93TGlzdDsiXSwic291cmNlUm9vdCI6IiJ9
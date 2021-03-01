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
    _this = undefined;





 // const FollowList = ({ header, data }) => {



var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      width: "100%",
      border: "1px solid green"
    },
    children: [data.map(function (v) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
        style: {
          width: "33%"
        },
        actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["StopOutlined"], {}, "stop", false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 66
        }, _this)],
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta, {
          description: v.nickname
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 33
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }, _this);
    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      block: true,
      children: "\uB354\uBCF4\uAE30"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, _this) // <div style={{ display: "flex", flex: "1 1 33%" }}>
  //     <List
  //         style={{ marginBttom: 20 }}
  //         grid={{ gutter: 4, xs: 2, md: 3 }}
  //         size="small"
  //         header={<div>{header}</div>}
  //         loadMore={
  //             <div style={{ textAlign: 'center', margin: '10px 0' }}>
  //                 <Button onClick={onClickMore} loading={loading}>더 보기</Button>
  //             </div>
  //         }
  //         bordered={true}
  //         dataSource={data}
  //         renderItem={(item) => (
  //             <Card actions={[<StopOutlined key="stop" />]}>
  //                 <Card.Meta description={item.nickname} />
  //             </Card>
  //         )}
  //     />
  // </div>
  ;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwiZGlzcGxheSIsImZsZXhXcmFwIiwid2lkdGgiLCJib3JkZXIiLCJtYXAiLCJ2Iiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7Q0FJQTs7OztBQUNBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQTRDO0FBQUEsTUFBekNDLE1BQXlDLFFBQXpDQSxNQUF5QztBQUFBLE1BQWpDQyxJQUFpQyxRQUFqQ0EsSUFBaUM7QUFBQSxNQUEzQkMsV0FBMkIsUUFBM0JBLFdBQTJCO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBRTNELHNCQUNJO0FBQUssU0FBSyxFQUFFO0FBQUVDLGFBQU8sRUFBRSxNQUFYO0FBQW1CQyxjQUFRLEVBQUUsTUFBN0I7QUFBcUNDLFdBQUssRUFBRSxNQUE1QztBQUFvREMsWUFBTSxFQUFFO0FBQTVELEtBQVo7QUFBQSxlQUVRTixJQUFJLENBQUNPLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFDWiwwQkFDSSxxRUFBQyx5Q0FBRDtBQUFNLGFBQUssRUFBRTtBQUFFSCxlQUFLLEVBQUU7QUFBVCxTQUFiO0FBQStCLGVBQU8sRUFBRSxjQUFDLHFFQUFDLDhEQUFELE1BQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUQsQ0FBeEM7QUFBQSwrQkFDUSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxxQkFBVyxFQUFFRyxDQUFDLENBQUNDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFLSCxLQU5ELENBRlIsZUFVSSxxRUFBQywyQ0FBRDtBQUFRLFdBQUssTUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKLENBY0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpDSjtBQW1DSCxDQXJDRDs7S0FBTVgsVTtBQXVDTkEsVUFBVSxDQUFDWSxTQUFYLEdBQXVCO0FBQ25CWCxRQUFNLEVBQUVZLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJiLE1BQUksRUFBRVcsaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGSCxDQUF2QjtBQUtlZix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjc1MWJmOTIzOTM5ZDI2MzQ0MjQxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgU3RvcE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcblxyXG5pbXBvcnQgeyBMaXN0LCBDYXJkLCBCdXR0b24sIFJvdywgQ29sIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZm9sbG93Q2FyZFdyYXBwZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9zdHlsZS9mb2xsb3dMaXN0U3R5bGVcIjtcclxuXHJcblxyXG4vLyBjb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhIH0pID0+IHtcclxuY29uc3QgRm9sbG93TGlzdCA9ICh7IGhlYWRlciwgZGF0YSwgb25DbGlja01vcmUsIGxvYWRpbmcgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleFdyYXA6IFwid3JhcFwiLCB3aWR0aDogXCIxMDAlXCIsIGJvcmRlcjogXCIxcHggc29saWQgZ3JlZW5cIiB9fT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogXCIzMyVcIiB9fSBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgLz5dfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXt2Lm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8QnV0dG9uIGJsb2NrPuuNlOuztOq4sDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAvLyA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4OiBcIjEgMSAzMyVcIiB9fT5cclxuICAgICAgICAvLyAgICAgPExpc3RcclxuICAgICAgICAvLyAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJ0dG9tOiAyMCB9fVxyXG4gICAgICAgIC8vICAgICAgICAgZ3JpZD17eyBndXR0ZXI6IDQsIHhzOiAyLCBtZDogMyB9fVxyXG4gICAgICAgIC8vICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAvLyAgICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgICAvLyAgICAgICAgIGxvYWRNb3JlPXtcclxuICAgICAgICAvLyAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHRleHRBbGlnbjogJ2NlbnRlcicsIG1hcmdpbjogJzEwcHggMCcgfX0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25DbGlja01vcmV9IGxvYWRpbmc9e2xvYWRpbmd9PuuNlCDrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAvLyAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIGJvcmRlcmVkPXt0cnVlfVxyXG4gICAgICAgIC8vICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAvLyAgICAgICAgIHJlbmRlckl0ZW09eyhpdGVtKSA9PiAoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPENhcmQgYWN0aW9ucz17WzxTdG9wT3V0bGluZWQga2V5PVwic3RvcFwiIC8+XX0+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgIC8vICAgICAgICAgKX1cclxuICAgICAgICAvLyAgICAgLz5cclxuICAgICAgICAvLyA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
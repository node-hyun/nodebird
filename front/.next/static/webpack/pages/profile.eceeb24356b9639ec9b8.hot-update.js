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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\nodebird\\front\\components\\FollowList.js",
    _this = undefined;








var FollowList = function FollowList(_ref) {
  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;

  var onCancel = function onCancel(id) {
    return function () {
      if (header === '팔로잉') {
        dispatch({
          type: UNFOLLOW_REQUEST,
          data: id
        });
      }

      dispatch({
        type: REMOVE_FOLLOWER_REQUEST,
        data: id
      });
    };
  };

  console.log("data : ", data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h4", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      },
      children: [data && data.map(function (v) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          style: {
            width: "30%"
          },
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 66
          }, _this)],
          onClick: onCancel(v.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: v.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 25
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        block: true,
        loading: loading,
        onClick: onClickMore,
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 23
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_c = FollowList;
FollowList.propTypes = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwib25DYW5jZWwiLCJpZCIsImRpc3BhdGNoIiwidHlwZSIsIlVORk9MTE9XX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsImNvbnNvbGUiLCJsb2ciLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4V3JhcCIsIm1hcCIsInYiLCJ3aWR0aCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QztBQUFBLE1BQXpDQyxNQUF5QyxRQUF6Q0EsTUFBeUM7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFFM0QsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsWUFBTTtBQUMzQixVQUFJTCxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNsQk0sZ0JBQVEsQ0FBQztBQUNMQyxjQUFJLEVBQUVDLGdCQUREO0FBRUxQLGNBQUksRUFBRUk7QUFGRCxTQUFELENBQVI7QUFJSDs7QUFDREMsY0FBUSxDQUFDO0FBQ0xDLFlBQUksRUFBRUUsdUJBREQ7QUFFTFIsWUFBSSxFQUFFSTtBQUZELE9BQUQsQ0FBUjtBQUlILEtBWGdCO0FBQUEsR0FBakI7O0FBYUFLLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJWLElBQXZCO0FBQ0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFLRDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUVJO0FBQUssV0FBSyxFQUFFO0FBQUVZLGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxzQkFBYyxFQUFFLGVBQW5DO0FBQW9EQyxnQkFBUSxFQUFFO0FBQTlELE9BQVo7QUFBQSxpQkFFS2IsSUFBSSxJQUFJQSxJQUFJLENBQUNjLEdBQUwsQ0FBUyxVQUFDQyxDQUFELEVBQU87QUFDckIsNEJBQ0kscUVBQUMseUNBQUQ7QUFBTSxlQUFLLEVBQUU7QUFBRUMsaUJBQUssRUFBRTtBQUFULFdBQWI7QUFBK0IsaUJBQU8sRUFBRSxjQUFDLHFFQUFDLDhEQUFELE1BQWtCLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQUQsQ0FBeEM7QUFBdUUsaUJBQU8sRUFBRWIsUUFBUSxDQUFDWSxDQUFDLENBQUNYLEVBQUgsQ0FBeEY7QUFBQSxpQ0FDSSxxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyx1QkFBVyxFQUFFVyxDQUFDLENBQUNFO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBS0gsT0FOUSxDQUZiLGVBVUkscUVBQUMsMkNBQUQ7QUFBUSxhQUFLLE1BQWI7QUFBYyxlQUFPLEVBQUVmLE9BQXZCO0FBQWdDLGVBQU8sRUFBRUQsV0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWSixlQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSixlQVdVO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBLGtCQURKO0FBa0JILENBbENEOztLQUFNSCxVO0FBb0NOQSxVQUFVLENBQUNvQixTQUFYLEdBQXVCLEVBQXZCO0FBR2VwQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmVjZWViMjQzNTZiOTYzOWVjOWI4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBMaXN0LCBDYXJkLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuXHJcblxyXG5jb25zdCBGb2xsb3dMaXN0ID0gKHsgaGVhZGVyLCBkYXRhLCBvbkNsaWNrTW9yZSwgbG9hZGluZyB9KSA9PiB7XHJcblxyXG4gICAgY29uc3Qgb25DYW5jZWwgPSAoaWQpID0+ICgpID0+IHtcclxuICAgICAgICBpZiAoaGVhZGVyID09PSAn7YyU66Gc7J6JJykge1xyXG4gICAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBVTkZPTExPV19SRVFVRVNULFxyXG4gICAgICAgICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDQ+e2hlYWRlcn08L2g0PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsIGZsZXhXcmFwOiBcIndyYXBcIiB9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiYgZGF0YS5tYXAoKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogXCIzMCVcIiB9fSBhY3Rpb25zPXtbPFN0b3BPdXRsaW5lZCBrZXk9XCJzdG9wXCIgLz5dfSBvbkNsaWNrPXtvbkNhbmNlbCh2LmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhIGRlc2NyaXB0aW9uPXt2Lm5pY2tuYW1lfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBibG9jayBsb2FkaW5nPXtsb2FkaW5nfSBvbkNsaWNrPXtvbkNsaWNrTW9yZX0+642U67O06riwPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuRm9sbG93TGlzdC5wcm9wVHlwZXMgPSB7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
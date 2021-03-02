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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\nodebird\\front\\components\\FollowList.js",
    _this = undefined,
    _s = $RefreshSig$();










var FollowList = function FollowList(_ref) {
  _s();

  var header = _ref.header,
      data = _ref.data,
      onClickMore = _ref.onClickMore,
      loading = _ref.loading;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var onCancel = function onCancel(id) {
    return function () {
      if (header === '팔로잉') {
        dispatch({
          type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["UNFOLLOW_REQUEST"],
          data: id
        });
      }

      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_5__["REMOVE_FOLLOWER_REQUEST"],
        data: id
      });
    };
  };

  console.log("data : ", data);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("h4", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap"
      },
      children: [data && data.map(function (v) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          style: {
            width: "30%"
          },
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {}, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 66
          }, _this)],
          onClick: onCancel(v.id),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: v.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 29
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 25
        }, _this);
      }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        block: true,
        loading: loading,
        onClick: onClickMore,
        children: "\uB354\uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(FollowList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm9uQ2FuY2VsIiwiaWQiLCJ0eXBlIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUIiwiY29uc29sZSIsImxvZyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwibWFwIiwidiIsIndpZHRoIiwibmlja25hbWUiLCJwcm9wVHlwZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFHQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxPQUE0QztBQUFBOztBQUFBLE1BQXpDQyxNQUF5QyxRQUF6Q0EsTUFBeUM7QUFBQSxNQUFqQ0MsSUFBaUMsUUFBakNBLElBQWlDO0FBQUEsTUFBM0JDLFdBQTJCLFFBQTNCQSxXQUEyQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMzRCxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUVBLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEVBQUQ7QUFBQSxXQUFRLFlBQU07QUFDM0IsVUFBSVAsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDbEJJLGdCQUFRLENBQUM7QUFDTEksY0FBSSxFQUFFQywrREFERDtBQUVMUixjQUFJLEVBQUVNO0FBRkQsU0FBRCxDQUFSO0FBSUg7O0FBQ0RILGNBQVEsQ0FBQztBQUNMSSxZQUFJLEVBQUVFLHNFQUREO0FBRUxULFlBQUksRUFBRU07QUFGRCxPQUFELENBQVI7QUFJSCxLQVhnQjtBQUFBLEdBQWpCOztBQWFBSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCWCxJQUF2QjtBQUNBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxnQkFBS0Q7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLFdBQUssRUFBRTtBQUFFYSxlQUFPLEVBQUUsTUFBWDtBQUFtQkMsc0JBQWMsRUFBRSxlQUFuQztBQUFvREMsZ0JBQVEsRUFBRTtBQUE5RCxPQUFaO0FBQUEsaUJBRUtkLElBQUksSUFBSUEsSUFBSSxDQUFDZSxHQUFMLENBQVMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JCLDRCQUNJLHFFQUFDLHlDQUFEO0FBQU0sZUFBSyxFQUFFO0FBQUVDLGlCQUFLLEVBQUU7QUFBVCxXQUFiO0FBQStCLGlCQUFPLEVBQUUsY0FBQyxxRUFBQyw4REFBRCxNQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFELENBQXhDO0FBQXVFLGlCQUFPLEVBQUVaLFFBQVEsQ0FBQ1csQ0FBQyxDQUFDVixFQUFILENBQXhGO0FBQUEsaUNBQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVcsRUFBRVUsQ0FBQyxDQUFDRTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESjtBQUtILE9BTlEsQ0FGYixlQVVJLHFFQUFDLDJDQUFEO0FBQVEsYUFBSyxNQUFiO0FBQWMsZUFBTyxFQUFFaEIsT0FBdkI7QUFBZ0MsZUFBTyxFQUFFRCxXQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVZKLGVBV0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKLGVBV1U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUEsa0JBREo7QUFrQkgsQ0FuQ0Q7O0dBQU1ILFU7VUFDZU0sdUQ7OztLQURmTixVO0FBcUNOQSxVQUFVLENBQUNxQixTQUFYLEdBQXVCLEVBQXZCO0FBR2VyQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLmZjNjE5MmVlYTZkZjgwY2Q3ZDY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBMaXN0LCBDYXJkLCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBVTkZPTExPV19SRVFVRVNULCBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuXHJcbiAgICBjb25zdCBvbkNhbmNlbCA9IChpZCkgPT4gKCkgPT4ge1xyXG4gICAgICAgIGlmIChoZWFkZXIgPT09ICftjJTroZzsnoknKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBpZCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoND57aGVhZGVyfTwvaDQ+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIiwgZmxleFdyYXA6IFwid3JhcFwiIH19PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7ZGF0YSAmJiBkYXRhLm1hcCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIHN0eWxlPXt7IHdpZHRoOiBcIjMwJVwiIH19IGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiAvPl19IG9uQ2xpY2s9e29uQ2FuY2VsKHYuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e3Yubmlja25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIGJsb2NrIGxvYWRpbmc9e2xvYWRpbmd9IG9uQ2xpY2s9e29uQ2xpY2tNb3JlfT7rjZTrs7TquLA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvbGxvd0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==
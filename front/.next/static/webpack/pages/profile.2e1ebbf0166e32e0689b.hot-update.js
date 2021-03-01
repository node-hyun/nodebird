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
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])(); // const onCancel = (id) => () => {
  //     if (header === '팔로잉') {
  //         dispatch({
  //             type: UNFOLLOW_REQUEST,
  //             data: id,
  //         });
  //     }
  //     dispatch({
  //         type: REMOVE_FOLLOWER_REQUEST,
  //         data: id,
  //     });
  // };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"], {
    style: {
      marginBottom: 20
    },
    grid: {
      gutter: 4,
      xs: 2,
      md: 3
    },
    size: "small",
    header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      children: header
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }, _this),
    loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
      style: {
        textAlign: 'center',
        margin: '10px 0'
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: onClickMore,
        loading: loading,
        children: "\uB354 \uBCF4\uAE30"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 78
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 23
    }, _this),
    bordered: true,
    dataSource: data,
    renderItem: function renderItem(item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["List"].Item, {
        style: {
          marginTop: 20
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"], {
          actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["StopOutlined"], {
            onClick: true
          }, "stop", false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 37
          }, _this)],
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_2__["Card"].Meta, {
            description: item.nickname
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, _this);
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, _this);
};

_s(FollowList, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"]];
});

_c = FollowList;
FollowList.propTypes = {
  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,
  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzIl0sIm5hbWVzIjpbIkZvbGxvd0xpc3QiLCJoZWFkZXIiLCJkYXRhIiwib25DbGlja01vcmUiLCJsb2FkaW5nIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsIm1hcmdpbkJvdHRvbSIsImd1dHRlciIsInhzIiwibWQiLCJ0ZXh0QWxpZ24iLCJtYXJnaW4iLCJpdGVtIiwibWFyZ2luVG9wIiwibmlja25hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBNEM7QUFBQTs7QUFBQSxNQUF6Q0MsTUFBeUMsUUFBekNBLE1BQXlDO0FBQUEsTUFBakNDLElBQWlDLFFBQWpDQSxJQUFpQztBQUFBLE1BQTNCQyxXQUEyQixRQUEzQkEsV0FBMkI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7QUFDM0QsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1QixDQUQyRCxDQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQ0kscUVBQUMseUNBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBRUMsa0JBQVksRUFBRTtBQUFoQixLQURYO0FBRUksUUFBSSxFQUFFO0FBQUVDLFlBQU0sRUFBRSxDQUFWO0FBQWFDLFFBQUUsRUFBRSxDQUFqQjtBQUFvQkMsUUFBRSxFQUFFO0FBQXhCLEtBRlY7QUFHSSxRQUFJLEVBQUMsT0FIVDtBQUlJLFVBQU0sZUFBRTtBQUFBLGdCQUFNVDtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKWjtBQUtJLFlBQVEsZUFBRTtBQUFLLFdBQUssRUFBRTtBQUFFVSxpQkFBUyxFQUFFLFFBQWI7QUFBdUJDLGNBQU0sRUFBRTtBQUEvQixPQUFaO0FBQUEsNkJBQXVELHFFQUFDLDJDQUFEO0FBQVEsZUFBTyxFQUFFVCxXQUFqQjtBQUE4QixlQUFPLEVBQUVDLE9BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMZDtBQU1JLFlBQVEsTUFOWjtBQU9JLGNBQVUsRUFBRUYsSUFQaEI7QUFRSSxjQUFVLEVBQUUsb0JBQUNXLElBQUQ7QUFBQSwwQkFDUixxRUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxhQUFLLEVBQUU7QUFBRUMsbUJBQVMsRUFBRTtBQUFiLFNBQWxCO0FBQUEsK0JBQ0kscUVBQUMseUNBQUQ7QUFBTSxpQkFBTyxFQUFFLGNBQUMscUVBQUMsOERBQUQ7QUFBeUIsbUJBQU87QUFBaEMsYUFBa0IsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBRCxDQUFmO0FBQUEsaUNBQ0kscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsdUJBQVcsRUFBRUQsSUFBSSxDQUFDRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUTtBQUFBO0FBUmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWtCSCxDQWpDRDs7R0FBTWYsVTtVQUNlTSx1RDs7O0tBRGZOLFU7QUFtQ05BLFVBQVUsQ0FBQ2dCLFNBQVgsR0FBdUI7QUFDbkJmLFFBQU0sRUFBRWdCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRE47QUFFbkJqQixNQUFJLEVBQUVlLGlEQUFTLENBQUNHLEtBQVYsQ0FBZ0JELFVBRkg7QUFHbkJoQixhQUFXLEVBQUVjLGlEQUFTLENBQUNJLElBQVYsQ0FBZUYsVUFIVDtBQUluQmYsU0FBTyxFQUFFYSxpREFBUyxDQUFDSyxJQUFWLENBQWVIO0FBSkwsQ0FBdkI7QUFPZW5CLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuMmUxZWJiZjAxNjZlMzJlMDY4OWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCB7IExpc3QsIEJ1dHRvbiwgQ2FyZCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBTdG9wT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuaW1wb3J0IHsgVU5GT0xMT1dfUkVRVUVTVCwgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmNvbnN0IEZvbGxvd0xpc3QgPSAoeyBoZWFkZXIsIGRhdGEsIG9uQ2xpY2tNb3JlLCBsb2FkaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIC8vIGNvbnN0IG9uQ2FuY2VsID0gKGlkKSA9PiAoKSA9PiB7XHJcbiAgICAvLyAgICAgaWYgKGhlYWRlciA9PT0gJ+2MlOuhnOyeiScpIHtcclxuICAgIC8vICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIC8vICAgICAgICAgICAgIGRhdGE6IGlkLFxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goe1xyXG4gICAgLy8gICAgICAgICB0eXBlOiBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCxcclxuICAgIC8vICAgICAgICAgZGF0YTogaWQsXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAyMCB9fVxyXG4gICAgICAgICAgICBncmlkPXt7IGd1dHRlcjogNCwgeHM6IDIsIG1kOiAzIH19XHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGhlYWRlcj17PGRpdj57aGVhZGVyfTwvZGl2Pn1cclxuICAgICAgICAgICAgbG9hZE1vcmU9ezxkaXYgc3R5bGU9e3sgdGV4dEFsaWduOiAnY2VudGVyJywgbWFyZ2luOiAnMTBweCAwJyB9fT48QnV0dG9uIG9uQ2xpY2s9e29uQ2xpY2tNb3JlfSBsb2FkaW5nPXtsb2FkaW5nfT7rjZQg67O06riwPC9CdXR0b24+PC9kaXY+fVxyXG4gICAgICAgICAgICBib3JkZXJlZFxyXG4gICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICByZW5kZXJJdGVtPXsoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPExpc3QuSXRlbSBzdHlsZT17eyBtYXJnaW5Ub3A6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkIGFjdGlvbnM9e1s8U3RvcE91dGxpbmVkIGtleT1cInN0b3BcIiBvbkNsaWNrIC8+XX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb249e2l0ZW0ubmlja25hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcclxuICAgIGhlYWRlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgZGF0YTogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXHJcbiAgICBvbkNsaWNrTW9yZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=
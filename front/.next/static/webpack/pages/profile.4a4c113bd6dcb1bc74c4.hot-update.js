webpackHotUpdate_N_E("pages/profile",{

/***/ "./node_modules/dequal/lite/index.mjs":
false,

/***/ "./node_modules/swr/esm/cache.js":
false,

/***/ "./node_modules/swr/esm/config.js":
false,

/***/ "./node_modules/swr/esm/index.js":
false,

/***/ "./node_modules/swr/esm/libs/hash.js":
false,

/***/ "./node_modules/swr/esm/libs/web-preset.js":
false,

/***/ "./node_modules/swr/esm/swr-config-context.js":
false,

/***/ "./node_modules/swr/esm/use-swr-infinite.js":
false,

/***/ "./node_modules/swr/esm/use-swr.js":
false,

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NicknameEditForm */ "./components/NicknameEditForm.js");
/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FollowList */ "./components/FollowList.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\nodebird\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();







 // useState

 // fetcher 추가




var fetcher = function fetcher(url) {
  return axios.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1];

  var _useSWR = useSWR("http://localhost:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = useSWR("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  if (!me) {
    return null;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWERS_REQUEST"]
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWINGS_REQUEST"]
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC789",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingError && !followingsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC6CC",
        data: followersData,
        onClickMore: loadMoreFollowers,
        loading: !followerError && !followersData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Profile, "xkUOSPUfttupmNLIV8+b0cmB3Lw=", true, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"]];
});

_c = Profile;
/* harmony default export */ __webpack_exports__["default"] = (Profile);

var _c;

$RefreshReg$(_c, "Profile");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsInVzZVNXUiIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJlcnJvciIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwidHlwZSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsImxvYWRNb3JlRm9sbG93aW5ncyIsImxvYWRNb3JlRm9sbG93ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBR0E7Ozs7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLEtBQUssQ0FBQ0MsR0FBTixDQUFVRixHQUFWLEVBQWU7QUFBRUcsbUJBQWUsRUFBRTtBQUFuQixHQUFmLEVBQTBDQyxJQUExQyxDQUErQyxVQUFDQyxNQUFEO0FBQUEsV0FBWUEsTUFBTSxDQUFDQyxJQUFuQjtBQUFBLEdBQS9DLENBQVQ7QUFBQSxDQUFoQjs7QUFHQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHFCQUVIQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZSO0FBQUEsTUFFVkMsRUFGVSxnQkFFVkEsRUFGVTs7QUFBQSxrQkFJNEJDLHNEQUFRLENBQUMsQ0FBRCxDQUpwQztBQUFBLE1BSVhDLGVBSlc7QUFBQSxNQUlNQyxrQkFKTjs7QUFBQSxtQkFLMEJGLHNEQUFRLENBQUMsQ0FBRCxDQUxsQztBQUFBLE1BS1hHLGNBTFc7QUFBQSxNQUtLQyxpQkFMTDs7QUFBQSxnQkFNc0NDLE1BQU0sdURBQWdESixlQUFoRCxHQUFtRWhCLE9BQW5FLENBTjVDO0FBQUEsTUFNSnFCLGNBTkksV0FNVmQsSUFOVTtBQUFBLE1BTW1CZSxjQU5uQixXQU1ZQyxLQU5aOztBQUFBLGlCQU9vQ0gsTUFBTSxzREFBK0NGLGNBQS9DLEdBQWlFbEIsT0FBakUsQ0FQMUM7QUFBQSxNQU9Kd0IsYUFQSSxZQU9WakIsSUFQVTtBQUFBLE1BT2tCa0IsYUFQbEIsWUFPV0YsS0FQWDs7QUFTbEIsTUFBSSxDQUFDVCxFQUFMLEVBQVM7QUFDTCxXQUFPLElBQVA7QUFDSDs7QUFFRFkseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxFQUFFWixFQUFFLElBQUlBLEVBQUUsQ0FBQ2EsRUFBWCxDQUFKLEVBQW9CO0FBQ2hCQyx3REFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNIO0FBQ0osR0FKUSxFQUlOLENBQUNmLEVBQUUsSUFBSUEsRUFBRSxDQUFDYSxFQUFWLENBSk0sQ0FBVDtBQU1BRCx5REFBUyxDQUFDLFlBQU07QUFDWmpCLFlBQVEsQ0FBQztBQUNMcUIsVUFBSSxFQUFFQyxxRUFBc0JBO0FBRHZCLEtBQUQsQ0FBUjtBQUdBdEIsWUFBUSxDQUFDO0FBQ0xxQixVQUFJLEVBQUVFLHNFQUF1QkE7QUFEeEIsS0FBRCxDQUFSO0FBR0gsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUNJO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJLHFFQUFDLDZEQUFEO0FBQUEsOEJBQ0kscUVBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUkscUVBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRVgsY0FBL0I7QUFBK0MsbUJBQVcsRUFBRVksa0JBQTVEO0FBQWdGLGVBQU8sRUFBRSxDQUFDWCxjQUFELElBQW1CLENBQUNEO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJLHFFQUFDLDhEQUFEO0FBQVksY0FBTSxFQUFDLG9CQUFuQjtBQUF5QixZQUFJLEVBQUVHLGFBQS9CO0FBQThDLG1CQUFXLEVBQUVVLGlCQUEzRDtBQUE4RSxlQUFPLEVBQUUsQ0FBQ1QsYUFBRCxJQUFrQixDQUFDRDtBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQWdCSCxDQTVDRDs7R0FBTWhCLE87VUFDZUUsdUQsRUFDRkMsdUQ7OztLQUZiSCxPO0FBOENTQSxzRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9maWxlLjRhNGMxMTNiZDZkY2IxYmM3NGM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0FwcExheW91dFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBOaWNrbmFtZUVkaXRGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvTmlja25hbWVFZGl0Rm9ybSc7XHJcbmltcG9ydCBGb2xsb3dMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvRm9sbG93TGlzdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyB1c2VTdGF0ZVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gZmV0Y2hlciDstpTqsIBcclxuY29uc3QgZmV0Y2hlciA9ICh1cmwpID0+IGF4aW9zLmdldCh1cmwsIHsgd2l0aENyZWRlbnRpYWxzOiB0cnVlIH0pLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0LmRhdGEpO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IFtmb2xsb3dpbmdzTGltaXQsIHNldEZvbGxvd2luZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFtmb2xsb3dlcnNMaW1pdCwgc2V0Rm9sbG93ZXJzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2luZ3NEYXRhLCBlcnJvcjogZm9sbG93aW5nRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93aW5ncz9saW1pdD0ke2ZvbGxvd2luZ3NMaW1pdH1gLCBmZXRjaGVyKTtcclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93ZXJzRGF0YSwgZXJyb3I6IGZvbGxvd2VyRXJyb3IgfSA9IHVzZVNXUihgaHR0cDovL2xvY2FsaG9zdDozMDY1L3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7Zm9sbG93ZXJzTGltaXR9YCwgZmV0Y2hlcik7XHJcblxyXG4gICAgaWYgKCFtZSkge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuuCtCDtlITroZztlYQgfCBOb2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiSDrqqnroZ1cIiBkYXRhPXttZS5Gb2xsb3dpbmdzfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e21lLkZvbGxvd2Vyc30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnolcIiBkYXRhPXtmb2xsb3dpbmdzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gbG9hZGluZz17IWZvbGxvd2luZ0Vycm9yICYmICFmb2xsb3dpbmdzRGF0YX0gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjFwiIGRhdGE9e2ZvbGxvd2Vyc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2Vyc30gbG9hZGluZz17IWZvbGxvd2VyRXJyb3IgJiYgIWZvbGxvd2Vyc0RhdGF9IC8+XHJcblxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
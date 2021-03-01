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
        lineNumber: 49,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC789",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingError && !followingsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC6CC",
        data: followersData,
        onClickMore: loadMoreFollowers,
        loading: !followerError && !followersData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsInVzZVNXUiIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJlcnJvciIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwidXNlRWZmZWN0IiwiaWQiLCJSb3V0ZXIiLCJwdXNoIiwidHlwZSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsImxvYWRNb3JlRm9sbG93aW5ncyIsImxvYWRNb3JlRm9sbG93ZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0E7Ozs7QUFJQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxHQUFEO0FBQUEsU0FBU0MsS0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtBQUFFRyxtQkFBZSxFQUFFO0FBQW5CLEdBQWYsRUFBMENDLElBQTFDLENBQStDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLElBQW5CO0FBQUEsR0FBL0MsQ0FBVDtBQUFBLENBQWhCOztBQUdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRUhDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRlI7QUFBQSxNQUVWQyxFQUZVLGdCQUVWQSxFQUZVOztBQUFBLGtCQUk0QkMsc0RBQVEsQ0FBQyxDQUFELENBSnBDO0FBQUEsTUFJWEMsZUFKVztBQUFBLE1BSU1DLGtCQUpOOztBQUFBLG1CQUswQkYsc0RBQVEsQ0FBQyxDQUFELENBTGxDO0FBQUEsTUFLWEcsY0FMVztBQUFBLE1BS0tDLGlCQUxMOztBQUFBLGdCQU9zQ0MsTUFBTSx1REFBZ0RKLGVBQWhELEdBQW1FaEIsT0FBbkUsQ0FQNUM7QUFBQSxNQU9KcUIsY0FQSSxXQU9WZCxJQVBVO0FBQUEsTUFPbUJlLGNBUG5CLFdBT1lDLEtBUFo7O0FBQUEsaUJBUW9DSCxNQUFNLHNEQUErQ0YsY0FBL0MsR0FBaUVsQixPQUFqRSxDQVIxQztBQUFBLE1BUUp3QixhQVJJLFlBUVZqQixJQVJVO0FBQUEsTUFRa0JrQixhQVJsQixZQVFXRixLQVJYOztBQVVsQixNQUFJLENBQUNULEVBQUwsRUFBUztBQUNMLFdBQU8sSUFBUDtBQUNIOztBQUVEWSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLEVBQUVaLEVBQUUsSUFBSUEsRUFBRSxDQUFDYSxFQUFYLENBQUosRUFBb0I7QUFDaEJDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ2YsRUFBRSxJQUFJQSxFQUFFLENBQUNhLEVBQVYsQ0FKTSxDQUFUO0FBTUFELHlEQUFTLENBQUMsWUFBTTtBQUNaakIsWUFBUSxDQUFDO0FBQ0xxQixVQUFJLEVBQUVDLHFFQUFzQkE7QUFEdkIsS0FBRCxDQUFSO0FBR0F0QixZQUFRLENBQUM7QUFDTHFCLFVBQUksRUFBRUUsc0VBQXVCQTtBQUR4QixLQUFELENBQVI7QUFHSCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0k7QUFBQSw0QkFDSSxxRUFBQyxnREFBRDtBQUFBLDZCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBS0kscUVBQUMsNkRBQUQ7QUFBQSw4QkFDSSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSSxxRUFBQyw4REFBRDtBQUFZLGNBQU0sRUFBQyxvQkFBbkI7QUFBeUIsWUFBSSxFQUFFWCxjQUEvQjtBQUErQyxtQkFBVyxFQUFFWSxrQkFBNUQ7QUFBZ0YsZUFBTyxFQUFFLENBQUNYLGNBQUQsSUFBbUIsQ0FBQ0Q7QUFBN0c7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0kscUVBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRUcsYUFBL0I7QUFBOEMsbUJBQVcsRUFBRVUsaUJBQTNEO0FBQThFLGVBQU8sRUFBRSxDQUFDVCxhQUFELElBQWtCLENBQUNEO0FBQTFHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURKO0FBZ0JILENBN0NEOztHQUFNaEIsTztVQUNlRSx1RCxFQUNGQyx1RDs7O0tBRmJILE87QUErQ1NBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuNDhkMmRkZDRiNmUzZGZjNTkyNWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIHVzZVN0YXRlXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuXHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS51c2VyKTtcclxuXHJcbiAgICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG5cclxuICAgIGNvbnN0IHsgZGF0YTogZm9sbG93aW5nc0RhdGEsIGVycm9yOiBmb2xsb3dpbmdFcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9mb2xsb3dpbmdzP2xpbWl0PSR7Zm9sbG93aW5nc0xpbWl0fWAsIGZldGNoZXIpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dlcnNEYXRhLCBlcnJvcjogZm9sbG93ZXJFcnJvciB9ID0gdXNlU1dSKGBodHRwOi8vbG9jYWxob3N0OjMwNjUvdXNlci9mb2xsb3dlcnM/bGltaXQ9JHtmb2xsb3dlcnNMaW1pdH1gLCBmZXRjaGVyKTtcclxuXHJcbiAgICBpZiAoIW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoIShtZSAmJiBtZS5pZCkpIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbbWUgJiYgbWUuaWRdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19SRVFVRVNULFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhCB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG5cclxuICAgICAgICAgICAgPEFwcExheW91dD5cclxuICAgICAgICAgICAgICAgIDxOaWNrbmFtZUVkaXRGb3JtIC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JIOuqqeuhnVwiIGRhdGE9e21lLkZvbGxvd2luZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4wg66qp66GdXCIgZGF0YT17bWUuRm9sbG93ZXJzfSAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiVwiIGRhdGE9e2ZvbGxvd2luZ3NEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfSBsb2FkaW5nPXshZm9sbG93aW5nRXJyb3IgJiYgIWZvbGxvd2luZ3NEYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMXCIgZGF0YT17Zm9sbG93ZXJzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93ZXJzfSBsb2FkaW5nPXshZm9sbG93ZXJFcnJvciAmJiAhZm9sbG93ZXJzRGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
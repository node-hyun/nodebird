webpackHotUpdate_N_E("pages/profile",{

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var _components_AppLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/AppLayout */ "./components/AppLayout.js");
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
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\nodebird\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();







 // useState, useCallback

 // fetcher 추가

var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_9___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
}; // swr 모듈 임포트 


 // wrapper 임포트

// axios 임포트




var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me; // 4줄 추가


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("http://127.0.0.1:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("http://127.0.0.1:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  console.log("followingsData : ", followingsData);
  console.log("followersData : ", followersData); // 함수 2개 추가

  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, [followingsData]);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, [data]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC789",
        data: followingsData,
        onClickMore: loadMoreFollowings,
        loading: !followingError && !followingsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
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

_s(Profile, "XLuOY95GZZuGLVYjmsz1Xn4nyvo=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_8__["default"], swr__WEBPACK_IMPORTED_MODULE_8__["default"]];
});

_c = Profile;
var __N_SSP = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZVN0YXRlIiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsInVzZVNXUiIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJlcnJvciIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiY29uc29sZSIsImxvZyIsImxvYWRNb3JlRm9sbG93ZXJzIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibG9hZE1vcmVGb2xsb3dpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztDQUVBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEdBQUQ7QUFBQSxTQUFTQyw0Q0FBSyxDQUFDQyxHQUFOLENBQVVGLEdBQVYsRUFBZTtBQUFFRyxtQkFBZSxFQUFFO0FBQW5CLEdBQWYsRUFBMENDLElBQTFDLENBQStDLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLElBQW5CO0FBQUEsR0FBL0MsQ0FBVDtBQUFBLENBQWhCLEMsQ0FDQTs7O0NBR0E7O0FBSUE7QUFDQTs7OztBQUdBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRUhDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRlI7QUFBQSxNQUVWQyxFQUZVLGdCQUVWQSxFQUZVLEVBSWxCOzs7QUFKa0Isa0JBSzRCQyxzREFBUSxDQUFDLENBQUQsQ0FMcEM7QUFBQSxNQUtYQyxlQUxXO0FBQUEsTUFLTUMsa0JBTE47O0FBQUEsbUJBTTBCRixzREFBUSxDQUFDLENBQUQsQ0FObEM7QUFBQSxNQU1YRyxjQU5XO0FBQUEsTUFNS0MsaUJBTkw7O0FBQUEsZ0JBT3NDQyxtREFBTSx1REFBZ0RKLGVBQWhELEdBQW1FaEIsT0FBbkUsQ0FQNUM7QUFBQSxNQU9KcUIsY0FQSSxXQU9WZCxJQVBVO0FBQUEsTUFPbUJlLGNBUG5CLFdBT1lDLEtBUFo7O0FBQUEsaUJBUW9DSCxtREFBTSxzREFBK0NGLGNBQS9DLEdBQWlFbEIsT0FBakUsQ0FSMUM7QUFBQSxNQVFKd0IsYUFSSSxZQVFWakIsSUFSVTtBQUFBLE1BUWtCa0IsYUFSbEIsWUFRV0YsS0FSWDs7QUFVbEJHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaLEVBQWlDTixjQUFqQztBQUNBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0gsYUFBaEMsRUFYa0IsQ0FhbEI7O0FBQ0EsTUFBTUksaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN4Q1YscUJBQWlCLENBQUMsVUFBQ1csSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBakI7QUFDSCxHQUZvQyxFQUVsQyxDQUFDVCxjQUFELENBRmtDLENBQXJDO0FBSUEsTUFBTVUsa0JBQWtCLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUN6Q1osc0JBQWtCLENBQUMsVUFBQ2EsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBbEI7QUFDSCxHQUZxQyxFQUVuQyxDQUFDdkIsSUFBRCxDQUZtQyxDQUF0QztBQUlBLHNCQUNJO0FBQUEsNEJBQ0ksc0VBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJLHNFQUFDLDZEQUFEO0FBQUEsOEJBQ0ksc0VBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUksc0VBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRWMsY0FBL0I7QUFBK0MsbUJBQVcsRUFBRVUsa0JBQTVEO0FBQWdGLGVBQU8sRUFBRSxDQUFDVCxjQUFELElBQW1CLENBQUNEO0FBQTdHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSixlQUtJLHNFQUFDLDhEQUFEO0FBQVksY0FBTSxFQUFDLG9CQUFuQjtBQUF5QixZQUFJLEVBQUVHLGFBQS9CO0FBQThDLG1CQUFXLEVBQUVJLGlCQUEzRDtBQUE4RSxlQUFPLEVBQUUsQ0FBQ0gsYUFBRCxJQUFrQixDQUFDRDtBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQSxrQkFESjtBQWVILENBckNEOztHQUFNaEIsTztVQUNlRSx1RCxFQUNGQyx1RCxFQUt5Q1MsMkMsRUFDRkEsMkM7OztLQVJwRFosTzs7QUF3RFNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuYThiMTE0MzcwNmRhNTM4Yjc3NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy8gdXNlU3RhdGUsIHVzZUNhbGxiYWNrXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBmZXRjaGVyIOy2lOqwgFxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcbi8vIHN3ciDrqqjrk4gg7J6E7Y+s7Yq4IFxyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG4vLyB3cmFwcGVyIOyehO2PrO2KuFxyXG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9zdG9yZS9jb25maWd1cmVTdG9yZSc7XHJcbi8vIGVuZCBpbXBvcnRcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbi8vIGF4aW9zIOyehO2PrO2KuFxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIC8vIDTspIQg7LaU6rCAXHJcbiAgICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly8xMjcuMC4wLjE6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly8xMjcuMC4wLjE6MzA2NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZm9sbG93aW5nc0RhdGEgOiBcIiwgZm9sbG93aW5nc0RhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJmb2xsb3dlcnNEYXRhIDogXCIsIGZvbGxvd2Vyc0RhdGEpO1xyXG5cclxuICAgIC8vIO2VqOyImCAy6rCcIOy2lOqwgFxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93ZXJzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtmb2xsb3dpbmdzRGF0YV0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93aW5ncyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgICAgICBzZXRGb2xsb3dpbmdzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtkYXRhXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT7rgrQg7ZSE66Gc7ZWEIHwgTm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnokg66qp66GdXCIgZGF0YT17bWUuRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjCDrqqnroZ1cIiBkYXRhPXttZS5Gb2xsb3dlcnN9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17Zm9sbG93aW5nc0RhdGF9IG9uQ2xpY2tNb3JlPXtsb2FkTW9yZUZvbGxvd2luZ3N9IGxvYWRpbmc9eyFmb2xsb3dpbmdFcnJvciAmJiAhZm9sbG93aW5nc0RhdGF9IC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsm4xcIiBkYXRhPXtmb2xsb3dlcnNEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IGxvYWRpbmc9eyFmb2xsb3dlckVycm9yICYmICFmb2xsb3dlcnNEYXRhfSAvPlxyXG4gICAgICAgICAgICA8L0FwcExheW91dD5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IHdyYXBwZXIuZ2V0U2VydmVyU2lkZVByb3BzKGFzeW5jIChjb250ZXh0KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnZ2V0U2VydmVyU2lkZVByb3BzIHN0YXJ0Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhjb250ZXh0LnJlcS5oZWFkZXJzKTtcclxuICAgIGNvbnN0IGNvb2tpZSA9IGNvbnRleHQucmVxID8gY29udGV4dC5yZXEuaGVhZGVycy5jb29raWUgOiAnJztcclxuICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gJyc7XHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIH0pO1xyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaChFTkQpO1xyXG4gICAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBlbmQnKTtcclxuICAgIGF3YWl0IGNvbnRleHQuc3RvcmUuc2FnYVRhc2sudG9Qcm9taXNlKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
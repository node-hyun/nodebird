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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swr */ "./node_modules/swr/esm/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\nodebird\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();




 // useState, useCallback 추가










var fetcher = function fetcher(url) {
  return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get(url, {
    withCredentials: true
  }).then(function (result) {
    return result.data;
  });
};

var Profile = function Profile() {
  _s();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("http://127.0.0.1:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_9__["default"])("http://127.0.0.1:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_4__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push('/');
    }
  }, [me && me.id]);

  if (followerError || followingError) {
    console.error(followerError || followingError);
    return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
  }

  if (!me) {
    return '내 정보 로딩중...';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Profile, "0LS2yv9lu1th4aK+9AYQiFTfQUE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_6__["useSelector"], swr__WEBPACK_IMPORTED_MODULE_9__["default"], swr__WEBPACK_IMPORTED_MODULE_9__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwidXNlciIsIm1lIiwidXNlU3RhdGUiLCJmb2xsb3dpbmdzTGltaXQiLCJzZXRGb2xsb3dpbmdzTGltaXQiLCJmb2xsb3dlcnNMaW1pdCIsInNldEZvbGxvd2Vyc0xpbWl0IiwidXNlU1dSIiwiZm9sbG93aW5nc0RhdGEiLCJmb2xsb3dpbmdFcnJvciIsImVycm9yIiwiZm9sbG93ZXJzRGF0YSIsImZvbGxvd2VyRXJyb3IiLCJsb2FkTW9yZUZvbGxvd2VycyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsImNvbnNvbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEI7O0FBR0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUFBLHFCQUNIQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQURSO0FBQUEsTUFDVkMsRUFEVSxnQkFDVkEsRUFEVTs7QUFBQSxrQkFFNEJDLHNEQUFRLENBQUMsQ0FBRCxDQUZwQztBQUFBLE1BRVhDLGVBRlc7QUFBQSxNQUVNQyxrQkFGTjs7QUFBQSxtQkFHMEJGLHNEQUFRLENBQUMsQ0FBRCxDQUhsQztBQUFBLE1BR1hHLGNBSFc7QUFBQSxNQUdLQyxpQkFITDs7QUFBQSxnQkFJc0NDLG1EQUFNLHVEQUFnREosZUFBaEQsR0FBbUVkLE9BQW5FLENBSjVDO0FBQUEsTUFJSm1CLGNBSkksV0FJVlosSUFKVTtBQUFBLE1BSW1CYSxjQUpuQixXQUlZQyxLQUpaOztBQUFBLGlCQUtvQ0gsbURBQU0sc0RBQStDRixjQUEvQyxHQUFpRWhCLE9BQWpFLENBTDFDO0FBQUEsTUFLSnNCLGFBTEksWUFLVmYsSUFMVTtBQUFBLE1BS2tCZ0IsYUFMbEIsWUFLV0YsS0FMWDs7QUFPbEIsTUFBTUcsaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN4Q1IscUJBQWlCLENBQUMsVUFBQ1MsSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBakI7QUFDSCxHQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztBQUlBLE1BQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDekNWLHNCQUFrQixDQUFDLFVBQUNXLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUcsQ0FBakI7QUFBQSxLQUFELENBQWxCO0FBQ0gsR0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7QUFLQUUseURBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBSSxFQUFFaEIsRUFBRSxJQUFJQSxFQUFFLENBQUNpQixFQUFYLENBQUosRUFBb0I7QUFDaEJDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ25CLEVBQUUsSUFBSUEsRUFBRSxDQUFDaUIsRUFBVixDQUpNLENBQVQ7O0FBTUEsTUFBSU4sYUFBYSxJQUFJSCxjQUFyQixFQUFxQztBQUNqQ1ksV0FBTyxDQUFDWCxLQUFSLENBQWNFLGFBQWEsSUFBSUgsY0FBL0I7QUFDQSxXQUFPLDBCQUFQO0FBQ0g7O0FBRUQsTUFBSSxDQUFDUixFQUFMLEVBQVM7QUFDTCxXQUFPLGFBQVA7QUFDSDs7QUFFRCxzQkFDSTtBQUFBLDRCQUNJLHNFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFJSSxzRUFBQyw2REFBRDtBQUFBLDZCQUNJLHNFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSko7QUFBQSxrQkFESjtBQWNILENBN0NEOztHQUFNSixPO1VBQ2FDLHVELEVBR3lDUywyQyxFQUNGQSwyQzs7O0tBTHBEVixPOztBQXlFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS5lZjhmZmZkY2MxMzdlMjNkM2UxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QnO1xyXG4vLyB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sg7LaU6rCAXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayAgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbmltcG9ydCB7IExPQURfVVNFUl9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcblxyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcblxyXG5jb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcblxyXG5cclxuY29uc3QgUHJvZmlsZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHsgbWUgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUudXNlcik7XHJcbiAgICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly8xMjcuMC4wLjE6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly8xMjcuMC4wLjE6MzA2NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIGlmIChmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihmb2xsb3dlckVycm9yIHx8IGZvbGxvd2luZ0Vycm9yKTtcclxuICAgICAgICByZXR1cm4gJ+2MlOuhnOyeiS/tjJTroZzsm4wg66Gc65SpIOykkSDsl5Drn6zqsIAg67Cc7IOd7ZaI7Iq164uI64ukLic7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFtZSkge1xyXG4gICAgICAgIHJldHVybiAn64K0IOygleuztCDroZzrlKnspJEuLi4nO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+64K0IO2UhOuhnO2VhCB8IE5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8QXBwTGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPE5pY2tuYW1lRWRpdEZvcm0gLz5cclxuICAgICAgICAgICAgICAgIHsvKiA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnokg66qp66GdXCIgZGF0YT17bWUuRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjCDrqqnroZ1cIiBkYXRhPXttZS5Gb2xsb3dlcnN9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgey8qIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiVwiIGRhdGE9e2ZvbGxvd2luZ3NEYXRhfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfSBsb2FkaW5nPXshZm9sbG93aW5nRXJyb3IgJiYgIWZvbGxvd2luZ3NEYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMXCIgZGF0YT17Zm9sbG93ZXJzRGF0YX0gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93ZXJzfSBsb2FkaW5nPXshZm9sbG93ZXJFcnJvciAmJiAhZm9sbG93ZXJzRGF0YX0gLz4gKi99XHJcbiAgICAgICAgICAgIDwvQXBwTGF5b3V0PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gd3JhcHBlci5nZXRTZXJ2ZXJTaWRlUHJvcHMoYXN5bmMgKGNvbnRleHQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGNvbnRleHQucmVxLmhlYWRlcnMpO1xyXG4gICAgY29uc3QgY29va2llID0gY29udGV4dC5yZXEgPyBjb250ZXh0LnJlcS5oZWFkZXJzLmNvb2tpZSA6ICcnO1xyXG4gICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSAnJztcclxuXHJcbiAgICBpZiAoY29udGV4dC5yZXEgJiYgY29va2llKSB7XHJcbiAgICAgICAgYXhpb3MuZGVmYXVsdHMuaGVhZGVycy5Db29raWUgPSBjb29raWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuICAgIC8vICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAvLyAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKEVORCk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
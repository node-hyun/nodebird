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





var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  if (!me) {
    return null;
  }

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]); // 4줄 추가

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1];

  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("http://localhost:3065/user/followings?limit=".concat(followingsLimit), fetcher),
      followingsData = _useSWR.data,
      followingError = _useSWR.error;

  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_8__["default"])("http://localhost:3065/user/followers?limit=".concat(followersLimit), fetcher),
      followersData = _useSWR2.data,
      followerError = _useSWR2.error;

  console.log("followingsData : ", followingsData);
  console.log("followersData : ", followersData); // 함수 2개 추가

  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setFollowersLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_7__["useCallback"])(function () {
    setFollowingsLimit(function (prev) {
      return prev + 3;
    });
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWERS_REQUEST"]
    });
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWINGS_REQUEST"]
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC789",
        data: me.followings,
        onClickMore: loadMoreFollowings,
        loading: !followingError && !followingsData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC6CC",
        data: me.followers,
        onClickMore: loadMoreFollowers,
        loading: !followerError && !followersData
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(Profile, "m5oAxAyH9PYD/8X+HV6rXhz586w=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJmZXRjaGVyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsIlByb2ZpbGUiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInVzZXIiLCJtZSIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsInVzZVN0YXRlIiwiZm9sbG93aW5nc0xpbWl0Iiwic2V0Rm9sbG93aW5nc0xpbWl0IiwiZm9sbG93ZXJzTGltaXQiLCJzZXRGb2xsb3dlcnNMaW1pdCIsInVzZVNXUiIsImZvbGxvd2luZ3NEYXRhIiwiZm9sbG93aW5nRXJyb3IiLCJlcnJvciIsImZvbGxvd2Vyc0RhdGEiLCJmb2xsb3dlckVycm9yIiwiY29uc29sZSIsImxvZyIsImxvYWRNb3JlRm9sbG93ZXJzIiwidXNlQ2FsbGJhY2siLCJwcmV2IiwibG9hZE1vcmVGb2xsb3dpbmdzIiwidHlwZSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsImZvbGxvd2luZ3MiLCJmb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBRUE7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsR0FBRDtBQUFBLFNBQVNDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVUYsR0FBVixFQUFlO0FBQUVHLG1CQUFlLEVBQUU7QUFBbkIsR0FBZixFQUEwQ0MsSUFBMUMsQ0FBK0MsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBbkI7QUFBQSxHQUEvQyxDQUFUO0FBQUEsQ0FBaEIsQyxDQUNBOzs7Q0FFQTs7QUFJQTs7OztBQUVBLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRUhDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRlI7QUFBQSxNQUVWQyxFQUZVLGdCQUVWQSxFQUZVOztBQUlsQixNQUFJLENBQUNBLEVBQUwsRUFBUztBQUNMLFdBQU8sSUFBUDtBQUNIOztBQUVEQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLEVBQUVELEVBQUUsSUFBSUEsRUFBRSxDQUFDRSxFQUFYLENBQUosRUFBb0I7QUFDaEJDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ0osRUFBRSxJQUFJQSxFQUFFLENBQUNFLEVBQVYsQ0FKTSxDQUFULENBUmtCLENBY2xCOztBQWRrQixrQkFlNEJHLHNEQUFRLENBQUMsQ0FBRCxDQWZwQztBQUFBLE1BZVhDLGVBZlc7QUFBQSxNQWVNQyxrQkFmTjs7QUFBQSxtQkFnQjBCRixzREFBUSxDQUFDLENBQUQsQ0FoQmxDO0FBQUEsTUFnQlhHLGNBaEJXO0FBQUEsTUFnQktDLGlCQWhCTDs7QUFBQSxnQkFpQnNDQyxtREFBTSx1REFBZ0RKLGVBQWhELEdBQW1FcEIsT0FBbkUsQ0FqQjVDO0FBQUEsTUFpQkp5QixjQWpCSSxXQWlCVmxCLElBakJVO0FBQUEsTUFpQm1CbUIsY0FqQm5CLFdBaUJZQyxLQWpCWjs7QUFBQSxpQkFrQm9DSCxtREFBTSxzREFBK0NGLGNBQS9DLEdBQWlFdEIsT0FBakUsQ0FsQjFDO0FBQUEsTUFrQko0QixhQWxCSSxZQWtCVnJCLElBbEJVO0FBQUEsTUFrQmtCc0IsYUFsQmxCLFlBa0JXRixLQWxCWDs7QUFvQmxCRyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUFpQ04sY0FBakM7QUFDQUssU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NILGFBQWhDLEVBckJrQixDQXVCbEI7O0FBQ0EsTUFBTUksaUJBQWlCLEdBQUdDLHlEQUFXLENBQUMsWUFBTTtBQUN4Q1YscUJBQWlCLENBQUMsVUFBQ1csSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBakI7QUFDSCxHQUZvQyxFQUVsQyxFQUZrQyxDQUFyQztBQUlBLE1BQU1DLGtCQUFrQixHQUFHRix5REFBVyxDQUFDLFlBQU07QUFDekNaLHNCQUFrQixDQUFDLFVBQUNhLElBQUQ7QUFBQSxhQUFVQSxJQUFJLEdBQUcsQ0FBakI7QUFBQSxLQUFELENBQWxCO0FBQ0gsR0FGcUMsRUFFbkMsRUFGbUMsQ0FBdEM7QUFJQW5CLHlEQUFTLENBQUMsWUFBTTtBQUNaTixZQUFRLENBQUM7QUFDTDJCLFVBQUksRUFBRUMscUVBQXNCQTtBQUR2QixLQUFELENBQVI7QUFHQTVCLFlBQVEsQ0FBQztBQUNMMkIsVUFBSSxFQUFFRSxzRUFBdUJBO0FBRHhCLEtBQUQsQ0FBUjtBQUdILEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDSTtBQUFBLDRCQUNJLHNFQUFDLGdEQUFEO0FBQUEsNkJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFLSSxzRUFBQyw2REFBRDtBQUFBLDhCQUNJLHNFQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUlJLHNFQUFDLDhEQUFEO0FBQVksY0FBTSxFQUFDLG9CQUFuQjtBQUF5QixZQUFJLEVBQUV4QixFQUFFLENBQUN5QixVQUFsQztBQUE4QyxtQkFBVyxFQUFFSixrQkFBM0Q7QUFBK0UsZUFBTyxFQUFFLENBQUNULGNBQUQsSUFBbUIsQ0FBQ0Q7QUFBNUc7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBS0ksc0VBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRVgsRUFBRSxDQUFDMEIsU0FBbEM7QUFBNkMsbUJBQVcsRUFBRVIsaUJBQTFEO0FBQTZFLGVBQU8sRUFBRSxDQUFDSCxhQUFELElBQWtCLENBQUNEO0FBQXpHO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMSjtBQUFBLGtCQURKO0FBZ0JILENBekREOztHQUFNcEIsTztVQUNlRSx1RCxFQUNGQyx1RCxFQWV5Q2EsMkMsRUFDRkEsMkM7OztLQWxCcERoQixPOztBQTRFU0Esc0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZmlsZS41ODI5NTBjMGI0NzZiMWIyMTI4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9BcHBMYXlvdXRcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTmlja25hbWVFZGl0Rm9ybSBmcm9tICcuLi9jb21wb25lbnRzL05pY2tuYW1lRWRpdEZvcm0nO1xyXG5pbXBvcnQgRm9sbG93TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL0ZvbGxvd0xpc3QnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoLCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHsgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIHVzZVN0YXRlLCB1c2VDYWxsYmFja1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgdXNlQ2FsbGJhY2sgIH0gZnJvbSBcInJlYWN0XCI7XHJcbi8vIGZldGNoZXIg7LaU6rCAXHJcbmNvbnN0IGZldGNoZXIgPSAodXJsKSA9PiBheGlvcy5nZXQodXJsLCB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9KS50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhKTtcclxuLy8gc3dyIOuqqOuTiCDsnoTtj6ztirggXHJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcclxuLy8gd3JhcHBlciDsnoTtj6ztirhcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSAnLi4vc3RvcmUvY29uZmlndXJlU3RvcmUnO1xyXG4vLyBheGlvc1xyXG5pbXBvcnQgeyBFTkQgfSBmcm9tICdyZWR1eC1zYWdhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCB7IG1lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGlmICghbWUpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmICghKG1lICYmIG1lLmlkKSkge1xyXG4gICAgICAgICAgICBSb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFttZSAmJiBtZS5pZF0pO1xyXG5cclxuICAgIC8vIDTspIQg7LaU6rCAXHJcbiAgICBjb25zdCBbZm9sbG93aW5nc0xpbWl0LCBzZXRGb2xsb3dpbmdzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcbiAgICBjb25zdCBbZm9sbG93ZXJzTGltaXQsIHNldEZvbGxvd2Vyc0xpbWl0XSA9IHVzZVN0YXRlKDMpO1xyXG4gICAgY29uc3QgeyBkYXRhOiBmb2xsb3dpbmdzRGF0YSwgZXJyb3I6IGZvbGxvd2luZ0Vycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2luZ3M/bGltaXQ9JHtmb2xsb3dpbmdzTGltaXR9YCwgZmV0Y2hlcik7XHJcbiAgICBjb25zdCB7IGRhdGE6IGZvbGxvd2Vyc0RhdGEsIGVycm9yOiBmb2xsb3dlckVycm9yIH0gPSB1c2VTV1IoYGh0dHA6Ly9sb2NhbGhvc3Q6MzA2NS91c2VyL2ZvbGxvd2Vycz9saW1pdD0ke2ZvbGxvd2Vyc0xpbWl0fWAsIGZldGNoZXIpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiZm9sbG93aW5nc0RhdGEgOiBcIiwgZm9sbG93aW5nc0RhdGEpO1xyXG4gICAgY29uc29sZS5sb2coXCJmb2xsb3dlcnNEYXRhIDogXCIsIGZvbGxvd2Vyc0RhdGEpO1xyXG5cclxuICAgIC8vIO2VqOyImCAy6rCcIOy2lOqwgFxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dlcnMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93ZXJzTGltaXQoKHByZXYpID0+IHByZXYgKyAzKTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBjb25zdCBsb2FkTW9yZUZvbGxvd2luZ3MgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0Rm9sbG93aW5nc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuuCtCDtlITroZztlYQgfCBOb2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgey8qIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOyeiSDrqqnroZ1cIiBkYXRhPXttZS5Gb2xsb3dpbmdzfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMIOuqqeuhnVwiIGRhdGE9e21lLkZvbGxvd2Vyc30gLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8Rm9sbG93TGlzdCBoZWFkZXI9XCLtjJTroZzsnolcIiBkYXRhPXttZS5mb2xsb3dpbmdzfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dpbmdzfSBsb2FkaW5nPXshZm9sbG93aW5nRXJyb3IgJiYgIWZvbGxvd2luZ3NEYXRhfSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7JuMXCIgZGF0YT17bWUuZm9sbG93ZXJzfSBvbkNsaWNrTW9yZT17bG9hZE1vcmVGb2xsb3dlcnN9IGxvYWRpbmc9eyFmb2xsb3dlckVycm9yICYmICFmb2xsb3dlcnNEYXRhfSAvPlxyXG5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBzdGFydCcpO1xyXG4gICAgY29uc29sZS5sb2coY29udGV4dC5yZXEuaGVhZGVycyk7XHJcbiAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4gICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4gICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4gICAgfVxyXG4gICAgY29udGV4dC5zdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogTE9BRF9VU0VSX1JFUVVFU1QsXHJcbiAgICB9KTtcclxuICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuICAgIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgZW5kJyk7XHJcbiAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
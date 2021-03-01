webpackHotUpdate_N_E("pages/profile",{

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
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "C:\\nodebird\\front\\pages\\profile.js",
    _this = undefined,
    _s = $RefreshSig$();







 // useState, useCallback

 // // fetcher 추가
// const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data);
// // swr 모듈 임포트 
// import useSWR from 'swr';
// wrapper 임포트

 // axios






var Profile = function Profile() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me,
      loadFollowingsDone = _useSelector.loadFollowingsDone;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followingsLimit = _useState[0],
      setFollowingsLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(3),
      followersLimit = _useState2[0],
      setFollowersLimit = _useState2[1]; // if (!me) {
  //     return null;
  // }


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
    if (!(me && me.id)) {
      next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
    }
  }, [me && me.id]);
  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    dispatch({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_USER_REQUEST"]
    });

    if (me && me.id) {
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWERS_REQUEST"],
        data: {
          limit: followingsLimit
        }
      });
      dispatch({
        type: _reducers_user__WEBPACK_IMPORTED_MODULE_6__["LOAD_FOLLOWINGS_REQUEST"],
        data: {
          limit: followersLimit
        }
      });
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])("title", {
        children: "\uB0B4 \uD504\uB85C\uD544 | NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_AppLayout__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_NicknameEditForm__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC789",
        data: me.Followings,
        onClickMore: loadMoreFollowings
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__["jsxDEV"])(_components_FollowList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        header: "\uD314\uB85C\uC6CC",
        data: me.Followers,
        onClickMore: loadMoreFollowings
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
}; // export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
//     console.log('getServerSideProps start');
//     console.log(context.req.headers);
//     const cookie = context.req ? context.req.headers.cookie : '';
//     axios.defaults.headers.Cookie = '';
//     if (context.req && cookie) {
//         axios.defaults.headers.Cookie = cookie;
//     }
//     //     type: LOAD_FOLLOWERS_REQUEST,
//     // });
//     // context.store.dispatch({
//     //     type: LOAD_FOLLOWINGS_REQUEST,
//     // });
//     context.store.dispatch(END);
//     console.log('getServerSideProps end');
//     await context.store.sagaTask.toPromise();
// });


_s(Profile, "A/6Wy7bnOgEK2bgiTR9QlcHwtCw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJQcm9maWxlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJ1c2VyIiwibWUiLCJsb2FkRm9sbG93aW5nc0RvbmUiLCJ1c2VTdGF0ZSIsImZvbGxvd2luZ3NMaW1pdCIsInNldEZvbGxvd2luZ3NMaW1pdCIsImZvbGxvd2Vyc0xpbWl0Iiwic2V0Rm9sbG93ZXJzTGltaXQiLCJsb2FkTW9yZUZvbGxvd2VycyIsInVzZUNhbGxiYWNrIiwicHJldiIsImxvYWRNb3JlRm9sbG93aW5ncyIsInVzZUVmZmVjdCIsImlkIiwiUm91dGVyIiwicHVzaCIsInR5cGUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJkYXRhIiwibGltaXQiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0NBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Q0FFQTs7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQixxQkFFaUJDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRjVCO0FBQUEsTUFFVkMsRUFGVSxnQkFFVkEsRUFGVTtBQUFBLE1BRU5DLGtCQUZNLGdCQUVOQSxrQkFGTTs7QUFBQSxrQkFJNEJDLHNEQUFRLENBQUMsQ0FBRCxDQUpwQztBQUFBLE1BSVhDLGVBSlc7QUFBQSxNQUlNQyxrQkFKTjs7QUFBQSxtQkFLMEJGLHNEQUFRLENBQUMsQ0FBRCxDQUxsQztBQUFBLE1BS1hHLGNBTFc7QUFBQSxNQUtLQyxpQkFMTCxrQkFPbEI7QUFDQTtBQUNBOzs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBR0MseURBQVcsQ0FBQyxZQUFNO0FBQ3hDRixxQkFBaUIsQ0FBQyxVQUFDRyxJQUFEO0FBQUEsYUFBVUEsSUFBSSxHQUFHLENBQWpCO0FBQUEsS0FBRCxDQUFqQjtBQUNILEdBRm9DLEVBRWxDLEVBRmtDLENBQXJDO0FBSUEsTUFBTUMsa0JBQWtCLEdBQUdGLHlEQUFXLENBQUMsWUFBTTtBQUN6Q0osc0JBQWtCLENBQUMsVUFBQ0ssSUFBRDtBQUFBLGFBQVVBLElBQUksR0FBRyxDQUFqQjtBQUFBLEtBQUQsQ0FBbEI7QUFDSCxHQUZxQyxFQUVuQyxFQUZtQyxDQUF0QztBQUlBRSx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJLEVBQUVYLEVBQUUsSUFBSUEsRUFBRSxDQUFDWSxFQUFYLENBQUosRUFBb0I7QUFDaEJDLHdEQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0g7QUFDSixHQUpRLEVBSU4sQ0FBQ2QsRUFBRSxJQUFJQSxFQUFFLENBQUNZLEVBQVYsQ0FKTSxDQUFUO0FBTUFELHlEQUFTLENBQUMsWUFBTTtBQUVaaEIsWUFBUSxDQUFDO0FBQ0xvQixVQUFJLEVBQUVDLGdFQUFpQkE7QUFEbEIsS0FBRCxDQUFSOztBQUlBLFFBQUloQixFQUFFLElBQUlBLEVBQUUsQ0FBQ1ksRUFBYixFQUFpQjtBQUNiakIsY0FBUSxDQUFDO0FBQ0xvQixZQUFJLEVBQUVFLHFFQUREO0FBRUxDLFlBQUksRUFBRTtBQUNGQyxlQUFLLEVBQUVoQjtBQURMO0FBRkQsT0FBRCxDQUFSO0FBTUFSLGNBQVEsQ0FBQztBQUNMb0IsWUFBSSxFQUFFSyxzRUFERDtBQUVMRixZQUFJLEVBQUU7QUFDRkMsZUFBSyxFQUFFZDtBQURMO0FBRkQsT0FBRCxDQUFSO0FBTUg7QUFDSixHQXBCUSxFQW9CTixFQXBCTSxDQUFUO0FBc0JBLHNCQUNJO0FBQUEsNEJBQ0ksc0VBQUMsZ0RBQUQ7QUFBQSw2QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQUtJLHNFQUFDLDZEQUFEO0FBQUEsOEJBQ0ksc0VBQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUksc0VBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRUwsRUFBRSxDQUFDcUIsVUFBbEM7QUFBOEMsbUJBQVcsRUFBRVg7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKLGVBR0ksc0VBQUMsOERBQUQ7QUFBWSxjQUFNLEVBQUMsb0JBQW5CO0FBQXlCLFlBQUksRUFBRVYsRUFBRSxDQUFDc0IsU0FBbEM7QUFBNkMsbUJBQVcsRUFBRVo7QUFBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUEsa0JBREo7QUFhSCxDQTVERCxDLENBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztHQWpGTWhCLE87VUFDZUUsdUQsRUFDa0JDLHVEOzs7S0FGakNILE87QUFtRlNBLHNFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2ZpbGUuZGY2ZGNiYzQ4Zjg3YWFiNzFkYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQXBwTGF5b3V0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IE5pY2tuYW1lRWRpdEZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9OaWNrbmFtZUVkaXRGb3JtJztcclxuaW1wb3J0IEZvbGxvd0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Gb2xsb3dMaXN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIExPQURfRk9MTE9XSU5HU19SRVFVRVNULCBMT0FEX1VTRVJfUkVRVUVTVCB9IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5cclxuLy8gdXNlU3RhdGUsIHVzZUNhbGxiYWNrXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyAvLyBmZXRjaGVyIOy2lOqwgFxyXG4vLyBjb25zdCBmZXRjaGVyID0gKHVybCkgPT4gYXhpb3MuZ2V0KHVybCwgeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSkudGhlbigocmVzdWx0KSA9PiByZXN1bHQuZGF0YSk7XHJcbi8vIC8vIHN3ciDrqqjrk4gg7J6E7Y+s7Yq4IFxyXG4vLyBpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbi8vIHdyYXBwZXIg7J6E7Y+s7Yq4XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcclxuLy8gYXhpb3NcclxuaW1wb3J0IHsgRU5EIH0gZnJvbSAncmVkdXgtc2FnYSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBQcm9maWxlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc3QgeyBtZSwgbG9hZEZvbGxvd2luZ3NEb25lIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnVzZXIpO1xyXG5cclxuICAgIGNvbnN0IFtmb2xsb3dpbmdzTGltaXQsIHNldEZvbGxvd2luZ3NMaW1pdF0gPSB1c2VTdGF0ZSgzKTtcclxuICAgIGNvbnN0IFtmb2xsb3dlcnNMaW1pdCwgc2V0Rm9sbG93ZXJzTGltaXRdID0gdXNlU3RhdGUoMyk7XHJcblxyXG4gICAgLy8gaWYgKCFtZSkge1xyXG4gICAgLy8gICAgIHJldHVybiBudWxsO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbnN0IGxvYWRNb3JlRm9sbG93ZXJzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2Vyc0xpbWl0KChwcmV2KSA9PiBwcmV2ICsgMyk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgY29uc3QgbG9hZE1vcmVGb2xsb3dpbmdzID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgICAgIHNldEZvbGxvd2luZ3NMaW1pdCgocHJldikgPT4gcHJldiArIDMpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKCEobWUgJiYgbWUuaWQpKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW21lICYmIG1lLmlkXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1lICYmIG1lLmlkKSB7XHJcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XRVJTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGZvbGxvd2luZ3NMaW1pdFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGltaXQ6IGZvbGxvd2Vyc0xpbWl0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPuuCtCDtlITroZztlYQgfCBOb2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxBcHBMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8Tmlja25hbWVFZGl0Rm9ybSAvPlxyXG4gICAgICAgICAgICAgICAgPEZvbGxvd0xpc3QgaGVhZGVyPVwi7YyU66Gc7J6JXCIgZGF0YT17bWUuRm9sbG93aW5nc30gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgICAgIDxGb2xsb3dMaXN0IGhlYWRlcj1cIu2MlOuhnOybjFwiIGRhdGE9e21lLkZvbGxvd2Vyc30gb25DbGlja01vcmU9e2xvYWRNb3JlRm9sbG93aW5nc30gLz5cclxuICAgICAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuXHJcbi8vIGV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHMgPSB3cmFwcGVyLmdldFNlcnZlclNpZGVQcm9wcyhhc3luYyAoY29udGV4dCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2dldFNlcnZlclNpZGVQcm9wcyBzdGFydCcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coY29udGV4dC5yZXEuaGVhZGVycyk7XHJcbi8vICAgICBjb25zdCBjb29raWUgPSBjb250ZXh0LnJlcSA/IGNvbnRleHQucmVxLmhlYWRlcnMuY29va2llIDogJyc7XHJcbi8vICAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLkNvb2tpZSA9ICcnO1xyXG4vLyAgICAgaWYgKGNvbnRleHQucmVxICYmIGNvb2tpZSkge1xyXG4vLyAgICAgICAgIGF4aW9zLmRlZmF1bHRzLmhlYWRlcnMuQ29va2llID0gY29va2llO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIC8vICAgICB0eXBlOiBMT0FEX0ZPTExPV0VSU19SRVFVRVNULFxyXG4vLyAgICAgLy8gfSk7XHJcbi8vICAgICAvLyBjb250ZXh0LnN0b3JlLmRpc3BhdGNoKHtcclxuLy8gICAgIC8vICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCxcclxuLy8gICAgIC8vIH0pO1xyXG5cclxuLy8gICAgIGNvbnRleHQuc3RvcmUuZGlzcGF0Y2goRU5EKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdnZXRTZXJ2ZXJTaWRlUHJvcHMgZW5kJyk7XHJcbi8vICAgICBhd2FpdCBjb250ZXh0LnN0b3JlLnNhZ2FUYXNrLnRvUHJvbWlzZSgpO1xyXG4vLyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGU7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9
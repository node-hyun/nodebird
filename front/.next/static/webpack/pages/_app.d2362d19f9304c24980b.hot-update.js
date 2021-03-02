webpackHotUpdate_N_E("pages/_app",{

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.esm.js");


var _initialState;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var initialState = (_initialState = {
  me: null,
  logInLoading: false,
  // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  followLoading: false,
  // 팔로우 시도중
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  signUpLoading: false,
  // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null
}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "unfollowLoading", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "unfollowDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "unfollowError", null), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "removeFollowerLoading", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "removeFollowerDone", false), Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_initialState, "removeFollowerError", null), _initialState);
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
var FOLLOW_REQUEST = 'FOLLOW_REQUEST';
var FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
var FOLLOW_FAILURE = 'FOLLOW_FAILURE';
var UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
var UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
var UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

var dummyUser = function dummyUser(data) {
  return _objectSpread(_objectSpread({}, data), {}, {
    // saga에서 넘어온 데이터
    nickname: '제로초',
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      id: 1,
      nickname: '제로초'
    }, {
      id: 2,
      nickname: '케인'
    }, {
      id: 3,
      nickname: '네이마르'
    }],
    Followers: [{
      id: 4,
      nickname: 'zerocho'
    }, {
      id: 5,
      nickname: 'linux'
    }, {
      id: 6,
      nickname: '이재용'
    }]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return Object(immer__WEBPACK_IMPORTED_MODULE_2__["default"])(state, function (draft) {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.loginDone = false;
        draft.lognError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logIndone = true;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutDone = false;
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift(_objectSpread({
          id: action.data
        }, state.me.Posts));
        break;

      case REMOVE_POST_OF_ME:
        // draft.me.Posts.filter((v) => v.id !== action.data);
        draft.me.Posts.filter(function (v) {
          return v.id !== action.data.PostId;
        });
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followError = null;
        draft.followDone = false;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true; // draft.me.Followings.push({ id: action.data });

        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowError = null;
        draft.unfollowDone = false;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true; // draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);

        draft.me.Followings = draft.me.Followings.filter(function (v) {
          return v.id !== action.data.UserId;
        });
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.me = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollowingsLoading = true;
        draft.loadFollowingsError = null;
        draft.loadFollowingsDone = false;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollowingsLoading = false;
        draft.me.Followings = action.data;
        draft.loadFollowingsDone = true;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollowingsLoading = false;
        draft.loadFollowingsError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersError = null;
        draft.loadFollowersDone = false;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.me.Followers = action.data;
        draft.loadFollowersDone = true;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      default:
        // return state;
        break;
    }
  });
}); // export default reducer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcmVkdWNlcnMvdXNlci5qcyJdLCJuYW1lcyI6WyJpbml0aWFsU3RhdGUiLCJtZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsImR1bW15VXNlciIsImRhdGEiLCJuaWNrbmFtZSIsImlkIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwic3RhdGUiLCJhY3Rpb24iLCJwcm9kdWNlIiwiZHJhZnQiLCJ0eXBlIiwibG9naW5Eb25lIiwibG9nbkVycm9yIiwibG9nSW5kb25lIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmlsdGVyIiwidiIsIlBvc3RJZCIsInB1c2giLCJVc2VySWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsWUFBWTtBQUNyQkMsSUFBRSxFQUFFLElBRGlCO0FBRXJCQyxjQUFZLEVBQUUsS0FGTztBQUVBO0FBQ3JCQyxXQUFTLEVBQUUsS0FIVTtBQUlyQkMsWUFBVSxFQUFFLElBSlM7QUFNckJDLGVBQWEsRUFBRSxLQU5NO0FBTUM7QUFDdEJDLFlBQVUsRUFBRSxLQVBTO0FBUXJCQyxhQUFXLEVBQUUsSUFSUTtBQVVyQkMsZUFBYSxFQUFFLEtBVk07QUFVQztBQUN0QkMsWUFBVSxFQUFFLEtBWFM7QUFZckJDLGFBQVcsRUFBRSxJQVpRO0FBY3JCQyxpQkFBZSxFQUFFLEtBZEk7QUFjRztBQUN4QkMsY0FBWSxFQUFFLEtBZk87QUFnQnJCQyxlQUFhLEVBQUUsSUFoQk07QUFrQnJCQyxlQUFhLEVBQUUsS0FsQk07QUFrQkM7QUFDdEJDLFlBQVUsRUFBRSxLQW5CUztBQW9CckJDLGFBQVcsRUFBRSxJQXBCUTtBQXNCckJDLGlCQUFlLEVBQUUsS0F0Qkk7QUFzQkc7QUFDeEJDLGNBQVksRUFBRSxLQXZCTztBQXdCckJDLGVBQWEsRUFBRSxJQXhCTTtBQTBCckJDLHVCQUFxQixFQUFFLEtBMUJGO0FBMkJyQkMsb0JBQWtC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cUJBQU4sR0FBOEIsSUFBOUI7QUFDQTBDLGFBQUssQ0FBQ3hDLG1CQUFOLEdBQTRCLElBQTVCO0FBQ0F3QyxhQUFLLENBQUN6QyxrQkFBTixHQUEyQixLQUEzQjtBQUNBOztBQUNKLFdBQUswQix1QkFBTDtBQUNJZSxhQUFLLENBQUMxQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBMEMsYUFBSyxDQUFDN0QsRUFBTixDQUFTd0QsVUFBVCxHQUFzQkcsTUFBTSxDQUFDUCxJQUE3QjtBQUNBUyxhQUFLLENBQUN6QyxrQkFBTixHQUEyQixJQUEzQjtBQUNBOztBQUNKLFdBQUsyQix1QkFBTDtBQUNJYyxhQUFLLENBQUMxQyxxQkFBTixHQUE4QixLQUE5QjtBQUNBMEMsYUFBSyxDQUFDeEMsbUJBQU4sR0FBNEJzQyxNQUFNLENBQUNPLEtBQW5DO0FBQ0E7O0FBQ0osV0FBS2xCLHNCQUFMO0FBQ0lhLGFBQUssQ0FBQ3ZDLG9CQUFOLEdBQTZCLElBQTdCO0FBQ0F1QyxhQUFLLENBQUNyQyxrQkFBTixHQUEyQixJQUEzQjtBQUNBcUMsYUFBSyxDQUFDdEMsaUJBQU4sR0FBMEIsS0FBMUI7QUFDQTs7QUFDSixXQUFLMEIsc0JBQUw7QUFDSVksYUFBSyxDQUFDdkMsb0JBQU4sR0FBNkIsS0FBN0I7QUFDQXVDLGFBQUssQ0FBQzdELEVBQU4sQ0FBU3lELFNBQVQsR0FBcUJFLE1BQU0sQ0FBQ1AsSUFBNUI7QUFDQVMsYUFBSyxDQUFDdEMsaUJBQU4sR0FBMEIsSUFBMUI7QUFDQTs7QUFDSixXQUFLMkIsc0JBQUw7QUFDSVcsYUFBSyxDQUFDdkMsb0JBQU4sR0FBNkIsS0FBN0I7QUFDQXVDLGFBQUssQ0FBQ3JDLGtCQUFOLEdBQTJCbUMsTUFBTSxDQUFDTyxLQUFsQztBQUNBOztBQUVKO0FBQ0k7QUFDQTtBQW5JUjtBQXFJSCxHQXRJYSxDQUFkO0FBdUlILENBeElELEUsQ0EwSUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5kMjM2MmQxOWY5MzA0YzI0OTgwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FmZXR5Q2VydGlmaWNhdGVUd29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWU6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOiBudWxsLCBcclxuXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsIC8vIHNhZ2Hsl5DshJwg64SY7Ja07JioIOuNsOydtO2EsFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbeyBpZDogMSwgbmlja25hbWU6ICfsoJzroZzstIgnIH0sIHsgaWQ6IDIsIG5pY2tuYW1lOiAn7LyA7J24JyB9LCB7IGlkOiAzLCBuaWNrbmFtZTogJ+uEpOydtOuniOultCcgfV0sXHJcbiAgICBGb2xsb3dlcnM6IFt7IGlkOiA0LCBuaWNrbmFtZTogJ3plcm9jaG8nIH0sIHsgaWQ6IDUsIG5pY2tuYW1lOiAnbGludXgnIH0sIHsgaWQ6IDYsIG5pY2tuYW1lOiAn7J207J6s7JqpJyB9XSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9naW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2duRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSwgLi4uc3RhdGUubWUuUG9zdHMgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBTSUdOX1VQX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0VSU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\nodebird\\front\\pages\\_app.js";




 // import withReduxSaga from 'next-redux-saga';




const NodeBird = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("meta", {
        charSet: "utf8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)]
  }, void 0, true);
};

NodeBird.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType
}; // export default wrapper.withRedux(NodeBird);
// export default wrapper.withRedux(withReduxSaga(NodeBird));

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__["default"].withRedux(NodeBird));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ "./reducers/post.js");



 // const rootReducer = combineReducers({
//     index: (state = {}, action) => {
//         switch (action.type) {
//             case HYDRATE:
//                 console.log("HYDRATE", action);
//                 return { ...state, ...action.payload };
//             default:
//                 return state;
//         }
//     },
//     user,
//     post,
// });

const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
      console.log('HYDRATE', action);
      return action.payload;

    default:
      {
        const combinedReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
          user: _user__WEBPACK_IMPORTED_MODULE_2__["default"],
          post: _post__WEBPACK_IMPORTED_MODULE_3__["default"]
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, SEARCH_POSTS_REQUEST, SEARCH_POSTS_SUCCESS, SEARCH_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS_REQUEST", function() { return SEARCH_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS_SUCCESS", function() { return SEARCH_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_POSTS_FAILURE", function() { return SEARCH_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_REQUEST", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_SUCCESS", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_IMAGES_FAILURE", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_IMAGE", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_REQUEST", function() { return DELETE_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_SUCCESS", function() { return DELETE_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_COMMENT_FAILURE", function() { return DELETE_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_REQUEST", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_SUCCESS", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIKE_POST_FAILURE", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_REQUEST", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_SUCCESS", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNLIKE_POST_FAILURE", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_REQUEST", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_SUCCESS", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RETWEET_FAILURE", function() { return RETWEET_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  mainPosts: [],
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  deleteCommentLoading: false,
  deleteCommentDone: false,
  deleteCommentError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unlikePostLoading: false,
  unlikePostDone: false,
  unlikePostError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  searchPostsLoading: false,
  searchPostsDone: false,
  searchPostsError: null,
  imagePaths: [],
  hasMorePosts: true
}; // 액션 추가

const SEARCH_POSTS_REQUEST = 'SEARCH_POSTS_REQUEST';
const SEARCH_POSTS_SUCCESS = 'SEARCH_POSTS_SUCCESS';
const SEARCH_POSTS_FAILURE = 'SEARCH_POSTS_FAILURE';
const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
const ADD_POST_FAILURE = 'ADD_POST_FAILURE'; // 댓글 추가

const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';
const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
const REMOVE_IMAGE = 'REMOVE_IMAGE';
const DELETE_COMMENT_REQUEST = 'DELETE_COMMENT_REQUEST';
const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
const DELETE_COMMENT_FAILURE = 'DELETE_COMMENT_FAILURE';
const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
const RETWEET_REQUEST = 'RETWEET_REQUEST';
const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
const RETWEET_FAILURE = 'RETWEET_FAILURE';
/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addCommentError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = []; // draft.mainPosts.unshift(dummyPost(action.data));

        draft.mainPosts.unshift(action.data);
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.PostId);
        post.Comments.unshift(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;

      case ADD_COMMENT_FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          addCommentLoading: false,
          addCommentError: action.error
        });

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          // draft.imagePaths = draft.action.data;
          draft.imagePaths.unshift(action.data);
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      case DELETE_COMMENT_REQUEST:
        draft.delteCommentLoading = false;
        draft.delteCommentDone = false;
        draft.delteCommentError = null;
        break;

      case DELETE_COMMENT_SUCCESS:
        draft.deleteCommentLoading = false;
        draft.delteCommentDone = true;
        const index = draft.mainPosts.findIndex(v => v.id === action.data.PostId);
        const CommentsForDelete = draft.mainPosts[index].Comments;
        draft.mainPosts[index].Comments = CommentsForDelete.filter(v => v.id !== action.data.CommentId);
        break;

      case DELETE_COMMENT_FAILURE:
        return _objectSpread(_objectSpread({}, state), {}, {
          delteCommentLoading: false,
          delteCommentError: action.error
        });

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          draft.likePostLoading = false;
          draft.likePostDone = true;
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unlikePostLoading = true;
        draft.unlikePostDone = false;
        draft.unlikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unlikePostLoading = false;
          draft.unlikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unlikePostLoading = false;
        draft.unlikePostError = action.error;
        break;

      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case SEARCH_POSTS_REQUEST:
        draft.searchPostsLoading = true;
        draft.searchPostsDone = false;
        break;

      case SEARCH_POSTS_SUCCESS:
        draft.searchPostsLoading = false;
        draft.searchPostsDone = true;
        draft.mainPosts = action.data;
        draft.hasMorePosts = action.data.length === 10;
        break;

      case SEARCH_POSTS_FAILURE:
        draft.searchPostsLoading = false;
        draft.searchPostsError = action.error;
        break;

      default:
        return state;
    }
  });
}); // export default reducer;

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
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
};
const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
const LOG_IN_FAILURE = 'LOG_IN_FAILURE';
const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
const FOLLOW_FAILURE = 'FOLLOW_FAILURE';
const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';
const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

const dummyUser = data => _objectSpread(_objectSpread({}, data), {}, {
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

/* harmony default export */ __webpack_exports__["default"] = ((state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
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
        draft.me.Posts.filter(v => v.id !== action.data.PostId);
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

        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
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

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./sagas/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);




axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = 'http://127.0.0.1:3065';
axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.withCredentials = true;
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_1__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_2__["default"])]);
}

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");

 // import shortId from 'shortid';


 // add your api 1122

function SearchPostsAPI(data) {
  console.log('data : ', data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/search/posts/${data.search_word}/${data.lastId || 0}?`);
}

function* searchPosts(action) {
  try {
    console.log("action.data : ", action.data);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(SearchPostsAPI, action.data);
    console.log("result for SearchPostsAPI : ", result);
    console.log("result for SearchPostsAPI : ", result.data.length);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log("error : ", err);
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function retweetAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data}/retweet`);
}

function* retweet(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(retweetAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_FAILURE"],
      error: err.response.data
    });
  }
}

function addPostAPI(data) {
  // console.log("data for posting at saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post', data);
}

function* addPost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addPostAPI, action.data);
    console.log("result for posting : ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: result.data.id
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function removePostAPI(data) {
  // return axios.delete('/api/post', data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    // yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removePostAPI, action.data);
    console.log("result from backend, postId 확인 하기 : ", result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      // data: action.data,
      data: result.data
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      // data: action.data,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data
    });
  }
}

function addCommentAPI(data) {
  console.log("data from saga for add comment : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  console.log("addComent action : ", action.data);

  try {
    // yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(addCommentAPI, action.data);
    console.log("result(response from backend from insert comment): ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.log("댓글 에러 : ", err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data
    });
  }
}

function loadPostsAPI(lastId) {
  // return axios.get('/posts', data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadPostsAPI, action.lastId);
    console.log("result for loadPostsAPI : ", result);
    console.log("result for loadPostsAPI : ", result.data.length);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function uploadImagesAPI(data) {
  console.log("data 확인 from saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/post/images', data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(uploadImagesAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_FAILURE"],
      error: err.response.data
    });
  }
}

function deleteCommentAPI(data) {
  console.log("data 확인 from saga : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`post/comment/${data.PostId}/${data.CommentId}`);
}

function* deleteComment(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(deleteCommentAPI, action.data);
    console.log("삭제에 대한 응답 : ", result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_SUCCESS"],
      // 라우터에서 댓글 삭제한뒤 PostId와 CommentId 리턴 
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_FAILURE"],
      error: err.response.data
    });
  }
}

function likePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(likePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function unlikePostAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unlikePostAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* watchRemovePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddPost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchAddComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchUploadImages() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_IMAGES_REQUEST"], uploadImages);
}

function* watchDeleteComment() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["DELETE_COMMENT_REQUEST"], deleteComment);
}

function* watchLikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["LIKE_POST_REQUEST"], likePost);
}

function* watchUnlikePost() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["UNLIKE_POST_REQUEST"], unlikePost);
}

function* watchRetweet() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["RETWEET_REQUEST"], retweet);
}

function* watchSearchPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["SEARCH_POSTS_REQUEST"], searchPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchDeleteComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchPosts)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);




function loadFollowersAPI(data) {
  console.log("data from loadFollowersAPI: ", data); // return axios.get(`/user/followers?limit=${data.limit || 3}`, data);

  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user/followers', data);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowersAPI, action.data);
    console.log("result from saga for loadFollowersAPI:", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_FAILURE"],
      error: err.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  console.log("data from loadFollowingsAPI: ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/followings`, data);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadFollowingsAPI, action.data);
    console.log("result from saga for loadFollowersAPI:", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_FAILURE"],
      error: err.response.data
    });
  }
}

function signUpAPI(data) {
  // console.log("saga signUpAPI 실행 확인 회원 가입 정보는 => ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user', data);
}

function* signUp(action) {
  try {
    // yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(signUpAPI, action.data);
    console.log("회원 가입 응답 result : ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: err.response.data
    });
  }
}

function followAPI(data) {
  // return axios.post('/api/follow');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    // yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(followAPI, action.data);
    console.log("result for followAPI from backend : ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"],
      // data: action.data,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function unfollowAPI(data) {
  // return axios.post('/api/unfollow');
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/${data}/follow`);
}

function* unfollow(action) {
  try {
    // yield delay(1000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(unfollowAPI, action.data);
    console.log("result for unfollowAPI from backend : ", result);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"],
      // data: action.data,
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"],
      error: err.response.data
    });
  }
}

function logInAPI(data) {
  console.log("로그인 데이터 to 서버 from saga: ", data); // return axios.post('/api/login', data);

  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/login', data);
}

function* logIn(action) {
  try {
    // yield delay(2000);
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logInAPI, action.data);
    console.log("result.data(from server) : ", result.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      // data: action.data,
      data: result.data
    });
  } catch (err) {
    console.log("로그인 에러 확인 from saga : ", err);
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: err.response.data
    });
  }
}

function logOutAPI(data) {
  // return axios.post('/api/login', data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/user/logout', data);
}

function* logOut(action) {
  try {
    console.log('saga logout'); // yield delay(2000);

    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(logOutAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"]
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user');
}

function* loadUser(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILURE"],
      error: err.response.data
    });
  }
}

function* watchLogOut() {
  console.log("saga watch 실행 check");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logOut);
}

function* watchLogIn() {
  console.log("saga watch 실행 check");
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], logIn);
}

function* watchUnfollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"], unfollow);
}

function* watchFollow() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"], follow);
}

function* watchSignUp() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signUp);
}

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"], loadUser);
}

function* watchLoadFollowers() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWERS_REQUEST"], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_FOLLOWINGS_REQUEST"], loadFollowings);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");





;


const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();
  const middlewares = [sagaMiddleware];
  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwiZGVsZXRlQ29tbWVudExvYWRpbmciLCJkZWxldGVDb21tZW50RG9uZSIsImRlbGV0ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsInNlYXJjaFBvc3RzTG9hZGluZyIsInNlYXJjaFBvc3RzRG9uZSIsInNlYXJjaFBvc3RzRXJyb3IiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiU0VBUkNIX1BPU1RTX1JFUVVFU1QiLCJTRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIlNFQVJDSF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiREVMRVRFX0NPTU1FTlRfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1NVQ0NFU1MiLCJERUxFVEVfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImRhdGEiLCJlcnJvciIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJDb21tZW50cyIsImZpbHRlciIsImNvbmNhdCIsImxlbmd0aCIsImkiLCJkZWx0ZUNvbW1lbnRMb2FkaW5nIiwiZGVsdGVDb21tZW50RG9uZSIsImRlbHRlQ29tbWVudEVycm9yIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJDb21tZW50c0ZvckRlbGV0ZSIsIkNvbW1lbnRJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJtZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwiTE9HX0lOX1JFUVVFU1QiLCJMT0dfSU5fU1VDQ0VTUyIsIkxPR19JTl9GQUlMVVJFIiwiTE9HX09VVF9SRVFVRVNUIiwiTE9HX09VVF9TVUNDRVNTIiwiTE9HX09VVF9GQUlMVVJFIiwiQUREX1BPU1RfVE9fTUUiLCJSRU1PVkVfUE9TVF9PRl9NRSIsIkZPTExPV19SRVFVRVNUIiwiRk9MTE9XX1NVQ0NFU1MiLCJGT0xMT1dfRkFJTFVSRSIsIlVORk9MTE9XX1JFUVVFU1QiLCJVTkZPTExPV19TVUNDRVNTIiwiVU5GT0xMT1dfRkFJTFVSRSIsIlNJR05fVVBfUkVRVUVTVCIsIlNJR05fVVBfU1VDQ0VTUyIsIlNJR05fVVBfRkFJTFVSRSIsIkxPQURfVVNFUl9SRVFVRVNUIiwiTE9BRF9VU0VSX1NVQ0NFU1MiLCJMT0FEX1VTRVJfRkFJTFVSRSIsIkxPQURfRk9MTE9XSU5HU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSIsIkxPQURfRk9MTE9XRVJTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0VSU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSIsImR1bW15VXNlciIsIm5pY2tuYW1lIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5Eb25lIiwibG9nbkVycm9yIiwibG9nSW5kb25lIiwiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiU2VhcmNoUG9zdHNBUEkiLCJnZXQiLCJzZWFyY2hfd29yZCIsImxhc3RJZCIsInNlYXJjaFBvc3RzIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsImVyciIsInJlc3BvbnNlIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJkZWxldGVDb21tZW50QVBJIiwiZGVsZXRlQ29tbWVudCIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoUmVtb3ZlUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoRGVsZXRlQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFNlYXJjaFBvc3RzIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJsb2FkVXNlckFQSSIsImxvYWRVc2VyIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaExvZ0luIiwid2F0Y2hVbmZvbGxvdyIsIndhdGNoRm9sbG93Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Ozs7QUFJQSxNQUFNQSxRQUFR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LCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLG9DIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbi8vIGltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gJ25leHQtcmVkdXgtc2FnYSc7XHJcblxyXG5cclxuXHJcbmNvbnN0IE5vZGVCaXJkID0gKHsgQ29tcG9uZW50IH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmOFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxDb21wb25lbnQgLz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XHJcbiAgICBDb21wb25lbnQ6IFByb3BUeXBlcy5lbGVtZW50VHlwZSxcclxufTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpO1xyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7XHJcblxyXG5cclxuIiwiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB1c2VyIGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IHBvc3QgZnJvbSBcIi4vcG9zdFwiO1xyXG5cclxuXHJcbi8vIGNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuLy8gICAgIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbi8vICAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4vLyAgICAgICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbi8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4vLyAgICAgICAgICAgICBkZWZhdWx0OlxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0sXHJcbi8vICAgICB1c2VyLFxyXG4vLyAgICAgcG9zdCxcclxuLy8gfSk7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsIGFjdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgICBkZWZhdWx0OiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmVkUmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbiAgICAgICAgICAgICAgICB1c2VyLFxyXG4gICAgICAgICAgICAgICAgcG9zdCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcbmltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQgZmFrZXIgZnJvbSAnZmFrZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgICBtYWluUG9zdHM6IFtdLFxyXG4gICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGFkZENvbW1lbnRFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZW1vdmVQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVwbG9hZEltYWdlc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRG9uZTogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBkZWxldGVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBkZWxldGVDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBkZWxldGVDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgbGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBsaWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHVubGlrZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHVubGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICByZXR3ZWV0TG9hZGluZzogZmFsc2UsXHJcbiAgICByZXR3ZWV0RG9uZTogZmFsc2UsXHJcbiAgICByZXR3ZWV0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2VhcmNoUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHNlYXJjaFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBzZWFyY2hQb3N0c0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGltYWdlUGF0aHM6IFtdLFxyXG4gICAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG59O1xyXG5cclxuLy8g7JWh7IWYIOy2lOqwgFxyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTX1JFUVVFU1QgPSAnU0VBUkNIX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTX1NVQ0NFU1MgPSAnU0VBUkNIX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0VBUkNIX1BPU1RTX0ZBSUxVUkUgPSAnU0VBUkNIX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1JFUVVFU1QgPSAnQUREX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9TVUNDRVNTID0gJ0FERF9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9ICdBRERfUE9TVF9GQUlMVVJFJztcclxuXHJcbi8vIOuMk+q4gCDstpTqsIBcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1JFUVVFU1QgPSAnQUREX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gJ0FERF9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfRkFJTFVSRSA9ICdBRERfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9SRVFVRVNUID0gJ1JFTU9WRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfU1VDQ0VTUyA9ICdSRU1PVkVfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSAnUkVNT1ZFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19SRVFVRVNUID0gJ0xPQURfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9ICdMT0FEX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfUkVRVUVTVCA9ICdVUExPQURfSU1BR0VTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19TVUNDRVNTID0gJ1VQTE9BRF9JTUFHRVNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX0ZBSUxVUkUgPSAnVVBMT0FEX0lNQUdFU19GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JTUFHRSA9ICdSRU1PVkVfSU1BR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX1JFUVVFU1QgPSAnREVMRVRFX0NPTU1FTlRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9TVUNDRVNTID0gJ0RFTEVURV9DT01NRU5UX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfRkFJTFVSRSA9ICdERUxFVEVfQ09NTUVOVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfUkVRVUVTVCA9ICdMSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfU1VDQ0VTUyA9ICdMSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMSUtFX1BPU1RfRkFJTFVSRSA9ICdMSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfUkVRVUVTVCA9ICdVTkxJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1NVQ0NFU1MgPSAnVU5MSUtFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9GQUlMVVJFID0gJ1VOTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfUkVRVUVTVCA9ICdSRVRXRUVUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9TVUNDRVNTID0gJ1JFVFdFRVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX0ZBSUxVUkUgPSAnUkVUV0VFVF9GQUlMVVJFJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0LkNvbW1lbnRzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgYWRkQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocy51bnNoaWZ0KGFjdGlvbi5kYXRhKVxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0lNQUdFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IGRyYWZ0LmltYWdlUGF0aHMuZmlsdGVyKCh2LCBpKSA9PiBpICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX0NPTU1FTlRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbHRlQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbHRlQ29tbWVudERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbHRlQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsdGVDb21tZW50RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZClcclxuICAgICAgICAgICAgICAgIGNvbnN0IENvbW1lbnRzRm9yRGVsZXRlID0gZHJhZnQubWFpblBvc3RzW2luZGV4XS5Db21tZW50cztcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0c1tpbmRleF0uQ29tbWVudHMgPSBDb21tZW50c0ZvckRlbGV0ZS5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLkNvbW1lbnRJZClcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRlQ29tbWVudEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzID0gcG9zdC5MaWtlcnMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Vc2VySWQpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVOTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNFQVJDSF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0VBUkNIX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGFjdGlvbi5kYXRhLmxlbmd0aCA9PT0gMTA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTRUFSQ0hfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IFNhZmV0eUNlcnRpZmljYXRlVHdvVG9uZSB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1lOiBudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZFVzZXJMb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkVXNlckRvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFVzZXJFcnJvcjogbnVsbCwgXHJcblxyXG4gICAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSAnTE9HX0lOX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX1NVQ0NFU1MgPSAnTE9HX0lOX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX0lOX0ZBSUxVUkUgPSAnTE9HX0lOX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9SRVFVRVNUID0gJ0xPR19PVVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSAnTE9HX09VVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfRkFJTFVSRSA9ICdMT0dfT1VUX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSAnQUREX1BPU1RfVE9fTUUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfT0ZfTUUgPSAnUkVNT1ZFX1BPU1RfT0ZfTUUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gJ0ZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19TVUNDRVNTID0gJ0ZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEZPTExPV19GQUlMVVJFID0gJ0ZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9SRVFVRVNUID0gJ1NJR05fVVBfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1NVQ0NFU1MgPSAnU0lHTl9VUF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9ICdTSUdOX1VQX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCA9ICdMT0FEX0ZPTExPV0VSU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XRVJTX0ZBSUxVUkUnO1xyXG5cclxuY29uc3QgZHVtbXlVc2VyID0gKGRhdGEpID0+ICh7XHJcbiAgICAuLi5kYXRhLCAvLyBzYWdh7JeQ7IScIOuEmOyWtOyYqCDrjbDsnbTthLBcclxuICAgIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyxcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gICAgRm9sbG93aW5nczogW3sgaWQ6IDEsIG5pY2tuYW1lOiAn7KCc66Gc7LSIJyB9LCB7IGlkOiAyLCBuaWNrbmFtZTogJ+y8gOyduCcgfSwgeyBpZDogMywgbmlja25hbWU6ICfrhKTsnbTrp4jrpbQnIH1dLFxyXG4gICAgRm9sbG93ZXJzOiBbeyBpZDogNCwgbmlja25hbWU6ICd6ZXJvY2hvJyB9LCB7IGlkOiA1LCBuaWNrbmFtZTogJ2xpbnV4JyB9LCB7IGlkOiA2LCBuaWNrbmFtZTogJ+ydtOyerOyaqScgfV0sXHJcbn0pO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ2luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nbkVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbmRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19JTl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9UT19NRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLnVuc2hpZnQoeyBpZDogYWN0aW9uLmRhdGEsIC4uLnN0YXRlLm1lLlBvc3RzIH0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfT0ZfTUU6XHJcbiAgICAgICAgICAgICAgICAvLyBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MucHVzaCh7IGlkOiBhY3Rpb24uZGF0YS5Vc2VySWQgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7XHJcbiIsImltcG9ydCB7IGFsbCwgZm9yayB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSAnLi9wb3N0JztcclxuaW1wb3J0IHVzZXJTYWdhIGZyb20gJy4vdXNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSAnaHR0cDovLzEyNy4wLjAuMTozMDY1JztcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsocG9zdFNhZ2EpLFxyXG4gICAgICAgIGZvcmsodXNlclNhZ2EpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgYWxsLCBkZWxheSwgZm9yaywgcHV0LCB0YWtlTGF0ZXN0LCB0aHJvdHRsZSwgY2FsbCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbi8vIGltcG9ydCBzaG9ydElkIGZyb20gJ3Nob3J0aWQnO1xyXG5pbXBvcnQge1xyXG4gICAgQUREX1BPU1RfRkFJTFVSRSxcclxuICAgIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgICBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG5cclxuICAgIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfUE9TVF9TVUNDRVNTLFxyXG4gICAgUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgICBMT0FEX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcblxyXG4gICAgVVBMT0FEX0lNQUdFU19SRVFVRVNULFxyXG4gICAgVVBMT0FEX0lNQUdFU19TVUNDRVNTLFxyXG4gICAgVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG5cclxuICAgIERFTEVURV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBERUxFVEVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgREVMRVRFX0NPTU1FTlRfRkFJTFVSRSxcclxuXHJcbiAgICBMSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgTElLRV9QT1NUX0ZBSUxVUkUsXHJcblxyXG4gICAgVU5MSUtFX1BPU1RfUkVRVUVTVCxcclxuICAgIFVOTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG5cclxuICAgIFJFVFdFRVRfUkVRVUVTVCxcclxuICAgIFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgIFJFVFdFRVRfRkFJTFVSRSxcclxuXHJcbiAgICBTRUFSQ0hfUE9TVFNfUkVRVUVTVCxcclxuICAgIFNFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgU0VBUkNIX1BPU1RTX0ZBSUxVUkUsXHJcblxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGFkZCB5b3VyIGFwaSAxMTIyXHJcbmZ1bmN0aW9uIFNlYXJjaFBvc3RzQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKCdkYXRhIDogJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvc2VhcmNoL3Bvc3RzLyR7ZGF0YS5zZWFyY2hfd29yZH0vJHtkYXRhLmxhc3RJZCB8fCAwfT9gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNlYXJjaFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbi5kYXRhIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKFNlYXJjaFBvc3RzQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIFNlYXJjaFBvc3RzQVBJIDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIFNlYXJjaFBvc3RzQVBJIDogXCIsIHJlc3VsdC5kYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgOiBcIiwgZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0VBUkNIX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXR3ZWV0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGF9L3JldHdlZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHJldHdlZXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwocmV0d2VldEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVUV0VFVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFBvc3RBUEkoZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhIGZvciBwb3N0aW5nIGF0IHNhZ2EgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3Bvc3QnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZFBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBwb3N0aW5nIDogXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX1BPU1RfVE9fTUUsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLmlkLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVQb3N0QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5kZWxldGUoJy9hcGkvcG9zdCcsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgL3Bvc3QvJHtkYXRhfWApO1xyXG59XHJcbmZ1bmN0aW9uKiByZW1vdmVQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJlbW92ZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIGJhY2tlbmQsIHBvc3RJZCDtmZXsnbgg7ZWY6riwIDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9PRl9NRSxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ29tbWVudEFQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBzYWdhIGZvciBhZGQgY29tbWVudCA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KGAvcG9zdC8ke2RhdGEucG9zdElkfS9jb21tZW50YCwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRDb21tZW50KGFjdGlvbikge1xyXG4gICAgY29uc29sZS5sb2coXCJhZGRDb21lbnQgYWN0aW9uIDogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChhZGRDb21tZW50QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQocmVzcG9uc2UgZnJvbSBiYWNrZW5kIGZyb20gaW5zZXJ0IGNvbW1lbnQpOiBcIiwgcmVzdWx0KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuuMk+q4gCDsl5Drn6wgOiBcIiwgZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGxhc3RJZCkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldCgnL3Bvc3RzJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvcG9zdHM/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcblxyXG59XHJcbmZ1bmN0aW9uKiBsb2FkUG9zdHMoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFBvc3RzQVBJLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgbG9hZFBvc3RzQVBJIDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIGxvYWRQb3N0c0FQSSA6IFwiLCByZXN1bHQuZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBsb2FkSW1hZ2VzQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSDtmZXsnbggZnJvbSBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0L2ltYWdlcycsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogdXBsb2FkSW1hZ2VzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVwbG9hZEltYWdlc0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVVBMT0FEX0lNQUdFU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZUNvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIO2ZleyduCBmcm9tIHNhZ2EgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGBwb3N0L2NvbW1lbnQvJHtkYXRhLlBvc3RJZH0vJHtkYXRhLkNvbW1lbnRJZH1gKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGRlbGV0ZUNvbW1lbnQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoZGVsZXRlQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7IKt7KCc7JeQIOuMgO2VnCDsnZHri7UgOiBcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICAvLyDrnbzsmrDthLDsl5DshJwg64yT6riAIOyCreygnO2VnOuSpCBQb3N0SWTsmYAgQ29tbWVudElkIOumrO2EtCBcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsaWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiBsaWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsaWtlUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmxpa2VQb3N0QVBJKGRhdGEpIHtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX0vbGlrZWApO1xyXG59XHJcbmZ1bmN0aW9uKiB1bmxpa2VQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVubGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkxJS0VfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfUE9TVFNfUkVRVUVTVCwgbG9hZFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoUkVNT1ZFX1BPU1RfUkVRVUVTVCwgcmVtb3ZlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9QT1NUX1JFUVVFU1QsIGFkZFBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEFkZENvbW1lbnQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVcGxvYWRJbWFnZXMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVQTE9BRF9JTUFHRVNfUkVRVUVTVCwgdXBsb2FkSW1hZ2VzKTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hEZWxldGVDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChERUxFVEVfQ09NTUVOVF9SRVFVRVNULCBkZWxldGVDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExJS0VfUE9TVF9SRVFVRVNULCBsaWtlUG9zdCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoVW5saWtlUG9zdCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5MSUtFX1BPU1RfUkVRVUVTVCwgdW5saWtlUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJldHdlZXQoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFVFdFRVRfUkVRVUVTVCwgcmV0d2VldCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNlYXJjaFBvc3RzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChTRUFSQ0hfUE9TVFNfUkVRVUVTVCwgc2VhcmNoUG9zdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgICB5aWVsZCBhbGwoW1xyXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoQWRkQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVcGxvYWRJbWFnZXMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hEZWxldGVDb21tZW50KSxcclxuICAgICAgICBmb3JrKHdhdGNoTGlrZVBvc3QpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmxpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoUmV0d2VldCksXHJcbiAgICAgICAgZm9yayh3YXRjaFNlYXJjaFBvc3RzKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgY2FsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XHJcbmltcG9ydCB7XHJcbiAgICBMT0dfSU5fUkVRVUVTVCxcclxuICAgIExPR19JTl9TVUNDRVNTLFxyXG4gICAgTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgICBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfRkFJTFVSRSxcclxuICAgIEZPTExPV19SRVFVRVNULFxyXG4gICAgRk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX1JFUVVFU1QsXHJcbiAgICBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcblxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgXHJcbiAgICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBcclxuICAgIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcblxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuXHJcbn0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gbG9hZEZvbGxvd2Vyc0FQSTogXCIsIGRhdGEpO1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7ZGF0YS5saW1pdCB8fCAzfWAsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIHNhZ2EgZm9yIGxvYWRGb2xsb3dlcnNBUEk6XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBsb2FkRm9sbG93aW5nc0FQSTogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93aW5nc2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIHNhZ2EgZm9yIGxvYWRGb2xsb3dlcnNBUEk6XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzYWdhIHNpZ25VcEFQSSDsi6Ttlokg7ZmV7J24IO2ajOybkCDqsIDsnoUg7KCV67O064qUID0+IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7ZqM7JuQIOqwgOyehSDsnZHri7UgcmVzdWx0IDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93Jyk7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgZm9sbG93QVBJIGZyb20gYmFja2VuZCA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93Jyk7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIHVuZm9sbG93QVBJIGZyb20gYmFja2VuZCA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOuNsOydtO2EsCB0byDshJzrsoQgZnJvbSBzYWdhOiBcIiwgZGF0YSk7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGEoZnJvbSBzZXJ2ZXIpIDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOyXkOufrCDtmZXsnbggZnJvbSBzYWdhIDogXCIsZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ291dCcpO1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDIwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7O1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuICAgIGNvbnN0IGVuaGFuY2VyID1cclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
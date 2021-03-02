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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
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
  loadFollowersError: null,
  unfollowLoading: false,
  // 언팔로우 시도중
  unfollowDone: false,
  unfollowError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null
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
const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE'; // export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
// export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
// export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';
const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

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

        console.log("action.data.UserId from reducer : ", action.data.UserId);
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
      // 언팔로우는 이미 있을수 있음

      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerError = null;
        draft.removeFollowerDone = false;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        draft.removeFollowerDone = true;
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
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




function removeFollowerAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(removeFollowerAPI, action.data);
    console.log("result (리무부 팔로워) :  result");
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_FAILURE"],
      error: err.response.data
    });
  }
}

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

function* watchRemoveFollower() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["REMOVE_FOLLOWER_REQUEST"], removeFollower);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwiZGVsZXRlQ29tbWVudExvYWRpbmciLCJkZWxldGVDb21tZW50RG9uZSIsImRlbGV0ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsInNlYXJjaFBvc3RzTG9hZGluZyIsInNlYXJjaFBvc3RzRG9uZSIsInNlYXJjaFBvc3RzRXJyb3IiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiU0VBUkNIX1BPU1RTX1JFUVVFU1QiLCJTRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIlNFQVJDSF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiREVMRVRFX0NPTU1FTlRfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1NVQ0NFU1MiLCJERUxFVEVfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImRhdGEiLCJlcnJvciIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJDb21tZW50cyIsImZpbHRlciIsImNvbmNhdCIsImxlbmd0aCIsImkiLCJkZWx0ZUNvbW1lbnRMb2FkaW5nIiwiZGVsdGVDb21tZW50RG9uZSIsImRlbHRlQ29tbWVudEVycm9yIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJDb21tZW50c0ZvckRlbGV0ZSIsIkNvbW1lbnRJZCIsIkxpa2VycyIsInB1c2giLCJVc2VySWQiLCJtZSIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRGb2xsb3dpbmdzTG9hZGluZyIsImxvYWRGb2xsb3dpbmdzRG9uZSIsImxvYWRGb2xsb3dpbmdzRXJyb3IiLCJsb2FkRm9sbG93ZXJzTG9hZGluZyIsImxvYWRGb2xsb3dlcnNEb25lIiwibG9hZEZvbGxvd2Vyc0Vycm9yIiwicmVtb3ZlRm9sbG93ZXJMb2FkaW5nIiwicmVtb3ZlRm9sbG93ZXJEb25lIiwicmVtb3ZlRm9sbG93ZXJFcnJvciIsIkxPR19JTl9SRVFVRVNUIiwiTE9HX0lOX1NVQ0NFU1MiLCJMT0dfSU5fRkFJTFVSRSIsIkxPR19PVVRfUkVRVUVTVCIsIkxPR19PVVRfU1VDQ0VTUyIsIkxPR19PVVRfRkFJTFVSRSIsIkFERF9QT1NUX1RPX01FIiwiUkVNT1ZFX1BPU1RfT0ZfTUUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJMT0FEX1VTRVJfUkVRVUVTVCIsIkxPQURfVVNFUl9TVUNDRVNTIiwiTE9BRF9VU0VSX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCIsIkxPQURfRk9MTE9XSU5HU19TVUNDRVNTIiwiTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUiLCJMT0FEX0ZPTExPV0VSU19SRVFVRVNUIiwiTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyIsIkxPQURfRk9MTE9XRVJTX0ZBSUxVUkUiLCJSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVCIsIlJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTIiwiUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUiLCJkdW1teVVzZXIiLCJuaWNrbmFtZSIsIlBvc3RzIiwiRm9sbG93aW5ncyIsIkZvbGxvd2VycyIsImxvZ2luRG9uZSIsImxvZ25FcnJvciIsImxvZ0luZG9uZSIsImF4aW9zIiwiZGVmYXVsdHMiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwicm9vdFNhZ2EiLCJhbGwiLCJmb3JrIiwicG9zdFNhZ2EiLCJ1c2VyU2FnYSIsIlNlYXJjaFBvc3RzQVBJIiwiZ2V0Iiwic2VhcmNoX3dvcmQiLCJsYXN0SWQiLCJzZWFyY2hQb3N0cyIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsInJldHdlZXRBUEkiLCJyZXR3ZWV0IiwiYWRkUG9zdEFQSSIsImFkZFBvc3QiLCJyZW1vdmVQb3N0QVBJIiwiZGVsZXRlIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJwb3N0SWQiLCJhZGRDb21tZW50IiwibG9hZFBvc3RzQVBJIiwibG9hZFBvc3RzIiwidXBsb2FkSW1hZ2VzQVBJIiwidXBsb2FkSW1hZ2VzIiwiZGVsZXRlQ29tbWVudEFQSSIsImRlbGV0ZUNvbW1lbnQiLCJsaWtlUG9zdEFQSSIsInBhdGNoIiwibGlrZVBvc3QiLCJ1bmxpa2VQb3N0QVBJIiwidW5saWtlUG9zdCIsIndhdGNoTG9hZFBvc3RzIiwidGhyb3R0bGUiLCJ3YXRjaFJlbW92ZVBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hBZGRQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hVcGxvYWRJbWFnZXMiLCJ3YXRjaERlbGV0ZUNvbW1lbnQiLCJ3YXRjaExpa2VQb3N0Iiwid2F0Y2hVbmxpa2VQb3N0Iiwid2F0Y2hSZXR3ZWV0Iiwid2F0Y2hTZWFyY2hQb3N0cyIsInJlbW92ZUZvbGxvd2VyQVBJIiwicmVtb3ZlRm9sbG93ZXIiLCJsb2FkRm9sbG93ZXJzQVBJIiwibG9hZEZvbGxvd2VycyIsImxvYWRGb2xsb3dpbmdzQVBJIiwibG9hZEZvbGxvd2luZ3MiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93IiwibG9nSW5BUEkiLCJsb2dJbiIsImxvZ091dEFQSSIsImxvZ091dCIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJ3YXRjaExvZ091dCIsIndhdGNoTG9nSW4iLCJ3YXRjaFVuZm9sbG93Iiwid2F0Y2hGb2xsb3ciLCJ3YXRjaFNpZ25VcCIsIndhdGNoTG9hZFVzZXIiLCJ3YXRjaExvYWRGb2xsb3dlcnMiLCJ3YXRjaExvYWRGb2xsb3dpbmdzIiwid2F0Y2hSZW1vdmVGb2xsb3dlciIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7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QUEsa0M7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsb0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgXCJhbnRkL2Rpc3QvYW50ZC5jc3NcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgd3JhcHBlciBmcm9tIFwiLi4vc3RvcmUvY29uZmlndXJlU3RvcmVcIjtcclxuLy8gaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcclxuXHJcblxyXG5cclxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGY4XCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPENvbXBvbmVudCAvPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcclxuICAgIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eCh3aXRoUmVkdXhTYWdhKE5vZGVCaXJkKSk7XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE5vZGVCaXJkKTtcclxuXHJcblxyXG4iLCJpbXBvcnQgeyBIWURSQVRFIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHVzZXIgZnJvbSBcIi4vdXNlclwiO1xyXG5pbXBvcnQgcG9zdCBmcm9tIFwiLi9wb3N0XCI7XHJcblxyXG5cclxuLy8gY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4vLyAgICAgaW5kZXg6IChzdGF0ZSA9IHt9LCBhY3Rpb24pID0+IHtcclxuLy8gICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbi8vICAgICAgICAgICAgIGNhc2UgSFlEUkFURTpcclxuLy8gICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSFlEUkFURVwiLCBhY3Rpb24pO1xyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcbi8vICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSxcclxuLy8gICAgIHVzZXIsXHJcbi8vICAgICBwb3N0LFxyXG4vLyB9KTtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdIWURSQVRFJywgYWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICAgICAgICAgIHVzZXIsXHJcbiAgICAgICAgICAgICAgICBwb3N0LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbWJpbmVkUmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gJ2ltbWVyJztcclxuaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBmYWtlciBmcm9tICdmYWtlcic7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIG1haW5Qb3N0czogW10sXHJcbiAgICBhZGRQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgICBhZGRQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgYWRkQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgIHJlbW92ZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkUG9zdHNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgdXBsb2FkSW1hZ2VzTG9hZGluZzogZmFsc2UsXHJcbiAgICB1cGxvYWRJbWFnZXNEb25lOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGRlbGV0ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgIGRlbGV0ZUNvbW1lbnREb25lOiBmYWxzZSxcclxuICAgIGRlbGV0ZUNvbW1lbnRFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsaWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3REb25lOiBmYWxzZSxcclxuICAgIGxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5saWtlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgdW5saWtlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIHJldHdlZXRMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJldHdlZXREb25lOiBmYWxzZSxcclxuICAgIHJldHdlZXRFcnJvcjogbnVsbCxcclxuXHJcbiAgICBzZWFyY2hQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgc2VhcmNoUG9zdHNEb25lOiBmYWxzZSxcclxuICAgIHNlYXJjaFBvc3RzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgaW1hZ2VQYXRoczogW10sXHJcbiAgICBoYXNNb3JlUG9zdHM6IHRydWUsXHJcbn07XHJcblxyXG4vLyDslaHshZgg7LaU6rCAXHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUE9TVFNfUkVRVUVTVCA9ICdTRUFSQ0hfUE9TVFNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUE9TVFNfU1VDQ0VTUyA9ICdTRUFSQ0hfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTRUFSQ0hfUE9TVFNfRkFJTFVSRSA9ICdTRUFSQ0hfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9ICdBRERfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1NVQ0NFU1MgPSAnQUREX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9GQUlMVVJFID0gJ0FERF9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuLy8g64yT6riAIOy2lOqwgFxyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfUkVRVUVTVCA9ICdBRERfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX1NVQ0NFU1MgPSAnQUREX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gJ0FERF9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSAnUkVNT1ZFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9TVUNDRVNTID0gJ1JFTU9WRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfRkFJTFVSRSA9ICdSRU1PVkVfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfU1VDQ0VTUyA9ICdMT0FEX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19GQUlMVVJFID0gJ0xPQURfUE9TVFNfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19SRVFVRVNUID0gJ1VQTE9BRF9JTUFHRVNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1NVQ0NFU1MgPSAnVVBMT0FEX0lNQUdFU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSA9ICdVUExPQURfSU1BR0VTX0ZBSUxVUkUnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0lNQUdFID0gJ1JFTU9WRV9JTUFHRSc7XHJcblxyXG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfUkVRVUVTVCA9ICdERUxFVEVfQ09NTUVOVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX1NVQ0NFU1MgPSAnREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9GQUlMVVJFID0gJ0RFTEVURV9DT01NRU5UX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9SRVFVRVNUID0gJ0xJS0VfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9TVUNDRVNTID0gJ0xJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExJS0VfUE9TVF9GQUlMVVJFID0gJ0xJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9SRVFVRVNUID0gJ1VOTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfU1VDQ0VTUyA9ICdVTkxJS0VfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX0ZBSUxVUkUgPSAnVU5MSUtFX1BPU1RfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9SRVFVRVNUID0gJ1JFVFdFRVRfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1NVQ0NFU1MgPSAnUkVUV0VFVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfRkFJTFVSRSA9ICdSRVRXRUVUX0ZBSUxVUkUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFVQTE9BRF9JTUFHRVNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICAvLyBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzLnVuc2hpZnQoYWN0aW9uLmRhdGEpXHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfSU1BR0U6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5pbWFnZVBhdGhzID0gZHJhZnQuaW1hZ2VQYXRocy5maWx0ZXIoKHYsIGkpID0+IGkgIT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBERUxFVEVfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsdGVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsdGVDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsdGVDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmRlbGV0ZUNvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWx0ZUNvbW1lbnREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZHJhZnQubWFpblBvc3RzLmZpbmRJbmRleCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgQ29tbWVudHNGb3JEZWxldGUgPSBkcmFmdC5tYWluUG9zdHNbaW5kZXhdLkNvbW1lbnRzO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzW2luZGV4XS5Db21tZW50cyA9IENvbW1lbnRzRm9yRGVsZXRlLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuQ29tbWVudElkKVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgREVMRVRFX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGVDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGVDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2Vycy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3REb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgcG9zdC5MaWtlcnMgPSBwb3N0Lkxpa2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5MSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0VBUkNIX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTRUFSQ0hfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNFQVJDSF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgU2FmZXR5Q2VydGlmaWNhdGVUd29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWU6IG51bGwsXHJcbiAgICBsb2dJbkxvYWRpbmc6IGZhbHNlLCAvLyDroZzqt7jsnbgg7Iuc64+E7KSRXHJcbiAgICBsb2dJbkRvbmU6IGZhbHNlLFxyXG4gICAgbG9nSW5FcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkVxyXG4gICAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgICBsb2dPdXRFcnJvcjogbnVsbCxcclxuXHJcbiAgICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICBmb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuXHJcbiAgICBzaWduVXBMb2FkaW5nOiBmYWxzZSwgLy8g7ZqM7JuQ6rCA7J6FIOyLnOuPhOykkVxyXG4gICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICBzaWduVXBFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOiBudWxsLCBcclxuXHJcbiAgICBsb2FkRm9sbG93aW5nc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2luZ3NEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZEZvbGxvd2Vyc0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0RvbmU6IGZhbHNlLFxyXG4gICAgbG9hZEZvbGxvd2Vyc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIOyWuO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIHVuZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJMb2FkaW5nOiBmYWxzZSxcclxuICAgIHJlbW92ZUZvbGxvd2VyRG9uZTogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckVycm9yOiBudWxsLFxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fUkVRVUVTVCA9ICdMT0dfSU5fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9ICdMT0dfSU5fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fRkFJTFVSRSA9ICdMT0dfSU5fRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1JFUVVFU1QgPSAnTE9HX09VVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfU1VDQ0VTUyA9ICdMT0dfT1VUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gJ0xPR19PVVRfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9UT19NRSA9ICdBRERfUE9TVF9UT19NRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9ICdSRU1PVkVfUE9TVF9PRl9NRSc7XHJcblxyXG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1QgPSAnRk9MTE9XX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSAnRk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX0ZBSUxVUkUgPSAnRk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1JFUVVFU1QgPSAnVU5GT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gJ1VORk9MTE9XX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfRkFJTFVSRSA9ICdVTkZPTExPV19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSAnU0lHTl9VUF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfU1VDQ0VTUyA9ICdTSUdOX1VQX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9GQUlMVVJFID0gJ1NJR05fVVBfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1JFUVVFU1QgPSAnTE9BRF9VU0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX1NVQ0NFU1MgPSAnTE9BRF9VU0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9VU0VSX0ZBSUxVUkUgPSAnTE9BRF9VU0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XSU5HU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XSU5HU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XSU5HU19GQUlMVVJFID0gJ0xPQURfRk9MTE9XSU5HU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19SRVFVRVNUID0gJ0xPQURfRk9MTE9XRVJTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyA9ICdMT0FEX0ZPTExPV0VSU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSc7XHJcblxyXG4vLyBleHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuLy8gZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbi8vIGV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUID0gJ1JFTU9WRV9GT0xMT1dFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9TVUNDRVNTID0gJ1JFTU9WRV9GT0xMT1dFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFID0gJ1JFTU9WRV9GT0xMT1dFUl9GQUlMVVJFJztcclxuXHJcbmNvbnN0IGR1bW15VXNlciA9IChkYXRhKSA9PiAoe1xyXG4gICAgLi4uZGF0YSwgLy8gc2FnYeyXkOyEnCDrhJjslrTsmKgg642w7J207YSwXHJcbiAgICBuaWNrbmFtZTogJ+ygnOuhnOy0iCcsXHJcbiAgICBpZDogMSxcclxuICAgIFBvc3RzOiBbeyBpZDogMSB9XSxcclxuICAgIEZvbGxvd2luZ3M6IFt7IGlkOiAxLCBuaWNrbmFtZTogJ+ygnOuhnOy0iCcgfSwgeyBpZDogMiwgbmlja25hbWU6ICfsvIDsnbgnIH0sIHsgaWQ6IDMsIG5pY2tuYW1lOiAn64Sk7J2066eI66W0JyB9XSxcclxuICAgIEZvbGxvd2VyczogW3sgaWQ6IDQsIG5pY2tuYW1lOiAnemVyb2NobycgfSwgeyBpZDogNSwgbmlja25hbWU6ICdsaW51eCcgfSwgeyBpZDogNiwgbmlja25hbWU6ICfsnbTsnqzsmqknIH1dLFxyXG59KTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgcmV0dXJuIHByb2R1Y2Uoc3RhdGUsIChkcmFmdCkgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dpbkRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ25FcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5kb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPR19PVVRfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy51bnNoaWZ0KHsgaWQ6IGFjdGlvbi5kYXRhLCAuLi5zdGF0ZS5tZS5Qb3N0cyB9KVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9QT1NUX09GX01FOlxyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Qb3N0cy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWUuRm9sbG93aW5ncyA9IGRyYWZ0Lm1lLkZvbGxvd2luZ3MuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjdGlvbi5kYXRhLlVzZXJJZCBmcm9tIHJlZHVjZXIgOiBcIiwgYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFVORk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFVzZXJMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgLy8g7Ja47YyU66Gc7Jqw64qUIOydtOuvuCDsnojsnYTsiJgg7J6I7J2MXHJcblxyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93ZXJzID0gZHJhZnQubWUuRm9sbG93ZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlRm9sbG93ZXJFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybiBzdGF0ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5cclxuaW1wb3J0IHBvc3RTYWdhIGZyb20gJy4vcG9zdCc7XHJcbmltcG9ydCB1c2VyU2FnYSBmcm9tICcuL3VzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6MzA2NSc7XHJcbmF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHBvc3RTYWdhKSxcclxuICAgICAgICBmb3JrKHVzZXJTYWdhKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCwgdGhyb3R0bGUsIGNhbGwgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG4vLyBpbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IHtcclxuICAgIEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICBBRERfUE9TVF9SRVFVRVNULFxyXG4gICAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuXHJcbiAgICBSRU1PVkVfUE9TVF9SRVFVRVNULFxyXG4gICAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9QT1NUX0ZBSUxVUkUsXHJcblxyXG4gICAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gICAgTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9QT1NUU19GQUlMVVJFLFxyXG5cclxuICAgIFVQTE9BRF9JTUFHRVNfUkVRVUVTVCxcclxuICAgIFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyxcclxuICAgIFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuXHJcbiAgICBERUxFVEVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIERFTEVURV9DT01NRU5UX0ZBSUxVUkUsXHJcblxyXG4gICAgTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIExJS0VfUE9TVF9GQUlMVVJFLFxyXG5cclxuICAgIFVOTElLRV9QT1NUX1JFUVVFU1QsXHJcbiAgICBVTkxJS0VfUE9TVF9TVUNDRVNTLFxyXG4gICAgVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgICBSRVRXRUVUX1JFUVVFU1QsXHJcbiAgICBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICBSRVRXRUVUX0ZBSUxVUkUsXHJcblxyXG4gICAgU0VBUkNIX1BPU1RTX1JFUVVFU1QsXHJcbiAgICBTRUFSQ0hfUE9TVFNfU1VDQ0VTUyxcclxuICAgIFNFQVJDSF9QT1NUU19GQUlMVVJFLFxyXG5cclxufSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0JztcclxuaW1wb3J0IHsgQUREX1BPU1RfVE9fTUUsIFJFTU9WRV9QT1NUX09GX01FIH0gZnJvbSAnLi4vcmVkdWNlcnMvdXNlcic7XHJcblxyXG4vLyBhZGQgeW91ciBhcGkgMTEyMlxyXG5mdW5jdGlvbiBTZWFyY2hQb3N0c0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSA6ICcsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3NlYXJjaC9wb3N0cy8ke2RhdGEuc2VhcmNoX3dvcmR9LyR7ZGF0YS5sYXN0SWQgfHwgMH0/YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YSA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChTZWFyY2hQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBTZWFyY2hQb3N0c0FQSSA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBTZWFyY2hQb3N0c0FQSSA6IFwiLCByZXN1bHQuZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIDogXCIsIGVycik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBmb3IgcG9zdGluZyBhdCBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgcG9zdGluZyA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZnJvbSBiYWNrZW5kLCBwb3N0SWQg7ZmV7J24IO2VmOq4sCA6IFwiLCByZXN1bHQuZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gc2FnYSBmb3IgYWRkIGNvbW1lbnQgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkQ29tZW50IGFjdGlvbiA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0KHJlc3BvbnNlIGZyb20gYmFja2VuZCBmcm9tIGluc2VydCBjb21tZW50KTogXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrjJPquIAg7JeQ65+sIDogXCIsIGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG5cclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIGxvYWRQb3N0c0FQSSA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBsb2FkUG9zdHNBUEkgOiBcIiwgcmVzdWx0LmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEg7ZmV7J24IGZyb20gc2FnYSA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSDtmZXsnbggZnJvbSBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgcG9zdC9jb21tZW50LyR7ZGF0YS5Qb3N0SWR9LyR7ZGF0YS5Db21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyCreygnOyXkCDrjIDtlZwg7J2R64u1IDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8g65287Jqw7YSw7JeQ7IScIOuMk+q4gCDsgq3soJztlZzrkqQgUG9zdElk7JmAIENvbW1lbnRJZCDrpqzthLQgXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0NPTU1FTlRfUkVRVUVTVCwgZGVsZXRlQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX1BPU1RTX1JFUVVFU1QsIHNlYXJjaFBvc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoRGVsZXRlQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQb3N0cyksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICBMT0FEX1VTRVJfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCwgXHJcbiAgICBMT0FEX0ZPTExPV0VSU19TVUNDRVNTLCBcclxuICAgIExPQURfRk9MTE9XRVJTX0ZBSUxVUkUsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfUkVRVUVTVCwgXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ICjrpqzrrLTrtoAg7YyU66Gc7JuMKSA6ICByZXN1bHRcIik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gbG9hZEZvbGxvd2Vyc0FQSTogXCIsIGRhdGEpO1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7ZGF0YS5saW1pdCB8fCAzfWAsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIHNhZ2EgZm9yIGxvYWRGb2xsb3dlcnNBUEk6XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBsb2FkRm9sbG93aW5nc0FQSTogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93aW5nc2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIHNhZ2EgZm9yIGxvYWRGb2xsb3dlcnNBUEk6XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzYWdhIHNpZ25VcEFQSSDsi6Ttlokg7ZmV7J24IO2ajOybkCDqsIDsnoUg7KCV67O064qUID0+IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7ZqM7JuQIOqwgOyehSDsnZHri7UgcmVzdWx0IDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93Jyk7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgZm9sbG93QVBJIGZyb20gYmFja2VuZCA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93Jyk7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG4gICAgXHJcbn1cclxuZnVuY3Rpb24qIHVuZm9sbG93KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHVuZm9sbG93QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIHVuZm9sbG93QVBJIGZyb20gYmFja2VuZCA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ0luQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOuNsOydtO2EsCB0byDshJzrsoQgZnJvbSBzYWdhOiBcIiwgZGF0YSk7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy91c2VyL2xvZ2luJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dJbihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMjAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dJbkFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0LmRhdGEoZnJvbSBzZXJ2ZXIpIDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi66Gc6re47J24IOyXkOufrCDtmZXsnbggZnJvbSBzYWdhIDogXCIsZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ291dCcpO1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDIwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKCkge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxufVxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX09VVF9SRVFVRVNULCBsb2dPdXQpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaExvZ0luKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJzYWdhIHdhdGNoIOyLpO2WiSBjaGVja1wiKTtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9HX0lOX1JFUVVFU1QsIGxvZ0luKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVW5mb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVORk9MTE9XX1JFUVVFU1QsIHVuZm9sbG93KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hGb2xsb3coKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KEZPTExPV19SRVFVRVNULCBmb2xsb3cpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTaWduVXAoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfVVNFUl9SRVFVRVNULCBsb2FkVXNlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiB1c2VyU2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayh3YXRjaExvZ0luKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgICAgICBmb3JrKHdhdGNoRm9sbG93KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVGb2xsb3dlciksXHJcbiAgICAgICAgZm9yayh3YXRjaFNpZ25VcCksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRVc2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHJlZHVjZXIgZnJvbSBcIi4uL3JlZHVjZXJzXCI7XHJcblxyXG5pbXBvcnQgY3JlYXRlU2FnYU1pZGRsZXdhcmUgZnJvbSAncmVkdXgtc2FnYSc7O1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSAnLi4vc2FnYXMnO1xyXG5cclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmVdO1xyXG5cclxuICAgIGNvbnN0IGVuaGFuY2VyID1cclxuICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgICAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICAgIHN0b3JlLnNhZ2FUYXNrID0gc2FnYU1pZGRsZXdhcmUucnVuKHJvb3RTYWdhKTtcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbn07XHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjb25maWd1cmVTdG9yZSwge1xyXG4gICAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9
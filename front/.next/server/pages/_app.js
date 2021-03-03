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
/*! exports provided: initialState, SEARCH_POSTS_REQUEST, SEARCH_POSTS_SUCCESS, SEARCH_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, REMOVE_IMAGE, DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_REQUEST", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_SUCCESS", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_HASHTAG_POSTS_FAILURE", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_REQUEST", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_SUCCESS", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_POSTS_FAILURE", function() { return LOAD_USER_POSTS_FAILURE; });
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
const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST';
const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
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
        draft.deleteCommentLoading = false;
        draft.deleteCommentError = null;
        break;

      case DELETE_COMMENT_SUCCESS:
        draft.deleteCommentLoading = false;
        draft.deleteCommentDone = true;
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

      case LOAD_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
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
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOAD_MY_INFO_REQUEST, LOAD_MY_INFO_SUCCESS, LOAD_MY_INFO_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, default */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_REQUEST", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_SUCCESS", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_MY_INFO_FAILURE", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_REQUEST", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_SUCCESS", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWINGS_FAILURE", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_REQUEST", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_SUCCESS", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FOLLOWERS_FAILURE", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_REQUEST", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_SUCCESS", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FOLLOWER_FAILURE", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_REQUEST", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILURE", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  me: null,
  logOutUser: null,
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
  removeFollowerError: null,
  loadUserLoading: false,
  // 유저 정보 가져오기 시도중
  loadUserDone: false,
  loadUserError: null,
  loadMyInfoLoading: false,
  // 유저 정보 가져오기 시도중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  userInfo: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중
  changeNicknameDone: false,
  changeNicknameError: null
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
const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST';
const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';
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
const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

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
        draft.logOutUser = action.data.nickname;
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

      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoError = null;
        draft.loadMyInfoDone = false;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoDone = true;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = action.error;
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

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserError = null;
        draft.loadUserDone = false;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        draft.loadUserDone = true;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;

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

function loadUserPostsAPI(data, lastId) {
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  // return axios.get(`/hashtag/${data}?lastId=${lastid || 0}`);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_FAILURE"],
      data: err.response.data
    });
  }
}

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

function* watchLoadHashtagPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_HASHTAG_POSTS_REQUEST"], loadHashtagPosts);
}

function* watchLoadUserPosts() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_USER_POSTS_REQUEST"], loadUserPosts);
}

function* postSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUploadImages), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchDeleteComment), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnlikePost), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRetweet), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSearchPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadHashtagPosts), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUserPosts)]);
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




function changeNicknameAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.patch('/user/nickname', {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(changeNicknameAPI, action.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_FAILURE"],
      error: err.response.data
    });
  }
}

function loadUserAPI(data) {
  console.log("data from loadUserAPI : ", data);
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  console.log("action.data from saga function loadUser: ", action.data);

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
} // function loadUserAPI() {
//     return axios.get('/user');
// }
// function* loadUser(action) {
//     try {
//         const result = yield call(loadUserAPI, action.data);
//         yield put({
//             type: LOAD_MY_INFO_SUCCESS,
//             data: result.data,
//         });
//     } catch (err) {
//         console.error(err);
//         yield put({
//             type: LOAD_MY_INFO_FAILURE,
//             error: err.response.data,
//         });
//     }
// }


function loadMyInfoAPI() {
  return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/user');
}

function* loadMyInfo() {
  try {
    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(loadMyInfoAPI);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_SUCCESS"],
      data: result.data
    });
  } catch (err) {
    console.error(err);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_FAILURE"],
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
} // function* watchLoadUser() {
//     yield takeLatest(LOAD_MY_INFO_REQUEST, loadUser);
// }


function* watchLoadMyInfo() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_MY_INFO_REQUEST"], loadMyInfo);
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

function* watchLoadUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_REQUEST"], loadUser);
}

function* watchChangeNickname() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["CHANGE_NICKNAME_REQUEST"], changeNickname);
}

function* userSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogIn), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemoveFollower), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadUser), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadMyInfo), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowers), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadFollowings), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchChangeNickname)]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmYWtlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImltbWVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtc2FnYS9lZmZlY3RzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2hvcnRpZFwiIl0sIm5hbWVzIjpbIk5vZGVCaXJkIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwicm9vdFJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ1c2VyIiwicG9zdCIsImluaXRpYWxTdGF0ZSIsIm1haW5Qb3N0cyIsImFkZFBvc3RMb2FkaW5nIiwiYWRkUG9zdERvbmUiLCJhZGRQb3N0RXJyb3IiLCJhZGRDb21tZW50TG9hZGluZyIsImFkZENvbW1lbnREb25lIiwiYWRkQ29tbWVudEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJ1cGxvYWRJbWFnZXNMb2FkaW5nIiwidXBsb2FkSW1hZ2VzRG9uZSIsInVwbG9hZEltYWdlc0Vycm9yIiwiZGVsZXRlQ29tbWVudExvYWRpbmciLCJkZWxldGVDb21tZW50RG9uZSIsImRlbGV0ZUNvbW1lbnRFcnJvciIsImxpa2VQb3N0TG9hZGluZyIsImxpa2VQb3N0RG9uZSIsImxpa2VQb3N0RXJyb3IiLCJ1bmxpa2VQb3N0TG9hZGluZyIsInVubGlrZVBvc3REb25lIiwidW5saWtlUG9zdEVycm9yIiwicmV0d2VldExvYWRpbmciLCJyZXR3ZWV0RG9uZSIsInJldHdlZXRFcnJvciIsInNlYXJjaFBvc3RzTG9hZGluZyIsInNlYXJjaFBvc3RzRG9uZSIsInNlYXJjaFBvc3RzRXJyb3IiLCJpbWFnZVBhdGhzIiwiaGFzTW9yZVBvc3RzIiwiU0VBUkNIX1BPU1RTX1JFUVVFU1QiLCJTRUFSQ0hfUE9TVFNfU1VDQ0VTUyIsIlNFQVJDSF9QT1NUU19GQUlMVVJFIiwiQUREX1BPU1RfUkVRVUVTVCIsIkFERF9QT1NUX1NVQ0NFU1MiLCJBRERfUE9TVF9GQUlMVVJFIiwiQUREX0NPTU1FTlRfUkVRVUVTVCIsIkFERF9DT01NRU5UX1NVQ0NFU1MiLCJBRERfQ09NTUVOVF9GQUlMVVJFIiwiUkVNT1ZFX1BPU1RfUkVRVUVTVCIsIlJFTU9WRV9QT1NUX1NVQ0NFU1MiLCJSRU1PVkVfUE9TVF9GQUlMVVJFIiwiTE9BRF9QT1NUU19SRVFVRVNUIiwiTE9BRF9QT1NUU19TVUNDRVNTIiwiTE9BRF9QT1NUU19GQUlMVVJFIiwiVVBMT0FEX0lNQUdFU19SRVFVRVNUIiwiVVBMT0FEX0lNQUdFU19TVUNDRVNTIiwiVVBMT0FEX0lNQUdFU19GQUlMVVJFIiwiUkVNT1ZFX0lNQUdFIiwiREVMRVRFX0NPTU1FTlRfUkVRVUVTVCIsIkRFTEVURV9DT01NRU5UX1NVQ0NFU1MiLCJERUxFVEVfQ09NTUVOVF9GQUlMVVJFIiwiTElLRV9QT1NUX1JFUVVFU1QiLCJMSUtFX1BPU1RfU1VDQ0VTUyIsIkxJS0VfUE9TVF9GQUlMVVJFIiwiVU5MSUtFX1BPU1RfUkVRVUVTVCIsIlVOTElLRV9QT1NUX1NVQ0NFU1MiLCJVTkxJS0VfUE9TVF9GQUlMVVJFIiwiUkVUV0VFVF9SRVFVRVNUIiwiUkVUV0VFVF9TVUNDRVNTIiwiUkVUV0VFVF9GQUlMVVJFIiwiTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QiLCJMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyIsIkxPQURfSEFTSFRBR19QT1NUU19GQUlMVVJFIiwiTE9BRF9VU0VSX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUyIsIkxPQURfVVNFUl9QT1NUU19GQUlMVVJFIiwicHJvZHVjZSIsImRyYWZ0IiwidW5zaGlmdCIsImRhdGEiLCJlcnJvciIsImZpbmQiLCJ2IiwiaWQiLCJQb3N0SWQiLCJDb21tZW50cyIsImZpbHRlciIsImNvbmNhdCIsImxlbmd0aCIsImkiLCJpbmRleCIsImZpbmRJbmRleCIsIkNvbW1lbnRzRm9yRGVsZXRlIiwiQ29tbWVudElkIiwiZGVsdGVDb21tZW50TG9hZGluZyIsImRlbHRlQ29tbWVudEVycm9yIiwiTGlrZXJzIiwicHVzaCIsIlVzZXJJZCIsIm1lIiwibG9nT3V0VXNlciIsImxvZ0luTG9hZGluZyIsImxvZ0luRG9uZSIsImxvZ0luRXJyb3IiLCJsb2dPdXRMb2FkaW5nIiwibG9nT3V0RG9uZSIsImxvZ091dEVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJzaWduVXBMb2FkaW5nIiwic2lnblVwRG9uZSIsInNpZ25VcEVycm9yIiwibG9hZEZvbGxvd2luZ3NMb2FkaW5nIiwibG9hZEZvbGxvd2luZ3NEb25lIiwibG9hZEZvbGxvd2luZ3NFcnJvciIsImxvYWRGb2xsb3dlcnNMb2FkaW5nIiwibG9hZEZvbGxvd2Vyc0RvbmUiLCJsb2FkRm9sbG93ZXJzRXJyb3IiLCJyZW1vdmVGb2xsb3dlckxvYWRpbmciLCJyZW1vdmVGb2xsb3dlckRvbmUiLCJyZW1vdmVGb2xsb3dlckVycm9yIiwibG9hZFVzZXJMb2FkaW5nIiwibG9hZFVzZXJEb25lIiwibG9hZFVzZXJFcnJvciIsImxvYWRNeUluZm9Mb2FkaW5nIiwibG9hZE15SW5mb0RvbmUiLCJsb2FkTXlJbmZvRXJyb3IiLCJ1c2VySW5mbyIsImNoYW5nZU5pY2tuYW1lTG9hZGluZyIsImNoYW5nZU5pY2tuYW1lRG9uZSIsImNoYW5nZU5pY2tuYW1lRXJyb3IiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiRk9MTE9XX1JFUVVFU1QiLCJGT0xMT1dfU1VDQ0VTUyIsIkZPTExPV19GQUlMVVJFIiwiVU5GT0xMT1dfUkVRVUVTVCIsIlVORk9MTE9XX1NVQ0NFU1MiLCJVTkZPTExPV19GQUlMVVJFIiwiU0lHTl9VUF9SRVFVRVNUIiwiU0lHTl9VUF9TVUNDRVNTIiwiU0lHTl9VUF9GQUlMVVJFIiwiTE9BRF9NWV9JTkZPX1JFUVVFU1QiLCJMT0FEX01ZX0lORk9fU1VDQ0VTUyIsIkxPQURfTVlfSU5GT19GQUlMVVJFIiwiTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QiLCJMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyIsIkxPQURfRk9MTE9XSU5HU19GQUlMVVJFIiwiTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCIsIkxPQURfRk9MTE9XRVJTX1NVQ0NFU1MiLCJMT0FEX0ZPTExPV0VSU19GQUlMVVJFIiwiUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QiLCJSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyIsIlJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFIiwiTE9BRF9VU0VSX1JFUVVFU1QiLCJMT0FEX1VTRVJfU1VDQ0VTUyIsIkxPQURfVVNFUl9GQUlMVVJFIiwiQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QiLCJDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyIsIkNIQU5HRV9OSUNLTkFNRV9GQUlMVVJFIiwiZHVtbXlVc2VyIiwibmlja25hbWUiLCJQb3N0cyIsIkZvbGxvd2luZ3MiLCJGb2xsb3dlcnMiLCJsb2dpbkRvbmUiLCJsb2duRXJyb3IiLCJsb2dJbmRvbmUiLCJheGlvcyIsImRlZmF1bHRzIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwiYWxsIiwiZm9yayIsInBvc3RTYWdhIiwidXNlclNhZ2EiLCJsb2FkVXNlclBvc3RzQVBJIiwibGFzdElkIiwiZ2V0IiwibG9hZFVzZXJQb3N0cyIsInJlc3VsdCIsImNhbGwiLCJwdXQiLCJlcnIiLCJyZXNwb25zZSIsImxvYWRIYXNodGFnUG9zdHNBUEkiLCJlbmNvZGVVUklDb21wb25lbnQiLCJsb2FkSGFzaHRhZ1Bvc3RzIiwiU2VhcmNoUG9zdHNBUEkiLCJzZWFyY2hfd29yZCIsInNlYXJjaFBvc3RzIiwicmV0d2VldEFQSSIsInJldHdlZXQiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsInJlbW92ZVBvc3RBUEkiLCJkZWxldGUiLCJyZW1vdmVQb3N0IiwiYWRkQ29tbWVudEFQSSIsInBvc3RJZCIsImFkZENvbW1lbnQiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJ1cGxvYWRJbWFnZXNBUEkiLCJ1cGxvYWRJbWFnZXMiLCJkZWxldGVDb21tZW50QVBJIiwiZGVsZXRlQ29tbWVudCIsImxpa2VQb3N0QVBJIiwicGF0Y2giLCJsaWtlUG9zdCIsInVubGlrZVBvc3RBUEkiLCJ1bmxpa2VQb3N0Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsIndhdGNoUmVtb3ZlUG9zdCIsInRha2VMYXRlc3QiLCJ3YXRjaEFkZFBvc3QiLCJ3YXRjaEFkZENvbW1lbnQiLCJ3YXRjaFVwbG9hZEltYWdlcyIsIndhdGNoRGVsZXRlQ29tbWVudCIsIndhdGNoTGlrZVBvc3QiLCJ3YXRjaFVubGlrZVBvc3QiLCJ3YXRjaFJldHdlZXQiLCJ3YXRjaFNlYXJjaFBvc3RzIiwid2F0Y2hMb2FkSGFzaHRhZ1Bvc3RzIiwid2F0Y2hMb2FkVXNlclBvc3RzIiwiY2hhbmdlTmlja25hbWVBUEkiLCJjaGFuZ2VOaWNrbmFtZSIsImxvYWRVc2VyQVBJIiwibG9hZFVzZXIiLCJyZW1vdmVGb2xsb3dlckFQSSIsInJlbW92ZUZvbGxvd2VyIiwibG9hZEZvbGxvd2Vyc0FQSSIsImxvYWRGb2xsb3dlcnMiLCJsb2FkRm9sbG93aW5nc0FQSSIsImxvYWRGb2xsb3dpbmdzIiwic2lnblVwQVBJIiwic2lnblVwIiwiZm9sbG93QVBJIiwiZm9sbG93IiwidW5mb2xsb3dBUEkiLCJ1bmZvbGxvdyIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJsb2FkTXlJbmZvQVBJIiwibG9hZE15SW5mbyIsIndhdGNoTG9nT3V0Iiwid2F0Y2hMb2dJbiIsIndhdGNoVW5mb2xsb3ciLCJ3YXRjaEZvbGxvdyIsIndhdGNoU2lnblVwIiwid2F0Y2hMb2FkTXlJbmZvIiwid2F0Y2hMb2FkRm9sbG93ZXJzIiwid2F0Y2hMb2FkRm9sbG93aW5ncyIsIndhdGNoUmVtb3ZlRm9sbG93ZXIiLCJ3YXRjaExvYWRVc2VyIiwid2F0Y2hDaGFuZ2VOaWNrbmFtZSIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7Ozs7QUFJQSxNQUFNQSxRQUFRLEdBQUcsQ0FB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Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XHJcbmltcG9ydCBcImFudGQvZGlzdC9hbnRkLmNzc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCB3cmFwcGVyIGZyb20gXCIuLi9zdG9yZS9jb25maWd1cmVTdG9yZVwiO1xyXG4vLyBpbXBvcnQgd2l0aFJlZHV4U2FnYSBmcm9tICduZXh0LXJlZHV4LXNhZ2EnO1xyXG5cclxuXHJcblxyXG5jb25zdCBOb2RlQmlyZCA9ICh7IENvbXBvbmVudCB9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgY2hhclNldD1cInV0ZjhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8Q29tcG9uZW50IC8+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59O1xyXG5cclxuTm9kZUJpcmQucHJvcFR5cGVzID0ge1xyXG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXHJcbn07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KHdpdGhSZWR1eFNhZ2EoTm9kZUJpcmQpKTtcclxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpO1xyXG5cclxuXHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuXHJcblxyXG4vLyBjb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XHJcbi8vICAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xyXG4vLyAgICAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuLy8gICAgICAgICAgICAgY2FzZSBIWURSQVRFOlxyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJIWURSQVRFXCIsIGFjdGlvbik7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuLy8gICAgICAgICAgICAgZGVmYXVsdDpcclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9LFxyXG4vLyAgICAgdXNlcixcclxuLy8gICAgIHBvc3QsXHJcbi8vIH0pO1xyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgIGNhc2UgSFlEUkFURTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xyXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5lZFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gICAgICAgICAgICAgICAgdXNlcixcclxuICAgICAgICAgICAgICAgIHBvc3QsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tYmluZWRSZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHByb2R1Y2UgZnJvbSAnaW1tZXInO1xyXG5pbXBvcnQgc2hvcnRJZCBmcm9tICdzaG9ydGlkJztcclxuaW1wb3J0IGZha2VyIGZyb20gJ2Zha2VyJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWFpblBvc3RzOiBbXSxcclxuICAgIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICAgIGFkZFBvc3REb25lOiBmYWxzZSxcclxuICAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICBhZGRDb21tZW50RXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gICAgbG9hZFBvc3RzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1cGxvYWRJbWFnZXNMb2FkaW5nOiBmYWxzZSxcclxuICAgIHVwbG9hZEltYWdlc0RvbmU6IGZhbHNlLFxyXG4gICAgdXBsb2FkSW1hZ2VzRXJyb3I6IG51bGwsXHJcblxyXG4gICAgZGVsZXRlQ29tbWVudExvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGVsZXRlQ29tbWVudERvbmU6IGZhbHNlLFxyXG4gICAgZGVsZXRlQ29tbWVudEVycm9yOiBudWxsLFxyXG5cclxuICAgIGxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICBsaWtlUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgbGlrZVBvc3RFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmxpa2VQb3N0TG9hZGluZzogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RG9uZTogZmFsc2UsXHJcbiAgICB1bmxpa2VQb3N0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgcmV0d2VldExvYWRpbmc6IGZhbHNlLFxyXG4gICAgcmV0d2VldERvbmU6IGZhbHNlLFxyXG4gICAgcmV0d2VldEVycm9yOiBudWxsLFxyXG5cclxuICAgIHNlYXJjaFBvc3RzTG9hZGluZzogZmFsc2UsXHJcbiAgICBzZWFyY2hQb3N0c0RvbmU6IGZhbHNlLFxyXG4gICAgc2VhcmNoUG9zdHNFcnJvcjogbnVsbCxcclxuXHJcbiAgICBpbWFnZVBhdGhzOiBbXSxcclxuICAgIGhhc01vcmVQb3N0czogdHJ1ZSxcclxufTtcclxuXHJcbi8vIOyVoeyFmCDstpTqsIBcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NUU19SRVFVRVNUID0gJ1NFQVJDSF9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NUU19TVUNDRVNTID0gJ1NFQVJDSF9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IFNFQVJDSF9QT1NUU19GQUlMVVJFID0gJ1NFQVJDSF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfUE9TVF9SRVFVRVNUID0gJ0FERF9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9ICdBRERfUE9TVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX0ZBSUxVUkUgPSAnQUREX1BPU1RfRkFJTFVSRSc7XHJcblxyXG4vLyDrjJPquIAg7LaU6rCAXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gJ0FERF9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgQUREX0NPTU1FTlRfU1VDQ0VTUyA9ICdBRERfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IEFERF9DT01NRU5UX0ZBSUxVUkUgPSAnQUREX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX1BPU1RfUkVRVUVTVCA9ICdSRU1PVkVfUE9TVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSAnUkVNT1ZFX1BPU1RfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9GQUlMVVJFID0gJ1JFTU9WRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfUkVRVUVTVCA9ICdMT0FEX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gJ0xPQURfUE9TVFNfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBVUExPQURfSU1BR0VTX1JFUVVFU1QgPSAnVVBMT0FEX0lNQUdFU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVQTE9BRF9JTUFHRVNfU1VDQ0VTUyA9ICdVUExPQURfSU1BR0VTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVVBMT0FEX0lNQUdFU19GQUlMVVJFID0gJ1VQTE9BRF9JTUFHRVNfRkFJTFVSRSc7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfSU1BR0UgPSAnUkVNT1ZFX0lNQUdFJztcclxuXHJcbmV4cG9ydCBjb25zdCBERUxFVEVfQ09NTUVOVF9SRVFVRVNUID0gJ0RFTEVURV9DT01NRU5UX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyA9ICdERUxFVEVfQ09NTUVOVF9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9DT01NRU5UX0ZBSUxVUkUgPSAnREVMRVRFX0NPTU1FTlRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1JFUVVFU1QgPSAnTElLRV9QT1NUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX1NVQ0NFU1MgPSAnTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTElLRV9QT1NUX0ZBSUxVUkUgPSAnTElLRV9QT1NUX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVOTElLRV9QT1NUX1JFUVVFU1QgPSAnVU5MSUtFX1BPU1RfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBVTkxJS0VfUE9TVF9TVUNDRVNTID0gJ1VOTElLRV9QT1NUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgVU5MSUtFX1BPU1RfRkFJTFVSRSA9ICdVTkxJS0VfUE9TVF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBSRVRXRUVUX1JFUVVFU1QgPSAnUkVUV0VFVF9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFJFVFdFRVRfU1VDQ0VTUyA9ICdSRVRXRUVUX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVUV0VFVF9GQUlMVVJFID0gJ1JFVFdFRVRfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUgPSAnTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19SRVFVRVNUID0gJ0xPQURfVVNFUl9QT1NUU19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19TVUNDRVNTID0gJ0xPQURfVVNFUl9QT1NUU19TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9QT1NUU19GQUlMVVJFID0gJ0xPQURfVVNFUl9QT1NUU19GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICByZXR1cm4gcHJvZHVjZShzdGF0ZSwgKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaW1hZ2VQYXRocyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWFpblBvc3RzLnVuc2hpZnQoZHVtbXlQb3N0KGFjdGlvbi5kYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBRERfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmFkZENvbW1lbnREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQUREX0NPTU1FTlRfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEFERF9DT01NRU5UX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3REb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gZHJhZnQubWFpblBvc3RzLmNvbmNhdChhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVVBMT0FEX0lNQUdFU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudXBsb2FkSW1hZ2VzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5hY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMudW5zaGlmdChhY3Rpb24uZGF0YSlcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVwbG9hZEltYWdlc0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBVUExPQURfSU1BR0VTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51cGxvYWRJbWFnZXNFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFTU9WRV9JTUFHRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmltYWdlUGF0aHMgPSBkcmFmdC5pbWFnZVBhdGhzLmZpbHRlcigodiwgaSkgPT4gaSAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9DT01NRU5UX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlQ29tbWVudEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIERFTEVURV9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5kZWxldGVDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZGVsZXRlQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkcmFmdC5tYWluUG9zdHMuZmluZEluZGV4KCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5Qb3N0SWQpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBDb21tZW50c0ZvckRlbGV0ZSA9IGRyYWZ0Lm1haW5Qb3N0c1tpbmRleF0uQ29tbWVudHM7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tYWluUG9zdHNbaW5kZXhdLkNvbW1lbnRzID0gQ29tbWVudHNGb3JEZWxldGUuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Db21tZW50SWQpXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBERUxFVEVfQ09NTUVOVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWx0ZUNvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkZWx0ZUNvbW1lbnRFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTElLRV9QT1NUX1NVQ0NFU1M6IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBkcmFmdC5tYWluUG9zdHMuZmluZCgodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEuUG9zdElkKTtcclxuICAgICAgICAgICAgICAgIHBvc3QuTGlrZXJzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEuVXNlcklkIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5saWtlUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSBMSUtFX1BPU1RfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lmxpa2VQb3N0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9TVUNDRVNTOiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3N0ID0gZHJhZnQubWFpblBvc3RzLmZpbmQoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhLlBvc3RJZCk7XHJcbiAgICAgICAgICAgICAgICBwb3N0Lkxpa2VycyA9IHBvc3QuTGlrZXJzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEuVXNlcklkKTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmxpa2VQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2FzZSBVTkxJS0VfUE9TVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5saWtlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVubGlrZVBvc3RFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRVRXRUVUX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZXR3ZWV0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldEVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFJFVFdFRVRfU1VDQ0VTUzoge1xyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXREb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGFjdGlvbi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgUkVUV0VFVF9GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQucmV0d2VldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJldHdlZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBTRUFSQ0hfUE9TVFNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0RvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFNFQVJDSF9QT1NUU19TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2VhcmNoUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5oYXNNb3JlUG9zdHMgPSBhY3Rpb24uZGF0YS5sZW5ndGggPT09IDEwO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0VBUkNIX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zZWFyY2hQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNlYXJjaFBvc3RzRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfVVNFUl9QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICBjYXNlIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkUG9zdHNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1haW5Qb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5jb25jYXQoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuaGFzTW9yZVBvc3RzID0gYWN0aW9uLmRhdGEubGVuZ3RoID09PSAxMDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0hBU0hUQUdfUE9TVFNfRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgU2FmZXR5Q2VydGlmaWNhdGVUd29Ub25lIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgcHJvZHVjZSBmcm9tICdpbW1lcic7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgbWU6IG51bGwsXHJcbiAgICBsb2dPdXRVc2VyOiBudWxsLFxyXG4gICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkVxyXG4gICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgIGxvZ0luRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9nT3V0TG9hZGluZzogZmFsc2UsIC8vIOuhnOq3uOyVhOybgyDsi5zrj4TspJFcclxuICAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgbG9nT3V0RXJyb3I6IG51bGwsXHJcblxyXG4gICAgZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIO2MlOuhnOyasCDsi5zrj4TspJFcclxuICAgIGZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgdW5mb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8g7Ja47YyU66Gc7JqwIOyLnOuPhOykkVxyXG4gICAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICAgIHVuZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gICAgc2lnblVwTG9hZGluZzogZmFsc2UsIC8vIO2ajOybkOqwgOyehSDsi5zrj4TspJFcclxuICAgIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gICAgc2lnblVwRXJyb3I6IG51bGwsXHJcblxyXG4gICAgbG9hZEZvbGxvd2luZ3NMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dpbmdzRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkRm9sbG93aW5nc0Vycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRGb2xsb3dlcnNMb2FkaW5nOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNEb25lOiBmYWxzZSxcclxuICAgIGxvYWRGb2xsb3dlcnNFcnJvcjogbnVsbCxcclxuXHJcbiAgICB1bmZvbGxvd0xvYWRpbmc6IGZhbHNlLCAvLyDslrjtjJTroZzsmrAg7Iuc64+E7KSRXHJcbiAgICB1bmZvbGxvd0RvbmU6IGZhbHNlLFxyXG4gICAgdW5mb2xsb3dFcnJvcjogbnVsbCxcclxuICAgIHJlbW92ZUZvbGxvd2VyTG9hZGluZzogZmFsc2UsXHJcbiAgICByZW1vdmVGb2xsb3dlckRvbmU6IGZhbHNlLFxyXG4gICAgcmVtb3ZlRm9sbG93ZXJFcnJvcjogbnVsbCxcclxuXHJcbiAgICBsb2FkVXNlckxvYWRpbmc6IGZhbHNlLCAvLyDsnKDsoIAg7KCV67O0IOqwgOyguOyYpOq4sCDsi5zrj4TspJFcclxuICAgIGxvYWRVc2VyRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkVXNlckVycm9yOiBudWxsLFxyXG5cclxuICAgIGxvYWRNeUluZm9Mb2FkaW5nOiBmYWxzZSwgLy8g7Jyg7KCAIOygleuztCDqsIDsoLjsmKTquLAg7Iuc64+E7KSRXHJcbiAgICBsb2FkTXlJbmZvRG9uZTogZmFsc2UsXHJcbiAgICBsb2FkTXlJbmZvRXJyb3I6IG51bGwsXHJcblxyXG4gICAgdXNlckluZm86IG51bGwsXHJcblxyXG4gICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSwgLy8g64uJ64Sk7J6EIOuzgOqyvSDsi5zrj4TspJFcclxuICAgIGNoYW5nZU5pY2tuYW1lRG9uZTogZmFsc2UsXHJcbiAgICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19JTl9SRVFVRVNUID0gJ0xPR19JTl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9TVUNDRVNTID0gJ0xPR19JTl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gJ0xPR19JTl9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9ICdMT0dfT1VUX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9TVUNDRVNTID0gJ0xPR19PVVRfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX0ZBSUxVUkUgPSAnTE9HX09VVF9GQUlMVVJFJztcclxuZXhwb3J0IGNvbnN0IEFERF9QT1NUX1RPX01FID0gJ0FERF9QT1NUX1RPX01FJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX09GX01FID0gJ1JFTU9WRV9QT1NUX09GX01FJztcclxuXHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVRVUVTVCA9ICdGT0xMT1dfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1VDQ0VTUyA9ICdGT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9ICdGT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgVU5GT0xMT1dfUkVRVUVTVCA9ICdVTkZPTExPV19SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IFVORk9MTE9XX1NVQ0NFU1MgPSAnVU5GT0xMT1dfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gJ1VORk9MTE9XX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfUkVRVUVTVCA9ICdTSUdOX1VQX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gJ1NJR05fVVBfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX0ZBSUxVUkUgPSAnU0lHTl9VUF9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fUkVRVUVTVCA9ICdMT0FEX01ZX0lORk9fUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fU1VDQ0VTUyA9ICdMT0FEX01ZX0lORk9fU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX01ZX0lORk9fRkFJTFVSRSA9ICdMT0FEX01ZX0lORk9fRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MgPSAnTE9BRF9GT0xMT1dJTkdTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUgPSAnTE9BRF9GT0xMT1dJTkdTX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfRk9MTE9XRVJTX1JFUVVFU1QgPSAnTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBMT0FEX0ZPTExPV0VSU19TVUNDRVNTID0gJ0xPQURfRk9MTE9XRVJTX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSA9ICdMT0FEX0ZPTExPV0VSU19GQUlMVVJFJztcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gJ1VORk9MTE9XX1JFUVVFU1QnO1xyXG4vLyBleHBvcnQgY29uc3QgVU5GT0xMT1dfU1VDQ0VTUyA9ICdVTkZPTExPV19TVUNDRVNTJztcclxuLy8gZXhwb3J0IGNvbnN0IFVORk9MTE9XX0ZBSUxVUkUgPSAnVU5GT0xMT1dfRkFJTFVSRSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QgPSAnUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MgPSAnUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MnO1xyXG5leHBvcnQgY29uc3QgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUgPSAnUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9SRVFVRVNUID0gJ0xPQURfVVNFUl9SRVFVRVNUJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9TVUNDRVNTID0gJ0xPQURfVVNFUl9TVUNDRVNTJztcclxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9GQUlMVVJFID0gJ0xPQURfVVNFUl9GQUlMVVJFJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCA9ICdDSEFOR0VfTklDS05BTUVfUkVRVUVTVCc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9ICdDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyc7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfRkFJTFVSRSA9ICdDSEFOR0VfTklDS05BTUVfRkFJTFVSRSc7XHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4gKHtcclxuICAgIC4uLmRhdGEsIC8vIHNhZ2Hsl5DshJwg64SY7Ja07JioIOuNsOydtO2EsFxyXG4gICAgbmlja25hbWU6ICfsoJzroZzstIgnLFxyXG4gICAgaWQ6IDEsXHJcbiAgICBQb3N0czogW3sgaWQ6IDEgfV0sXHJcbiAgICBGb2xsb3dpbmdzOiBbeyBpZDogMSwgbmlja25hbWU6ICfsoJzroZzstIgnIH0sIHsgaWQ6IDIsIG5pY2tuYW1lOiAn7LyA7J24JyB9LCB7IGlkOiAzLCBuaWNrbmFtZTogJ+uEpOydtOuniOultCcgfV0sXHJcbiAgICBGb2xsb3dlcnM6IFt7IGlkOiA0LCBuaWNrbmFtZTogJ3plcm9jaG8nIH0sIHsgaWQ6IDUsIG5pY2tuYW1lOiAnbGludXgnIH0sIHsgaWQ6IDYsIG5pY2tuYW1lOiAn7J207J6s7JqpJyB9XSxcclxufSk7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX0lOX1JFUVVFU1Q6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9naW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2duRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luZG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhZnQubWUgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRVc2VyID0gYWN0aW9uLmRhdGEubmlja25hbWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfSU5fRkFJTFVSRTpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dJbkVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9HX09VVF9SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgTE9HX09VVF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXREb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2dPdXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFERF9QT1NUX1RPX01FOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSwgLi4uc3RhdGUubWUuUG9zdHMgfSlcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YS5Qb3N0SWQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBGT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhIH0pO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncy5wdXNoKHsgaWQ6IGFjdGlvbi5kYXRhLlVzZXJJZCB9KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIC8vIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YS5Vc2VySWQgZnJvbSByZWR1Y2VyIDogXCIsIGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzID0gZHJhZnQubWUuRm9sbG93aW5ncy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBVTkZPTExPV19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQudW5mb2xsb3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuc2lnblVwRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBTSUdOX1VQX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5zaWduVXBFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfTVlfSU5GT19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX01ZX0lORk9fU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRNeUluZm9Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZSA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9NWV9JTkZPX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkTXlJbmZvRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZE15SW5mb0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19SRVFVRVNUOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzRXJyb3IgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dpbmdzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubWUuRm9sbG93aW5ncyA9IGFjdGlvbi5kYXRhO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XSU5HU19GQUlMVVJFOlxyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2luZ3NMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93aW5nc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNFcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUzpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5Gb2xsb3dlcnMgPSBhY3Rpb24uZGF0YTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRGb2xsb3dlcnNEb25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIExPQURfRk9MTE9XRVJTX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkRm9sbG93ZXJzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQubG9hZEZvbGxvd2Vyc0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8vIOyWuO2MlOuhnOyasOuKlCDsnbTrr7gg7J6I7J2E7IiYIOyeiOydjFxyXG5cclxuICAgICAgICAgICAgY2FzZSBSRU1PVkVfRk9MTE9XRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2VycyA9IGRyYWZ0Lm1lLkZvbGxvd2Vycy5maWx0ZXIoKHYpID0+IHYuaWQgIT09IGFjdGlvbi5kYXRhLlVzZXJJZCk7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgUkVNT1ZFX0ZPTExPV0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5yZW1vdmVGb2xsb3dlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnJlbW92ZUZvbGxvd2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBMT0FEX1VTRVJfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LnVzZXJJbmZvID0gYWN0aW9uLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckRvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgTE9BRF9VU0VSX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5sb2FkVXNlckxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmxvYWRVc2VyRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBDSEFOR0VfTklDS05BTUVfUkVRVUVTVDpcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1M6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5tZS5uaWNrbmFtZSA9IGFjdGlvbi5kYXRhLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuXHJcbmltcG9ydCBwb3N0U2FnYSBmcm9tICcuL3Bvc3QnO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSAnLi91c2VyJztcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9ICdodHRwOi8vMTI3LjAuMC4xOjMwNjUnO1xyXG5heGlvcy5kZWZhdWx0cy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICAgIHlpZWxkIGFsbChbXHJcbiAgICAgICAgZm9yayhwb3N0U2FnYSksXHJcbiAgICAgICAgZm9yayh1c2VyU2FnYSksXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QsIHRocm90dGxlLCBjYWxsIH0gZnJvbSAncmVkdXgtc2FnYS9lZmZlY3RzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuLy8gaW1wb3J0IHNob3J0SWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCB7XHJcbiAgICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgQUREX1BPU1RfUkVRVUVTVCxcclxuICAgIEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgIEFERF9DT01NRU5UX0ZBSUxVUkUsXHJcblxyXG4gICAgUkVNT1ZFX1BPU1RfUkVRVUVTVCxcclxuICAgIFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG5cclxuICAgIExPQURfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICAgIExPQURfUE9TVFNfRkFJTFVSRSxcclxuXHJcbiAgICBVUExPQURfSU1BR0VTX1JFUVVFU1QsXHJcbiAgICBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICBVUExPQURfSU1BR0VTX0ZBSUxVUkUsXHJcblxyXG4gICAgREVMRVRFX0NPTU1FTlRfUkVRVUVTVCxcclxuICAgIERFTEVURV9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICBERUxFVEVfQ09NTUVOVF9GQUlMVVJFLFxyXG5cclxuICAgIExJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgTElLRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICBMSUtFX1BPU1RfRkFJTFVSRSxcclxuXHJcbiAgICBVTkxJS0VfUE9TVF9SRVFVRVNULFxyXG4gICAgVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgIFVOTElLRV9QT1NUX0ZBSUxVUkUsXHJcblxyXG4gICAgUkVUV0VFVF9SRVFVRVNULFxyXG4gICAgUkVUV0VFVF9TVUNDRVNTLFxyXG4gICAgUkVUV0VFVF9GQUlMVVJFLFxyXG5cclxuICAgIFNFQVJDSF9QT1NUU19SRVFVRVNULFxyXG4gICAgU0VBUkNIX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICBTRUFSQ0hfUE9TVFNfRkFJTFVSRSxcclxuXHJcbiAgICBMT0FEX0hBU0hUQUdfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfSEFTSFRBR19QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsICBcclxuXHJcbiAgICBMT0FEX1VTRVJfUE9TVFNfUkVRVUVTVCxcclxuICAgIExPQURfVVNFUl9QT1NUU19TVUNDRVNTLFxyXG4gICAgTE9BRF9VU0VSX1BPU1RTX0ZBSUxVUkUsXHJcblxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3Bvc3QnO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tICcuLi9yZWR1Y2Vycy91c2VyJztcclxuXHJcbi8vIGFkZCB5b3VyIGFwaSAxMTIyXHJcbmZ1bmN0aW9uIGxvYWRVc2VyUG9zdHNBUEkoZGF0YSwgbGFzdElkKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvdXNlci8ke2RhdGF9L3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXJQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlclBvc3RzQVBJLCBhY3Rpb24uZGF0YSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9VU0VSX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZEhhc2h0YWdQb3N0c0FQSShkYXRhLCBsYXN0SWQpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5nZXQoYC9oYXNodGFnLyR7ZGF0YX0/bGFzdElkPSR7bGFzdGlkIHx8IDB9YCk7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGAvaGFzaHRhZy8ke2VuY29kZVVSSUNvbXBvbmVudChkYXRhKX0/bGFzdElkPSR7bGFzdElkIHx8IDB9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkSGFzaHRhZ1Bvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRIYXNodGFnUG9zdHNBUEksIGFjdGlvbi5kYXRhLCBhY3Rpb24ubGFzdElkKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0hBU0hUQUdfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9IQVNIVEFHX1BPU1RTX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hQb3N0c0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZygnZGF0YSA6ICcsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3NlYXJjaC9wb3N0cy8ke2RhdGEuc2VhcmNoX3dvcmR9LyR7ZGF0YS5sYXN0SWQgfHwgMH0/YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBzZWFyY2hQb3N0cyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJhY3Rpb24uZGF0YSA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChTZWFyY2hQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBTZWFyY2hQb3N0c0FQSSA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBTZWFyY2hQb3N0c0FQSSA6IFwiLCByZXN1bHQuZGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBTRUFSQ0hfUE9TVFNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGFcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yIDogXCIsIGVycik7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNFQVJDSF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmV0d2VldEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhfS9yZXR3ZWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZXR3ZWV0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHJldHdlZXRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBSRVRXRUVUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFVFdFRVRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQb3N0QVBJKGRhdGEpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YSBmb3IgcG9zdGluZyBhdCBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9wb3N0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGFkZFBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgcG9zdGluZyA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9QT1NUX1RPX01FLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YS5pZCxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBBRERfUE9TVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlUG9zdEFQSShkYXRhKSB7XHJcbiAgICAvLyByZXR1cm4gYXhpb3MuZGVsZXRlKCcvYXBpL3Bvc3QnLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5kZWxldGUoYC9wb3N0LyR7ZGF0YX1gKTtcclxufVxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZnJvbSBiYWNrZW5kLCBwb3N0SWQg7ZmV7J24IO2VmOq4sCA6IFwiLCByZXN1bHQuZGF0YSk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgICAgICAgIC8vIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENvbW1lbnRBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gc2FnYSBmb3IgYWRkIGNvbW1lbnQgOiBcIiwgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdChgL3Bvc3QvJHtkYXRhLnBvc3RJZH0vY29tbWVudGAsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogYWRkQ29tbWVudChhY3Rpb24pIHtcclxuICAgIGNvbnNvbGUubG9nKFwiYWRkQ29tZW50IGFjdGlvbiA6IFwiLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0KHJlc3BvbnNlIGZyb20gYmFja2VuZCBmcm9tIGluc2VydCBjb21tZW50KTogXCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFERF9DT01NRU5UX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLrjJPquIAg7JeQ65+sIDogXCIsIGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQb3N0c0FQSShsYXN0SWQpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5nZXQoJy9wb3N0cycsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3Bvc3RzP2xhc3RJZD0ke2xhc3RJZCB8fCAwfWApO1xyXG5cclxufVxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmxhc3RJZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQgZm9yIGxvYWRQb3N0c0FQSSA6IFwiLCByZXN1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0IGZvciBsb2FkUG9zdHNBUEkgOiBcIiwgcmVzdWx0LmRhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9QT1NUU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfUE9TVFNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwbG9hZEltYWdlc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEg7ZmV7J24IGZyb20gc2FnYSA6IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvcG9zdC9pbWFnZXMnLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHVwbG9hZEltYWdlcyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1cGxvYWRJbWFnZXNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBVUExPQURfSU1BR0VTX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVQTE9BRF9JTUFHRVNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVDb21tZW50QVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSDtmZXsnbggZnJvbSBzYWdhIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmRlbGV0ZShgcG9zdC9jb21tZW50LyR7ZGF0YS5Qb3N0SWR9LyR7ZGF0YS5Db21tZW50SWR9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBkZWxldGVDb21tZW50KGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGRlbGV0ZUNvbW1lbnRBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIuyCreygnOyXkCDrjIDtlZwg7J2R64u1IDogXCIsIHJlc3VsdC5kYXRhKTtcclxuXHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogREVMRVRFX0NPTU1FTlRfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8g65287Jqw7YSw7JeQ7IScIOuMk+q4gCDsgq3soJztlZzrkqQgUG9zdElk7JmAIENvbW1lbnRJZCDrpqzthLQgXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9DT01NRU5UX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGlrZVBvc3RBUEkoZGF0YSkge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBhdGNoKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiogbGlrZVBvc3QoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobGlrZVBvc3RBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTElLRV9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdW5saWtlUG9zdEFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvcG9zdC8ke2RhdGF9L2xpa2VgKTtcclxufVxyXG5mdW5jdGlvbiogdW5saWtlUG9zdChhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbCh1bmxpa2VQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5MSUtFX1BPU1RfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgICB5aWVsZCB0aHJvdHRsZSg1MDAwLCBMT0FEX1BPU1RTX1JFUVVFU1QsIGxvYWRQb3N0cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9QT1NUX1JFUVVFU1QsIHJlbW92ZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfUE9TVF9SRVFVRVNULCBhZGRQb3N0KTtcclxufVxyXG5mdW5jdGlvbiogd2F0Y2hBZGRDb21tZW50KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChBRERfQ09NTUVOVF9SRVFVRVNULCBhZGRDb21tZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoVXBsb2FkSW1hZ2VzKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChVUExPQURfSU1BR0VTX1JFUVVFU1QsIHVwbG9hZEltYWdlcyk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRGVsZXRlQ29tbWVudCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoREVMRVRFX0NPTU1FTlRfUkVRVUVTVCwgZGVsZXRlQ29tbWVudCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExpa2VQb3N0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMSUtFX1BPU1RfUkVRVUVTVCwgbGlrZVBvc3QpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaFVubGlrZVBvc3QoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFVOTElLRV9QT1NUX1JFUVVFU1QsIHVubGlrZVBvc3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hSZXR3ZWV0KCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChSRVRXRUVUX1JFUVVFU1QsIHJldHdlZXQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hTZWFyY2hQb3N0cygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0VBUkNIX1BPU1RTX1JFUVVFU1QsIHNlYXJjaFBvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZEhhc2h0YWdQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfSEFTSFRBR19QT1NUU19SRVFVRVNULCBsb2FkSGFzaHRhZ1Bvc3RzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9hZFVzZXJQb3N0cygpIHtcclxuICAgIHlpZWxkIHRocm90dGxlKDUwMDAsIExPQURfVVNFUl9QT1NUU19SRVFVRVNULCBsb2FkVXNlclBvc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHBvc3RTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoQWRkUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaEFkZENvbW1lbnQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFBvc3RzKSxcclxuICAgICAgICBmb3JrKHdhdGNoVXBsb2FkSW1hZ2VzKSxcclxuICAgICAgICBmb3JrKHdhdGNoRGVsZXRlQ29tbWVudCksXHJcbiAgICAgICAgZm9yayh3YXRjaExpa2VQb3N0KSxcclxuICAgICAgICBmb3JrKHdhdGNoVW5saWtlUG9zdCksXHJcbiAgICAgICAgZm9yayh3YXRjaFJldHdlZXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hTZWFyY2hQb3N0cyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRIYXNodGFnUG9zdHMpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkVXNlclBvc3RzKSxcclxuXHJcbiAgICBdKTtcclxufVxyXG4iLCJpbXBvcnQgeyBhbGwsIGNhbGwsIGRlbGF5LCBmb3JrLCBwdXQsIHRha2VMYXRlc3QgfSBmcm9tICdyZWR1eC1zYWdhL2VmZmVjdHMnO1xyXG5pbXBvcnQge1xyXG4gICAgTE9HX0lOX1JFUVVFU1QsXHJcbiAgICBMT0dfSU5fU1VDQ0VTUyxcclxuICAgIExPR19JTl9GQUlMVVJFLFxyXG4gICAgTE9HX09VVF9SRVFVRVNULFxyXG4gICAgTE9HX09VVF9TVUNDRVNTLFxyXG4gICAgTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICBGT0xMT1dfUkVRVUVTVCxcclxuICAgIEZPTExPV19TVUNDRVNTLFxyXG4gICAgVU5GT0xMT1dfUkVRVUVTVCxcclxuICAgIFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgUkVNT1ZFX0ZPTExPV0VSX1JFUVVFU1QsXHJcbiAgICBSRU1PVkVfRk9MTE9XRVJfU1VDQ0VTUyxcclxuICAgIFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgU0lHTl9VUF9SRVFVRVNULFxyXG4gICAgU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgU0lHTl9VUF9GQUlMVVJFLFxyXG4gICAgTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbiAgICBMT0FEX01ZX0lORk9fUkVRVUVTVCxcclxuICAgIExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgTE9BRF9GT0xMT1dFUlNfUkVRVUVTVCxcclxuICAgIExPQURfRk9MTE9XRVJTX1NVQ0NFU1MsXHJcbiAgICBMT0FEX0ZPTExPV0VSU19GQUlMVVJFLFxyXG4gICAgTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsXHJcbiAgICBMT0FEX0ZPTExPV0lOR1NfU1VDQ0VTUyxcclxuICAgIExPQURfRk9MTE9XSU5HU19GQUlMVVJFLFxyXG5cclxuICAgIExPQURfVVNFUl9SRVFVRVNULFxyXG4gICAgTE9BRF9VU0VSX1NVQ0NFU1MsXHJcbiAgICBMT0FEX1VTRVJfRkFJTFVSRSxcclxuXHJcbiAgICBDSEFOR0VfTklDS05BTUVfUkVRVUVTVCxcclxuICAgIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTLFxyXG4gICAgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUsXHJcblxyXG59IGZyb20gJy4uL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBjaGFuZ2VOaWNrbmFtZUFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goJy91c2VyL25pY2tuYW1lJywgeyBuaWNrbmFtZTogZGF0YSB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGNoYW5nZU5pY2tuYW1lKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGNoYW5nZU5pY2tuYW1lQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRVc2VyQVBJKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiZGF0YSBmcm9tIGxvYWRVc2VyQVBJIDogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvJHtkYXRhfWApO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImFjdGlvbi5kYXRhIGZyb20gc2FnYSBmdW5jdGlvbiBsb2FkVXNlcjogXCIsIGFjdGlvbi5kYXRhKTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2FkVXNlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfVVNFUl9TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX1VTRVJfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGb2xsb3dlckFQSShkYXRhKSB7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci9mb2xsb3dlci8ke2RhdGF9YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiByZW1vdmVGb2xsb3dlcihhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVGb2xsb3dlckFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVzdWx0ICjrpqzrrLTrtoAg7YyU66Gc7JuMKSA6ICByZXN1bHRcIik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogUkVNT1ZFX0ZPTExPV0VSX1NVQ0NFU1MsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFJFTU9WRV9GT0xMT1dFUl9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRGb2xsb3dlcnNBUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCJkYXRhIGZyb20gbG9hZEZvbGxvd2Vyc0FQSTogXCIsIGRhdGEpO1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93ZXJzP2xpbWl0PSR7ZGF0YS5saW1pdCB8fCAzfWAsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXIvZm9sbG93ZXJzJywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkRm9sbG93ZXJzKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRGb2xsb3dlcnNBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIHNhZ2EgZm9yIGxvYWRGb2xsb3dlcnNBUEk6XCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfU1VDQ0VTUyxcclxuICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9BRF9GT0xMT1dFUlNfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRm9sbG93aW5nc0FQSShkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImRhdGEgZnJvbSBsb2FkRm9sbG93aW5nc0FQSTogXCIsIGRhdGEpO1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgL3VzZXIvZm9sbG93aW5nc2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZEZvbGxvd2luZ3MoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZEZvbGxvd2luZ3NBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmcm9tIHNhZ2EgZm9yIGxvYWRGb2xsb3dlcnNBUEk6XCIsIHJlc3VsdCk7XHJcblxyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfRk9MTE9XSU5HU19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX0ZPTExPV0lOR1NfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoZGF0YSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJzYWdhIHNpZ25VcEFQSSDsi6Ttlokg7ZmV7J24IO2ajOybkCDqsIDsnoUg7KCV67O064qUID0+IFwiLCBkYXRhKTtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCcvdXNlcicsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogc2lnblVwKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKHNpZ25VcEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi7ZqM7JuQIOqwgOyehSDsnZHri7UgcmVzdWx0IDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogU0lHTl9VUF9TVUNDRVNTLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb2xsb3dBUEkoZGF0YSkge1xyXG4gICAgLy8gcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvZm9sbG93Jyk7XHJcbiAgICByZXR1cm4gYXhpb3MucGF0Y2goYC91c2VyLyR7ZGF0YX0vZm9sbG93YCk7XHJcbn1cclxuZnVuY3Rpb24qIGZvbGxvdyhhY3Rpb24pIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgLy8geWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChmb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgZm9sbG93QVBJIGZyb20gYmFja2VuZCA6IFwiLCByZXN1bHQpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBGT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEZPTExPV19GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuZm9sbG93QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL3VuZm9sbG93Jyk7XHJcbiAgICByZXR1cm4gYXhpb3MuZGVsZXRlKGAvdXNlci8ke2RhdGF9L2ZvbGxvd2ApO1xyXG5cclxufVxyXG5mdW5jdGlvbiogdW5mb2xsb3coYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDEwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwodW5mb2xsb3dBUEksIGFjdGlvbi5kYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcInJlc3VsdCBmb3IgdW5mb2xsb3dBUEkgZnJvbSBiYWNrZW5kIDogXCIsIHJlc3VsdCk7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogVU5GT0xMT1dfU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFVORk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coXCLroZzqt7jsnbgg642w7J207YSwIHRvIOyEnOuyhCBmcm9tIHNhZ2E6IFwiLCBkYXRhKTtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9naW4nLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyB5aWVsZCBkZWxheSgyMDAwKTtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXN1bHQuZGF0YShmcm9tIHNlcnZlcikgOiBcIiwgcmVzdWx0LmRhdGEpO1xyXG5cclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfSU5fU1VDQ0VTUyxcclxuICAgICAgICAgICAgLy8gZGF0YTogYWN0aW9uLmRhdGEsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLroZzqt7jsnbgg7JeQ65+sIO2ZleyduCBmcm9tIHNhZ2EgOiBcIiwgZXJyKTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX0lOX0ZBSUxVUkUsXHJcbiAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9nT3V0QVBJKGRhdGEpIHtcclxuICAgIC8vIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywgZGF0YSk7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnL3VzZXIvbG9nb3V0JywgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2dPdXQoYWN0aW9uKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzYWdhIGxvZ291dCcpO1xyXG4gICAgICAgIC8vIHlpZWxkIGRlbGF5KDIwMDApO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nT3V0QVBJKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0dfT1VUX1NVQ0NFU1MsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgeWllbGQgcHV0KHtcclxuICAgICAgICAgICAgdHlwZTogTE9HX09VVF9GQUlMVVJFLFxyXG4gICAgICAgICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGxvYWRVc2VyQVBJKCkge1xyXG4vLyAgICAgcmV0dXJuIGF4aW9zLmdldCgnL3VzZXInKTtcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiogbG9hZFVzZXIoYWN0aW9uKSB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9hZFVzZXJBUEksIGFjdGlvbi5kYXRhKTtcclxuLy8gICAgICAgICB5aWVsZCBwdXQoe1xyXG4vLyAgICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fU1VDQ0VTUyxcclxuLy8gICAgICAgICAgICAgZGF0YTogcmVzdWx0LmRhdGEsXHJcbi8vICAgICAgICAgfSk7XHJcbi8vICAgICB9IGNhdGNoIChlcnIpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbi8vICAgICAgICAgeWllbGQgcHV0KHtcclxuLy8gICAgICAgICAgICAgdHlwZTogTE9BRF9NWV9JTkZPX0ZBSUxVUkUsXHJcbi8vICAgICAgICAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSxcclxuLy8gICAgICAgICB9KTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gbG9hZE15SW5mb0FQSSgpIHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJy91c2VyJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBsb2FkTXlJbmZvKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRNeUluZm9BUEkpO1xyXG4gICAgICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgICAgICAgIHR5cGU6IExPQURfTVlfSU5GT19TVUNDRVNTLFxyXG4gICAgICAgICAgICBkYXRhOiByZXN1bHQuZGF0YSxcclxuICAgICAgICB9KTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICB5aWVsZCBwdXQoe1xyXG4gICAgICAgICAgICB0eXBlOiBMT0FEX01ZX0lORk9fRkFJTFVSRSxcclxuICAgICAgICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2Egd2F0Y2gg7Iuk7ZaJIGNoZWNrXCIpO1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoTG9nSW4oKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNhZ2Egd2F0Y2gg7Iuk7ZaJIGNoZWNrXCIpO1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hVbmZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEZvbGxvdygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoU0lHTl9VUF9SRVFVRVNULCBzaWduVXApO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiogd2F0Y2hMb2FkVXNlcigpIHtcclxuLy8gICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9NWV9JTkZPX1JFUVVFU1QsIGxvYWRVc2VyKTtcclxuLy8gfVxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkTXlJbmZvKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX01ZX0lORk9fUkVRVUVTVCwgbG9hZE15SW5mbyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRGb2xsb3dlcnMoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KExPQURfRk9MTE9XRVJTX1JFUVVFU1QsIGxvYWRGb2xsb3dlcnMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkRm9sbG93aW5ncygpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoTE9BRF9GT0xMT1dJTkdTX1JFUVVFU1QsIGxvYWRGb2xsb3dpbmdzKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoUmVtb3ZlRm9sbG93ZXIoKSB7XHJcbiAgICB5aWVsZCB0YWtlTGF0ZXN0KFJFTU9WRV9GT0xMT1dFUl9SRVFVRVNULCByZW1vdmVGb2xsb3dlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaExvYWRVc2VyKCkge1xyXG4gICAgeWllbGQgdGFrZUxhdGVzdChMT0FEX1VTRVJfUkVRVUVTVCwgbG9hZFVzZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hDaGFuZ2VOaWNrbmFtZSgpIHtcclxuICAgIHlpZWxkIHRha2VMYXRlc3QoQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QsIGNoYW5nZU5pY2tuYW1lKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHVzZXJTYWdhKCkge1xyXG4gICAgeWllbGQgYWxsKFtcclxuICAgICAgICBmb3JrKHdhdGNoTG9nSW4pLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2dPdXQpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hGb2xsb3cpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hVbmZvbGxvdyksXHJcbiAgICAgICAgZm9yayh3YXRjaFJlbW92ZUZvbGxvd2VyKSxcclxuICAgICAgICBmb3JrKHdhdGNoU2lnblVwKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZFVzZXIpLFxyXG4gICAgICAgIGZvcmsod2F0Y2hMb2FkTXlJbmZvKSxcclxuICAgICAgICBmb3JrKHdhdGNoTG9hZEZvbGxvd2VycyksXHJcbiAgICAgICAgZm9yayh3YXRjaExvYWRGb2xsb3dpbmdzKSxcclxuICAgICAgICBmb3JrKHdhdGNoQ2hhbmdlTmlja25hbWUpLFxyXG4gICAgXSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuXHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJzs7XHJcbmltcG9ydCByb290U2FnYSBmcm9tICcuLi9zYWdhcyc7XHJcblxyXG5cclxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XHJcbiAgICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZV07XHJcblxyXG4gICAgY29uc3QgZW5oYW5jZXIgPVxyXG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIlxyXG4gICAgICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcclxuICAgICAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpO1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG4gICAgc3RvcmUuc2FnYVRhc2sgPSBzYWdhTWlkZGxld2FyZS5ydW4ocm9vdFNhZ2EpO1xyXG5cclxuICAgIHJldHVybiBzdG9yZTtcclxufTtcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGVXcmFwcGVyKGNvbmZpZ3VyZVN0b3JlLCB7XHJcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYWtlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbW1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaG9ydGlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
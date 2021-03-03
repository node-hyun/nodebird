webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CommentRow.js":
/*!**********************************!*\
  !*** ./components/CommentRow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _style_CommentRowStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/CommentRowStyle */ "./components/style/CommentRowStyle.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\nodebird\\front\\components\\CommentRow.js",
    _s = $RefreshSig$();

// import React from 'react'








function CommentRow(_ref) {
  _s();

  var comment = _ref.comment,
      PostId = _ref.PostId;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();
  console.log(comment);

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      deleteCommentDone = _useSelector.deleteCommentDone,
      deleteCommentLoading = _useSelector.deleteCommentLoading;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (deleteCommentDone) {
      antd__WEBPACK_IMPORTED_MODULE_1__["notification"].open({
        message: '알림',
        description: "댓글 삭제 성공 !!"
      });
    }
  }, [deleteCommentDone]);

  function deleteComment() {
    console.log("deleteComment button 클릭");
    console.log("comment 정보 확인 : ", comment);
    dispatch({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__["DELETE_COMMENT_REQUEST"],
      data: {
        CommentId: comment.id,
        PostId: PostId
      }
    });
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_style_CommentRowStyle__WEBPACK_IMPORTED_MODULE_3__["CommentRowRapper"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Comment"], {
      author: comment.User.nickname,
      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        children: comment.User.nickname[0]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }, this),
      content: comment.content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["CloseSquareOutlined"], {
      loading: deleteCommentLoading,
      onClick: deleteComment,
      style: {
        fontSize: '20px',
        color: '#08c'
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 9
  }, this);
}

_s(CommentRow, "pIHy686rWdev+qS46NqjKrrcFRM=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"]];
});

_c = CommentRow;
/* harmony default export */ __webpack_exports__["default"] = (CommentRow);

var _c;

$RefreshReg$(_c, "CommentRow");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Um93LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRSb3ciLCJjb21tZW50IiwiUG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImRlbGV0ZUNvbW1lbnREb25lIiwiZGVsZXRlQ29tbWVudExvYWRpbmciLCJ1c2VFZmZlY3QiLCJub3RpZmljYXRpb24iLCJvcGVuIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwiZGVsZXRlQ29tbWVudCIsInR5cGUiLCJERUxFVEVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsIkNvbW1lbnRJZCIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsImZvbnRTaXplIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNBLFVBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3JDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7O0FBRnFDLHFCQUdlTSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUgxQjtBQUFBLE1BRzdCQyxpQkFINkIsZ0JBRzdCQSxpQkFINkI7QUFBQSxNQUdWQyxvQkFIVSxnQkFHVkEsb0JBSFU7O0FBS3JDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixpQkFBSixFQUF1QjtBQUNuQkcsdURBQVksQ0FBQ0MsSUFBYixDQUFrQjtBQUNkQyxlQUFPLEVBQUUsSUFESztBQUVkQyxtQkFBVyxFQUFFO0FBRkMsT0FBbEI7QUFJSDtBQUNKLEdBUFEsRUFPTixDQUFFTixpQkFBRixDQVBNLENBQVQ7O0FBVUEsV0FBU08sYUFBVCxHQUF5QjtBQUNyQlosV0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVo7QUFDQUQsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NMLE9BQWhDO0FBRUFFLFlBQVEsQ0FBQztBQUNMZSxVQUFJLEVBQUVDLHFFQUREO0FBRUxDLFVBQUksRUFBRTtBQUNGQyxpQkFBUyxFQUFFcEIsT0FBTyxDQUFDcUIsRUFEakI7QUFFRnBCLGNBQU0sRUFBTkE7QUFGRTtBQUZELEtBQUQsQ0FBUjtBQVFIOztBQUVELHNCQUNJLHFFQUFDLHVFQUFEO0FBQUEsNEJBQ0kscUVBQUMsNENBQUQ7QUFDSSxZQUFNLEVBQUVELE9BQU8sQ0FBQ3NCLElBQVIsQ0FBYUMsUUFEekI7QUFFSSxZQUFNLGVBQUUscUVBQUMsMkNBQUQ7QUFBQSxrQkFBU3ZCLE9BQU8sQ0FBQ3NCLElBQVIsQ0FBYUMsUUFBYixDQUFzQixDQUF0QjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGWjtBQUdJLGFBQU8sRUFBRXZCLE9BQU8sQ0FBQ3dCO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU1JLHFFQUFDLHFFQUFEO0FBQXFCLGFBQU8sRUFBRWQsb0JBQTlCO0FBQW9ELGFBQU8sRUFBRU0sYUFBN0Q7QUFBNEUsV0FBSyxFQUFFO0FBQUVTLGdCQUFRLEVBQUUsTUFBWjtBQUFvQkMsYUFBSyxFQUFFO0FBQTNCO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVVIOztHQXZDUTNCLFU7VUFDWUksdUQsRUFFbUNHLHVEOzs7S0FIL0NQLFU7QUF5Q01BLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJlMzZjYzg2Y2ViMGY4OTRjYmE1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXZhdGFyLCBDb21tZW50LCBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHsgQ2xvc2VTcXVhcmVPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQ29tbWVudFJvd1JhcHBlciB9IGZyb20gJy4vc3R5bGUvQ29tbWVudFJvd1N0eWxlJztcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBERUxFVEVfQ09NTUVOVF9SRVFVRVNUIH0gZnJvbSAnLi4vcmVkdWNlcnMvcG9zdCdcclxuXHJcblxyXG5mdW5jdGlvbiBDb21tZW50Um93KHsgY29tbWVudCwgUG9zdElkIH0pIHtcclxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICAgIGNvbnNvbGUubG9nKGNvbW1lbnQpO1xyXG4gICAgY29uc3QgeyBkZWxldGVDb21tZW50RG9uZSwgZGVsZXRlQ29tbWVudExvYWRpbmcgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGVsZXRlQ29tbWVudERvbmUpIHtcclxuICAgICAgICAgICAgbm90aWZpY2F0aW9uLm9wZW4oe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ+yVjOumvCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCLrjJPquIAg7IKt7KCcIOyEseqztSAhIVwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSwgWyBkZWxldGVDb21tZW50RG9uZV0pO1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBkZWxldGVDb21tZW50KCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlQ29tbWVudCBidXR0b24g7YG066atXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29tbWVudCDsoJXrs7Qg7ZmV7J24IDogXCIsIGNvbW1lbnQpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IERFTEVURV9DT01NRU5UX1JFUVVFU1QsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIENvbW1lbnRJZDogY29tbWVudC5pZCxcclxuICAgICAgICAgICAgICAgIFBvc3RJZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPENvbW1lbnRSb3dSYXBwZXI+XHJcbiAgICAgICAgICAgIDxDb21tZW50XHJcbiAgICAgICAgICAgICAgICBhdXRob3I9e2NvbW1lbnQuVXNlci5uaWNrbmFtZX1cclxuICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhcj57Y29tbWVudC5Vc2VyLm5pY2tuYW1lWzBdfTwvQXZhdGFyPn1cclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2NvbW1lbnQuY29udGVudH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENsb3NlU3F1YXJlT3V0bGluZWQgbG9hZGluZz17ZGVsZXRlQ29tbWVudExvYWRpbmd9IG9uQ2xpY2s9e2RlbGV0ZUNvbW1lbnR9IHN0eWxlPXt7IGZvbnRTaXplOiAnMjBweCcsIGNvbG9yOiAnIzA4YycgfX0gLz5cclxuICAgICAgICA8L0NvbW1lbnRSb3dSYXBwZXI+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRSb3dcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
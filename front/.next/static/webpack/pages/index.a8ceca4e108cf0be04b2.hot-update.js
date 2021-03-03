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
  }, [deleteCommentLoading, deleteCommentDone]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50Um93LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRSb3ciLCJjb21tZW50IiwiUG9zdElkIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsImRlbGV0ZUNvbW1lbnREb25lIiwiZGVsZXRlQ29tbWVudExvYWRpbmciLCJ1c2VFZmZlY3QiLCJub3RpZmljYXRpb24iLCJvcGVuIiwibWVzc2FnZSIsImRlc2NyaXB0aW9uIiwiZGVsZXRlQ29tbWVudCIsInR5cGUiLCJERUxFVEVfQ09NTUVOVF9SRVFVRVNUIiwiZGF0YSIsIkNvbW1lbnRJZCIsImlkIiwiVXNlciIsIm5pY2tuYW1lIiwiY29udGVudCIsImZvbnRTaXplIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNBLFVBQVQsT0FBeUM7QUFBQTs7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsTUFBVSxRQUFWQSxNQUFVO0FBQ3JDLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLE9BQVo7O0FBRnFDLHFCQUdlTSwrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUgxQjtBQUFBLE1BRzdCQyxpQkFINkIsZ0JBRzdCQSxpQkFINkI7QUFBQSxNQUdWQyxvQkFIVSxnQkFHVkEsb0JBSFU7O0FBS3JDQyx5REFBUyxDQUFDLFlBQU07QUFDWixRQUFJRixpQkFBSixFQUF1QjtBQUNuQkcsdURBQVksQ0FBQ0MsSUFBYixDQUFrQjtBQUNkQyxlQUFPLEVBQUUsSUFESztBQUVkQyxtQkFBVyxFQUFFO0FBRkMsT0FBbEI7QUFJSDtBQUNKLEdBUFEsRUFPTixDQUFDTCxvQkFBRCxFQUFzQkQsaUJBQXRCLENBUE0sQ0FBVDs7QUFVQSxXQUFTTyxhQUFULEdBQXlCO0FBQ3JCWixXQUFPLENBQUNDLEdBQVIsQ0FBWSx5QkFBWjtBQUNBRCxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ0wsT0FBaEM7QUFFQUUsWUFBUSxDQUFDO0FBQ0xlLFVBQUksRUFBRUMscUVBREQ7QUFFTEMsVUFBSSxFQUFFO0FBQ0ZDLGlCQUFTLEVBQUVwQixPQUFPLENBQUNxQixFQURqQjtBQUVGcEIsY0FBTSxFQUFOQTtBQUZFO0FBRkQsS0FBRCxDQUFSO0FBUUg7O0FBRUQsc0JBQ0kscUVBQUMsdUVBQUQ7QUFBQSw0QkFDSSxxRUFBQyw0Q0FBRDtBQUNJLFlBQU0sRUFBRUQsT0FBTyxDQUFDc0IsSUFBUixDQUFhQyxRQUR6QjtBQUVJLFlBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFBLGtCQUFTdkIsT0FBTyxDQUFDc0IsSUFBUixDQUFhQyxRQUFiLENBQXNCLENBQXRCO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZaO0FBR0ksYUFBTyxFQUFFdkIsT0FBTyxDQUFDd0I7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUkscUVBQUMscUVBQUQ7QUFBcUIsYUFBTyxFQUFFZCxvQkFBOUI7QUFBb0QsYUFBTyxFQUFFTSxhQUE3RDtBQUE0RSxXQUFLLEVBQUU7QUFBRVMsZ0JBQVEsRUFBRSxNQUFaO0FBQW9CQyxhQUFLLEVBQUU7QUFBM0I7QUFBbkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBVUg7O0dBdkNRM0IsVTtVQUNZSSx1RCxFQUVtQ0csdUQ7OztLQUgvQ1AsVTtBQXlDTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYThjZWNhNGUxMDhjZjBiZTA0YjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENvbW1lbnQsIG5vdGlmaWNhdGlvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBDbG9zZVNxdWFyZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBDb21tZW50Um93UmFwcGVyIH0gZnJvbSAnLi9zdHlsZS9Db21tZW50Um93U3R5bGUnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IERFTEVURV9DT01NRU5UX1JFUVVFU1QgfSBmcm9tICcuLi9yZWR1Y2Vycy9wb3N0J1xyXG5cclxuXHJcbmZ1bmN0aW9uIENvbW1lbnRSb3coeyBjb21tZW50LCBQb3N0SWQgfSkge1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgY29uc29sZS5sb2coY29tbWVudCk7XHJcbiAgICBjb25zdCB7IGRlbGV0ZUNvbW1lbnREb25lLCBkZWxldGVDb21tZW50TG9hZGluZyB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChkZWxldGVDb21tZW50RG9uZSkge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb24ub3Blbih7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAn7JWM66a8JyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIuuMk+q4gCDsgq3soJwg7ISx6rO1ICEhXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LCBbZGVsZXRlQ29tbWVudExvYWRpbmcsZGVsZXRlQ29tbWVudERvbmVdKTtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZGVsZXRlQ29tbWVudCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZUNvbW1lbnQgYnV0dG9uIO2BtOumrVwiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImNvbW1lbnQg7KCV67O0IO2ZleyduCA6IFwiLCBjb21tZW50KTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBERUxFVEVfQ09NTUVOVF9SRVFVRVNULFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBDb21tZW50SWQ6IGNvbW1lbnQuaWQsXHJcbiAgICAgICAgICAgICAgICBQb3N0SWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb21tZW50Um93UmFwcGVyPlxyXG4gICAgICAgICAgICA8Q29tbWVudFxyXG4gICAgICAgICAgICAgICAgYXV0aG9yPXtjb21tZW50LlVzZXIubmlja25hbWV9XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXI+e2NvbW1lbnQuVXNlci5uaWNrbmFtZVswXX08L0F2YXRhcj59XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtjb21tZW50LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDbG9zZVNxdWFyZU91dGxpbmVkIGxvYWRpbmc9e2RlbGV0ZUNvbW1lbnRMb2FkaW5nfSBvbkNsaWNrPXtkZWxldGVDb21tZW50fSBzdHlsZT17eyBmb250U2l6ZTogJzIwcHgnLCBjb2xvcjogJyMwOGMnIH19IC8+XHJcbiAgICAgICAgPC9Db21tZW50Um93UmFwcGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21tZW50Um93XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
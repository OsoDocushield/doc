"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/header/SearchTrigger.js":
/*!*********************************************!*\
  !*** ./src/layouts/header/SearchTrigger.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/action/filter */ "./src/redux/action/filter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ebraheem\\Desktop\\ecommerce\\frontend\\src\\layouts\\header\\SearchTrigger.js",
    _this = undefined,
    _s = $RefreshSig$();






var SearchTrigger = function SearchTrigger(_ref) {
  _s();

  var filterByName = _ref.filterByName;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      isSearch = _useState[0],
      setIsSearch = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      text = _useState2[0],
      setText = _useState2[1];

  if (text) {
    next_router__WEBPACK_IMPORTED_MODULE_1___default().push({
      pathname: "/shop" // query: { sortBy: 'price' }

    }, undefined, {
      shallow: true
    });
  }

  var _onSubmit = function onSubmit(e) {
    e.preventDefault();
    setText(true);
    setIsSearch(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      className: "search-btn",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        className: "search-btn nav-search search-trigger",
        href: "#",
        onClick: function onClick(e) {
          setIsSearch(true);
          e.preventDefault();
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-search"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "search-wrap ".concat(isSearch ? "d-block" : ""),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "search-inner",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          className: "fas fa-times search-close",
          id: "search-close",
          onClick: function onClick() {
            return setIsSearch(false);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "search-cell",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
            method: "get",
            onSubmit: function onSubmit(e) {
              return _onSubmit(e);
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "search-field-holder",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
                type: "search",
                className: "main-search-input",
                placeholder: "Search Entire Store...",
                onChange: function onChange(e) {
                  return filterByName(e.target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 50,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, _this);
};

_s(SearchTrigger, "9meZO1wXcB/1x2Yr5mnl+uhuPOI=");

_c = SearchTrigger;
/* harmony default export */ __webpack_exports__["default"] = (SearchTrigger);

var _c;

$RefreshReg$(_c, "SearchTrigger");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zYzcwYmI0YzdjNDU5YmFlMGQ0MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJELFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFBQSxrQkFDVkYsK0NBQVEsQ0FBQyxLQUFELENBREU7QUFBQSxNQUNuQ0ksUUFEbUM7QUFBQSxNQUN6QkMsV0FEeUI7O0FBQUEsbUJBRWxCTCwrQ0FBUSxDQUFDLEtBQUQsQ0FGVTtBQUFBLE1BRW5DTSxJQUZtQztBQUFBLE1BRTdCQyxPQUY2Qjs7QUFHMUMsTUFBSUQsSUFBSixFQUFVO0FBQ1JSLElBQUFBLHVEQUFBLENBQ0U7QUFDRVcsTUFBQUEsUUFBUSxFQUFFLE9BRFosQ0FFRTs7QUFGRixLQURGLEVBS0VDLFNBTEYsRUFNRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQU5GO0FBUUQ7O0FBRUQsTUFBTUMsU0FBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQVAsSUFBQUEsT0FBTyxDQUFDLElBQUQsQ0FBUDtBQUNBRixJQUFBQSxXQUFXLENBQUMsS0FBRCxDQUFYO0FBQ0QsR0FKRDs7QUFNQSxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQSw2QkFDRTtBQUNFLGlCQUFTLEVBQUMsc0NBRFo7QUFFRSxZQUFJLEVBQUMsR0FGUDtBQUdFLGVBQU8sRUFBRSxpQkFBQ1EsQ0FBRCxFQUFPO0FBQ2RSLFVBQUFBLFdBQVcsQ0FBQyxJQUFELENBQVg7QUFDQVEsVUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0QsU0FOSDtBQUFBLCtCQVFFO0FBQUcsbUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFBSyxlQUFTLHdCQUFpQlYsUUFBUSxHQUFHLFNBQUgsR0FBZSxFQUF4QyxDQUFkO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGNBQWY7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsMkJBRFo7QUFFRSxZQUFFLEVBQUMsY0FGTDtBQUdFLGlCQUFPLEVBQUU7QUFBQSxtQkFBTUMsV0FBVyxDQUFDLEtBQUQsQ0FBakI7QUFBQTtBQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFNRTtBQUFLLG1CQUFTLEVBQUMsYUFBZjtBQUFBLGlDQUNFO0FBQU0sa0JBQU0sRUFBQyxLQUFiO0FBQW1CLG9CQUFRLEVBQUUsa0JBQUNRLENBQUQ7QUFBQSxxQkFBT0QsU0FBUSxDQUFDQyxDQUFELENBQWY7QUFBQSxhQUE3QjtBQUFBLG1DQUNFO0FBQUssdUJBQVMsRUFBQyxxQkFBZjtBQUFBLHFDQUNFO0FBQ0Usb0JBQUksRUFBQyxRQURQO0FBRUUseUJBQVMsRUFBQyxtQkFGWjtBQUdFLDJCQUFXLEVBQUMsd0JBSGQ7QUFJRSx3QkFBUSxFQUFFLGtCQUFDQSxDQUFEO0FBQUEseUJBQU9YLFlBQVksQ0FBQ1csQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQVYsQ0FBbkI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBcUNELENBekREOztHQUFNYjs7S0FBQUE7QUEyRE4sK0RBQWVBLGFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaGVhZGVyL1NlYXJjaFRyaWdnZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgZmlsdGVyQnlOYW1lIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbi9maWx0ZXJcIjtcclxuXHJcbmNvbnN0IFNlYXJjaFRyaWdnZXIgPSAoeyBmaWx0ZXJCeU5hbWUgfSkgPT4ge1xyXG4gIGNvbnN0IFtpc1NlYXJjaCwgc2V0SXNTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBpZiAodGV4dCkge1xyXG4gICAgUm91dGVyLnB1c2goXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRobmFtZTogXCIvc2hvcFwiLFxyXG4gICAgICAgIC8vIHF1ZXJ5OiB7IHNvcnRCeTogJ3ByaWNlJyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgeyBzaGFsbG93OiB0cnVlIH1cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXRUZXh0KHRydWUpO1xyXG4gICAgc2V0SXNTZWFyY2goZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJzZWFyY2gtYnRuXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1idG4gbmF2LXNlYXJjaCBzZWFyY2gtdHJpZ2dlclwiXHJcbiAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRJc1NlYXJjaCh0cnVlKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2VhcmNoXCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgc2VhcmNoLXdyYXAgJHtpc1NlYXJjaCA/IFwiZC1ibG9ja1wiIDogXCJcIn1gfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pbm5lclwiPlxyXG4gICAgICAgICAgPGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmFzIGZhLXRpbWVzIHNlYXJjaC1jbG9zZVwiXHJcbiAgICAgICAgICAgIGlkPVwic2VhcmNoLWNsb3NlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNTZWFyY2goZmFsc2UpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNlbGxcIj5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiZ2V0XCIgb25TdWJtaXQ9eyhlKSA9PiBvblN1Ym1pdChlKX0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZmllbGQtaG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW4tc2VhcmNoLWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggRW50aXJlIFN0b3JlLi4uXCJcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBmaWx0ZXJCeU5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoVHJpZ2dlcjtcclxuIl0sIm5hbWVzIjpbIlJvdXRlciIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJjb25uZWN0IiwiZmlsdGVyQnlOYW1lIiwiU2VhcmNoVHJpZ2dlciIsImlzU2VhcmNoIiwic2V0SXNTZWFyY2giLCJ0ZXh0Iiwic2V0VGV4dCIsInB1c2giLCJwYXRobmFtZSIsInVuZGVmaW5lZCIsInNoYWxsb3ciLCJvblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==
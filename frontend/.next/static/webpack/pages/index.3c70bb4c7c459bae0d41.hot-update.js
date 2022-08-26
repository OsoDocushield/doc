"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2M3MGJiNGM3YzQ1OWJhZTBkNDEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUssYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFzQjtBQUFBOztBQUFBLE1BQW5CRCxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQUEsa0JBQ1ZGLCtDQUFRLENBQUMsS0FBRCxDQURFO0FBQUEsTUFDbkNJLFFBRG1DO0FBQUEsTUFDekJDLFdBRHlCOztBQUFBLG1CQUVsQkwsK0NBQVEsQ0FBQyxLQUFELENBRlU7QUFBQSxNQUVuQ00sSUFGbUM7QUFBQSxNQUU3QkMsT0FGNkI7O0FBRzFDLE1BQUlELElBQUosRUFBVTtBQUNSUixJQUFBQSx1REFBQSxDQUNFO0FBQ0VXLE1BQUFBLFFBQVEsRUFBRSxPQURaLENBRUU7O0FBRkYsS0FERixFQUtFQyxTQUxGLEVBTUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FORjtBQVFEOztBQUVELE1BQU1DLFNBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLENBQUQsRUFBTztBQUN0QkEsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FQLElBQUFBLE9BQU8sQ0FBQyxJQUFELENBQVA7QUFDQUYsSUFBQUEsV0FBVyxDQUFDLEtBQUQsQ0FBWDtBQUNELEdBSkQ7O0FBTUEsc0JBQ0UsOERBQUMsMkNBQUQ7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyxZQUFkO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFDLHNDQURaO0FBRUUsWUFBSSxFQUFDLEdBRlA7QUFHRSxlQUFPLEVBQUUsaUJBQUNRLENBQUQsRUFBTztBQUNkUixVQUFBQSxXQUFXLENBQUMsSUFBRCxDQUFYO0FBQ0FRLFVBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNELFNBTkg7QUFBQSwrQkFRRTtBQUFHLG1CQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQUssZUFBUyx3QkFBaUJWLFFBQVEsR0FBRyxTQUFILEdBQWUsRUFBeEMsQ0FBZDtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxjQUFmO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFDLDJCQURaO0FBRUUsWUFBRSxFQUFDLGNBRkw7QUFHRSxpQkFBTyxFQUFFO0FBQUEsbUJBQU1DLFdBQVcsQ0FBQyxLQUFELENBQWpCO0FBQUE7QUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRTtBQUFNLGtCQUFNLEVBQUMsS0FBYjtBQUFtQixvQkFBUSxFQUFFLGtCQUFDUSxDQUFEO0FBQUEscUJBQU9ELFNBQVEsQ0FBQ0MsQ0FBRCxDQUFmO0FBQUEsYUFBN0I7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMscUJBQWY7QUFBQSxxQ0FDRTtBQUNFLG9CQUFJLEVBQUMsUUFEUDtBQUVFLHlCQUFTLEVBQUMsbUJBRlo7QUFHRSwyQkFBVyxFQUFDLHdCQUhkO0FBSUUsd0JBQVEsRUFBRSxrQkFBQ0EsQ0FBRDtBQUFBLHlCQUFPWCxZQUFZLENBQUNXLENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQW5CO0FBQUE7QUFKWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXFDRCxDQXpERDs7R0FBTWI7O0tBQUFBO0FBMkROLCtEQUFlQSxhQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXRzL2hlYWRlci9TZWFyY2hUcmlnZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGZpbHRlckJ5TmFtZSB9IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb24vZmlsdGVyXCI7XHJcblxyXG5jb25zdCBTZWFyY2hUcmlnZ2VyID0gKHsgZmlsdGVyQnlOYW1lIH0pID0+IHtcclxuICBjb25zdCBbaXNTZWFyY2gsIHNldElzU2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdGV4dCwgc2V0VGV4dF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgaWYgKHRleHQpIHtcclxuICAgIFJvdXRlci5wdXNoKFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aG5hbWU6IFwiL3Nob3BcIixcclxuICAgICAgICAvLyBxdWVyeTogeyBzb3J0Qnk6ICdwcmljZScgfVxyXG4gICAgICB9LFxyXG4gICAgICB1bmRlZmluZWQsXHJcbiAgICAgIHsgc2hhbGxvdzogdHJ1ZSB9XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0VGV4dCh0cnVlKTtcclxuICAgIHNldElzU2VhcmNoKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8bGkgY2xhc3NOYW1lPVwic2VhcmNoLWJ0blwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtYnRuIG5hdi1zZWFyY2ggc2VhcmNoLXRyaWdnZXJcIlxyXG4gICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgc2V0SXNTZWFyY2godHJ1ZSk7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNlYXJjaFwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2xpPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHNlYXJjaC13cmFwICR7aXNTZWFyY2ggPyBcImQtYmxvY2tcIiA6IFwiXCJ9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtaW5uZXJcIj5cclxuICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZhcyBmYS10aW1lcyBzZWFyY2gtY2xvc2VcIlxyXG4gICAgICAgICAgICBpZD1cInNlYXJjaC1jbG9zZVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzU2VhcmNoKGZhbHNlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1jZWxsXCI+XHJcbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cImdldFwiIG9uU3VibWl0PXsoZSkgPT4gb25TdWJtaXQoZSl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWZpZWxkLWhvbGRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluLXNlYXJjaC1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEVudGlyZSBTdG9yZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZmlsdGVyQnlOYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaFRyaWdnZXI7XHJcbiJdLCJuYW1lcyI6WyJSb3V0ZXIiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwiY29ubmVjdCIsImZpbHRlckJ5TmFtZSIsIlNlYXJjaFRyaWdnZXIiLCJpc1NlYXJjaCIsInNldElzU2VhcmNoIiwidGV4dCIsInNldFRleHQiLCJwdXNoIiwicGF0aG5hbWUiLCJ1bmRlZmluZWQiLCJzaGFsbG93Iiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=
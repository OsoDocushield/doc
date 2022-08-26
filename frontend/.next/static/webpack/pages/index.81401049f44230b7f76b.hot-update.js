"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Banner */ "./src/components/Banner.js");
/* harmony import */ var _src_components_blog_Blogs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/blog/Blogs */ "./src/components/blog/Blogs.js");
/* harmony import */ var _src_components_Features__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Features */ "./src/components/Features.js");
/* harmony import */ var _src_components_product_HomePageProducts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/product/HomePageProducts */ "./src/components/product/HomePageProducts.js");
/* harmony import */ var _src_components_slider_HomeSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/components/slider/HomeSlider */ "./src/components/slider/HomeSlider.js");
/* harmony import */ var _src_components_slider_ImageSlider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/components/slider/ImageSlider */ "./src/components/slider/ImageSlider.js");
/* harmony import */ var _src_layouts_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/layouts/Layout */ "./src/layouts/Layout.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/utils */ "./utils/utils.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ebraheem\\Desktop\\ecommerce\\frontend\\pages\\index.js",
    _this = undefined;












var Index = function Index(_ref) {
  var blogs = _ref.blogs,
      imageSlider = _ref.imageSlider,
      banner = _ref.banner,
      products = _ref.products;
  var sliders = [{
    "bg": "/img/slider/slide5.jpg",
    "shapImg": "/img/slider/shape-icon-2.png",
    "heading": "New Arrival",
    "shopLink": true,
    "categoryLink": true
  }, {
    "bg": "/img/slider/slide5-2.jpg",
    "shapImg": "/img/slider/shape-icon-2.png",
    "heading": "Trendy Collection",
    "shopLink": true,
    "categoryLink": true
  }, {
    "bg": "/img/slider/slide5-3.jpg",
    "shapImg": "/img/slider/shape-icon-2.png",
    "heading": "Men Collection",
    "shopLink": true,
    "categoryLink": true
  }];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "slider-area pos-relative",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "slider-active",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slider_HomeSlider__WEBPACK_IMPORTED_MODULE_7__.default, {
          sliders: sliders,
          children: sliders && sliders.map(function (slide, i) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center",
              "data-background": slide.bg,
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "shape-title shape-title-4 bounce-animate",
                style: {
                  zIndex: "unset"
                },
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  children: new Date().getFullYear()
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "shape-icon shape-icon-4 bounce-animate",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: slide.shapImg,
                  alt: "Shap"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "container",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "row",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                    className: "col-xl-12",
                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                      className: "slide-content slide-content-4 text-center pt-40",
                      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                        "data-animation": "fadeInUp",
                        "data-delay": ".3s",
                        children: slide.heading
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 67,
                        columnNumber: 27
                      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                        className: "slide-btn",
                        children: [slide.shopLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/shop",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn theme-btn",
                            "data-animation": "fadeInLeft",
                            "data-delay": ".6s",
                            children: "shop now"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 73,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 72,
                          columnNumber: 31
                        }, _this), slide.categoryLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                          href: "/shop",
                          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                            className: "btn white-btn",
                            "data-animation": "fadeInRight",
                            "data-delay": ".9s",
                            children: "category"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 84,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 83,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 70,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 66,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Features__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_c = Index;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODE0MDEwNDlmNDQyMzBiN2Y3NmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNVSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUtSO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRSxVQUFNLHdCQURSO0FBRUUsZUFBVyw4QkFGYjtBQUdFLGVBQVcsYUFIYjtBQUlFLGdCQUFZLElBSmQ7QUFLRSxvQkFBZ0I7QUFMbEIsR0FEYyxFQVFkO0FBQ0UsVUFBTSwwQkFEUjtBQUVFLGVBQVcsOEJBRmI7QUFHRSxlQUFXLG1CQUhiO0FBSUUsZ0JBQVksSUFKZDtBQUtFLG9CQUFnQjtBQUxsQixHQVJjLEVBZWQ7QUFDRSxVQUFNLDBCQURSO0FBRUUsZUFBVyw4QkFGYjtBQUdFLGVBQVcsZ0JBSGI7QUFJRSxnQkFBWSxJQUpkO0FBS0Usb0JBQWdCO0FBTGxCLEdBZmMsQ0FBaEI7QUF3QkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBQywwQkFBbkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNFLDhEQUFDLHNFQUFEO0FBQVksaUJBQU8sRUFBRUEsT0FBckI7QUFBQSxvQkFDR0EsT0FBTyxJQUNOQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxnQ0FDVjtBQUVFLHVCQUFTLEVBQUMscUZBRlo7QUFHRSxpQ0FBaUJELEtBQUssQ0FBQ0UsRUFIekI7QUFBQSxzQ0FLRTtBQUNFLHlCQUFTLEVBQUMsMENBRFo7QUFFRSxxQkFBSyxFQUFFO0FBQUVDLGtCQUFBQSxNQUFNLEVBQUU7QUFBVixpQkFGVDtBQUFBLHVDQUlFO0FBQUEsNEJBQUssSUFBSUMsSUFBSixHQUFXQyxXQUFYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsd0NBQWY7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUVMLEtBQUssQ0FBQ00sT0FBaEI7QUFBeUIscUJBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQWNFO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLEtBQWY7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsV0FBZjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxpREFBZjtBQUFBLDhDQUNFO0FBQUksMENBQWUsVUFBbkI7QUFBOEIsc0NBQVcsS0FBekM7QUFBQSxrQ0FDR04sS0FBSyxDQUFDTztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFJRTtBQUFLLGlDQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNHUCxLQUFLLENBQUNRLFFBQU4saUJBQ0MsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLE9BQVg7QUFBQSxpREFDRTtBQUNFLHFDQUFTLEVBQUMsZUFEWjtBQUVFLDhDQUFlLFlBRmpCO0FBR0UsMENBQVcsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkosRUFZR1IsS0FBSyxDQUFDUyxZQUFOLGlCQUNDLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxPQUFYO0FBQUEsaURBQ0U7QUFDRSxxQ0FBUyxFQUFDLGVBRFo7QUFFRSw4Q0FBZSxhQUZqQjtBQUdFLDBDQUFXLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEY7QUFBQSxlQUNPUixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFU7QUFBQSxXQUFaO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUErREUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9FRCxDQWxHRDs7S0FBTVI7O0FBb0dOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Jhbm5lclwiO1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Jsb2cvQmxvZ3NcIjtcclxuaW1wb3J0IEZlYXR1cmVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlc1wiO1xyXG5pbXBvcnQgSG9tZVBhZ2VQcm9kdWN0cyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Ib21lUGFnZVByb2R1Y3RzXCI7XHJcbmltcG9ydCBIb21lU2xpZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSG9tZVNsaWRlclwiO1xyXG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9JbWFnZVNsaWRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgZnJvbUltYWdlVG9VcmwsIEFQSV9VUkwgfSBmcm9tICcuLi91dGlscy91dGlscydcclxuXHJcbmNvbnN0IEluZGV4ID0gKHtcclxuICBibG9ncyxcclxuICBpbWFnZVNsaWRlcixcclxuICBiYW5uZXIsXHJcbiAgcHJvZHVjdHMsXHJcbn0pID0+IHtcclxuICBjb25zdCBzbGlkZXJzID0gW1xyXG4gICAge1xyXG4gICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LmpwZ1wiLFxyXG4gICAgICBcInNoYXBJbWdcIjogXCIvaW1nL3NsaWRlci9zaGFwZS1pY29uLTIucG5nXCIsXHJcbiAgICAgIFwiaGVhZGluZ1wiOiBcIk5ldyBBcnJpdmFsXCIsXHJcbiAgICAgIFwic2hvcExpbmtcIjogdHJ1ZSxcclxuICAgICAgXCJjYXRlZ29yeUxpbmtcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJiZ1wiOiBcIi9pbWcvc2xpZGVyL3NsaWRlNS0yLmpwZ1wiLFxyXG4gICAgICBcInNoYXBJbWdcIjogXCIvaW1nL3NsaWRlci9zaGFwZS1pY29uLTIucG5nXCIsXHJcbiAgICAgIFwiaGVhZGluZ1wiOiBcIlRyZW5keSBDb2xsZWN0aW9uXCIsXHJcbiAgICAgIFwic2hvcExpbmtcIjogdHJ1ZSxcclxuICAgICAgXCJjYXRlZ29yeUxpbmtcIjogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJiZ1wiOiBcIi9pbWcvc2xpZGVyL3NsaWRlNS0zLmpwZ1wiLFxyXG4gICAgICBcInNoYXBJbWdcIjogXCIvaW1nL3NsaWRlci9zaGFwZS1pY29uLTIucG5nXCIsXHJcbiAgICAgIFwiaGVhZGluZ1wiOiBcIk1lbiBDb2xsZWN0aW9uXCIsXHJcbiAgICAgIFwic2hvcExpbmtcIjogdHJ1ZSxcclxuICAgICAgXCJjYXRlZ29yeUxpbmtcIjogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzbGlkZXItYXJlYSBwb3MtcmVsYXRpdmVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1hY3RpdmVcIj5cclxuICAgICAgICAgIDxIb21lU2xpZGVyIHNsaWRlcnM9e3NsaWRlcnN9PlxyXG4gICAgICAgICAgICB7c2xpZGVycyAmJlxyXG4gICAgICAgICAgICAgIHNsaWRlcnMubWFwKChzbGlkZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbmdsZS1zbGlkZXIgc2xpZGUtMS1zdHlsZSBzbGlkZS1oZWlnaHQtMiBzbGlkZS1oZWlnaHQtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1iYWNrZ3JvdW5kPXtzbGlkZS5iZ31cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXBlLXRpdGxlIHNoYXBlLXRpdGxlLTQgYm91bmNlLWFuaW1hdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogXCJ1bnNldFwiIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L2gyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pY29uIHNoYXBlLWljb24tNCBib3VuY2UtYW5pbWF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzbGlkZS5zaGFwSW1nfSBhbHQ9XCJTaGFwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGVudCBzbGlkZS1jb250ZW50LTQgdGV4dC1jZW50ZXIgcHQtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiIGRhdGEtZGVsYXk9XCIuM3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZS5oZWFkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZS5zaG9wTGluayAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gdGhlbWUtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiLjZzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZS5jYXRlZ29yeUxpbmsgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHdoaXRlLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9XCIuOXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Ib21lU2xpZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICB7LyogPEJhbm5lciBiYW5uZXI9e2Jhbm5lcn0gLz4gKi99XHJcbiAgICAgIHsvKiA8SG9tZVBhZ2VQcm9kdWN0cyBwcm9kdWN0cz17cHJvZHVjdHN9IC8+ICovfVxyXG4gICAgICA8RmVhdHVyZXMgLz5cclxuICAgICAgey8qIDxCbG9ncyBibG9ncz17YmxvZ3N9IC8+ICovfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgY29uc3QgcHJvZHVjdF9yZXMgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9ob21lLXBhZ2Utc2xpZGVycz9wb3B1bGF0ZT1pbWFnZWApXHJcbiAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBwcm9kdWN0X3Jlcy5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHByb2R1Y3RzXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJCYW5uZXIiLCJCbG9ncyIsIkZlYXR1cmVzIiwiSG9tZVBhZ2VQcm9kdWN0cyIsIkhvbWVTbGlkZXIiLCJJbWFnZVNsaWRlciIsIkxheW91dCIsImZyb21JbWFnZVRvVXJsIiwiSW5kZXgiLCJibG9ncyIsImltYWdlU2xpZGVyIiwiYmFubmVyIiwicHJvZHVjdHMiLCJzbGlkZXJzIiwibWFwIiwic2xpZGUiLCJpIiwiYmciLCJ6SW5kZXgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzaGFwSW1nIiwiaGVhZGluZyIsInNob3BMaW5rIiwiY2F0ZWdvcnlMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==
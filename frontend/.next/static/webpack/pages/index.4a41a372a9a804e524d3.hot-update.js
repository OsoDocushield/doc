"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ebraheem\\Desktop\\ecommerce\\frontend\\pages\\index.js",
    _this = undefined;











var Index = function Index(_ref) {
  var features = _ref.features,
      blogs = _ref.blogs,
      imageSlider = _ref.imageSlider,
      banner = _ref.banner,
      products = _ref.products;
  var sliders = [];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layouts_Layout__WEBPACK_IMPORTED_MODULE_9__.default, {
    transparent: true,
    whiteMenu: true,
    extraTransparentClass: "transparent-header-2",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
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
                    lineNumber: 40,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "shape-icon shape-icon-4 bounce-animate",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: slide.shapImg,
                    alt: "Shap"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 42,
                  columnNumber: 21
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
                          lineNumber: 49,
                          columnNumber: 29
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
                              lineNumber: 55,
                              columnNumber: 35
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 54,
                            columnNumber: 33
                          }, _this), slide.categoryLink && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/shop",
                            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                              className: "btn white-btn",
                              "data-animation": "fadeInRight",
                              "data-delay": ".9s",
                              children: "category"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 66,
                              columnNumber: 35
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 65,
                            columnNumber: 33
                          }, _this)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 52,
                          columnNumber: 29
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 48,
                        columnNumber: 27
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 47,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 21
                }, _this)]
              }, i, true, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Banner__WEBPACK_IMPORTED_MODULE_3__.default, {
        banner: banner
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_product_HomePageProducts__WEBPACK_IMPORTED_MODULE_6__.default, {
        products: products
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Features__WEBPACK_IMPORTED_MODULE_5__.default, {
        features: features
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_blog_Blogs__WEBPACK_IMPORTED_MODULE_4__.default, {
        blogs: blogs
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_slider_ImageSlider__WEBPACK_IMPORTED_MODULE_8__.default, {
        imageSlider: imageSlider
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, _this);
};

_c = Index;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGE0MWEzNzJhOWE4MDRlNTI0ZDMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQU1SO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0Esc0JBQ0UsOERBQUMsd0RBQUQ7QUFDRSxlQUFXLE1BRGI7QUFFRSxhQUFTLE1BRlg7QUFHRSx5QkFBcUIsRUFBRSxzQkFIekI7QUFBQSwyQkFLRTtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBQywwQkFBbkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGlDQUNFLDhEQUFDLHNFQUFEO0FBQVksbUJBQU8sRUFBRUEsT0FBckI7QUFBQSxzQkFDR0EsT0FBTyxJQUNOQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxrQ0FDVjtBQUVFLHlCQUFTLEVBQUMscUZBRlo7QUFHRSxtQ0FBaUJELEtBQUssQ0FBQ0UsRUFIekI7QUFBQSx3Q0FLRTtBQUNFLDJCQUFTLEVBQUMsMENBRFo7QUFFRSx1QkFBSyxFQUFFO0FBQUVDLG9CQUFBQSxNQUFNLEVBQUU7QUFBVixtQkFGVDtBQUFBLHlDQUlFO0FBQUEsOEJBQUssSUFBSUMsSUFBSixHQUFXQyxXQUFYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFXRTtBQUFLLDJCQUFTLEVBQUMsd0NBQWY7QUFBQSx5Q0FDRTtBQUFLLHVCQUFHLEVBQUVMLEtBQUssQ0FBQ00sT0FBaEI7QUFBeUIsdUJBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFYRixlQWNFO0FBQUssMkJBQVMsRUFBQyxXQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLEtBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsV0FBZjtBQUFBLDZDQUNFO0FBQUssaUNBQVMsRUFBQyxpREFBZjtBQUFBLGdEQUNFO0FBQUksNENBQWUsVUFBbkI7QUFBOEIsd0NBQVcsS0FBekM7QUFBQSxvQ0FDR04sS0FBSyxDQUFDTztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsZUFJRTtBQUFLLG1DQUFTLEVBQUMsV0FBZjtBQUFBLHFDQUNHUCxLQUFLLENBQUNRLFFBQU4saUJBQ0MsOERBQUMsa0RBQUQ7QUFBTSxnQ0FBSSxFQUFDLE9BQVg7QUFBQSxtREFDRTtBQUNFLHVDQUFTLEVBQUMsZUFEWjtBQUVFLGdEQUFlLFlBRmpCO0FBR0UsNENBQVcsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkosRUFZR1IsS0FBSyxDQUFDUyxZQUFOLGlCQUNDLDhEQUFDLGtEQUFEO0FBQU0sZ0NBQUksRUFBQyxPQUFYO0FBQUEsbURBQ0U7QUFDRSx1Q0FBUyxFQUFDLGVBRFo7QUFFRSxnREFBZSxhQUZqQjtBQUdFLDRDQUFXLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEY7QUFBQSxpQkFDT1IsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURVO0FBQUEsYUFBWjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBNkRFLDhEQUFDLDJEQUFEO0FBQVEsY0FBTSxFQUFFTDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0RGLGVBOERFLDhEQUFDLDZFQUFEO0FBQWtCLGdCQUFRLEVBQUVDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE5REYsZUErREUsOERBQUMsNkRBQUQ7QUFBVSxnQkFBUSxFQUFFSjtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBL0RGLGVBZ0VFLDhEQUFDLCtEQUFEO0FBQU8sYUFBSyxFQUFFQztBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFoRUYsZUFpRUUsOERBQUMsdUVBQUQ7QUFBYSxtQkFBVyxFQUFFQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBakVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJFRCxDQW5GRDs7S0FBTUg7QUFxRk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQmFubmVyXCI7XHJcbmltcG9ydCBCbG9ncyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvYmxvZy9CbG9nc1wiO1xyXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzXCI7XHJcbmltcG9ydCBIb21lUGFnZVByb2R1Y3RzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L0hvbWVQYWdlUHJvZHVjdHNcIjtcclxuaW1wb3J0IEhvbWVTbGlkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9Ib21lU2xpZGVyXCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL0ltYWdlU2xpZGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG4gIGZlYXR1cmVzLFxyXG4gIGJsb2dzLFxyXG4gIGltYWdlU2xpZGVyLFxyXG4gIGJhbm5lcixcclxuICBwcm9kdWN0cyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNsaWRlcnMgPSBbXVxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0XHJcbiAgICAgIHRyYW5zcGFyZW50XHJcbiAgICAgIHdoaXRlTWVudVxyXG4gICAgICBleHRyYVRyYW5zcGFyZW50Q2xhc3M9e1widHJhbnNwYXJlbnQtaGVhZGVyLTJcIn1cclxuICAgID5cclxuICAgICAgPG1haW4+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xpZGVyLWFyZWEgcG9zLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1hY3RpdmVcIj5cclxuICAgICAgICAgICAgPEhvbWVTbGlkZXIgc2xpZGVycz17c2xpZGVyc30+XHJcbiAgICAgICAgICAgICAge3NsaWRlcnMgJiZcclxuICAgICAgICAgICAgICAgIHNsaWRlcnMubWFwKChzbGlkZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpbmdsZS1zbGlkZXIgc2xpZGUtMS1zdHlsZSBzbGlkZS1oZWlnaHQtMiBzbGlkZS1oZWlnaHQtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWJhY2tncm91bmQ9e3NsaWRlLmJnfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcGUtdGl0bGUgc2hhcGUtdGl0bGUtNCBib3VuY2UtYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwidW5zZXRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMj57bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaGFwZS1pY29uIHNoYXBlLWljb24tNCBib3VuY2UtYW5pbWF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NsaWRlLnNoYXBJbWd9IGFsdD1cIlNoYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtY29udGVudCBzbGlkZS1jb250ZW50LTQgdGV4dC1jZW50ZXIgcHQtNDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCIgZGF0YS1kZWxheT1cIi4zc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuc2hvcExpbmsgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHRoZW1lLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluTGVmdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9XCIuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG9wIG5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLmNhdGVnb3J5TGluayAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gd2hpdGUtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJmYWRlSW5SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9XCIuOXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0hvbWVTbGlkZXI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblxyXG4gICAgICAgIDxCYW5uZXIgYmFubmVyPXtiYW5uZXJ9IC8+XHJcbiAgICAgICAgPEhvbWVQYWdlUHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPlxyXG4gICAgICAgIDxGZWF0dXJlcyBmZWF0dXJlcz17ZmVhdHVyZXN9IC8+XHJcbiAgICAgICAgPEJsb2dzIGJsb2dzPXtibG9nc30gLz5cclxuICAgICAgICA8SW1hZ2VTbGlkZXIgaW1hZ2VTbGlkZXI9e2ltYWdlU2xpZGVyfSAvPlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlRWZmZWN0IiwiQmFubmVyIiwiQmxvZ3MiLCJGZWF0dXJlcyIsIkhvbWVQYWdlUHJvZHVjdHMiLCJIb21lU2xpZGVyIiwiSW1hZ2VTbGlkZXIiLCJMYXlvdXQiLCJJbmRleCIsImZlYXR1cmVzIiwiYmxvZ3MiLCJpbWFnZVNsaWRlciIsImJhbm5lciIsInByb2R1Y3RzIiwic2xpZGVycyIsIm1hcCIsInNsaWRlIiwiaSIsImJnIiwiekluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic2hhcEltZyIsImhlYWRpbmciLCJzaG9wTGluayIsImNhdGVnb3J5TGluayJdLCJzb3VyY2VSb290IjoiIn0=
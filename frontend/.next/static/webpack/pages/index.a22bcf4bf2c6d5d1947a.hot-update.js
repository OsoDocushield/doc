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
                  lineNumber: 57,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "shape-icon shape-icon-4 bounce-animate",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: slide.shapImg,
                  alt: "Shap"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
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
                        lineNumber: 66,
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
                            lineNumber: 72,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 71,
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
                            lineNumber: 83,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 82,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 69,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 19
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Features__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTIyYmNmNGJmMmM2ZDVkMTk0N2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUtSO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRSxVQUFNLHdCQURSO0FBRUUsZUFBVyw4QkFGYjtBQUdFLGVBQVcsYUFIYjtBQUlFLGdCQUFZLElBSmQ7QUFLRSxvQkFBZ0I7QUFMbEIsR0FEYyxFQVFkO0FBQ0UsVUFBTSwwQkFEUjtBQUVFLGVBQVcsOEJBRmI7QUFHRSxlQUFXLG1CQUhiO0FBSUUsZ0JBQVksSUFKZDtBQUtFLG9CQUFnQjtBQUxsQixHQVJjLEVBZWQ7QUFDRSxVQUFNLDBCQURSO0FBRUUsZUFBVyw4QkFGYjtBQUdFLGVBQVcsZ0JBSGI7QUFJRSxnQkFBWSxJQUpkO0FBS0Usb0JBQWdCO0FBTGxCLEdBZmMsQ0FBaEI7QUF3QkEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFTLGVBQVMsRUFBQywwQkFBbkI7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsZUFBZjtBQUFBLCtCQUNFLDhEQUFDLHNFQUFEO0FBQVksaUJBQU8sRUFBRUEsT0FBckI7QUFBQSxvQkFDR0EsT0FBTyxJQUNOQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFDQyxLQUFELEVBQVFDLENBQVI7QUFBQSxnQ0FDVjtBQUVFLHVCQUFTLEVBQUMscUZBRlo7QUFHRSxpQ0FBaUJELEtBQUssQ0FBQ0UsRUFIekI7QUFBQSxzQ0FLRTtBQUNFLHlCQUFTLEVBQUMsMENBRFo7QUFFRSxxQkFBSyxFQUFFO0FBQUVDLGtCQUFBQSxNQUFNLEVBQUU7QUFBVixpQkFGVDtBQUFBLHVDQUlFO0FBQUEsNEJBQUssSUFBSUMsSUFBSixHQUFXQyxXQUFYO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsd0NBQWY7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUVMLEtBQUssQ0FBQ00sT0FBaEI7QUFBeUIscUJBQUcsRUFBQztBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQWNFO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLEtBQWY7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsV0FBZjtBQUFBLDJDQUNFO0FBQUssK0JBQVMsRUFBQyxpREFBZjtBQUFBLDhDQUNFO0FBQUksMENBQWUsVUFBbkI7QUFBOEIsc0NBQVcsS0FBekM7QUFBQSxrQ0FDR04sS0FBSyxDQUFDTztBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFJRTtBQUFLLGlDQUFTLEVBQUMsV0FBZjtBQUFBLG1DQUNHUCxLQUFLLENBQUNRLFFBQU4saUJBQ0MsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLE9BQVg7QUFBQSxpREFDRTtBQUNFLHFDQUFTLEVBQUMsZUFEWjtBQUVFLDhDQUFlLFlBRmpCO0FBR0UsMENBQVcsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkosRUFZR1IsS0FBSyxDQUFDUyxZQUFOLGlCQUNDLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxPQUFYO0FBQUEsaURBQ0U7QUFDRSxxQ0FBUyxFQUFDLGVBRFo7QUFFRSw4Q0FBZSxhQUZqQjtBQUdFLDBDQUFXLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEY7QUFBQSxlQUNPUixDQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRFU7QUFBQSxXQUFaO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUErREUsOERBQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9FRCxDQWxHRDs7S0FBTVI7QUFvR04sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQmFubmVyXCI7XHJcbmltcG9ydCBCbG9ncyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvYmxvZy9CbG9nc1wiO1xyXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzXCI7XHJcbmltcG9ydCBIb21lUGFnZVByb2R1Y3RzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L0hvbWVQYWdlUHJvZHVjdHNcIjtcclxuaW1wb3J0IEhvbWVTbGlkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9Ib21lU2xpZGVyXCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL0ltYWdlU2xpZGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG4gIGJsb2dzLFxyXG4gIGltYWdlU2xpZGVyLFxyXG4gIGJhbm5lcixcclxuICBwcm9kdWN0cyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNsaWRlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiYmdcIjogXCIvaW1nL3NsaWRlci9zbGlkZTUuanBnXCIsXHJcbiAgICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAgICAgXCJoZWFkaW5nXCI6IFwiTmV3IEFycml2YWxcIixcclxuICAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LTIuanBnXCIsXHJcbiAgICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAgICAgXCJoZWFkaW5nXCI6IFwiVHJlbmR5IENvbGxlY3Rpb25cIixcclxuICAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LTMuanBnXCIsXHJcbiAgICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAgICAgXCJoZWFkaW5nXCI6IFwiTWVuIENvbGxlY3Rpb25cIixcclxuICAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNsaWRlci1hcmVhIHBvcy1yZWxhdGl2ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLWFjdGl2ZVwiPlxyXG4gICAgICAgICAgPEhvbWVTbGlkZXIgc2xpZGVycz17c2xpZGVyc30+XHJcbiAgICAgICAgICAgIHtzbGlkZXJzICYmXHJcbiAgICAgICAgICAgICAgc2xpZGVycy5tYXAoKHNsaWRlLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2luZ2xlLXNsaWRlciBzbGlkZS0xLXN0eWxlIHNsaWRlLWhlaWdodC0yIHNsaWRlLWhlaWdodC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLWJhY2tncm91bmQ9e3NsaWRlLmJnfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhcGUtdGl0bGUgc2hhcGUtdGl0bGUtNCBib3VuY2UtYW5pbWF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcInVuc2V0XCIgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMj57bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNoYXBlLWljb24gc2hhcGUtaWNvbi00IGJvdW5jZS1hbmltYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e3NsaWRlLnNoYXBJbWd9IGFsdD1cIlNoYXBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1jb250ZW50IHNsaWRlLWNvbnRlbnQtNCB0ZXh0LWNlbnRlciBwdC00MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBkYXRhLWFuaW1hdGlvbj1cImZhZGVJblVwXCIgZGF0YS1kZWxheT1cIi4zc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLnNob3BMaW5rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0aGVtZS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJmYWRlSW5MZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVsYXk9XCIuNnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3Agbm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLmNhdGVnb3J5TGluayAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gd2hpdGUtYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluUmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT1cIi45c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0hvbWVTbGlkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuXHJcbiAgICAgIHsvKiA8QmFubmVyIGJhbm5lcj17YmFubmVyfSAvPiAqL31cclxuICAgICAgey8qIDxIb21lUGFnZVByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0c30gLz4gKi99XHJcbiAgICAgIDxGZWF0dXJlcyAvPlxyXG4gICAgICB7LyogPEJsb2dzIGJsb2dzPXtibG9nc30gLz4gKi99XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsIkJhbm5lciIsIkJsb2dzIiwiRmVhdHVyZXMiLCJIb21lUGFnZVByb2R1Y3RzIiwiSG9tZVNsaWRlciIsIkltYWdlU2xpZGVyIiwiTGF5b3V0IiwiSW5kZXgiLCJibG9ncyIsImltYWdlU2xpZGVyIiwiYmFubmVyIiwicHJvZHVjdHMiLCJzbGlkZXJzIiwibWFwIiwic2xpZGUiLCJpIiwiYmciLCJ6SW5kZXgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzaGFwSW1nIiwiaGVhZGluZyIsInNob3BMaW5rIiwiY2F0ZWdvcnlMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==
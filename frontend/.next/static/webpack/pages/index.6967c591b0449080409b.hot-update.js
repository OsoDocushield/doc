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
  var features = [{
    "icon": "flaticon-shopping-cart-1",
    "text": "Free Delivery",
    "title": "Free Delivery"
  }, {
    "icon": "flaticon-good",
    "text": "100% CUSTOMER",
    "title": "Feedbacks"
  }, {
    "icon": "flaticon-return-1",
    "text": "10 DAYS",
    "title": "For Free Return"
  }, {
    "icon": "flaticon-return",
    "text": "PAYMENT",
    "title": "Secure System     "
  }, {
    "icon": "flaticon-customer-service",
    "text": "24/7",
    "title": "Online Supports"
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
                  lineNumber: 83,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "shape-icon shape-icon-4 bounce-animate",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: slide.shapImg,
                  alt: "Shap"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 86,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
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
                        lineNumber: 92,
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
                            lineNumber: 98,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 97,
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
                            lineNumber: 109,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 108,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 90,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 19
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Features__WEBPACK_IMPORTED_MODULE_5__.default, {
      features: features
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 68,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjk2N2M1OTFiMDQ0OTA4MDQwOWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUtSO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRSxVQUFNLHdCQURSO0FBRUUsZUFBVyw4QkFGYjtBQUdFLGVBQVcsYUFIYjtBQUlFLGdCQUFZLElBSmQ7QUFLRSxvQkFBZ0I7QUFMbEIsR0FEYyxFQVFkO0FBQ0UsVUFBTSwwQkFEUjtBQUVFLGVBQVcsOEJBRmI7QUFHRSxlQUFXLG1CQUhiO0FBSUUsZ0JBQVksSUFKZDtBQUtFLG9CQUFnQjtBQUxsQixHQVJjLEVBZWQ7QUFDRSxVQUFNLDBCQURSO0FBRUUsZUFBVyw4QkFGYjtBQUdFLGVBQVcsZ0JBSGI7QUFJRSxnQkFBWSxJQUpkO0FBS0Usb0JBQWdCO0FBTGxCLEdBZmMsQ0FBaEI7QUF1QkEsTUFBTUMsUUFBUSxHQUFHLENBQ2Y7QUFDRSxZQUFRLDBCQURWO0FBRUUsWUFBUSxlQUZWO0FBR0UsYUFBUztBQUhYLEdBRGUsRUFNZjtBQUNFLFlBQVEsZUFEVjtBQUVFLFlBQVEsZUFGVjtBQUdFLGFBQVM7QUFIWCxHQU5lLEVBV2Y7QUFDRSxZQUFRLG1CQURWO0FBRUUsWUFBUSxTQUZWO0FBR0UsYUFBUztBQUhYLEdBWGUsRUFnQmY7QUFDRSxZQUFRLGlCQURWO0FBRUUsWUFBUSxTQUZWO0FBR0UsYUFBUztBQUhYLEdBaEJlLEVBcUJmO0FBQ0UsWUFBUSwyQkFEVjtBQUVFLFlBQVEsTUFGVjtBQUdFLGFBQVM7QUFIWCxHQXJCZSxDQUFqQjtBQTJCQSxzQkFDRTtBQUFBLDRCQUNFO0FBQVMsZUFBUyxFQUFDLDBCQUFuQjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxlQUFmO0FBQUEsK0JBQ0UsOERBQUMsc0VBQUQ7QUFBWSxpQkFBTyxFQUFFRCxPQUFyQjtBQUFBLG9CQUNHQSxPQUFPLElBQ05BLE9BQU8sQ0FBQ0UsR0FBUixDQUFZLFVBQUNDLEtBQUQsRUFBUUMsQ0FBUjtBQUFBLGdDQUNWO0FBRUUsdUJBQVMsRUFBQyxxRkFGWjtBQUdFLGlDQUFpQkQsS0FBSyxDQUFDRSxFQUh6QjtBQUFBLHNDQUtFO0FBQ0UseUJBQVMsRUFBQywwQ0FEWjtBQUVFLHFCQUFLLEVBQUU7QUFBRUMsa0JBQUFBLE1BQU0sRUFBRTtBQUFWLGlCQUZUO0FBQUEsdUNBSUU7QUFBQSw0QkFBSyxJQUFJQyxJQUFKLEdBQVdDLFdBQVg7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRixlQVdFO0FBQUsseUJBQVMsRUFBQyx3Q0FBZjtBQUFBLHVDQUNFO0FBQUsscUJBQUcsRUFBRUwsS0FBSyxDQUFDTSxPQUFoQjtBQUF5QixxQkFBRyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVhGLGVBY0U7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUMsS0FBZjtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsMkNBQ0U7QUFBSywrQkFBUyxFQUFDLGlEQUFmO0FBQUEsOENBQ0U7QUFBSSwwQ0FBZSxVQUFuQjtBQUE4QixzQ0FBVyxLQUF6QztBQUFBLGtDQUNHTixLQUFLLENBQUNPO0FBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFERixlQUlFO0FBQUssaUNBQVMsRUFBQyxXQUFmO0FBQUEsbUNBQ0dQLEtBQUssQ0FBQ1EsUUFBTixpQkFDQyw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsT0FBWDtBQUFBLGlEQUNFO0FBQ0UscUNBQVMsRUFBQyxlQURaO0FBRUUsOENBQWUsWUFGakI7QUFHRSwwQ0FBVyxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSixFQVlHUixLQUFLLENBQUNTLFlBQU4saUJBQ0MsOERBQUMsa0RBQUQ7QUFBTSw4QkFBSSxFQUFDLE9BQVg7QUFBQSxpREFDRTtBQUNFLHFDQUFTLEVBQUMsZUFEWjtBQUVFLDhDQUFlLGFBRmpCO0FBR0UsMENBQVcsS0FIYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkRjtBQUFBLGVBQ09SLENBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEVTtBQUFBLFdBQVo7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQStERSw4REFBQyw2REFBRDtBQUFVLGNBQVEsRUFBRUg7QUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQS9ERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW9FRCxDQTVIRDs7S0FBTU47QUE4SE4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJhbm5lciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQmFubmVyXCI7XHJcbmltcG9ydCBCbG9ncyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvYmxvZy9CbG9nc1wiO1xyXG5pbXBvcnQgRmVhdHVyZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0ZlYXR1cmVzXCI7XHJcbmltcG9ydCBIb21lUGFnZVByb2R1Y3RzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0L0hvbWVQYWdlUHJvZHVjdHNcIjtcclxuaW1wb3J0IEhvbWVTbGlkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9Ib21lU2xpZGVyXCI7XHJcbmltcG9ydCBJbWFnZVNsaWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL0ltYWdlU2xpZGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXRzL0xheW91dFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoe1xyXG4gIGJsb2dzLFxyXG4gIGltYWdlU2xpZGVyLFxyXG4gIGJhbm5lcixcclxuICBwcm9kdWN0cyxcclxufSkgPT4ge1xyXG4gIGNvbnN0IHNsaWRlcnMgPSBbXHJcbiAgICB7XHJcbiAgICAgIFwiYmdcIjogXCIvaW1nL3NsaWRlci9zbGlkZTUuanBnXCIsXHJcbiAgICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAgICAgXCJoZWFkaW5nXCI6IFwiTmV3IEFycml2YWxcIixcclxuICAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LTIuanBnXCIsXHJcbiAgICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAgICAgXCJoZWFkaW5nXCI6IFwiVHJlbmR5IENvbGxlY3Rpb25cIixcclxuICAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LTMuanBnXCIsXHJcbiAgICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAgICAgXCJoZWFkaW5nXCI6IFwiTWVuIENvbGxlY3Rpb25cIixcclxuICAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgICB9XHJcbiAgXVxyXG4gIGNvbnN0IGZlYXR1cmVzID0gW1xyXG4gICAge1xyXG4gICAgICBcImljb25cIjogXCJmbGF0aWNvbi1zaG9wcGluZy1jYXJ0LTFcIixcclxuICAgICAgXCJ0ZXh0XCI6IFwiRnJlZSBEZWxpdmVyeVwiLFxyXG4gICAgICBcInRpdGxlXCI6IFwiRnJlZSBEZWxpdmVyeVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25cIjogXCJmbGF0aWNvbi1nb29kXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIjEwMCUgQ1VTVE9NRVJcIixcclxuICAgICAgXCJ0aXRsZVwiOiBcIkZlZWRiYWNrc1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25cIjogXCJmbGF0aWNvbi1yZXR1cm4tMVwiLFxyXG4gICAgICBcInRleHRcIjogXCIxMCBEQVlTXCIsXHJcbiAgICAgIFwidGl0bGVcIjogXCJGb3IgRnJlZSBSZXR1cm5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgXCJpY29uXCI6IFwiZmxhdGljb24tcmV0dXJuXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIlBBWU1FTlRcIixcclxuICAgICAgXCJ0aXRsZVwiOiBcIlNlY3VyZSBTeXN0ZW0gICAgIFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBcImljb25cIjogXCJmbGF0aWNvbi1jdXN0b21lci1zZXJ2aWNlXCIsXHJcbiAgICAgIFwidGV4dFwiOiBcIjI0LzdcIixcclxuICAgICAgXCJ0aXRsZVwiOiBcIk9ubGluZSBTdXBwb3J0c1wiXHJcbiAgICB9XHJcbiAgXVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xpZGVyLWFyZWEgcG9zLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYWN0aXZlXCI+XHJcbiAgICAgICAgICA8SG9tZVNsaWRlciBzbGlkZXJzPXtzbGlkZXJzfT5cclxuICAgICAgICAgICAge3NsaWRlcnMgJiZcclxuICAgICAgICAgICAgICBzbGlkZXJzLm1hcCgoc2xpZGUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW5nbGUtc2xpZGVyIHNsaWRlLTEtc3R5bGUgc2xpZGUtaGVpZ2h0LTIgc2xpZGUtaGVpZ2h0LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYmFja2dyb3VuZD17c2xpZGUuYmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFwZS10aXRsZSBzaGFwZS10aXRsZS00IGJvdW5jZS1hbmltYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwidW5zZXRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaWNvbiBzaGFwZS1pY29uLTQgYm91bmNlLWFuaW1hdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2xpZGUuc2hhcEltZ30gYWx0PVwiU2hhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRlbnQgc2xpZGUtY29udGVudC00IHRleHQtY2VudGVyIHB0LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIiBkYXRhLWRlbGF5PVwiLjNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuc2hvcExpbmsgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHRoZW1lLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT1cIi42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcCBub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuY2F0ZWdvcnlMaW5rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB3aGl0ZS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJmYWRlSW5SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiLjlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvSG9tZVNsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgey8qIDxCYW5uZXIgYmFubmVyPXtiYW5uZXJ9IC8+ICovfVxyXG4gICAgICB7LyogPEhvbWVQYWdlUHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPiAqL31cclxuICAgICAgPEZlYXR1cmVzIGZlYXR1cmVzPXtmZWF0dXJlc30gLz5cclxuICAgICAgey8qIDxCbG9ncyBibG9ncz17YmxvZ3N9IC8+ICovfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJCYW5uZXIiLCJCbG9ncyIsIkZlYXR1cmVzIiwiSG9tZVBhZ2VQcm9kdWN0cyIsIkhvbWVTbGlkZXIiLCJJbWFnZVNsaWRlciIsIkxheW91dCIsIkluZGV4IiwiYmxvZ3MiLCJpbWFnZVNsaWRlciIsImJhbm5lciIsInByb2R1Y3RzIiwic2xpZGVycyIsImZlYXR1cmVzIiwibWFwIiwic2xpZGUiLCJpIiwiYmciLCJ6SW5kZXgiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJzaGFwSW1nIiwiaGVhZGluZyIsInNob3BMaW5rIiwiY2F0ZWdvcnlMaW5rIl0sInNvdXJjZVJvb3QiOiIifQ==
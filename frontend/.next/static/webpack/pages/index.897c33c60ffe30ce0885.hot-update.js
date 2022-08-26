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
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ebraheem\\Desktop\\ecommerce\\frontend\\pages\\index.js",
    _this = undefined;











var Index = function Index(_ref) {
  var blogs = _ref.blogs,
      imageSlider = _ref.imageSlider,
      banner = _ref.banner,
      products = _ref.products,
      sliders = _ref.sliders;
  console.log({
    sliders: sliders
  }); // const sliders = [
  //   {
  //     "bg": "/img/slider/slide5.jpg",
  //     "shapImg": "/img/slider/shape-icon-2.png",
  //     "heading": "New Arrival",
  //     "shopLink": true,
  //     "categoryLink": true
  //   },
  //   {
  //     "bg": "/img/slider/slide5-2.jpg",
  //     "shapImg": "/img/slider/shape-icon-2.png",
  //     "heading": "Trendy Collection",
  //     "shopLink": true,
  //     "categoryLink": true
  //   },
  //   {
  //     "bg": "/img/slider/slide5-3.jpg",
  //     "shapImg": "/img/slider/shape-icon-2.png",
  //     "heading": "Men Collection",
  //     "shopLink": true,
  //     "categoryLink": true
  //   }
  // ]

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
                  lineNumber: 59,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "shape-icon shape-icon-4 bounce-animate",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: slide.shapImg,
                  alt: "Shap"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
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
                        lineNumber: 68,
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
                            lineNumber: 74,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 73,
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
                            lineNumber: 85,
                            columnNumber: 33
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 84,
                          columnNumber: 31
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 71,
                        columnNumber: 27
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 67,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 66,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 19
              }, _this)]
            }, i, true, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Features__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguODk3YzMzYzYwZmZlMzBjZTA4ODUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNUyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQU1SO0FBQUEsTUFMSkMsS0FLSSxRQUxKQSxLQUtJO0FBQUEsTUFKSkMsV0FJSSxRQUpKQSxXQUlJO0FBQUEsTUFISkMsTUFHSSxRQUhKQSxNQUdJO0FBQUEsTUFGSkMsUUFFSSxRQUZKQSxRQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0pDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZO0FBQUVGLElBQUFBLE9BQU8sRUFBUEE7QUFBRixHQUFaLEVBREksQ0FFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBUyxlQUFTLEVBQUMsMEJBQW5CO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGVBQWY7QUFBQSwrQkFDRSw4REFBQyxzRUFBRDtBQUFZLGlCQUFPLEVBQUVBLE9BQXJCO0FBQUEsb0JBQ0dBLE9BQU8sSUFDTkEsT0FBTyxDQUFDRyxHQUFSLENBQVksVUFBQ0MsS0FBRCxFQUFRQyxDQUFSO0FBQUEsZ0NBQ1Y7QUFFRSx1QkFBUyxFQUFDLHFGQUZaO0FBR0UsaUNBQWlCRCxLQUFLLENBQUNFLEVBSHpCO0FBQUEsc0NBS0U7QUFDRSx5QkFBUyxFQUFDLDBDQURaO0FBRUUscUJBQUssRUFBRTtBQUFFQyxrQkFBQUEsTUFBTSxFQUFFO0FBQVYsaUJBRlQ7QUFBQSx1Q0FJRTtBQUFBLDRCQUFLLElBQUlDLElBQUosR0FBV0MsV0FBWDtBQUFMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUxGLGVBV0U7QUFBSyx5QkFBUyxFQUFDLHdDQUFmO0FBQUEsdUNBQ0U7QUFBSyxxQkFBRyxFQUFFTCxLQUFLLENBQUNNLE9BQWhCO0FBQXlCLHFCQUFHLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsZUFjRTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHVDQUNFO0FBQUssMkJBQVMsRUFBQyxLQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLFdBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsaURBQWY7QUFBQSw4Q0FDRTtBQUFJLDBDQUFlLFVBQW5CO0FBQThCLHNDQUFXLEtBQXpDO0FBQUEsa0NBQ0dOLEtBQUssQ0FBQ087QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURGLGVBSUU7QUFBSyxpQ0FBUyxFQUFDLFdBQWY7QUFBQSxtQ0FDR1AsS0FBSyxDQUFDUSxRQUFOLGlCQUNDLDhEQUFDLGtEQUFEO0FBQU0sOEJBQUksRUFBQyxPQUFYO0FBQUEsaURBQ0U7QUFDRSxxQ0FBUyxFQUFDLGVBRFo7QUFFRSw4Q0FBZSxZQUZqQjtBQUdFLDBDQUFXLEtBSGI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZKLEVBWUdSLEtBQUssQ0FBQ1MsWUFBTixpQkFDQyw4REFBQyxrREFBRDtBQUFNLDhCQUFJLEVBQUMsT0FBWDtBQUFBLGlEQUNFO0FBQ0UscUNBQVMsRUFBQyxlQURaO0FBRUUsOENBQWUsYUFGakI7QUFHRSwwQ0FBVyxLQUhiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWRGO0FBQUEsZUFDT1IsQ0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURVO0FBQUEsV0FBWjtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBK0RFLDhEQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUEvREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFvRUQsQ0FuR0Q7O0tBQU1WOztBQXFHTiwrREFBZUEsS0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9CYW5uZXJcIjtcclxuaW1wb3J0IEJsb2dzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9ibG9nL0Jsb2dzXCI7XHJcbmltcG9ydCBGZWF0dXJlcyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvRmVhdHVyZXNcIjtcclxuaW1wb3J0IEhvbWVQYWdlUHJvZHVjdHMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvSG9tZVBhZ2VQcm9kdWN0c1wiO1xyXG5pbXBvcnQgSG9tZVNsaWRlciBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvc2xpZGVyL0hvbWVTbGlkZXJcIjtcclxuaW1wb3J0IEltYWdlU2xpZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSW1hZ2VTbGlkZXJcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vc3JjL2xheW91dHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IGZyb21JbWFnZVRvVXJsLCBBUElfVVJMIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnXHJcblxyXG5jb25zdCBJbmRleCA9ICh7XHJcbiAgYmxvZ3MsXHJcbiAgaW1hZ2VTbGlkZXIsXHJcbiAgYmFubmVyLFxyXG4gIHByb2R1Y3RzLFxyXG4gIHNsaWRlcnNcclxufSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKHsgc2xpZGVycyB9KVxyXG4gIC8vIGNvbnN0IHNsaWRlcnMgPSBbXHJcbiAgLy8gICB7XHJcbiAgLy8gICAgIFwiYmdcIjogXCIvaW1nL3NsaWRlci9zbGlkZTUuanBnXCIsXHJcbiAgLy8gICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAvLyAgICAgXCJoZWFkaW5nXCI6IFwiTmV3IEFycml2YWxcIixcclxuICAvLyAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gIC8vICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LTIuanBnXCIsXHJcbiAgLy8gICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAvLyAgICAgXCJoZWFkaW5nXCI6IFwiVHJlbmR5IENvbGxlY3Rpb25cIixcclxuICAvLyAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gIC8vICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBcImJnXCI6IFwiL2ltZy9zbGlkZXIvc2xpZGU1LTMuanBnXCIsXHJcbiAgLy8gICAgIFwic2hhcEltZ1wiOiBcIi9pbWcvc2xpZGVyL3NoYXBlLWljb24tMi5wbmdcIixcclxuICAvLyAgICAgXCJoZWFkaW5nXCI6IFwiTWVuIENvbGxlY3Rpb25cIixcclxuICAvLyAgICAgXCJzaG9wTGlua1wiOiB0cnVlLFxyXG4gIC8vICAgICBcImNhdGVnb3J5TGlua1wiOiB0cnVlXHJcbiAgLy8gICB9XHJcbiAgLy8gXVxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic2xpZGVyLWFyZWEgcG9zLXJlbGF0aXZlXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYWN0aXZlXCI+XHJcbiAgICAgICAgICA8SG9tZVNsaWRlciBzbGlkZXJzPXtzbGlkZXJzfT5cclxuICAgICAgICAgICAge3NsaWRlcnMgJiZcclxuICAgICAgICAgICAgICBzbGlkZXJzLm1hcCgoc2xpZGUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW5nbGUtc2xpZGVyIHNsaWRlLTEtc3R5bGUgc2xpZGUtaGVpZ2h0LTIgc2xpZGUtaGVpZ2h0LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIGRhdGEtYmFja2dyb3VuZD17c2xpZGUuYmd9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFwZS10aXRsZSBzaGFwZS10aXRsZS00IGJvdW5jZS1hbmltYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IFwidW5zZXRcIiB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyPntuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9oMj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaWNvbiBzaGFwZS1pY29uLTQgYm91bmNlLWFuaW1hdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2xpZGUuc2hhcEltZ30gYWx0PVwiU2hhcFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRlbnQgc2xpZGUtY29udGVudC00IHRleHQtY2VudGVyIHB0LTQwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluVXBcIiBkYXRhLWRlbGF5PVwiLjNzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuaGVhZGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuc2hvcExpbmsgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHRoZW1lLWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kZWxheT1cIi42c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcCBub3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2xpZGUuY2F0ZWdvcnlMaW5rICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zaG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB3aGl0ZS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1hbmltYXRpb249XCJmYWRlSW5SaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiLjlzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvSG9tZVNsaWRlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgICAgey8qIDxCYW5uZXIgYmFubmVyPXtiYW5uZXJ9IC8+ICovfVxyXG4gICAgICB7LyogPEhvbWVQYWdlUHJvZHVjdHMgcHJvZHVjdHM9e3Byb2R1Y3RzfSAvPiAqL31cclxuICAgICAgPEZlYXR1cmVzIC8+XHJcbiAgICAgIHsvKiA8QmxvZ3MgYmxvZ3M9e2Jsb2dzfSAvPiAqL31cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9hcGkvaG9tZS1wYWdlLXNsaWRlcnM/cG9wdWxhdGU9aW1hZ2VgKVxyXG4gIGxldCBzbGlkZXJzID0gYXdhaXQgZGF0YS5qc29uKClcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNsaWRlcnM6IHNsaWRlcnMuZGF0YS5tYXAoZWFjaCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGJnOiBmcm9tSW1hZ2VUb1VybChlYWNoPy5hdHRyaWJ1dGVzPy5pbWFnZT8uZGF0YT8uYXR0cmlidXRlcz8udXJsKSxcclxuICAgICAgICAgIHNoYXBJbWc6ICcvaW1nL3NsaWRlci9zaGFwZS1pY29uLTIucG5nJyxcclxuICAgICAgICAgIGhlYWRpbmc6IGVhY2g/LmF0dHJpYnV0ZXM/LnRhZ19saW5lLFxyXG4gICAgICAgICAgc2hvcExpbms6IHRydWUsXHJcbiAgICAgICAgICBjYXRlZ29yeUxpbms6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsIkJhbm5lciIsIkJsb2dzIiwiRmVhdHVyZXMiLCJIb21lUGFnZVByb2R1Y3RzIiwiSG9tZVNsaWRlciIsIkltYWdlU2xpZGVyIiwiTGF5b3V0IiwiSW5kZXgiLCJibG9ncyIsImltYWdlU2xpZGVyIiwiYmFubmVyIiwicHJvZHVjdHMiLCJzbGlkZXJzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsInNsaWRlIiwiaSIsImJnIiwiekluZGV4IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwic2hhcEltZyIsImhlYWRpbmciLCJzaG9wTGluayIsImNhdGVnb3J5TGluayJdLCJzb3VyY2VSb290IjoiIn0=
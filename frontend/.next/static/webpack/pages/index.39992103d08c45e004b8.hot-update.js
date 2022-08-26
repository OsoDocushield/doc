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












var Index = function Index(_ref) {
  var features = _ref.features,
      blogs = _ref.blogs,
      imageSlider = _ref.imageSlider,
      banner = _ref.banner,
      products = _ref.products;
  var sliders = [];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false) // <Layout
  //   transparent
  //   whiteMenu
  //   extraTransparentClass={"transparent-header-2"}
  // >
  //   <main>
  //     <section className="slider-area pos-relative">
  //       <div className="slider-active">
  //         <HomeSlider sliders={sliders}>
  //           {sliders &&
  //             sliders.map((slide, i) => (
  //               <div
  //                 key={i}
  //                 className="single-slider slide-1-style slide-height-2 slide-height-4 d-flex align-items-center"
  //                 data-background={slide.bg}
  //               >
  //                 <div
  //                   className="shape-title shape-title-4 bounce-animate"
  //                   style={{ zIndex: "unset" }}
  //                 >
  //                   <h2>{new Date().getFullYear()}</h2>
  //                 </div>
  //                 <div className="shape-icon shape-icon-4 bounce-animate">
  //                   <img src={slide.shapImg} alt="Shap" />
  //                 </div>
  //                 <div className="container">
  //                   <div className="row">
  //                     <div className="col-xl-12">
  //                       <div className="slide-content slide-content-4 text-center pt-40">
  //                         <h1 data-animation="fadeInUp" data-delay=".3s">
  //                           {slide.heading}
  //                         </h1>
  //                         <div className="slide-btn">
  //                           {slide.shopLink && (
  //                             <Link href="/shop">
  //                               <a
  //                                 className="btn theme-btn"
  //                                 data-animation="fadeInLeft"
  //                                 data-delay=".6s"
  //                               >
  //                                 shop now
  //                               </a>
  //                             </Link>
  //                           )}
  //                           {slide.categoryLink && (
  //                             <Link href="/shop">
  //                               <a
  //                                 className="btn white-btn"
  //                                 data-animation="fadeInRight"
  //                                 data-delay=".9s"
  //                               >
  //                                 category
  //                               </a>
  //                             </Link>
  //                           )}
  //                         </div>
  //                       </div>
  //                     </div>
  //                   </div>
  //                 </div>
  //               </div>
  //             ))}
  //         </HomeSlider>
  //       </div>
  //     </section>
  //     <Banner banner={banner} />
  //     <HomePageProducts products={products} />
  //     <Features features={features} />
  //     <Blogs blogs={blogs} />
  //     <ImageSlider imageSlider={imageSlider} />
  //   </main>
  // </Layout>
  ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzk5OTIxMDNkMDhjNDVlMDA0YjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNUyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQU1SO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsS0FJSSxRQUpKQSxLQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsUUFDSSxRQURKQSxRQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBQ0Esc0JBQ0UsNklBREYsQ0FHRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRUY7QUE2RUQsQ0FyRkQ7O0tBQU1OO0FBdUZOLCtEQUFlQSxLQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Jhbm5lclwiO1xyXG5pbXBvcnQgQmxvZ3MgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL2Jsb2cvQmxvZ3NcIjtcclxuaW1wb3J0IEZlYXR1cmVzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9GZWF0dXJlc1wiO1xyXG5pbXBvcnQgSG9tZVBhZ2VQcm9kdWN0cyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvcHJvZHVjdC9Ib21lUGFnZVByb2R1Y3RzXCI7XHJcbmltcG9ydCBIb21lU2xpZGVyIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9zbGlkZXIvSG9tZVNsaWRlclwiO1xyXG5pbXBvcnQgSW1hZ2VTbGlkZXIgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL3NsaWRlci9JbWFnZVNsaWRlclwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0cy9MYXlvdXRcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHtcclxuICBmZWF0dXJlcyxcclxuICBibG9ncyxcclxuICBpbWFnZVNsaWRlcixcclxuICBiYW5uZXIsXHJcbiAgcHJvZHVjdHMsXHJcbn0pID0+IHtcclxuICBjb25zdCBzbGlkZXJzID0gW11cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDwvPlxyXG4gICAgLy8gPExheW91dFxyXG4gICAgLy8gICB0cmFuc3BhcmVudFxyXG4gICAgLy8gICB3aGl0ZU1lbnVcclxuICAgIC8vICAgZXh0cmFUcmFuc3BhcmVudENsYXNzPXtcInRyYW5zcGFyZW50LWhlYWRlci0yXCJ9XHJcbiAgICAvLyA+XHJcbiAgICAvLyAgIDxtYWluPlxyXG4gICAgLy8gICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNsaWRlci1hcmVhIHBvcy1yZWxhdGl2ZVwiPlxyXG4gICAgLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItYWN0aXZlXCI+XHJcbiAgICAvLyAgICAgICAgIDxIb21lU2xpZGVyIHNsaWRlcnM9e3NsaWRlcnN9PlxyXG4gICAgLy8gICAgICAgICAgIHtzbGlkZXJzICYmXHJcbiAgICAvLyAgICAgICAgICAgICBzbGlkZXJzLm1hcCgoc2xpZGUsIGkpID0+IChcclxuICAgIC8vICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGtleT17aX1cclxuICAgIC8vICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaW5nbGUtc2xpZGVyIHNsaWRlLTEtc3R5bGUgc2xpZGUtaGVpZ2h0LTIgc2xpZGUtaGVpZ2h0LTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZGF0YS1iYWNrZ3JvdW5kPXtzbGlkZS5iZ31cclxuICAgIC8vICAgICAgICAgICAgICAgPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXZcclxuICAgIC8vICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYXBlLXRpdGxlIHNoYXBlLXRpdGxlLTQgYm91bmNlLWFuaW1hdGVcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgekluZGV4OiBcInVuc2V0XCIgfX1cclxuICAgIC8vICAgICAgICAgICAgICAgICA+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICA8aDI+e25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX08L2gyPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hhcGUtaWNvbiBzaGFwZS1pY29uLTQgYm91bmNlLWFuaW1hdGVcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtzbGlkZS5zaGFwSW1nfSBhbHQ9XCJTaGFwXCIgLz5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMTJcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWNvbnRlbnQgc2xpZGUtY29udGVudC00IHRleHQtY2VudGVyIHB0LTQwXCI+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgZGF0YS1hbmltYXRpb249XCJmYWRlSW5VcFwiIGRhdGEtZGVsYXk9XCIuM3NcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLmhlYWRpbmd9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZS1idG5cIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAge3NsaWRlLnNob3BMaW5rICYmIChcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3Nob3BcIj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB0aGVtZS1idG5cIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWFuaW1hdGlvbj1cImZhZGVJbkxlZnRcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiLjZzXCJcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvcCBub3dcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzbGlkZS5jYXRlZ29yeUxpbmsgJiYgKFxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2hvcFwiPlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHdoaXRlLWJ0blwiXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtYW5pbWF0aW9uPVwiZmFkZUluUmlnaHRcIlxyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRlbGF5PVwiLjlzXCJcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIC8vICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgICAgICAgICApKX1cclxuICAgIC8vICAgICAgICAgPC9Ib21lU2xpZGVyPlxyXG4gICAgLy8gICAgICAgPC9kaXY+XHJcbiAgICAvLyAgICAgPC9zZWN0aW9uPlxyXG5cclxuICAgIC8vICAgICA8QmFubmVyIGJhbm5lcj17YmFubmVyfSAvPlxyXG4gICAgLy8gICAgIDxIb21lUGFnZVByb2R1Y3RzIHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cclxuICAgIC8vICAgICA8RmVhdHVyZXMgZmVhdHVyZXM9e2ZlYXR1cmVzfSAvPlxyXG4gICAgLy8gICAgIDxCbG9ncyBibG9ncz17YmxvZ3N9IC8+XHJcbiAgICAvLyAgICAgPEltYWdlU2xpZGVyIGltYWdlU2xpZGVyPXtpbWFnZVNsaWRlcn0gLz5cclxuICAgIC8vICAgPC9tYWluPlxyXG4gICAgLy8gPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiTGluayIsInVzZUVmZmVjdCIsIkJhbm5lciIsIkJsb2dzIiwiRmVhdHVyZXMiLCJIb21lUGFnZVByb2R1Y3RzIiwiSG9tZVNsaWRlciIsIkltYWdlU2xpZGVyIiwiTGF5b3V0IiwiSW5kZXgiLCJmZWF0dXJlcyIsImJsb2dzIiwiaW1hZ2VTbGlkZXIiLCJiYW5uZXIiLCJwcm9kdWN0cyIsInNsaWRlcnMiXSwic291cmNlUm9vdCI6IiJ9
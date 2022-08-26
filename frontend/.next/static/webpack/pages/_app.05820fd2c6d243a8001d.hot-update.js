"use strict";
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/layouts/header/ShopCart.js":
/*!****************************************!*\
  !*** ./src/layouts/header/ShopCart.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-toast */ "./node_modules/react-hot-toast/dist/index.mjs");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_action_utilis__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../redux/action/utilis */ "./src/redux/action/utilis.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\ebraheem\\Desktop\\ecommerce\\frontend\\src\\layouts\\header\\ShopCart.js",
    _this = undefined;








var ShopCart = function ShopCart(_ref) {
  var removeCart = _ref.removeCart,
      getCarts = _ref.getCarts;
  // useEffect(() => {
  //   getCarts();
  // }, []);
  var carts = [];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
    className: "d-shop-cart",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
      href: "#",
      onClick: function onClick(e) {
        return e.preventDefault();
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
        className: "flaticon-shopping-cart"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, _this), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: "cart-count",
        children: carts && carts.length
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
      className: "minicart",
      children: [carts && carts.length > 0 ? carts.map(function (cart) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "cart-img",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/shop/".concat(cart.id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: cart.img1,
                  alt: "Cart"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "cart-content",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                href: "/shop/".concat(cart.id),
                children: cart.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "cart-price",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "new",
                children: ["$", cart.mainPrice, " * ", cart.qty]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 19
              }, _this), " =", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                className: "new ml-1 ",
                children: ["$", cart.totalPrice]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "del-icon",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              href: "#",
              onClick: function onClick(e) {
                e.preventDefault();
                removeCart(cart.id);
                react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.default.error("Remove item from carts");
              },
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
                className: "far fa-trash-alt"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this)]
        }, cart.id, true, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 13
        }, _this);
      }) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: "Product Not Found"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "total-price",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "f-left",
            children: "Total:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this), carts && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            className: "f-right",
            children: ["$", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_6__.totalPrice)(carts)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 23
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "checkout-link",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/cart",
            children: "Shopping Cart"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: "/checkout",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: "red-color",
              children: "Checkout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, _this);
};

_c = ShopCart;
/* harmony default export */ __webpack_exports__["default"] = (ShopCart);

var _c;

$RefreshReg$(_c, "ShopCart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4wNTgyMGZkMmM2ZDI0M2E4MDAxZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQThCO0FBQUEsTUFBM0JGLFVBQTJCLFFBQTNCQSxVQUEyQjtBQUFBLE1BQWZELFFBQWUsUUFBZkEsUUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQSxNQUFNSSxLQUFLLEdBQUcsRUFBZDtBQUVBLHNCQUNFO0FBQUksYUFBUyxFQUFDLGFBQWQ7QUFBQSw0QkFDRTtBQUFHLFVBQUksRUFBQyxHQUFSO0FBQVksYUFBTyxFQUFFLGlCQUFDQyxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDQyxjQUFGLEVBQVA7QUFBQSxPQUFyQjtBQUFBLDhCQUNFO0FBQUcsaUJBQVMsRUFBQztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUMyQyxHQUQzQyxlQUVFO0FBQU0saUJBQVMsRUFBQyxZQUFoQjtBQUFBLGtCQUE4QkYsS0FBSyxJQUFJQSxLQUFLLENBQUNHO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUtFO0FBQUksZUFBUyxFQUFDLFVBQWQ7QUFBQSxpQkFDR0gsS0FBSyxJQUFJQSxLQUFLLENBQUNHLE1BQU4sR0FBZSxDQUF4QixHQUNDSCxLQUFLLENBQUNJLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsNEJBQ1I7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksa0JBQVdBLElBQUksQ0FBQ0MsRUFBaEIsQ0FBVjtBQUFBLHFDQUNFO0FBQUEsdUNBQ0U7QUFBSyxxQkFBRyxFQUFFRCxJQUFJLENBQUNFLElBQWY7QUFBcUIscUJBQUcsRUFBQztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBUUU7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxvQ0FDRTtBQUFBLHFDQUNFLDhEQUFDLGtEQUFEO0FBQU0sb0JBQUksa0JBQVdGLElBQUksQ0FBQ0MsRUFBaEIsQ0FBVjtBQUFBLDBCQUFpQ0QsSUFBSSxDQUFDRztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUssdUJBQVMsRUFBQyxZQUFmO0FBQUEsc0NBQ0U7QUFBTSx5QkFBUyxFQUFDLEtBQWhCO0FBQUEsZ0NBQ0lILElBQUksQ0FBQ0ksU0FEVCxTQUN1QkosSUFBSSxDQUFDSyxHQUQ1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsRUFJRyxJQUpILGVBS0U7QUFBTSx5QkFBUyxFQUFDLFdBQWhCO0FBQUEsZ0NBQThCTCxJQUFJLENBQUNQLFVBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBb0JFO0FBQUsscUJBQVMsRUFBQyxVQUFmO0FBQUEsbUNBQ0U7QUFDRSxrQkFBSSxFQUFDLEdBRFA7QUFFRSxxQkFBTyxFQUFFLGlCQUFDRyxDQUFELEVBQU87QUFDZEEsZ0JBQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUNBTCxnQkFBQUEsVUFBVSxDQUFDUSxJQUFJLENBQUNDLEVBQU4sQ0FBVjtBQUNBYixnQkFBQUEsMERBQUEsQ0FBWSx3QkFBWjtBQUNELGVBTkg7QUFBQSxxQ0FRRTtBQUFHLHlCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcEJGO0FBQUEsV0FBU1ksSUFBSSxDQUFDQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFE7QUFBQSxPQUFWLENBREQsZ0JBcUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdENKLGVBd0NFO0FBQUEsK0JBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxrQ0FDRTtBQUFNLHFCQUFTLEVBQUMsUUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFR04sS0FBSyxpQkFBSTtBQUFNLHFCQUFTLEVBQUMsU0FBaEI7QUFBQSw0QkFBNEJGLHdEQUFVLENBQUNFLEtBQUQsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUF4Q0YsZUE4Q0U7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsZUFBZjtBQUFBLGtDQUNFLDhEQUFDLGtEQUFEO0FBQU0sZ0JBQUksRUFBQyxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUsOERBQUMsa0RBQUQ7QUFBTSxnQkFBSSxFQUFDLFdBQVg7QUFBQSxtQ0FDRTtBQUFHLHVCQUFTLEVBQUMsV0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTlDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStERCxDQXJFRDs7S0FBTUQ7QUF1RU4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xheW91dHMvaGVhZGVyL1Nob3BDYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB0b2FzdCBmcm9tIFwicmVhY3QtaG90LXRvYXN0XCI7XHJcbmltcG9ydCB7IGNvbm5lY3QsIHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IGdldENhcnRzLCByZW1vdmVDYXJ0IH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbi91dGlsaXNcIjtcclxuaW1wb3J0IHsgdG90YWxQcmljZSB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5jb25zdCBTaG9wQ2FydCA9ICh7IHJlbW92ZUNhcnQsIGdldENhcnRzIH0pID0+IHtcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgZ2V0Q2FydHMoKTtcclxuICAvLyB9LCBbXSk7XHJcbiAgY29uc3QgY2FydHMgPSBbXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxsaSBjbGFzc05hbWU9XCJkLXNob3AtY2FydFwiPlxyXG4gICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgIDxpIGNsYXNzTmFtZT1cImZsYXRpY29uLXNob3BwaW5nLWNhcnRcIiAvPntcIiBcIn1cclxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJ0LWNvdW50XCI+e2NhcnRzICYmIGNhcnRzLmxlbmd0aH08L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm1pbmljYXJ0XCI+XHJcbiAgICAgICAge2NhcnRzICYmIGNhcnRzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICBjYXJ0cy5tYXAoKGNhcnQpID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17Y2FydC5pZH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LWltZ1wiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zaG9wLyR7Y2FydC5pZH1gfT5cclxuICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NhcnQuaW1nMX0gYWx0PVwiQ2FydFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Nob3AvJHtjYXJ0LmlkfWB9PntjYXJ0Lm5hbWV9PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAke2NhcnQubWFpblByaWNlfSAqIHtjYXJ0LnF0eX1cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgPVwifVxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuZXcgbWwtMSBcIj4ke2NhcnQudG90YWxQcmljZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRlbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUNhcnQoY2FydC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QuZXJyb3IoXCJSZW1vdmUgaXRlbSBmcm9tIGNhcnRzXCIpO1xyXG4gICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXIgZmEtdHJhc2gtYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxoMz5Qcm9kdWN0IE5vdCBGb3VuZDwvaDM+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8bGk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsLXByaWNlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImYtbGVmdFwiPlRvdGFsOjwvc3Bhbj5cclxuICAgICAgICAgICAge2NhcnRzICYmIDxzcGFuIGNsYXNzTmFtZT1cImYtcmlnaHRcIj4ke3RvdGFsUHJpY2UoY2FydHMpfTwvc3Bhbj59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2xpPlxyXG4gICAgICAgIDxsaT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtbGlua1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NhcnRcIj5TaG9wcGluZyBDYXJ0PC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NoZWNrb3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicmVkLWNvbG9yXCI+Q2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2xpPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wQ2FydDtcclxuIl0sIm5hbWVzIjpbIkxpbmsiLCJ1c2VFZmZlY3QiLCJ0b2FzdCIsImNvbm5lY3QiLCJ1c2VTZWxlY3RvciIsImdldENhcnRzIiwicmVtb3ZlQ2FydCIsInRvdGFsUHJpY2UiLCJTaG9wQ2FydCIsImNhcnRzIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibWFwIiwiY2FydCIsImlkIiwiaW1nMSIsIm5hbWUiLCJtYWluUHJpY2UiLCJxdHkiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=
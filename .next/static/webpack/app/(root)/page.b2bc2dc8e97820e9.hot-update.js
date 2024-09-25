"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/page",{

/***/ "(app-pages-browser)/./components/TotalBalanceBox.tsx":
/*!****************************************!*\
  !*** ./components/TotalBalanceBox.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n// Assuming you need a format function for currency\nconst formatAmount = (amount)=>{\n    return \"$\".concat(amount.toFixed(2));\n};\nconst TotalBalanceBox = (param)=>{\n    let { accounts = [], totalBanks, totalCurrentBalance } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"total-balance\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"total-balance-chart\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DoughnutChart, {\n                    accounts: accounts\n                }, void 0, false, {\n                    fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col gap-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"header-2\",\n                        children: [\n                            \"Bank Accounts: \",\n                            totalBanks\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"total-balance-label\",\n                                children: \"Total Current Balance\"\n                            }, void 0, false, {\n                                fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"total-balance-amount flex-center gap-2\",\n                                children: formatAmount(totalCurrentBalance)\n                            }, void 0, false, {\n                                fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/damian/Documents/MyCode/banking/components/TotalBalanceBox.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\n_c = TotalBalanceBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TotalBalanceBox);\nvar _c;\n$RefreshReg$(_c, \"TotalBalanceBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVG90YWxCYWxhbmNlQm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUUwQjtBQVUxQixtREFBbUQ7QUFDbkQsTUFBTUMsZUFBZSxDQUFDQztJQUNwQixPQUFPLElBQXNCLE9BQWxCQSxPQUFPQyxPQUFPLENBQUM7QUFDNUI7QUFFQSxNQUFNQyxrQkFBa0I7UUFBQyxFQUN2QkMsV0FBVyxFQUFFLEVBQ2JDLFVBQVUsRUFDVkMsbUJBQW1CLEVBQ0U7SUFDckIscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVU7OzBCQUNqQiw4REFBQ0M7Z0JBQUlELFdBQVU7MEJBQ2IsNEVBQUNFO29CQUFjTixVQUFVQTs7Ozs7Ozs7Ozs7MEJBRzNCLDhEQUFDSztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNHO3dCQUFHSCxXQUFVOzs0QkFBVzs0QkFDUEg7Ozs7Ozs7a0NBRWxCLDhEQUFDSTt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNJO2dDQUFFSixXQUFVOzBDQUFzQjs7Ozs7OzBDQUduQyw4REFBQ0k7Z0NBQUVKLFdBQVU7MENBQ1ZSLGFBQWFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNMUI7S0ExQk1IO0FBNEJOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG90YWxCYWxhbmNlQm94LnRzeD8yMzdjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG4vLyBEZWZpbmUgdGhlIHByb3BzIGludGVyZmFjZSAoaWYgeW91J3JlIHVzaW5nIFR5cGVTY3JpcHQpXG5pbnRlcmZhY2UgVG90YWxCYWxhbmNlQm94UHJvcHMge1xuICBhY2NvdW50cz86IGFueVtdO1xuICB0b3RhbEJhbmtzOiBudW1iZXI7XG4gIHRvdGFsQ3VycmVudEJhbGFuY2U6IG51bWJlcjtcbn1cblxuLy8gQXNzdW1pbmcgeW91IG5lZWQgYSBmb3JtYXQgZnVuY3Rpb24gZm9yIGN1cnJlbmN5XG5jb25zdCBmb3JtYXRBbW91bnQgPSAoYW1vdW50OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIGAkJHthbW91bnQudG9GaXhlZCgyKX1gO1xufTtcblxuY29uc3QgVG90YWxCYWxhbmNlQm94ID0gKHtcbiAgYWNjb3VudHMgPSBbXSxcbiAgdG90YWxCYW5rcyxcbiAgdG90YWxDdXJyZW50QmFsYW5jZVxufTogVG90YWxCYWxhbmNlQm94UHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvdGFsLWJhbGFuY2UnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvdGFsLWJhbGFuY2UtY2hhcnQnPlxuICAgICAgICA8RG91Z2hudXRDaGFydCBhY2NvdW50cz17YWNjb3VudHN9Lz5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBnYXAtNic+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9J2hlYWRlci0yJz5cbiAgICAgICAgICBCYW5rIEFjY291bnRzOiB7dG90YWxCYW5rc30gXG4gICAgICAgIDwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGdhcC0yJz5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9J3RvdGFsLWJhbGFuY2UtbGFiZWwnPlxuICAgICAgICAgICAgVG90YWwgQ3VycmVudCBCYWxhbmNlXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndG90YWwtYmFsYW5jZS1hbW91bnQgZmxleC1jZW50ZXIgZ2FwLTInPlxuICAgICAgICAgICAge2Zvcm1hdEFtb3VudCh0b3RhbEN1cnJlbnRCYWxhbmNlKX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG90YWxCYWxhbmNlQm94OyJdLCJuYW1lcyI6WyJSZWFjdCIsImZvcm1hdEFtb3VudCIsImFtb3VudCIsInRvRml4ZWQiLCJUb3RhbEJhbGFuY2VCb3giLCJhY2NvdW50cyIsInRvdGFsQmFua3MiLCJ0b3RhbEN1cnJlbnRCYWxhbmNlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIkRvdWdobnV0Q2hhcnQiLCJoMiIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/TotalBalanceBox.tsx\n"));

/***/ })

});
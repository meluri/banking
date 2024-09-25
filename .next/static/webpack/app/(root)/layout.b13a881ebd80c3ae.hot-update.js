"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./components/Sidebar.tsx":
/*!********************************!*\
  !*** ./components/Sidebar.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    className: \"mb-12 cursor-pointer items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/icons/logo.svg\",\n                            width: 34,\n                            height: 34,\n                            alt: \"horizon logo\",\n                            className: \"size-[24px] max-xl:size-14\"\n                        }, void 0, false, {\n                            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"sidebar-logo\",\n                            children: \"Horizon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                _constants__WEBPACK_IMPORTED_MODULE_4__.sidebarLinks.map((item)=>{\n                    const isActive = pathname === item.route || pathname.startsWith(\"${item.route}/\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: item.route,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"sidebar-link\", {\n                            \"bg-bank-gradient\": isActive\n                        }),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"relative size-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: item.imgURL,\n                                alt: item.label,\n                                fill: true\n                            }, void 0, false, {\n                                fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 15\n                        }, undefined)\n                    }, item.label, false, {\n                        fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMEI7QUFDSztBQUNGO0FBQ2M7QUFDRztBQUNiO0FBRWpDLE1BQU1NLFVBQVU7UUFBQyxFQUFFQyxJQUFJLEVBQWlCOztJQUN0QyxNQUFNQyxXQUFXSiw0REFBV0E7SUFFNUIscUJBQ0UsOERBQUNLO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ1IsaURBQUlBO29CQUFDVSxNQUFLO29CQUFJRixXQUFVOztzQ0FDdkIsOERBQUNULGtEQUFLQTs0QkFDSlksS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs0QkFDSk4sV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTzs0QkFBR1AsV0FBVTtzQ0FBZTs7Ozs7Ozs7Ozs7O2dCQUc5QlAsb0RBQVlBLENBQUNlLEdBQUcsQ0FBQyxDQUFDQztvQkFDakIsTUFBTUMsV0FDSlosYUFBYVcsS0FBS0UsS0FBSyxJQUFJYixTQUFTYyxVQUFVLENBQUM7b0JBQ2pELHFCQUNFLDhEQUFDcEIsaURBQUlBO3dCQUNIVSxNQUFNTyxLQUFLRSxLQUFLO3dCQUVoQlgsV0FBV0wsOENBQUVBLENBQUMsZ0JBQWdCOzRCQUFFLG9CQUFvQmU7d0JBQVM7a0NBRTdELDRFQUFDRzs0QkFBSWIsV0FBVTtzQ0FDYiw0RUFBQ1Qsa0RBQUtBO2dDQUNOWSxLQUFLTSxLQUFLSyxNQUFNO2dDQUNoQlIsS0FBS0csS0FBS00sS0FBSztnQ0FDZkMsSUFBSTs7Ozs7Ozs7Ozs7dUJBUERQLEtBQUtNLEtBQUs7Ozs7O2dCQWFyQjs7Ozs7Ozs7Ozs7O0FBSVI7R0F4Q01uQjs7UUFDYUYsd0RBQVdBOzs7S0FEeEJFO0FBMENOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3g/NmJhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBzaWRlYmFyTGlua3MgfSBmcm9tIFwiQC9jb25zdGFudHNcIjtcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgU2lkZWJhciA9ICh7IHVzZXIgfTogU2lkZXJiYXJQcm9wcykgPT4ge1xuICBjb25zdCBwYXRobmFtZSA9IHVzZVBhdGhuYW1lKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJzaWRlYmFyXCI+XG4gICAgICA8bmF2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTRcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJtYi0xMiBjdXJzb3ItcG9pbnRlciBpdGVtcy1jZW50ZXIgZ2FwLTJcIj5cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz1cIi9pY29ucy9sb2dvLnN2Z1wiXG4gICAgICAgICAgICB3aWR0aD17MzR9XG4gICAgICAgICAgICBoZWlnaHQ9ezM0fVxuICAgICAgICAgICAgYWx0PVwiaG9yaXpvbiBsb2dvXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNpemUtWzI0cHhdIG1heC14bDpzaXplLTE0XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJzaWRlYmFyLWxvZ29cIj5Ib3Jpem9uPC9oMT5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHtzaWRlYmFyTGlua3MubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgY29uc3QgaXNBY3RpdmUgPVxuICAgICAgICAgICAgcGF0aG5hbWUgPT09IGl0ZW0ucm91dGUgfHwgcGF0aG5hbWUuc3RhcnRzV2l0aChcIiR7aXRlbS5yb3V0ZX0vXCIpO1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBocmVmPXtpdGVtLnJvdXRlfVxuICAgICAgICAgICAgICBrZXk9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXCJzaWRlYmFyLWxpbmtcIiwgeyBcImJnLWJhbmstZ3JhZGllbnRcIjogaXNBY3RpdmUgfSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgc2l6ZS02XCI+XG4gICAgICAgICAgICAgICAgPEltYWdlIFxuICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdVUkx9XG4gICAgICAgICAgICAgICAgYWx0PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIGZpbGxcbiAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9uYXY+XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkltYWdlIiwiTGluayIsInNpZGViYXJMaW5rcyIsInVzZVBhdGhuYW1lIiwiY24iLCJTaWRlYmFyIiwidXNlciIsInBhdGhuYW1lIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsIm5hdiIsImhyZWYiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgxIiwibWFwIiwiaXRlbSIsImlzQWN0aXZlIiwicm91dGUiLCJzdGFydHNXaXRoIiwiZGl2IiwiaW1nVVJMIiwibGFiZWwiLCJmaWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});
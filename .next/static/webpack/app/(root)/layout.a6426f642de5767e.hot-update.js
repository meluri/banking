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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./constants/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Sidebar = (param)=>{\n    let { user } = param;\n    _s();\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"sidebar\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"flex flex-col gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: \"/\",\n                    className: \"mb-12 cursor-pointer items-center gap-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: \"/icons/logo.svg\",\n                            width: 34,\n                            height: 34,\n                            alt: \"horizon logo\",\n                            className: \"size-[24px] max-xl:size-14\"\n                        }, void 0, false, {\n                            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"sidebar-logo\",\n                            children: \"Horizon\"\n                        }, void 0, false, {\n                            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined),\n                _constants__WEBPACK_IMPORTED_MODULE_4__.sidebarLinks.map((item)=>{\n                    const isActive = pathname === item.route || pathname.startsWith(\"${item.route}/\");\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        href: item.route,\n                        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(\"sidebar-link\", {\n                            \"bg-bank-gradient\": isActive\n                        }),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative size-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    src: item.imgURL,\n                                    alt: item.label,\n                                    fill: true,\n                                    className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)({\n                                        \"brightness-[3] invert-0\": isActive\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_6__.cn)(),\n                                children: item.label\n                            }, void 0, false, {\n                                fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, item.label, true, {\n                        fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, undefined);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/damian/Documents/MyCode/banking/components/Sidebar.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Sidebar, \"xbyQPtUVMO7MNj7WjJlpdWqRcTo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.usePathname\n    ];\n});\n_c = Sidebar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFFMEI7QUFDSztBQUNGO0FBQ2M7QUFDRztBQUNiO0FBRWpDLE1BQU1NLFVBQVU7UUFBQyxFQUFFQyxJQUFJLEVBQWlCOztJQUN0QyxNQUFNQyxXQUFXSiw0REFBV0E7SUFFNUIscUJBQ0UsOERBQUNLO1FBQVFDLFdBQVU7a0JBQ2pCLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ1IsaURBQUlBO29CQUFDVSxNQUFLO29CQUFJRixXQUFVOztzQ0FDdkIsOERBQUNULGtEQUFLQTs0QkFDSlksS0FBSTs0QkFDSkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs0QkFDSk4sV0FBVTs7Ozs7O3NDQUVaLDhEQUFDTzs0QkFBR1AsV0FBVTtzQ0FBZTs7Ozs7Ozs7Ozs7O2dCQUc5QlAsb0RBQVlBLENBQUNlLEdBQUcsQ0FBQyxDQUFDQztvQkFDakIsTUFBTUMsV0FDSlosYUFBYVcsS0FBS0UsS0FBSyxJQUFJYixTQUFTYyxVQUFVLENBQUM7b0JBQ2pELHFCQUNFLDhEQUFDcEIsaURBQUlBO3dCQUNIVSxNQUFNTyxLQUFLRSxLQUFLO3dCQUVoQlgsV0FBV0wsOENBQUVBLENBQUMsZ0JBQWdCOzRCQUFFLG9CQUFvQmU7d0JBQVM7OzBDQUU3RCw4REFBQ0c7Z0NBQUliLFdBQVU7MENBQ2IsNEVBQUNULGtEQUFLQTtvQ0FDSlksS0FBS00sS0FBS0ssTUFBTTtvQ0FDaEJSLEtBQUtHLEtBQUtNLEtBQUs7b0NBQ2ZDLElBQUk7b0NBQ0poQixXQUFXTCw4Q0FBRUEsQ0FBQzt3Q0FDWiwyQkFBMkJlO29DQUM3Qjs7Ozs7Ozs7Ozs7MENBR0osOERBQUNPO2dDQUFFakIsV0FBV0wsOENBQUVBOzBDQUNiYyxLQUFLTSxLQUFLOzs7Ozs7O3VCQWRSTixLQUFLTSxLQUFLOzs7OztnQkFrQnJCOzs7Ozs7Ozs7Ozs7QUFJUjtHQTdDTW5COztRQUNhRix3REFBV0E7OztLQUR4QkU7QUErQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyLnRzeD82YmE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHNpZGViYXJMaW5rcyB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyBjbiB9IGZyb20gXCJAL2xpYi91dGlsc1wiO1xuXG5jb25zdCBTaWRlYmFyID0gKHsgdXNlciB9OiBTaWRlcmJhclByb3BzKSA9PiB7XG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInNpZGViYXJcIj5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNFwiPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1iLTEyIGN1cnNvci1wb2ludGVyIGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPVwiL2ljb25zL2xvZ28uc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPXszNH1cbiAgICAgICAgICAgIGhlaWdodD17MzR9XG4gICAgICAgICAgICBhbHQ9XCJob3Jpem9uIGxvZ29cIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l6ZS1bMjRweF0gbWF4LXhsOnNpemUtMTRcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInNpZGViYXItbG9nb1wiPkhvcml6b248L2gxPlxuICAgICAgICA8L0xpbms+XG5cbiAgICAgICAge3NpZGViYXJMaW5rcy5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICBjb25zdCBpc0FjdGl2ZSA9XG4gICAgICAgICAgICBwYXRobmFtZSA9PT0gaXRlbS5yb3V0ZSB8fCBwYXRobmFtZS5zdGFydHNXaXRoKFwiJHtpdGVtLnJvdXRlfS9cIik7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9e2l0ZW0ucm91dGV9XG4gICAgICAgICAgICAgIGtleT17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcInNpZGViYXItbGlua1wiLCB7IFwiYmctYmFuay1ncmFkaWVudFwiOiBpc0FjdGl2ZSB9KX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBzaXplLTZcIj5cbiAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgIHNyYz17aXRlbS5pbWdVUkx9XG4gICAgICAgICAgICAgICAgICBhbHQ9e2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICBmaWxsXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKHtcbiAgICAgICAgICAgICAgICAgICAgXCJicmlnaHRuZXNzLVszXSBpbnZlcnQtMFwiOiBpc0FjdGl2ZSxcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2NuKCl9PlxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L25hdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTaWRlYmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwic2lkZWJhckxpbmtzIiwidXNlUGF0aG5hbWUiLCJjbiIsIlNpZGViYXIiLCJ1c2VyIiwicGF0aG5hbWUiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwibmF2IiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiaDEiLCJtYXAiLCJpdGVtIiwiaXNBY3RpdmUiLCJyb3V0ZSIsInN0YXJ0c1dpdGgiLCJkaXYiLCJpbWdVUkwiLCJsYWJlbCIsImZpbGwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/DashboardBox.tsx":
/*!*******************************************!*\
  !*** ./pages/components/DashboardBox.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __barrel_optimize__?names=Box!=!@mui/material */ \"__barrel_optimize__?names=Box!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n\n\nconst DashboardBox = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__.styled)(_barrel_optimize_names_Box_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box)((param)=>{\n    let { theme } = param;\n    return {\n        backgroundColor: theme.palette.background.light,\n        borderRadius: \"1rem\",\n        boxShadow: \"0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)\",\n        width: \"50%\",\n        margin: \"1rem auto\",\n        height: \"fit-content\"\n    };\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (DashboardBox);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Rhc2hib2FyZEJveC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ0M7QUFFckMsTUFBTUUsZUFBZUQsbURBQU1BLENBQUNELHdFQUFHQSxFQUFFO1FBQUMsRUFBRUcsS0FBSyxFQUFFO1dBQU07UUFDL0NDLGlCQUFpQkQsTUFBTUUsT0FBTyxDQUFDQyxVQUFVLENBQUNDLEtBQUs7UUFDL0NDLGNBQWM7UUFDZEMsV0FBVztRQUNYQyxPQUFPO1FBQ1BDLFFBQVE7UUFDUkMsUUFBUTtJQUNWOztBQUVBLCtEQUFlVixZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvRGFzaGJvYXJkQm94LnRzeD8yYTVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCB9IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBzdHlsZWQgfSBmcm9tIFwiQG11aS9zeXN0ZW1cIjtcblxuY29uc3QgRGFzaGJvYXJkQm94ID0gc3R5bGVkKEJveCkoKHsgdGhlbWUgfSkgPT4gKHtcbiAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQubGlnaHQsXG4gIGJvcmRlclJhZGl1czogXCIxcmVtXCIsXG4gIGJveFNoYWRvdzogXCIwLjE1cmVtIDAuMnJlbSAwLjE1cmVtIDAuMXJlbSByZ2JhKDAsIDAsIDAsIDAuOClcIixcbiAgd2lkdGg6IFwiNTAlXCIsXG4gIG1hcmdpbjogXCIxcmVtIGF1dG9cIixcbiAgaGVpZ2h0OiBcImZpdC1jb250ZW50XCIsXG59KSk7XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZEJveDtcbiJdLCJuYW1lcyI6WyJCb3giLCJzdHlsZWQiLCJEYXNoYm9hcmRCb3giLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwibGlnaHQiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJ3aWR0aCIsIm1hcmdpbiIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/DashboardBox.tsx\n"));

/***/ })

});
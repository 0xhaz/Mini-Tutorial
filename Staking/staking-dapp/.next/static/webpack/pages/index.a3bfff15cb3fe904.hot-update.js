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

/***/ "./pages/constants/config.ts":
/*!***********************************!*\
  !*** ./pages/constants/config.ts ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ASSETS_STAKED: function() { return /* binding */ ASSETS_STAKED; },\n/* harmony export */   STAKING_ABI: function() { return /* binding */ STAKING_ABI; },\n/* harmony export */   STAKING_ADDRESS: function() { return /* binding */ STAKING_ADDRESS; },\n/* harmony export */   STAKING_PERIODS: function() { return /* binding */ STAKING_PERIODS; }\n/* harmony export */ });\n/* harmony import */ var _abi_StakingABI_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../abi/StakingABI.json */ \"./pages/abi/StakingABI.json\");\nconst STAKING_ADDRESS = \"0xB8AAf593fc562ef953F0C8651545c45d698d7718\";\n\nconst STAKING_ABI = _abi_StakingABI_json__WEBPACK_IMPORTED_MODULE_0__.abi;\n// Array of objects with the following properties:\n// 30 days is 7% APY\n// 90 days is 10% APY\n// 365 days is 15% APY\nconst STAKING_PERIODS = [\n    {\n        id: 1,\n        name: \"30 days\",\n        apy: 7\n    },\n    {\n        id: 2,\n        name: \"90 days\",\n        apy: 10\n    },\n    {\n        id: 3,\n        name: \"365 days\",\n        apy: 15\n    }\n];\nconst ASSETS_STAKED = [\n    {\n        id: 1,\n        name: \"ETH\",\n        percentInterest: 7,\n        etherStaked: 1,\n        etherInterest: 0.07,\n        daysRemaining: 30\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb25zdGFudHMvY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sTUFBTUEsa0JBQWtCLDZDQUE2QztBQUVqQjtBQUVwRCxNQUFNRyxjQUFjRCxxREFBVUEsQ0FBQztBQUV0QyxrREFBa0Q7QUFDbEQsb0JBQW9CO0FBQ3BCLHFCQUFxQjtBQUNyQixzQkFBc0I7QUFFZixNQUFNRSxrQkFBa0I7SUFDN0I7UUFDRUMsSUFBSTtRQUNKQyxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLE1BQU07UUFDTkMsS0FBSztJQUNQO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLGdCQUFnQjtJQUMzQjtRQUNFSCxJQUFJO1FBQ0pDLE1BQU07UUFDTkcsaUJBQWlCO1FBQ2pCQyxhQUFhO1FBQ2JDLGVBQWU7UUFDZkMsZUFBZTtJQUNqQjtDQUNELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29uc3RhbnRzL2NvbmZpZy50cz84NDU2Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTVEFLSU5HX0FERFJFU1MgPSBcIjB4QjhBQWY1OTNmYzU2MmVmOTUzRjBDODY1MTU0NWM0NWQ2OThkNzcxOFwiO1xuXG5pbXBvcnQgeyBhYmkgYXMgU3Rha2luZ0FCSSB9IGZyb20gXCIuLi9hYmkvU3Rha2luZ0FCSS5qc29uXCI7XG5cbmV4cG9ydCBjb25zdCBTVEFLSU5HX0FCSSA9IFN0YWtpbmdBQkk7XG5cbi8vIEFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4vLyAzMCBkYXlzIGlzIDclIEFQWVxuLy8gOTAgZGF5cyBpcyAxMCUgQVBZXG4vLyAzNjUgZGF5cyBpcyAxNSUgQVBZXG5cbmV4cG9ydCBjb25zdCBTVEFLSU5HX1BFUklPRFMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBuYW1lOiBcIjMwIGRheXNcIixcbiAgICBhcHk6IDcsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBuYW1lOiBcIjkwIGRheXNcIixcbiAgICBhcHk6IDEwLFxuICB9LFxuICB7XG4gICAgaWQ6IDMsXG4gICAgbmFtZTogXCIzNjUgZGF5c1wiLFxuICAgIGFweTogMTUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgQVNTRVRTX1NUQUtFRCA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIG5hbWU6IFwiRVRIXCIsXG4gICAgcGVyY2VudEludGVyZXN0OiA3LFxuICAgIGV0aGVyU3Rha2VkOiAxLFxuICAgIGV0aGVySW50ZXJlc3Q6IDAuMDcsXG4gICAgZGF5c1JlbWFpbmluZzogMzAsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbIlNUQUtJTkdfQUREUkVTUyIsImFiaSIsIlN0YWtpbmdBQkkiLCJTVEFLSU5HX0FCSSIsIlNUQUtJTkdfUEVSSU9EUyIsImlkIiwibmFtZSIsImFweSIsIkFTU0VUU19TVEFLRUQiLCJwZXJjZW50SW50ZXJlc3QiLCJldGhlclN0YWtlZCIsImV0aGVySW50ZXJlc3QiLCJkYXlzUmVtYWluaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/constants/config.ts\n"));

/***/ })

});
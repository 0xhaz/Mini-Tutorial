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

/***/ "./pages/cards/StakingCards.tsx":
/*!**************************************!*\
  !*** ./pages/cards/StakingCards.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Card,CardActions,CardContent,CardMedia,Typography,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Button,Card,CardActions,CardContent,CardMedia,Typography,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst StakingCards = (param)=>{\n    let { id, name, apy } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Card, {\n        sx: {\n            width: 270,\n            margin: \"2rem auto\",\n            height: 400,\n            borderRadius: \"25px\",\n            boxShadow: \"0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, 0.8)\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardMedia, {\n                component: \"img\",\n                height: \"200\",\n                image: \"/images/weth.svg\",\n                alt: \"logo\",\n                sx: {\n                    objectFit: \"contain\",\n                    padding: \"0.4rem\",\n                    backgroundImage: \"linear-gradient(45deg, #f2b455, #8f929b, #0ebfa0)\"\n                }\n            }, void 0, false, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardContent, {\n                sx: {\n                    backgroundColor: palette.grey[900],\n                    color: palette.secondary.contrastText,\n                    height: \"100%\",\n                    display: \"flex\",\n                    flexDirection: \"column\",\n                    alignItems: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        gutterBottom: true,\n                        variant: \"h3\",\n                        component: \"div\",\n                        children: name\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Typography, {\n                        variant: \"h4\",\n                        color: palette.primary.main,\n                        children: [\n                            apy,\n                            \"% APY\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.CardActions, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                            size: \"large\",\n                            variant: \"contained\",\n                            sx: {\n                                padding: \"0.5rem 4rem 0.5em 4rem\",\n                                marginTop: \"1rem\",\n                                fontSize: \"1rem\",\n                                fontWeight: \"500\"\n                            },\n                            children: \"Stake\"\n                        }, void 0, false, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n                            lineNumber: 60,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/cards/StakingCards.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingCards, \"KSZZ7uh0OZO6dgta9vGWhMa24zw=\", false, function() {\n    return [\n        _barrel_optimize_names_Button_Card_CardActions_CardContent_CardMedia_Typography_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingCards;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingCards);\nvar _c;\n$RefreshReg$(_c, \"StakingCards\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jYXJkcy9TdGFraW5nQ2FyZHMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBV0g7QUFRdkIsTUFBTVEsZUFBZTtRQUFDLEVBQUVDLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxHQUFHLEVBQVM7O0lBQzVDLE1BQU0sRUFBRUMsT0FBTyxFQUFFLEdBQUdOLCtJQUFRQTtJQUM1QixxQkFDRSw4REFBQ0wsdUlBQUlBO1FBQ0hZLElBQUk7WUFDRkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsY0FBYztZQUNkQyxXQUFXO1FBQ2I7OzBCQUVBLDhEQUFDWCw0SUFBU0E7Z0JBQ1JZLFdBQVU7Z0JBQ1ZILFFBQU87Z0JBQ1BJLE9BQU07Z0JBQ05DLEtBQUk7Z0JBQ0pSLElBQUk7b0JBQ0ZTLFdBQVc7b0JBQ1hDLFNBQVM7b0JBQ1RDLGlCQUFpQjtnQkFDbkI7Ozs7OzswQkFFRiw4REFBQ3JCLDhJQUFXQTtnQkFDVlUsSUFBSTtvQkFDRlksaUJBQWlCYixRQUFRYyxJQUFJLENBQUMsSUFBSTtvQkFDbENDLE9BQU9mLFFBQVFnQixTQUFTLENBQUNDLFlBQVk7b0JBQ3JDYixRQUFRO29CQUNSYyxTQUFTO29CQUNUQyxlQUFlO29CQUNmQyxZQUFZO2dCQUNkOztrQ0FFQSw4REFBQzNCLDZJQUFVQTt3QkFBQzRCLFlBQVk7d0JBQUNDLFNBQVE7d0JBQUtmLFdBQVU7a0NBQzdDVDs7Ozs7O2tDQUVILDhEQUFDTCw2SUFBVUE7d0JBQUM2QixTQUFRO3dCQUFLUCxPQUFPZixRQUFRdUIsT0FBTyxDQUFDQyxJQUFJOzs0QkFDakR6Qjs0QkFBSTs7Ozs7OztrQ0FFUCw4REFBQ1QsOElBQVdBO2tDQUNWLDRFQUFDRSx5SUFBTUE7NEJBQ0xpQyxNQUFLOzRCQUNMSCxTQUFROzRCQUNSckIsSUFBSTtnQ0FDRlUsU0FBUztnQ0FDVGUsV0FBVztnQ0FDWEMsVUFBVTtnQ0FDVkMsWUFBWTs0QkFDZDtzQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQXhETWhDOztRQUNnQkYsMklBQVFBOzs7S0FEeEJFO0FBeUROLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NhcmRzL1N0YWtpbmdDYXJkcy50c3g/YTc1ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBDYXJkLFxuICBDYXJkQWN0aW9ucyxcbiAgQ2FyZEFjdGlvbkFyZWEsXG4gIENhcmRDb250ZW50LFxuICBCb3gsXG4gIEJ1dHRvbixcbiAgVHlwb2dyYXBoeSxcbiAgdXNlVGhlbWUsXG4gIENhcmRNZWRpYSxcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBhcHk6IG51bWJlcjtcbn07XG5cbmNvbnN0IFN0YWtpbmdDYXJkcyA9ICh7IGlkLCBuYW1lLCBhcHkgfTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWxldHRlIH0gPSB1c2VUaGVtZSgpO1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBzeD17e1xuICAgICAgICB3aWR0aDogMjcwLFxuICAgICAgICBtYXJnaW46IFwiMnJlbSBhdXRvXCIsXG4gICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICBib3JkZXJSYWRpdXM6IFwiMjVweFwiLFxuICAgICAgICBib3hTaGFkb3c6IFwiMC4xNXJlbSAwLjJyZW0gMC4xNXJlbSAwLjFyZW0gcmdiYSgwLCAwLCAwLCAwLjgpXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgY29tcG9uZW50PVwiaW1nXCJcbiAgICAgICAgaGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgaW1hZ2U9XCIvaW1hZ2VzL3dldGguc3ZnXCJcbiAgICAgICAgYWx0PVwibG9nb1wiXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgb2JqZWN0Rml0OiBcImNvbnRhaW5cIixcbiAgICAgICAgICBwYWRkaW5nOiBcIjAuNHJlbVwiLFxuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXCJsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmMmI0NTUsICM4ZjkyOWIsICMwZWJmYTApXCIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPENhcmRDb250ZW50XG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZXlbOTAwXSxcbiAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5zZWNvbmRhcnkuY29udHJhc3RUZXh0LFxuICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImgzXCIgY29tcG9uZW50PVwiZGl2XCI+XG4gICAgICAgICAge25hbWV9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgY29sb3I9e3BhbGV0dGUucHJpbWFyeS5tYWlufT5cbiAgICAgICAgICB7YXB5fSUgQVBZXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPENhcmRBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IFwiMC41cmVtIDRyZW0gMC41ZW0gNHJlbVwiLFxuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMXJlbVwiLFxuICAgICAgICAgICAgICBmb250U2l6ZTogXCIxcmVtXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0YWtlXG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBTdGFraW5nQ2FyZHM7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJDYXJkIiwiQ2FyZEFjdGlvbnMiLCJDYXJkQ29udGVudCIsIkJ1dHRvbiIsIlR5cG9ncmFwaHkiLCJ1c2VUaGVtZSIsIkNhcmRNZWRpYSIsIlN0YWtpbmdDYXJkcyIsImlkIiwibmFtZSIsImFweSIsInBhbGV0dGUiLCJzeCIsIndpZHRoIiwibWFyZ2luIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29tcG9uZW50IiwiaW1hZ2UiLCJhbHQiLCJvYmplY3RGaXQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZENvbG9yIiwiZ3JleSIsImNvbG9yIiwic2Vjb25kYXJ5IiwiY29udHJhc3RUZXh0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiZ3V0dGVyQm90dG9tIiwidmFyaWFudCIsInByaW1hcnkiLCJtYWluIiwic2l6ZSIsIm1hcmdpblRvcCIsImZvbnRTaXplIiwiZm9udFdlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/cards/StakingCards.tsx\n"));

/***/ })

});
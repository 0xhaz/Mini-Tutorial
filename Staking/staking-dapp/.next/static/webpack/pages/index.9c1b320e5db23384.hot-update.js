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

/***/ "./pages/components/StakingTable.tsx":
/*!*******************************************!*\
  !*** ./pages/components/StakingTable.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableCell,TableContainer,TableHead,TableRow,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Paper,Table,TableCell,TableContainer,TableHead,TableRow,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst StakingTable = (param)=>{\n    let { id, name, percentInterest, etherStaked, etherInterest, daysRemaining } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChangePage = (event, newPage)=>{\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n        sx: {\n            width: \"100%\",\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n            sx: {\n                maxHeight: 440\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                stickyHeader: true,\n                \"aria-lable\": \"sticky table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                        sx: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\",\n                            backgroundColor: palette.grey[900],\n                            height: \"100%\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.primary.light,\n                                    backgroundColor: palette.grey[700],\n                                    minWidth: 170,\n                                    height: \"100%\"\n                                },\n                                children: \"Assets\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Percent Interest\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    backgroundColor: palette.grey[900],\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Staked\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Interest\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Days Remaining\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingTable, \"1notDViDzAwY+mNQLHRwqDX6oAw=\", false, function() {\n    return [\n        _barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingTable);\nvar _c;\n$RefreshReg$(_c, \"StakingTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0YWtpbmdUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFjVjtBQVl2QixNQUFNUSxlQUFlO1FBQUMsRUFDcEJDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxlQUFlLEVBQ2ZDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxhQUFhLEVBQ1A7O0lBQ04sTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR1IsOElBQVFBO0lBQzVCLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFakMsTUFBTW9CLG1CQUFtQixDQUFDQyxPQUFnQkM7UUFDeENILFFBQVFHO0lBQ1Y7SUFFQSxNQUFNQywwQkFBMEIsQ0FDOUJGO1FBRUFKLGVBQWUsQ0FBQ0ksTUFBTUcsTUFBTSxDQUFDQyxLQUFLO1FBQ2xDTixRQUFRO0lBQ1Y7SUFDQSxxQkFDRSw4REFBQ2IsdUlBQUtBO1FBQUNvQixJQUFJO1lBQUVDLE9BQU87WUFBUUMsVUFBVTtRQUFTO2tCQUM3Qyw0RUFBQ3pCLGdKQUFjQTtZQUFDdUIsSUFBSTtnQkFBRUcsV0FBVztZQUFJO3NCQUNuQyw0RUFBQzVCLHVJQUFLQTtnQkFBQzZCLFlBQVk7Z0JBQUNDLGNBQVc7MEJBQzdCLDRFQUFDM0IsMklBQVNBOzhCQUNSLDRFQUFDQywwSUFBUUE7d0JBQ1BxQixJQUFJOzRCQUNGTSxTQUFTOzRCQUNUQyxnQkFBZ0I7NEJBQ2hCQyxpQkFBaUJuQixRQUFRb0IsSUFBSSxDQUFDLElBQUk7NEJBQ2xDQyxRQUFRO3dCQUNWOzswQ0FFQSw4REFBQ2xDLDJJQUFTQTtnQ0FDUndCLElBQUk7b0NBQ0ZXLE9BQU90QixRQUFRdUIsT0FBTyxDQUFDQyxLQUFLO29DQUM1QkwsaUJBQWlCbkIsUUFBUW9CLElBQUksQ0FBQyxJQUFJO29DQUNsQ0ssVUFBVTtvQ0FDVkosUUFBUTtnQ0FDVjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDbEMsMklBQVNBO2dDQUNSd0IsSUFBSTtvQ0FDRk0sU0FBUztvQ0FDVEssT0FBT3RCLFFBQVF1QixPQUFPLENBQUNDLEtBQUs7b0NBQzVCQyxVQUFVO2dDQUNaOzBDQUNEOzs7Ozs7MENBR0QsOERBQUN0QywySUFBU0E7Z0NBQ1J3QixJQUFJO29DQUNGUSxpQkFBaUJuQixRQUFRb0IsSUFBSSxDQUFDLElBQUk7b0NBQ2xDSCxTQUFTO29DQUNUSyxPQUFPdEIsUUFBUXVCLE9BQU8sQ0FBQ0MsS0FBSztvQ0FDNUJDLFVBQVU7Z0NBQ1o7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ3RDLDJJQUFTQTtnQ0FDUndCLElBQUk7b0NBQ0ZNLFNBQVM7b0NBQ1RLLE9BQU90QixRQUFRdUIsT0FBTyxDQUFDQyxLQUFLO29DQUM1QkMsVUFBVTtnQ0FDWjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDdEMsMklBQVNBO2dDQUNSd0IsSUFBSTtvQ0FDRk0sU0FBUztvQ0FDVEssT0FBT3RCLFFBQVF1QixPQUFPLENBQUNDLEtBQUs7b0NBQzVCQyxVQUFVO2dDQUNaOzBDQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNmO0dBeEZNaEM7O1FBUWdCRCwwSUFBUUE7OztLQVJ4QkM7QUEwRk4sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TdGFraW5nVGFibGUudHN4P2I5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgVHlwb2dyYXBoeSxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUNvbnRhaW5lcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgUGFwZXIsXG4gIEljb25CdXR0b24sXG4gIHVzZVRoZW1lLFxuICBUYWJsZVBhZ2luYXRpb24sXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBLZXlib2FyZEFycm93RG93biwgS2V5Ym9hcmRBcnJvd1VwIH0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwZXJjZW50SW50ZXJlc3Q6IG51bWJlcjtcbiAgZXRoZXJTdGFrZWQ6IG51bWJlcjtcbiAgZXRoZXJJbnRlcmVzdDogbnVtYmVyO1xuICBkYXlzUmVtYWluaW5nOiBudW1iZXI7XG59O1xuXG5jb25zdCBTdGFraW5nVGFibGUgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgcGVyY2VudEludGVyZXN0LFxuICBldGhlclN0YWtlZCxcbiAgZXRoZXJJbnRlcmVzdCxcbiAgZGF5c1JlbWFpbmluZyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFsZXR0ZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShuZXdQYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZSgwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXIgc3g9e3sgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJoaWRkZW5cIiB9fT5cbiAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBtYXhIZWlnaHQ6IDQ0MCB9fT5cbiAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmxlPVwic3RpY2t5IHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmV5WzcwMF0sXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQXNzZXRzXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE3MCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGVyY2VudCBJbnRlcmVzdFxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGFrZWRcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJbnRlcmVzdFxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNzAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERheXMgUmVtYWluaW5nXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWtpbmdUYWJsZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhYmxlIiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwidXNlVGhlbWUiLCJTdGFraW5nVGFibGUiLCJpZCIsIm5hbWUiLCJwZXJjZW50SW50ZXJlc3QiLCJldGhlclN0YWtlZCIsImV0aGVySW50ZXJlc3QiLCJkYXlzUmVtYWluaW5nIiwicGFsZXR0ZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJwYWdlIiwic2V0UGFnZSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsInZhbHVlIiwic3giLCJ3aWR0aCIsIm92ZXJmbG93IiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwiYXJpYS1sYWJsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImdyZXkiLCJoZWlnaHQiLCJjb2xvciIsInByaW1hcnkiLCJsaWdodCIsIm1pbldpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/StakingTable.tsx\n"));

/***/ })

});
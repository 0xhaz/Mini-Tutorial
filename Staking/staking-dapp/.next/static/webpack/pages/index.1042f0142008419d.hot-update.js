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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableCell,TableContainer,TableHead,TableRow,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Paper,Table,TableCell,TableContainer,TableHead,TableRow,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst StakingTable = (param)=>{\n    let { id, name, percentInterest, etherStaked, etherInterest, daysRemaining } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChangePage = (event, newPage)=>{\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n        sx: {\n            width: \"100%\",\n            overflow: \"hidden\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n            sx: {\n                maxHeight: 440\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                stickyHeader: true,\n                \"aria-lable\": \"sticky table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                        sx: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\",\n                            backgroundColor: palette.grey[900]\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.grey[400],\n                                    minWidth: 170\n                                },\n                                children: \"Assets\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Percent Interest\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    backgroundColor: palette.grey[900],\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Staked\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Interest\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 88,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    display: \"column\",\n                                    color: palette.primary.light,\n                                    minWidth: 170\n                                },\n                                children: \"Days Remaining\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                lineNumber: 52,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingTable, \"1notDViDzAwY+mNQLHRwqDX6oAw=\", false, function() {\n    return [\n        _barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingTable);\nvar _c;\n$RefreshReg$(_c, \"StakingTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0YWtpbmdUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFjVjtBQVl2QixNQUFNUSxlQUFlO1FBQUMsRUFDcEJDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxlQUFlLEVBQ2ZDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxhQUFhLEVBQ1A7O0lBQ04sTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR1IsOElBQVFBO0lBQzVCLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFakMsTUFBTW9CLG1CQUFtQixDQUFDQyxPQUFnQkM7UUFDeENILFFBQVFHO0lBQ1Y7SUFFQSxNQUFNQywwQkFBMEIsQ0FDOUJGO1FBRUFKLGVBQWUsQ0FBQ0ksTUFBTUcsTUFBTSxDQUFDQyxLQUFLO1FBQ2xDTixRQUFRO0lBQ1Y7SUFDQSxxQkFDRSw4REFBQ2IsdUlBQUtBO1FBQUNvQixJQUFJO1lBQUVDLE9BQU87WUFBUUMsVUFBVTtRQUFTO2tCQUM3Qyw0RUFBQ3pCLGdKQUFjQTtZQUFDdUIsSUFBSTtnQkFBRUcsV0FBVztZQUFJO3NCQUNuQyw0RUFBQzVCLHVJQUFLQTtnQkFBQzZCLFlBQVk7Z0JBQUNDLGNBQVc7MEJBQzdCLDRFQUFDM0IsMklBQVNBOzhCQUNSLDRFQUFDQywwSUFBUUE7d0JBQ1BxQixJQUFJOzRCQUNGTSxTQUFTOzRCQUNUQyxnQkFBZ0I7NEJBQ2hCQyxpQkFBaUJuQixRQUFRb0IsSUFBSSxDQUFDLElBQUk7d0JBQ3BDOzswQ0FFQSw4REFBQ2pDLDJJQUFTQTtnQ0FDUndCLElBQUk7b0NBQ0ZVLE9BQU9yQixRQUFRb0IsSUFBSSxDQUFDLElBQUk7b0NBQ3hCRSxVQUFVO2dDQUNaOzBDQUNEOzs7Ozs7MENBR0QsOERBQUNuQywySUFBU0E7Z0NBQ1J3QixJQUFJO29DQUNGTSxTQUFTO29DQUNUSSxPQUFPckIsUUFBUXVCLE9BQU8sQ0FBQ0MsS0FBSztvQ0FDNUJGLFVBQVU7Z0NBQ1o7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ25DLDJJQUFTQTtnQ0FDUndCLElBQUk7b0NBQ0ZRLGlCQUFpQm5CLFFBQVFvQixJQUFJLENBQUMsSUFBSTtvQ0FDbENILFNBQVM7b0NBQ1RJLE9BQU9yQixRQUFRdUIsT0FBTyxDQUFDQyxLQUFLO29DQUM1QkYsVUFBVTtnQ0FDWjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDbkMsMklBQVNBO2dDQUNSd0IsSUFBSTtvQ0FDRk0sU0FBUztvQ0FDVEksT0FBT3JCLFFBQVF1QixPQUFPLENBQUNDLEtBQUs7b0NBQzVCRixVQUFVO2dDQUNaOzBDQUNEOzs7Ozs7MENBR0QsOERBQUNuQywySUFBU0E7Z0NBQ1J3QixJQUFJO29DQUNGTSxTQUFTO29DQUNUSSxPQUFPckIsUUFBUXVCLE9BQU8sQ0FBQ0MsS0FBSztvQ0FDNUJGLFVBQVU7Z0NBQ1o7MENBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2Y7R0FyRk03Qjs7UUFRZ0JELDBJQUFRQTs7O0tBUnhCQztBQXVGTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL1N0YWtpbmdUYWJsZS50c3g/YjllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUeXBvZ3JhcGh5LFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBQYXBlcixcbiAgSWNvbkJ1dHRvbixcbiAgdXNlVGhlbWUsXG4gIFRhYmxlUGFnaW5hdGlvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEtleWJvYXJkQXJyb3dEb3duLCBLZXlib2FyZEFycm93VXAgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBlcmNlbnRJbnRlcmVzdDogbnVtYmVyO1xuICBldGhlclN0YWtlZDogbnVtYmVyO1xuICBldGhlckludGVyZXN0OiBudW1iZXI7XG4gIGRheXNSZW1haW5pbmc6IG51bWJlcjtcbn07XG5cbmNvbnN0IFN0YWtpbmdUYWJsZSA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBwZXJjZW50SW50ZXJlc3QsXG4gIGV0aGVyU3Rha2VkLFxuICBldGhlckludGVyZXN0LFxuICBkYXlzUmVtYWluaW5nLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWxldHRlIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlKDApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxQYXBlciBzeD17eyB3aWR0aDogXCIxMDAlXCIsIG92ZXJmbG93OiBcImhpZGRlblwiIH19PlxuICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogNDQwIH19PlxuICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFibGU9XCJzdGlja3kgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUuZ3JleVs0MDBdLFxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE3MCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQXNzZXRzXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IDE3MCxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUGVyY2VudCBJbnRlcmVzdFxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTdGFrZWRcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJbnRlcmVzdFxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiAxNzAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIERheXMgUmVtYWluaW5nXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlSGVhZD5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWtpbmdUYWJsZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhYmxlIiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwidXNlVGhlbWUiLCJTdGFraW5nVGFibGUiLCJpZCIsIm5hbWUiLCJwZXJjZW50SW50ZXJlc3QiLCJldGhlclN0YWtlZCIsImV0aGVySW50ZXJlc3QiLCJkYXlzUmVtYWluaW5nIiwicGFsZXR0ZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJwYWdlIiwic2V0UGFnZSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsInZhbHVlIiwic3giLCJ3aWR0aCIsIm92ZXJmbG93IiwibWF4SGVpZ2h0Iiwic3RpY2t5SGVhZGVyIiwiYXJpYS1sYWJsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImdyZXkiLCJjb2xvciIsIm1pbldpZHRoIiwicHJpbWFyeSIsImxpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/StakingTable.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableCell,TableContainer,TableHead,TableRow,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Paper,Table,TableCell,TableContainer,TableHead,TableRow,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst StakingTable = (param)=>{\n    let { id, name, percentInterest, etherStaked, etherInterest, daysRemaining } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChangePage = (event, newPage)=>{\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n        sx: {\n            width: \"100%\",\n            overflow: \"hidden\",\n            backgroundColor: \"transparent\",\n            border: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n            sx: {\n                maxHeight: 460\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                stickyHeader: true,\n                \"aria-lable\": \"sticky table\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                        sx: {\n                            display: \"flex\",\n                            justifyContent: \"space-between\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.primary.light,\n                                    backgroundColor: palette.grey[900],\n                                    width: \"25%\",\n                                    borderRadius: \"15px 0 0 15px\",\n                                    fontSize: \"18px\",\n                                    alignItems: \"center\"\n                                },\n                                children: \"Assets\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.primary.light,\n                                    backgroundColor: palette.grey[900],\n                                    width: \"25%\",\n                                    fontSize: \"18px\"\n                                },\n                                children: \"Percent Interest\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 79,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.primary.light,\n                                    backgroundColor: palette.grey[900],\n                                    width: \"25%\",\n                                    fontSize: \"18px\"\n                                },\n                                children: \"Staked\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.primary.light,\n                                    backgroundColor: palette.grey[900],\n                                    width: \"25%\",\n                                    fontSize: \"18px\"\n                                },\n                                children: \"Interest\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                sx: {\n                                    color: palette.primary.light,\n                                    backgroundColor: palette.grey[900],\n                                    width: \"25%\",\n                                    borderRadius: \"0 15px 15px 0\",\n                                    fontSize: \"18px\"\n                                },\n                                children: \"Days Remaining\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                lineNumber: 109,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingTable, \"1notDViDzAwY+mNQLHRwqDX6oAw=\", false, function() {\n    return [\n        _barrel_optimize_names_Paper_Table_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingTable);\nvar _c;\n$RefreshReg$(_c, \"StakingTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1N0YWtpbmdUYWJsZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFjVjtBQVl2QixNQUFNUSxlQUFlO1FBQUMsRUFDcEJDLEVBQUUsRUFDRkMsSUFBSSxFQUNKQyxlQUFlLEVBQ2ZDLFdBQVcsRUFDWEMsYUFBYSxFQUNiQyxhQUFhLEVBQ1A7O0lBQ04sTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR1IsOElBQVFBO0lBQzVCLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHakIsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDa0IsTUFBTUMsUUFBUSxHQUFHbkIsK0NBQVFBLENBQUM7SUFFakMsTUFBTW9CLG1CQUFtQixDQUFDQyxPQUFnQkM7UUFDeENILFFBQVFHO0lBQ1Y7SUFFQSxNQUFNQywwQkFBMEIsQ0FDOUJGO1FBRUFKLGVBQWUsQ0FBQ0ksTUFBTUcsTUFBTSxDQUFDQyxLQUFLO1FBQ2xDTixRQUFRO0lBQ1Y7SUFDQSxxQkFDRSw4REFBQ2IsdUlBQUtBO1FBQ0pvQixJQUFJO1lBQ0ZDLE9BQU87WUFDUEMsVUFBVTtZQUNWQyxpQkFBaUI7WUFDakJDLFFBQVE7UUFDVjtrQkFFQSw0RUFBQzNCLGdKQUFjQTtZQUFDdUIsSUFBSTtnQkFBRUssV0FBVztZQUFJO3NCQUNuQyw0RUFBQzlCLHVJQUFLQTtnQkFBQytCLFlBQVk7Z0JBQUNDLGNBQVc7MEJBQzdCLDRFQUFDN0IsMklBQVNBOzhCQUNSLDRFQUFDQywwSUFBUUE7d0JBQ1BxQixJQUFJOzRCQUNGUSxTQUFTOzRCQUNUQyxnQkFBZ0I7d0JBQ2xCOzswQ0FFQSw4REFBQ2pDLDJJQUFTQTtnQ0FDUndCLElBQUk7b0NBQ0ZVLE9BQU9yQixRQUFRc0IsT0FBTyxDQUFDQyxLQUFLO29DQUM1QlQsaUJBQWlCZCxRQUFRd0IsSUFBSSxDQUFDLElBQUk7b0NBQ2xDWixPQUFPO29DQUNQYSxjQUFjO29DQUNkQyxVQUFVO29DQUNWQyxZQUFZO2dDQUNkOzBDQUNEOzs7Ozs7MENBR0QsOERBQUN4QywySUFBU0E7Z0NBQ1J3QixJQUFJO29DQUNGVSxPQUFPckIsUUFBUXNCLE9BQU8sQ0FBQ0MsS0FBSztvQ0FDNUJULGlCQUFpQmQsUUFBUXdCLElBQUksQ0FBQyxJQUFJO29DQUNsQ1osT0FBTztvQ0FDUGMsVUFBVTtnQ0FDWjswQ0FDRDs7Ozs7OzBDQUdELDhEQUFDdkMsMklBQVNBO2dDQUNSd0IsSUFBSTtvQ0FDRlUsT0FBT3JCLFFBQVFzQixPQUFPLENBQUNDLEtBQUs7b0NBQzVCVCxpQkFBaUJkLFFBQVF3QixJQUFJLENBQUMsSUFBSTtvQ0FDbENaLE9BQU87b0NBQ1BjLFVBQVU7Z0NBQ1o7MENBQ0Q7Ozs7OzswQ0FHRCw4REFBQ3ZDLDJJQUFTQTtnQ0FDUndCLElBQUk7b0NBQ0ZVLE9BQU9yQixRQUFRc0IsT0FBTyxDQUFDQyxLQUFLO29DQUM1QlQsaUJBQWlCZCxRQUFRd0IsSUFBSSxDQUFDLElBQUk7b0NBQ2xDWixPQUFPO29DQUNQYyxVQUFVO2dDQUNaOzBDQUNEOzs7Ozs7MENBR0QsOERBQUN2QywySUFBU0E7Z0NBQ1J3QixJQUFJO29DQUNGVSxPQUFPckIsUUFBUXNCLE9BQU8sQ0FBQ0MsS0FBSztvQ0FDNUJULGlCQUFpQmQsUUFBUXdCLElBQUksQ0FBQyxJQUFJO29DQUNsQ1osT0FBTztvQ0FDUGEsY0FBYztvQ0FDZEMsVUFBVTtnQ0FDWjswQ0FDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTZjtHQW5HTWpDOztRQVFnQkQsMElBQVFBOzs7S0FSeEJDO0FBcUdOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU3Rha2luZ1RhYmxlLnRzeD9iOWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFR5cG9ncmFwaHksXG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVDb250YWluZXIsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFBhcGVyLFxuICBJY29uQnV0dG9uLFxuICB1c2VUaGVtZSxcbiAgVGFibGVQYWdpbmF0aW9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24sIEtleWJvYXJkQXJyb3dVcCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcGVyY2VudEludGVyZXN0OiBudW1iZXI7XG4gIGV0aGVyU3Rha2VkOiBudW1iZXI7XG4gIGV0aGVySW50ZXJlc3Q6IG51bWJlcjtcbiAgZGF5c1JlbWFpbmluZzogbnVtYmVyO1xufTtcblxuY29uc3QgU3Rha2luZ1RhYmxlID0gKHtcbiAgaWQsXG4gIG5hbWUsXG4gIHBlcmNlbnRJbnRlcmVzdCxcbiAgZXRoZXJTdGFrZWQsXG4gIGV0aGVySW50ZXJlc3QsXG4gIGRheXNSZW1haW5pbmcsXG59OiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHBhbGV0dGUgfSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gdXNlU3RhdGUoNSk7XG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDApO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQ6IHVua25vd24sIG5ld1BhZ2U6IG51bWJlcikgPT4ge1xuICAgIHNldFBhZ2UobmV3UGFnZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+XG4gICkgPT4ge1xuICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xuICAgIHNldFBhZ2UoMCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPFBhcGVyXG4gICAgICBzeD17e1xuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPFRhYmxlQ29udGFpbmVyIHN4PXt7IG1heEhlaWdodDogNDYwIH19PlxuICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFibGU9XCJzdGlja3kgdGFibGVcIj5cbiAgICAgICAgICA8VGFibGVIZWFkPlxuICAgICAgICAgICAgPFRhYmxlUm93XG4gICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMTVweCAwIDAgMTVweFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgQXNzZXRzXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFBlcmNlbnQgSW50ZXJlc3RcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgU3Rha2VkXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEludGVyZXN0XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMCAxNXB4IDE1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBEYXlzIFJlbWFpbmluZ1xuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgIDwvUGFwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFraW5nVGFibGU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUYWJsZSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsInVzZVRoZW1lIiwiU3Rha2luZ1RhYmxlIiwiaWQiLCJuYW1lIiwicGVyY2VudEludGVyZXN0IiwiZXRoZXJTdGFrZWQiLCJldGhlckludGVyZXN0IiwiZGF5c1JlbWFpbmluZyIsInBhbGV0dGUiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwicGFnZSIsInNldFBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN4Iiwid2lkdGgiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIm1heEhlaWdodCIsInN0aWNreUhlYWRlciIsImFyaWEtbGFibGUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInByaW1hcnkiLCJsaWdodCIsImdyZXkiLCJib3JkZXJSYWRpdXMiLCJmb250U2l6ZSIsImFsaWduSXRlbXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/StakingTable.tsx\n"));

/***/ })

});
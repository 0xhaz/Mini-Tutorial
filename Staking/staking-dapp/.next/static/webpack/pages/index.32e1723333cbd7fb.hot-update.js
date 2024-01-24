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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst StakingTable = (param)=>{\n    let { id, name, percentInterest, etherStaked, etherInterest, daysRemaining } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChangePage = (event, newPage)=>{\n        setPage(newPage);\n    };\n    const columns = [\n        {\n            id: \"assets\",\n            label: \"Assets\",\n            minWidth: 170\n        },\n        {\n            id: \"percentInterest\",\n            label: \"Percent Interest\",\n            minWidth: 100\n        },\n        {\n            id: \"staked\",\n            label: \"Staked\",\n            minWidth: 170,\n            align: \"right\",\n            format: (value)=>value.toLocaleString(\"en-US\")\n        },\n        {\n            id: \"interest\",\n            label: \"Interest\",\n            minWidth: 170,\n            align: \"right\",\n            format: (value)=>value.toLocaleString(\"en-US\")\n        },\n        {\n            id: \"daysRemaining\",\n            label: \"Days Remaining\",\n            minWidth: 170,\n            align: \"right\",\n            format: (value)=>value.toFixed(2)\n        }\n    ];\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n        sx: {\n            width: \"100%\",\n            overflow: \"hidden\",\n            backgroundColor: \"transparent\",\n            border: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n            sx: {\n                maxHeight: 460\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                stickyHeader: true,\n                \"aria-lable\": \"sticky table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            sx: {\n                                display: \"flex\",\n                                justifyItems: \"center\"\n                            },\n                            children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    align: column.align,\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.2rem\",\n                                        color: palette.primary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"18px\",\n                                        border: \"none\"\n                                    },\n                                    children: column.label\n                                }, column.id, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            sx: {\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: [\n                                        percentInterest,\n                                        \"%\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 143,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: etherStaked\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 158,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: etherInterest\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 173,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: daysRemaining\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 188,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                            lineNumber: 123,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 122,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                lineNumber: 93,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n            lineNumber: 92,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n        lineNumber: 84,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingTable, \"1notDViDzAwY+mNQLHRwqDX6oAw=\", false, function() {\n    return [\n        _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingTable);\nvar _c;\n$RefreshReg$(_c, \"StakingTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QmhCLE9BQU87d0NBQ1BpQixRQUFRO3dDQUNSQyxVQUFVO3dDQUNWZixRQUFRO29DQUNWOzt3Q0FFQzFCO3dDQUFnQjs7Ozs7Ozs4Q0FFbkIsOERBQUNULHFKQUFTQTtvQ0FDUitCLElBQUk7d0NBQ0ZRLFNBQVM7d0NBQ1RJLGVBQWU7d0NBQ2ZDLFlBQVk7d0NBQ1pDLFdBQVc7d0NBQ1hDLE9BQU9qQyxRQUFRc0MsU0FBUyxDQUFDSCxLQUFLO3dDQUM5QmhCLE9BQU87d0NBQ1BpQixRQUFRO3dDQUNSQyxVQUFVO3dDQUNWZixRQUFRO29DQUNWOzhDQUVDekI7Ozs7Ozs4Q0FFSCw4REFBQ1YscUpBQVNBO29DQUNSK0IsSUFBSTt3Q0FDRlEsU0FBUzt3Q0FDVEksZUFBZTt3Q0FDZkMsWUFBWTt3Q0FDWkMsV0FBVzt3Q0FDWEMsT0FBT2pDLFFBQVFzQyxTQUFTLENBQUNILEtBQUs7d0NBQzlCaEIsT0FBTzt3Q0FDUGlCLFFBQVE7d0NBQ1JDLFVBQVU7d0NBQ1ZmLFFBQVE7b0NBQ1Y7OENBRUN4Qjs7Ozs7OzhDQUVILDhEQUFDWCxxSkFBU0E7b0NBQ1IrQixJQUFJO3dDQUNGUSxTQUFTO3dDQUNUSSxlQUFlO3dDQUNmQyxZQUFZO3dDQUNaQyxXQUFXO3dDQUNYQyxPQUFPakMsUUFBUXNDLFNBQVMsQ0FBQ0gsS0FBSzt3Q0FDOUJoQixPQUFPO3dDQUNQaUIsUUFBUTt3Q0FDUkMsVUFBVTt3Q0FDVmYsUUFBUTtvQ0FDVjs4Q0FFQ3ZCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakI7R0E5S01OOztRQVFnQkQsb0pBQVFBOzs7S0FSeEJDO0FBZ0xOLCtEQUFlQSxZQUFZQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvU3Rha2luZ1RhYmxlLnRzeD9iOWViIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge1xuICBCb3gsXG4gIFR5cG9ncmFwaHksXG4gIFRhYmxlLFxuICBUYWJsZUJvZHksXG4gIFRhYmxlQ2VsbCxcbiAgVGFibGVDb250YWluZXIsXG4gIFRhYmxlSGVhZCxcbiAgVGFibGVSb3csXG4gIFBhcGVyLFxuICBJY29uQnV0dG9uLFxuICB1c2VUaGVtZSxcbiAgVGFibGVQYWdpbmF0aW9uLFxufSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xuaW1wb3J0IHsgS2V5Ym9hcmRBcnJvd0Rvd24sIEtleWJvYXJkQXJyb3dVcCB9IGZyb20gXCJAbXVpL2ljb25zLW1hdGVyaWFsXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcGVyY2VudEludGVyZXN0OiBudW1iZXI7XG4gIGV0aGVyU3Rha2VkOiBudW1iZXI7XG4gIGV0aGVySW50ZXJlc3Q6IG51bWJlcjtcbiAgZGF5c1JlbWFpbmluZzogbnVtYmVyO1xufTtcblxuaW50ZXJmYWNlIENvbHVtbiB7XG4gIGlkOiBcImFzc2V0c1wiIHwgXCJwZXJjZW50SW50ZXJlc3RcIiB8IFwic3Rha2VkXCIgfCBcImludGVyZXN0XCIgfCBcImRheXNSZW1haW5pbmdcIjtcbiAgbGFiZWw6IHN0cmluZztcbiAgbWluV2lkdGg/OiBudW1iZXI7XG4gIGFsaWduPzogXCJyaWdodFwiO1xuICBmb3JtYXQ/OiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xufVxuXG5jb25zdCBTdGFraW5nVGFibGUgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgcGVyY2VudEludGVyZXN0LFxuICBldGhlclN0YWtlZCxcbiAgZXRoZXJJbnRlcmVzdCxcbiAgZGF5c1JlbWFpbmluZyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFsZXR0ZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShuZXdQYWdlKTtcbiAgfTtcblxuICBjb25zdCBjb2x1bW5zOiByZWFkb25seSBDb2x1bW5bXSA9IFtcbiAgICB7IGlkOiBcImFzc2V0c1wiLCBsYWJlbDogXCJBc3NldHNcIiwgbWluV2lkdGg6IDE3MCB9LFxuICAgIHsgaWQ6IFwicGVyY2VudEludGVyZXN0XCIsIGxhYmVsOiBcIlBlcmNlbnQgSW50ZXJlc3RcIiwgbWluV2lkdGg6IDEwMCB9LFxuICAgIHtcbiAgICAgIGlkOiBcInN0YWtlZFwiLFxuICAgICAgbGFiZWw6IFwiU3Rha2VkXCIsXG4gICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgIGZvcm1hdDogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiksXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogXCJpbnRlcmVzdFwiLFxuICAgICAgbGFiZWw6IFwiSW50ZXJlc3RcIixcbiAgICAgIG1pbldpZHRoOiAxNzAsXG4gICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgZm9ybWF0OiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImRheXNSZW1haW5pbmdcIixcbiAgICAgIGxhYmVsOiBcIkRheXMgUmVtYWluaW5nXCIsXG4gICAgICBtaW5XaWR0aDogMTcwLFxuICAgICAgYWxpZ246IFwicmlnaHRcIixcbiAgICAgIGZvcm1hdDogKHZhbHVlOiBudW1iZXIpID0+IHZhbHVlLnRvRml4ZWQoMiksXG4gICAgfSxcbiAgXTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZSgwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXJcbiAgICAgIHN4PXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGFibGVDb250YWluZXIgc3g9e3sgbWF4SGVpZ2h0OiA0NjAgfX0+XG4gICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJsZT1cInN0aWNreSB0YWJsZVwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5SXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmlkfVxuICAgICAgICAgICAgICAgICAgYWxpZ249e2NvbHVtbi5hbGlnbn1cbiAgICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC4ycmVtXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BlcmNlbnRJbnRlcmVzdH0lXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtldGhlclN0YWtlZH1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2V0aGVySW50ZXJlc3R9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtkYXlzUmVtYWluaW5nfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUJvZHk+XG4gICAgICAgIDwvVGFibGU+XG4gICAgICA8L1RhYmxlQ29udGFpbmVyPlxuICAgIDwvUGFwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFraW5nVGFibGU7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJUYWJsZSIsIlRhYmxlQm9keSIsIlRhYmxlQ2VsbCIsIlRhYmxlQ29udGFpbmVyIiwiVGFibGVIZWFkIiwiVGFibGVSb3ciLCJQYXBlciIsInVzZVRoZW1lIiwiU3Rha2luZ1RhYmxlIiwiaWQiLCJuYW1lIiwicGVyY2VudEludGVyZXN0IiwiZXRoZXJTdGFrZWQiLCJldGhlckludGVyZXN0IiwiZGF5c1JlbWFpbmluZyIsInBhbGV0dGUiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwicGFnZSIsInNldFBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiY29sdW1ucyIsImxhYmVsIiwibWluV2lkdGgiLCJhbGlnbiIsImZvcm1hdCIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJ0b0ZpeGVkIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJzeCIsIndpZHRoIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJtYXhIZWlnaHQiLCJzdGlja3lIZWFkZXIiLCJhcmlhLWxhYmxlIiwiZGlzcGxheSIsImp1c3RpZnlJdGVtcyIsIm1hcCIsImNvbHVtbiIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwibWFyZ2luVG9wIiwiY29sb3IiLCJwcmltYXJ5IiwibGlnaHQiLCJoZWlnaHQiLCJmb250U2l6ZSIsInNlY29uZGFyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/StakingTable.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst StakingTable = (param)=>{\n    let { id, name, percentInterest, etherStaked, etherInterest, daysRemaining } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChangePage = (event, newPage)=>{\n        setPage(newPage);\n    };\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n        sx: {\n            width: \"100%\",\n            overflow: \"hidden\",\n            backgroundColor: \"transparent\",\n            border: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n            sx: {\n                maxHeight: 460\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                stickyHeader: true,\n                \"aria-lable\": \"sticky table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            sx: {\n                                display: \"flex\",\n                                justifyItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        borderRadius: \"15px 0 0 15px\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Assets\"\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Percent Interest\"\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Staked\"\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Interest\"\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        borderRadius: \"0 15px 15px 0\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: \"Days Remaining\"\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 108,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            sx: {\n                                display: \"flex\",\n                                justifyItems: \"center\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        marginTop: \"0.5rem\",\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[700],\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 128,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        marginTop: \"0.5rem\",\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[700],\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: [\n                                        percentInterest,\n                                        \"%\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 141,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: etherStaked\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 154,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: etherInterest\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 164,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        color: palette.primary.light,\n                                        backgroundColor: palette.grey[900],\n                                        width: \"25%\",\n                                        borderRadius: \"0 15px 15px 0\",\n                                        fontSize: \"18px\"\n                                    },\n                                    children: daysRemaining\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 174,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                            lineNumber: 122,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingTable, \"1notDViDzAwY+mNQLHRwqDX6oAw=\", false, function() {\n    return [\n        _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingTable);\nvar _c;\n$RefreshReg$(_c, \"StakingTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNSLHFKQUFTQTtvQ0FDUndCLElBQUk7d0NBQ0ZnQixXQUFXO3dDQUNYTixPQUFPckIsUUFBUXNCLE9BQU8sQ0FBQ0MsS0FBSzt3Q0FDNUJULGlCQUFpQmQsUUFBUXdCLElBQUksQ0FBQyxJQUFJO3dDQUNsQ1osT0FBTzt3Q0FDUGdCLFFBQVE7d0NBQ1JGLFVBQVU7d0NBQ1ZYLFFBQVE7b0NBQ1Y7O3dDQUVDbkI7d0NBQWdCOzs7Ozs7OzhDQUVuQiw4REFBQ1QscUpBQVNBO29DQUNSd0IsSUFBSTt3Q0FDRlUsT0FBT3JCLFFBQVFzQixPQUFPLENBQUNDLEtBQUs7d0NBQzVCVCxpQkFBaUJkLFFBQVF3QixJQUFJLENBQUMsSUFBSTt3Q0FDbENaLE9BQU87d0NBQ1BjLFVBQVU7b0NBQ1o7OENBRUM3Qjs7Ozs7OzhDQUVILDhEQUFDVixxSkFBU0E7b0NBQ1J3QixJQUFJO3dDQUNGVSxPQUFPckIsUUFBUXNCLE9BQU8sQ0FBQ0MsS0FBSzt3Q0FDNUJULGlCQUFpQmQsUUFBUXdCLElBQUksQ0FBQyxJQUFJO3dDQUNsQ1osT0FBTzt3Q0FDUGMsVUFBVTtvQ0FDWjs4Q0FFQzVCOzs7Ozs7OENBRUgsOERBQUNYLHFKQUFTQTtvQ0FDUndCLElBQUk7d0NBQ0ZVLE9BQU9yQixRQUFRc0IsT0FBTyxDQUFDQyxLQUFLO3dDQUM1QlQsaUJBQWlCZCxRQUFRd0IsSUFBSSxDQUFDLElBQUk7d0NBQ2xDWixPQUFPO3dDQUNQYSxjQUFjO3dDQUNkQyxVQUFVO29DQUNaOzhDQUVDM0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFqQjtHQXBLTU47O1FBUWdCRCxvSkFBUUE7OztLQVJ4QkM7QUFzS04sK0RBQWVBLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TdGFraW5nVGFibGUudHN4P2I5ZWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7XG4gIEJveCxcbiAgVHlwb2dyYXBoeSxcbiAgVGFibGUsXG4gIFRhYmxlQm9keSxcbiAgVGFibGVDZWxsLFxuICBUYWJsZUNvbnRhaW5lcixcbiAgVGFibGVIZWFkLFxuICBUYWJsZVJvdyxcbiAgUGFwZXIsXG4gIEljb25CdXR0b24sXG4gIHVzZVRoZW1lLFxuICBUYWJsZVBhZ2luYXRpb24sXG59IGZyb20gXCJAbXVpL21hdGVyaWFsXCI7XG5pbXBvcnQgeyBLZXlib2FyZEFycm93RG93biwgS2V5Ym9hcmRBcnJvd1VwIH0gZnJvbSBcIkBtdWkvaWNvbnMtbWF0ZXJpYWxcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwZXJjZW50SW50ZXJlc3Q6IG51bWJlcjtcbiAgZXRoZXJTdGFrZWQ6IG51bWJlcjtcbiAgZXRoZXJJbnRlcmVzdDogbnVtYmVyO1xuICBkYXlzUmVtYWluaW5nOiBudW1iZXI7XG59O1xuXG5jb25zdCBTdGFraW5nVGFibGUgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgcGVyY2VudEludGVyZXN0LFxuICBldGhlclN0YWtlZCxcbiAgZXRoZXJJbnRlcmVzdCxcbiAgZGF5c1JlbWFpbmluZyxcbn06IFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcGFsZXR0ZSB9ID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSB1c2VTdGF0ZSg1KTtcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudDogdW5rbm93biwgbmV3UGFnZTogbnVtYmVyKSA9PiB7XG4gICAgc2V0UGFnZShuZXdQYWdlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IChcbiAgICBldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD5cbiAgKSA9PiB7XG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgc2V0UGFnZSgwKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8UGFwZXJcbiAgICAgIHN4PXt7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8VGFibGVDb250YWluZXIgc3g9e3sgbWF4SGVpZ2h0OiA0NjAgfX0+XG4gICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJsZT1cInN0aWNreSB0YWJsZVwiPlxuICAgICAgICAgIDxUYWJsZUhlYWQ+XG4gICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5SXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCIxNXB4IDAgMCAxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEFzc2V0c1xuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZXlbOTAwXSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQZXJjZW50IEludGVyZXN0XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFN0YWtlZFxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZXlbOTAwXSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBJbnRlcmVzdFxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZXlbOTAwXSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjAgMTVweCAxNXB4IDBcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGF5cyBSZW1haW5pbmdcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVIZWFkPlxuICAgICAgICAgIDxUYWJsZUJvZHk+XG4gICAgICAgICAgICA8VGFibGVSb3dcbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBqdXN0aWZ5SXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmV5WzcwMF0sXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5wcmltYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBwYWxldHRlLmdyZXlbNzAwXSxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge3BlcmNlbnRJbnRlcmVzdH0lXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtldGhlclN0YWtlZH1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcGFsZXR0ZS5ncmV5WzkwMF0sXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE4cHhcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2V0aGVySW50ZXJlc3R9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnByaW1hcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHBhbGV0dGUuZ3JleVs5MDBdLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiMCAxNXB4IDE1cHggMFwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF5c1JlbWFpbmluZ31cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICA8L1RhYmxlUm93PlxuICAgICAgICAgIDwvVGFibGVCb2R5PlxuICAgICAgICA8L1RhYmxlPlxuICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cbiAgICA8L1BhcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU3Rha2luZ1RhYmxlO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiVGFibGUiLCJUYWJsZUJvZHkiLCJUYWJsZUNlbGwiLCJUYWJsZUNvbnRhaW5lciIsIlRhYmxlSGVhZCIsIlRhYmxlUm93IiwiUGFwZXIiLCJ1c2VUaGVtZSIsIlN0YWtpbmdUYWJsZSIsImlkIiwibmFtZSIsInBlcmNlbnRJbnRlcmVzdCIsImV0aGVyU3Rha2VkIiwiZXRoZXJJbnRlcmVzdCIsImRheXNSZW1haW5pbmciLCJwYWxldHRlIiwicm93c1BlclBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsInBhZ2UiLCJzZXRQYWdlIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwidmFsdWUiLCJzeCIsIndpZHRoIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJtYXhIZWlnaHQiLCJzdGlja3lIZWFkZXIiLCJhcmlhLWxhYmxlIiwiZGlzcGxheSIsImp1c3RpZnlJdGVtcyIsImNvbG9yIiwicHJpbWFyeSIsImxpZ2h0IiwiZ3JleSIsImJvcmRlclJhZGl1cyIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/StakingTable.tsx\n"));

/***/ })

});
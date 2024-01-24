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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! __barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,useTheme!=!@mui/material */ \"__barrel_optimize__?names=Paper,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,useTheme!=!./node_modules/@mui/material/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction createData(assets, percentInterest, staked, interest, daysRemaining) {\n    return {\n        assets,\n        percentInterest,\n        staked,\n        interest,\n        daysRemaining\n    };\n}\nconst StakingTable = (param)=>{\n    let { id, name, percentInterest, etherStaked, etherInterest, daysRemaining } = param;\n    _s();\n    const { palette } = (0,_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme)();\n    const [rowsPerPage, setRowsPerPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5);\n    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleChangePage = (event, newPage)=>{\n        setPage(newPage);\n    };\n    const columns = [\n        {\n            id: \"assets\",\n            label: \"Assets\",\n            minWidth: 170\n        },\n        {\n            id: \"percentInterest\",\n            label: \"Percent Interest\",\n            minWidth: 100\n        },\n        {\n            id: \"staked\",\n            label: \"Staked\",\n            minWidth: 170,\n            align: \"right\",\n            format: (value)=>value.toLocaleString(\"en-US\")\n        },\n        {\n            id: \"interest\",\n            label: \"Interest\",\n            minWidth: 170,\n            align: \"right\",\n            format: (value)=>value.toLocaleString(\"en-US\")\n        },\n        {\n            id: \"daysRemaining\",\n            label: \"Days Remaining\",\n            minWidth: 170,\n            align: \"right\",\n            format: (value)=>value.toFixed(2)\n        }\n    ];\n    const handleChangeRowsPerPage = (event)=>{\n        setRowsPerPage(+event.target.value);\n        setPage(0);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Paper, {\n        sx: {\n            width: \"100%\",\n            overflow: \"hidden\",\n            backgroundColor: \"transparent\",\n            border: \"none\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableContainer, {\n            sx: {\n                maxHeight: 460\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.Table, {\n                stickyHeader: true,\n                \"aria-lable\": \"sticky table\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableHead, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            sx: {\n                                display: \"flex\",\n                                justifyItems: \"center\"\n                            },\n                            children: columns.map((column)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    align: column.align,\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.2rem\",\n                                        color: palette.primary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"18px\",\n                                        border: \"none\"\n                                    },\n                                    children: column.label\n                                }, column.id, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 120,\n                                    columnNumber: 17\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 112,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableBody, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableRow, {\n                            sx: {\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: name\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: [\n                                        percentInterest,\n                                        \"%\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 161,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: etherStaked\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 176,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: etherInterest\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 191,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.TableCell, {\n                                    sx: {\n                                        display: \"flex\",\n                                        flexDirection: \"column\",\n                                        alignItems: \"center\",\n                                        marginTop: \"0.5rem\",\n                                        color: palette.secondary.light,\n                                        width: \"25%\",\n                                        height: \"50%\",\n                                        fontSize: \"14px\",\n                                        border: \"none\"\n                                    },\n                                    children: daysRemaining\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                                    lineNumber: 206,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                            lineNumber: 141,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                        lineNumber: 140,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n                lineNumber: 111,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n            lineNumber: 110,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Volumes/extreme/Projects/Solidity/EatTheBlocks/bootcamp/Staking/staking-dapp/pages/components/StakingTable.tsx\",\n        lineNumber: 102,\n        columnNumber: 5\n    }, undefined);\n};\n_s(StakingTable, \"1notDViDzAwY+mNQLHRwqDX6oAw=\", false, function() {\n    return [\n        _barrel_optimize_names_Paper_Table_TableBody_TableCell_TableContainer_TableHead_TableRow_useTheme_mui_material__WEBPACK_IMPORTED_MODULE_2__.useTheme\n    ];\n});\n_c = StakingTable;\n/* harmony default export */ __webpack_exports__[\"default\"] = (StakingTable);\nvar _c;\n$RefreshReg$(_c, \"StakingTable\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWtpbmdUYWJsZS50c3g/YjllYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgQm94LFxuICBUeXBvZ3JhcGh5LFxuICBUYWJsZSxcbiAgVGFibGVCb2R5LFxuICBUYWJsZUNlbGwsXG4gIFRhYmxlQ29udGFpbmVyLFxuICBUYWJsZUhlYWQsXG4gIFRhYmxlUm93LFxuICBQYXBlcixcbiAgSWNvbkJ1dHRvbixcbiAgdXNlVGhlbWUsXG4gIFRhYmxlUGFnaW5hdGlvbixcbn0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcbmltcG9ydCB7IEtleWJvYXJkQXJyb3dEb3duLCBLZXlib2FyZEFycm93VXAgfSBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBpZDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHBlcmNlbnRJbnRlcmVzdDogbnVtYmVyO1xuICBldGhlclN0YWtlZDogbnVtYmVyO1xuICBldGhlckludGVyZXN0OiBudW1iZXI7XG4gIGRheXNSZW1haW5pbmc6IG51bWJlcjtcbn07XG5cbmludGVyZmFjZSBDb2x1bW4ge1xuICBpZDogXCJhc3NldHNcIiB8IFwicGVyY2VudEludGVyZXN0XCIgfCBcInN0YWtlZFwiIHwgXCJpbnRlcmVzdFwiIHwgXCJkYXlzUmVtYWluaW5nXCI7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIG1pbldpZHRoPzogbnVtYmVyO1xuICBhbGlnbj86IFwicmlnaHRcIjtcbiAgZm9ybWF0PzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIERhdGEge1xuICBhc3NldHM6IHN0cmluZztcbiAgcGVyY2VudEludGVyZXN0OiBudW1iZXI7XG4gIHN0YWtlZDogbnVtYmVyO1xuICBpbnRlcmVzdDogbnVtYmVyO1xuICBkYXlzUmVtYWluaW5nOiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURhdGEoXG4gIGFzc2V0czogc3RyaW5nLFxuICBwZXJjZW50SW50ZXJlc3Q6IG51bWJlcixcbiAgc3Rha2VkOiBudW1iZXIsXG4gIGludGVyZXN0OiBudW1iZXIsXG4gIGRheXNSZW1haW5pbmc6IG51bWJlclxuKTogRGF0YSB7XG4gIHJldHVybiB7IGFzc2V0cywgcGVyY2VudEludGVyZXN0LCBzdGFrZWQsIGludGVyZXN0LCBkYXlzUmVtYWluaW5nIH07XG59XG5cbmNvbnN0IFN0YWtpbmdUYWJsZSA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBwZXJjZW50SW50ZXJlc3QsXG4gIGV0aGVyU3Rha2VkLFxuICBldGhlckludGVyZXN0LFxuICBkYXlzUmVtYWluaW5nLFxufTogUHJvcHMpID0+IHtcbiAgY29uc3QgeyBwYWxldHRlIH0gPSB1c2VUaGVtZSgpO1xuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IHVzZVN0YXRlKDUpO1xuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50OiB1bmtub3duLCBuZXdQYWdlOiBudW1iZXIpID0+IHtcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGNvbHVtbnM6IHJlYWRvbmx5IENvbHVtbltdID0gW1xuICAgIHsgaWQ6IFwiYXNzZXRzXCIsIGxhYmVsOiBcIkFzc2V0c1wiLCBtaW5XaWR0aDogMTcwIH0sXG4gICAgeyBpZDogXCJwZXJjZW50SW50ZXJlc3RcIiwgbGFiZWw6IFwiUGVyY2VudCBJbnRlcmVzdFwiLCBtaW5XaWR0aDogMTAwIH0sXG4gICAge1xuICAgICAgaWQ6IFwic3Rha2VkXCIsXG4gICAgICBsYWJlbDogXCJTdGFrZWRcIixcbiAgICAgIG1pbldpZHRoOiAxNzAsXG4gICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgZm9ybWF0OiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiBcImludGVyZXN0XCIsXG4gICAgICBsYWJlbDogXCJJbnRlcmVzdFwiLFxuICAgICAgbWluV2lkdGg6IDE3MCxcbiAgICAgIGFsaWduOiBcInJpZ2h0XCIsXG4gICAgICBmb3JtYXQ6ICh2YWx1ZTogbnVtYmVyKSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IFwiZGF5c1JlbWFpbmluZ1wiLFxuICAgICAgbGFiZWw6IFwiRGF5cyBSZW1haW5pbmdcIixcbiAgICAgIG1pbldpZHRoOiAxNzAsXG4gICAgICBhbGlnbjogXCJyaWdodFwiLFxuICAgICAgZm9ybWF0OiAodmFsdWU6IG51bWJlcikgPT4gdmFsdWUudG9GaXhlZCgyKSxcbiAgICB9LFxuICBdO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gKFxuICAgIGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PlxuICApID0+IHtcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICBzZXRQYWdlKDApO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxQYXBlclxuICAgICAgc3g9e3tcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxUYWJsZUNvbnRhaW5lciBzeD17eyBtYXhIZWlnaHQ6IDQ2MCB9fT5cbiAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmxlPVwic3RpY2t5IHRhYmxlXCI+XG4gICAgICAgICAgPFRhYmxlSGVhZD5cbiAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlJdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XG4gICAgICAgICAgICAgICAgICBhbGlnbj17Y29sdW1uLmFsaWdufVxuICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjJyZW1cIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUucHJpbWFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMThweFwiLFxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvVGFibGVSb3c+XG4gICAgICAgICAgPC9UYWJsZUhlYWQ+XG4gICAgICAgICAgPFRhYmxlQm9keT5cbiAgICAgICAgICAgIDxUYWJsZVJvd1xuICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8VGFibGVDZWxsXG4gICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMC41cmVtXCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogcGFsZXR0ZS5zZWNvbmRhcnkubGlnaHQsXG4gICAgICAgICAgICAgICAgICB3aWR0aDogXCIyNSVcIixcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogXCI1MCVcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7cGVyY2VudEludGVyZXN0fSVcbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2V0aGVyU3Rha2VkfVxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxuICAgICAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjAuNXJlbVwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IHBhbGV0dGUuc2Vjb25kYXJ5LmxpZ2h0LFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMjUlXCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNTAlXCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZXRoZXJJbnRlcmVzdH1cbiAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XG4gICAgICAgICAgICAgIDxUYWJsZUNlbGxcbiAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIwLjVyZW1cIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBwYWxldHRlLnNlY29uZGFyeS5saWdodCxcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjI1JVwiLFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjUwJVwiLFxuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2RheXNSZW1haW5pbmd9XG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cbiAgICAgICAgICA8L1RhYmxlQm9keT5cbiAgICAgICAgPC9UYWJsZT5cbiAgICAgIDwvVGFibGVDb250YWluZXI+XG4gICAgPC9QYXBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWtpbmdUYWJsZTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlRhYmxlIiwiVGFibGVCb2R5IiwiVGFibGVDZWxsIiwiVGFibGVDb250YWluZXIiLCJUYWJsZUhlYWQiLCJUYWJsZVJvdyIsIlBhcGVyIiwidXNlVGhlbWUiLCJjcmVhdGVEYXRhIiwiYXNzZXRzIiwicGVyY2VudEludGVyZXN0Iiwic3Rha2VkIiwiaW50ZXJlc3QiLCJkYXlzUmVtYWluaW5nIiwiU3Rha2luZ1RhYmxlIiwiaWQiLCJuYW1lIiwiZXRoZXJTdGFrZWQiLCJldGhlckludGVyZXN0IiwicGFsZXR0ZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJwYWdlIiwic2V0UGFnZSIsImhhbmRsZUNoYW5nZVBhZ2UiLCJldmVudCIsIm5ld1BhZ2UiLCJjb2x1bW5zIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsInRvRml4ZWQiLCJoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSIsInRhcmdldCIsInN4Iiwid2lkdGgiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsIm1heEhlaWdodCIsInN0aWNreUhlYWRlciIsImFyaWEtbGFibGUiLCJkaXNwbGF5IiwianVzdGlmeUl0ZW1zIiwibWFwIiwiY29sdW1uIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJtYXJnaW5Ub3AiLCJjb2xvciIsInByaW1hcnkiLCJsaWdodCIsImhlaWdodCIsImZvbnRTaXplIiwic2Vjb25kYXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/StakingTable.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/feature-product/FeatureProduct.tsx":
/*!*******************************************************!*\
  !*** ./components/feature-product/FeatureProduct.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _barrel_optimize_names_FaCirclePlus_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=FaCirclePlus!=!react-icons/fa6 */ \"(app-pages-browser)/./node_modules/react-icons/fa6/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst FeatureProduct = (param)=>{\n    let { id, name, price, img } = param;\n    const parentVariants = {\n        hv: {\n            y: 0\n        }\n    };\n    const imageVariants = {\n        hv: {\n            y: -20\n        }\n    };\n    const bgVariants = {\n        hv: {\n            height: \"70%\",\n            transition: {\n                duration: 0.3\n            }\n        }\n    };\n    const iconVariant = {\n        hv: {\n            display: \"flex\",\n            bottom: -17,\n            opacity: 1,\n            transition: {\n                duration: 0.3\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"relative flex w-full flex-col items-center justify-center gap-y-2 pb-8\",\n        variants: parentVariants,\n        whileHover: \"hv\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"flex h-[300px] items-center\",\n                variants: imageVariants,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    src: img,\n                    alt: name,\n                    className: \"max-w-[300px] md:max-w-[230px]\"\n                }, void 0, false, {\n                    fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold\",\n                children: \"Stylized Chair\"\n            }, void 0, false, {\n                fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"font-extrabold\",\n                children: [\n                    \"$\",\n                    price,\n                    \".00\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute bottom-4 right-1/2 hidden translate-x-1/2 opacity-0\",\n                variants: iconVariant,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FaCirclePlus_react_icons_fa6__WEBPACK_IMPORTED_MODULE_3__.FaCirclePlus, {\n                    className: \"text-main-blue\",\n                    size: 34\n                }, void 0, false, {\n                    fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                lineNumber: 55,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"absolute bottom-0 z-[-2] w-full origin-bottom rounded-xl bg-main-blue opacity-10\",\n                variants: bgVariants\n            }, void 0, false, {\n                fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n                lineNumber: 62,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jlmandal/Web Development/Projects/modesco-nextjs/components/feature-product/FeatureProduct.tsx\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, undefined);\n};\n_c = FeatureProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeatureProduct);\nvar _c;\n$RefreshReg$(_c, \"FeatureProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvZmVhdHVyZS1wcm9kdWN0L0ZlYXR1cmVQcm9kdWN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRStCO0FBSVE7QUFFUTtBQUUvQyxNQUFNRyxpQkFBaUI7UUFBQyxFQUFFQyxFQUFFLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxHQUFHLEVBQXdCO0lBQ2xFLE1BQU1DLGlCQUFpQjtRQUNuQkMsSUFBSTtZQUFFQyxHQUFHO1FBQUU7SUFDZjtJQUNBLE1BQU1DLGdCQUFnQjtRQUNsQkYsSUFBSTtZQUFFQyxHQUFHLENBQUM7UUFBRztJQUNqQjtJQUNBLE1BQU1FLGFBQWE7UUFDZkgsSUFBSTtZQUNBSSxRQUFRO1lBQ1JDLFlBQVk7Z0JBQ1JDLFVBQVU7WUFDZDtRQUNKO0lBQ0o7SUFDQSxNQUFNQyxjQUFjO1FBQ2hCUCxJQUFJO1lBQ0FRLFNBQVM7WUFDVEMsUUFBUSxDQUFDO1lBQ1RDLFNBQVM7WUFDVEwsWUFBWTtnQkFDUkMsVUFBVTtZQUNkO1FBQ0o7SUFDSjtJQUVBLHFCQUNJLDhEQUFDZCxpREFBTUEsQ0FBQ21CLEdBQUc7UUFDUEMsV0FBVTtRQUNWQyxVQUFVZDtRQUNWZSxZQUFXOzswQkFFWCw4REFBQ3RCLGlEQUFNQSxDQUFDbUIsR0FBRztnQkFDUEMsV0FBVTtnQkFDVkMsVUFBVVg7MEJBRVYsNEVBQUNYLG1EQUFLQTtvQkFDRndCLEtBQUtqQjtvQkFDTGtCLEtBQUtwQjtvQkFDTGdCLFdBQVU7Ozs7Ozs7Ozs7OzBCQUdsQiw4REFBQ0s7Z0JBQUdMLFdBQVU7MEJBQVk7Ozs7OzswQkFDMUIsOERBQUNNO2dCQUFFTixXQUFVOztvQkFBaUI7b0JBQUVmO29CQUFNOzs7Ozs7OzBCQUN0Qyw4REFBQ0wsaURBQU1BLENBQUNtQixHQUFHO2dCQUNQQyxXQUFVO2dCQUNWQyxVQUFVTjswQkFFViw0RUFBQ2QsNkZBQVlBO29CQUFDbUIsV0FBVTtvQkFBaUJPLE1BQU07Ozs7Ozs7Ozs7OzBCQUduRCw4REFBQzNCLGlEQUFNQSxDQUFDbUIsR0FBRztnQkFDUEMsV0FBVTtnQkFDVkMsVUFBVVY7Ozs7Ozs7Ozs7OztBQUkxQjtLQXpETVQ7QUEyRE4sK0RBQWVBLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9mZWF0dXJlLXByb2R1Y3QvRmVhdHVyZVByb2R1Y3QudHN4PzVkN2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuXG5pbXBvcnQgeyBGZWF0dXJlUHJvZHVjdHNUeXBlcyB9IGZyb20gXCJAL3R5cGVzXCI7XG5cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmltcG9ydCB7IEZhQ2lyY2xlUGx1cyB9IGZyb20gXCJyZWFjdC1pY29ucy9mYTZcIjtcblxuY29uc3QgRmVhdHVyZVByb2R1Y3QgPSAoeyBpZCwgbmFtZSwgcHJpY2UsIGltZyB9OiBGZWF0dXJlUHJvZHVjdHNUeXBlcykgPT4ge1xuICAgIGNvbnN0IHBhcmVudFZhcmlhbnRzID0ge1xuICAgICAgICBodjogeyB5OiAwIH0sXG4gICAgfTtcbiAgICBjb25zdCBpbWFnZVZhcmlhbnRzID0ge1xuICAgICAgICBodjogeyB5OiAtMjAgfSxcbiAgICB9O1xuICAgIGNvbnN0IGJnVmFyaWFudHMgPSB7XG4gICAgICAgIGh2OiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiNzAlXCIsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCBpY29uVmFyaWFudCA9IHtcbiAgICAgICAgaHY6IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYm90dG9tOiAtMTcsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCB3LWZ1bGwgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC15LTIgcGItOFwiXG4gICAgICAgICAgICB2YXJpYW50cz17cGFyZW50VmFyaWFudHN9XG4gICAgICAgICAgICB3aGlsZUhvdmVyPVwiaHZcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaC1bMzAwcHhdIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgdmFyaWFudHM9e2ltYWdlVmFyaWFudHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9e25hbWV9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1heC13LVszMDBweF0gbWQ6bWF4LXctWzIzMHB4XVwiXG4gICAgICAgICAgICAgICAgPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+U3R5bGl6ZWQgQ2hhaXI8L2gxPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1leHRyYWJvbGRcIj4ke3ByaWNlfS4wMDwvcD5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTQgcmlnaHQtMS8yIGhpZGRlbiB0cmFuc2xhdGUteC0xLzIgb3BhY2l0eS0wXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17aWNvblZhcmlhbnR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZhQ2lyY2xlUGx1cyBjbGFzc05hbWU9XCJ0ZXh0LW1haW4tYmx1ZVwiIHNpemU9ezM0fSAvPlxuICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuXG4gICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHotWy0yXSB3LWZ1bGwgb3JpZ2luLWJvdHRvbSByb3VuZGVkLXhsIGJnLW1haW4tYmx1ZSBvcGFjaXR5LTEwXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50cz17YmdWYXJpYW50c31cbiAgICAgICAgICAgID48L21vdGlvbi5kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZVByb2R1Y3Q7XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJtb3Rpb24iLCJGYUNpcmNsZVBsdXMiLCJGZWF0dXJlUHJvZHVjdCIsImlkIiwibmFtZSIsInByaWNlIiwiaW1nIiwicGFyZW50VmFyaWFudHMiLCJodiIsInkiLCJpbWFnZVZhcmlhbnRzIiwiYmdWYXJpYW50cyIsImhlaWdodCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImljb25WYXJpYW50IiwiZGlzcGxheSIsImJvdHRvbSIsIm9wYWNpdHkiLCJkaXYiLCJjbGFzc05hbWUiLCJ2YXJpYW50cyIsIndoaWxlSG92ZXIiLCJzcmMiLCJhbHQiLCJoMSIsInAiLCJzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/feature-product/FeatureProduct.tsx\n"));

/***/ })

});
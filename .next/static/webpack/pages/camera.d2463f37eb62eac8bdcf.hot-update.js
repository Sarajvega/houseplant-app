/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/camera",{

/***/ "./components/WebcamComponent.js":
/*!***************************************!*\
  !*** ./components/WebcamComponent.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-webcam */ \"./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/components/WebcamComponent.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia\n// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.\n// I’d probably add an onCapture prop to the WebcamComponent that gets passed the imageSrc whenever it changes thereby “passing the source ‘up’” as you said\n\nvar WebcamComponent = function WebcamComponent(onCapture) {\n  _s();\n\n  var webcamRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),\n      _React$useState2 = (0,_Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      imgSrc = _React$useState2[0],\n      setImgSrc = _React$useState2[1];\n\n  var capture = react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(function () {\n    var imageSrc = webcamRef.current.getScreenshot();\n    setImgSrc(imageSrc);\n  }, [webcamRef, setImgSrc]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_3___default()), {\n      audio: false,\n      ref: webcamRef,\n      screenshotFormat: \"image/jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: capture,\n      children: \"Capture photo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: imgSrc,\n      height: \"200\",\n      alt: \"Image preview...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(WebcamComponent, \"ESwUrLq+HE9liXlylGlqUDf3hvQ=\");\n\n_c = WebcamComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebcamComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"WebcamComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJjYW1Db21wb25lbnQuanM/ODBlMCJdLCJuYW1lcyI6WyJXZWJjYW1Db21wb25lbnQiLCJvbkNhcHR1cmUiLCJ3ZWJjYW1SZWYiLCJSZWFjdCIsImltZ1NyYyIsInNldEltZ1NyYyIsImNhcHR1cmUiLCJpbWFnZVNyYyIsImN1cnJlbnQiLCJnZXRTY3JlZW5zaG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTtBQUNBO0FBRUE7O0FBQ0EsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxTQUFELEVBQWU7QUFBQTs7QUFDbkMsTUFBTUMsU0FBUyxHQUFHQyxtREFBQSxDQUFhLElBQWIsQ0FBbEI7O0FBRG1DLHdCQUVQQSxxREFBQSxDQUFlLElBQWYsQ0FGTztBQUFBO0FBQUEsTUFFNUJDLE1BRjRCO0FBQUEsTUFFcEJDLFNBRm9COztBQUluQyxNQUFNQyxPQUFPLEdBQUdILHdEQUFBLENBQWtCLFlBQU07QUFDcEMsUUFBTUksUUFBUSxHQUFHTCxTQUFTLENBQUNNLE9BQVYsQ0FBa0JDLGFBQWxCLEVBQWpCO0FBQ0FKLGFBQVMsQ0FBQ0UsUUFBRCxDQUFUO0FBQ0gsR0FIZSxFQUdiLENBQUNMLFNBQUQsRUFBWUcsU0FBWixDQUhhLENBQWhCO0FBS0Esc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxxREFBRDtBQUNJLFdBQUssRUFBRSxLQURYO0FBRUksU0FBRyxFQUFFSCxTQUZUO0FBR0ksc0JBQWdCLEVBQUM7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBUSxhQUFPLEVBQUVJLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkosZUFPSTtBQUFLLFNBQUcsRUFBRUYsTUFBVjtBQUFrQixZQUFNLEVBQUMsS0FBekI7QUFBK0IsU0FBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQSjtBQUFBLGtCQURKO0FBaUJILENBMUJEOztHQUFNSixlOztLQUFBQSxlO0FBNEJOLCtEQUFlQSxlQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XZWJjYW1Db21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViY2FtIGZyb20gXCJyZWFjdC13ZWJjYW1cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYURldmljZXMvZ2V0VXNlck1lZGlhXG4vLyBVc2UgLmdldFVzZVJNZWRpYSgpIHRvIHRvZ2dsZT8gT3ZlcnJpZGluZyB3aGF0J3MgYnVpbHQgaW50byB0aGUgd2ViY29tcG9uZW50LlxuXG4vLyBJ4oCZZCBwcm9iYWJseSBhZGQgYW4gb25DYXB0dXJlIHByb3AgdG8gdGhlIFdlYmNhbUNvbXBvbmVudCB0aGF0IGdldHMgcGFzc2VkIHRoZSBpbWFnZVNyYyB3aGVuZXZlciBpdCBjaGFuZ2VzIHRoZXJlYnkg4oCccGFzc2luZyB0aGUgc291cmNlIOKAmHVw4oCZ4oCdIGFzIHlvdSBzYWlkXG5jb25zdCBXZWJjYW1Db21wb25lbnQgPSAob25DYXB0dXJlKSA9PiB7XG4gICAgY29uc3Qgd2ViY2FtUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGNhcHR1cmUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xuICAgICAgICBzZXRJbWdTcmMoaW1hZ2VTcmMpO1xuICAgIH0sIFt3ZWJjYW1SZWYsIHNldEltZ1NyY10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxXZWJjYW1cbiAgICAgICAgICAgICAgICBhdWRpbz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgcmVmPXt3ZWJjYW1SZWZ9XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FwdHVyZX0+Q2FwdHVyZSBwaG90bzwvYnV0dG9uPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltZ1NyY30gaGVpZ2h0PVwiMjAwXCIgYWx0PVwiSW1hZ2UgcHJldmlldy4uLlwiIC8+XG57LyogXG4gICAgICAgICAgICB7aW1nU3JjICYmIChcbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIHNyYz17aW1nU3JjfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfSAqL31cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYmNhbUNvbXBvbmVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WebcamComponent.js\n");

/***/ })

});
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/components/WebcamComponent.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia\n// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.\n// I’d probably add an onCapture prop to the WebcamComponent that gets passed the imageSrc whenever it changes thereby “passing the source ‘up’” as you said\n\nvar WebcamComponent = function WebcamComponent(_ref) {\n  _s();\n\n  var setSource = _ref.setSource;\n  var webcamRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null); // const [imgSrc, setImgSrc] = React.useState(null);\n  // const capture = () => {\n  //     const imageSrc = webcamRef.current.getScreenshot();\n  //     // setImgSrc(imageSrc);\n  //     props.setSource(imageSrc)\n  //     console.log(\"this is the imagesrc:\", imageSrc)\n  // }\n  // memoizing capture function.\n\n  var capture = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(function () {\n    // imageSrc is base64\n    var imageSrc = webcamRef.current.getScreenshot(); // setImgSrc(imageSrc);\n\n    setSource(imageSrc);\n    console.log(\"this is the imagesrc:\", imageSrc);\n  }, [webcamRef, setSource]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n      audio: false,\n      ref: webcamRef,\n      screenshotFormat: \"image/jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: capture,\n      className: \"button\",\n      children: \"Capture photo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(WebcamComponent, \"Hucxar3NFXzIhqIknsdv6SpCTE0=\");\n\n_c = WebcamComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebcamComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"WebcamComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJjYW1Db21wb25lbnQuanM/ODBlMCJdLCJuYW1lcyI6WyJXZWJjYW1Db21wb25lbnQiLCJzZXRTb3VyY2UiLCJ3ZWJjYW1SZWYiLCJSZWFjdCIsImNhcHR1cmUiLCJpbWFnZVNyYyIsImN1cnJlbnQiLCJnZXRTY3JlZW5zaG90IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWlCO0FBQUE7O0FBQUEsTUFBZkMsU0FBZSxRQUFmQSxTQUFlO0FBQ3JDLE1BQU1DLFNBQVMsR0FBR0MsbURBQUEsQ0FBYSxJQUFiLENBQWxCLENBRHFDLENBRXJDO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHRCx3REFBQSxDQUFrQixZQUFNO0FBQ3BDO0FBQ0EsUUFBTUUsUUFBUSxHQUFHSCxTQUFTLENBQUNJLE9BQVYsQ0FBa0JDLGFBQWxCLEVBQWpCLENBRm9DLENBR3BDOztBQUNBTixhQUFTLENBQUNJLFFBQUQsQ0FBVDtBQUNBRyxXQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0osUUFBckM7QUFDSCxHQU5lLEVBTWIsQ0FBQ0gsU0FBRCxFQUFZRCxTQUFaLENBTmEsQ0FBaEI7QUFRQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksV0FBSyxFQUFFLEtBRFg7QUFFSSxTQUFHLEVBQUVDLFNBRlQ7QUFHSSxzQkFBZ0IsRUFBQztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFNSTtBQUFRLGFBQU8sRUFBRUUsT0FBakI7QUFBMEIsZUFBUyxFQUFDLFFBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTko7QUFBQSxrQkFESjtBQVdILENBL0JEOztHQUFNSixlOztLQUFBQSxlO0FBaUNOLCtEQUFlQSxlQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XZWJjYW1Db21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViY2FtIGZyb20gXCJyZWFjdC13ZWJjYW1cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYURldmljZXMvZ2V0VXNlck1lZGlhXG4vLyBVc2UgLmdldFVzZVJNZWRpYSgpIHRvIHRvZ2dsZT8gT3ZlcnJpZGluZyB3aGF0J3MgYnVpbHQgaW50byB0aGUgd2ViY29tcG9uZW50LlxuXG4vLyBJ4oCZZCBwcm9iYWJseSBhZGQgYW4gb25DYXB0dXJlIHByb3AgdG8gdGhlIFdlYmNhbUNvbXBvbmVudCB0aGF0IGdldHMgcGFzc2VkIHRoZSBpbWFnZVNyYyB3aGVuZXZlciBpdCBjaGFuZ2VzIHRoZXJlYnkg4oCccGFzc2luZyB0aGUgc291cmNlIOKAmHVw4oCZ4oCdIGFzIHlvdSBzYWlkXG5jb25zdCBXZWJjYW1Db21wb25lbnQgPSAoe3NldFNvdXJjZX0pID0+IHtcbiAgICBjb25zdCB3ZWJjYW1SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgLy8gY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8gY29uc3QgY2FwdHVyZSA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaW1hZ2VTcmMgPSB3ZWJjYW1SZWYuY3VycmVudC5nZXRTY3JlZW5zaG90KCk7XG4gICAgLy8gICAgIC8vIHNldEltZ1NyYyhpbWFnZVNyYyk7XG4gICAgLy8gICAgIHByb3BzLnNldFNvdXJjZShpbWFnZVNyYylcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZXNyYzpcIiwgaW1hZ2VTcmMpXG4gICAgLy8gfVxuXG4gICAgLy8gbWVtb2l6aW5nIGNhcHR1cmUgZnVuY3Rpb24uXG4gICAgY29uc3QgY2FwdHVyZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgLy8gaW1hZ2VTcmMgaXMgYmFzZTY0XG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xuICAgICAgICAvLyBzZXRJbWdTcmMoaW1hZ2VTcmMpO1xuICAgICAgICBzZXRTb3VyY2UoaW1hZ2VTcmMpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2VzcmM6XCIsIGltYWdlU3JjKVxuICAgIH0sIFt3ZWJjYW1SZWYsIHNldFNvdXJjZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxXZWJjYW1cbiAgICAgICAgICAgICAgICBhdWRpbz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgcmVmPXt3ZWJjYW1SZWZ9XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FwdHVyZX0gY2xhc3NOYW1lPVwiYnV0dG9uXCI+Q2FwdHVyZSBwaG90bzwvYnV0dG9uPlxuXG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJjYW1Db21wb25lbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WebcamComponent.js\n");

/***/ })

});
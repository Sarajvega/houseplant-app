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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-webcam */ \"./node_modules/react-webcam/dist/react-webcam.js\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/components/WebcamComponent.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia\n// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.\n// I’d probably add an onCapture prop to the WebcamComponent that gets passed the imageSrc whenever it changes thereby “passing the source ‘up’” as you said\n\nvar WebcamComponent = function WebcamComponent(props) {\n  _s();\n\n  var webcamRef = react__WEBPACK_IMPORTED_MODULE_2___default().useRef(null);\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null),\n      _React$useState2 = (0,_Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      imgSrc = _React$useState2[0],\n      setImgSrc = _React$useState2[1];\n\n  var capture = react__WEBPACK_IMPORTED_MODULE_2___default().useCallback(function () {\n    var imageSrc = webcamRef.current.getScreenshot();\n    setImgSrc(imageSrc);\n    props.onCapture(imageSrc);\n  }, [webcamRef, setImgSrc]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_3___default()), {\n      audio: false,\n      ref: webcamRef,\n      screenshotFormat: \"image/jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: capture,\n      children: \"Capture photo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(WebcamComponent, \"ESwUrLq+HE9liXlylGlqUDf3hvQ=\");\n\n_c = WebcamComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebcamComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"WebcamComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XZWJjYW1Db21wb25lbnQuanM/ODBlMCJdLCJuYW1lcyI6WyJXZWJjYW1Db21wb25lbnQiLCJwcm9wcyIsIndlYmNhbVJlZiIsIlJlYWN0IiwiaW1nU3JjIiwic2V0SW1nU3JjIiwiY2FwdHVyZSIsImltYWdlU3JjIiwiY3VycmVudCIsImdldFNjcmVlbnNob3QiLCJvbkNhcHR1cmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFFQTs7QUFDQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUMvQixNQUFNQyxTQUFTLEdBQUdDLG1EQUFBLENBQWEsSUFBYixDQUFsQjs7QUFEK0Isd0JBRUhBLHFEQUFBLENBQWUsSUFBZixDQUZHO0FBQUE7QUFBQSxNQUV4QkMsTUFGd0I7QUFBQSxNQUVoQkMsU0FGZ0I7O0FBSS9CLE1BQU1DLE9BQU8sR0FBR0gsd0RBQUEsQ0FBa0IsWUFBTTtBQUNwQyxRQUFNSSxRQUFRLEdBQUdMLFNBQVMsQ0FBQ00sT0FBVixDQUFrQkMsYUFBbEIsRUFBakI7QUFDQUosYUFBUyxDQUFDRSxRQUFELENBQVQ7QUFDQU4sU0FBSyxDQUFDUyxTQUFOLENBQWdCSCxRQUFoQjtBQUNILEdBSmUsRUFJYixDQUFDTCxTQUFELEVBQVlHLFNBQVosQ0FKYSxDQUFoQjtBQU1BLHNCQUNJO0FBQUEsNEJBQ0ksOERBQUMscURBQUQ7QUFDSSxXQUFLLEVBQUUsS0FEWDtBQUVJLFNBQUcsRUFBRUgsU0FGVDtBQUdJLHNCQUFnQixFQUFDO0FBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQVEsYUFBTyxFQUFFSSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUEsa0JBREo7QUFXSCxDQXJCRDs7R0FBTU4sZTs7S0FBQUEsZTtBQXVCTiwrREFBZUEsZUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFdlYmNhbSBmcm9tIFwicmVhY3Qtd2ViY2FtXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTWVkaWFEZXZpY2VzL2dldFVzZXJNZWRpYVxuLy8gVXNlIC5nZXRVc2VSTWVkaWEoKSB0byB0b2dnbGU/IE92ZXJyaWRpbmcgd2hhdCdzIGJ1aWx0IGludG8gdGhlIHdlYmNvbXBvbmVudC5cblxuLy8gSeKAmWQgcHJvYmFibHkgYWRkIGFuIG9uQ2FwdHVyZSBwcm9wIHRvIHRoZSBXZWJjYW1Db21wb25lbnQgdGhhdCBnZXRzIHBhc3NlZCB0aGUgaW1hZ2VTcmMgd2hlbmV2ZXIgaXQgY2hhbmdlcyB0aGVyZWJ5IOKAnHBhc3NpbmcgdGhlIHNvdXJjZSDigJh1cOKAmeKAnSBhcyB5b3Ugc2FpZFxuY29uc3QgV2ViY2FtQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgd2ViY2FtUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IFtpbWdTcmMsIHNldEltZ1NyY10gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IGNhcHR1cmUgPSBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xuICAgICAgICBzZXRJbWdTcmMoaW1hZ2VTcmMpO1xuICAgICAgICBwcm9wcy5vbkNhcHR1cmUoaW1hZ2VTcmMpXG4gICAgfSwgW3dlYmNhbVJlZiwgc2V0SW1nU3JjXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPFdlYmNhbVxuICAgICAgICAgICAgICAgIGF1ZGlvPXtmYWxzZX1cbiAgICAgICAgICAgICAgICByZWY9e3dlYmNhbVJlZn1cbiAgICAgICAgICAgICAgICBzY3JlZW5zaG90Rm9ybWF0PVwiaW1hZ2UvanBlZ1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtjYXB0dXJlfT5DYXB0dXJlIHBob3RvPC9idXR0b24+XG5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdlYmNhbUNvbXBvbmVudFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WebcamComponent.js\n");

/***/ })

});
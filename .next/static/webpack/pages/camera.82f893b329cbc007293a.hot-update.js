/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/camera",{

/***/ "./pages/camera.js":
/*!*************************!*\
  !*** ./pages/camera.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Camera; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_WebcamComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WebcamComponent */ \"./components/WebcamComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/pages/camera.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Camera() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(''),\n      _React$useState2 = (0,_Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      src = _React$useState2[0],\n      setSrc = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(''),\n      _React$useState4 = (0,_Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),\n      selectedFile = _React$useState4[0],\n      setFile = _React$useState4[1];\n\n  var previewFile = function previewFile(Event) {\n    // get file contents from file upload and save into selectedFile state.\n    var reader = new FileReader();\n    console.log(Event);\n    console.log(Event.target.file); // setting state not working?\n\n    setFile(Event.target.file);\n    console.log(selectedFile);\n    reader.addEventListener(\"load\", function () {\n      // convert image file to base64 string\n      // preview.src = reader.result;\n      fileSrc = reader.result;\n      setSrc(fileSrc);\n      console.log('Render result:', reader.result);\n    }, false);\n\n    if (selectedFile) {\n      reader.readAsDataURL(selectedFile);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Camera\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \" Toggle Camera\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WebcamComponent__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Upload a file\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        name: \"file\",\n        onChange: previewFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: src,\n      height: \"200\",\n      alt: \"Image preview...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \" Analyze Image \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n} // function previewFile() {\n//     const preview = document.querySelector('img');\n//     const file = document.querySelector('input[type=file]').files[0];\n//     const reader = new FileReader();\n//     reader.addEventListener(\"load\", function () {\n//         // convert image file to base64 string\n//         preview.src = reader.result;\n//     }, false);\n//     if (file) {\n//         reader.readAsDataURL(file);\n//     }\n// }\n\n_s(Camera, \"A5HwC4B/tSygq81qvUUpMauWZ5U=\");\n\n_c = Camera;\n\nvar _c;\n\n$RefreshReg$(_c, \"Camera\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtZXJhLmpzPzkxNTUiXSwibmFtZXMiOlsiQ2FtZXJhIiwiUmVhY3QiLCJzcmMiLCJzZXRTcmMiLCJzZWxlY3RlZEZpbGUiLCJzZXRGaWxlIiwicHJldmlld0ZpbGUiLCJFdmVudCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwiZmlsZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWxlU3JjIiwicmVzdWx0IiwicmVhZEFzRGF0YVVSTCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQSx3QkFFUEMscURBQUEsQ0FBZSxFQUFmLENBRk87QUFBQTtBQUFBLE1BRXRCQyxHQUZzQjtBQUFBLE1BRWpCQyxNQUZpQjs7QUFBQSx5QkFHR0YscURBQUEsQ0FBZSxFQUFmLENBSEg7QUFBQTtBQUFBLE1BR3RCRyxZQUhzQjtBQUFBLE1BR1JDLE9BSFE7O0FBSzdCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBVztBQUMzQjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQUMsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQVo7QUFFQUcsV0FBTyxDQUFDQyxHQUFSLENBQVlKLEtBQUssQ0FBQ0ssTUFBTixDQUFhQyxJQUF6QixFQUwyQixDQU0zQjs7QUFDQVIsV0FBTyxDQUFDRSxLQUFLLENBQUNLLE1BQU4sQ0FBYUMsSUFBZCxDQUFQO0FBQ0FILFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxZQUFaO0FBRUFJLFVBQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBWTtBQUN4QztBQUNBO0FBQ0FDLGFBQU8sR0FBR1AsTUFBTSxDQUFDUSxNQUFqQjtBQUNBYixZQUFNLENBQUNZLE9BQUQsQ0FBTjtBQUVBTCxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE2QkgsTUFBTSxDQUFDUSxNQUFwQztBQUNILEtBUEQsRUFPRyxLQVBIOztBQVNBLFFBQUlaLFlBQUosRUFBa0I7QUFDZEksWUFBTSxDQUFDUyxhQUFQLENBQXFCYixZQUFyQjtBQUNIO0FBQ0osR0F0QkQ7O0FBdUJBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFPSSw4REFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFTSTtBQUFBLDhCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFPLFlBQUksRUFBQyxNQUFaO0FBQW1CLFlBQUksRUFBQyxNQUF4QjtBQUErQixnQkFBUSxFQUFFRTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFhSTtBQUFLLFNBQUcsRUFBRUosR0FBVjtBQUFlLFlBQU0sRUFBQyxLQUF0QjtBQUE0QixTQUFHLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKLGVBZUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmSjtBQUFBLGtCQURKO0FBbUJILEMsQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0dBNUR3QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2NhbWVyYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJjYW1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FtZXJhKCkge1xuXG4gICAgY29uc3QgW3NyYywgc2V0U3JjXSA9IFJlYWN0LnVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldEZpbGVdID0gUmVhY3QudXNlU3RhdGUoJycpXG5cbiAgICBjb25zdCBwcmV2aWV3RmlsZSA9IChFdmVudCkgPT4ge1xuICAgICAgICAvLyBnZXQgZmlsZSBjb250ZW50cyBmcm9tIGZpbGUgdXBsb2FkIGFuZCBzYXZlIGludG8gc2VsZWN0ZWRGaWxlIHN0YXRlLlxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICBjb25zb2xlLmxvZyhFdmVudClcblxuICAgICAgICBjb25zb2xlLmxvZyhFdmVudC50YXJnZXQuZmlsZSlcbiAgICAgICAgLy8gc2V0dGluZyBzdGF0ZSBub3Qgd29ya2luZz9cbiAgICAgICAgc2V0RmlsZShFdmVudC50YXJnZXQuZmlsZSlcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRGaWxlKVxuXG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IGltYWdlIGZpbGUgdG8gYmFzZTY0IHN0cmluZ1xuICAgICAgICAgICAgLy8gcHJldmlldy5zcmMgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgZmlsZVNyYyA9IHJlYWRlci5yZXN1bHQ7XG4gICAgICAgICAgICBzZXRTcmMoZmlsZVNyYylcbiAgICBcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZW5kZXIgcmVzdWx0OicscmVhZGVyLnJlc3VsdClcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIFxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWxlKSB7XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgQ2FtZXJhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGJ1dHRvbj4gVG9nZ2xlIENhbWVyYTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgIDxXZWJjYW1Db21wb25lbnQgLz5cblxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlVwbG9hZCBhIGZpbGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG5hbWU9XCJmaWxlXCIgb25DaGFuZ2U9e3ByZXZpZXdGaWxlfSAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPGltZyBzcmM9e3NyY30gaGVpZ2h0PVwiMjAwXCIgYWx0PVwiSW1hZ2UgcHJldmlldy4uLlwiIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gPiBBbmFseXplIEltYWdlIDwvYnV0dG9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbi8vIGZ1bmN0aW9uIHByZXZpZXdGaWxlKCkge1xuLy8gICAgIGNvbnN0IHByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbi8vICAgICBjb25zdCBmaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1maWxlXScpLmZpbGVzWzBdO1xuLy8gICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4vLyAgICAgcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgLy8gY29udmVydCBpbWFnZSBmaWxlIHRvIGJhc2U2NCBzdHJpbmdcbi8vICAgICAgICAgcHJldmlldy5zcmMgPSByZWFkZXIucmVzdWx0O1xuLy8gICAgIH0sIGZhbHNlKTtcbi8vICAgICBpZiAoZmlsZSkge1xuLy8gICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbi8vICAgICB9XG4vLyB9Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/camera.js\n");

/***/ })

});
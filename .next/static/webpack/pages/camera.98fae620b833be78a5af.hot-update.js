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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Camera; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _components_WebcamComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WebcamComponent */ \"./components/WebcamComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/pages/camera.js\",\n    _s = $RefreshSig$();\n\n\n\nfunction Camera() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),\n      _React$useState2 = (0,_Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState, 2),\n      src = _React$useState2[0],\n      setSrc = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null),\n      _React$useState4 = (0,_Users_ada_Desktop_Dev_capstone_houseplant_app_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_React$useState3, 2),\n      selectedFile = _React$useState4[0],\n      setFile = _React$useState4[1];\n\n  var previewFile = function previewFile(Event) {\n    var reader = new FileReader();\n    var newFile = Event.target.files[0];\n    setFile(newFile);\n    reader.addEventListener(\"load\", function () {\n      // convert image file to base64 string\n      var fileSrc = reader.result;\n      setSrc(fileSrc);\n      console.log('Render result:', reader.result);\n    }, false);\n\n    if (newFile) {\n      reader.readAsDataURL(newFile);\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Camera\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WebcamComponent__WEBPACK_IMPORTED_MODULE_2__.default, {\n      setSource: setSrc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Upload a file\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        name: \"file\",\n        onChange: previewFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: src,\n      height: \"200\",\n      alt: \"Image preview...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \" Analyze Image \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Camera, \"skukuOAThBXv0pe0E66I1rCuRBQ=\");\n\n_c = Camera;\n\nvar _c;\n\n$RefreshReg$(_c, \"Camera\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtZXJhLmpzPzkxNTUiXSwibmFtZXMiOlsiQ2FtZXJhIiwiUmVhY3QiLCJzcmMiLCJzZXRTcmMiLCJzZWxlY3RlZEZpbGUiLCJzZXRGaWxlIiwicHJldmlld0ZpbGUiLCJFdmVudCIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJuZXdGaWxlIiwidGFyZ2V0IiwiZmlsZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZmlsZVNyYyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBLHdCQUVQQyxxREFBQSxDQUFlLElBQWYsQ0FGTztBQUFBO0FBQUEsTUFFdEJDLEdBRnNCO0FBQUEsTUFFakJDLE1BRmlCOztBQUFBLHlCQUdHRixxREFBQSxDQUFlLElBQWYsQ0FISDtBQUFBO0FBQUEsTUFHdEJHLFlBSHNCO0FBQUEsTUFHUkMsT0FIUTs7QUFLN0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQzNCLFFBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQSxRQUFJQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQWQ7QUFDQVAsV0FBTyxDQUFDSyxPQUFELENBQVA7QUFFQUYsVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQ3hDO0FBQ0EsVUFBSUMsT0FBTyxHQUFHTixNQUFNLENBQUNPLE1BQXJCO0FBQ0FaLFlBQU0sQ0FBQ1csT0FBRCxDQUFOO0FBRUFFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQTZCVCxNQUFNLENBQUNPLE1BQXBDO0FBQ0gsS0FORCxFQU1HLEtBTkg7O0FBUUEsUUFBSUwsT0FBSixFQUFhO0FBQ1RGLFlBQU0sQ0FBQ1UsYUFBUCxDQUFxQlIsT0FBckI7QUFDSDtBQUNKLEdBaEJEOztBQWtCQSxzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEosZUFNSSw4REFBQyxnRUFBRDtBQUFpQixlQUFTLEVBQUVQO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSixlQU9JO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUVJO0FBQU8sWUFBSSxFQUFDLE1BQVo7QUFBbUIsWUFBSSxFQUFDLE1BQXhCO0FBQStCLGdCQUFRLEVBQUVHO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVdJO0FBQUssU0FBRyxFQUFFSixHQUFWO0FBQWUsWUFBTSxFQUFDLEtBQXRCO0FBQTRCLFNBQUcsRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEosZUFhSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWJKO0FBQUEsa0JBREo7QUFpQkg7O0dBeEN1QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2NhbWVyYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJjYW1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FtZXJhKCkge1xuXG4gICAgY29uc3QgW3NyYywgc2V0U3JjXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0RmlsZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgcHJldmlld0ZpbGUgPSAoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgdmFyIG5ld0ZpbGUgPSBFdmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgc2V0RmlsZShuZXdGaWxlKVxuXG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IGltYWdlIGZpbGUgdG8gYmFzZTY0IHN0cmluZ1xuICAgICAgICAgICAgdmFyIGZpbGVTcmMgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgc2V0U3JjKGZpbGVTcmMpXG4gICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVuZGVyIHJlc3VsdDonLHJlYWRlci5yZXN1bHQpXG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICBcbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG5ld0ZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICBDYW1lcmFcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFdlYmNhbUNvbXBvbmVudCBzZXRTb3VyY2U9e3NldFNyY30gLz5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5VcGxvYWQgYSBmaWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIG9uQ2hhbmdlPXtwcmV2aWV3RmlsZX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzcmN9IGhlaWdodD1cIjIwMFwiIGFsdD1cIkltYWdlIHByZXZpZXcuLi5cIiAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uID4gQW5hbHl6ZSBJbWFnZSA8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/camera.js\n");

/***/ })

});
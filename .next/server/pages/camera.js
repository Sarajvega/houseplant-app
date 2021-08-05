/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/camera";
exports.ids = ["pages/camera"];
exports.modules = {

/***/ "./components/WebcamComponent.js":
/*!***************************************!*\
  !*** ./components/WebcamComponent.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"react-webcam\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/components/WebcamComponent.js\";\n\n\n // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia\n// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.\n// I’d probably add an onCapture prop to the WebcamComponent that gets passed the imageSrc whenever it changes thereby “passing the source ‘up’” as you said\n\nconst WebcamComponent = props => {\n  const webcamRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);\n  const [imgSrc, setImgSrc] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(null);\n  const capture = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {\n    const imageSrc = webcamRef.current.getScreenshot();\n    setImgSrc(imageSrc);\n    props.onCapture(imageSrc);\n  }, [webcamRef, setImgSrc]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n      audio: false,\n      ref: webcamRef,\n      screenshotFormat: \"image/jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: capture,\n      children: \"Capture photo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebcamComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3VzZXBsYW50LWFwcC8uL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50LmpzPzgwZTAiXSwibmFtZXMiOlsiV2ViY2FtQ29tcG9uZW50IiwicHJvcHMiLCJ3ZWJjYW1SZWYiLCJSZWFjdCIsImltZ1NyYyIsInNldEltZ1NyYyIsImNhcHR1cmUiLCJpbWFnZVNyYyIsImN1cnJlbnQiLCJnZXRTY3JlZW5zaG90Iiwib25DYXB0dXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUdBO0FBQ0E7QUFFQTs7QUFDQSxNQUFNQSxlQUFlLEdBQUlDLEtBQUQsSUFBVztBQUMvQixRQUFNQyxTQUFTLEdBQUdDLG1EQUFBLENBQWEsSUFBYixDQUFsQjtBQUNBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCRixxREFBQSxDQUFlLElBQWYsQ0FBNUI7QUFFQSxRQUFNRyxPQUFPLEdBQUdILHdEQUFBLENBQWtCLE1BQU07QUFDcEMsVUFBTUksUUFBUSxHQUFHTCxTQUFTLENBQUNNLE9BQVYsQ0FBa0JDLGFBQWxCLEVBQWpCO0FBQ0FKLGFBQVMsQ0FBQ0UsUUFBRCxDQUFUO0FBQ0FOLFNBQUssQ0FBQ1MsU0FBTixDQUFnQkgsUUFBaEI7QUFDSCxHQUplLEVBSWIsQ0FBQ0wsU0FBRCxFQUFZRyxTQUFaLENBSmEsQ0FBaEI7QUFNQSxzQkFDSTtBQUFBLDRCQUNJLDhEQUFDLHFEQUFEO0FBQ0ksV0FBSyxFQUFFLEtBRFg7QUFFSSxTQUFHLEVBQUVILFNBRlQ7QUFHSSxzQkFBZ0IsRUFBQztBQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUk7QUFBUSxhQUFPLEVBQUVJLE9BQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KO0FBQUEsa0JBREo7QUFXSCxDQXJCRDs7QUF1QkEsK0RBQWVOLGVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dlYmNhbUNvbXBvbmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBXZWJjYW0gZnJvbSBcInJlYWN0LXdlYmNhbVwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL01lZGlhRGV2aWNlcy9nZXRVc2VyTWVkaWFcbi8vIFVzZSAuZ2V0VXNlUk1lZGlhKCkgdG8gdG9nZ2xlPyBPdmVycmlkaW5nIHdoYXQncyBidWlsdCBpbnRvIHRoZSB3ZWJjb21wb25lbnQuXG5cbi8vIEnigJlkIHByb2JhYmx5IGFkZCBhbiBvbkNhcHR1cmUgcHJvcCB0byB0aGUgV2ViY2FtQ29tcG9uZW50IHRoYXQgZ2V0cyBwYXNzZWQgdGhlIGltYWdlU3JjIHdoZW5ldmVyIGl0IGNoYW5nZXMgdGhlcmVieSDigJxwYXNzaW5nIHRoZSBzb3VyY2Ug4oCYdXDigJnigJ0gYXMgeW91IHNhaWRcbmNvbnN0IFdlYmNhbUNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHdlYmNhbVJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcbiAgICBjb25zdCBbaW1nU3JjLCBzZXRJbWdTcmNdID0gUmVhY3QudXNlU3RhdGUobnVsbCk7XG5cbiAgICBjb25zdCBjYXB0dXJlID0gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICBjb25zdCBpbWFnZVNyYyA9IHdlYmNhbVJlZi5jdXJyZW50LmdldFNjcmVlbnNob3QoKTtcbiAgICAgICAgc2V0SW1nU3JjKGltYWdlU3JjKTtcbiAgICAgICAgcHJvcHMub25DYXB0dXJlKGltYWdlU3JjKVxuICAgIH0sIFt3ZWJjYW1SZWYsIHNldEltZ1NyY10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxXZWJjYW1cbiAgICAgICAgICAgICAgICBhdWRpbz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgcmVmPXt3ZWJjYW1SZWZ9XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FwdHVyZX0+Q2FwdHVyZSBwaG90bzwvYnV0dG9uPlxuXG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJjYW1Db21wb25lbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WebcamComponent.js\n");

/***/ }),

/***/ "./pages/camera.js":
/*!*************************!*\
  !*** ./pages/camera.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Camera; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_WebcamComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/WebcamComponent */ \"./components/WebcamComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/pages/camera.js\";\n\n\nfunction Camera() {\n  const [src, setSrc] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n  const [selectedFile, setFile] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(null);\n\n  const previewFile = Event => {\n    const reader = new FileReader();\n    var newFile = Event.target.files[0];\n    setFile(newFile);\n    reader.addEventListener(\"load\", function () {\n      // convert image file to base64 string\n      var fileSrc = reader.result;\n      setSrc(fileSrc);\n      console.log('Render result:', reader.result);\n    }, false);\n\n    if (newFile) {\n      reader.readAsDataURL(newFile);\n    }\n  };\n\n  const newFunc = camSrc => {\n    console.log('Im called!');\n    setSrc(camSrc);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Camera\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WebcamComponent__WEBPACK_IMPORTED_MODULE_1__.default, {\n      onCapture: newFunc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Upload a file\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        name: \"file\",\n        onChange: previewFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: src,\n      height: \"200\",\n      alt: \"Image preview...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      children: \" Analyze Image \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3VzZXBsYW50LWFwcC8uL3BhZ2VzL2NhbWVyYS5qcz85MTU1Il0sIm5hbWVzIjpbIkNhbWVyYSIsInNyYyIsInNldFNyYyIsIlJlYWN0Iiwic2VsZWN0ZWRGaWxlIiwic2V0RmlsZSIsInByZXZpZXdGaWxlIiwiRXZlbnQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwibmV3RmlsZSIsInRhcmdldCIsImZpbGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVTcmMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVhZEFzRGF0YVVSTCIsIm5ld0Z1bmMiLCJjYW1TcmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBRTdCLFFBQU0sQ0FBQ0MsR0FBRCxFQUFNQyxNQUFOLElBQWdCQyxxREFBQSxDQUFlLElBQWYsQ0FBdEI7QUFDQSxRQUFNLENBQUNDLFlBQUQsRUFBZUMsT0FBZixJQUEwQkYscURBQUEsQ0FBZSxJQUFmLENBQWhDOztBQUVBLFFBQU1HLFdBQVcsR0FBSUMsS0FBRCxJQUFXO0FBQzNCLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWY7QUFDQSxRQUFJQyxPQUFPLEdBQUdILEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxLQUFiLENBQW1CLENBQW5CLENBQWQ7QUFDQVAsV0FBTyxDQUFDSyxPQUFELENBQVA7QUFFQUYsVUFBTSxDQUFDSyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFZO0FBQ3hDO0FBQ0EsVUFBSUMsT0FBTyxHQUFHTixNQUFNLENBQUNPLE1BQXJCO0FBQ0FiLFlBQU0sQ0FBQ1ksT0FBRCxDQUFOO0FBRUFFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQTZCVCxNQUFNLENBQUNPLE1BQXBDO0FBQ0gsS0FORCxFQU1HLEtBTkg7O0FBUUEsUUFBSUwsT0FBSixFQUFhO0FBQ1RGLFlBQU0sQ0FBQ1UsYUFBUCxDQUFxQlIsT0FBckI7QUFDSDtBQUNKLEdBaEJEOztBQWlCQSxRQUFNUyxPQUFPLEdBQUlDLE1BQUQsSUFBWTtBQUN4QkosV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWjtBQUNBZixVQUFNLENBQUNrQixNQUFELENBQU47QUFDSCxHQUhEOztBQUlBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFMSixlQU1JLDhEQUFDLGdFQUFEO0FBQWlCLGVBQVMsRUFBRUQ7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBT0k7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTyxZQUFJLEVBQUMsTUFBWjtBQUFtQixZQUFJLEVBQUMsTUFBeEI7QUFBK0IsZ0JBQVEsRUFBRWI7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBV0k7QUFBSyxTQUFHLEVBQUVMLEdBQVY7QUFBZSxZQUFNLEVBQUMsS0FBdEI7QUFBNEIsU0FBRyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBYko7QUFBQSxrQkFESjtBQWlCSCIsImZpbGUiOiIuL3BhZ2VzL2NhbWVyYS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWJjYW1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FtZXJhKCkge1xuXG4gICAgY29uc3QgW3NyYywgc2V0U3JjXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW3NlbGVjdGVkRmlsZSwgc2V0RmlsZV0gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuXG4gICAgY29uc3QgcHJldmlld0ZpbGUgPSAoRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgdmFyIG5ld0ZpbGUgPSBFdmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICAgICAgc2V0RmlsZShuZXdGaWxlKVxuXG4gICAgICAgIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBjb252ZXJ0IGltYWdlIGZpbGUgdG8gYmFzZTY0IHN0cmluZ1xuICAgICAgICAgICAgdmFyIGZpbGVTcmMgPSByZWFkZXIucmVzdWx0O1xuICAgICAgICAgICAgc2V0U3JjKGZpbGVTcmMpXG4gICAgXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVuZGVyIHJlc3VsdDonLHJlYWRlci5yZXN1bHQpXG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICBcbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG5ld0ZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG5ld0Z1bmMgPSAoY2FtU3JjKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbSBjYWxsZWQhJylcbiAgICAgICAgc2V0U3JjKGNhbVNyYylcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxoMT5cbiAgICAgICAgICAgICAgICBDYW1lcmFcbiAgICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFdlYmNhbUNvbXBvbmVudCBvbkNhcHR1cmU9e25ld0Z1bmN9IC8+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICA8bGFiZWw+VXBsb2FkIGEgZmlsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgbmFtZT1cImZpbGVcIiBvbkNoYW5nZT17cHJldmlld0ZpbGV9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8aW1nIHNyYz17c3JjfSBoZWlnaHQ9XCIyMDBcIiBhbHQ9XCJJbWFnZSBwcmV2aWV3Li4uXCIgLz5cblxuICAgICAgICAgICAgPGJ1dHRvbiA+IEFuYWx5emUgSW1hZ2UgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/camera.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-webcam":
/*!*******************************!*\
  !*** external "react-webcam" ***!
  \*******************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-webcam");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/camera.js"));
module.exports = __webpack_exports__;

})();
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-webcam */ \"react-webcam\");\n/* harmony import */ var react_webcam__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_webcam__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/components/WebcamComponent.js\";\n\n\n // https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia\n// Use .getUseRMedia() to toggle? Overriding what's built into the webcomponent.\n// I’d probably add an onCapture prop to the WebcamComponent that gets passed the imageSrc whenever it changes thereby “passing the source ‘up’” as you said\n\nconst WebcamComponent = ({\n  setSource\n}) => {\n  const webcamRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null); // const [imgSrc, setImgSrc] = React.useState(null);\n  // const capture = () => {\n  //     const imageSrc = webcamRef.current.getScreenshot();\n  //     // setImgSrc(imageSrc);\n  //     props.setSource(imageSrc)\n  //     console.log(\"this is the imagesrc:\", imageSrc)\n  // }\n  // memoizing capture function.\n\n  const capture = react__WEBPACK_IMPORTED_MODULE_1___default().useCallback(() => {\n    // imageSrc is base64\n    const imageSrc = webcamRef.current.getScreenshot(); // setImgSrc(imageSrc);\n\n    setSource(imageSrc);\n    console.log(\"this is the imagesrc:\", imageSrc);\n  }, [webcamRef, setSource]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_webcam__WEBPACK_IMPORTED_MODULE_2___default()), {\n      audio: false,\n      ref: webcamRef,\n      screenshotFormat: \"image/jpeg\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: capture,\n      children: \"Capture photo\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (WebcamComponent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3VzZXBsYW50LWFwcC8uL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50LmpzPzgwZTAiXSwibmFtZXMiOlsiV2ViY2FtQ29tcG9uZW50Iiwic2V0U291cmNlIiwid2ViY2FtUmVmIiwiUmVhY3QiLCJjYXB0dXJlIiwiaW1hZ2VTcmMiLCJjdXJyZW50IiwiZ2V0U2NyZWVuc2hvdCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBR0E7QUFDQTtBQUVBOztBQUNBLE1BQU1BLGVBQWUsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUNyQyxRQUFNQyxTQUFTLEdBQUdDLG1EQUFBLENBQWEsSUFBYixDQUFsQixDQURxQyxDQUVyQztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFFBQU1DLE9BQU8sR0FBR0Qsd0RBQUEsQ0FBa0IsTUFBTTtBQUNwQztBQUNBLFVBQU1FLFFBQVEsR0FBR0gsU0FBUyxDQUFDSSxPQUFWLENBQWtCQyxhQUFsQixFQUFqQixDQUZvQyxDQUdwQzs7QUFDQU4sYUFBUyxDQUFDSSxRQUFELENBQVQ7QUFDQUcsV0FBTyxDQUFDQyxHQUFSLENBQVksdUJBQVosRUFBcUNKLFFBQXJDO0FBQ0gsR0FOZSxFQU1iLENBQUNILFNBQUQsRUFBWUQsU0FBWixDQU5hLENBQWhCO0FBUUEsc0JBQ0k7QUFBQSw0QkFDSSw4REFBQyxxREFBRDtBQUNJLFdBQUssRUFBRSxLQURYO0FBRUksU0FBRyxFQUFFQyxTQUZUO0FBR0ksc0JBQWdCLEVBQUM7QUFIckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JO0FBQVEsYUFBTyxFQUFFRSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBLGtCQURKO0FBV0gsQ0EvQkQ7O0FBaUNBLCtEQUFlSixlQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XZWJjYW1Db21wb25lbnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgV2ViY2FtIGZyb20gXCJyZWFjdC13ZWJjYW1cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9NZWRpYURldmljZXMvZ2V0VXNlck1lZGlhXG4vLyBVc2UgLmdldFVzZVJNZWRpYSgpIHRvIHRvZ2dsZT8gT3ZlcnJpZGluZyB3aGF0J3MgYnVpbHQgaW50byB0aGUgd2ViY29tcG9uZW50LlxuXG4vLyBJ4oCZZCBwcm9iYWJseSBhZGQgYW4gb25DYXB0dXJlIHByb3AgdG8gdGhlIFdlYmNhbUNvbXBvbmVudCB0aGF0IGdldHMgcGFzc2VkIHRoZSBpbWFnZVNyYyB3aGVuZXZlciBpdCBjaGFuZ2VzIHRoZXJlYnkg4oCccGFzc2luZyB0aGUgc291cmNlIOKAmHVw4oCZ4oCdIGFzIHlvdSBzYWlkXG5jb25zdCBXZWJjYW1Db21wb25lbnQgPSAoe3NldFNvdXJjZX0pID0+IHtcbiAgICBjb25zdCB3ZWJjYW1SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gICAgLy8gY29uc3QgW2ltZ1NyYywgc2V0SW1nU3JjXSA9IFJlYWN0LnVzZVN0YXRlKG51bGwpO1xuXG4gICAgLy8gY29uc3QgY2FwdHVyZSA9ICgpID0+IHtcbiAgICAvLyAgICAgY29uc3QgaW1hZ2VTcmMgPSB3ZWJjYW1SZWYuY3VycmVudC5nZXRTY3JlZW5zaG90KCk7XG4gICAgLy8gICAgIC8vIHNldEltZ1NyYyhpbWFnZVNyYyk7XG4gICAgLy8gICAgIHByb3BzLnNldFNvdXJjZShpbWFnZVNyYylcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIHRoZSBpbWFnZXNyYzpcIiwgaW1hZ2VTcmMpXG4gICAgLy8gfVxuXG4gICAgLy8gbWVtb2l6aW5nIGNhcHR1cmUgZnVuY3Rpb24uXG4gICAgY29uc3QgY2FwdHVyZSA9IFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgLy8gaW1hZ2VTcmMgaXMgYmFzZTY0XG4gICAgICAgIGNvbnN0IGltYWdlU3JjID0gd2ViY2FtUmVmLmN1cnJlbnQuZ2V0U2NyZWVuc2hvdCgpO1xuICAgICAgICAvLyBzZXRJbWdTcmMoaW1hZ2VTcmMpO1xuICAgICAgICBzZXRTb3VyY2UoaW1hZ2VTcmMpXG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgaW1hZ2VzcmM6XCIsIGltYWdlU3JjKVxuICAgIH0sIFt3ZWJjYW1SZWYsIHNldFNvdXJjZV0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxXZWJjYW1cbiAgICAgICAgICAgICAgICBhdWRpbz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgcmVmPXt3ZWJjYW1SZWZ9XG4gICAgICAgICAgICAgICAgc2NyZWVuc2hvdEZvcm1hdD1cImltYWdlL2pwZWdcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17Y2FwdHVyZX0+Q2FwdHVyZSBwaG90bzwvYnV0dG9uPlxuXG4gICAgICAgIDwvPlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJjYW1Db21wb25lbnRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WebcamComponent.js\n");

/***/ }),

/***/ "./pages/camera.js":
/*!*************************!*\
  !*** ./pages/camera.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Camera; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_WebcamComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/WebcamComponent */ \"./components/WebcamComponent.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/ada/Desktop/Dev/capstone/houseplant-app/pages/camera.js\";\n\n\n\n\nfunction Camera() {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n  const [src, setSrc] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);\n  const [selectedFile, setFile] = react__WEBPACK_IMPORTED_MODULE_3___default().useState(null);\n\n  const previewFile = Event => {\n    const reader = new FileReader();\n    var newFile = Event.target.files[0];\n    setFile(newFile);\n    reader.addEventListener(\"load\", function () {\n      // convert image file to base64 string\n      var fileSrc = reader.result;\n      setSrc(fileSrc);\n      console.log('Render result:', reader.result);\n    }, false);\n\n    if (newFile) {\n      reader.readAsDataURL(newFile);\n    }\n  }; // async -> synt sug to be able to deal w/ promise chains. \n\n\n  const analyzeImage = () => {\n    console.log(\"analyze button clicked!\");\n    const url = `https://plant-prediction-service.azurewebsites.net/predict`;\n    var imageData = src;\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post(url, {\n      image: imageData\n    }).then(res => {\n      // expects a resp. obj. \n      // usually call a setter for a piece of state. --> load plant care page. \n      // next --> redirect to new location.\n      console.log(\"Successful request~\");\n      console.log(\"This is what the response object looks like: \", res);\n      console.log(res.data.predictions[0].label);\n      const plantName = res.data.predictions[0].label;\n      router.push(plantName); // router.push(\"/Plant/aloe\")\n\n      router.push(`/Plant/${plantName}`);\n    }).catch(function (error) {\n      if (error.response) {\n        // The request was made and the server responded with a status code\n        // that falls out of the range of 2xx\n        console.log(error.response.data);\n        console.log(error.response.status);\n        console.log(error.response.headers);\n      } else if (error.request) {\n        // The request was made but no response was received\n        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of\n        // http.ClientRequest in node.js\n        console.log(error.request);\n      } else {\n        // Something happened in setting up the request that triggered an Error\n        console.log('Error', error.message);\n      }\n\n      console.log(error.config);\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n      children: \"Camera\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_WebcamComponent__WEBPACK_IMPORTED_MODULE_2__.default, {\n      setSource: setSrc\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n        children: \"Upload a file\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        type: \"file\",\n        name: \"file\",\n        onChange: previewFile\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n      src: src,\n      height: \"200\",\n      alt: \"Image preview...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 13\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n      onClick: analyzeImage,\n      children: \" Analyze Image \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob3VzZXBsYW50LWFwcC8uL3BhZ2VzL2NhbWVyYS5qcz85MTU1Il0sIm5hbWVzIjpbIkNhbWVyYSIsInJvdXRlciIsInVzZVJvdXRlciIsInNyYyIsInNldFNyYyIsIlJlYWN0Iiwic2VsZWN0ZWRGaWxlIiwic2V0RmlsZSIsInByZXZpZXdGaWxlIiwiRXZlbnQiLCJyZWFkZXIiLCJGaWxlUmVhZGVyIiwibmV3RmlsZSIsInRhcmdldCIsImZpbGVzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbGVTcmMiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwicmVhZEFzRGF0YVVSTCIsImFuYWx5emVJbWFnZSIsInVybCIsImltYWdlRGF0YSIsImF4aW9zIiwiaW1hZ2UiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInByZWRpY3Rpb25zIiwibGFiZWwiLCJwbGFudE5hbWUiLCJwdXNoIiwiY2F0Y2giLCJlcnJvciIsInJlc3BvbnNlIiwic3RhdHVzIiwiaGVhZGVycyIsInJlcXVlc3QiLCJtZXNzYWdlIiwiY29uZmlnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULEdBQWtCO0FBQzdCLFFBQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFFQSxRQUFNLENBQUNDLEdBQUQsRUFBTUMsTUFBTixJQUFnQkMscURBQUEsQ0FBZSxJQUFmLENBQXRCO0FBQ0EsUUFBTSxDQUFDQyxZQUFELEVBQWVDLE9BQWYsSUFBMEJGLHFEQUFBLENBQWUsSUFBZixDQUFoQzs7QUFFQSxRQUFNRyxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUMzQixVQUFNQyxNQUFNLEdBQUcsSUFBSUMsVUFBSixFQUFmO0FBQ0EsUUFBSUMsT0FBTyxHQUFHSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixDQUFuQixDQUFkO0FBQ0FQLFdBQU8sQ0FBQ0ssT0FBRCxDQUFQO0FBRUFGLFVBQU0sQ0FBQ0ssZ0JB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QUFBQSxZQWJKO0FBQUEsa0JBREo7QUFpQkgiLCJmaWxlIjoiLi9wYWdlcy9jYW1lcmEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCBXZWJjYW1Db21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvV2ViY2FtQ29tcG9uZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYW1lcmEoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IFtzcmMsIHNldFNyY10gPSBSZWFjdC51c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtzZWxlY3RlZEZpbGUsIHNldEZpbGVdID0gUmVhY3QudXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IHByZXZpZXdGaWxlID0gKEV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHZhciBuZXdGaWxlID0gRXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgICAgIHNldEZpbGUobmV3RmlsZSlcblxuICAgICAgICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY29udmVydCBpbWFnZSBmaWxlIHRvIGJhc2U2NCBzdHJpbmdcbiAgICAgICAgICAgIHZhciBmaWxlU3JjID0gcmVhZGVyLnJlc3VsdDtcbiAgICAgICAgICAgIHNldFNyYyhmaWxlU3JjKVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnUmVuZGVyIHJlc3VsdDonLCByZWFkZXIucmVzdWx0KVxuICAgICAgICB9LCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKG5ld0ZpbGUpIHtcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKG5ld0ZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGFzeW5jIC0+IHN5bnQgc3VnIHRvIGJlIGFibGUgdG8gZGVhbCB3LyBwcm9taXNlIGNoYWlucy4gXG4gICAgY29uc3QgYW5hbHl6ZUltYWdlID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFuYWx5emUgYnV0dG9uIGNsaWNrZWQhXCIpXG5cbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vcGxhbnQtcHJlZGljdGlvbi1zZXJ2aWNlLmF6dXJld2Vic2l0ZXMubmV0L3ByZWRpY3RgXG4gICAgICAgIHZhciBpbWFnZURhdGEgPSBzcmNcblxuICAgICAgICBheGlvc1xuICAgICAgICAgICAgLnBvc3QodXJsLCB7XG4gICAgICAgICAgICAgICAgaW1hZ2U6IGltYWdlRGF0YVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBleHBlY3RzIGEgcmVzcC4gb2JqLiBcbiAgICAgICAgICAgICAgICAvLyB1c3VhbGx5IGNhbGwgYSBzZXR0ZXIgZm9yIGEgcGllY2Ugb2Ygc3RhdGUuIC0tPiBsb2FkIHBsYW50IGNhcmUgcGFnZS4gXG4gICAgICAgICAgICAgICAgLy8gbmV4dCAtLT4gcmVkaXJlY3QgdG8gbmV3IGxvY2F0aW9uLlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bCByZXF1ZXN0flwiKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3aGF0IHRoZSByZXNwb25zZSBvYmplY3QgbG9va3MgbGlrZTogXCIsIHJlcylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YS5wcmVkaWN0aW9uc1swXS5sYWJlbClcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFudE5hbWUgPSByZXMuZGF0YS5wcmVkaWN0aW9uc1swXS5sYWJlbFxuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKHBsYW50TmFtZSlcbiAgICAgICAgICAgICAgICAvLyByb3V0ZXIucHVzaChcIi9QbGFudC9hbG9lXCIpXG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC9QbGFudC8ke3BsYW50TmFtZX1gKVxuXG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGFuZCB0aGUgc2VydmVyIHJlc3BvbmRlZCB3aXRoIGEgc3RhdHVzIGNvZGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhhdCBmYWxscyBvdXQgb2YgdGhlIHJhbmdlIG9mIDJ4eFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2Uuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuaGVhZGVycyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSByZXF1ZXN0IHdhcyBtYWRlIGJ1dCBubyByZXNwb25zZSB3YXMgcmVjZWl2ZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gYGVycm9yLnJlcXVlc3RgIGlzIGFuIGluc3RhbmNlIG9mIFhNTEh0dHBSZXF1ZXN0IGluIHRoZSBicm93c2VyIGFuZCBhbiBpbnN0YW5jZSBvZlxuICAgICAgICAgICAgICAgICAgICAvLyBodHRwLkNsaWVudFJlcXVlc3QgaW4gbm9kZS5qc1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBTb21ldGhpbmcgaGFwcGVuZWQgaW4gc2V0dGluZyB1cCB0aGUgcmVxdWVzdCB0aGF0IHRyaWdnZXJlZCBhbiBFcnJvclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IuY29uZmlnKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDE+XG4gICAgICAgICAgICAgICAgQ2FtZXJhXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgey8qIG1heWJlIGFkZCBhIGNoZWNrIGZvciBmaWxlIGV4dGVuc2lvbiAtIGZvcm0gdmFsaWRhdGlvbiAqL31cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPFdlYmNhbUNvbXBvbmVudCBzZXRTb3VyY2U9e3NldFNyY30gLz5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5VcGxvYWQgYSBmaWxlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBuYW1lPVwiZmlsZVwiIG9uQ2hhbmdlPXtwcmV2aWV3RmlsZX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtzcmN9IGhlaWdodD1cIjIwMFwiIGFsdD1cIkltYWdlIHByZXZpZXcuLi5cIiAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FuYWx5emVJbWFnZX0+IEFuYWx5emUgSW1hZ2UgPC9idXR0b24+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/camera.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
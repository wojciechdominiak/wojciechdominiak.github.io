/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar date_js_1 = __webpack_require__(/*! ./js/date.js */ \"./src/js/date.js\");\r\nvar closeLinks_js_1 = __webpack_require__(/*! ./js/closeLinks.js */ \"./src/js/closeLinks.js\");\r\n/* import projectsBtn from \"./js/projectsBtn.js\";\r\nimport smoothScroll from \"./js/smmothScroll.js\"; */\r\n(0, date_js_1[\"default\"])();\r\n/* projectsBtn();\r\n\r\nsmoothScroll(); */\r\n(0, closeLinks_js_1[\"default\"])();\r\n\n\n//# sourceURL=webpack://wdwebsite/./src/app.js?");

/***/ }),

/***/ "./src/js/closeLinks.js":
/*!******************************!*\
  !*** ./src/js/closeLinks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nfunction closeLinks() {\r\n    {\r\n        var navToggle = document.querySelector(\".nav-header__toggle\");\r\n        var linksContainer_1 = document.querySelector(\".links-container\");\r\n        var links_1 = document.querySelector(\".links\");\r\n        navToggle.addEventListener(\"click\", function () {\r\n            var linksHeight = links_1.getBoundingClientRect().height;\r\n            var containerHeight = linksContainer_1.getBoundingClientRect().height;\r\n            containerHeight === 0\r\n                ? (linksContainer_1.style.height = \"\".concat(linksHeight, \"px\"))\r\n                : (linksContainer_1.style.height = \"0\");\r\n        });\r\n        var navbar = document.getElementById(\"nav\");\r\n    }\r\n}\r\nexports[\"default\"] = closeLinks;\r\n\n\n//# sourceURL=webpack://wdwebsite/./src/js/closeLinks.js?");

/***/ }),

/***/ "./src/js/date.js":
/*!************************!*\
  !*** ./src/js/date.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\r\nexports.__esModule = true;\r\nfunction date() {\r\n    {\r\n        var date_1 = document.getElementById(\"date\");\r\n        date_1.innerText = new Date().getFullYear().toString();\r\n    }\r\n}\r\nexports[\"default\"] = date;\r\n\n\n//# sourceURL=webpack://wdwebsite/./src/js/date.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
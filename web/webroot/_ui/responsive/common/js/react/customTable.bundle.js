/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CustomTable/CustomTable.jsx":
/*!*****************************************!*\
  !*** ./src/CustomTable/CustomTable.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TableCustomizationExample: () => (/* binding */ TableCustomizationExample)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Grommet/Grommet.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Data/Data.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Toolbar/Toolbar.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/DataSearch/DataSearch.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/DataFilters/DataFilters.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/DataTableColumns/DataTableColumns.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Menu/Menu.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/DataSummary/DataSummary.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/DataTable/DataTable.js");
/* harmony import */ var grommet_theme_hpe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-theme-hpe */ "./node_modules/grommet-theme-hpe/dist/es6/themes/hpe.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// TableCustomizationExample.js



var COLUMNS = [{
  property: 'name',
  header: 'Name',
  primary: true,
  pin: true
}, {
  property: 'status',
  header: 'Status'
}, {
  property: 'role',
  header: 'Role'
}, {
  property: 'location',
  header: 'Location'
}, {
  property: 'hoursAvailable',
  header: 'Hours available',
  align: 'end'
}];
var allData = [{
  location: 'San Jose, CA',
  hoursAvailable: 10,
  role: 'Engineer',
  name: 'Eric Soderberg',
  status: 'Online'
}, {
  location: 'San Jose, CA',
  hoursAvailable: 30,
  role: 'Engineer',
  name: 'Taylor Seamans',
  status: 'Online'
}, {
  location: 'Fort Collins, CO',
  hoursAvailable: 25,
  role: 'Engineer',
  name: 'Matthew Glissmann',
  status: 'Offline'
}, {
  location: 'Fort Collins, CO',
  hoursAvailable: 5,
  role: 'Designer',
  name: 'Greg Furuiye',
  status: 'Online'
}, {
  location: 'San Jose, CA',
  hoursAvailable: 25,
  role: 'Designer',
  name: 'Vicky Avalos',
  status: 'Offline'
}, {
  location: 'Fort Collins, CO',
  hoursAvailable: 12,
  role: 'Engineer',
  name: 'Shimi Yacobi',
  status: 'Online'
}];

// Define data structure for DataTableColumns sorting
var options = COLUMNS.map(function (_ref) {
  var header = _ref.header,
    property = _ref.property;
  return {
    property: property,
    label: header
  };
});

// Use options const to define data structure for Data component properties
var buildProperties = function buildProperties() {
  var dict = {};
  for (var i = 0; i < options.length; i += 1) {
    var label = options[i].label;
    if (options[i].property === 'hoursAvailable') {
      dict[options[i].property] = {
        label: label,
        range: {
          min: 0,
          max: 40
        }
      };
    } else {
      dict[options[i].property] = {
        label: label
      };
    }
  }
  return dict;
};
var TableCustomizationExample = function TableCustomizationExample() {
  return /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_1__.Grommet, {
    theme: grommet_theme_hpe__WEBPACK_IMPORTED_MODULE_2__.hpe
  }, /*#__PURE__*/React.createElement(Results, null));
};
var Results = function Results() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    select = _useState2[0],
    setSelect = _useState2[1];
  var properties = buildProperties();
  // return (
  //   <Data data={allData} flex properties={properties}>
  //     <DataTable
  //       aria-describedby="users-heading"
  //       background="background"
  //       columns={COLUMNS}
  //       select={select}
  //       onSelect={setSelect}
  //       pin
  //     />
  //   </Data>
  // );

  return /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Data, {
    data: allData,
    flex: true,
    properties: properties
  }, /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Toolbar, {
    gap: "medium"
  }, /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Toolbar, null, /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_5__.DataSearch, {
    responsive: true
  }), /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_6__.DataFilters, {
    layer: true
  })), /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.DataTableColumns, {
    drop: true,
    options: options
  }), /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__.Box, {
    flex: true
  }), /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_9__.Menu, {
    label: "Actions",
    kind: "toolbar"
  })), /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_10__.DataSummary, null), /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_8__.Box, {
    overflow: "auto",
    flex: true
  }, /*#__PURE__*/React.createElement(grommet__WEBPACK_IMPORTED_MODULE_11__.DataTable, {
    "aria-describedby": "users-heading",
    background: "background",
    columns: COLUMNS,
    select: select,
    onSelect: setSelect,
    pin: true
  })));
};

// export default

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"customTable": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkvite_react_starter"] = self["webpackChunkvite_react_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/CustomTable/CustomTable.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=customTable.bundle.js.map
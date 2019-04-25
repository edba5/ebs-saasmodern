module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!****************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!**************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!**************************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!***********************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!***************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!***************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!*********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!**********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js":
/*!*************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/construct.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(/*! ../core-js/reflect/construct */ "../../node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = _Reflect$construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!**********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!**********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!****************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!***********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*******************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!************************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!*********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!*****************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!*****************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!**********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css":
/*!************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/@glidejs/glide/dist/css/glide.core.min.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/flaticon.css":
/*!****************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/css/flaticon.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/common/src/assets/css/style.js":
/*!************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/css/style.js ***!
  \************************************************************************************************/
/*! exports provided: ResetCSS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetCSS", function() { return ResetCSS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flaticon.css */ "../../node_modules/common/src/assets/css/flaticon.css");
/* harmony import */ var _flaticon_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_flaticon_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ::selection {\n    background: #333333;\n    color: #ffffff;\n  }\n\n  html {\n    box-sizing: border-box;\n    -ms-overflow-style: scrollbar;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  html,\n  html a,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  a,\n  p,\n  li,\n  dl,\n  th,\n  dt,\n  input,\n  textarea,\n  span,\n  div {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\n  }\n\n  body {\n    margin: 0;\n    padding: 0;\n    overflow-x: hidden;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  ul {\n    margin: 0;\n    padding: 0;\n  }\n\n  li {\n    list-style-type: none;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  a:hover {\n    text-decoration: none;\n  }\n\n  // modal default style\n  .reuseModalOverlay {\n    z-index: 99999 !important;\n  }\n\n  .reuseModalHolder {\n    padding: 0 !important;\n    &.demo_switcher_modal {\n      border: 0 !important;\n      background-color: rgba(16, 30, 77, 0.9) !important;\n      .innerRndComponent {\n        border-radius: 8px !important;\n        @media (min-width: 1201px) {\n          width: calc(100% + 20px);\n        }\n      }\n    }\n  }\n\n  button.modalCloseBtn {\n    position: fixed !important;\n    z-index: 999991 !important;\n    background-color: transparent !important;\n    top: 10px !important;\n    right: 10px !important;\n    min-width: 34px !important;\n    min-height: 34px !important;\n    padding: 0 !important;\n    span.btn-icon {\n      font-size: 22px !important;\n      transform: rotate(45deg) !important;\n    }\n\n    &.alt {\n      border-radius: 50% !important;\n      z-index: 999999 !important;\n      padding: 0 !important;\n      transition: all 0.3s ease !important;\n      top: 25px !important;\n      right: 30px !important;\n      min-width: 40px !important;\n      min-height: 40px !important;\n\n      span.btn-icon {\n        font-size: 20px !important;\n      }\n\n      &:hover {\n        opacity: 0.88 !important;\n      }\n    }   \n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var ResetCSS = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-1.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-1.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-1-30fb5aa7837ecaa44b985aca7225d60f.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-10.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-10.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-10-eaae2e7c2ffea9af83b2db28db645356.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-11.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-11.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-11-461c627e0d63134bed1fea786d58e4f3.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-12.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-12.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-12-21b395963ad8d3be7a1ec7e23706004f.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-2.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-2.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-2-d8d26eb5f919016859aad135730ab245.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-3.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-3.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-3-e8bc7a231820698e653d60cc89e69932.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-4.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-4.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-4-c32a2ed4a922a31208a1143fdcabb547.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-5.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-5.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-5-05684033e3598200950bc9eef8501b5a.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-6.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-6.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-6-54f696b792171e72dfe106a47e82e6ae.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-7.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-7.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-7-af3e5f5ae648af82bcb898d089933398.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-8.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-8.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-8-286e011147590e57c2c725ec7635f4f4.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/demoThumb/demo-9.jpg":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/demoThumb/demo-9.jpg ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/demo-9-386552381b50bebf298df2ea6c0eb9fe.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/envato-logo.png":
/*!*********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/envato-logo.png ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/avatar.png":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/avatar.png ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-1.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/award-1.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/award-1-ae833685c1c2b137760eb0a5ef108e86.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-2.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/award-2.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/award-2-4bdc14c41fb13221dd369336e12c7125.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-3.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/award-3.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/award-3-ba14dc88cf7fc3293cfef7760c34eef7.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/award-4.png":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/award-4.png ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-1.png":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/awardee-1.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAATCAYAAAAAn1R6AAADFElEQVRIibWWS0hVURSGv5tHe2gpPSYdizYETSoNIhoE2SwaBEJQOTKMKKIoomkviCZB5aAHYk0MalQkhVBB4KBBEUYISnV3D88lMqzutYy0x+Dsretsz+MS9MPh7LXXv/b67937rLVz+fzQAaCddOwC6oBzGTwLDVwCzgPjZu5PCr9DKX/PtEV08ARYmxBz0gPuAu8zxDwDKoE3GTwXS4HXZtycwiu5E1oHFcDplJgBD/CBpgwRBWB2GTwXTcAAcDkrVuvgu1L+YzG1HViXEvLDAxYBjRkieoCaMnhxWAFcKSO2AEjxmwl3Lgl9uXx+yBozgHnC+YuY7TSYC1QIu2T4ADmg1uEXgd9mXAXMSVi3pJT/S+sgk2MFWywFPounNyEY45PcVcJX6/g+Oz+mJcZvnxbDaU/hTObyxKIfgE3CHk0Rv5vwGFm8cuLkOhMmqUWP45comHcncCOBM5lLiq8BWoX9DniasMBWouexNYEHcMqxl6fxtQ5ukV6Z8pg/Vor3gGXCnkhZYLHDTcJ9k0yixokdAeYLezfhN2XxDagWdpUdyA/WA+oF6SdT2+hisVwkBcMmuUQNsFDYRbPWrJj4EjDTyVVQyv9pBVvUE3ZGi+ckl7d7QEOWcqAf2AB8EXPbgGvCvkC4y0di4vcC+5xca4A+iIovGIfFWIqo7YRN619wx8ljd6crhjsIPHJyDdqBFF8HnBC2Bg4nCNgLKGEfZmrXqoHrwjcO7GCqDzQCB4W/Wym/U+tgJ2FDs3iolN+ndZCYS9b5/4VKpjetOPRn2NOQy+eHFgBLMniBeftliIjDc2Al0a5sMayUHwBoHTQQdugxpfxBM7eC+CP60SOsqR0Zye3xKfdKLPGWsDT2Er8DF4BDYrwRuAq0mbmbxBeHs55xPsgQMGLet8uWPAXbqVcTf0yLYtxM+ANHxNwW4svyVw9YD+zPENBp3m2prChGgePAJ2OfIdpsLLrF+kXgmFK+LBRHiX6wFrc84AXZx8HeJ4qprBC/ga/AS6Ll9iLR6mYx2SXNjfKM4+8ieo+yeP8XlRzQzR0V/r0AAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-2.png":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/awardee-2.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAU0lEQVRYhWOcPHGpLwP54BiUtiLXACYKLKcKGHXAqANGHTDqgFEHjDpgwB3AwoCoUskBn6A02WYMihAguzHBMNogGXXAqANGHTDqgFEHjDqACgAAmfsHErcMwooAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-3.png":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/awardee-3.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAgCAYAAAD5VeO1AAADg0lEQVRIiZWW63IMURDHf3sTm9hNEESkKJUi7h+IW7mUKl88wzzD1LyLMa9g3oIvKEIQFFISFBLJbghCLjY3H7p752TsJnTV1jmnu89/z/mfvkzmxvWbrCNbgb1AJ9CquhowDYwBk37grTbbnG2iLwD9wEUFb3Vsm4AutV+Owrj0P+CbgUvAbl3PA2+Bp8ATYBj4rrYycCkK4+3/Ap4DzgFtwCrwErgFvEJoGAdGgDvAQ4SiHHA6CuO2jcD7gJICPwLe6byRVIC7wCJC44n1wFuA/Tof1c2uXyfQDRQd/SzwTOedURhvawberetlhGOTEnAFOA+cAq4CB8zoB94E8EOXe5qB26NMIVc1+xnkDWp60gxwCIkYk4kUxl/gW3T86eh2IGE4B9zW3ye17XX8ZnTc3Aw8r2PN0bXoOO3cxt7C5X5Jx1wzcNvs/vtc6gY5YJ/qfjl+lmSLjq5+WnMuIylv8hX4prqrwIoeaBUJUxPjf8bRrTl5VcdtSISgIIPAF8d/QXXfAKIwbnfA3fBdc/IJ4AhSO44CAwq+ANxH6MojEWOJVQBO6nyR5LH/Al8C3gDHEI6PAy8coAXWSgEJU4uy137gLeltutPgAO8VeBfycFuQgjWf8isqcFnX437gfVDgEpJsDaviYySRQJLiSMpeQqqmAVeAIce+ySaNwJcRvoeB30jEmBSAsyTx/wkY9ANvpQFOnZYsEmYmq0hpHUn5HyRJnlGE50a4ddALwDWS8FvP11K+CrzewJ8sEtc5oCNly6XW7SQ3fWPKKIwL64GbuE7tyG36G/jWSNpcL3AtCuO+Bn5LeSTMikhZNSmq024kKmaQhx0gSaIcSXMpO3sNZz5LUuh3OA5TJElzmoSyqoLb14E9rpuZO3X8ngcmkdrQpoYqEo5DSKK0InH9Ban1BSTJjMaPfuBNAkRhXHTAK1mkplgNP0zC2RTSpM3WqTT0KLCF63Pn1MeQTjUPVPJITRlBilUZqSnWdKtI9+lR8KL6TysVsxbnURj3klTHYT/wVjL6OZdBGrD1wDE90TIbSwZJroO6nvADbxCHAqvb1j97kI6/h+affBkkCC46wNNIoQPWVsUacA+paNbWTiI0TCGdqobw3ao+Lc7+z8CQH3j126ZL7iLwACm3fbo5T/Ld2EjmEI7H04Y0uMkH5MG69Nehp80gFM4ibW4SqDT7jP4DOFTpNzMkc7IAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/awardee-4.png":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/awardee-4.png ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAACfUlEQVRIibXXS4iPURjH8Y9pUozLjFuxQCYlyT1KKfcUZTVYuZSkXBY2SE3Khg0LRMktJSIrG7dSo1yiZudWVoMZmlxy1xiL83/zn7/zXv6Y3+at8zzv8z3ve855nuf0aWvrUFCDsByLMRVj0ICv6MRT3MUV3EF3VrA+BcDD0Iz1GFBwko+xD2fxM+ZQkzUpbMFzbK0CChNwWvjy8dWA++ICDmFgFcBKzcJDLKw01Eac++Eylv4DsFyf8aoI+FhB6Bu0l2KMFSZcqXYswKNKQ+Wv3oA1GbB27EIjRmAyJgrLMRfn/d5MLzEvBqXnrh6KJ6VnTCewHR8yJqYEO4DVwhGLqvxX78iANmNvDjDRLUzPc0q+uA5tqI/4XMJKOQmhWiVrvCQF+h6b/ze0HLwsxX4Sr/83lN9rPDXFfjHn/Uk4+Bfc1gQ8LmL8gQc5Aeqx6C/AE2qEnNwQMXaW4L2hhqwi0ZvqXyPs2LcR4zChWPSGPiRr/BwzKoy1QnW5nRHgo1B90lSLKZHx1wm4NQImJI4scCtmZthn4V5k/GmyxldSXlyL4RmB89SUMn4vAV/Hu4jDIBwRdn61GoONKbarCfgTjqc4NSleIBLV4Zww8Uo9w/3y47RfOLsx7cYpDC4AHYWbmJNiP0jPRqATOzMCrhO6x53+zHQ1QlOwX6jps1NiPBbqerS9PSO7C0n0Bh3CWR8pvynswny0EO+5NgltTV7fNVzxHd8ttMgtyUAsZX7BCvmVqai6sA1HywfTcvV3rBJmmddjZemF8OcOVxqyikR36YVGobH/WAWwA3uEG8WNmEORu1Oi5NK2CNMwGkOES9tbId8/LIGu4VtWsF9BdIT6YjeVUgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-1.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-1.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAYklEQVRIiWP8GCj9n4E8ENhfzcvAwMCwnhzNTGRaSjEYtXjU4lGLRy0etXjwW8zCwMAQSKbek1CaLP0s/DFXyLSXgeH3Bymy9bIwkFmfMiB8Olofj1o8avGoxaMWj1pMXQAAb1ALE5zpqXkAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-2.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-2.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAeCAYAAAA/xX6fAAADV0lEQVRIia3XW4iVVRQH8N85TqVlYqXdHLsShNVLUBg9GJU+1DR2tYuQTnmgh+hiZWOFGlYqQRH20uXBLKSmTErJ0qzMKXsJKghFiqYoo4vQxS4T2vSw9tf55sx35pxTs+Cw97f2Xuu/19prr7VOqW/WbC3QdCzA2SjhQzyEzc0qKLcAtgSbcCHG4VCcl3gLRhqwE4vRj1swHodgDn7Bclw0UoAHYWWaV9L8Z/yO1bgira3EgSMBWMFx2I5nC9bfxFqchK7/Czga3Wm+cJh9i7Af92pgZSPACibhHWwdZt8OvIDJuPG/AuatW9zgYLAUf+Mece8tA1ZwLN7Cu00A7sTzaMe8VgHHaM26jB4QVi4UHmoaMLNuM3pbANyBHnHvlWYBx+DuNF9Ss9aBV/F1+q3H5TV7Miu7FVhZBNglrNuE9xOvJB72elyCsSLTdIg3+GTaA5/ipaRjyLusBWzDXWn+YI4/DzfjG5FLD8PhOB99wn035PYvw0DS1TYc4LU4Ae8ZHJnz03gltiRlA3gb16W1W3P7P8JGnIir6wGWVO9uWY4/Dqcm6z4wlLbjO5yBg3P8TEe3qrsHAc7EafgErxUc6rcCsIz+KtDXi204Xdz7kA1Zrlwu3JXRT9gj3DO2AGy8CJAfsLdmLW/lIMALRBX/DC8WKN2CA/InzdFlGKU4G70u7vMcEWD/AmaR+TD2FQj2pPHOGn4Jt6f56gK5AeExUldQxhTMwLeK6x28gl04E7Ny/LkiWHZiQx3ZtfgqYUwp4/p00qfwRx2hfbgjzR/DBByNFYk3X2SXerKPJ4y5ZdEIUXx3edqAdQloFZ7BRFEHNzaQXZfGaW04Jn3saiBEZJSzcHH67sNNTch9mcaJZdX3NaEJwT3C9Rk9LZ5NI5qUxt1l1QTd2YRgp+hb+kUPs8jgIKpHl6axtyyqwH5RitrrCGTh/7IIgpm4Jq2tESFfr7aegvvwJ54o42M8iqNEOupUzfCjRHXYikdE09uBN0QJukr0pytEwp8hEgTR18wWCeEI3I8vSum/RSmBZhn/V3yPI0VLT/SfXaLw5ulkPIep6bsfu0UwjhaPf6nUqmRuGMBtmCbCfC+OF0GyRkTl9AIw+BznisrfIypHO35MuqbK9UX/AICMuF0dXQYoAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-3.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-3.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAeCAYAAABqpJ3BAAACkUlEQVRYhd3Y24uNURgG8N+MCTOOUSJS45RCJMXk0NzIldxQkiSJyKH4B/wBrp1zQ264oEm54AKFEjmETLhACjmVFDN8LtY3Zu9tz95r7Zlpx1Or3fet9T7vs9b61vu+aw8xuDiALrwaZD+DgqXoxnOMqrOWZDThIbK8HayvnHTs1is+ww/MrquiBDTjjeIJZDhXT1Ep2O5v8Rl+Yk4ddUXjrvITyHCojrqiMEff4jN8xvCBdNiEE3iPTtzA037wra7SPwYr0dEPH7OwRAgKk+CO4lV6iyNoR0Mi+RWVdyDDsUTOBqzI7UqDw304WcHZI2wWdqoaGvElYgKPIoU3YSPuVeA6DVsina6q4rA1gqcnGlXLzO14EMG1A6ZFOs5wCqMrOI3lmd8HRzMOJ/D8CcsPE4w6lc+q6xM41pSxb61Bh8bc+GwfK1IOM4VotaTkfUsCx4iS54U559wEjqLMPlUoe2NnnwkHdnEBx7YE2x0FdvOE/JDi+ydm0BtdXgoV46KEFYC92IpveIbLkXbP8t8W7MPtRL/3Czj+bZQmqjYhaaTiNS4KhVwMjgtheWoNvm7gel+dE/BR2vfY800ux/eIsV1CAOiuwc9nTC4UXK5UWIejcYtRhDsYggVVxj3GJ+HKmYo98uz736BSsTZdiM/0bl+90ClEyiQ045L073Sg2zVpSbIIw3CmjuI7/J21ixBT7zdgbNR0Bx5f8KvSgNQLSwsmRoz7iHEl7z5gfITtO3xN1BWNRmwQDlWlrV+LJwXPncJ1s5LNG+wUd3nqN5qEkvi88KdVqZj9QrL6nre2XFy5BHgVm4TzVpOQWtCNC3kbj2VCCTIfUzASt7ALQ3Ez73+JF0Ixdk0oCd7XqAH8BkV8lnJm4Q2BAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-4.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-4.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAeCAYAAACG0fjXAAAC9klEQVRoge2azWsTQRiHn4Ro63c8CH6U5CL4BwhSoeLNS0EPYj2IB1EPPRkQxIsKXgS9i7QVRKgHL6KIouIhmOpBvXgTT36AHqSm1trGpo2H2dV1+85kZjYNG8wDA9nd92Mymfnx7kwyxVK5CmzAnVvAEWAQuO/hH9IAvgDPgRHgsWAzDFx1iDkGnGxisxr4DKy3jDkF5LMOnVguMsAW4CDwCLgLbEoYcwjobWKzH/vB+kOmWCrnUZ125RcwA6wA1nr4m5gF5iLXPagZ4cJ3YMHwfBXNBzVKA6jmgKpjR+LMA98SxmhGLWitZDZoTmRRA9bwaONBjEFPf5t2Osgx7OE7B+Q13/uMR7xqOGBp5nAC3x7ggObZkG/QtGpYSPjL+mgYqFkmLbuNvn35XzXMu7/SknyGvIYvWcYsaPwbwIDGZ9zgI83eAYN9vJ2K+GWAd5Z+b6SOpl3D3gI/EsY4GvncD2xPEixTLJXj99YBOcFWpwdxsujfHKaBunB/DbBSuD+PPGA5VD9tCZegixYuoGq5JYnjTDt0RGIRd42YCZotdY8c0AItbLeGubQLhhwuGtYAPgG7Nc8WNfc7SsOuAxc9fV8L97YB1zT2Ey7BpSW5xyWAwAf86joXKm3IIZLWGZZa0qphY5hnkEnDCsAVyzx7gbOaZx2lYceBcwn8b1rYfERNDiekOqyLAUn0O71wnUKVCs02BcI6rhe1mRhHLFylJfkAmBTaeUPyKH0a/0nUq4nEiMb+lca+35CjL7DZCnzV2DyNxCppbCpS4rRqWMgO/LeO3qPXKBuNE+lqmCM5lN74zLQ6SpPasYHokiPUsJD496sBPyPXOg2TqOZQ9UbB0iFKBfVWsI9k55ImXgK7HHMUUW8bIaPAocj1MeBG5LqEfY2ZinNJE7dbECOqVzXgTpJgXQ1zJK0aFj/ITaJh8HfjUDrc7XgNuwec4N8BS6JhADuBh8BmlhbfThomVfTtpoH6M8oEqoB9sgw5XgCX8TjpjvMby1B2cTwaZ5MAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-5.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-5.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAACcklEQVRYhcXXS4iNYRgH8N8MMjQxlEsNMiR3ilHuYsTCRi7Z2EtWFjZYSTYWCuOSEDuSbChZTWhKbjW5bUzuUi4zwsJwLN7vcOac95hvzjnDv55O3/M+533+7/c9t5fSMAcHcA+fkUEHHuAE5pe4b2oMx4XEcU9yGoP6gkQdnqQkkZUzfUHkUBFnj9CKb0XWJ1eSxEB/YiErn7Asx6YBbyJEtqVxUJ2SyDTU5un2oCXnuR3nI/+tT+Ogf0oi9zADEzAeo3AyYvcqohtaSSKE1HxQZG04RmNkZK2q0kRyN27EeizALCGjykJviTTiGOaW67gcIqtxCTV5+g7cEOJjsu6ZVHGMwAeFqblX92zaGrE5ksZB2jeyBcPydBexu8T9CpC2jjRFdFciukl9TSSWlh15z/2wNmLX0CtGPeC2wm9/PM9me8Qmg+9CIawIzkQc/MRBbBAC8kcRIhncrBSRpr84yZUuPIvo72BApcg090DiKzZhCjpz9JcVNsyyUCXUifY8Al9wDlNzbJcKY0KzEMSpNi8FY4RG14mXwieJ7Z0pcf//h1LfSDkYK3TtemG8vIW7cBgr/gGBGuEG8BwPk9+MkPaDCQPNTVzDyj4mk5/C+4Vsq6rGW+GN3MdVtAlVMlbWy0E1FuKoMGTXJdIiEtSLEiLZ4nQdO7FE4RySBvXYKAxT2Qm/FTOFTv0am4kHa79kcQem5+i78BSP8QLvhGDLNr/a5ITjhC48SZhjsmjDPqHmZLAGu5JD/vjbaaqwCmcTZ7254WXlPU5heeTQ64TbwG9naVCDeViM2ZiYnLwGQ/AxkXfCpH9H6Nh3ezptFr8AyETYvMw1CkYAAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-6.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-6.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAeCAYAAADQBxWhAAADZklEQVRIibWXb2gTZxzHP3fm2sak1YIXtBOZK4IiwtSL/16oJMUpMuh2KFE32AvpRBB9IaL2hb6pf/CF+mJ/2UA2BsdYRMEOhF5YfVPlgiCivtB2m1trbcS2aWpi0yS+SKLxvLukIX5f5X7f3/N8niP33H0fgQoUC/qbgM+BzYAfWAg0FexR4CHQB/wJ6LJuZJzmE8rAWoCTwBeAu5IFAv8B54DvZN2YrhgaC/oF4CBwagYws+4Be2TduFMWGgv6ZwMa8GmVsFKlCuDLpUWXBVAH1tUACDAFDJqLLtP1pQqBk8AToB5oAWZZ9MSBLbJu3DIbYvFHLOjfD+xwAI0BZ4AVQKOsG0tk3VgEeIGtQLep1xIIhf80FvT7yD/2TVZNwFWgQ9aNEYdFEQv6twPnAVXWjbt2fSKAp/2fE4g5u+3zI/BZOSCArBvdwFInIICQ7pG8wFB2vM6T+HXJcHZCainxe4Ct5Tb7TCUC24BGcc6U2LjvQYvUGn9c8F4CX9caWIR+UrwQXFk8OwcWuQNDw4J7+oqsGwO1BkJ+y6wyF+vXjsyvV2K/cM1+YKAr8TFwoQrmfRfwkaU1K9dXZvBcYFMV0OUiMMfCSElt6dEqJqxE88TyPbWXCIxb1BvSPVLze2JmXMAAsNLsvMi5NkH6isPgFPCvg+8CPrCoP3UBt83Q/umm/kPxdbuh2xYa6fTeBD608wNdiY1Ar4X1SASulxRyf6QW9385trn1WbahXdHUVvsbKatdNvW+N69BBI7HlWTv1AJfSUME2BINhWf0Vgp0JRYD94EGC7tNlNrSiWh63s87RwP1JiBAAPhW0dSKn/JAV6KYPKyAQ8BfIsCB8Q2nBzOepM08HcBlRVPNC3pHay8dWZYTJ28Aa2xaLkY6vZnXnzNFU/cD3zjMOQZ8D/wG3IuGwrnCOAlYDewB9gpZz4Rn8HizOLXQnEoeA8sind4Xb31DFU39Hef0UNQkMEw+rviAurdtIeke6UhJExuKez0HbIt0eq9DSVwp6CvyobmcPEAr+dBd966dcyd9PzQnfT/9j5ABOFYEgkUEVTS1lhEUKbH+bN/ew0dLa5YRRdHUWoTt50BHNBQOmw3HY4WiqdUcK+Lkc9XpaCj83KrBEVoCdzpAxYG/gSj5THUtGgonnOZ7BaWQB/oO0JdpAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg":
/*!***********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg":
/*!***********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg":
/*!***********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/client-avatar-3-d53e13a8e6ebfb866dddcd2704838223.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/dotted-line.png":
/*!*******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/dotted-line.png ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKEAAAAgCAYAAAB6vRjLAAADqUlEQVR4nO3cX4hVVRTH8c9Ml7IxiiwTnOyPjpWpZC8TFYFQFEXUQxZBERH07yGjoJcoiiAqLKggqCdfeigoSESCxAgioazUtBKTmSnCpD+j2Z/b6ND0sM7F6U7dO/fPnDMzd39hc87cc/c5i7N/s/Zea+99u7bvGjODuRHn41TMy0rl/E08V6PuAnyJ0zCCv7JjGUewHs/UeX43/m7e/MSqFZSKNuI/OB59OIDhGt9bindqXD+ktgi7swInZGU8V6otwrPwhXiHQxjAYFYG8AEO16ifyChahL24DMuxMjv24TjswbIadQfxvPB8B4Vgh8edb6vz7B+EN5yLE4UI52SlhL116le84NzM7uVV19/Gmjr3SChehLuEiKo5iE116o7ikRaff1R4zENN1B3CGcIjnltVFqlv/ym4D/vwkfD8HclUibAkPMsfdb63CWfjq6zszo4zpUFGRdc70ETd2/DsuL8HsVUI8kPxLjqCrjYGJstwVVZWi7HdSvGfnpjI6XgcV+Aix8anFdaILn1W047AZCkeE8JbWHXte/zZ4v1nMz/jwez8JFwixseX4xx8V4xZ+dOqCO/BHdl5WXQjm7EFO6X0xWT5XbyzLQ3UuVaIdQP2T4FNudFqd9wrxjbbxHhmpB1GJSbFj5iPMXyMt0T3PVSgTQ2zasX/i/A83CIGx7VycYniuBlrRffdNe7zz/EkNhZgU8NUi3A+bsXt6M8++1a4/MT0ZSFuEKJcLQKc90WyfdpTCUz68QSudmyMOIr3sK4g2xKTZz9ezco80Y6fFmpRg5TwtIhu4RO8jjfwU1FGJZpmWLRdPXpwsmmSjy3hUeH1Nqg/VZWYHWzGpWKy4BXR/oVlMrpFZLtOEmAn8ZkIZq7Hu6LtHxbdee5UZ+kTncFakQF5UcybL8ELYoLhrryNSSLsXL7BQyLXezd2iNVE/bUqTQXtnDtOzHz6xHThkbweOF0XtSaKo5DFJqk7TjRCD17GvWKVVFtIIkw0wsV4QCTG94kFLC33pkmEiUbYivtFknsRXhPbMO7UghiTCBONMCa84GIRWR8Q6Z312G7iZrFJkUSYaIayyDEuFvt8fsGZmhwnJhEmWqEsdjz2ig1fvzVzk5SiSbSDES0saE6eMJEXc8R+8gkkESbyYIEIYvaKRRP/IokwkQdl/CoCmY1iCdmSysUkwkQeHMaF4reBjuI68WNUT+3YrSctYEjkzQV4SWxDgK+TJ0zkzR5cg5vE9tSxfwDlcb7++Ri+EgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/logo-alt.png":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/logo-alt.png ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAApCAYAAAClfnCxAAAFYUlEQVRYhbXZd6hWZRwH8M8daWmmNsWGmLRtYtmi8hK0bdgkGn9UqA0KqYyIaNAfFVEWbSgpirRsL6JFAyyMKLMhWZptyyy7mrM/fufU8dwz3vde7xde3vf5nWd8n+f85vO2jDp8iRocjcuxM5ZjDmbiA3yI33L9d8FG+Khu4gL0wQScid3Qhi/xMKZgdbZzSw35O3BJzYKL8ANWYmiy2Dj83iTxLfAK9il5/gAuyAqqyB+PZ5ok8CAmio00gxa8jCMq+qzBEPyaClorOk9oYvG1mIzzNU+cIF1FnOC6fVbQXtF5JP7C10I1NsEIbJbrtxzn4onGuXbB6ZiFR3AhdijosxYLsoIq8pfhOfyTk28hjOmwZKET8W53GGewJ04WB/UEXhOHl8U0/JgVVKnNdF2JEzr3Ew7CgXpOnFC1r5PfP2EMnsSq5PMozssPqjr5ImyJ0bgBx+G7bpJNsQE2Fwa7DRbjb6GmpyT8WpTYUdXJE779Fnwq3sL7Qk0WYV4ivx27Nki2DWPxEOZiGZ4Xb/MLLBWq8TwuxuAy4pS7yiG4FWf4f4MPCz+bTnYVbsqMeRKT5IwqQSvOwTUYnpFPxD3J76F4y7rGugx34Ub82Qj5MXgs2UCKb0XkXJ6RtWN+smiKP3E2ns3IBiXzHZVb50vxZrMYmxubYi5OENH9P+TVZpyIckNy8vtyxAlDeiEn2wRP4dSkPQBvFxCHNwpkLwn3nMcOwgNtlRVmyY8WJ9SnZNIifF4gaxM6PRLXY4+SsfMKZKuEHRVhKK7NClJvMwCPKyb+Dz4rmXBRibwf7heqVoa/S+Q/VIzpyDZS8pOta0hZzJfL5jJYXLHQARXPKI4hsKJizIBsozURVGWOv1Y86wn6lcg3rBjzcbbRKoxr44oBVTnzsopndRhaIq/ick+20Y4jaxbZW+QVRdi8ZmzdvEXYpkR+r5x3a8deNYvMFDbRXRwrAt4GOXmHOP2sgQ7X1fcTJ95FtduVv74UKxW7tUYxRUTOK0Uc6ZvI+2CqSId/E6n2fdZ13+/hahEruqBdfX6zXTdJZ7FAeKZpeF1ko6NFKrww+QwWEfppkds/i9lVk7bjZwyr6DNSnFaZa6vD6IT0Suwk3O7UzPOW5LOm2YlbRf5chf7+D/fNogNvire3RnG8WKsbxAnyjVxRXCc20Qx2xwxxDULkJxc2OUclWkYdvuRovNhA36dFityI+gwTFVaR25stDPh7YQerRD6UYpBQo74ihZgv7ofmF5FvFyVYI4b5icjpZ5Y8b8Exwidv3cB8zWAWbpaJOWk+P14uetXgU1Gcfyv0eKAw7DFy1xO9gBk4C50p+TbxKg9eTwt8Ja5J2uo6dhPTcFrq41cLfV64HiZeIurc19bDXGU4FUdmA9RCHCpOrbv4Xej8HFyk3g33BOPz0XUe9hXF9tomJ3sP+yXfhBMYJS6RyuqBnuCwqovWvXApTpIrAjJYI1zinaJ2LdvwtrhbGPQs4Yk2Fbn7CuF+l6Iz+b2xMPx8MpfFirorbskE+4i7mS1FStEp1Gum8lIwRYfY3K4i/X61bsEEfUXhfoOuV38wtxHyPcHF4lKqVVRBZTl8FfqJFGO/nHxKXUbZE3SIPyfSNeZU9K1CJ67IyVbhrt4kP1lE3BRlNWsjmJVr34S5vUl+RK49RuQt3UE21Zgu7oNqC5Ge4J1ce6DI46tuB4rQIrJauE0E09X0LvkrxM1vFmOFChzf4NrDRCqwo3hzk2RiRm97m4GiBh2va6z4RXiR2SLdXS4Msb+ouPZP2lOTDXQpWHqbfIqNxB9mhwifvZ2IGRsmzzrxB74RxdEHouiu/PPiX9rpMkgKB8gnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/logo.png":
/*!************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/logo.png ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAApCAYAAAClfnCxAAAFRklEQVRYhbWZWWxWRRTHf99HK2uh0ILIGqiEioqamBANEekLaABjjEQfNPomIZgYH6zxwS3xQV8UE1B8IARRoRFwwwUNJBATdgggSGUpixiWWBAKXejfh3Nver/55t77Le0/meSbM2fOnJnvzFnmZiSRgnnAq0A9cBP4A9gB7AR2AZcd/ruAgcDeNMEe3AYsAp4HpgJZ4BiwClgK3MrhlpTUPlI6Lkg6IGm3pPOStkgakSLX10YGMuKwwp2TJOyJAhR38ZmkyhIUR9KvKbJvyTZYkPI/FaF0t6TXSlQaSXMKXGdGdF5Fgv3dA/wHHAcuAUOBOqDG4bsJvACsLcHGQzwL7AFWA4uBKR4eAadzKfGn8bSk/h76SEmPSnpL0kVJM8s48bDtk1QX/B4t6aDn1L9y55W6WL2kzZKm9ILiSNrp9GslNUnqDNpqSUPKVX6UpPmS9ksa3wtKV0q6Q9IuSeMkDXbGK5TgALIptlgPfAAcBNqB34EngYvAiYD+ITCtQNvuBywAVgLNwA3gu0DeUeAacD6gLQGGA52x0mJ2NVrS5zL3FGKlcwqvKxdNkibEyMtKelHSCWfOogjPGEnNznibpPclDfXJ9S00WxZsojgpaYDnLz3n8F2RxYcoX7WkTcrHUc/aCzx8knRM0rQ05Z+S1O6Z3OjbuaRPPbxdkhYG41Wy6OvDMo+8CklXY/jPSbo9yh+1+RnAF1h+4WJTjNUdibHrlViceAeYHjP3hIfWhd0jH8YAb0YJYZCqAr7Er3g7cDhG4KUY+iBgBZakxeF6DP3vhDkN0U6ofCMwKWZCC24214N/ExZ6KGEM7FB86EiYUxXtZAPCywkTLqYoUSoGxdAHJMzZH+1kgYXAkIQJVxLGbiSMpWFMDD1Jl+XRTgUwN2WRB4B1MWO1KXPT5PowLob+CfB9lJCR1AzcmbDIRqySKhXzsShd6dA7sHsWvaCTgL8gL/Ivx0y7K4cq6XqMXw2xLsbHF9OmS1oj6aYje7OkmoCnRtIvzvh2SbPi5FZ4duliQnEH7cVpzDOtA34DHsbiyn3A2aANB64CG7Dc/hvgUJLQjKRTwMQEnutYARLn2tIwI1C6EyuqXbebCVp3sYKzwD8pPIMxj1QKGoAt2L/XjT9eiBIUB1O+kCeKt7FNFIN7gfXYMwhYabe4SBmJyEh6HPihAN4NWK1ZiPlMBLbjd3uHgK3AOezNp53cwFSNmVF/zGRbsPehljxJQSbXkuJxQhyQU8E7LSNpnqSzBcorBrvVk60iiYwkgJdwolcKDgLfAqcw31sN3I3Z+OQi5JSC9cBzQFu4i36StvXiKf0py+v7CmvlFCPjJJ3pBcGtsqrnx16QlYS5rs1OVn4dWQwuq+cdp0755WRvYqPv0g2VFdvdRQrbrp6Ho7CNlT0W9YUJtYYX1of7gVewp46qGJ5uzCV+DHyNBRwfxgPLgNlY6B8LjMBcZAfmLq8BbcHvIdjFd5O5KDqSlA9RCTyIvc3UYml0G/ZuvoP4UjBEA7a5aVj6/XPaggH6A48B72L1sIvmcrPFtLZEPW8/+0qUMUjSDo/ZLO1LxRuUe2/WlCFrlqN4p6QpaelwOWjEwnyIuJq1EOxx+u/Rx2Zz3DmtVtnrWSmypkbkNMmCamohUg62Of1h2IexpNcBHzJYVgv2Ue0ZwtS6D09+lKQjysdh2XtmtgAZE4OT3iv7oJEzXoirLAfDgDewxM+NFRewQuUQcBL7PNQV8NUBM4P+KqwSyytY+lr5EAOBOcAjmM+eAIzCTGggFjdasU3sw77xbgXOJAn9H8pnsNW435MkAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/person.png":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/person.png ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/person-3586000cbe573af1e1fbc2f904dd62eb.png";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/portfolio-1.jpg":
/*!*******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/portfolio-1.jpg ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/portfolio-1-fd7f70fdb223cdef31fb791bfaaf951d.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/portfolio-2.jpg":
/*!*******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/portfolio-2.jpg ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/portfolio-2-d5d4cf436366a80272a1f33af4ca5342.jpg";

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-1.svg":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/skill-1.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzUiIGhlaWdodD0iNzMiIHZpZXdCb3g9IjAgMCA3NSA3MyI+DQogIDxpbWFnZSBpZD0ibm9kZXMiIHdpZHRoPSI3NSIgaGVpZ2h0PSI3MyIgeGxpbms6aHJlZj0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFc0FBQUJKQ0FZQUFBQjFodHZoQUFBQUJITkNTVlFJQ0FnSWZBaGtpQUFBQ2k1SlJFRlVlSnpsbkgyd0ZsVVp3SC92dlpmbFF4UlRCbkozU0IyVE1zaEo0VzBGek1rVmFiSVpwVUFZTkpqeUE2YVoxTEFaSjdVUkd0UnNkQlMxS1FvclIrSXJRSkdrR1EwMktralhSWnBobUlvcHhENTJBeXRBMFVzdWNOLysySE5oNzdQdng3NjdaN2sxL2Y2NTk1eno3SE9lOTNuUDJYM09jODYrRlFBemNDdkFGNEZiZ0E4QmJ3TXZBUStFbHZNWC9rOHdBL2NEd0wzQUZPQU1ZRGZ3RlBDajBISnFGZVdvWmNDTmRhNC9BRXdPTGVlM3A4SllvK3BOQXNZQkhVQVA0RWUrL2ZLcDZOc00zRXVBVGNCWmRacVhBN083Z0p1cDd5aUFzMnJkbFo4T25PVGRYb3ZvS2NuT1hzWUJYNWVWUnRWYkFPd3NzK09LUVVldHUvdUp5cEJhUFVkQjdKOHRYY1JUcjdHaUlUV3JhL1R4ZFVkM2RXbzNNaVBmS0x1RHJ0SEhxUXlwdFJLN3BRTzRzSlZVcDlsUzBmODBHVC9maFIzQXdWWlN0WGNMMi9OZlRjYlBkN0FMZUFHNG82R2lpRnEwcy9Nd2tIVjREUVg2YmM0bU9BWmtja08wczdOU2l6aTlZbEJwSXZaQ3hRemNFY0IyWUZRRG9mbWg1U3h1MWFGUjlZWURpNEJiYWUyc3Q0RGZBTnVJSDg5N2dDN2dhZUFqQ2JudHhDSE5JT0NEd0VYQVJHQUNjRnFMUG80RDN3RVdScjU5b0pYOVp1QitCWGlzUWZOZmdmRVZKWGdlOEVQZ3lvVEFRZUR1MEhLKzE2b2pvK3JOQVI0SHptd2k5anF3QmxnTDdJaDhPL2ZUMWFoNlhVQVZ1QUdZQnB6VFJQd0FjSHZrMjh0YjZUVURkeDd3VGVCOWllcGZBRGVGbHZOR1JRaGZ3TW1nMUE4dDU3MFdScDhOL0FDNHJvRklEZGdBUEJyNTlxOWFHWnNIbytwMUFKOEM3Z1FtTnhGZEM4eU5mTHZwUGRvTTNJSEVYOFFad083UWN2YjB0aldibzYyTUhBZXNBODV0SUxJU1dCRDU5aC96OXBIRHBvdUJCNEhQTkJEWkEweU5mSHRYSHYyNW5HVlV2ZW5FVWYrZ09zMnZFZzk3TDQ5dUhSaFY3eXJpMjhLWU9zM3ZBak1pMy81WnUzbzdjaGd5RjFoTjJsRVJjRGN3c1Q4ZEJSRDU5bWJpRmNHM0lMWHlPQTFZYjFTOUdlM3FiV3RrR1ZYdk51Q0pPazE3aVlkM3FjdVNQQmhWNzNMaSs5VkkwZFFEek1seTQrOGxzN09NcW5jVDhjMWNzZ1dZSHZuMnY3THFPdFVZVlc4VThEeHdpV2pxQWE2TmZIdGpGajJabkdWVXZTbkFSdUpZS01sSzRBdVJiMGRaOVBRblJ0VWJRaHlBWHltYWpnQlhSTDY5dlpXT2xzNHlxdDRGeE1HaGpLRldFQS9qNDluTTdYK2FPT3h2d1BqSXQvYzN1NzZwczR5cU54QjRCZmlZYU5vSVhLZmJVV2JnZHI3N1kyTmx6NzdLeE01emFxOE11VEdhR1ZxTzFqNlV3ellEbDRtbVRjQ1V5TGNiTHV0YVBRMFhrWGJVVG1CV0dTT3FlN214NGNqYUFkZS90N1hMNmw0ellGcjNjbU9EN2o0aTMrNG1EcUwvTEpvbUEvT2JYZHZRV1ViVkd3OThWVlFmSXI0aEhzNWhaMVBNd0ozU2M3QnlUYkt1NTJEbEdqTndwK2p1Sy9MdE40RnJBYmxDdVYvZGR1cFMxMWxxQ2JHa1R2dVhJdCtXMzBoaHpNQjlQN0NzSmlJaVZWNm0ycldpd3B5dmllckJ3Sk9Ocm1rMHNqNVBITlFsV1JYNTlxcjg1dFhIRE53TzRCbGdSQU9SRWNBelNrNDNqd091cVB1MGV2cW5TQmxnVkwwQndIMmkraDFhek9jQzNBVmMzVUxtYWlXbkZYVXovekp4T2lmSkEwYlZTejM4Nm4xYk53QnkzajRZK2ZZK1BTYWV4QXpjQ2NRUGtTd3NVdkphaVh6Nzk4QzNSZlY0NGt4R0grbzU2MDVSM2crMFRQNjFpeG00WnhMSGFqTFFiVVFYc0VKZHA1djdnVzVSSi8zUTExa3E3WEt4a0hreTh1MGplbTBEWUNsd1hyS2lkcWp5UnJPeWtsK3EyNURJdC85Sm5QeE1NbGt0azA0Z1I5WnNVZTRHdnF2WnR0Nk01SFJSL2ZyUlhaMTlObFJWK1hVaE4xMWRyNXRINlp1aHFCQS82RTV3d2xsRzFlc0VaZ2tGNjdQa3I5dkJETnl4cEtmMU1XQldMYUxQR2xPVlo2bjJKSXVWSG0xRXZyMlhPQ21RcE0vZ1NZNnNqNU4rZksvUWFaQVp1SU9CVmFSellmZUVsdk5xdld0VS9UMmllaEN3U3VuVGlmeThGeVdEMUtTenJoS0NoNGdQaCtoa01lbnM1WXZBSXkydWUwVEpKUm1EL2dmUE90Smh4SWxGZDlKWm54UkNXeVBmUHFyTENqTndyd2ZtaXVwOXdKelFjcHJ1U2FyMk9Vbyt5VnlsVnd1UmJ4OENkb2pxRTM3cEFGQUJtSXhoZnFuTENETnd6eWY5RktzQnMwUExlVE9MRGlVM20vUm03MUtsWHhkeUYycFM3eis5STJzVU1FUUliZFBSc3htNEE0anZCY05FMDBPaDVXeHFSNWVTZjBoVUR5T092d2JrdDdJUDhuT2ZhMVM5UVhEU1dmVU9oL3hCVStlTFNPZU9YaWE5cE1yS2ZlcjZKSmVSZlNYUWl0MmlYRUg1cDlkWm80WEFnVmFia1ZsUTZSVzVwanNFekFvdFI0WURtVkRYelZKNmt0eWxLWjN6SjlJN1FuMmNKWGMrOWhidDBRemNrY1RaQkxrZ3ZTVzBuRUpwSG5XOVBGZFdJYzVPeU0vU0Ztby80ZStpZWppY2ROWlEwZmhPa1E0VFJ5K2w0VXRDeTFsWFJIY3ZTczhTVVQyU09QK1ZlNmRkOFpZb0Q0WEd6cEpEdkYzcXBWMTJvVC9OTTEvcFRhSWpuU09QS3AwQmpaTi91ZTlYWnVEYXhLdjRKTjNBek5CeS9wMVhiejJVdnBta013YjNLenZ5OGc5UnJzQkpaejFIMy9obGJaNGV6TUFkUnJ5WEtOTXVkNFNXODdzOE9sdWg5TXJEZUYzQVNtVlBIdFlrL2o5S2ZCSW9kbGJrMnk4Q052R3ducEIxaDdZTzN3ZGtnTGc2dEp5bmN1ckxoTksvV2xTZnIreHBtOGkzbnlaZTVzd0h4a1crL1Jva1JrRGsyejdnNTdJV01BUDNWa0FldHRnTGxKRk9xY2M4NG1SQThzdWFZUWJ1cHRCeTJzNkJSYjY5QlpHRjBMSUpZQWJ1R09Ma2Y1Smp4UEdVZkxLVWd1cW5YanJuY1dWZllRbzdLNUYya2VtU2UwUExPYVZIajFSLzk0cnF3V2hLNStnWVdZOEJNaEgzRXZDd0J0MTVlSmgwYW1rc2pRL1hacWFRczh6QW5VNzZuclNmT0p2UUwyOGFxSDVuS3p1U3pGUDI1cWJveUpMZlZsdHBsN0pva3M0cGxDd3M2cXpob3J3NnRKeWZGOVNwQldXSDNFRS91NGpPb3M2UytTaXRtd2dhK0tnb3Q1VS9reFIxMWs5RWVhd1p1Qjh1cUZNTHlnNzU1VWw3MjZLb3N6WUE4b2lrdHB4NFFhUWRFV3Jaa3BkQ3psS0I0R1pSM2ZhUjZaS1FkbXd1R2lEcmlMTmtmcXJmcDZKNnJVWk93Y0o1TkIzT2VvNzBFbU5xVGwxR2kzSlc1QlE4Um14bklRbzdLN1NjQTZTbll0djNMZlV5K1V4UlBWUFZ0NHZzZjdPeXN4QzZUdFBKSVg2cG1ncnRjRnNkZXpwVWZXWlV2NWVLYWkycGJGM09lcDcwamtpN282dlpNY2wyK0t3bzl4RGJWeGd0emxMTEMza0NwZDExV0tOTjNYWTNlMlcvVzNRdHYzUWVhbDBqeXVQVUwzQms1V0hpTnptU2JLZU43SVhxVCtiZXBWMjUwZW1zWjBrdlhETlB4Y2kzM3laKy8za21zRUQ5bmFqcXN5TDdxeW03dEZCMGY2MFBadUQrR3JnOFVlV0ZsaU8zN2t2REROeHR4QTd2Wld0b09aL1FwVi8zMlhLNTlyTGJuSXE1TVFQWEpIMFNxTkJhVUtMYldldElUOFZwbXZ0b3hEVDZ6cFFhbWtLR1hyUTZLN1Nja1BUVDYzTTYrMmlDWEF0dVUvWm9vNHhYUE5hTDhpUTFSVXBEdmRzakkzMXBSMkhLY0paOFZGY29meXBPSmYydzBoWXk5S0xkV2VxWDNPUVdXTmxwR3hreWVHWDhvbHdaSXd2UzMrcWtNbDZEQTFDL3BTTVBEMnNmVlpEOXZabDJlWmEreDdVcnhDZnp5dmlKbFN0SWYrbmFBdEVrV29QU0pHYmd2a1o2OVg4cTJCRmFqbnhYVWd0bFRVTW9hU3IwWjc5bE9tczE2YmNWeXVZNDZhTkgyaWh0R2dLWWdYc3pzQkE0dmN4K0ZJZUJoYUhsMVB0VkV5MzhCK2hySHV5anBLNllBQUFBQUVsRlRrU3VRbUNDIi8+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-2.svg":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/skill-2.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3OSIgaGVpZ2h0PSI2OCIgdmlld0JveD0iMCAwIDc5IDY4Ij4NCiAgPGcgaWQ9IlZlY3Rvcl9TbWFydF9PYmplY3QiIGRhdGEtbmFtZT0iVmVjdG9yIFNtYXJ0IE9iamVjdCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtNS44NjIpIj4NCiAgICA8cGF0aCBpZD0iUGF0aF8xIiBkYXRhLW5hbWU9IlBhdGggMSIgZD0iTTI5LjEwOSw2Ni40NDZWMjIuMjM3TDIzLjYyLDE2LjU1NVY3MS45ODlINzcuMTcxbC01LjM1NS01LjU0M1oiIGZpbGw9IiNkNGUxZjQiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF8yIiBkYXRhLW5hbWU9IlBhdGggMiIgZD0iTTcuMzY5LDY2LjQ0NlY3LjczNkgxLjg3OVY3MS45ODlIMTYuNDFWNjYuNDQ2WiIgZmlsbD0iI2Q0ZTFmNCIvPg0KICAgIDxnIGlkPSJHcm91cF8xIiBkYXRhLW5hbWU9Ikdyb3VwIDEiPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfMyIgZGF0YS1uYW1lPSJQYXRoIDMiIGQ9Ik01MS41MDYsNjMuNkgzNS4yNDNhMS44MzksMS44MzksMCwwLDEtMS44My0xLjg0OFY0My45MjJBMS44NDYsMS44NDYsMCwwLDEsMzQuNTc4LDQyLjJhMS44MTUsMS44MTUsMCwwLDEsMi4wMTEuNDY5TDUyLjg1Myw2MC41YTEuODYxLDEuODYxLDAsMCwxLC4zMywxLjk5NEExLjgyOSwxLjgyOSwwLDAsMSw1MS41MDcsNjMuNlpNMzcuMDczLDU5LjloMTAuMjZMMzcuMDczLDQ4LjY1NVoiIGZpbGw9IiMxYWU1YmUiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzQiIGRhdGEtbmFtZT0iUGF0aCA0IiBkPSJNMjcuNDEyLDQ1LjI1NkgyMy42MmExLjg0OCwxLjg0OCwwLDAsMSwwLTMuN2gzLjc5MmExLjg0OCwxLjg0OCwwLDAsMSwwLDMuN1oiIGZpbGw9IiMxYWU1YmUiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzUiIGRhdGEtbmFtZT0iUGF0aCA1IiBkPSJNMjcuNDEyLDYzLjQxOUgyMy42MmExLjg0OCwxLjg0OCwwLDAsMSwwLTMuN2gzLjc5MmExLjg0OCwxLjg0OCwwLDAsMSwwLDMuN1oiIGZpbGw9IiMxYWU1YmUiLz4NCiAgICAgIDxwYXRoIGlkPSJQYXRoXzYiIGRhdGEtbmFtZT0iUGF0aCA2IiBkPSJNNy4wODEsMzYuNzc3aC01LjJhMS44NDgsMS44NDgsMCwwLDEsMC0zLjdoNS4yYTEuODQ4LDEuODQ4LDAsMCwxLDAsMy43WiIgZmlsbD0iIzFhZTViZSIvPg0KICAgICAgPHBhdGggaWQ9IlBhdGhfNyIgZGF0YS1uYW1lPSJQYXRoIDciIGQ9Ik03Ljk1MSw2Ni4wMjFINC4xMTZhMS44NDgsMS44NDgsMCwwLDEsMC0zLjdINy45NTFhMS44NDgsMS44NDgsMCwwLDEsMCwzLjdaIiBmaWxsPSIjMWFlNWJlIi8+DQogICAgPC9nPg0KICAgIDxwYXRoIGlkPSJQYXRoXzgiIGRhdGEtbmFtZT0iUGF0aCA4IiBkPSJNMTguMTE2LDcuNzFhMS44MzksMS44MzksMCwwLDAtMS44My0xLjg0OEgxLjgzQTEuODM5LDEuODM5LDAsMCwwLDAsNy43MXY2NC4zYTEuODM5LDEuODM5LDAsMCwwLDEuODMsMS44NDhIMTYuMjg2YTEuODM5LDEuODM5LDAsMCwwLDEuODMtMS44NDhaTTE0LjYzOSw3MC4xNjdIMy42NlY1Mi42MTJIOS45MTNhMS44NDgsMS44NDgsMCwwLDAsMC0zLjdIMy42NlYyMC44M0g5LjkxM2ExLjg0OCwxLjg0OCwwLDAsMCwwLTMuN0gzLjY2VjkuNTU4SDE0LjYzOVoiIGZpbGw9IiMwNjM1YzkiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF85IiBkYXRhLW5hbWU9IlBhdGggOSIgZD0iTTI0LjkyOSwxNS4yNjVhMS44MjcsMS44MjcsMCwwLDAtMi4wMDUtLjQyMiwxLjg1NywxLjg1NywwLDAsMC0xLjE0OSwxLjcxMlY3MS45ODlhMS44NzIsMS44NzIsMCwwLDAsMS44NDQsMS44NzNINzcuMTcxYTEuODQ0LDEuODQ0LDAsMCwwLDEuNjg2LTEuMTQyLDEuODc1LDEuODc1LDAsMCwwLS4zNzYtMi4wMTVabS41MDYsNTQuOVY1NC4yNzZoMy45NDJhMS44NDgsMS44NDgsMCwwLDAsMC0zLjdIMjUuNDM1VjM2LjE2N2gzLjk0MmExLjg0OCwxLjg0OCwwLDAsMCwwLTMuN0gyNS40MzVWMjEuMUw3Mi44MjksNzAuMTY3WiIgZmlsbD0iIzA2MzVjOSIvPg0KICA8L2c+DQo8L3N2Zz4NCg=="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-3.svg":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/skill-3.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzAiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA3MCA2NiI+DQogIDxpbWFnZSBpZD0ibW9uaXRvciIgd2lkdGg9IjcwIiBoZWlnaHQ9IjY2IiB4bGluazpocmVmPSJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkNDQVlBQUFEcXY2Q1NBQUFBQkhOQ1NWUUlDQWdJZkFoa2lBQUFBN3BKUkVGVWVKenRtMDFvMUdnWWdKL010RmwvcG1qVldyV3lQVmgwV1FZcGFnZ2V4TDBJUWhVRmhVVkZYQlgwSkN2THJnb2V2UWdLNmxWUXZJbC9zT0JCVWF1Q2lvU2c2T0tDUDIyUlZiSEZGblduV3BzNk14NG13U1RPaDVsTzgwUG5lMDU1MzN6dmw3ZFBKa25ieWFmZ1F0VU1CVmdFL0FRMFVSdThBUjREOXkxVEx6cEp4ZGxRTldNbGNCUllFSDF2aWVBSnNOc3k5Y3RnaTFFMVl6dHdIRWpGMkZnU0tBQTdMRk0vb2FpYThUUHdBS2lQdWFta01BSzAxd0g3Y0VsWnRyaUIzOWJPb0hsNmJYanFHeGpoMU4vOTNMcVhjMUwxd0Q1RjFZeGVvQm1nN2NjZk9IMW9IdW0wSXBwblhKTFBGOW53VnpkZC93MDdxYjRVdGhTQXBlMlptcE1Da0U0ckxNbE9kcWVhUFRmYlNSTnE5OTZiVXJ3ZmlObzE4UjNxS2h4L0VlZ0Uzb2ZRUzZ6ODJ6VzBFVmpoeEVIRmZBVFdaRnN6MTBMcEtnR29tdEdPUzB6UVMrbVA4U3lsSEVIRWZBQk9oZDFJMGdnaTVubTJOVFA4L1dIaml5QmlQb2ZlUlFLUmoyc0JVb3dBS1VhQUZDTkFpaEVneFFpUVlnUklNUUtrR0FGU2pBQXBSb0FVSTBDS0VTREZDSkJpQkVneEFxUVlBVktNQUNsR2dCUWpRSW9SSU1VSWtHSUVlTDY3dnFMMDh5dzk0Qmt3VEdIZW5GZlhiMGJhVlF6a2puMXVHNzd4VllkSFRKOWlrVk1zZjAwR1dCNSthL0dTeWhTOWNVeDlKQjdQSjZheFdFOUwwZnRtaUVWaDZLWHk2V21rWGNWQWNVaHBBV1k0c2NmQ3FtSVRPL016L1RWUHM2Mlo5Z2g2aXhWVk00NEN2enV4dkpRRVNERUNwQmdCS1NEdkJQMXZhL0pWR0llSnJ1MThDdWgyb210My82ZHZZQ1Q2bG1KRzFZeTV3SHBYcXJzT09BZnNCM2cvbUdmVG5oNVcvektWcHNiU0ErdkRwMEtUcWhtN0krODJPdVlBVzRCcHJ0eFpSZFdNcWNBam9DV1d0cExIS3lDYnNrejlIZEFCdkk2NW9TVHdHdWl3VFAxZENzQXk5WWZBUXVBSTBCdG5aekhSUytsblgyaTdvT3hTRTFVenBnQ05ZM3p3ZjRBR2Uvc0M4R2ZBdXNQQU9uczdSK2tFamlWdkxWUC9aZ2xBMlZmbTdZRmp1bDVBMVl5Q0t4eTBUUDE1d0xwQlYxZ0lXbGN0OGhjOEFWS01nQ2pGak1XeEl1czNrZ09wbWpHWnJ6ZGVnQUhSMkRLNHh6YlljNFZPVkdlZ3d4ZjNWRkRySCt1Zkt4UkNGMk0vK2cvNDBsY3JtTUkvOW9BOVo2aUVLa2JWak5tVWxnck9kNlV2V2FZZStGK2w5dGhMcnRSOG9OT2VPelNxWGt1c2FzWXNZRmFaWGJPQms3NTlCZUJYb0t2Q3c3UUJaL0NleUY1Z0crWC9sQ2tDUFphcDU4cnNDMFJWWWxUTjJBc2NyR2FPRUJrQ1ZsdW0zam1hNG1vdnBWMVYxb2ZKUkdEcmFJdXJGWE83eXZxd3VUUGF3a3JYWGZ2WkRKeW45RzFsMG5neDJzc0k0QXM5WWRUSExYQnFMUUFBQUFCSlJVNUVya0pnZ2c9PSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/skill-4.svg":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/skill-4.svg ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNjkiIGhlaWdodD0iNjkiIHZpZXdCb3g9IjAgMCA2OSA2OSI+DQogIDxpbWFnZSBpZD0idmVjdG9yIiB3aWR0aD0iNjkiIGhlaWdodD0iNjkiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVVBQUFCRkNBWUFBQUFjalNzcEFBQUFCSE5DU1ZRSUNBZ0lmQWhraUFBQUI0bEpSRUZVZUp6dG5HOXMzT1FkeHovMjNUa2hUWnFGQmlnTlRUcitOWXgwS2htdUt6RlJFcGlvVm5WL1hpQTZpVEk2clJQYlVMZXhqcW04Z2IyWm1MUk5RNFVLQm9QQ3RBbXRRNVNOVFRDdEtkdGd4YldhVGV1Vi9wRzY1SlkxTGJTRUpQVWxPVi9PM292ejNmbDh2cHp2enRkT3lCL3BYankvUFA3NTUyOGVQMzc4UE0vUEFqYVNySXJBbDRHdFFEL1FSSFdjQS80RVBHWm95dUVxajYwSlNWWmp3UDFrWTc0QmlGYnBJZ01jQlo0RG5qQTBKUTBnMk01YmdKZUI5UUhFbWdidU56VGx1UUI4bGNXTytZL0F1b0Jjdmcyc056UkZGMjNEa3dRakNFQU1lRWFTMWFDQ0xjZmpCQ2NJd0MzQUV3Q0NKS3VyZ0g4NS94cUxDblIyWkZ2aWUrZlNZNmFGV2NGaEU3RFVaVk1OVFZrYlRMekZTTExhQll4aHQzU0FsbWFSOXJZSUFKUFRtYk96S1hQR2g2c2xRS3VqYkFGWFI0RXZPbXV0N20zaDhSM2R0QzJLNUV5ZjdPdHBuZlFSNkFEd09pRFpKa1dTMVdXR3BvejdDSzVhMXVFUVpOWDFsL0QwSXl0b2JzbzFmTDdXMTlPNnQ1SVQreFo4QS9pMGJSS0FBUkhvY1ZhODkvT2RUa0Y4WTJqS2Z2c0VUbFpVN2NnZmx6c0xnOHBpcHlDK01UUmxCbkNMMXk0Q1JRcTB0bFR2M01HRXF5eDUxZ3FZV0VTb1hLazhHYmVoTGdVK3FvU2llQkNLNGtHMUk4QUZFU1JpbGxFb3R6ODY5MUpzOWRCY2tPY0FtSDNaV0p6OFphRzdzZ0wyNzBjVTM2MHBlazNteHZSUlI3OGQ1WW9hWXFxTXEvc2VFV1lEZGUvbmdydDhlNHRjbUtlTkcwTW9HVnZXZFFmNEVlVkxmcDNOajRoSDZvaWxacTQxVzl5bWdYcjgrUkZsZXp5aGIvRGp6RW9LU1dkWmYwcmFDSFFFL1p2NVRleGg1M21pbEl4VHRzWVQraDErWXZiQ1R6T0xBYS9GRS9ydmdQMUEyU0gvcHUwbnJ6MHhXdWhYTS84VjlmR3V3WXF2Q05VaXlXcWxUaVFHdkI1UDZIdUF2d0ZsMzRPKzkrT3hOZnZlbVM2eVZYUHZmYzcrbFdYbGltYWNvbHhrSXNBbSsxZVdtM3BiY0l0U2N2dk16OWYrZ0RQU0pjY0cvYlM4SUlqQUIwN0Qvb1BuYTNJMG5jeWd4Wk51ODVuYXdxcUk3aXdjcjZOMW5oeEx1VTJwS0xBUGVEQm4yZlBHQktPblVselgwMXhVTTRQRnFEQkxHcE9QV3kwME9SclpuR0h5OTMvb1RFek5Pdzg1RFp5b09kcUZHWFlXZnYvbUpOUEpERjJYbDQ0STNpZkZXU0hOVWt0aWlXdkVjUHFzNGRVSWhnVjdidllRc0RyWXVObG1hTXJPZ0gwQ0lNbXFBQndBbElCZER3TTNpNGFtbUdRN28vY0RkTDRIZTJxdkVSaWFZZ0gzVVRwVlVROVR3TDJHcGxpaWZaTGpnQXk4UW4yZDR3VHdFTERKRHJ4aEdKcHlERmdML0RrQWQwT0FZbWpLRWFCMDFDUEo2bVhBVFVEUk1MRnRlK3JuUXN5NkxGZlduMjI2eHp4Yk5GZzdBeHpLTFJOY1NDUlo3UUZ1eFBWV3RPZ2VZMU5rdVhsM3JweCtON0p6OXRYWWtLT0tBUncxTkdYRWVaenZLYXRscDRaR0taNjY3R2pFd0N4SWxwMGFlaFI0eEdIYU10NDF1THZTY2VGOGlnZWhLQjZFb25nUWl1SkJLSW9Ib1NnZWhLSjRFSXJpUVNpS0I2RW9Ib1NpZUJDSzRrRW9pZ2VoS0I2RW9uZ1FpdUpCS0lvSG9TZ2VoS0o0RUlyaVFja0NlN25aL05SYnFSWWhWbGkxMEo5dDJpREo2di8xYlA3c2I0M2V5UExDaHA3MHU1RitTVmFkayswTHorWkxzdG9OL0F6NEFsWE04cnVZQUI0RGZtSXZzalVVU1ZhdkEzWUJOZTlGc1JrQ3ZtR3ZmK1d6T0ZZQ2Y4VzFrN2tPOWdCM04zSkJUSkxWWHJLWkY1Y0c1SElLdU1YUWxDT2l2WmI4RXNFSkFuQVg4RUNBL29xdzE1SjNFNXdnQU8zQWk1S3NDb0lrcTU4Ri91RDhxOXkzS0wvcllPKytENSthbVROVFJJakVic2lzSW9vMGYwSThiTTBVYlVtOGhHeHFUTGZEZGhyb2FrUnJrV1Mxbit5bWdEenI1TGI4cm9QaG84blhqdjE3N2lSQXBOdnNqblJhVjJYT0NDT1pjZkcweTFVUDJlN0N5ZG9vY0x2VGN0ZWRsN0pqNjVYNTh2WXRTM2Zrc2ppTWR4WU10QU00UnFIRlhRbGNEeHl2ZkpsVjArOHNiTHp0WS96Z2dhSk5uTC9JWjNGb0N6dVNaUFVaNEt0TzN5TFpuSmM4QTJ2YWFvclMwSlFQeVhaWVR0dzVRRUhoek5GaDVZcm1jdlg4NE43Uldab1BFbzNXbFJIaDNoWlVsN09MUlRoNDh5QVV4WU5RRkE4Q3plSndzMml6c2I1ejcxRGdLWFBuZnpTL0puV2djYUg3OGV3N2FUdXl6THdxTTE1b2ZOR1Y1dmRyQ2FvUzBVK1lwQTRVeWxQQ2ZQbktOZURuOXVuMTdhelRXbDVITERVekpwVHNvMTFjano4L29uelhyek56VW1qVVp1SUZXV3FWTk9iTjlmanpjL3RzakNmMFhjQkRmVDJ0K2tJVk0vOFJSNEJiOCtWeDRZVllINlAxQkZqbVBHdUJPM1BsVGl2bXJuSkhQS0gvRk5qUjE5TmFzcVc2RW41N3E2OERtK01KL1NCUWRwLzZ0aDhtK3Q4YUx1aW03MnJhUGJIbDFqZXJEYW9Ta3F4K0c0Y29aZmdPMlpnUEFXWDNxZS84MVh2WFBQL0t1U0piTlYxNEt6QzRVSVdPeFExOW1OVkNKeFhFVzlKZUdyT0lLMWxabjZsOWJtaEtMOGw3TnJ6cUJVMDZVL3VMZU1iamNrVWc0VFM4K09vNXppZExMcTRpV2p6SmdYK1dkRG1COXljMlJWdm1oOVJwNWxMVi96UG5VaWI3RDA2N3pWTVZ2NHJoQnlOdDhjRmt5Vmpob24wVnd5OVQ1elBNekJXSmFRRlg1NllqbnllYkFCQVVKakJvYU1wZkF2UlpoTWM4U0JDOFlHaktmYmx4eWpmSmZ1WWpDTkxBMWtZS1l2TXRJTWh6dkkwOWhackw0cGdCTmdCZkladEhVL1d6bmV3M21YNE5mS3JSbng2Q2ZNeWZBYllCaDRGYXh2b1pJRTQyQ1d6QTBCUWQ0SCtEY0Vva3RTQU9od0FBQUFCSlJVNUVya0pnZ2c9PSIvPg0KPC9zdmc+DQo="

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/step-1.png":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/step-1.png ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/step-2.png":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/step-2.png ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "../../node_modules/common/src/assets/image/portfolio/step-3.png":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/assets/image/portfolio/step-3.png ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA8CAYAAACQPx/OAAAOD0lEQVR4nO2ceZAc1X3HP7/unlNaabW6sRHhRsEYBJgcpAx2SAAb2cbEZScq2VVSBBWH4pBNFVUk/5DrHzsktrExJJDECSSmQHIwKEIoBgwYKRxCWFxCSGglsKxztbNzdvcvf7zumZ7ZmZ6Z3Vnd36qu3X39e/1e9++93/1WXt2kAOADGlxRhH8nqNFF4cKy2w5GW/4Y+HsgyQl0BRF9TgKG2Pg8hDIL5RogV6WqZ0gCn0eAFPAFoIBrbi/9xnDY4x7L0hsOwfyPReSdYFfMAj6HkEI4Ddg4aieYv+cAV2HYczrKL8PbD93TB8Cyb+TyubxiySGY/rGHogU8DLxITSg9AawFpkUI08BPgOcBO2j7H2A1MDlC13fJhc7lpVKj3DuBTuGgfByYF2n7CNCHkAX2B21JYAFwch2d4KiQAnLZLACpZIJZeoIfY4YF/B7KQqAYtC1G+RiwM0J3EPgtjN4oVengQmBvhG7Pxk3eimTyhLwaKxxgN/BTYAswB+UxYKgJ7YfA4xhGpYEVwEh4c+HiqlL3E/ZoY+0EOoMDgFnQv49PCmnKjBAu8MmgR5UZ139zGMeu0sgJZowdTuT3XR322dmepDmkbCO+xO4eAfykB9bxyVbDEA/zJSxqsiZUA+HK9zCmrxVcQR+p7Yy2KFywC29KCfFb6xi1lPTb07H3ZMA+/pgS3SE25lNXOugjHdDVEHzX4T/YSvmMfUjZaU2acpl+z4U4v5qE2p5pU8gXlLFYb5ZAJiPIUWJnhF9GEJ4AZgKXAcMt6YU1KFngU0Ae4L67+lh6c62LZTXvLGUbKTpIJWZbKRDZQZ4HU6cIN3wtRTLRulvzAWEkD//+cIlSmaPCWXUAC5szMco6jXAeyv8xegfY2JwF/C6QxOL8gM4F+I8fBp76rTm3UNCerUjPgymThWWLU2N+xo9XlikWtSZ+j2A4wCrgYkx8CuBxhC2YEMmeoC0b7KDziHr0wpvA1dTM5Km/fZFz5aq1JTLp3nDEtiGXV/5zRZlkojtzWgRyOahUOKpE1ixgINLWD8wlFGfmC9gt6GZh9E4oThzbZlKrwTTpoWk36NGCJuXWWVi2DUMHlTu/Vej0neogApm0tBSjRxoc4HLgAkxcKgV8EXgO4zCGGAYuxXjmT2BCKdcCz1ILrwDsXf+K+5NUUm6qGyVYnX1rTsVbd1JbKyuxsw91atFNEZiUjV/iqrRU+s3uidTvmrj+vULjmM3gYMTNMygbEeZiAosHm9Dux+cZLN4G0vg8iWWUOsCXlrRX6pkNszv3Q7o0eS0rGLeTbmI+vh+JaNt28LEmiilixmvHdCOWzMSuABJIU2aEiHrqVWYsu3U4yoSWa0CTXtv3Hcv3yBeUaz+TZMmiVEerXATWv+Lyt3cVSCaFclm5Y3mGTyxwJmyXiMDd/1xk9c8qsfo16hDEMSKKA+Oa2QTA82DmdOG0UzpXFLv32NUd4vtw6jy7q/5jwcA0wfPiaUyCyqF1Cjd8gB1c4X2r4X4niNEddRCN2Wejkc0ITz3r8t72PNqYWGv2eAv27lNSKeMwplLCd+4rMn1AOuo/FogFm7d4ba3P6A7JYkzauOAiwCQMO1o5jy2hYYyqjRIR1+qceYDjwI4PfN57v/PVYdtCKsj6WxZsfMPD8yZWqyeTQrtIeMgQC3gSYQ7KhbQWXwngfzFZwksIIr73fauPJbdW+aN2owMWzGD/V96gMm8IcVt7aJrw6P/xfNKbZhoGdgBVI6Ntuztno1Q2P22LgDmmf6UCfhe8cRzzjI7m2u5ZQAafs4CLMJ76RYEHnmugzaKcgzGRk8AngJdCupX/ajz165fn9Nd7lVFMAbz+Eu7MfGzoRJOeYUQXH8T3YVq/MGNAulbKIjA0rOzeo1XDZN5HLdJpOpqDCOzeqwwd1J74Og7CWoynHnrgqxG2o1xKLSQ/CeNzRD31J4F3Mf5J6ItMW3C+89nHVpfINFmt4gniWkYktYKloN2t9HxB+cq1SW67Md1VvxCP/rTMX/xdgWzGMPRv7shw3vzO4yx/9e0CDz1SZtKk8YcDHIwpG1VlCrhow/pQKsgouhJq2rwwMOuPqleZcIgYMZMbGZsOKBbrHbaRvHb1rIrbu9CMg3AFyrnAC5jU7GdRXiDiZ2B0xWWYHfI8RmR9JugTjWkceGmD+0QqKWc1G0xtH034sTtAE37XOcdsRnj8qTJrf955RiCKSsWEV0JP+vY7C01FbisUi0om0xuOOEAZYQPKOmAuPuuROmaEKAEbgFeADMovkBozrltaVep2KwXn7MmiabetUpei05XZKwLFEuTzY9shVS8/wMHh7nIvVS+/BwitLEW4Ch+H0co8Chf4dPB7lRnLbhuOtzKCyU77r/mdfWiVji2sEJaA1TrvVf/4cSS8ukE2031QM/oKxZZU9Rhb2BXA73B2E1gmoQqJBHzx00ljSU3YQLD25y4Hh7uzvpw61S3BpYwOkSujPXmLepa2wxFQj+L7xjO/8/bMhIfkN76RCyICnfeJfs4BTPj9wzZ9ZmLY9utuJ3gkQARcF5582qV/ysQFd9U36eNujAMAefX16pReAU4CzkYZGiXrw0SVsBGYjM+52OTCN1pyU1Wp/6Nt6000gZTs2FxIdaikh05wxUm5woRX8yUSXSv7fQ6mqPp8YD7G7P0U8AtG12kNIFwAnA6ksLgCYwLvBlj5L8ZTX3prTvYdaJCbwYvnPjmIN1CIT1DZSvalOSQ+qE9S9RqJbkTtGDEWy8sBngY+HmlbgbALU1wdiq/JCM8D59TRKdupr++dfvEC5/OPrW6eU8//zk5KZ+xrGzpJDE4hMTilKlBVja1/ODVQOlWzmHwfig0V/pZlaMYLB9iBqWrvx+iGIeB9FBN6M5PwUHZgzodMjdBtQ0x1yoGcAlTK5dZ5FSnZWIX4MiD1BPHqy4AGpgk335YxyvEwceV795fYPuijwNmn2/zp4mR1LmLB+4M+P3ig1FGaNg4OyjUIZwIbMUr9amA99ZmOAsqVCOdgnMMEcDXKeqSO7uCLL1XWpFPysbFPqR6eB5MywsIruy3K6i0efLTM1m2KrzB7pvCHl9fPZ/ADn+/fXxq3g+gAistmHNYAcxB+iTZNO/n4vIPF00AWjw1YNbolN1X9SSd2UqFpHXc/OkHHRGP/4YdFEs7hq+X5cJdPImGCj9sGfe6+v1TbIQK7dvs9ivYaKMrnMFaUG0PvAlehCJEdtOyW4Y5Whto+avuxySe162NZlmWChvf+W2nCPes4ZDNiQiTAzg99vvdP9X60bdGTeFbU1jBR3vbo3vQJ5tn/32fhZyvx2UBLSezoM0HGsHuHZUB+m5mJ1MesfKVtyraxj2J8i8k9CLU3Qy2nHo4W5tbD8cJ9IBEaoZpf1y5CTskt/YYZce+iQcS3y+MIjgPJROsElQj4vlazhGCK+xJOfB/PU+OzHCJEd8jJGKX+bps+p2Bsr63dDhZd9b3ESF758heS3PC11mVAIrBtu3LzHSO4LhSKyp8vSXPdwkRsnw2ve9z+1wWcHkZ04xBlyBqEuSin0LrUx0ECpQ5nEBQ63PvtPpbcUsupJ5yJrwKMQtWItDmz4rVqoVBbEKowta99nxnT/UP6LvLqa3oSFgswx6MzwCJ8XkR4D4ge4Dk58NQfxuykRSjPq/I+wKwZhuzG20fu3jbofd1p5gl7gmgHIsvWrgKRYU591ox48VMsweBOv9pn5gxhoD++z0jeKPFDVKy9T159XbcApzXcGAkKGnYEDOnD4k3Mkeko9qrPOcCegCEzv/9AcePKVaU52SYWhz+53FE4xBpJImWrqySV55mgYVwfEerOmLgeeHF91Cj0xKFzgfY5mH8aYGN0iIXx3N/Crx3qBCpBhvAS4KNVOmWDiMmjDJlqrkKpzA4R5tQNUy0DepPyb+xvGzqZ9qPzyLw2C011ZjFItVa3/a4qdGJHRuD7AaPbwLKkqzB7KzjAIsxHfhcjihZivPEoisCXMAp9M4Yh1wCvNdDlXnzZfTadkoubDaYpF8244LT+cDqGQmvXhY/MtTh1ntVVPVWvIALDOWXTW15PPHUwJ2sfBWYjbG4+apXuMUxO/e3o7cU3VpV6oqXH6kvtagVfuo5X5QvKFZc53HLDRKYA47F5q8+Xl+awrPHGsgwU+JMO6F3gusbGZcuHD+uBGNs2tbrbd/htncOJgFjw3rbx7w5oTMBGHcJWCF94DINrwjd6Iaavpro/o57NCKt/VuGpZyqHLUSv2vpcTDdwRjEhzJtH9070Z+NEumBMcutUrKIdW7moCR9rONk1U3yftqX+EwrpzSnf6A45G+OHNCr0Rvwmxip7veNRwljWirMDDsaXv1cL6rrAePMQRwqiS3U1wjrq/09WI2ws1mLxAjAlbLz3rj5cj/BqqbLV8dGEZ0RXy+v4/bcaYBhyJvBVYDamRHQR9SndEPMRFmMYNhnhq8C54c1VD/ax6sE+Tj7JSlcOp+g4yuEgPIM5Bh3iu0EW8FRgMGibivAc9ceiv4swEtCFJ3Znn3+u/Udbtrk4Pap1Pd5goawENlELtL8NPIrPAXzCDF8BeAR4o45OWSkeOfHgna0+72z1h/cP6VtHy5nwIxEO8HVgOsbpszH/Ne6tBroycD1GrO0I2j4P9c4hkF/3srsunZJLJ2zGxzicYL3vw+YBhNnA9qaUhm4PNj9CSeOzLXp7+V9WQ1+JY8HaOVyIeht/1gG9ByxpbFz2zbqc+iEoQTtmYffk42l9QuFXJ3bImDE0boYsXT4qufgDEdmFcTKPX4diDBDRl/8fDGMErRQdm30AAAAASUVORK5CYII="

/***/ }),

/***/ "../../node_modules/common/src/components/DemoSwitcher/demoList.js":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/DemoSwitcher/demoList.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var _demoSwitcher_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demoSwitcher.style */ "../../node_modules/common/src/components/DemoSwitcher/demoSwitcher.style.js");
/* harmony import */ var common_src_data_productShowcase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/data/productShowcase */ "../../node_modules/common/src/data/productShowcase.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\DemoSwitcher\\demoList.js";









var DemoList = function DemoList(_ref) {
  var titleStyle = _ref.titleStyle,
      itemTitle = _ref.itemTitle,
      row = _ref.row,
      col = _ref.col;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_demoSwitcher_style__WEBPACK_IMPORTED_MODULE_7__["DemoListWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Explore All demos"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), common_src_data_productShowcase__WEBPACK_IMPORTED_MODULE_8__["ProductShowcase"].map(function (product) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: product.className
    }, col, {
      key: "item_key-".concat(product.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: product.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_demoSwitcher_style__WEBPACK_IMPORTED_MODULE_7__["ProductCard"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_demoSwitcher_style__WEBPACK_IMPORTED_MODULE_7__["ImageWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: product.thumb_url,
      alt: "item_key-".concat(product.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: product.title
    }, itemTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }))))));
  })));
}; // DemoList style props


DemoList.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  itemTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
}; // DemoList default style

DemoList.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px'
  },
  col: {
    width: [1, 1 / 2, 1 / 3, 1 / 4],
    pl: '15px',
    pr: '15px',
    mb: '40px'
  },
  titleStyle: {
    fontSize: '24px',
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '30px'
  },
  itemTitle: {
    fontSize: '16px',
    color: '#0f2137',
    fontWeight: '400',
    letterSpacing: '-0.025em',
    textAlign: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (DemoList);

/***/ }),

/***/ "../../node_modules/common/src/components/DemoSwitcher/demoSwitcher.style.js":
/*!**************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/DemoSwitcher/demoSwitcher.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: DemoListWrapper, ProductCard, ImageWrapper, Badge, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoListWrapper", function() { return DemoListWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCard", function() { return ProductCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageWrapper", function() { return ImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return Badge; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  padding: 8px 10px;\n  border-radius: 4px;\n  position: absolute;\n  top: -8px;\n  left: -8px;\n  font-size: 13px;\n  font-weight: 700;\n  color: ", ";\n  background-color: ", ";\n  box-shadow: 0px 8px 19px -2px rgba(75, 109, 235, 0.57);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  margin-bottom: 25px;\n  img {\n    border-radius: 7px;\n    background-color: rgb(208, 208, 208);\n    box-shadow: 0px 6px 14.1px 0.9px rgba(34, 48, 102, 0.1);\n    overflow: hidden;\n    transform: translateY(0);\n    transition: all 0.3s ease;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: block;\n  cursor: pointer;\n  color: ", ";\n  &:hover,\n  &:focus {\n    outline: none;\n    text-decoration: none;\n    img {\n      transform: translateY(-7px);\n      box-shadow: 0px 30px 28.2px 1.8px rgba(34, 48, 102, 0.06);\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: calc(80% - 20px);\n  margin: 71px auto;\n  border-radius: 8px;\n  padding: 48px 30px;\n  background-color: ", ";\n  box-shadow: 0px 15px 50px 0px rgba(23, 53, 102, 0.5);\n\n  @media (min-width: 1201px) {\n    max-width: 1170px;\n    width: 90%;\n  }\n\n  > div {\n    > div {\n      &.coming_soon {\n        position: relative;\n        &::after {\n          content: 'Coming Soon';\n          width: 100%;\n          height: 100%;\n          position: absolute;\n          left: 0;\n          top: 0;\n          text-align: center;\n          display: block;\n          padding-top: 33%;\n          font-size: 20px;\n          color: #0f2137;\n          font-weight: 500;\n          letter-spacing: -0.025em;\n          background-color: rgba(255, 255, 255, 0.75);\n        }\n      }\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 40px;\n  position: fixed;\n  z-index: 99991;\n  right: 0;\n  top: calc(50% - 110px / 2);\n\n  @media (max-width: 767px) {\n    width: 34px;\n  }\n  .reusecore__button {\n    width: 100%;\n    min-width: 100%;\n    padding: 12px 0 10px;\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    font-weight: 400;\n    font-size: 12px;\n    letter-spacing: 1px;\n    text-transform: uppercase;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);\n    @media (max-width: 767px) {\n      padding: 7px 0 7px;\n    }\n    .btn-text {\n      writing-mode: vertical-rl;\n      text-orientation: upright;\n    }\n    .btn-icon {\n      justify-content: center;\n      margin: 0;\n      svg {\n        fill: ", ";\n        ", "\n      }\n    }\n    transition: padding-right 0.3s ease;\n    &:hover {\n      @media (min-width: 768px) {\n        padding-right: 12px;\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: ", " 4s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), spinner);
var DemoSwitcherWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), AnimSpinner);
var DemoListWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'));
var ProductCard = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#5268db'));
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var Badge = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject7(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#5268db'));

/* harmony default export */ __webpack_exports__["default"] = (DemoSwitcherWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/DemoSwitcher/index.js":
/*!*************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/DemoSwitcher/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redq/reuse-modal */ "@redq/reuse-modal");
/* harmony import */ var _redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _demoList_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./demoList.js */ "../../node_modules/common/src/components/DemoSwitcher/demoList.js");
/* harmony import */ var _demoSwitcher_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demoSwitcher.style */ "../../node_modules/common/src/components/DemoSwitcher/demoSwitcher.style.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\DemoSwitcher\\index.js";




 // Default close button for modal

var CloseModalButton = function CloseModalButton() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "modalCloseBtn",
    variant: "fab",
    onClick: function onClick() {
      return Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["closeModal"])();
    },
    icon: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
      className: "flaticon-plus-symbol",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

var DemoSwitcher = function DemoSwitcher(_ref) {
  var props = Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _ref);

  // Demo switcher modal handler
  var handleDemoSwitcherModal = function handleDemoSwitcherModal() {
    Object(_redq_reuse_modal__WEBPACK_IMPORTED_MODULE_2__["openModal"])({
      config: {
        className: 'demo_switcher_modal',
        disableDragging: true,
        default: {
          width: '100%',
          height: '100%',
          x: 0,
          y: 0
        }
      },
      component: _demoList_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      componentProps: {},
      closeComponent: CloseModalButton,
      closeOnClickOutside: false
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_demoSwitcher_style__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: handleDemoSwitcherModal,
    title: "Demos",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (DemoSwitcher);

/***/ }),

/***/ "../../node_modules/common/src/components/EnvatoButton/envatoButton.style.js":
/*!**************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/EnvatoButton/envatoButton.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: fixed;\n  bottom: 30px;\n  right: 20px;\n  width: 65px;\n  height: 65px;\n  border-radius: 50%;\n  box-shadow: 0px 8px 35px 0px rgba(124, 180, 66, 0.7);\n  overflow: hidden;\n  z-index: 9;\n  @media (min-width: 768px) {\n    animation: 0.7s ", " infinite ease-in-out;\n    animation-direction: alternate;\n  }\n  @media (max-width: 767px) {\n    bottom: 15px;\n    right: 10px;\n    width: 40px;\n    height: 40px;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n    /* @media (max-width: 767px) {\n      display: none;\n    } */\n  }\n\n  .envato-buy-button {\n    width: 100%;\n    border-radius: 0;\n    /* @media (min-width: 768px) {\n      display: none;\n    } */\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  from {\n    transform: translateY(5px) scale(.8);\n  }\n\n  to{\n    transform: translateY(0px) scale(1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Animation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var EnvatoButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), Animation);
/* harmony default export */ __webpack_exports__["default"] = (EnvatoButtonWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/EnvatoButton/index.js":
/*!*************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/EnvatoButton/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _envatoButton_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./envatoButton.style */ "../../node_modules/common/src/components/EnvatoButton/envatoButton.style.js");
/* harmony import */ var common_src_assets_image_envato_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/image/envato-logo.png */ "../../node_modules/common/src/assets/image/envato-logo.png");
/* harmony import */ var common_src_assets_image_envato_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_envato_logo_png__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\EnvatoButton\\index.js";







var EnvatoButton = function EnvatoButton(_ref) {
  var button = _ref.button;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_envatoButton_style__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://1.envato.market/c/1309180/275988/4415?u=https%3A%2F%2Fthemeforest.net%2Fitem%2Freact-next-modern-landing-page-template%2F23169879",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: common_src_assets_image_envato_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Buy Now From Envato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "Buy Now",
    className: "envato-buy-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })))));
};

EnvatoButton.defaultProps = {
  button: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (EnvatoButton);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glide.style.js":
/*!********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/GlideCarousel/glide.style.js ***!
  \********************************************************************************************************************/
/*! exports provided: GlideSlideWrapper, ButtonControlWrapper, ButtonWrapper, BulletControlWrapper, BulletButton, DefaultBtn, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlideSlideWrapper", function() { return GlideSlideWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonControlWrapper", function() { return ButtonControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletControlWrapper", function() { return BulletControlWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletButton", function() { return BulletButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultBtn", function() { return DefaultBtn; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  margin: 10px 3px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #D6D6D6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 // Glide wrapper style

var GlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]); // Glide slide wrapper style

var GlideSlideWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject2(), styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]); // Button wrapper style

var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"]); // ButtonControlWrapper style

var ButtonControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"]); // BulletControlWrapper style

var BulletControlWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"]); // BulletButton style

var BulletButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject6(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"]); // default button style

var DefaultBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject7());

/* harmony default export */ __webpack_exports__["default"] = (GlideWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js":
/*!*******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/GlideCarousel/glideSlide.js ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");
var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\GlideCarousel\\glideSlide.js";


 // Glide Slide wrapper component

var GlideSlide = function GlideSlide(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_2__["GlideSlideWrapper"], {
    className: "glide__slide",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
};

GlideSlide.propTypes = {
  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element
};
/* harmony default export */ __webpack_exports__["default"] = (GlideSlide);

/***/ }),

/***/ "../../node_modules/common/src/components/GlideCarousel/index.js":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/GlideCarousel/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @glidejs/glide */ "@glidejs/glide");
/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @glidejs/glide/dist/css/glide.core.min.css */ "../../node_modules/@glidejs/glide/dist/css/glide.core.min.css");
/* harmony import */ var _glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_glidejs_glide_dist_css_glide_core_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _glide_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./glide.style */ "../../node_modules/common/src/components/GlideCarousel/glide.style.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\GlideCarousel\\index.js";






var GlideCarousel = function GlideCarousel(_ref) {
  var className = _ref.className,
      children = _ref.children,
      options = _ref.options,
      controls = _ref.controls,
      prevButton = _ref.prevButton,
      nextButton = _ref.nextButton,
      prevWrapper = _ref.prevWrapper,
      nextWrapper = _ref.nextWrapper,
      bullets = _ref.bullets,
      numberOfBullets = _ref.numberOfBullets,
      buttonWrapperStyle = _ref.buttonWrapperStyle,
      bulletWrapperStyle = _ref.bulletWrapperStyle,
      bulletButtonStyle = _ref.bulletButtonStyle,
      carouselSelector = _ref.carouselSelector;
  // Add all classs to an array
  var addAllClasses = ['glide']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // number of bullets loop


  var totalBullets = [];

  for (var i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  } // Load glide


  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var glide = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_4___default.a(carouselSelector ? "#".concat(carouselSelector) : '#glide', Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, options));
    glide.mount();
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: addAllClasses.join(' '),
    id: carouselSelector || 'glide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "glide__track",
    "data-glide-el": "track",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "glide__slides",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, children)), controls && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__controls",
    "data-glide-el": "controls"
  }, buttonWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevWrapper, {
    className: "glide__prev--area",
    "data-glide-dir": "<",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), prevButton ? prevButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Prev")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["ButtonWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, nextWrapper, {
    className: "glide__next--area",
    "data-glide-dir": ">",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), nextButton ? nextButton : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["DefaultBtn"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Next"))), bullets && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletControlWrapper"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "glide__bullets",
    "data-glide-el": "controls[nav]"
  }, bulletWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, totalBullets.map(function (index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_glide_style__WEBPACK_IMPORTED_MODULE_6__["BulletButton"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: index,
      className: "glide__bullet",
      "data-glide-dir": "=".concat(index)
    }, bulletButtonStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  }))));
};

GlideCarousel.propTypes = {
  /** className of the GlideCarousel. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Children. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** You can add your custom glid options using this prop. */
  options: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Hide || show controls nav. */
  controls: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Hide || show bullets nav. */
  bullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** This prop only take your slider / carousel / testimonials data length. */
  numberOfBullets: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** bulletWrapperStyle is a bullet control wrapper style object prop.
   * It's contain display, space, alignItems,
   * justifyContent and flexWrap style-system prop.
   */
  bulletWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** buttonWrapperStyle is a button control wrapper style object prop.
   * It's contain same as buttonWrapperStyle style-system prop and
   * position, left, right, top and bottom.
   */
  buttonWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** prevWrapper is a previous button wrapper style object prop.
   * It's contain display, space, bg, borders, boxShadow, borderRadius,
   * position, top, left, right and bottom style-system prop.
   */
  prevWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** nextWrapper is a next button wrapper style object prop.
   * It's contain same as prevWrapper style-system prop.
   */
  nextWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Set previous button for glide carousel. */
  prevButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** Set next button for glide carousel. */
  nextButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object]),

  /** bulletButtonStyle is a bullet button style object prop.
   * It's contain  display, width, height, space,
   * bg, borders, boxShadow and borderRadius style-system prop.
   */
  bulletButtonStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
}; // GlideCarousel default props

GlideCarousel.defaultProps = {
  controls: true,
  bullets: false
};
/* harmony default export */ __webpack_exports__["default"] = (GlideCarousel);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js":
/*!************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: 0;\n  background: transparent;\n  width: 44px;\n  height: 30px;\n  cursor: pointer;\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n\n  > span {\n    display: block;\n    width: 100%;\n    height: 2px;\n    margin: 4px 0;\n    float: right;\n    background-color: ", ";\n    transition: all 0.3s ease;\n    &:first-child {\n      margin-top: 0;\n    }\n    &:last-child {\n      width: calc(100% - 10px);\n      margin-bottom: 0;\n    }\n  }\n  &:focus,\n  &:hover {\n    outline: none;\n    > span {\n      &:last-child {\n        width: 100%;\n      }\n    }\n  }\n\n  &:focus {\n    > span {\n      &:first-child {\n        transform: rotate(45deg);\n        transform-origin: 8px 50%;\n      }\n      &:nth-child(2) {\n        display: none;\n      }\n      &:last-child {\n        width: 100%;\n        transform: rotate(-45deg);\n        transform-origin: 9px 50%;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var HamburgMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["border"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], function (props) {
  return props.barColor ? props.barColor : '#10ac84';
});
HamburgMenuWrapper.displayName = 'HamburgMenuWrapper';
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenuWrapper);

/***/ }),

/***/ "../../node_modules/common/src/components/HamburgMenu/index.js":
/*!************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/HamburgMenu/index.js ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hamburgMenu.style */ "../../node_modules/common/src/components/HamburgMenu/hamburgMenu.style.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\HamburgMenu\\index.js";




var HamburgMenu = function HamburgMenu(_ref) {
  var className = _ref.className,
      wrapperStyle = _ref.wrapperStyle,
      barColor = _ref.barColor,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "wrapperStyle", "barColor"]);

  // Add all classs to an array
  var addAllClasses = ['hamburgMenu__bar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_hamburgMenu_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, wrapperStyle, {
    barColor: barColor,
    "aria-label": "hamburgMenu"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }));
};

HamburgMenu.propTypes = {
  /** ClassName of the Hamburg menu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** barColor allow to change hambrug menu's bar color. */
  barColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** wrapperStyle prop allow to change Hamburg menu bg color, width, height, space, boxShadow, border and borderRadius.*/
  wrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (HamburgMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/ScrollSpyMenu/index.js":
/*!**************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/ScrollSpyMenu/index.js ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\ScrollSpyMenu\\index.js";






var ScrollSpyMenu = function ScrollSpyMenu(_ref) {
  var className = _ref.className,
      menuItems = _ref.menuItems,
      drawerClose = _ref.drawerClose,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "menuItems", "drawerClose"]);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_6__["DrawerContext"]),
      dispatch = _useContext.dispatch; // empty array for scrollspy items


  var scrollItems = []; // convert menu path to scrollspy items

  menuItems.forEach(function (item) {
    scrollItems.push(item.path.slice(1));
  }); // Add all classs to an array

  var addAllClasses = ['scrollspy__menu']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  } // Close drawer when click on menu item


  var toggleDrawer = function toggleDrawer() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: scrollItems,
    className: addAllClasses.join(' '),
    drawerClose: drawerClose
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), menuItems.map(function (menu, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: "menu-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, drawerClose ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      onClick: toggleDrawer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, menu.label) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
      href: menu.path,
      offset: menu.offset,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, menu.label));
  }));
};

ScrollSpyMenu.propTypes = {
  /** className of the ScrollSpyMenu. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** menuItems is an array of object prop which contain your menu
   * data.
   */
  menuItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,

  /** Class name that apply to the navigation element paired with the content element in viewport. */
  currentClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Class name that apply to the navigation elements that have been scrolled past [optional]. */
  scrolledPastClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** HTML tag for Scrollspy component if you want to use other than <ul/> [optional]. */
  componentTag: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Style attribute to be passed to the generated <ul/> element [optional]. */
  style: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Offset value that adjusts to determine the elements are in the viewport [optional]. */
  offset: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /** Name of the element of scrollable container that can be used with querySelector [optional]. */
  rootEl: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Function to be executed when the active item has been updated [optional].
   */
  onUpdate: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
ScrollSpyMenu.defaultProps = {
  componentTag: 'ul',
  currentClassName: 'is-current'
};
/* harmony default export */ __webpack_exports__["default"] = (ScrollSpyMenu);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/index.js":
/*!*************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/UI/Container/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "../../node_modules/common/src/components/UI/Container/style.js");
var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\components\\UI\\Container\\index.js";



var Container = function Container(_ref) {
  var children = _ref.children,
      className = _ref.className,
      fullWidth = _ref.fullWidth,
      noGutter = _ref.noGutter,
      mobileGutter = _ref.mobileGutter,
      width = _ref.width;
  // Add all classs to an array
  var addAllClasses = ['container']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: addAllClasses.join(' '),
    fullWidth: fullWidth,
    noGutter: noGutter,
    width: width,
    mobileGutter: mobileGutter,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "../../node_modules/common/src/components/UI/Container/style.js":
/*!*************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/components/UI/Container/style.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        padding-left: 30px;\n        padding-right: 30px;\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding-left: 30px;\n      padding-right: 30px;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n        padding-left: 0;\n        padding-right: 0;\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: 100%;\n      max-width: none !important;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-left: auto;\n  margin-right: auto;\n  ", ";\n  ", ";\n  @media (min-width: 768px) {\n    max-width: 750px;\n    width: 100%;\n  }\n  @media (min-width: 992px) {\n    max-width: 970px;\n    width: 100%;\n  }\n  @media (min-width: 1220px) {\n    max-width: ", ";\n    width: 100%;\n  }\n  @media (max-width: 768px) {\n    ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ContainerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.fullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2());
}, function (props) {
  return props.noGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3()) || Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4());
}, function (props) {
  return props.width || '1170px';
}, function (props) {
  return props.mobileGutter && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5());
});
/* harmony default export */ __webpack_exports__["default"] = (ContainerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Awards/awards.style.js":
/*!************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Awards/awards.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: AwardSectionWrapper, AwardItem, AwardeeWrapper, AwardImageWrapper, AwardeeLogo, AwardeeDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardSectionWrapper", function() { return AwardSectionWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardItem", function() { return AwardItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardeeWrapper", function() { return AwardeeWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardImageWrapper", function() { return AwardImageWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardeeLogo", function() { return AwardeeLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardeeDetails", function() { return AwardeeDetails; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right: 20px;\n  flex-shrink: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  min-height: 97px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 25px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 50px 30px;\n  background: #fff;\n  border-radius: 10px;\n  @media (max-width: 1200px) {\n    padding: 40px 20px;\n  }\n\n  img {\n    max-width: 100%;\n    height: auto;\n    display: block;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 150px 0;\n  background-color: #f9f9f9;\n  @media (max-width: 1200px) {\n    padding: 110px 0;\n  }\n  @media (max-width: 990px) {\n    padding: 100px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 80px 0;\n  }\n  @media (max-width: 575px) {\n    padding: 60px 0;\n  }\n\n  .glide__controls {\n    position: absolute;\n    top: -155px;\n    right: 0;\n    @media (max-width: 767px) {\n      top: -60px;\n      left: 0;\n      right: auto;\n    }\n    @media (max-width: 575px) {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var AwardSectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
var AwardItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var AwardeeWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var AwardImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var AwardeeLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var AwardeeDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Awards/index.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Awards/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var _containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../containers/Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _awards_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./awards.style */ "../../node_modules/common/src/containers/Portfolio/Awards/awards.style.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Awards\\index.js";













var AwardsSection = function AwardsSection(_ref) {
  var secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      awardLogoStyle = _ref.awardLogoStyle,
      awardNameStyle = _ref.awardNameStyle,
      awardDetailsStyle = _ref.awardDetailsStyle,
      awardeeLogoStyle = _ref.awardeeLogoStyle,
      awardeeNameStyle = _ref.awardeeNameStyle,
      awardDateStyle = _ref.awardDateStyle;
  //Carousel Options
  var carouselOptions = {
    type: 'carousel',
    autoplay: 4000,
    perView: 4,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3
      },
      767: {
        perView: 2
      },
      500: {
        perView: 1
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_awards_style__WEBPACK_IMPORTED_MODULE_12__["AwardSectionWrapper"], {
    id: "awards_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "Honorable Recognitions & Awards",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Year after year, Blue Label Labs has been recognized as one of the top design and development firms in New York City. It\u2019s nice to feel appreciated!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    carouselSelector: "awards-carousel",
    options: carouselOptions,
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__["PrevButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })),
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__["NextButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_10__["AWARDS"].map(function (award, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: "award-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_awards_style__WEBPACK_IMPORTED_MODULE_12__["AwardItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_awards_style__WEBPACK_IMPORTED_MODULE_12__["AwardImageWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: award.awardLogo,
      alt: "award-logo-".concat(index)
    }, awardLogoStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: award.awardName
    }, awardNameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: award.awardDetails
    }, awardDetailsStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_awards_style__WEBPACK_IMPORTED_MODULE_12__["AwardeeWrapper"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_awards_style__WEBPACK_IMPORTED_MODULE_12__["AwardeeLogo"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: award.awardeeLogo,
      alt: "awardee-logo-".concat(index)
    }, awardeeLogoStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_awards_style__WEBPACK_IMPORTED_MODULE_12__["AwardeeDetails"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: award.awardeeName
    }, awardeeNameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: award.date
    }, awardDateStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }))))));
  })))));
};

AwardsSection.propTypes = {
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  awardLogoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  awardNameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  awardDetailsStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  awardeeLogoStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  awardeeNameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  awardDateStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ['100%', '100%', '60%', '50%', '50%'],
    mb: '90px'
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px']
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0'
  },
  awardLogoStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '25px'
  },
  awardNameStyle: {
    fontSize: ['16px', '16px', '18px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.35',
    textAlign: 'center',
    mb: '17px'
  },
  awardDetailsStyle: {
    fontSize: ['15px', '15px', '15px', '16px'],
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    mb: '0'
  },
  awardeeNameStyle: {
    fontSize: '16px',
    color: '#9391a5',
    lineHeight: '1.35',
    fontWeight: '600',
    mb: '4px'
  },
  awardDateStyle: {
    fontSize: '12px',
    color: '#9391a5',
    lineHeight: '1.35',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (AwardsSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Banner/banner.style.js":
/*!************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Banner/banner.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: #030b16;\n  display: flex;\n  align-items: center;\n  padding-top: 80px;\n  display: flex;\n  align-items: flex-end;\n  @media (min-width: 991px) {\n    min-height: 100vh;\n  }\n\n  .image_area {\n    @media (max-width: 767px) {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var BannerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (BannerWrapper);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Banner/index.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Banner/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _SocialProfile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SocialProfile */ "../../node_modules/common/src/containers/Portfolio/SocialProfile/index.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./banner.style */ "../../node_modules/common/src/containers/Portfolio/Banner/banner.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var react_icons_kit_feather_cornerDownRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/feather/cornerDownRight */ "react-icons-kit/feather/cornerDownRight");
/* harmony import */ var react_icons_kit_feather_cornerDownRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_feather_cornerDownRight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_portfolio_person_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../assets/image/portfolio/person.png */ "../../node_modules/common/src/assets/image/portfolio/person.png");
/* harmony import */ var _assets_image_portfolio_person_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_person_png__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Banner\\index.js";














var BannerSection = function BannerSection(_ref) {
  var row = _ref.row,
      contentArea = _ref.contentArea,
      imageArea = _ref.imageArea,
      greetingStyle = _ref.greetingStyle,
      nameStyle = _ref.nameStyle,
      designationStyle = _ref.designationStyle,
      aboutStyle = _ref.aboutStyle,
      roleStyle = _ref.roleStyle,
      roleWrapper = _ref.roleWrapper;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_banner_style__WEBPACK_IMPORTED_MODULE_10__["default"], {
    id: "banner_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contentArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Hello, I\u2019m"
  }, greetingStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Mat Helme"
  }, nameStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Visual System Designer"
  }, designationStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, roleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default.a, {
    icon: react_icons_kit_feather_cornerDownRight__WEBPACK_IMPORTED_MODULE_12__["cornerDownRight"],
    style: {
      color: '#3444f1'
    },
    size: 22,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Illustrative Lead at Google"
  }, roleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Focused on defining principle driven visual systems that scale to global products and brands. Lately, I've been putting a lot of thought into personalized illustrative languages and getting machines to draw."
  }, aboutStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialProfile__WEBPACK_IMPORTED_MODULE_9__["default"], {
    items: _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__["SOCIAL_PROFILES"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, imageArea, {
    className: "image_area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], {
    src: _assets_image_portfolio_person_png__WEBPACK_IMPORTED_MODULE_13___default.a,
    alt: "Mat Helme",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })))));
};

BannerSection.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  contentArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  imageArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  greetingStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  designationStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  aboutStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  roleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  roleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'stretch'
  },
  contentArea: {
    width: ['100%', '100%', '50%', '40%'],
    p: ['65px 0 80px 0', '65px 0 80px 0', '80px 0 60px 0', '0'],
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  imageArea: {
    width: ['100%', '100%', '50%', '60%'],
    flexBox: true,
    alignItems: 'flex-end'
  },
  greetingStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '500',
    mb: '8px'
  },
  nameStyle: {
    as: 'h2',
    color: '#fff',
    fontSize: ['38px', '38px', '44px', '60px', '80px'],
    fontWeight: '800',
    mb: '6px'
  },
  designationStyle: {
    as: 'h3',
    color: '#fff',
    fontSize: ['18px', '18px', '18px', '20px', '30px'],
    fontWeight: '700',
    mb: ['30px', '30px', '25px', '30px', '30px']
  },
  roleWrapper: {
    flexBox: true,
    mb: '28px'
  },
  roleStyle: {
    as: 'h4',
    fontSize: ['18px', '18px', '18px', '18px', '20px'],
    fontWeight: '500',
    color: '#fff',
    mb: '0',
    ml: '10px'
  },
  aboutStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#fff',
    lineHeight: '1.5',
    mb: '50px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (BannerSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/CallToAction/callToAction.style.js":
/*!************************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/CallToAction/callToAction.style.js ***!
  \************************************************************************************************************************************/
/*! exports provided: CallToActionWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionWrapper", function() { return CallToActionWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: #fff;\n  padding: 40px 80px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: -105px;\n  @media (max-width: 990px) {\n    padding: 35px 40px;\n  }\n  @media (max-width: 575px) {\n    padding: 35px 20px;\n  }\n  @media (max-width: 767px) {\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var CallToActionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/CallToAction/index.js":
/*!***********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/CallToAction/index.js ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _callToAction_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./callToAction.style */ "../../node_modules/common/src/containers/Portfolio/CallToAction/callToAction.style.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\CallToAction\\index.js";










var CallToAction = function CallToAction(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      textArea = _ref.textArea,
      buttonArea = _ref.buttonArea,
      buttonStyle = _ref.buttonStyle,
      title = _ref.title,
      description = _ref.description;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_callToAction_style__WEBPACK_IMPORTED_MODULE_9__["CallToActionWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, textArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "What\u2019s cooking in the lab?"
  }, title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "The place to find the latest industry trends, new Blue Label Labs app launches and information to keep you at the top your tech game."
  }, description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_8__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "READ OUR BLOG ",
    className: "portfolio_button"
  }, buttonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })))))));
};

CallToAction.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  textArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
CallToAction.defaultProps = {
  sectionWrapper: {},
  textArea: {
    width: ['100%', '100%', '55%'],
    mb: ['40px', '40px', '0', '0', '0']
  },
  title: {
    fontSize: ['20px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '15px', '18px', '22px', '22px'],
    textAlign: ['center', 'center', 'left', 'left', 'left']
  },
  description: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: 0,
    textAlign: ['center', 'center', 'left', 'left', 'left']
  },
  buttonArea: {
    zIndex: 1
  },
  buttonStyle: {
    type: 'button',
    fontSize: ['14px', '14px', '15px', '16px', '16px'],
    fontWeight: '500',
    color: '#fff',
    pl: '35px',
    pr: '35px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (CallToAction);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Clients/clients.style.js":
/*!**************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Clients/clients.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: ClientsImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsImage", function() { return ClientsImage; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  padding: 20px 28px;\n  flex-shrink: 0;\n  &:hover {\n    img {\n      filter: grayscale(0);\n      opacity: 1;\n    }\n  }\n\n  img {\n    filter: grayscale(1);\n    opacity: 0.5;\n    transition: 0.3s ease-in-out;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ClientsImage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Clients/index.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Clients/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var _clients_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clients.style */ "../../node_modules/common/src/containers/Portfolio/Clients/clients.style.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Clients\\index.js";










var ClientsSection = function ClientsSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      row = _ref.row;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    noGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "We can build your story.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Through the years we have partnered with great companies and entrepreneurs all over the world.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_8__["CLIENTS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_clients_style__WEBPACK_IMPORTED_MODULE_9__["ClientsImage"], {
      key: "client-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
      src: item.image,
      alt: item.title,
      title: item.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }));
  }))));
};

ClientsSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ClientsSection.defaultProps = {
  sectionWrapper: {
    pt: ['40px', '60px', '80px', '80px', '80px'],
    pb: ['60px', '80px', '100px', '130px', '130px']
  },
  secTitleWrapper: {
    mb: '60px'
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center'
  },
  secDescription: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ClientsSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Contact/contact.style.js":
/*!**************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Contact/contact.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: ActiveStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveStatus", function() { return ActiveStatus; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: relative;\n  flex-shrink: 0;\n  margin-right: 20px;\n  &:before {\n    content: '';\n    position: absolute;\n    display: block;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #00ff24;\n    border: 3px solid #fff;\n    right: -2px;\n    bottom: -2px;\n  }\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ActiveStatus = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Contact/index.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Contact/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _contact_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact.style */ "../../node_modules/common/src/containers/Portfolio/Contact/contact.style.js");
/* harmony import */ var _assets_image_portfolio_avatar_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../assets/image/portfolio/avatar.png */ "../../node_modules/common/src/assets/image/portfolio/avatar.png");
/* harmony import */ var _assets_image_portfolio_avatar_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_avatar_png__WEBPACK_IMPORTED_MODULE_11__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Contact\\index.js";












var ContactSection = function ContactSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      replyWrapper = _ref.replyWrapper,
      replyTime = _ref.replyTime,
      buttonStyle = _ref.buttonStyle,
      buttonWrapper = _ref.buttonWrapper;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "Let\u2019s Work Together",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "If you have a website or mobile app idea in mind or you need some advice about product design, feel free to contact me. Currently my time books quickly, so the sooner you write, the better it is for both of us.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, replyWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_contact_style__WEBPACK_IMPORTED_MODULE_10__["ActiveStatus"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    src: _assets_image_portfolio_avatar_png__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Author Avatar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "h4",
    content: "Reply time: within 1-2 working days"
  }, replyTime, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_9__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "hello@danielkorpai.com",
    className: "portfolio_button"
  }, buttonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))))));
};

ContactSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  replyWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  replyTime: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ContactSection.defaultProps = {
  sectionWrapper: {
    pt: ['70px', '80px', '100px', '110px', '140px'],
    pb: ['70px', '80px', '100px', '110px', '140px'],
    bg: '#f9f9f9'
  },
  secTitleWrapper: {
    mb: '30px'
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center'
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto',
    mb: '0'
  },
  replyWrapper: {
    flexBox: true,
    alignItems: 'center',
    justifyContent: 'center'
  },
  replyTime: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#302b4e',
    mb: 0
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px'
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '50px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ContactSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Footer/footer.style.js":
/*!************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Footer/footer.style.js ***!
  \************************************************************************************************************************/
/*! exports provided: FooterWrapper, Newsletter, FooterNav, FooterNavItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterWrapper", function() { return FooterWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Newsletter", function() { return Newsletter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNav", function() { return FooterNav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterNavItem", function() { return FooterNavItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: inline-block;\n  margin-right: 30px;\n  &:last-child {\n    margin-right: 0;\n  }\n\n  a {\n    color: #fff;\n    font-size: 14px;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: #3444f1;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin: 0;\n  padding: 0;\n  margin-left: auto;\n  @media (max-width: 575px) {\n    margin-left: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  background: #fff;\n  border-radius: 6px;\n  height: 60px;\n\n  .reusecore__input {\n    flex-grow: 1;\n    * {\n      height: 100%;\n    }\n    input {\n      border: none;\n      padding-left: 22px;\n      color: #302b4e;\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n  .reusecore__button {\n    font-weight: 700;\n    font-family: 'Raleway', sans-serif;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  overflow: hidden;\n  background-color: #1b1e25;\n  padding: 100px 0;\n  color: #fff;\n  @media (max-width: 990px) {\n    padding: 80px 0;\n  }\n  @media (max-width: 767px) {\n    padding: 70px 0 50px 0;\n  }\n  @media (max-width: 575px) {\n    padding: 70px 0 0 0;\n  }\n\n  .heart_sign {\n    color: #ed1225;\n    margin-left: 10px;\n  }\n\n  .footer_social {\n    margin-bottom: 30px;\n    @media (max-width: 767px) {\n      margin-bottom: 20px;\n    }\n    a {\n      svg {\n        @media (max-width: 990px) {\n          width: 25px;\n          height: 25px;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var FooterWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(_templateObject());
var Newsletter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var FooterNav = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject3());
var FooterNavItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject4());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Footer/index.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Footer/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Input */ "../../node_modules/reusecore/src/elements/Input/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _SocialProfile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../SocialProfile */ "../../node_modules/common/src/containers/Portfolio/SocialProfile/index.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer.style */ "../../node_modules/common/src/containers/Portfolio/Footer/footer.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var react_icons_kit_fa_heart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/fa/heart */ "react-icons-kit/fa/heart");
/* harmony import */ var react_icons_kit_fa_heart__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_heart__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Footer\\index.js";
















var Footer = function Footer(_ref) {
  var row = _ref.row,
      col = _ref.col,
      titleStyle = _ref.titleStyle,
      linkStyle = _ref.linkStyle,
      newsletterButton = _ref.newsletterButton,
      copyrightStyle = _ref.copyrightStyle,
      contactItem = _ref.contactItem,
      flexBox = _ref.flexBox,
      contactTitle = _ref.contactTitle,
      contactInfo = _ref.contactInfo,
      noMargin = _ref.noMargin;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_12__["FooterWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "h3",
    content: "So, do we work together?"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "h3",
    content: "LET'S TALK!"
  }, linkStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "h3",
    content: "A treat for your inbox"
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_12__["Newsletter"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Input__WEBPACK_IMPORTED_MODULE_9__["default"], {
    inputType: "email",
    placeholder: "Email address",
    iconPosition: "right",
    isMaterial: false,
    className: "email_input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, newsletterButton, {
    title: "Subscribe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_SocialProfile__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "footer_social",
    items: _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__["SOCIAL_PROFILES"],
    iconSize: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "span",
    content: "\xA9 2018 All rights reserved. "
  }, copyrightStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "span",
    content: " RedQ, Inc."
  }, copyrightStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, flexBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contactItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Need help?"
  }, contactTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "me@ekkrit.design"
  }, contactInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, contactItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Feel like talking"
  }, contactTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "+66 8546 13501"
  }, contactInfo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, noMargin, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: "span",
    content: "Built & designed with"
  }, copyrightStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    icon: react_icons_kit_fa_heart__WEBPACK_IMPORTED_MODULE_14__["heart"],
    size: 14,
    className: "heart_sign",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, flexBox, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_12__["FooterNav"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__["FOOTER_MENU"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_footer_style__WEBPACK_IMPORTED_MODULE_12__["FooterNavItem"], {
      key: "footer-nav-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.path || '#',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, item.label)));
  }))))));
};

Footer.propTypes = {
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  linkStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  newsletterButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  copyrightStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  contactItem: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  contactTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  contactInfo: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  noMargin: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Footer.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    ml: '-15px',
    mr: '-15px',
    mb: ['0', '70px', '80px', '100px', '100px']
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3, 1 / 3],
    pl: '15px',
    pr: '15px',
    mb: ['40px', '0', '0', '0', '0', '0']
  },
  titleStyle: {
    fontSize: ['16px', '18px'],
    fontWeight: '600',
    mb: ['20px', '25px']
  },
  linkStyle: {
    fontSize: ['22px', '26px', '26px', '30px'],
    color: '#3444f1',
    mb: 0
  },
  newsletterButton: {
    type: 'button',
    fontSize: '16px',
    pl: '20px',
    pr: '20px',
    colors: 'primary',
    minHeight: 'auto'
  },
  copyrightStyle: {
    fontSize: '14px',
    color: '#fff'
  },
  flexBox: {
    flexBox: true,
    justifyContent: 'space-between' // flexWrap: 'wrap'

  },
  contactItem: {// width: 1 / 2
  },
  contactTitle: {
    fontSize: ['15x', '15px', '16px', '16px', '16px'],
    mb: '10px'
  },
  contactInfo: {
    fontSize: ['16x', '16px', '18px', '18px', '20px'],
    fontWeight: '500',
    mb: 0
  },
  noMargin: {
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Navbar/index.js":
/*!*****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Navbar/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Navbar */ "../../node_modules/reusecore/src/elements/Navbar/index.js");
/* harmony import */ var reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Drawer */ "../../node_modules/reusecore/src/elements/Drawer/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/UI/Logo */ "../../node_modules/reusecore/src/elements/UI/Logo/index.js");
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var _components_HamburgMenu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/HamburgMenu */ "../../node_modules/common/src/components/HamburgMenu/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var _components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ScrollSpyMenu */ "../../node_modules/common/src/components/ScrollSpyMenu/index.js");
/* harmony import */ var _assets_image_portfolio_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../assets/image/portfolio/logo.png */ "../../node_modules/common/src/assets/image/portfolio/logo.png");
/* harmony import */ var _assets_image_portfolio_logo_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_logo_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_portfolio_logo_alt_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../assets/image/portfolio/logo-alt.png */ "../../node_modules/common/src/assets/image/portfolio/logo-alt.png");
/* harmony import */ var _assets_image_portfolio_logo_alt_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_logo_alt_png__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Navbar\\index.js";
















var Navbar = function Navbar(_ref) {
  var navbarStyle = _ref.navbarStyle,
      logoStyle = _ref.logoStyle,
      button = _ref.button,
      row = _ref.row,
      menuWrapper = _ref.menuWrapper;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_11__["DrawerContext"]),
      state = _useContext.state,
      dispatch = _useContext.dispatch; // Toggle drawer


  var toggleHandler = function toggleHandler() {
    dispatch({
      type: 'TOGGLE'
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, navbarStyle, {
    className: "portfolio_navbar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_portfolio_logo_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "main-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_UI_Logo__WEBPACK_IMPORTED_MODULE_7__["default"], {
    href: "#",
    logoSrc: _assets_image_portfolio_logo_alt_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    title: "Portfolio",
    logoStyle: logoStyle,
    className: "logo-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, menuWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "main_menu",
    menuItems: _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_12__["MENU_ITEMS"],
    offset: -70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "LET'S TALK",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Drawer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "420px",
    placement: "right",
    drawerHandler: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HamburgMenu__WEBPACK_IMPORTED_MODULE_9__["default"], {
      barColor: "#3444f1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }),
    open: state.isOpen,
    toggleHandler: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ScrollSpyMenu__WEBPACK_IMPORTED_MODULE_13__["default"], {
    className: "mobile_menu",
    menuItems: _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_12__["MENU_ITEMS"],
    drawerClose: true,
    offset: -100,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "navbar_drawer_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, button, {
    title: "LET'S TALK",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  })))))))));
};

Navbar.propTypes = {
  navbarStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  button: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  menuWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Navbar.defaultProps = {
  navbarStyle: {
    minHeight: '70px',
    display: 'block'
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  logoStyle: {
    maxWidth: ['120px', '130px']
  },
  button: {
    type: 'button',
    fontSize: '16px',
    pl: '0',
    pr: '0',
    colors: 'primary',
    minHeight: 'auto'
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/PortfolioShowcase/index.js":
/*!****************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/PortfolioShowcase/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-tabs */ "rc-tabs");
/* harmony import */ var rc_tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_tabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-tabs/lib/TabContent */ "rc-tabs/lib/TabContent");
/* harmony import */ var rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rc-tabs/lib/ScrollableInkTabBar */ "rc-tabs/lib/ScrollableInkTabBar");
/* harmony import */ var rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolioShowcase.style */ "../../node_modules/common/src/containers/Portfolio/PortfolioShowcase/portfolioShowcase.style.js");
/* harmony import */ var _containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../containers/Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\PortfolioShowcase\\index.js";

















var PortfolioShowcase = function PortfolioShowcase(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      portfolioImage = _ref.portfolioImage,
      portfolioDetails = _ref.portfolioDetails,
      titleStyle = _ref.titleStyle,
      detailsStyle = _ref.detailsStyle;
  //Carousel Options
  var carouselOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
    animationDuration: 900
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    id: "portfolio_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "Making Ideas Come to Life !",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Year after year, Blue Label Labs has been recognized as one of the top design and development firms in New York City. It\u2019s nice to feel appreciated!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["PortfolioShowcaseWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4___default.a, {
    renderTabBar: function renderTabBar() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_ScrollableInkTabBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      });
    },
    renderTabContent: function renderTabContent() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs_lib_TabContent__WEBPACK_IMPORTED_MODULE_5___default.a, {
        animated: false,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_16__["PORTFOLIO_SHOWCASE"].map(function (tabItem, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_tabs__WEBPACK_IMPORTED_MODULE_4__["TabPane"], {
      tab: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__["default"], {
        content: tabItem.title,
        "data-text": tabItem.title,
        as: "span",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }),
      key: index + 1,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_12__["default"], {
      carouselSelector: "portfolio-showcase-carousel-".concat(index + 1),
      options: carouselOptions,
      prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_15__["PrevButton"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      })),
      nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_15__["NextButton"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, tabItem.portfolioItem.map(function (portfolioItem, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "PortfolioShowcaseItem-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["PortfolioShowcaseItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, portfolioImage, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_10__["default"], {
        src: portfolioItem.image,
        alt: "PortfolioImage-".concat(index + 1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, portfolioDetails, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["PortfolioLink"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: portfolioItem.link || '#',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, "VISIT LIVE SITE"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: portfolioItem.title
      }, titleStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: portfolioItem.description
      }, detailsStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      })), portfolioItem.buildWith ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["BuiltWith"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, portfolioItem.buildWith.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          key: "buildWith-item-".concat(index),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 114
          },
          __self: this
        }, item.content);
      })) : ''), portfolioItem.featuredIn || portfolioItem.view || portfolioItem.love || portfolioItem.feedback ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["PortfolioMeta"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, portfolioItem.featuredIn ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["MetaItem"], {
        className: "meta_featured",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "FEATURED IN", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: portfolioItem.featuredLink || '#',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, portfolioItem.featuredIn))) : '', portfolioItem.view ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["MetaItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, portfolioItem.view), " View") : '', portfolioItem.love ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["MetaItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, portfolioItem.love), " Love") : '', portfolioItem.feedback ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_portfolioShowcase_style__WEBPACK_IMPORTED_MODULE_14__["MetaItem"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, portfolioItem.feedback), " Feedback") : '') : ''));
    }))));
  })))));
};

PortfolioShowcase.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  portfolioImage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  portfolioDetails: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  detailsStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
PortfolioShowcase.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '150px'],
    pb: ['60px', '80px', '100px', '110px', '150px']
  },
  secTitleWrapper: {
    width: ['100%', '100%', '60%', '50%', '50%'],
    mb: ['50px', '65px']
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px']
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0'
  },
  portfolioImage: {
    width: [1, 1, 1 / 2]
  },
  portfolioDetails: {
    width: [1, 1, 1 / 2],
    p: ['30px 0 0 0', '40px 0 0 0', '0 0 0 30px', '0 50px', '0 50px']
  },
  titleStyle: {
    fontSize: ['22px', '22px', '26px', '40px', '40px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '17px'
  },
  detailsStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (PortfolioShowcase);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/PortfolioShowcase/portfolioShowcase.style.js":
/*!**********************************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/PortfolioShowcase/portfolioShowcase.style.js ***!
  \**********************************************************************************************************************************************/
/*! exports provided: PortfolioShowcaseWrapper, PortfolioShowcaseItem, PortfolioLink, BuiltWith, PortfolioMeta, MetaItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioShowcaseWrapper", function() { return PortfolioShowcaseWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioShowcaseItem", function() { return PortfolioShowcaseItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioLink", function() { return PortfolioLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltWith", function() { return BuiltWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioMeta", function() { return PortfolioMeta; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaItem", function() { return MetaItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right: 45px;\n  font-size: 16px;\n  color: #43414e;\n  font-family: 'Raleway', sans-serif;\n  font-weight: 400;\n  @media (max-width: 990px) {\n    font-size: 14px;\n    margin-right: 25px;\n  }\n  @media (max-width: 767px) {\n    padding-bottom: 10px;\n  }\n  &:last-child {\n    margin-right: 0;\n  }\n\n  &.meta_featured {\n    font-weight: 500;\n    margin-right: 70px;\n    @media (max-width: 990px) {\n      margin-right: 40px;\n    }\n    @media (max-width: 575px) {\n      width: 100%;\n      margin-bottom: 5px;\n    }\n    > a {\n      margin-left: 0.4em;\n    }\n  }\n  > a {\n    color: #3444f1;\n    font-weight: 700;\n  }\n  > b {\n    font-family: 'roboto', sans-serif;\n    margin-right: 5px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 100%;\n  max-width: calc(100% - 200px);\n  margin-top: 70px;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  @media (max-width: 990px) {\n    margin-top: 50px;\n    max-width: calc(100% - 100px);\n  }\n  @media (max-width: 575px) {\n    margin-top: 30px;\n    max-width: 100%;\n    margin-bottom: 15px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-top: 60px;\n  @media (max-width: 990px) {\n    margin-top: 30px;\n  }\n  > span {\n    display: inline-block;\n    font-size: 16px;\n    font-weight: 600;\n    color: #3444f1;\n    font-family: 'Raleway', sans-serif;\n    padding: 5px 22px;\n    position: relative;\n    @media (max-width: 990px) {\n      font-size: 14px;\n      padding: 5px 10px;\n    }\n    &:first-child {\n      padding-left: 0;\n    }\n    &:last-child {\n      padding-right: 0;\n      &:after {\n        display: none;\n      }\n    }\n    &:after {\n      content: '|';\n      position: absolute;\n      display: block;\n      top: 50%;\n      right: 0;\n      transform: translateY(-50%);\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-bottom: 36px;\n  @media (max-width: 990px) {\n    margin-bottom: 25px;\n  }\n  @media (max-width: 575px) {\n    margin-bottom: 15px;\n  }\n  a {\n    font-size: 16px;\n    font-weight: 700;\n    font-family: 'Raleway', sans-serif;\n    color: #3444f1;\n    position: relative;\n    padding: 0 0 2px 8px;\n    @media (max-width: 990px) {\n      font-size: 15px;\n    }\n    @media (max-width: 575px) {\n      font-size: 14px;\n    }\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      width: 58px;\n      height: 15px;\n      position: absolute;\n      background: #eaecfe;\n      bottom: 0;\n      left: 0;\n      z-index: -1;\n    }\n    &:after {\n      background: #c2c7fb;\n      transform: scaleX(0);\n      transform-origin: right center 0;\n      transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n    }\n    &:hover {\n      &:after {\n        transform: scaleX(1);\n        transform-origin: left center 0;\n        transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  @keyframes FadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(30px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n\n  .glide__controls {\n    position: absolute;\n    bottom: -12px;\n    right: 0;\n    @media (max-width: 990px) {\n      bottom: 23px;\n    }\n    @media (max-width: 575px) {\n      top: -50px;\n      right: 50%;\n      bottom: auto;\n      transform: translateX(50%);\n    }\n  }\n\n  .rc-tabs-bar {\n    border: none !important;\n    margin-bottom: 80px;\n    @media (max-width: 990px) {\n      margin-bottom: 45px;\n    }\n    @media (max-width: 575px) {\n      margin-bottom: 65px;\n    }\n    &:focus,\n    *:focus {\n      outline: none;\n    }\n    .rc-tabs-nav-scroll {\n      .rc-tabs-nav {\n        .rc-tabs-tab {\n          font-size: 16px;\n          font-weight: 700;\n          font-family: 'Raleway', sans-serif;\n          color: #43414e;\n          display: inline-block;\n          margin-right: 40px;\n          cursor: pointer;\n          @media (max-width: 990px) {\n            font-size: 15px;\n            margin-right: 35px;\n            padding-bottom: 20px;\n          }\n          @media (max-width: 575px) {\n            margin-right: 20px;\n            font-size: 14px;\n          }\n          &:last-child {\n            margin-right: 0;\n          }\n          &.rc-tabs-tab-active {\n            > span {\n              &:before {\n                width: 100%;\n              }\n            }\n          }\n          &:hover {\n            > span {\n              &:before {\n                width: 100%;\n              }\n            }\n          }\n          > span {\n            position: relative;\n            display: block;\n            margin: 0;\n            overflow: hidden;\n            &:before {\n              content: attr(data-text);\n              position: absolute;\n              top: 0;\n              left: 0;\n              width: 0;\n              color: #3444f1;\n              overflow: hidden;\n              white-space: nowrap;\n              transition: 0.5s ease-in-out;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .rc-tabs-content {\n    .rc-tabs-tabpane {\n      display: none;\n      overflow: initial;\n\n      &.rc-tabs-tabpane-active {\n        display: block;\n        animation: 0.7s FadeInUp;\n      }\n    }\n  }\n\n  .rc-tabs-ink-bar {\n    display: none !important;\n  }\n\n  .rc-tabs-top {\n    border: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var PortfolioShowcaseWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var PortfolioShowcaseItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var PortfolioLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var BuiltWith = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var PortfolioMeta = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var MetaItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject6());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Process/index.js":
/*!******************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Process/index.js ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Button */ "../../node_modules/reusecore/src/elements/Button/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit/feather/plus */ "react-icons-kit/feather/plus");
/* harmony import */ var react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _process_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./process.style */ "../../node_modules/common/src/containers/Portfolio/Process/process.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Process\\index.js";














var ProcessSection = function ProcessSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      processRow = _ref.processRow,
      processCol = _ref.processCol,
      processImageStyle = _ref.processImageStyle,
      processTitleStyle = _ref.processTitleStyle,
      processDescriptionStyle = _ref.processDescriptionStyle,
      learningRow = _ref.learningRow,
      learningContentArea = _ref.learningContentArea,
      learningListArea = _ref.learningListArea,
      learningTitle = _ref.learningTitle,
      learningSubTitle = _ref.learningSubTitle,
      learningDescription = _ref.learningDescription,
      buttonWrapper = _ref.buttonWrapper,
      buttonLabelStyle = _ref.buttonLabelStyle,
      buttonStyle = _ref.buttonStyle,
      learningList = _ref.learningList,
      listItem = _ref.listItem,
      listText = _ref.listText,
      listTitle = _ref.listTitle;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    id: "process_section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "From Lean Design Sprints to Agile Development",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Our process is designed to give you the best shot at success.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, processRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__["PROCESS_STEPS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, processCol, {
      key: "process-item-".concat(index),
      className: "process_item_col",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_process_style__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: "process_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      src: item.image,
      alt: "process-image-".concat(index + 1)
    }, processImageStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.title
    }, processTitleStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, processDescriptionStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }))));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningRow, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningContentArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Which is why we Never Stop Learning."
  }, learningTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "We believe that we succeed when our clients succeed."
  }, learningSubTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningDescription, {
    content: "I\u2019m Tom Parkes, a New Zealand born digital designer currently looking for opportunities in Canada. Over the 8 years of my career, my portfolio includes user interface design, brand & identity design, illustration, and art & creative direction.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningDescription, {
    content: "While at Neverbland over the last few years, I've worked on web and product solutions for a range of startups, in a variety of industries.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: "Start Your Project ?"
  }, buttonLabelStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_11__["ButtonWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Button__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    title: "hello@danielkorpai.com",
    className: "portfolio_button"
  }, buttonStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningListArea, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }), _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_13__["SERVICE_LIST"].map(function (serviceList, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, learningList, {
      key: "serviceList-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: serviceList.title
    }, listTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), serviceList.listItems.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, listItem, {
        key: "list-item-".concat(index),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
        icon: item.icon || react_icons_kit_feather_plus__WEBPACK_IMPORTED_MODULE_10__["plus"],
        size: item.iconSize || 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        as: "span",
        content: item.content
      }, listText, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      })));
    }));
  })))));
};

ProcessSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processCol: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processImageStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processTitleStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  processDescriptionStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningRow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningContentArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningListArea: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningSubTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonLabelStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  buttonStyle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  learningList: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  listText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  listTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
ProcessSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '90px', '100px', '140px'],
    pb: ['10px', '40px', '30px', '50px', '50px']
  },
  secTitleWrapper: {
    mb: ['60px', '105px']
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center'
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center'
  },
  processRow: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['0', '-15px', '-30px', '-70px', '-70px'],
    mr: ['0', '-15px', '-30px', '-70px', '-70px']
  },
  processCol: {
    width: [1, 1 / 3],
    pl: ['0', '15px', '30px', '70px', '70px'],
    pr: ['0', '15px', '30px', '70px', '70px'],
    mb: '40px'
  },
  processImageStyle: {
    ml: 'auto',
    mr: 'auto',
    mb: '35px'
  },
  processTitleStyle: {
    fontSize: ['20px', '18px', '20px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    textAlign: 'center',
    mb: ['20px', '20px', '27px', '27px', '27px']
  },
  processDescriptionStyle: {
    fontSize: ['15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    textAlign: 'center',
    lineHeight: '1.5'
  },
  learningRow: {
    flexBox: true,
    flexWrap: 'wrap',
    mt: ['20px', '30px', '70px', '80px', '110px']
  },
  learningContentArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
    pr: ['0px', '0px', '60px', '80px', '160px'],
    mb: ['70px', '70px', '0', '0', '0']
  },
  learningTitle: {
    fontSize: ['22px', '22px', '24px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['20px', '20px', '15px', '20px', '20px'],
    pr: ['0', '0', '0', '65px', '65px']
  },
  learningSubTitle: {
    fontSize: ['16px', '16px', '18px', '20px', '20px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '20px',
    pr: ['0', '0', '0', '65px', '65px']
  },
  learningDescription: {
    fontSize: '16px',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '25px'
  },
  buttonWrapper: {
    flexBox: true,
    alignItems: 'center',
    mt: ['30px', '40px', '40px', '80px', '80px'],
    flexWrap: ['wrap']
  },
  buttonLabelStyle: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#3444f1',
    mb: ['20px', '20px', '20px', '0', '0'],
    mr: '30px',
    width: ['100%', '100%', '100%', 'auto', 'auto']
  },
  buttonStyle: {
    type: 'button',
    fontSize: '16px',
    fontWeight: '500',
    color: '#fff',
    pl: '23px',
    pr: '23px'
  },
  learningListArea: {
    width: ['100%', '100%', '50%', '50%', '50%'],
    flexBox: true,
    flexWrap: 'wrap'
  },
  learningList: {
    width: ['100%', '33.3333333%', '50%', '50%', '50%'],
    pl: ['0', '0', '35px', '35px', '35x'],
    pr: ['0', '30px', '0', '0', '0'],
    mb: ['40px', '40px', '60px', '80px', '90px']
  },
  listTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#302b4e',
    mb: '25px'
  },
  listItem: {
    flexBox: true,
    alignItems: 'center',
    color: '#43414e',
    mb: '16px'
  },
  listText: {
    fontSize: '16px',
    fontWeight: '400',
    color: '#43414e',
    mb: '0',
    ml: '5px'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (ProcessSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Process/process.style.js":
/*!**************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Process/process.style.js ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var ProcessItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ProcessItem);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Skill/index.js":
/*!****************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Skill/index.js ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-progress */ "rc-progress");
/* harmony import */ var rc_progress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_progress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _skill_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./skill.style */ "../../node_modules/common/src/containers/Portfolio/Skill/skill.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/md/ic_thumb_up */ "react-icons-kit/md/ic_thumb_up");
/* harmony import */ var react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Skill\\index.js";













var SkillSection = function SkillSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      row = _ref.row,
      col = _ref.col,
      skillTitle = _ref.skillTitle,
      skillDescription = _ref.skillDescription,
      skillSuccessRate = _ref.skillSuccessRate,
      successRateText = _ref.successRateText;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "Ways I can help you",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Have a look, some could be interesting to help you achieve your business goals or start that project you always wanted to do... Yes, that one!",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_11__["SKILLS"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, col, {
      key: "skill-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillDetails"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillIcon"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      src: item.icon,
      alt: "skill-icon-".concat(index + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillAbout"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.title
    }, skillTitle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      content: item.description
    }, skillDescription, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SkillProgress"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["SuccessRate"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: react_icons_kit_md_ic_thumb_up__WEBPACK_IMPORTED_MODULE_12__["ic_thumb_up"],
      size: 12,
      className: "skill_success_icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: "".concat(item.successRate, "% ")
    }, skillSuccessRate, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: "Success Rate"
    }, skillSuccessRate, successRateText, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_skill_style__WEBPACK_IMPORTED_MODULE_10__["ProgressBar"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(rc_progress__WEBPACK_IMPORTED_MODULE_3__["Line"], {
      percent: item.successRate,
      strokeWidth: "1.8",
      trailWidth: "1.8",
      strokeColor: "#3444f1",
      trailColor: "#e3e7f2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    })))));
  }))));
};

SkillSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  row: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  col: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  skillTitle: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  skillDescription: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  skillSuccessRate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  successRateText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
SkillSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '140px'],
    pb: ['150px', '160px', '160px', '180px', '210px'],
    bg: '#f9f9f9'
  },
  secTitleWrapper: {
    mb: ['65px', '65px', '80px', '90px', '105px']
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
    textAlign: 'center'
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
    textAlign: 'center',
    width: '600px',
    maxWidth: '100%',
    ml: 'auto',
    mr: 'auto'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: ['-15px', '-15px', '-15px', '-25px', '-25px'],
    mr: ['-15px', '-15px', '-15px', '-25px', '-25px']
  },
  col: {
    width: [1, 1, 1 / 2],
    pl: ['15px', '15px', '15px', '25px', '25px'],
    pr: ['15px', '15px', '15px', '25px', '25px'],
    mb: ['30px', '30px', '30px', '50px', '50px']
  },
  skillTitle: {
    fontSize: ['16px', '18px', '18px', '20px', '20px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '12px'
  },
  skillDescription: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0'
  },
  skillSuccessRate: {
    fontSize: ['15px', '15px', '14px', '15px', '16px'],
    fontWeight: '400',
    color: '#302b4e',
    lineHeight: '1.5',
    mb: '0'
  },
  successRateText: {
    ml: '.3em',
    display: ['none', 'none', 'none', 'none', 'inline-block']
  }
};
/* harmony default export */ __webpack_exports__["default"] = (SkillSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Skill/skill.style.js":
/*!**********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Skill/skill.style.js ***!
  \**********************************************************************************************************************/
/*! exports provided: SkillItem, SkillDetails, SkillIcon, SkillAbout, SkillProgress, SuccessRate, ProgressBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillItem", function() { return SkillItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillDetails", function() { return SkillDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillIcon", function() { return SkillIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillAbout", function() { return SkillAbout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillProgress", function() { return SkillProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessRate", function() { return SuccessRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return ProgressBar; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 58%;\n  max-width: 58%;\n  @media (max-width: 1199px) {\n    flex: 0 0 70%;\n    max-width: 70%;\n  }\n\n  > svg {\n    vertical-align: middle;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  align-items: center;\n  .skill_success_icon {\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    background-color: #407fff;\n    overflow: hidden;\n    line-height: 18px;\n    text-align: center;\n    color: #fff;\n    margin-right: 10px;\n    flex-shrink: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 20px 50px 28px 50px;\n  border-top: 1px solid #f7f7f7;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  @media (max-width: 1199px) {\n    padding: 20px 30px 28px 30px;\n  }\n  @media (max-width: 575px) {\n    padding: 15px 20px 18px 20px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  flex: 0 0 130px;\n  max-width: 130px;\n  @media (max-width: 990px) {\n    flex: 0 0 55px;\n    max-width: 55px;\n    margin-right: 30px;\n  }\n  @media (max-width: 575px) {\n    flex: 0 0 45px;\n    max-width: 45px;\n    margin-right: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  padding: 85px 60px 55px 60px;\n  display: flex;\n  align-items: center;\n  @media (max-width: 1199px) {\n    padding: 70px 45px 40px 45px;\n  }\n  @media (max-width: 990px) {\n    padding: 60px 35px 30px 35px;\n  }\n  @media (max-width: 575px) {\n    padding: 35px 25px 20px 25px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0.521px 2.954px 50px 0px rgba(101, 106, 160, 0.1);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SkillItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var SkillDetails = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var SkillIcon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var SkillAbout = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var SkillProgress = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());
var SuccessRate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var ProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject7());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/SocialProfile/index.js":
/*!************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/SocialProfile/index.js ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "react-icons-kit/ionicons/socialDribbbleOutline");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _socialProfile_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./socialProfile.style */ "../../node_modules/common/src/containers/Portfolio/SocialProfile/socialProfile.style.js");
var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\SocialProfile\\index.js";






var SocialProfile = function SocialProfile(_ref) {
  var items = _ref.items,
      className = _ref.className,
      iconSize = _ref.iconSize;
  var addAllClasses = ['social_profiles'];

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_socialProfile_style__WEBPACK_IMPORTED_MODULE_4__["SocialProfileWrapper"], {
    className: addAllClasses.join(' '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, items.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_socialProfile_style__WEBPACK_IMPORTED_MODULE_4__["SocialProfileItem"], {
      key: "social-item-".concat(index),
      className: "social_profile_item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: item.url || '#',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_2___default.a, {
      icon: item.icon || react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_3__["socialDribbbleOutline"],
      size: iconSize || 22,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }))));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SocialProfile);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/SocialProfile/socialProfile.style.js":
/*!**************************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/SocialProfile/socialProfile.style.js ***!
  \**************************************************************************************************************************************/
/*! exports provided: SocialProfileWrapper, SocialProfileItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialProfileWrapper", function() { return SocialProfileWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialProfileItem", function() { return SocialProfileItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  margin-right: 18px;\n  a {\n    color: #fff;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: #3444f1;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var SocialProfileWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var SocialProfileItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Testimonial/index.js":
/*!**********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Testimonial/index.js ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reusecore/src/elements/Box */ "../../node_modules/reusecore/src/elements/Box/index.js");
/* harmony import */ var reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reusecore/src/elements/Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reusecore/src/elements/Heading */ "../../node_modules/reusecore/src/elements/Heading/index.js");
/* harmony import */ var reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reusecore/src/elements/Image */ "../../node_modules/reusecore/src/elements/Image/index.js");
/* harmony import */ var _components_UI_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/UI/Container */ "../../node_modules/common/src/components/UI/Container/index.js");
/* harmony import */ var _components_GlideCarousel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/GlideCarousel */ "../../node_modules/common/src/components/GlideCarousel/index.js");
/* harmony import */ var _components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/GlideCarousel/glideSlide */ "../../node_modules/common/src/components/GlideCarousel/glideSlide.js");
/* harmony import */ var _containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../containers/Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var _testimonial_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./testimonial.style */ "../../node_modules/common/src/containers/Portfolio/Testimonial/testimonial.style.js");
/* harmony import */ var _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/Portfolio/data */ "../../node_modules/common/src/data/Portfolio/data.js");
/* harmony import */ var react_icons_kit_icomoon_twitter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/icomoon/twitter */ "react-icons-kit/icomoon/twitter");
/* harmony import */ var react_icons_kit_icomoon_twitter__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_twitter__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\containers\\Portfolio\\Testimonial\\index.js";
















var TestimonialSection = function TestimonialSection(_ref) {
  var sectionWrapper = _ref.sectionWrapper,
      secTitleWrapper = _ref.secTitleWrapper,
      secTitle = _ref.secTitle,
      secDescription = _ref.secDescription,
      reviewStyle = _ref.reviewStyle,
      nameStyle = _ref.nameStyle,
      designationStyle = _ref.designationStyle;
  //Carousel Options
  var carouselOptions = {
    type: 'carousel',
    autoplay: 6000,
    perView: 3,
    gap: 28,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3
      },
      767: {
        perView: 2
      },
      500: {
        perView: 1
      }
    }
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, sectionWrapper, {
    as: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    noGutter: true,
    mobileGutter: true,
    width: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Box__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitleWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secTitle, {
    content: "What My Clients Say?",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, secDescription, {
    content: "Lorem ipsum dolor sit amet, conse ctetur adipiscing elit, sed do eiusmod tempor incid idunt ut labore",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_13__["TestimonialWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel__WEBPACK_IMPORTED_MODULE_10__["default"], {
    carouselSelector: "testimonial-carousel",
    options: carouselOptions,
    prevButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_12__["PrevButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })),
    nextButton: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_12__["NextButton"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    })),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, _data_Portfolio_data__WEBPACK_IMPORTED_MODULE_14__["TESTIMONIAL"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_GlideCarousel_glideSlide__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: "testimonial-item-".concat(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_13__["TestimonialItem"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_13__["TestimonialHead"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_testimonial_style__WEBPACK_IMPORTED_MODULE_13__["TestimonialThumb"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Image__WEBPACK_IMPORTED_MODULE_8__["default"], {
      src: item.image,
      alt: "testimonial-avatar-".concat(index + 1),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.twitterProfile || '#',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      icon: react_icons_kit_icomoon_twitter__WEBPACK_IMPORTED_MODULE_15__["twitter"],
      size: 24,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reviewStyle, {
      content: item.review,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Heading__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "h3",
      content: item.name
    }, nameStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reusecore_src_elements_Text__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      as: "span",
      content: item.designation
    }, designationStyle, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: item.organizationURL || '#',
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "reviewer_org",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, item.organization))));
  }))))));
};

TestimonialSection.propTypes = {
  sectionWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secTitleWrapper: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secTitle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  secDescription: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  reviewStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  nameStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  designationStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
TestimonialSection.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '150px'],
    pb: '50px'
  },
  secTitleWrapper: {
    mb: ['90px', '90px', '50px', '50px', '50px']
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '700',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px']
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    width: '530px',
    maxWidth: '100%',
    mb: '0'
  },
  reviewStyle: {
    fontSize: '16px',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '30px'
  },
  nameStyle: {
    fontSize: '16px',
    color: '#302b4e',
    fontWeight: '600',
    mb: '7px'
  },
  designationStyle: {
    fontSize: '14px',
    color: '#43414e',
    mb: '0'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (TestimonialSection);

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/Testimonial/testimonial.style.js":
/*!**********************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/Testimonial/testimonial.style.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: TestimonialWrapper, TestimonialItem, TestimonialHead, TestimonialThumb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialWrapper", function() { return TestimonialWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialItem", function() { return TestimonialItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialHead", function() { return TestimonialHead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialThumb", function() { return TestimonialThumb; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 35px;\n  height: 35px;\n  border-radius: 50%;\n  overflow: hidden;\n  box-shadow: -5.818px 10.495px 50px 0px rgba(101, 106, 160, 0.43);\n\n  img {\n    width: 100%;\n    height: auto;\n    display: block;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 25px;\n\n  a {\n    color: #d6d7e2;\n    transition: 0.15s ease-in-out;\n    &:hover {\n      color: #38a1f3;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  background-color: #fff;\n  border-radius: 10px;\n  padding: 30px;\n  box-shadow: 0.521px 2.954px 20px 0px rgba(101, 106, 160, 0.1);\n\n  .reviewer_org {\n    font-size: 14px;\n    color: #3444f1;\n    margin-left: 0.4em;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .glide__track {\n    padding: 30px 0;\n    margin: 0 -10px;\n    padding: 10px;\n  }\n  .glide__slides {\n    overflow: initial;\n  }\n  .glide__controls {\n    position: absolute;\n    top: -115px;\n    right: 0;\n    z-index: 1;\n    @media (max-width: 767px) {\n      top: -60px;\n      left: 0;\n      right: auto;\n    }\n    @media (max-width: 575px) {\n      left: 50%;\n      transform: translateX(-50%);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var TestimonialWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var TestimonialItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2());
var TestimonialHead = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var TestimonialThumb = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());

/***/ }),

/***/ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js":
/*!********************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/containers/Portfolio/portfolio.style.js ***!
  \********************************************************************************************************************/
/*! exports provided: GlobalStyle, ContentWrapper, PrevButton, NextButton, ButtonWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalStyle", function() { return GlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentWrapper", function() { return ContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrevButton", function() { return PrevButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextButton", function() { return NextButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonWrapper", function() { return ButtonWrapper; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/image/portfolio/dotted-line.png */ "../../node_modules/common/src/assets/image/portfolio/dotted-line.png");
/* harmony import */ var _assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3__);


function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  z-index: 1;\n  display: inline-block;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  padding: 18px 10px;\n  cursor: pointer;\n  &:hover {\n    span {\n      background: #3444f1;\n      @media (min-width: 991px) {\n        width: 100px;\n      }\n    }\n  }\n  span {\n    width: 18px;\n    height: 2px;\n    background: #d1d3de;\n    display: block;\n    position: relative;\n    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      height: 2px;\n      border-radius: 2px;\n      background: inherit;\n      position: absolute;\n    }\n    &:before {\n      transform: rotate(45deg);\n      top: -4px;\n      right: 0;\n      width: 10px;\n    }\n    &:after {\n      transform: rotate(-45deg);\n      width: 8px;\n      bottom: -6px;\n      right: 1px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n  padding: 18px 10px;\n  cursor: pointer;\n  &:hover {\n    span {\n      background: #3444f1;\n      @media (min-width: 991px) {\n        width: 100px;\n      }\n    }\n  }\n  span {\n    width: 18px;\n    height: 2px;\n    background: #d1d3de;\n    display: block;\n    position: relative;\n    transition: 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);\n    &:before,\n    &:after {\n      content: '';\n      display: block;\n      height: 2px;\n      border-radius: 2px;\n      background: inherit;\n      position: absolute;\n    }\n    &:before {\n      transform: rotate(-45deg);\n      top: -4px;\n      left: 0;\n      width: 10px;\n    }\n    &:after {\n      transform: rotate(45deg);\n      width: 8px;\n      bottom: -6px;\n      left: 1px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  overflow: hidden;\n  .sticky-nav-active {\n    .portfolio_navbar {\n      background: #fff;\n      box-shadow: 0px 3px 8px 0px rgba(43, 83, 135, 0.08);\n      padding: 15px 0;\n\n      .main-logo {\n        display: none;\n      }\n      .logo-alt {\n        display: block;\n      }\n    }\n  }\n\n  .portfolio_button {\n    border-radius: 0;\n    border: 2px solid ", ";\n    background-color: transparent;\n    position: relative;\n    min-height: 50px;\n    text-transform: initial;\n    transition: 0.2s ease-in-out;\n    &:before {\n      content: '';\n      background-color: ", ";\n      position: absolute;\n      width: calc(100% + 4px);\n      height: calc(100% + 4px);\n      display: block;\n      z-index: -1;\n      top: 8px;\n      left: 8px;\n      transition: inherit;\n    }\n    &:hover {\n      border-color: transparent;\n      &:before {\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    }\n  }\n\n  .portfolio_navbar {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    transition: 0.35s ease-in-out;\n    padding: 50px 0 30px 0;\n    @media (max-width: 990px) {\n      padding: 30px 0;\n    }\n    .logo-alt {\n      display: none;\n    }\n    .main_menu {\n      margin-right: 40px;\n      li {\n        display: inline-block;\n        padding-left: 13px;\n        padding-right: 20px;\n        &:first-child {\n          padding-left: 0;\n        }\n        &:last-child {\n          padding-right: 0;\n        }\n        &.is-current {\n          a {\n            color: #fff;\n            &:after {\n              transform: scaleX(1);\n              transform-origin: left center 0;\n              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n            }\n          }\n        }\n        a {\n          padding: 5px;\n          font-size: 16px;\n          font-weight: 700;\n          color: #fff;\n          position: relative;\n          font-family: 'Raleway', sans-serif;\n          transition: 0.15s ease-in-out;\n          &:hover {\n            color: #fff;\n            &:after {\n              transform: scaleX(1);\n              transform-origin: left center 0;\n              transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n            }\n          }\n          &:after {\n            content: '';\n            position: absolute;\n            width: calc(100% - 8px);\n            height: 11px;\n            background: #3444f1;\n            bottom: 6px;\n            left: 0;\n            z-index: -1;\n            transform: scaleX(0);\n            transform-origin: right center 0;\n            transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n          }\n        }\n      }\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .navbar_button {\n      button {\n        font-family: 'Raleway', sans-serif;\n        font-weight: 700;\n      }\n      @media (max-width: 990px) {\n        display: none;\n      }\n    }\n    .reusecore-drawer__handler {\n      @media (min-width: 991px) {\n        display: none !important;\n      }\n      .hamburgMenu__bar {\n        > span {\n        }\n      }\n    }\n  }\n\n  .sticky-nav-active {\n    .portfolio_navbar {\n      .main_menu {\n        li {\n          a {\n            color: #302b4e;\n            &:after {\n              background: #c2c7fb;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  .process_item_col {\n    &:nth-child(2),\n    &:nth-child(3) {\n      .process_item {\n        &:before {\n          content: '';\n          background-image: url(", ");\n          width: 165px;\n          height: 35px;\n          display: block;\n          background-repeat: no-repeat;\n          background-position: center;\n          position: absolute;\n          left: -165px;\n          top: 20px;\n          @media (max-width: 990px) {\n            width: 100px;\n            left: -80px;\n          }\n          @media (max-width: 767px) {\n            display: none;\n          }\n        }\n      }\n    }\n    &:nth-child(3) {\n      .process_item {\n        &:before {\n          transform: rotate(180deg);\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Raleway', sans-serif;\n    margin-top: 0;\n  }\n\n  section {\n    position: relative;\n  }\n\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 500;\n            color: #343d48;\n            position: relative;\n            font-family: 'Raleway', sans-serif;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n            &:before{\n              content: '';\n              position: absolute;\n              width: calc(100% - 8px);\n              height: 11px;\n              background: #c2c7fb;\n              bottom: 2px;\n              left: -4px;\n              z-index: -1;\n              transform: scaleX(0);\n              transform-origin: right center 0;\n              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n            }\n          }\n          &.is-current {\n            a {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n        font-family: 'Raleway', sans-serif;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #3444f1;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n"], ["\n  body{\n    font-family: 'Roboto', sans-serif;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Raleway', sans-serif;\n    margin-top: 0;\n  }\n\n  section {\n    position: relative;\n  }\n\n\n  .drawer-content-wrapper{\n    @media (max-width: 767px) {\n      width: 300px!important;\n    }\n    .drawer-content {\n      padding: 60px;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      @media (max-width: 767px) {\n        padding: 50px 40px 30px 40px;\n      }\n      .mobile_menu {\n        margin-bottom: 40px;\n        flex-grow: 1;\n        @media (max-width: 767px) {\n          margin-bottom: 30px;\n        }\n        li{\n          margin-bottom: 35px;\n          @media (max-width: 767px) {\n            margin-bottom: 25px;\n          }\n          a{\n            font-size: 20px;\n            font-weight: 500;\n            color: #343d48;\n            position: relative;\n            font-family: 'Raleway', sans-serif;\n            transition: 0.15s ease-in-out;\n            @media (max-width: 767px) {\n              font-size: 18px;\n            }\n            &:hover {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n            &:before{\n              content: '';\n              position: absolute;\n              width: calc(100% - 8px);\n              height: 11px;\n              background: #c2c7fb;\n              bottom: 2px;\n              left: -4px;\n              z-index: -1;\n              transform: scaleX(0);\n              transform-origin: right center 0;\n              transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;\n            }\n          }\n          &.is-current {\n            a {\n              &:before {\n                transform: scaleX(1);\n                transform-origin: left center 0;\n                transition: transform 0.35s cubic-bezier(0.43, 0.49, 0.51, 0.68);\n              }\n            }\n          }\n        }\n      }\n      .navbar_drawer_button button{\n        width: 100%;\n        font-family: 'Raleway', sans-serif;\n      }\n    }\n\n    .reusecore-drawer__close{\n      width: 34px;\n      height: 34px;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      cursor: pointer;\n      @media (max-width: 767px) {\n        top: 15px;\n        right: 15px;\n      }\n      &:before{\n        content: '\\f10b';\n        font-family: Flaticon;\n        font-size: 26px;\n        color: #3444f1;\n        transform: rotate(45deg);\n        display: block;\n      }\n    }\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
var ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject2(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.borderColor', '#1b1e25'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#3444f1'), _assets_image_portfolio_dotted_line_png__WEBPACK_IMPORTED_MODULE_3___default.a);
var PrevButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());
var NextButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());

/***/ }),

/***/ "../../node_modules/common/src/contexts/DrawerContext.js":
/*!******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/contexts/DrawerContext.js ***!
  \******************************************************************************************************/
/*! exports provided: DrawerContext, DrawerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerContext", function() { return DrawerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerProvider", function() { return DrawerProvider; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\common\\src\\contexts\\DrawerContext.js";

var initialState = {
  isOpen: false
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
        isOpen: !state.isOpen
      });

    default:
      return state;
  }
}

var DrawerContext = react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var DrawerProvider = function DrawerProvider(_ref) {
  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DrawerContext.Provider, {
    value: {
      state: state,
      dispatch: dispatch
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, children);
};

/***/ }),

/***/ "../../node_modules/common/src/data/Portfolio/data.js":
/*!***************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/data/Portfolio/data.js ***!
  \***************************************************************************************************/
/*! exports provided: SOCIAL_PROFILES, MENU_ITEMS, AWARDS, PORTFOLIO_SHOWCASE, PROCESS_STEPS, SERVICE_LIST, SKILLS, CLIENTS, TESTIMONIAL, FOOTER_MENU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SOCIAL_PROFILES", function() { return SOCIAL_PROFILES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENU_ITEMS", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AWARDS", function() { return AWARDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PORTFOLIO_SHOWCASE", function() { return PORTFOLIO_SHOWCASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROCESS_STEPS", function() { return PROCESS_STEPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SERVICE_LIST", function() { return SERVICE_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SKILLS", function() { return SKILLS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENTS", function() { return CLIENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TESTIMONIAL", function() { return TESTIMONIAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOOTER_MENU", function() { return FOOTER_MENU; });
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-icons-kit/ionicons/socialTwitter */ "react-icons-kit/ionicons/socialTwitter");
/* harmony import */ var react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons-kit/ionicons/socialFacebook */ "react-icons-kit/ionicons/socialFacebook");
/* harmony import */ var react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons-kit/ionicons/socialDribbbleOutline */ "react-icons-kit/ionicons/socialDribbbleOutline");
/* harmony import */ var react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGithub */ "react-icons-kit/ionicons/socialGithub");
/* harmony import */ var react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons-kit/ionicons/socialGoogleplusOutline */ "react-icons-kit/ionicons/socialGoogleplusOutline");
/* harmony import */ var react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-1.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-1.png");
/* harmony import */ var _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-2.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-2.png");
/* harmony import */ var _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-3.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-3.png");
/* harmony import */ var _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/image/portfolio/awardee-4.png */ "../../node_modules/common/src/assets/image/portfolio/awardee-4.png");
/* harmony import */ var _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/image/portfolio/award-1.png */ "../../node_modules/common/src/assets/image/portfolio/award-1.png");
/* harmony import */ var _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/image/portfolio/award-2.png */ "../../node_modules/common/src/assets/image/portfolio/award-2.png");
/* harmony import */ var _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/image/portfolio/award-3.png */ "../../node_modules/common/src/assets/image/portfolio/award-3.png");
/* harmony import */ var _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/image/portfolio/award-4.png */ "../../node_modules/common/src/assets/image/portfolio/award-4.png");
/* harmony import */ var _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/image/portfolio/portfolio-1.jpg */ "../../node_modules/common/src/assets/image/portfolio/portfolio-1.jpg");
/* harmony import */ var _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/image/portfolio/portfolio-2.jpg */ "../../node_modules/common/src/assets/image/portfolio/portfolio-2.jpg");
/* harmony import */ var _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../assets/image/portfolio/step-1.png */ "../../node_modules/common/src/assets/image/portfolio/step-1.png");
/* harmony import */ var _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../assets/image/portfolio/step-2.png */ "../../node_modules/common/src/assets/image/portfolio/step-2.png");
/* harmony import */ var _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../assets/image/portfolio/step-3.png */ "../../node_modules/common/src/assets/image/portfolio/step-3.png");
/* harmony import */ var _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-1.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-1.svg");
/* harmony import */ var _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-2.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-2.svg");
/* harmony import */ var _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-3.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-3.svg");
/* harmony import */ var _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../assets/image/portfolio/skill-4.svg */ "../../node_modules/common/src/assets/image/portfolio/skill-4.svg");
/* harmony import */ var _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../assets/image/portfolio/client-1.png */ "../../node_modules/common/src/assets/image/portfolio/client-1.png");
/* harmony import */ var _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../assets/image/portfolio/client-2.png */ "../../node_modules/common/src/assets/image/portfolio/client-2.png");
/* harmony import */ var _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../assets/image/portfolio/client-3.png */ "../../node_modules/common/src/assets/image/portfolio/client-3.png");
/* harmony import */ var _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../assets/image/portfolio/client-4.png */ "../../node_modules/common/src/assets/image/portfolio/client-4.png");
/* harmony import */ var _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../assets/image/portfolio/client-5.png */ "../../node_modules/common/src/assets/image/portfolio/client-5.png");
/* harmony import */ var _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../assets/image/portfolio/client-6.png */ "../../node_modules/common/src/assets/image/portfolio/client-6.png");
/* harmony import */ var _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-1.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-1.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-2.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-2.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../assets/image/portfolio/client-avatar-3.jpg */ "../../node_modules/common/src/assets/image/portfolio/client-avatar-3.jpg");
/* harmony import */ var _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30__);































var SOCIAL_PROFILES = [{
  icon: react_icons_kit_ionicons_socialTwitter__WEBPACK_IMPORTED_MODULE_0__["socialTwitter"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialFacebook__WEBPACK_IMPORTED_MODULE_1__["socialFacebook"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialDribbbleOutline__WEBPACK_IMPORTED_MODULE_2__["socialDribbbleOutline"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialGithub__WEBPACK_IMPORTED_MODULE_3__["socialGithub"],
  url: '#'
}, {
  icon: react_icons_kit_ionicons_socialGoogleplusOutline__WEBPACK_IMPORTED_MODULE_4__["socialGoogleplusOutline"],
  url: '#'
}];
var MENU_ITEMS = [{
  label: 'ME',
  path: '#banner_section',
  offset: '0'
}, {
  label: 'PROJECT',
  path: '#portfolio_section',
  offset: '0'
}, {
  label: 'AWARDS',
  path: '#awards_section',
  offset: '0'
}, {
  label: 'WHY ME?',
  path: '#process_section',
  offset: '0'
}];
var AWARDS = [{
  awardLogo: _assets_image_portfolio_award_1_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_2_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_3_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}, {
  awardLogo: _assets_image_portfolio_award_4_png__WEBPACK_IMPORTED_MODULE_12___default.a,
  awardName: 'Free Software Advice',
  awardDetails: 'Top Rated App Development Companies USA',
  awardeeLogo: _assets_image_portfolio_awardee_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  awardeeName: 'Awardee',
  date: 'The Jury 2018'
}];
var PORTFOLIO_SHOWCASE = [{
  title: 'DESIGN',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'DEVELOPMENT',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'ANIMATION',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'TV ADVERTISEMENT',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}, {
  title: 'MARKETING',
  portfolioItem: [{
    title: 'Canada Media Site',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_1_jpg__WEBPACK_IMPORTED_MODULE_13___default.a,
    link: '#',
    featuredIn: 'AWWWARDS',
    featuredLink: '#',
    view: '4.5K',
    love: '1.5K',
    feedback: '1.2K',
    buildWith: [{
      content: 'React JS'
    }, {
      content: 'Next JS'
    }, {
      content: 'Styled Component'
    }]
  }, {
    title: 'RedQ, Inc. mobile app',
    description: "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
    image: _assets_image_portfolio_portfolio_2_jpg__WEBPACK_IMPORTED_MODULE_14___default.a,
    link: '#',
    featuredIn: 'AppStore',
    featuredLink: '#',
    view: '8.5K',
    love: '5.5K',
    feedback: '3.2K',
    buildWith: [{
      content: 'React Native'
    }, {
      content: 'Firebase'
    }, {
      content: 'Styled Component'
    }]
  }]
}];
var PROCESS_STEPS = [{
  image: _assets_image_portfolio_step_1_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  title: '1. Research',
  description: 'We work with you to understand user’s stories and validate your idea with real users using lean design sprints.'
}, {
  image: _assets_image_portfolio_step_2_png__WEBPACK_IMPORTED_MODULE_16___default.a,
  title: '2. Design',
  description: 'Expanding on the insights gained, you’ll work closely with our design team to create an elegant design'
}, {
  image: _assets_image_portfolio_step_3_png__WEBPACK_IMPORTED_MODULE_17___default.a,
  title: '3. Build',
  description: 'With our scrum-based agile methodology, you’ll receive iterative builds every two weeks, which gives you '
}];
var SERVICE_LIST = [{
  title: 'UI/UX Design',
  listItems: [{
    content: 'Design Sprints'
  }, {
    content: 'User Research'
  }, {
    content: 'Visual Design'
  }, {
    content: 'Mobile App Design'
  }, {
    content: 'Tracking & Learning'
  }, {
    content: 'Building Traction'
  }]
}, {
  title: 'Web Development',
  listItems: [{
    content: 'ReactJS'
  }, {
    content: 'AngularJS'
  }, {
    content: 'ASP.NET MVC'
  }, {
    content: 'WordPress'
  }, {
    content: 'NodeJS'
  }, {
    content: 'GO'
  }]
}, {
  title: 'Mobile App Development',
  listItems: [{
    content: 'iOS'
  }, {
    content: 'Android'
  }, {
    content: 'React Native'
  }, {
    content: 'Ionic & Apache Cordova'
  }, {
    content: 'NodeJS'
  }, {
    content: '3D & VR'
  }]
}];
var SKILLS = [{
  title: 'Graphic Design',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_1_svg__WEBPACK_IMPORTED_MODULE_18___default.a,
  successRate: '90'
}, {
  title: 'UI/UX Design',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_2_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
  successRate: '85'
}, {
  title: 'Web Application',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_3_svg__WEBPACK_IMPORTED_MODULE_20___default.a,
  successRate: '80'
}, {
  title: 'Mobile Application',
  description: 'Aristotle maintained the sharp distinction between science and the practical',
  icon: _assets_image_portfolio_skill_4_svg__WEBPACK_IMPORTED_MODULE_21___default.a,
  successRate: '70'
}];
var CLIENTS = [{
  image: _assets_image_portfolio_client_1_png__WEBPACK_IMPORTED_MODULE_22___default.a,
  title: 'Microsoft'
}, {
  image: _assets_image_portfolio_client_2_png__WEBPACK_IMPORTED_MODULE_23___default.a,
  title: 'Airbnb'
}, {
  image: _assets_image_portfolio_client_3_png__WEBPACK_IMPORTED_MODULE_24___default.a,
  title: 'Adidas'
}, {
  image: _assets_image_portfolio_client_4_png__WEBPACK_IMPORTED_MODULE_25___default.a,
  title: 'IBM'
}, {
  image: _assets_image_portfolio_client_5_png__WEBPACK_IMPORTED_MODULE_26___default.a,
  title: 'Amazon'
}, {
  image: _assets_image_portfolio_client_6_png__WEBPACK_IMPORTED_MODULE_27___default.a,
  title: 'Google'
}];
var TESTIMONIAL = [{
  image: _assets_image_portfolio_client_avatar_1_jpg__WEBPACK_IMPORTED_MODULE_28___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Thomas Cruz',
  designation: 'Founder & CEO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_portfolio_client_avatar_2_jpg__WEBPACK_IMPORTED_MODULE_29___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Marhta Robson',
  designation: 'Co-Founder & CTO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}, {
  image: _assets_image_portfolio_client_avatar_3_jpg__WEBPACK_IMPORTED_MODULE_30___default.a,
  review: 'Another quality React-based product from RedQ Team. Manage to turn highly complex tech into simple components.',
  name: 'Dexter Patterson',
  designation: 'Co-Founder & COO',
  twitterProfile: 'https://twitter.com/redqinc',
  organization: '@Tonquin',
  organizationURL: 'https://redq.io/'
}];
var FOOTER_MENU = [{
  label: 'Contact',
  path: '#'
}, {
  label: 'Privacy',
  path: '#'
}, {
  label: 'Cookie Policy',
  path: '#'
}];

/***/ }),

/***/ "../../node_modules/common/src/data/productShowcase.js":
/*!****************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/data/productShowcase.js ***!
  \****************************************************************************************************/
/*! exports provided: ProductShowcase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductShowcase", function() { return ProductShowcase; });
/* harmony import */ var common_src_assets_image_demoThumb_demo_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-1.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-1.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_1_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-2.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-2.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_2_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-3.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-3.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_3_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_4_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-4.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-4.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_4_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_4_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_5_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-5.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-5.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_5_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_5_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_6_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-6.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-6.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_6_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_6_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-7.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-7.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_7_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_7_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_8_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-8.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-8.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_8_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_8_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_9_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-9.jpg */ "../../node_modules/common/src/assets/image/demoThumb/demo-9.jpg");
/* harmony import */ var common_src_assets_image_demoThumb_demo_9_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_9_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_10_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-10.png */ "../../node_modules/common/src/assets/image/demoThumb/demo-10.png");
/* harmony import */ var common_src_assets_image_demoThumb_demo_10_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_10_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_11_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-11.png */ "../../node_modules/common/src/assets/image/demoThumb/demo-11.png");
/* harmony import */ var common_src_assets_image_demoThumb_demo_11_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_11_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var common_src_assets_image_demoThumb_demo_12_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/assets/image/demoThumb/demo-12.png */ "../../node_modules/common/src/assets/image/demoThumb/demo-12.png");
/* harmony import */ var common_src_assets_image_demoThumb_demo_12_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(common_src_assets_image_demoThumb_demo_12_png__WEBPACK_IMPORTED_MODULE_11__);












var ProductShowcase = [{
  id: 1,
  title: 'SAAS Landing Page',
  thumb_url: common_src_assets_image_demoThumb_demo_1_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  badge: 'Latest',
  link: '/saas'
}, {
  id: 2,
  title: 'SAAS Modern',
  thumb_url: common_src_assets_image_demoThumb_demo_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
  link: '/saasmodern'
}, {
  id: 3,
  title: 'SAAS Classic',
  thumb_url: common_src_assets_image_demoThumb_demo_8_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
  link: '/saasclassic'
}, {
  id: 4,
  title: 'App Landing Page',
  thumb_url: common_src_assets_image_demoThumb_demo_2_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
  badge: 'Updated',
  link: '/app'
}, {
  id: 5,
  title: 'Agency Landing Page',
  thumb_url: common_src_assets_image_demoThumb_demo_3_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  link: '/agency'
}, {
  id: 6,
  title: 'Hosting Landing Page',
  thumb_url: common_src_assets_image_demoThumb_demo_4_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
  link: '/hosting'
}, {
  id: 7,
  title: 'Portfolio Landing Page',
  thumb_url: common_src_assets_image_demoThumb_demo_6_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
  link: '/portfolio'
}, {
  id: 8,
  title: 'Ride Sharing',
  thumb_url: common_src_assets_image_demoThumb_demo_9_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
  link: '/ride'
}, {
  id: 9,
  className: 'coming_soon',
  title: 'Crypto Landing Page',
  thumb_url: common_src_assets_image_demoThumb_demo_5_jpg__WEBPACK_IMPORTED_MODULE_4___default.a,
  link: '#'
}, {
  id: 10,
  className: 'coming_soon',
  title: 'App V2',
  thumb_url: common_src_assets_image_demoThumb_demo_10_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  link: '#'
}, {
  id: 11,
  className: 'coming_soon',
  title: 'Charity Landing',
  thumb_url: common_src_assets_image_demoThumb_demo_11_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  link: '#'
}, {
  id: 12,
  className: 'coming_soon',
  title: 'Gadget Landing',
  thumb_url: common_src_assets_image_demoThumb_demo_12_png__WEBPACK_IMPORTED_MODULE_11___default.a,
  link: '#'
}];

/***/ }),

/***/ "../../node_modules/common/src/theme/portfolio/colors.js":
/*!******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/theme/portfolio/colors.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var colors = {
  transparent: 'transparent',
  // 0
  black: '#000000',
  // 1
  white: '#ffffff',
  // 2
  headingColor: '#302b4e',
  textColor: '#43414e',
  // 3
  labelColor: '#767676',
  // 4
  inactiveField: '#f2f2f2',
  // 5
  inactiveButton: '#b7dbdd',
  // 6
  inactiveIcon: '#EBEBEB',
  // 7
  primary: '#3444f1',
  // 8
  primaryHover: '#3444f1',
  // 9
  secondary: '#ff5b60',
  // 10
  secondaryHover: '#FF282F',
  // 11
  yellow: '#fdb32a',
  // 12
  yellowHover: '#F29E02',
  // 13
  borderColor: '#1b1e25',
  //14
  primaryBoxShadow: '0px 8px 20px -6px rgba(235,77,75,0.6)'
};
/* harmony default export */ __webpack_exports__["default"] = (colors);

/***/ }),

/***/ "../../node_modules/common/src/theme/portfolio/index.js":
/*!*****************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/common/src/theme/portfolio/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: portfolioTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portfolioTheme", function() { return portfolioTheme; });
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "../../node_modules/common/src/theme/portfolio/colors.js");

var portfolioTheme = {
  breakpoints: [576, 768, 991, 1220],
  space: [0, 5, 8, 10, 15, 20, 25, 30, 33, 35, 40, 50, 60, 70, 80, 85, 90, 100],
  fontSizes: [10, 12, 14, 15, 16, 18, 20, 22, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em'
  },
  borders: [0, '1px solid', '2px solid', '3px solid', '4px solid', '5px solid', '6px solid'],
  radius: [3, 4, 5, 10, 20, 30, 60, 120, '50%'],
  widths: [36, 40, 44, 48, 54, 70, 81, 128, 256],
  heights: [36, 40, 44, 46, 48, 54, 70, 81, 128],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  colorStyles: {
    primary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    secondary: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warning: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    error: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    primaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      border: '2px solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].borderColor,
      borderRadius: '0',
      '&:after': {
        content: '',
        width: '100px',
        height: '100px',
        display: 'block',
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary
      },
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
      }
    },
    secondaryWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover
      }
    },
    warningWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellow,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].yellowHover
      }
    },
    errorWithBg: {
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondaryHover,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary,
        borderColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].secondary
      }
    },
    transparentBg: {
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white,
      '&:hover': {
        backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].white
      }
    }
  },
  buttonStyles: {
    textButton: {
      border: 0,
      color: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].primary,
      padding: 0,
      height: 'auto',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    outlined: {
      borderWidth: '1px',
      borderStyle: 'solid',
      backgroundColor: _colors__WEBPACK_IMPORTED_MODULE_0__["default"].transparent
    },
    fab: {
      border: '0',
      width: '40px',
      height: '40px',
      padding: 0,
      borderRadius: '50%',
      justifyContent: 'center',
      'span.btn-icon': {
        paddingLeft: 0
      }
    },
    extendedFab: {
      border: '0',
      minWidth: '50px',
      height: '40px',
      borderRadius: '50px',
      justifyContent: 'center'
    }
  } // FlexBox: {
  //   backgroundColor: 'green'
  // }

};

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!******************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/next/dist/client/link.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "../../node_modules/next/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatUrl) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatUrl(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: href && (0, _typeof2.default)(href) === 'object' ? utils_1.formatWithValidation(href) : href,
        as: asHref && (0, _typeof2.default)(asHref) === 'object' ? utils_1.formatWithValidation(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
        props.href = router_1.Router._rewriteUrlForNextExport(props.href);
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!********************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/next/dist/client/router.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/typeof */ "../../node_modules/@babel/runtime-corejs2/helpers/typeof.js"));

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/construct */ "../../node_modules/@babel/runtime-corejs2/helpers/construct.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "../../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* global window */

var router_1 = __importDefault(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

var SingletonRouter = {
  router: null,
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (typeof window !== 'undefined') {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the SingletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(SingletonRouter, 'events', {
  get: function get() {
    return router_1.default.events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(SingletonRouter, field, {
    get: function get() {
      throwIfNoRouter();
      return SingletonRouter.router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  SingletonRouter[field] = function () {
    var _SingletonRouter$rout;

    throwIfNoRouter();
    return (_SingletonRouter$rout = SingletonRouter.router)[field].apply(_SingletonRouter$rout, arguments);
  };
});
routerEvents.forEach(function (event) {
  SingletonRouter.ready(function () {
    router_1.default.events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));

      if (SingletonRouter[eventField]) {
        try {
          SingletonRouter[eventField].apply(SingletonRouter, arguments);
        } catch (err) {
          console.error("Error when running the Router event: ".concat(eventField));
          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function throwIfNoRouter() {
  if (!SingletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
} // Export the SingletonRouter and this is the public API.


exports.default = SingletonRouter; // Reexport the withRoute HOC

var with_router_1 = __webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js");

exports.withRouter = with_router_1.default; // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.

exports.createRouter = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  SingletonRouter.router = (0, _construct2.default)(router_1.default, args);
  SingletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  SingletonRouter.readyCallbacks = [];
  return SingletonRouter.router;
}; // Export the actual Router class, which is usually used inside the server


exports.Router = router_1.default; // This function is used to create the `withRouter` router instance

function makePublicRouterInstance(router) {
  var instance = {};

  for (var _i = 0; _i < urlPropertyFields.length; _i++) {
    var property = urlPropertyFields[_i];

    if ((0, _typeof2.default)(router[property]) === 'object') {
      instance[property] = (0, _assign.default)({}, router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = router_1.default.events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get: function get() {
        return router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return router[field].apply(router, arguments);
    };
  });
  return instance;
}

exports.makePublicRouterInstance = makePublicRouterInstance;

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!*************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/next/dist/client/with-router.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var hoist_non_react_statics_1 = __importDefault(__webpack_require__(/*! hoist-non-react-statics */ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function withRouter(ComposedComponent) {
  var displayName = utils_1.getDisplayName(ComposedComponent);

  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react_1$Component) {
    (0, _inherits2.default)(WithRouteWrapper, _react_1$Component);

    function WithRouteWrapper() {
      (0, _classCallCheck2.default)(this, WithRouteWrapper);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(WithRouteWrapper).apply(this, arguments));
    }

    (0, _createClass2.default)(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return react_1.default.createElement(ComposedComponent, (0, _assign.default)({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(react_1.Component);

  WithRouteWrapper.contextTypes = {
    router: prop_types_1.default.object
  };
  WithRouteWrapper.displayName = "withRouter(".concat(displayName, ")");
  return hoist_non_react_statics_1.default(WithRouteWrapper, ComposedComponent);
}

exports.default = withRouter;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!******************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/next/link.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!***********************************************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/next/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var ReactIs = __webpack_require__(/*! react-is */ "react-is");
var REACT_STATICS = {
    childContextTypes: true,
    contextType: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    getDerivedStateFromError: true,
    getDerivedStateFromProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    callee: true,
    arguments: true,
    arity: true
};

var FORWARD_REF_STATICS = {
    '$$typeof': true,
    render: true
};

var TYPE_STATICS = {};
TYPE_STATICS[ReactIs.ForwardRef] = FORWARD_REF_STATICS;

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;

function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components

        if (objectPrototype) {
            var inheritedComponent = getPrototypeOf(sourceComponent);
            if (inheritedComponent && inheritedComponent !== objectPrototype) {
                hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
            }
        }

        var keys = getOwnPropertyNames(sourceComponent);

        if (getOwnPropertySymbols) {
            keys = keys.concat(getOwnPropertySymbols(sourceComponent));
        }

        var targetStatics = TYPE_STATICS[targetComponent['$$typeof']] || REACT_STATICS;
        var sourceStatics = TYPE_STATICS[sourceComponent['$$typeof']] || REACT_STATICS;

        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
                var descriptor = getOwnPropertyDescriptor(sourceComponent, key);
                try {
                    // Avoid failures from read-only properties
                    defineProperty(targetComponent, key, descriptor);
                } catch (e) {}
            }
        }

        return targetComponent;
    }

    return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "../../node_modules/next/router.js":
/*!********************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/next/router.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/router */ "../../node_modules/next/dist/client/router.js")


/***/ }),

/***/ "../../node_modules/rc-drawer/assets/index.css":
/*!********************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/rc-drawer/assets/index.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Animation/index.js":
/*!***********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Animation/index.js ***!
  \***********************************************************************************************************/
/*! exports provided: AnimSpinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimSpinner", function() { return AnimSpinner; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  animation: ", " 1s linear infinite;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(180deg);\n    opacity: 0.5;\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var spinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(_templateObject());
var AnimSpinner = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2(), spinner);


/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Box/index.js":
/*!*****************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Box/index.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Box\\index.js";





var BoxWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('div')(_base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Box'), function (props) {
  return props.flexBox && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])({
    display: 'flex'
  }, styled_system__WEBPACK_IMPORTED_MODULE_5__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_5__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_5__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_5__["justifyContent"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('FlexBox'));
});

var Box = function Box(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BoxWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Box);
Box.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.any.isRequired,

  /** Using this props we can convert our Box Component to a Flex Container or Component */
  flexBox: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  as: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['div', 'article', 'section', 'address', 'header', 'footer', 'nav', 'main']),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  fontSize: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  flex: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  order: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  alignSelf: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  border: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderTop: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRight: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderBottom: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderLeft: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))])
};
Box.defaultProps = {
  as: 'div'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/button.style.js":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Button/button.style.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* button default style */\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: ", ";\n  background-color: ", ";\n  min-height: ", "px;\n  min-width: ", "px;\n  border-radius: ", "px;\n  font-family: inherit;\n  font-size: ", "px;\n  font-weight: ", ";\n  text-decoration: none;\n  text-transform: capitalize;\n  padding-top: ", "px;\n  padding-bottom: ", "px;\n  padding-left: ", "px;\n  padding-right: ", "px;\n  border: 0;\n  transition: all 0.3s ease;\n  span.btn-text {\n    padding-left: ", "px;\n    padding-right: ", "px;\n  }\n  span.btn-icon {\n    display: flex;\n    > div {\n      display: flex !important;\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  /* Material style goes here */\n  &.is-material {\n    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);\n  }\n\n  /* When button on loading stage */\n  &.is-loading {\n    .btn-text {\n      padding-left: ", "px;\n      padding-right: ", "px;\n    }\n  }\n\n  /* Style system support */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var ButtonStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.white', '#ffffff'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('heights.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('widths.3', '48'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('radius.0', '3'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.4', '15'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.1', '4'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), Object(styled_system__WEBPACK_IMPORTED_MODULE_3__["themeGet"])('space.2', '8'), styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["buttonStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["colorStyle"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["sizeStyle"], _base__WEBPACK_IMPORTED_MODULE_5__["base"]); // prop types can also be added from the style functions

ButtonStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["alignItems"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["boxShadow"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_3__["variant"].propTypes);
ButtonStyle.displayName = 'ButtonStyle';
/* harmony default export */ __webpack_exports__["default"] = (ButtonStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Button/index.js":
/*!********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Button/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _button_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button.style */ "../../node_modules/reusecore/src/elements/Button/button.style.js");
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Loader */ "../../node_modules/reusecore/src/elements/Loader/index.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Button\\index.js";





var Button = function Button(_ref) {
  var type = _ref.type,
      title = _ref.title,
      icon = _ref.icon,
      disabled = _ref.disabled,
      iconPosition = _ref.iconPosition,
      onClick = _ref.onClick,
      loader = _ref.loader,
      loaderColor = _ref.loaderColor,
      isMaterial = _ref.isMaterial,
      isLoading = _ref.isLoading,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["type", "title", "icon", "disabled", "iconPosition", "onClick", "loader", "loaderColor", "isMaterial", "isLoading", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__button']; // isLoading prop checking

  if (isLoading) {
    addAllClasses.push('is-loading');
  } // isMaterial prop checking


  if (isMaterial) {
    addAllClasses.push('is-material');
  } // className prop checking


  if (className) {
    addAllClasses.push(className);
  } // Checking button loading state


  var buttonIcon = isLoading !== false ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, loader ? loader : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Loader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    loaderColor: loaderColor || '#30C56D',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })) : icon && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, icon); // set icon position

  var position = iconPosition || 'right';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_button_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: type,
    className: addAllClasses.join(' '),
    icon: icon,
    disabled: disabled,
    "icon-position": position,
    onClick: onClick
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), position === 'left' && buttonIcon, title && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "btn-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, title), position === 'right' && buttonIcon);
};

Button.propTypes = {
  /** ClassName of the button */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Add icon */
  type: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['button', 'submit', 'reset']),

  /** Add icon */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add loader */
  loader: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /** Add Material effect */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Button Loading state */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** If true button will be disabled */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /** Adjust your icon and loader position [if you use loader] */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right']),

  /** Variant change button shape */
  variant: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['textButton', 'outlined', 'fab', 'extendedFab']),

  /** primary || secondary || warning || error  change text and border color.
   *  And primaryWithBg || secondaryWithBg || warningWithBg || errorWithBg change text, border and background color */
  colors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['primary', 'secondary', 'warning', 'error', 'primaryWithBg', 'secondaryWithBg', 'warningWithBg', 'errorWithBg']),

  /**
   * Gets called when the user clicks on the button
   */
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};
Button.defaultProps = {
  disabled: false,
  isMaterial: false,
  isLoading: false,
  type: 'button'
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Drawer/index.js":
/*!********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Drawer/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-drawer */ "rc-drawer");
/* harmony import */ var rc_drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rc_drawer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rc-drawer/assets/index.css */ "../../node_modules/rc-drawer/assets/index.css");
/* harmony import */ var rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rc_drawer_assets_index_css__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Drawer\\index.js";





var Drawer = function Drawer(_ref) {
  var className = _ref.className,
      children = _ref.children,
      closeButton = _ref.closeButton,
      closeButtonStyle = _ref.closeButtonStyle,
      drawerHandler = _ref.drawerHandler,
      toggleHandler = _ref.toggleHandler,
      open = _ref.open,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "closeButton", "closeButtonStyle", "drawerHandler", "toggleHandler", "open"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__drawer']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(rc_drawer__WEBPACK_IMPORTED_MODULE_4___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    open: open,
    onMaskClick: toggleHandler,
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__close",
    onClick: toggleHandler,
    style: closeButtonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, closeButton), children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "reusecore-drawer__handler",
    style: {
      display: 'inline-block'
    },
    onClick: toggleHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, drawerHandler));
};

Drawer.propTypes = {
  /** ClassName of the Drawer */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render icon, button, text or any elements inside the closeButton prop. */
  closeButton: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /** Set drawer width. Default value is 300px. */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set drawer position left || right || top || bottom. */
  placement: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['left', 'right', 'top', 'bottom']),

  /** drawerHandler could be button, icon, string or any component */
  drawerHandler: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element.isRequired
};
Drawer.defaultProps = {
  width: '300px',
  handler: false,
  level: null
};
/* harmony default export */ __webpack_exports__["default"] = (Drawer);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Heading/index.js":
/*!*********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Heading/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Heading\\index.js";





var HeadingWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Heading'));

var Heading = function Heading(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(HeadingWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Heading);
Heading.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Heading.defaultProps = {
  as: 'h2',
  mt: 0,
  mb: '1rem',
  fontWeight: 'bold'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Image/index.js":
/*!*******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Image/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Image\\index.js";




var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default()('img')({
  display: 'block',
  maxWidth: '100%',
  height: 'auto'
}, _base__WEBPACK_IMPORTED_MODULE_5__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_5__["themed"])('Image'));

var Image = function Image(_ref) {
  var src = _ref.src,
      alt = _ref.alt,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["src", "alt"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImageWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: src,
    alt: alt
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Image);
Image.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired
};
Image.defaultProps = {
  m: 0
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/index.js":
/*!*******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Input/index.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _input_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.style */ "../../node_modules/reusecore/src/elements/Input/input.style.js");




var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Input\\index.js";




var Input = function Input(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onBlur = _ref.onBlur,
      onFocus = _ref.onFocus,
      onChange = _ref.onChange,
      inputType = _ref.inputType,
      isMaterial = _ref.isMaterial,
      icon = _ref.icon,
      iconPosition = _ref.iconPosition,
      passwordShowHide = _ref.passwordShowHide,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, ["label", "value", "onBlur", "onFocus", "onChange", "inputType", "isMaterial", "icon", "iconPosition", "passwordShowHide", "className"]);

  // use toggle hooks
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    toggle: false,
    focus: false,
    value: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      state = _useState2[0],
      setState = _useState2[1]; // toggle function


  var handleToggle = function handleToggle() {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      toggle: !state.toggle
    }));
  }; // add focus class


  var handleOnFocus = function handleOnFocus(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: true
    }));
    onFocus(event);
  }; // remove focus class


  var handleOnBlur = function handleOnBlur(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      focus: false
    }));
    onBlur(event);
  }; // handle input value


  var handleOnChange = function handleOnChange(event) {
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state, {
      value: event.target.value
    }));
    onChange(event.target.value);
  }; // get input focus class


  var getInputFocusClass = function getInputFocusClass() {
    if (state.focus === true || state.value !== '') {
      return 'is-focus';
    } else {
      return '';
    }
  }; // init variable


  var inputElement, htmlFor; // Add all classs to an array

  var addAllClasses = ['reusecore__input']; // Add is-material class

  if (isMaterial) {
    addAllClasses.push('is-material');
  } // Add icon position class if input element has icon


  if (icon && iconPosition) {
    addAllClasses.push("icon-".concat(iconPosition));
  } // Add new class


  if (className) {
    addAllClasses.push(className);
  } // if lable is not empty


  if (label) {
    htmlFor = label.replace(/\s+/g, '_').toLowerCase();
  } // Label position


  var LabelPosition = isMaterial === true ? 'bottom' : 'top'; // Label field

  var LabelField = label && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("label", {
    htmlFor: htmlFor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, label); // Input type check

  switch (inputType) {
    case 'textarea':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("textarea", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }));
      break;

    case 'password':
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: state.toggle ? 'password' : 'text',
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      })), passwordShowHide && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["EyeButton"], {
        onClick: handleToggle,
        className: state.toggle ? 'eye' : 'eye-closed',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      })));
      break;

    default:
      inputElement = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "field-wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        id: htmlFor,
        name: htmlFor,
        type: inputType,
        value: state.value,
        onChange: handleOnChange,
        onBlur: handleOnBlur,
        onFocus: handleOnFocus,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      })), icon && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
        className: "input-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, icon));
  }

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_input_style__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "".concat(addAllClasses.join(' '), " ").concat(getInputFocusClass()),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, LabelPosition === 'top' && LabelField, inputElement, isMaterial && react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), LabelPosition === 'bottom' && LabelField);
};
/** Inout prop type checking. */


Input.propTypes = {
  /** className of the Input component. */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** Set input label value. */
  label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /** The input value, required for a controlled component. */
  value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['string', 'number']),

  /** Make default input into material style input. */
  isMaterial: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Password show hide icon button prop [*only for password field]. */
  passwordShowHide: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /** Set input type of the input element. Default type is text. */
  inputType: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['text', 'email', 'password', 'number', 'textarea']),

  /** Add icon in input field. This prop will not work with password
   * and textarea field.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /** Set input field icon position. Default position is 'left'. */
  iconPosition: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['left', 'right']),

  /**
   * @ignore
   */
  onBlur: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onFocus: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};
/** Inout default type. */

Input.defaultProps = {
  inputType: 'text',
  isMaterial: false,
  iconPosition: 'left',
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onChange: function onChange() {}
};
/* harmony default export */ __webpack_exports__["default"] = (Input);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Input/input.style.js":
/*!*************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Input/input.style.js ***!
  \*************************************************************************************************************/
/*! exports provided: EyeButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EyeButton", function() { return EyeButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 43px;\n  height: 40px;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  top: 0;\n  right: 0;\n  position: absolute;\n  outline: none;\n  cursor: pointer;\n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: transparent;\n\n  > span {\n    width: 12px;\n    height: 12px;\n    display: block;\n    border: solid 1px ", ";\n    border-radius: 75% 15%;\n    transform: rotate(45deg);\n    position: relative;\n\n    &:before {\n      content: '';\n      display: block;\n      width: 4px;\n      height: 4px;\n      border-radius: 50%;\n      left: 3px;\n      top: 3px;\n      position: absolute;\n      border: solid 1px ", ";\n    }\n  }\n\n  &.eye-closed {\n    > span {\n      &:after {\n        content: '';\n        display: block;\n        width: 1px;\n        height: 20px;\n        left: calc(50% - 1px / 2);\n        top: -4px;\n        position: absolute;\n        background-color: ", ";\n        transform: rotate(-12deg);\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  position: relative;\n\n  /* Input field wrapper */\n  .field-wrapper {\n    position: relative;\n  }\n\n  /* If input has icon then these styel */\n  &.icon-left,\n  &.icon-right {\n    .field-wrapper {\n      display: flex;\n      align-items: center;\n      > .input-icon {\n        position: absolute;\n        top: 0;\n        bottom: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 34px;\n        height: 40px;\n      }\n    }\n  }\n\n  /* When icon position in left */\n  &.icon-left {\n    .field-wrapper {\n      > .input-icon {\n        left: 0;\n        right: auto;\n      }\n      > input {\n        padding-left: 34px;\n      }\n    }\n  }\n\n  /* When icon position in right */\n  &.icon-right {\n    .field-wrapper {\n      > .input-icon {\n        left: auto;\n        right: 0;\n      }\n      > input {\n        padding-right: 34px;\n      }\n    }\n  }\n\n  /* Label default style */\n  label {\n    display: block;\n    color: ", ";\n    font-size: ", "px;\n    font-weight: ", ";\n    margin-bottom: ", "px;\n    transition: 0.2s ease all;\n  }\n\n  /* Input and textarea default style */\n  textarea,\n  input {\n    font-size: 16px;\n    padding: 11px;\n    display: block;\n    width: 100%;\n    color: ", ";\n    box-shadow: none;\n    border-radius: 4px;\n    box-sizing: border-box;\n    border: 1px solid ", ";\n    transition: border-color 0.2s ease;\n    &:focus {\n      outline: none;\n      border-color: ", ";\n    }\n  }\n\n  textarea {\n    min-height: 150px;\n  }\n\n  /* Input material style */\n  &.is-material {\n    label {\n      position: absolute;\n      left: 0;\n      top: 10px;\n    }\n\n    input,\n    textarea {\n      border-radius: 0;\n      border-top: 0;\n      border-left: 0;\n      border-right: 0;\n      padding-left: 0;\n      padding-right: 0;\n    }\n\n    textarea {\n      min-height: 40px;\n      padding-bottom: 0;\n    }\n\n    .highlight {\n      position: absolute;\n      height: 1px;\n      top: auto;\n      left: 50%;\n      bottom: 0;\n      width: 0;\n      pointer-events: none;\n      transition: all 0.2s ease;\n    }\n\n    /* If input has icon then these styel */\n    &.icon-left,\n    &.icon-right {\n      .field-wrapper {\n        flex-direction: row-reverse;\n        > .input-icon {\n          width: auto;\n        }\n        > input {\n          flex: 1;\n        }\n      }\n    }\n\n    /* When icon position in left */\n    &.icon-left {\n      .field-wrapper {\n        > input {\n          padding-left: 20px;\n        }\n      }\n      label {\n        top: -15px;\n        font-size: 12px;\n      }\n    }\n\n    /* When icon position in right */\n    &.icon-right {\n      .field-wrapper {\n        > input {\n          padding-right: 20px;\n        }\n      }\n    }\n\n    /* Material input focus style */\n    &.is-focus {\n      input {\n        border-color: ", ";\n      }\n\n      label {\n        top: -16px;\n        font-size: 12px;\n        color: ", ";\n      }\n\n      .highlight {\n        width: 100%;\n        height: 2px;\n        background-color: ", ";\n        left: 0;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var InputField = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.labelColor', '#767676'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontSizes.4', '16'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('fontWeights.4', '500'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('space.3', '10'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.inactiveIcon', '#ebebeb'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.primary', '#028489'));
var EyeButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button(_templateObject2(), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'), Object(styled_system__WEBPACK_IMPORTED_MODULE_2__["themeGet"])('colors.textColor', '#484848'));

/* harmony default export */ __webpack_exports__["default"] = (InputField);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Link/index.js":
/*!******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Link/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Link\\index.js";




var LinkWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('a')({
  textDecoration: 'none'
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"], Object(_base__WEBPACK_IMPORTED_MODULE_6__["themed"])('Link'));

var Link = function Link(_ref) {
  var children = _ref.children,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(LinkWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Link);
Link.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object]),
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any.isRequired
}, _base__WEBPACK_IMPORTED_MODULE_6__["base"].propTypes);
Link.defaultProps = {
  as: 'a',
  m: 0,
  display: 'inline-block'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/index.js":
/*!********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Loader/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _loader_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.style */ "../../node_modules/reusecore/src/elements/Loader/loader.style.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Loader\\index.js";




var Loader = function Loader(_ref) {
  var loaderColor = _ref.loaderColor,
      className = _ref.className,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["loaderColor", "className"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__loader']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_loader_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' '),
    loaderColor: loaderColor
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }));
};

Loader.propTypes = {
  /** ClassName of the Loader */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Set loader width in number || string */
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set loader height in number || string */
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]),

  /** Set color for loader */
  loaderColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
Loader.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Loader/loader.style.js":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Loader/loader.style.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme/customVariant */ "../../node_modules/reusecore/src/theme/customVariant.js");
/* harmony import */ var _Animation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Animation */ "../../node_modules/reusecore/src/elements/Animation/index.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  /* loader default style */\n  display: inline-flex;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  overflow: hidden;\n  border-width: 2px;\n  border-style: solid;\n  border-color: ", ";\n  border-top-color: transparent !important;\n\n  /* animation goes here */\n  ", "\n  /* Style system custome color variant */\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var LoaderStyle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span(_templateObject(), function (props) {
  return props.loaderColor ? props.loaderColor : '#000000';
}, _Animation__WEBPACK_IMPORTED_MODULE_5__["AnimSpinner"], _theme_customVariant__WEBPACK_IMPORTED_MODULE_4__["colorStyle"], _base__WEBPACK_IMPORTED_MODULE_6__["base"]); // prop types can also be added from the style functions

LoaderStyle.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_3__["variant"].propTypes);
LoaderStyle.displayName = 'LoaderStyle';
/* harmony default export */ __webpack_exports__["default"] = (LoaderStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/index.js":
/*!********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Navbar/index.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _navbar_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar.style */ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Navbar\\index.js";




var Navbar = function Navbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      navbarStyle = _ref.navbarStyle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["className", "children", "navbarStyle"]);

  // Add all classs to an array
  var addAllClasses = ['reusecore__navbar']; // className prop checking

  if (className) {
    addAllClasses.push(className);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_navbar_style__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: addAllClasses.join(' ')
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children);
};

Navbar.propTypes = {
  /** ClassName of the Navbar. Default class is reusecore__navbar*/
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /** Used to render menu, logo, button or any component that
   * you want to show in navbar. */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  space: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  borderRadius: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number]))]),
  boxShadow: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  color: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  display: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  alignItems: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  justifyContent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexDirection: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  flexWrap: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/** Navbar default proptype */

Navbar.defaultProps = {};
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Navbar/navbar.style.js":
/*!***************************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Navbar/navbar.style.js ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  /* Navbar default style goes here */\n  display: flex;\n  align-items: center;\n  min-height: 56px;\n  padding: 10px 16px;\n  \n  /* Style system supported prop */\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var NavbarStyle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.nav(_templateObject(), styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexDirection"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["boxShadow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"]);
NavbarStyle.displayName = 'NavbarStyle';
/* harmony default export */ __webpack_exports__["default"] = (NavbarStyle);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/Text/index.js":
/*!******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/Text/index.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../base */ "../../node_modules/reusecore/src/elements/base.js");



var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\Text\\index.js";





var TextWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default()('p')(_base__WEBPACK_IMPORTED_MODULE_7__["base"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_6__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_6__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_6__["letterSpacing"], Object(_base__WEBPACK_IMPORTED_MODULE_7__["themed"])('Text'));

var Text = function Text(_ref) {
  var content = _ref.content,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, ["content"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(TextWrapper, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), content);
};

/* harmony default export */ __webpack_exports__["default"] = (Text);
Text.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({
  content: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  as: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  mt: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  mb: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontFamily: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  fontWeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  textAlign: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  lineHeight: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))]),
  letterSpacing: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.number]))])
}, _base__WEBPACK_IMPORTED_MODULE_7__["base"].propTypes);
Text.defaultProps = {
  as: 'p',
  mt: 0,
  mb: '1rem'
};

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/UI/Logo/index.js":
/*!*********************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/UI/Logo/index.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Text */ "../../node_modules/reusecore/src/elements/Text/index.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Link */ "../../node_modules/reusecore/src/elements/Link/index.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Image */ "../../node_modules/reusecore/src/elements/Image/index.js");


var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\node_modules\\reusecore\\src\\elements\\UI\\Logo\\index.js";






var Logo = function Logo(_ref) {
  var logoWrapperStyle = _ref.logoWrapperStyle,
      logoStyle = _ref.logoStyle,
      titleStyle = _ref.titleStyle,
      withAchor = _ref.withAchor,
      anchorProps = _ref.anchorProps,
      logoSrc = _ref.logoSrc,
      title = _ref.title,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["logoWrapperStyle", "logoStyle", "titleStyle", "withAchor", "anchorProps", "logoSrc", "title"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, logoWrapperStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), withAchor ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, anchorProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, logoSrc ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    src: logoSrc,
    alt: title
  }, logoStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Text__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    content: title
  }, titleStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }))));
};

Logo.propTypes = {
  logoSrc: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  title: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  logoWrapperStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  logoStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  titleStyle: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,
  withAchor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  anchorProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};
Logo.defaultProps = {
  logoWrapperStyle: {
    display: 'inline-block',
    mr: '1rem',
    'a:hover,a:focus': {
      textDecoration: 'none'
    }
  },
  titleStyle: {
    display: 'inline-block',
    fontSize: '2rem',
    lineHeight: 'inherit',
    whiteSpace: 'nowrap'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "../../node_modules/reusecore/src/elements/base.js":
/*!************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/elements/base.js ***!
  \************************************************************************************************/
/*! exports provided: themed, base */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "themed", function() { return themed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base", function() { return base; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


/** this is our Base Component every components must be Extend it */

var themed = function themed(key) {
  return function (props) {
    return props.theme[key];
  };
};
var base = Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(function () {
  return {
    boxSizing: 'border-box'
  };
}, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["width"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_1__["height"], styled_system__WEBPACK_IMPORTED_MODULE_1__["minHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["maxHeight"], styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_1__["order"], styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_1__["display"]);
base.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, styled_system__WEBPACK_IMPORTED_MODULE_1__["display"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["space"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borders"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["borderColor"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["width"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["height"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["fontSize"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["color"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["flex"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["order"].propTypes, styled_system__WEBPACK_IMPORTED_MODULE_1__["alignSelf"].propTypes);

/***/ }),

/***/ "../../node_modules/reusecore/src/theme/customVariant.js":
/*!******************************************************************************************************!*\
  !*** D:/RedQ Projects/next new/react-next-landing/node_modules/reusecore/src/theme/customVariant.js ***!
  \******************************************************************************************************/
/*! exports provided: cards, buttonStyle, colorStyle, sizeStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cards", function() { return cards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonStyle", function() { return buttonStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorStyle", function() { return colorStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeStyle", function() { return sizeStyle; });
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_0__);

var buttonStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'buttonStyles'
});
var colorStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'colorStyles',
  prop: 'colors'
});
var sizeStyle = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'sizeStyles',
  prop: 'size'
});
var cards = Object(styled_system__WEBPACK_IMPORTED_MODULE_0__["variant"])({
  key: 'cards'
});


/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-server/head */ "next-server/head");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! common/src/contexts/DrawerContext */ "../../node_modules/common/src/contexts/DrawerContext.js");
/* harmony import */ var common_src_theme_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/src/theme/portfolio */ "../../node_modules/common/src/theme/portfolio/index.js");
/* harmony import */ var common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! common/src/assets/css/style */ "../../node_modules/common/src/assets/css/style.js");
/* harmony import */ var common_src_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! common/src/containers/Portfolio/portfolio.style */ "../../node_modules/common/src/containers/Portfolio/portfolio.style.js");
/* harmony import */ var common_src_containers_Portfolio_Banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! common/src/containers/Portfolio/Banner */ "../../node_modules/common/src/containers/Portfolio/Banner/index.js");
/* harmony import */ var common_src_containers_Portfolio_Navbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! common/src/containers/Portfolio/Navbar */ "../../node_modules/common/src/containers/Portfolio/Navbar/index.js");
/* harmony import */ var common_src_containers_Portfolio_Awards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! common/src/containers/Portfolio/Awards */ "../../node_modules/common/src/containers/Portfolio/Awards/index.js");
/* harmony import */ var common_src_containers_Portfolio_PortfolioShowcase__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! common/src/containers/Portfolio/PortfolioShowcase */ "../../node_modules/common/src/containers/Portfolio/PortfolioShowcase/index.js");
/* harmony import */ var common_src_containers_Portfolio_Process__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! common/src/containers/Portfolio/Process */ "../../node_modules/common/src/containers/Portfolio/Process/index.js");
/* harmony import */ var common_src_containers_Portfolio_Skill__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! common/src/containers/Portfolio/Skill */ "../../node_modules/common/src/containers/Portfolio/Skill/index.js");
/* harmony import */ var common_src_containers_Portfolio_CallToAction__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! common/src/containers/Portfolio/CallToAction */ "../../node_modules/common/src/containers/Portfolio/CallToAction/index.js");
/* harmony import */ var common_src_containers_Portfolio_Testimonial__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! common/src/containers/Portfolio/Testimonial */ "../../node_modules/common/src/containers/Portfolio/Testimonial/index.js");
/* harmony import */ var common_src_containers_Portfolio_Clients__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! common/src/containers/Portfolio/Clients */ "../../node_modules/common/src/containers/Portfolio/Clients/index.js");
/* harmony import */ var common_src_containers_Portfolio_Contact__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! common/src/containers/Portfolio/Contact */ "../../node_modules/common/src/containers/Portfolio/Contact/index.js");
/* harmony import */ var common_src_containers_Portfolio_Footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! common/src/containers/Portfolio/Footer */ "../../node_modules/common/src/containers/Portfolio/Footer/index.js");
/* harmony import */ var common_src_components_DemoSwitcher__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! common/src/components/DemoSwitcher */ "../../node_modules/common/src/components/DemoSwitcher/index.js");
/* harmony import */ var common_src_components_EnvatoButton__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! common/src/components/EnvatoButton */ "../../node_modules/common/src/components/EnvatoButton/index.js");
var _jsxFileName = "D:\\RedQ Projects\\next new\\react-next-landing\\packages\\landing\\pages\\portfolio.js";





















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: common_src_theme_portfolio__WEBPACK_IMPORTED_MODULE_5__["portfolioTheme"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Portfolio | A react next landing page"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "Description",
    content: "React next landing page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "theme-color",
    content: "#ec5555",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway:300,400,400i,500,600,700,800|Roboto:300,400,400i,500,700,900",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_assets_css_style__WEBPACK_IMPORTED_MODULE_6__["ResetCSS"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_7__["GlobalStyle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_portfolio_style__WEBPACK_IMPORTED_MODULE_7__["ContentWrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_stickynode__WEBPACK_IMPORTED_MODULE_3___default.a, {
    top: 0,
    innerZ: 9999,
    activeClass: "sticky-nav-active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_contexts_DrawerContext__WEBPACK_IMPORTED_MODULE_4__["DrawerProvider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Navbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Banner__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_PortfolioShowcase__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Awards__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Process__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Skill__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_CallToAction__WEBPACK_IMPORTED_MODULE_14__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Testimonial__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Clients__WEBPACK_IMPORTED_MODULE_16__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Contact__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_containers_Portfolio_Footer__WEBPACK_IMPORTED_MODULE_18__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_DemoSwitcher__WEBPACK_IMPORTED_MODULE_19__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(common_src_components_EnvatoButton__WEBPACK_IMPORTED_MODULE_20__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))));
});

/***/ }),

/***/ 3:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RedQ Projects\next new\react-next-landing\packages\landing\pages\portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "@glidejs/glide":
/*!*********************************!*\
  !*** external "@glidejs/glide" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@glidejs/glide");

/***/ }),

/***/ "@redq/reuse-modal":
/*!************************************!*\
  !*** external "@redq/reuse-modal" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redq/reuse-modal");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next-server/head":
/*!***********************************!*\
  !*** external "next-server/head" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "rc-drawer":
/*!****************************!*\
  !*** external "rc-drawer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-drawer");

/***/ }),

/***/ "rc-progress":
/*!******************************!*\
  !*** external "rc-progress" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-progress");

/***/ }),

/***/ "rc-tabs":
/*!**************************!*\
  !*** external "rc-tabs" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs");

/***/ }),

/***/ "rc-tabs/lib/ScrollableInkTabBar":
/*!**************************************************!*\
  !*** external "rc-tabs/lib/ScrollableInkTabBar" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/ScrollableInkTabBar");

/***/ }),

/***/ "rc-tabs/lib/TabContent":
/*!*****************************************!*\
  !*** external "rc-tabs/lib/TabContent" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-tabs/lib/TabContent");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/fa/heart":
/*!*******************************************!*\
  !*** external "react-icons-kit/fa/heart" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/heart");

/***/ }),

/***/ "react-icons-kit/feather/cornerDownRight":
/*!**********************************************************!*\
  !*** external "react-icons-kit/feather/cornerDownRight" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/cornerDownRight");

/***/ }),

/***/ "react-icons-kit/feather/plus":
/*!***********************************************!*\
  !*** external "react-icons-kit/feather/plus" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/feather/plus");

/***/ }),

/***/ "react-icons-kit/icomoon/twitter":
/*!**************************************************!*\
  !*** external "react-icons-kit/icomoon/twitter" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/twitter");

/***/ }),

/***/ "react-icons-kit/ionicons/socialDribbbleOutline":
/*!*****************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialDribbbleOutline" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialDribbbleOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/socialFacebook":
/*!**********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialFacebook" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialFacebook");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGithub":
/*!********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGithub" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGithub");

/***/ }),

/***/ "react-icons-kit/ionicons/socialGoogleplusOutline":
/*!*******************************************************************!*\
  !*** external "react-icons-kit/ionicons/socialGoogleplusOutline" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialGoogleplusOutline");

/***/ }),

/***/ "react-icons-kit/ionicons/socialTwitter":
/*!*********************************************************!*\
  !*** external "react-icons-kit/ionicons/socialTwitter" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ionicons/socialTwitter");

/***/ }),

/***/ "react-icons-kit/md/ic_thumb_up":
/*!*************************************************!*\
  !*** external "react-icons-kit/md/ic_thumb_up" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_thumb_up");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Wizard/CancellationLayer.jsx":
/*!******************************************!*\
  !*** ./src/Wizard/CancellationLayer.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationLayer: () => (/* binding */ CancellationLayer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Layer/Layer.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Heading/Heading.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Text/Text.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Button/Button.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/Wizard/index.jsx");
var _excluded = ["onSetOpen"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var CancellationLayer = function CancellationLayer(_ref) {
  var onSetOpen = _ref.onSetOpen,
    rest = _objectWithoutProperties(_ref, _excluded);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.WizardContext),
    defaultFormValues = _useContext.defaultFormValues,
    setFormValues = _useContext.setFormValues;
  var size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Layer, _extends({
    position: "center",
    full: ['xsmall', 'small'].includes(size),
    onClickOutside: function onClickOutside() {
      return onSetOpen(false);
    },
    onEsc: function onEsc() {
      return onSetOpen(false);
    }
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, {
    pad: "large",
    gap: "medium",
    width: "large"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_5__.Heading, {
    level: 2,
    margin: "none"
  }, "Cancel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_6__.Text, {
    color: "text-strong"
  }, "Wizard Title")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_6__.Text, null, "You have unsaved changes. Leaving this page will cause you to lose all of your progress."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, {
    as: "footer",
    gap: "small",
    direction: !['xsmall', 'small'].includes(size) ? 'row' : 'column',
    align: "center",
    justify: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Button, {
    label: "No, stay",
    onClick: function onClick() {
      return onSetOpen(false);
    },
    secondary: true,
    fill: !['xsmall', 'small'].includes(size) ? false : 'horizontal'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Button, {
    label: "Yes, exit",
    fill: !['xsmall', 'small'].includes(size) ? false : 'horizontal',
    onClick: function onClick() {
      onSetOpen(false);
      setFormValues(defaultFormValues);
    },
    primary: true
  }))));
};
CancellationLayer.propTypes = {
  onSetOpen: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func).isRequired,
  target: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object)
};

/***/ }),

/***/ "./src/Wizard/Error.jsx":
/*!******************************!*\
  !*** ./src/Wizard/Error.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Error: () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Text/Text.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/icons/CircleAlert.js");
var _excluded = ["children"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var Error = function Error(_ref) {
  var children = _ref.children,
    rest = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_1__.Box, {
    animation: "fadeIn",
    background: "validation-critical",
    margin: {
      bottom: 'medium'
    },
    pad: "small",
    round: "4px",
    width: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_1__.Box, _extends({
    direction: "row",
    gap: "xsmall"
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_2__.CircleAlert, {
    size: "small"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Text, {
    size: "xsmall"
  }, children)));
};
Error.propTypes = {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().string)
};

/***/ }),

/***/ "./src/Wizard/StepContent.jsx":
/*!************************************!*\
  !*** ./src/Wizard/StepContent.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepContent: () => (/* binding */ StepContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Form/Form.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/Wizard/index.jsx");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




var StepContent = function StepContent(_ref) {
  var onSubmit = _ref.onSubmit;
  var size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.WizardContext),
    activeIndex = _useContext.activeIndex,
    setActiveIndex = _useContext.setActiveIndex,
    formValues = _useContext.formValues,
    id = _useContext.id,
    ref = _useContext.ref,
    setFormValues = _useContext.setFormValues,
    setValid = _useContext.setValid,
    steps = _useContext.steps,
    width = _useContext.width;
  var handleSubmit = function handleSubmit(event) {
    setValid(true);
    if (activeIndex < steps.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (onSubmit) {
      onSubmit(event);
    }
  };

  // On long forms, we want to focus the first of any fields that
  // return an error or info message. This removes the need for the
  // user to scroll to find which field blocked form submission.
  var onValidate = function onValidate(validationResults) {
    var names = [].concat(_toConsumableArray(Object.keys(validationResults.errors)), _toConsumableArray(Object.keys(validationResults.infos)));
    if (names.length > 0) {
      var selector = names.map(function (name) {
        return "[name=".concat(name, "]");
      }).join(',');
      var firstInvalid = document.querySelectorAll(selector)[0];
      if (firstInvalid) {
        setTimeout(function () {
          return firstInvalid.focus();
        }, 0);
      }
    }
    setTimeout(function () {
      return setValid(names.length === 0);
    }, 0);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {
    align: "center",
    pad: !['xsmall', 'small'].includes(size) ? {
      vertical: 'large'
    } : {
      vertical: 'medium'
    },
    overflow: "auto",
    ref: ref,
    flex: ['xsmall', 'small'].includes(size) ? true : undefined,
    margin: !['xsmall', 'small'].includes(size) ? {
      horizontal: 'medium'
    } : undefined
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {
    width: width,
    gap: "medium",
    pad: ['xsmall', 'small'].includes(size) ? {
      horizontal: 'medium'
    } : 'xxsmall'
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.StepHeader, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, {
    margin: {
      top: 'small'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Form
  // needed to associate form submit button with form
  // since submit button lives outside form tag
  , {
    id: "".concat(id, "-form"),
    value: formValues,
    onChange: function onChange(nextValue) {
      return setFormValues(nextValue);
    },
    onSubmit: handleSubmit,
    onValidate: onValidate,
    method: "post",
    messages: {
      required: 'This is a required field.'
    }
  }, steps[activeIndex].inputs))));
};
StepContent.propTypes = {
  onSubmit: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().func).isRequired
};

/***/ }),

/***/ "./src/Wizard/StepFooter.jsx":
/*!***********************************!*\
  !*** ./src/Wizard/StepFooter.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepFooter: () => (/* binding */ StepFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Footer/Footer.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Button/Button.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/icons/LinkNext.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/Wizard/index.jsx");
var _excluded = ["nextId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var StepFooter = function StepFooter(_ref) {
  var nextId = _ref.nextId,
    rest = _objectWithoutProperties(_ref, _excluded);
  var size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.WizardContext),
    activeIndex = _useContext.activeIndex,
    id = _useContext.id,
    steps = _useContext.steps,
    width = _useContext.width;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Box, _extends({
    margin: !['xsmall', 'small'].includes(size) ? {
      horizontal: 'medium'
    } : undefined,
    flex: false
  }, rest), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Footer, {
    border: {
      side: 'top',
      color: 'border'
    },
    justify: "end",
    pad: !['xsmall', 'small'].includes(size) ? {
      vertical: 'medium'
    } : {
      vertical: 'small',
      horizontal: 'medium'
    },
    alignSelf: "center",
    width: width
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_5__.Button, {
    id: nextId,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_6__.LinkNext, null),
    primary: true,
    reverse: true,
    label: activeIndex === steps.length - 1 ? 'Finish wizard' : 'Next',
    form: "".concat(id, "-form"),
    type: "submit"
  })));
};
StepFooter.propTypes = {
  nextId: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().string)
};

/***/ }),

/***/ "./src/Wizard/StepHeader.jsx":
/*!***********************************!*\
  !*** ./src/Wizard/StepHeader.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepHeader: () => (/* binding */ StepHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Text/Text.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Heading/Heading.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Paragraph/Paragraph.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/Wizard/index.jsx");




var StepHeader = function StepHeader(_ref) {
  var summaryId = _ref.summaryId,
    titleId = _ref.titleId,
    descriptionId = _ref.descriptionId;
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.WizardContext),
    activeIndex = _useContext.activeIndex,
    activeStep = _useContext.activeStep,
    id = _useContext.id,
    steps = _useContext.steps;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.Box, {
    id: id,
    gap: "xsmall",
    flex: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Text, {
    id: summaryId
  }, "Step ", activeStep, " of ", steps.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Heading, {
    margin: "none",
    id: titleId
  }, steps[activeIndex].title || "Step ".concat(activeStep, " title")), typeof steps[activeIndex].description === 'string' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_5__.Paragraph, {
    size: "large",
    margin: "none",
    id: descriptionId
  }, steps[activeIndex].description) : steps[activeIndex].description);
};
StepHeader.propTypes = {
  summaryId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  titleId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),
  descriptionId: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)
};

/***/ }),

/***/ "./src/Wizard/Wizard.jsx":
/*!*******************************!*\
  !*** ./src/Wizard/Wizard.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StepOne: () => (/* binding */ StepOne),
/* harmony export */   WizardValidationExample: () => (/* binding */ WizardValidationExample),
/* harmony export */   defaultFormValues: () => (/* binding */ defaultFormValues),
/* harmony export */   steps: () => (/* binding */ steps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/FormField/FormField.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/TextInput/TextInput.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/RadioButtonGroup/RadioButtonGroup.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Grid/Grid.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Select/Select.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/CheckBoxGroup/CheckBoxGroup.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/TextArea/TextArea.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/List/List.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Text/Text.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Grommet/Grommet.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/icons/Checkmark.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ */ "./src/Wizard/index.jsx");
/* harmony import */ var grommet_theme_hpe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! grommet-theme-hpe */ "./node_modules/grommet-theme-hpe/dist/es6/themes/hpe.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
// WizardValidationExample.js







// import { getWidth } from "./utils";

var getWidth = function getWidth(numberColumns, theme, size) {
  var inputWidth = parseInt(theme.global.size.medium.replace('px', ''), 10) * numberColumns;
  var gapWidth = !['xsmall', 'small'].includes(size) ? parseInt(theme.global.edgeSize.large.replace('px', ''), 10) * (numberColumns - 1) : 0;
  var focusPad = 2 * (['xsmall', 'small'].includes(size) ? parseInt(theme.global.edgeSize.small.replace('px', ''), 10) : parseInt(theme.global.edgeSize.xxsmall.replace('px', ''), 10));
  return "".concat(inputWidth + gapWidth + focusPad, "px");
};
var defaultFormValues = {
  'firstname-validation': '',
  'lastname-validation': '',
  'text-input-validation': '',
  'radio-button-group-validation': '',
  select: '',
  checkboxgroup: '',
  'text-area': ''
};
var stepOneInputs = [function (setValid) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    label: "First name",
    htmlFor: "firstname-validation",
    name: "firstname-validation",
    required: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    placeholder: "Jane",
    id: "firstname-validation",
    name: "firstname-validation",
    onChange: function onChange() {
      return setValid(true);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    label: "Last name",
    htmlFor: "lastname-validation",
    name: "lastname-validation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    placeholder: "Smith",
    id: "lastname-validation",
    name: "lastname-validation"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    label: "Email",
    htmlFor: "text-input-validation",
    name: "text-input-validation",
    validate: {
      regexp: new RegExp('(^$)|([^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+)'),
      message: 'Invalid email address',
      status: 'error'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.TextInput, {
    placeholder: "jane.smith@hpe.com",
    id: "text-input-validation",
    name: "text-input-validation",
    onChange: function onChange() {
      return setValid(true);
    }
  })));
}, function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    htmlFor: "radio-button-group-validation",
    label: "RadioButtonGroup",
    name: "radio-button-group-validation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.RadioButtonGroup, {
    id: "radio-button-group-validation",
    name: "radio-button-group-validation",
    options: ['Radio button 1', 'Radio button 2']
  }));
}];
var StepOne = function StepOne() {
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.WizardContext),
    valid = _useContext.valid,
    setValid = _useContext.setValid;
  var size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_5__.ResponsiveContext);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_6__.Grid, {
    columns: !['xsmall', 'small'].includes(size) ? {
      count: 'fit',
      size: 'medium'
    } : '100%',
    gap: !['xsmall', 'small'].includes(size) ? 'large' : undefined,
    margin: {
      bottom: 'medium'
    }
  }, stepOneInputs.map(function (input, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {
      width: {
        max: 'medium'
      },
      key: index
    }, input(setValid));
  })), !valid && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.Error, null, "There is an error with one or more inputs."));
};
var StepTwo = function StepTwo() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {
    margin: {
      bottom: 'medium'
    },
    width: "medium"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    label: "Select",
    htmlFor: "select",
    name: "select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_8__.Select, {
    placeholder: "Select item",
    id: "select",
    name: "select",
    options: ['Option 1', 'Option 2']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    htmlFor: "checkboxgroup",
    label: "Label",
    name: "checkboxgroup"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_9__.CheckBoxGroup, {
    id: "checkboxgroup",
    name: "checkboxgroup",
    options: ['CheckBox 1', 'CheckBox 2']
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_2__.FormField, {
    help: "Description of how to use this field",
    htmlFor: "text-area",
    label: "Label",
    name: "text-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_10__.TextArea, {
    id: "text-area",
    name: "text-area",
    options: ['CheckBox 1', 'CheckBox 2'],
    placeholder: "Placeholder text",
    resize: "vertical"
  })));
};
var data = ['Summary value of step 1', 'More summary value of step 1', 'Summary value of step 2', 'More summary values from step 2'];
var StepThree = function StepThree() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {
    gap: "small"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_11__.List, {
    data: data,
    pad: {
      horizontal: 'none',
      vertical: 'small'
    }
  }, function (datum, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {
      key: index,
      direction: "row",
      gap: "small",
      align: "center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_12__.Checkmark, {
      color: "text-strong",
      size: "small"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_13__.Text, {
      color: "text-strong",
      weight: 500
    }, datum));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_13__.Text, {
    color: "text-strong"
  }, "Include guidance to what will occur when \u201CFinish wizard\" is clicked."));
};
var steps = [{
  description: "Step one description. Keep each step simple and in chunks \n    easy enough to fit on a single page.",
  inputs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StepOne, null),
  title: 'Step 1 title'
}, {
  description: "Step 2 description. Even though this step is single-column, \n    the width of the footer should be consistent across all steps.",
  inputs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StepTwo, null),
  title: 'Step 2 title'
}, {
  description: 'Review your configuration details.',
  inputs: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StepThree, null),
  title: 'Review & create'
}];
var WizardValidationExample = function WizardValidationExample(_ref) {
  var containerRef = _ref.containerRef;
  // containerRef is for demonstration purposes on this site. Most
  // implementations should likely remove.
  var size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_5__.ResponsiveContext);
  var theme = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(styled_components__WEBPACK_IMPORTED_MODULE_14__.ThemeContext);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];
  // for readability, this is used to display numeric value of step on screen,
  // such as step 1 of 3. it will always be one more than the active array index
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(activeIndex + 1),
    _useState4 = _slicedToArray(_useState3, 2),
    activeStep = _useState4[0],
    setActiveStep = _useState4[1];

  // store form values in state so they persist
  // when user goes back a step
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultFormValues),
    _useState6 = _slicedToArray(_useState5, 2),
    formValues = _useState6[0],
    setFormValues = _useState6[1];

  // controls state of cancel layer
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];

  // tracks validation results for the current step
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState10 = _slicedToArray(_useState9, 2),
    valid = _useState10[0],
    setValid = _useState10[1];

  // ref allows us to access the wizard container and ensure scroll position
  // is at the top as user advances between steps. useEffect is triggered
  // when the active step changes.
  var wizardRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    setActiveStep(activeIndex + 1);
  }, [activeIndex]);
  var id = 'simple-wizard';
  // scroll to top of step when step changes
  react__WEBPACK_IMPORTED_MODULE_0___default().useEffect(function () {
    var container = wizardRef.current;
    var header = document.querySelector("#".concat(id));
    container.scrollTop = -header.getBoundingClientRect().bottom;
  }, [activeIndex, open]);
  var numberColumns = 2;
  var width = '600px';
  var contextValue = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
    return {
      activeIndex: activeIndex,
      id: id,
      defaultFormValues: defaultFormValues,
      setActiveIndex: setActiveIndex,
      activeStep: activeStep,
      setActiveStep: setActiveStep,
      valid: valid,
      ref: wizardRef,
      setValid: setValid,
      steps: steps,
      formValues: formValues,
      setFormValues: setFormValues,
      wizardTitle: 'Wizard Title',
      width: width
    };
  }, [activeIndex, activeStep, formValues, valid, width]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_15__.Grommet, {
    theme: grommet_theme_hpe__WEBPACK_IMPORTED_MODULE_16__.hpe
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.WizardContext.Provider, {
    value: contextValue
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Box, {
    fill: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.WizardHeader, {
    setOpen: setOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.StepContent, {
    onSubmit: function onSubmit(_ref2) {
      var value = _ref2.value;
      return console.log('onSubmit:', value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.StepFooter, null)), open && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(___WEBPACK_IMPORTED_MODULE_1__.CancellationLayer, {
    target: containerRef && containerRef.current,
    onSetOpen: setOpen
  })));
};
WizardValidationExample.propTypes = {
  containerRef: prop_types__WEBPACK_IMPORTED_MODULE_17___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_17___default().func), (prop_types__WEBPACK_IMPORTED_MODULE_17___default().object)])
};

/***/ }),

/***/ "./src/Wizard/WizardHeader.jsx":
/*!*************************************!*\
  !*** ./src/Wizard/WizardHeader.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WizardHeader: () => (/* binding */ WizardHeader)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/contexts/ResponsiveContext/ResponsiveContext.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Header/Header.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Box/Box.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Button/Button.js");
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/components/Text/Text.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/icons/LinkPrevious.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/icons/Close.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/Wizard/index.jsx");





var WizardHeader = function WizardHeader(_ref) {
  var setOpen = _ref.setOpen,
    titleId = _ref.titleId,
    cancelId = _ref.cancelId,
    previousId = _ref.previousId;
  var size = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(grommet__WEBPACK_IMPORTED_MODULE_2__.ResponsiveContext);
  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(___WEBPACK_IMPORTED_MODULE_1__.WizardContext),
    activeIndex = _useContext.activeIndex,
    activeStep = _useContext.activeStep,
    setActiveIndex = _useContext.setActiveIndex,
    steps = _useContext.steps,
    wizardTitle = _useContext.wizardTitle;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_3__.Header, {
    background: "background-contrast",
    pad: "small",
    responsive: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, {
    direction: "row",
    align: "center",
    width: {
      max: "xxlarge"
    },
    margin: "auto",
    justify: "center",
    fill: "horizontal"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, {
    direction: "row",
    flex: true
  }, activeStep > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_5__.Button, {
    id: previousId,
    label: !["xsmall", "small"].includes(size) ? steps[activeIndex - 1] && steps[activeIndex - 1].title || "Step ".concat(activeStep - 1, " title") : undefined,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_6__.LinkPrevious, null),
    onClick: function onClick() {
      return setActiveIndex(activeIndex - 1);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_7__.Text, {
    color: "text-strong",
    weight: 500,
    id: titleId
  }, wizardTitle)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_4__.Box, {
    direction: "row",
    flex: true,
    justify: "end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet__WEBPACK_IMPORTED_MODULE_5__.Button, {
    id: cancelId,
    label: !["xsmall", "small"].includes(size) ? "Cancel" : undefined,
    icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(grommet_icons__WEBPACK_IMPORTED_MODULE_8__.Close, null),
    reverse: true,
    onClick: function onClick() {
      return setOpen(true);
    }
  }))));
};
WizardHeader.propTypes = {
  setOpen: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().func).isRequired,
  titleId: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  cancelId: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string),
  previousId: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().string)
};

/***/ }),

/***/ "./src/Wizard/index.jsx":
/*!******************************!*\
  !*** ./src/Wizard/index.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CancellationLayer: () => (/* reexport safe */ _CancellationLayer__WEBPACK_IMPORTED_MODULE_0__.CancellationLayer),
/* harmony export */   Error: () => (/* reexport safe */ _Error__WEBPACK_IMPORTED_MODULE_1__.Error),
/* harmony export */   StepContent: () => (/* reexport safe */ _StepContent__WEBPACK_IMPORTED_MODULE_2__.StepContent),
/* harmony export */   StepFooter: () => (/* reexport safe */ _StepFooter__WEBPACK_IMPORTED_MODULE_3__.StepFooter),
/* harmony export */   StepHeader: () => (/* reexport safe */ _StepHeader__WEBPACK_IMPORTED_MODULE_4__.StepHeader),
/* harmony export */   WizardContext: () => (/* reexport safe */ _WizardContext__WEBPACK_IMPORTED_MODULE_5__.WizardContext),
/* harmony export */   WizardHeader: () => (/* reexport safe */ _WizardHeader__WEBPACK_IMPORTED_MODULE_6__.WizardHeader)
/* harmony export */ });
/* harmony import */ var _CancellationLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CancellationLayer */ "./src/Wizard/CancellationLayer.jsx");
/* harmony import */ var _Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Error */ "./src/Wizard/Error.jsx");
/* harmony import */ var _StepContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StepContent */ "./src/Wizard/StepContent.jsx");
/* harmony import */ var _StepFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StepFooter */ "./src/Wizard/StepFooter.jsx");
/* harmony import */ var _StepHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StepHeader */ "./src/Wizard/StepHeader.jsx");
/* harmony import */ var _WizardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WizardContext */ "./src/Wizard/WizardContext.js");
/* harmony import */ var _WizardHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WizardHeader */ "./src/Wizard/WizardHeader.jsx");








/***/ }),

/***/ "./src/Wizard/WizardContext.js":
/*!*************************************!*\
  !*** ./src/Wizard/WizardContext.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WizardContext: () => (/* binding */ WizardContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var WizardContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});

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
/******/ 			"wizard": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/Wizard/Wizard.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=wizard.bundle.js.map
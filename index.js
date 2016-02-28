module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireDefault = __webpack_require__(1)['default'];
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	exports['default'] = _react2['default'].createClass({
	  displayName: 'index',
	
	  propTypes: {
	    activeElement: _react.PropTypes.string,
	    children: _react.PropTypes.arrayOf(_react.PropTypes.element),
	    onFocus: _react.PropTypes.func
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      onFocus: function onFocus() {}
	    };
	  },
	
	  render: function render() {
	    return _react2['default'].createElement(
	      'div',
	      { ref: 'wrapper' },
	      this.props.children
	    );
	  },
	
	  componentDidUpdate: function componentDidUpdate(prevProps) {
	    if (prevProps.activeElement !== this.props.activeElement) {
	      this.focusChild(this.props.activeElement);
	    }
	  },
	
	  componentDidMount: function componentDidMount() {
	    var _this = this;
	
	    this.refs.wrapper.addEventListener('focusin', function (event) {
	      var activeElement = event.target.getAttribute('data-focus-id');
	
	      if (activeElement !== _this.props.activeElement) {
	        _this.focusChild(_this.props.activeElement);
	      }
	
	      _this.props.onFocus(activeElement);
	    });
	  },
	
	  focusChild: function focusChild(focusId) {
	    var correctFocus = this.refs.wrapper.querySelector('[data-focus-id=' + focusId + ']');
	    correctFocus.focus();
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};
	
	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map
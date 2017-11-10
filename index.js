/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_decorators_component__ = __webpack_require__(1);
var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var MyTestElement = (_dec = Object(__WEBPACK_IMPORTED_MODULE_0__src_decorators_component__["a" /* Component */])({
	selector: 'my-test-component',
	templateUrl: './my-test-component.html',
	template: '\n\t\t<div cr-for="d in data">\n\t\t\tHello! My name is {{d.name}}: {{d.id}}\n\t\t</div>\n\t',
	styleUrl: './my-test-component.css',
	attributes: ['name']
}), _dec(_class = function MyTestElement() {
	_classCallCheck(this, MyTestElement);

	/** public properties */
	this.name = this.getAttribute('name');
	this.data = [{ 'id': 0, 'name': 'Rick Hopkins', selected: true }, { 'id': 1, 'name': 'Nicole Hopkins', selected: true }, { 'id': 2, 'name': 'Derek Hopkins', selected: true }, { 'id': 3, 'name': 'Grace Hopkins', selected: true }, { 'id': 4, 'name': 'Jack Hopkins', selected: true }, { 'id': 5, 'name': 'Nevaeh Hopkins', selected: true }, { 'id': 6, 'name': 'Brock Hopkins', selected: true }, { 'id': 7, 'name': 'Mya Hopkins', selected: true }];
}) || _class);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__parser__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);
/** get the html template parser */


/** export the decorator */
function Component(config) {
	return function (componentDef) {
		/** create the class */
		var component = function (_CustomElement2) {
			_inherits(component, _CustomElement2);

			_createClass(component, null, [{
				key: 'observedAttributes',

				/** static array of observed attributes */
				get: function get() {
					return config.attributes || [];
				}

				/** constructor */

			}]);

			function component() {
				_classCallCheck(this, component);

				/** attach the shadow dom */
				var _this = _possibleConstructorReturn(this, (component.__proto__ || Object.getPrototypeOf(component)).call(this));
				/** initialize the base class */


				_this.attachShadow({ mode: 'open' });

				/** public properties */
				_this.selector = config.selector;
				_this.templateUrl = config.templateUrl || null;
				_this.template = config.template || null;
				_this.styleUrl = config.styleUrl || null;

				/** add a static reference to the component */
				componentDef.prototype.componentRef = _this;
				componentDef.prototype.template = config.template;
				_this.componentDef = new componentDef();
				return _this;
			}

			/** respond to attribute changes */


			_createClass(component, [{
				key: 'attributeChangedCallback',
				value: function attributeChangedCallback(attr, oldValue, newValue) {
					//console.log([attr, oldValue, newValue]);
					this.componentDef.build();
				}
			}]);

			return component;
		}(_CustomElement);

		/** add methods to the component definition */
		componentDef.prototype.template = null;
		componentDef.prototype.componentRef = null;
		componentDef.prototype.getAttribute = function (attr) {
			return this.componentRef.attributes.getNamedItem(attr).value;
		};
		componentDef.prototype.shadowRoot = function () {
			return this.componentRef.shadowRoot;
		};
		componentDef.prototype.build = function () {
			var html = Object(__WEBPACK_IMPORTED_MODULE_0__parser__["a" /* parse */])(this.componentRef.template, this);
			this.shadowRoot().innerHTML = html;
		};
		componentDef.prototype.empty = function () {
			while (this.shadowRoot().firstChild) {
				this.shadowRoot().removeChild(this.shadowRoot().firstChild);
			}
		};

		/** register the custom component */
		customElements.define(config.selector, component);
	};
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parse;
function parse(template, componentRef) {
	debugger;

	/** search for circular attributes */
	var container = document.createElement('template');
	container.innerHTML = template;

	var crFor = container.content.querySelector('[cr-for]');
	console.log(crFor);

	var crForAttrVal = crFor.getAttribute('cr-for');
	console.log(crForAttrVal);

	return container.innerHTML;
}

/***/ })
/******/ ]);
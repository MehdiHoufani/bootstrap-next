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

/***/ "./app/components/richtext/index.js":
/*!******************************************!*\
  !*** ./app/components/richtext/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderNodesTree__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNodesTree */ "./app/components/richtext/renderNodesTree.js");
/* harmony import */ var _selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selector */ "./app/components/richtext/selector.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./app/components/richtext/utils.js");





class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.handleSelectionChange = () => {
      const selection = window.getSelection();
      const {
        startContainer,
        startOffset,
        endContainer,
        endOffset
      } = selection.getRangeAt(0);
      this.selector = new _selector__WEBPACK_IMPORTED_MODULE_3__["default"]({
        type: selection.type,
        startContainer,
        startOffset,
        endContainer,
        endOffset
      });
    };

    this.handleFocus = () => console.log('focus', event);

    this.handleBeforeInput = event => {
      console.log('event', event.type);
      this.setState({
        value: Object(_utils__WEBPACK_IMPORTED_MODULE_4__["default"])(this.state.value, this.selector.getStart())
      });
    };

    this.handleKey = event => console.log('key', event.keyCode);

    this.handleSelect = () => {
      console.log('select', event);
      console.log('select', event.value);
    };

    this.render = () => {
      const {
        value
      } = this.props;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: 'richtext',
        contentEditable: true,
        onBeforeInput: this.handleBeforeInput,
        onKeyDown: this.handleKey
        /*	onFocus={this.handleFocus} */
        ,
        style: {
          height: '200px',
          width: '600px',
          backgroundColor: '#e6e5ea'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderNodesTree__WEBPACK_IMPORTED_MODULE_2__["default"], {
        nodes: value.nodes
      }));
    };

    this.editor = null;
    this.selector = null;
    this.value = props.value || {};
    this.state = {
      value: props.value
    };
  }

  componentDidMount() {
    document.addEventListener('selectionchange', this.handleSelectionChange);
  }

  componentWillUnmount() {
    document.removeEventListener('selectionchange', this.handleSelectionChange);
  }

}
Index.propTypes = {
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};
Index.defaultProps = {
  value: {
    id: 1,
    nodes: [{
      id: '1',
      type: 'span',
      blocks: [{
        nodes: [{
          id: '2',
          type: 'p',
          blocks: [{
            value: 'je suis '
          }, {
            nodes: [{
              id: '3',
              type: 'strong',
              blocks: [{
                value: 'medmed '
              }]
            }]
          }, {
            value: 'je suis derriere'
          }]
        }]
      }]
    }, {
      id: '5',
      type: 'span',
      blocks: [{
        nodes: [{
          id: '6',
          type: 'p',
          blocks: [{
            value: 'je suis '
          }, {
            nodes: [{
              id: '7',
              type: 'strong',
              blocks: [{
                value: 'medmed sur la 2e'
              }]
            }]
          }]
        }]
      }]
    }]
  }
};

/***/ }),

/***/ "./app/components/richtext/renderNode.js":
/*!***********************************************!*\
  !*** ./app/components/richtext/renderNode.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);



const RenderNode = ({
  id,
  Type,
  children
}) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Type, {
  "data-key": `node-${id}`
}, children);

RenderNode.propTypes = {
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  Type: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
RenderNode.defaultProps = {
  children: null
};
/* harmony default export */ __webpack_exports__["default"] = (RenderNode);

/***/ }),

/***/ "./app/components/richtext/renderNodesTree.js":
/*!****************************************************!*\
  !*** ./app/components/richtext/renderNodesTree.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _renderNode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderNode */ "./app/components/richtext/renderNode.js");




const RenderNodesTree = ({
  nodes
}) => nodes.map(node => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_renderNode__WEBPACK_IMPORTED_MODULE_2__["default"], {
  key: node.id,
  id: node.id,
  Type: node.type
}, node.blocks && node.blocks.map((block, id) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  key: id
}, block.value, block.nodes && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RenderNodesTree, {
  nodes: block.nodes
})))));

RenderNodesTree.propTypes = {
  nodes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (RenderNodesTree);

/***/ }),

/***/ "./app/components/richtext/selector.js":
/*!*********************************************!*\
  !*** ./app/components/richtext/selector.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Selector {
  constructor({
    type,
    startContainer,
    startOffset,
    endContainer,
    endOffset
  }) {
    this.getStart = () => ({
      key: this._startContainer.parentNode.dataset.key,
      offset: this._startOffset
    });

    this.getEnd = () => ({
      key: this._endContainer.parentNode.dataset.key,
      offset: this._endOffset
    });

    this._type = type;
    this._startContainer = startContainer;
    this._startOffset = startOffset;
    this._endContainer = endContainer;
    this._endOffset = endOffset;
  }

  get startContainer() {
    return this._startContainer;
  }

  get startOffset() {
    return this._startOffset;
  }

  get endContainer() {
    return this._endContainer;
  }

  get endOffset() {
    return this._endOffset;
  }

  set startContainer(value) {
    this._startContainer = value;
  }

  set startOffset(value) {
    this._startOffset = value;
  }

  set endContainer(value) {
    this._endContainer = value;
  }

  set endOffset(value) {
    this._endOffset = value;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Selector);

/***/ }),

/***/ "./app/components/richtext/utils.js":
/*!******************************************!*\
  !*** ./app/components/richtext/utils.js ***!
  \******************************************/
/*! exports provided: delNodesRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delNodesRange", function() { return delNodesRange; });
const delNodesRange = (value, start) => {
  let newValue = { ...value
  };
  newValue.nodes.forEach(node => {
    if (node.id === start.key) {
      node.blocks.forEach(block => {
        if (block.value) {
          block.value = block.value.substr(0, start.offset);
        }
      });
    }
  });
  return newValue;
};

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_richtext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/richtext */ "./app/components/richtext/index.js");



class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_richtext__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app */ "./app/index.js");



class Index extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.render = () => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    };
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map
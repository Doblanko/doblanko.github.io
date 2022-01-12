/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* ----- Overall ----- */\r\n* {\r\n    /* wipe the margin and padding on every element to start fresh */\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n.content {\r\n    height: 100%;\r\n    font-family: sans-serif; \r\n  }\r\n\r\n/* ----- Title Bar Section ----- */\r\n.top-bar {\r\n    width: 100%;\r\n    height: 70px;\r\n    box-sizing: border-box;\r\n    background-color: #0d122bd1;\r\n\r\n    line-height: 70px;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    margin-left: 25px;\r\n}\r\n\r\n/* ----- Main Content ----- */\r\n\r\n.main-content-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    background-color: whitesmoke;\r\n\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.projects-container, .tasks-container {\r\n    height: 100%;\r\n    width: 33%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.tasks-container {\r\n    width: 67%;\r\n}\r\n\r\n.projects-header-container, .tasks-header-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    align-items: center;\r\n\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.add-project-btn, .add-task-btn {\r\n    border: none;\r\n    border-radius: 10px;\r\n\r\n    background-color: #0d122bd1;\r\n\r\n    color: white;\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.add-project-btn:hover, .add-task-btn:hover {\r\n    background-color: #363e67d1;\r\n}\r\n\r\n/* ----- Project Entry Container ----- */\r\n.project-list-item {\r\n    list-style-type: none;\r\n    border: solid 2px #0d122bd1;\r\n    border-radius: 5px;\r\n    margin: 10px 35px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n\r\n.project-list-item.clicked {\r\n    background-color: #0d122bd1;\r\n    color: white;\r\n}\r\n\r\n.project-list-item:hover {\r\n    background-color: #0d122bd1;\r\n    opacity: 0.8;\r\n    color: white;\r\n}\r\n\r\n/* ----- Task Entry Container ----- */\r\n.task-list-item {\r\n    list-style-type: none;\r\n    border: solid 2px #0d122bd1;\r\n    border-radius: 5px;\r\n    margin: 10px 35px;\r\n    padding: 5px;\r\n    text-align: left;\r\n    font-size: large;\r\n}\r\n\r\n.task-name {\r\n    font-size: larger;\r\n    margin-top: 3px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.task-description, .task-due-date, .task-priority, .task-notes {\r\n    margin: 3px auto 3px 15px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n/* ----- Form Page Content ----- */\r\n.project-form-page, .task-form-page {\r\n    /* Make form hover */\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n    background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: space-evenly;\r\n\r\n    top: 50%;\r\n    width: 350px;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n    margin: 50px auto;\r\n    padding: 10px 10px;\r\n    z-index: 2;\r\n    background-color: #192043;\r\n    \r\n    color: white;\r\n}\r\n\r\nlabel {  \r\n    font-size: larger;\r\n    margin: 5px;\r\n  }\r\n\r\ninput {\r\n    width: 90%;\r\n    box-sizing: border-box;\r\n\r\n    height: 20px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 5px auto;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\ntextarea {\r\n    width: 90%;\r\n    box-sizing: border-box;\r\n    margin: 5px auto;\r\n    padding: 5px;\r\n\r\n    border: none;\r\n    border-radius: 5px; \r\n    resize: vertical;\r\n}\r\n.due-date-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n}\r\n#new-due-date {\r\n    /* all other properties specified by input above */\r\n    width: 140px;\r\n    margin-right: 16.5px;\r\n}\r\n\r\n.select-priority-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n}\r\n\r\n.select-priority {\r\n    border: none;\r\n    margin-right: 16.5px;\r\n    border-radius: 5px;\r\n    padding: 1px 3px;\r\n}\r\n\r\n.button-container {\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-btn {\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n    border: none;\r\n    background-color: #f8ecff;\r\n    \r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: large;\r\n\r\n    margin: 5px 10px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.form-btn:hover {\r\n    background-color: #948b99\r\n}\r\n\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,wBAAwB;AACxB;IACI,gEAAgE;IAChE,SAAS;IACT,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;AACA;IACI,YAAY;IACZ,uBAAuB;EACzB;;AAEF,kCAAkC;AAClC;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,2BAA2B;;IAE3B,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,iBAAiB;AACrB;;AAEA,6BAA6B;;AAE7B;IACI,aAAa;IACb,mBAAmB;;IAEnB,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,4BAA4B;;IAE5B,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,mBAAmB;;IAEnB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,mBAAmB;;IAEnB,2BAA2B;;IAE3B,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,2BAA2B;AAC/B;;AAEA,wCAAwC;AACxC;IACI,qBAAqB;IACrB,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,YAAY;IACZ,YAAY;AAChB;;AAEA,qCAAqC;AACrC;IACI,qBAAqB;IACrB,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA,kCAAkC;AAClC;IACI,oBAAoB;IACpB,eAAe;IACf,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,WAAW;;IAEX,oCAAoC;AACxC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,6BAA6B;;IAE7B,QAAQ;IACR,YAAY;IACZ,sBAAsB;IACtB,mBAAmB;IACnB,iBAAiB;IACjB,kBAAkB;IAClB,UAAU;IACV,yBAAyB;;IAEzB,YAAY;AAChB;;AAEA;IACI,iBAAiB;IACjB,WAAW;EACb;;AAEF;IACI,UAAU;IACV,sBAAsB;;IAEtB,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,sBAAsB;IACtB,gBAAgB;IAChB,YAAY;;IAEZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;AACpB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,WAAW;IACX,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,kDAAkD;IAClD,YAAY;IACZ,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,8BAA8B;;IAE9B,WAAW;IACX,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,qBAAqB;IACrB,mBAAmB;IACnB,YAAY;IACZ,yBAAyB;;IAEzB,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;;IAEhB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI;AACJ","sourcesContent":["/* ----- Overall ----- */\r\n* {\r\n    /* wipe the margin and padding on every element to start fresh */\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%;\r\n}\r\n.content {\r\n    height: 100%;\r\n    font-family: sans-serif; \r\n  }\r\n\r\n/* ----- Title Bar Section ----- */\r\n.top-bar {\r\n    width: 100%;\r\n    height: 70px;\r\n    box-sizing: border-box;\r\n    background-color: #0d122bd1;\r\n\r\n    line-height: 70px;\r\n}\r\n\r\nh1 {\r\n    color: white;\r\n    margin-left: 25px;\r\n}\r\n\r\n/* ----- Main Content ----- */\r\n\r\n.main-content-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n\r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    background-color: whitesmoke;\r\n\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    overflow: hidden;\r\n}\r\n\r\n.projects-container, .tasks-container {\r\n    height: 100%;\r\n    width: 33%;\r\n    box-sizing: border-box;\r\n}\r\n\r\n.tasks-container {\r\n    width: 67%;\r\n}\r\n\r\n.projects-header-container, .tasks-header-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    align-items: center;\r\n\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n    padding-top: 10px;\r\n}\r\n\r\n.add-project-btn, .add-task-btn {\r\n    border: none;\r\n    border-radius: 10px;\r\n\r\n    background-color: #0d122bd1;\r\n\r\n    color: white;\r\n    font-size: large;\r\n    text-align: center;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.add-project-btn:hover, .add-task-btn:hover {\r\n    background-color: #363e67d1;\r\n}\r\n\r\n/* ----- Project Entry Container ----- */\r\n.project-list-item {\r\n    list-style-type: none;\r\n    border: solid 2px #0d122bd1;\r\n    border-radius: 5px;\r\n    margin: 10px 35px;\r\n    padding: 5px;\r\n    text-align: center;\r\n    font-size: large;\r\n}\r\n\r\n.project-list-item.clicked {\r\n    background-color: #0d122bd1;\r\n    color: white;\r\n}\r\n\r\n.project-list-item:hover {\r\n    background-color: #0d122bd1;\r\n    opacity: 0.8;\r\n    color: white;\r\n}\r\n\r\n/* ----- Task Entry Container ----- */\r\n.task-list-item {\r\n    list-style-type: none;\r\n    border: solid 2px #0d122bd1;\r\n    border-radius: 5px;\r\n    margin: 10px 35px;\r\n    padding: 5px;\r\n    text-align: left;\r\n    font-size: large;\r\n}\r\n\r\n.task-name {\r\n    font-size: larger;\r\n    margin-top: 3px;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.task-description, .task-due-date, .task-priority, .task-notes {\r\n    margin: 3px auto 3px 15px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n/* ----- Form Page Content ----- */\r\n.project-form-page, .task-form-page {\r\n    /* Make form hover */\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    height: 100%;\r\n    width: 100%;\r\n    \r\n    background-color: rgba(0, 0, 0, 0.8);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: space-evenly;\r\n\r\n    top: 50%;\r\n    width: 350px;\r\n    box-sizing: border-box;\r\n    border-radius: 10px;\r\n    margin: 50px auto;\r\n    padding: 10px 10px;\r\n    z-index: 2;\r\n    background-color: #192043;\r\n    \r\n    color: white;\r\n}\r\n\r\nlabel {  \r\n    font-size: larger;\r\n    margin: 5px;\r\n  }\r\n\r\ninput {\r\n    width: 90%;\r\n    box-sizing: border-box;\r\n\r\n    height: 20px;\r\n    border: none;\r\n    border-radius: 5px;\r\n    margin: 5px auto;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n}\r\n\r\ntextarea {\r\n    width: 90%;\r\n    box-sizing: border-box;\r\n    margin: 5px auto;\r\n    padding: 5px;\r\n\r\n    border: none;\r\n    border-radius: 5px; \r\n    resize: vertical;\r\n}\r\n.due-date-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n}\r\n#new-due-date {\r\n    /* all other properties specified by input above */\r\n    width: 140px;\r\n    margin-right: 16.5px;\r\n}\r\n\r\n.select-priority-container {\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    align-items: center;\r\n}\r\n\r\n.select-priority {\r\n    border: none;\r\n    margin-right: 16.5px;\r\n    border-radius: 5px;\r\n    padding: 1px 3px;\r\n}\r\n\r\n.button-container {\r\n    margin: 0 auto;\r\n}\r\n\r\n.form-btn {\r\n    display: inline-block;\r\n    border-radius: 10px;\r\n    border: none;\r\n    background-color: #f8ecff;\r\n    \r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: large;\r\n\r\n    margin: 5px 10px;\r\n    padding: 5px 10px;\r\n}\r\n\r\n.form-btn:hover {\r\n    background-color: #948b99\r\n}\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/controllers/projectController.js":
/*!**********************************************!*\
  !*** ./src/controllers/projectController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectController": () => (/* binding */ projectController)
/* harmony export */ });
/* harmony import */ var _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/projectRepoModel */ "./src/models/projectRepoModel.js");
/* harmony import */ var _models_projectModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/projectModel */ "./src/models/projectModel.js");
/* harmony import */ var _views_projectView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../views/projectView */ "./src/views/projectView.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/taskView */ "./src/views/taskView.js");





// project controller module
const projectController = (() => {

    const initProject = () => {
        
        _views_projectView__WEBPACK_IMPORTED_MODULE_2__.projectView.initializeProjectView()

        // ----- Add event listeners ----- //
        const addProjectBtn = document.querySelector('.add-project-btn')
        addProjectBtn.addEventListener('click', _openNewProjectForm)
        
        let submitBtn = document.querySelector('#project-submit-btn')
        submitBtn.addEventListener('click', () => {
            createProject(document.forms['ProjectForm']['new-project-name'].value)
        })

        let cancelBtn = document.querySelector('#project-cancel-btn')
        cancelBtn.addEventListener('click', _closeNewProjectForm)

    }
    
    const createProject = (projectName) => {

        // create the project and add to the project repo
        const newProject = (0,_models_projectModel__WEBPACK_IMPORTED_MODULE_1__.projectModel)(projectName, _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__.projectRepoModel.generateId())
        _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__.projectRepoModel.addProject(newProject.getId(), newProject)

        // add the project to the view
        _views_projectView__WEBPACK_IMPORTED_MODULE_2__.projectView.createProject(newProject.getName(), newProject.getId())

        // add the event listener for clicks
        const newProjectView = document.querySelector(`#project-${newProject.getId()}`)
        newProjectView.addEventListener('click', selectProject)

        // set as the active project by simulating a click event
        newProjectView.click()

        // reset the form page and close the form
        document.forms['ProjectForm'].reset()
        _closeNewProjectForm()
    }

    const selectProject = (event) => {
        // event listener for when projects are clicked

        // unselect any selected classes
        const lastSelectedProject = document.querySelector('.clicked')
        if (lastSelectedProject) { lastSelectedProject.classList.remove('clicked') }

        event.target.classList.add('clicked')
        
        // the id of list elements are project-id
        const activeProjectId = Number(event.target.id.substr(-1))
        _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__.projectRepoModel.setActiveProject(_models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__.projectRepoModel.getProject(activeProjectId))

        // render the tasks of the new project
        _views_taskView__WEBPACK_IMPORTED_MODULE_3__.taskView.renderTasks(_models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__.projectRepoModel.getProject(activeProjectId).getTasks())
    }

    const _openNewProjectForm = () => {
        _views_projectView__WEBPACK_IMPORTED_MODULE_2__.projectView.openForm()
    }

    const _closeNewProjectForm = () => {
        _views_projectView__WEBPACK_IMPORTED_MODULE_2__.projectView.closeForm()
    }

    const deleteProject= (projectName) => {

    }

    return {
        initProject, createProject, deleteProject
    }
})()



/***/ }),

/***/ "./src/controllers/taskController.js":
/*!*******************************************!*\
  !*** ./src/controllers/taskController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskController": () => (/* binding */ taskController)
/* harmony export */ });
/* harmony import */ var _models_taskModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/taskModel */ "./src/models/taskModel.js");
/* harmony import */ var _views_taskView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/taskView */ "./src/views/taskView.js");
/* harmony import */ var _models_projectModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/projectModel */ "./src/models/projectModel.js");
/* harmony import */ var _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/projectRepoModel */ "./src/models/projectRepoModel.js");





const taskController = (() => {

    const initTask = () => {
        
        _views_taskView__WEBPACK_IMPORTED_MODULE_1__.taskView.initializeTaskView()

        // ----- Add event listeners ----- //
        const addTaskBtn = document.querySelector('.add-task-btn')
        addTaskBtn.addEventListener('click', _openNewTaskForm)
        
        let submitBtn = document.querySelector('#task-submit-btn')
        submitBtn.addEventListener('click', createTask)

        let cancelBtn = document.querySelector('#task-cancel-btn')
        cancelBtn.addEventListener('click', _closeNewTaskForm)

    }

    const _openNewTaskForm = () => {
        // check if there is an active project
        if (_models_projectRepoModel__WEBPACK_IMPORTED_MODULE_3__.projectRepoModel.getActiveProject()) {
            _views_taskView__WEBPACK_IMPORTED_MODULE_1__.taskView.openForm()
        } else {
            alert('Please select a project to add the task to.')
        }      
    }

    const _closeNewTaskForm = () => {
        _views_taskView__WEBPACK_IMPORTED_MODULE_1__.taskView.closeForm()
    }
    

    const createTask = () => {
        // create a new task and add to the project task array when then submit button is clicked
        let activeProject = _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_3__.projectRepoModel.getActiveProject()

        let newTaskName = document.forms['TaskForm']['new-task-name'].value
        let newDescription = document.forms['TaskForm']['new-description'].value
        let newDueDate = document.forms['TaskForm']['new-due-date'].value
        let newPriority = document.forms['TaskForm']['select-priority'].value
        let newNotes = document.forms['TaskForm']['new-notes'].value
        let newId = activeProject.generateTaskId()

        const newTask = (0,_models_taskModel__WEBPACK_IMPORTED_MODULE_0__.taskModel)(newTaskName, newId, newDescription, newDueDate, newPriority, newNotes)
        activeProject.addTask(newTask)

        _renderTasks(activeProject.getTasks())
        _closeNewTaskForm()
    }

    const _renderTasks = (tasks) => {
        _views_taskView__WEBPACK_IMPORTED_MODULE_1__.taskView.renderTasks(tasks)
    }

    const updateTask = () => {

    }

    const deleteTask = () => {

    }

    return {
        initTask, createTask, deleteTask, updateTask
    }
})()



/***/ }),

/***/ "./src/models/projectModel.js":
/*!************************************!*\
  !*** ./src/models/projectModel.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectModel": () => (/* binding */ projectModel)
/* harmony export */ });
const projectModel = (newName, newID) => {
    // Represents a project. Contains the name of the project and tasks.

    let name = newName
    let id = newID
    let tasks = []
    let taskId = 0

    const getName = () => {
        return name
    }

    const getId = () => {
        return id
    }

    const addTask = (task) => {
        // task is [id, task]
        tasks.push(task)
    }

    const generateTaskId = () => {
        // return the ID for the task being created and get ready for the next one
        taskId += 1
        return taskId - 1
    } 

    const getTasks = () => { return tasks }

    return {
        getName, getId, addTask, getTasks, generateTaskId 
    }
}



/***/ }),

/***/ "./src/models/projectRepoModel.js":
/*!****************************************!*\
  !*** ./src/models/projectRepoModel.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectRepoModel": () => (/* binding */ projectRepoModel)
/* harmony export */ });
// simulating a database
const projectRepoModel = (() => {
    let id = 0
    let activeProject = null
    let projects = {}

    const generateId = () => {
        // return the ID for the project being created and get ready for the next one
        id += 1
        return id - 1
    }
    
    const setActiveProject = (project) => {
        activeProject = project
    }

    const addProject = (projectId, project) => {
        projects[projectId] = project
    }

    const getProject = (projectId) => { return projects[projectId] }

    const getActiveProject = () => { return activeProject }

    return { generateId, addProject, getProject, setActiveProject, getActiveProject }
})()



/***/ }),

/***/ "./src/models/taskModel.js":
/*!*********************************!*\
  !*** ./src/models/taskModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskModel": () => (/* binding */ taskModel)
/* harmony export */ });
const taskModel = (newName, newId, newDescription, newDueDate, newPriority, newNotes) => {
    // represents a task object

    let name = newName
    let id = newId
    let description = newDescription
    let dueDate = newDueDate
    let priority = newPriority
    let notes = newNotes

    return {
        name, id, description, dueDate, priority, notes
    }
}



/***/ }),

/***/ "./src/views/projectView.js":
/*!**********************************!*\
  !*** ./src/views/projectView.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectView": () => (/* binding */ projectView)
/* harmony export */ });
const projectView = (() => {
    
    const initializeProjectView = () => {
        const mainContent = document.querySelector('.main-content-container')
        const projectContainer = document.createElement('div')
        projectContainer.classList.add('projects-container')

        // --- Create the project container header --- //

        const projectContainerHeader = document.createElement('div')
        const title = document.createElement('h2')
        const addProjectBtn = document.createElement('button')

        // add classes to elements
        projectContainerHeader.classList.add('projects-header-container')
        addProjectBtn.classList.add('add-project-btn')
        
        // set text content
        title.textContent = 'Projects'
        addProjectBtn.textContent = 'Add Project'

        // combine elements
        projectContainerHeader.append(title)
        projectContainerHeader.append(addProjectBtn)
        projectContainer.append(projectContainerHeader)
        mainContent.append(projectContainer)

        // --- Create the project body container--- //
        
        const projectBodyContainer = document.createElement('div')
        projectBodyContainer.classList.add("project-body-container")
        const projectBodyList = document.createElement('ul')
        projectBodyList.classList.add('project-list')
        projectBodyContainer.append(projectBodyList)
        
        projectContainer.append(projectBodyContainer)

        // --- Create Project Intro Form --- //

        const projectFormPage = document.createElement('div')
        const projectForm = document.createElement('form')

        projectFormPage.classList.add('project-form-page')
        projectFormPage.style.display = 'none'
        projectForm.name = 'ProjectForm'

        const projectNameLabel = document.createElement('label')
        projectNameLabel.setAttribute('for', 'new-project-name')
        projectNameLabel.innerHTML = 'Project Name:'
        projectForm.append(projectNameLabel)

        const projectNameInput = document.createElement('input')
        projectNameInput.setAttribute('type', 'text')
        projectNameInput.setAttribute('name', 'new-project-name')
        projectNameInput.setAttribute('id', 'new-project-name')
        projectForm.append(projectNameInput)

        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('type', 'button')
        submitBtn.setAttribute('id', 'project-submit-btn')
        submitBtn.classList.add('form-btn')
        submitBtn.innerHTML = 'Submit'

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('type', 'button')
        cancelBtn.setAttribute('id', 'project-cancel-btn')
        cancelBtn.classList.add('form-btn')
        cancelBtn.innerHTML = 'Cancel'

        buttonContainer.append(submitBtn)
        buttonContainer.append(cancelBtn)
        projectForm.append(buttonContainer)

        projectFormPage.append(projectForm)
        mainContent.append(projectFormPage)

    }

    const openForm = () => {
        // This function makes the project form visible
        const projectFormPage = document.querySelector('.project-form-page')
        projectFormPage.style.display = 'block'
    }

    const closeForm = () => {
        const projectFormPage = document.querySelector('.project-form-page')
        projectFormPage.style.display = 'none'
    }

    const createProject = (name, id) => {
        const projectList = document.querySelector('.project-list')
        const newProject = document.createElement('li')
        newProject.classList.add('project-list-item')
        newProject.setAttribute('id', `project-${id}`)
        newProject.innerHTML = name
        projectList.append(newProject)
    }

    return { initializeProjectView, openForm, closeForm, createProject }
})()



/***/ }),

/***/ "./src/views/taskView.js":
/*!*******************************!*\
  !*** ./src/views/taskView.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "taskView": () => (/* binding */ taskView)
/* harmony export */ });
/* harmony import */ var _models_projectRepoModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/projectRepoModel */ "./src/models/projectRepoModel.js");


const taskView = (() => {
    const initializeTaskView = () => {
        const mainContent = document.querySelector('.main-content-container')
        const taskContainer = document.createElement('div')
        taskContainer.classList.add('tasks-container')

        // --- Create the task container header --- //

        const taskContainerHeader = document.createElement('div')
        const title = document.createElement('h2')
        const addTaskBtn = document.createElement('button')

        // add classes to elements
        taskContainerHeader.classList.add('tasks-header-container')
        addTaskBtn.classList.add('add-task-btn')
        
        // set text content
        title.textContent = 'Tasks'
        addTaskBtn.textContent = 'Add Task'

        // combine elements
        taskContainerHeader.append(title)
        taskContainerHeader.append(addTaskBtn)
        taskContainer.append(taskContainerHeader)
        mainContent.append(taskContainer)

        // --- Create the task body container --- //
        
        const taskBodyContainer = document.createElement('div')
        taskBodyContainer.classList.add("task-body-container")
        const taskBodyList = document.createElement('ul')
        taskBodyList.classList.add('task-list')
        taskBodyContainer.append(taskBodyList)
        
        taskContainer.append(taskBodyContainer)

        // --- Create Task Intro Form --- //

        const taskFormPage = document.createElement('div')
        const taskForm = document.createElement('form')

        taskFormPage.classList.add('task-form-page')
        taskFormPage.style.display = 'none'
        taskForm.name = 'TaskForm'

        const taskNameLabel = document.createElement('label')
        taskNameLabel.setAttribute('for', 'new-task-name')
        taskNameLabel.innerHTML = 'Task Name:'
        taskForm.append(taskNameLabel)

        const taskNameInput = document.createElement('input')
        taskNameInput.setAttribute('type', 'text')
        taskNameInput.setAttribute('name', 'new-task-name')
        taskNameInput.setAttribute('id', 'new-task-name')
        taskForm.append(taskNameInput)

        const descriptionLabel = document.createElement('label')
        descriptionLabel.innerHTML = 'Description: '
        descriptionLabel.setAttribute('for', 'new-description')
        taskForm.append(descriptionLabel)

        const descriptionInputArea = document.createElement('textarea')
        descriptionInputArea.setAttribute("rows", "10");
        descriptionInputArea.setAttribute("cols", "40");
        descriptionInputArea.setAttribute("name", "new-description")
        descriptionInputArea.setAttribute("id", "new-description")
        taskForm.append(descriptionInputArea);

        const dueDateContainer = document.createElement('div')
        dueDateContainer.classList.add('due-date-container')
        const dueDateLabel = document.createElement('label')
        dueDateLabel.innerHTML = 'Due Date:'
        dueDateLabel.setAttribute('for', 'new-due-date')
        dueDateContainer.append(dueDateLabel)

        const dueDateInput = document.createElement('input')
        dueDateInput.setAttribute('type', 'date')
        dueDateInput.setAttribute('name', 'new-due-date')
        dueDateInput.setAttribute('id', 'new-due-date')
        dueDateInput.setAttribute('value', 'yyyy-dd-mm')
        dueDateContainer.append(dueDateInput)
        taskForm.append(dueDateContainer)

        const selectPriorityContainer = document.createElement('div')

        const priorityLabel = document.createElement('label')
        priorityLabel.innerHTML = 'Priority:'
        priorityLabel.setAttribute('for', 'select-priority')
        selectPriorityContainer.append(priorityLabel) 

        selectPriorityContainer.classList.add('select-priority-container')
        const selectPriority = document.createElement('select')
        const low = document.createElement('option')
        const normal = document.createElement('option')
        normal.setAttribute('selected', 'true')
        const high = document.createElement('option')
        selectPriority.setAttribute('name', 'select-priority')
        selectPriority.setAttribute('id', 'select-priority')
        selectPriority.classList.add('select-priority')
        
        low.innerHTML = 'Low'
        normal.innerHTML = 'Normal'
        high.innerHTML = 'High'

        selectPriority.append(low)
        selectPriority.append(normal)
        selectPriority.append(high)
        selectPriorityContainer.append(selectPriority)
        taskForm.append(selectPriorityContainer)

        const notesLabel = document.createElement('label')
        notesLabel.innerHTML = 'Notes:'
        notesLabel.setAttribute('for', 'new-notes')
        taskForm.append(notesLabel)
        
        const notesInputArea = document.createElement('textarea')
        notesInputArea.setAttribute('rows', '10')
        notesInputArea.setAttribute('cols', '40')
        notesInputArea.setAttribute('name', 'new-notes')
        notesInputArea.setAttribute('id', 'new-notes')
        taskForm.append(notesInputArea)


        const buttonContainer = document.createElement('div')
        buttonContainer.classList.add('button-container')

        const submitBtn = document.createElement('button')
        submitBtn.setAttribute('type', 'button')
        submitBtn.setAttribute('id', 'task-submit-btn')
        submitBtn.classList.add('form-btn')
        submitBtn.innerHTML = 'Submit'

        const cancelBtn = document.createElement('button')
        cancelBtn.setAttribute('type', 'button')
        cancelBtn.setAttribute('id', 'task-cancel-btn')
        cancelBtn.classList.add('form-btn')
        cancelBtn.innerHTML = 'Cancel'

        buttonContainer.append(submitBtn)
        buttonContainer.append(cancelBtn)
        taskForm.append(buttonContainer)

        taskFormPage.append(taskForm)
        mainContent.append(taskFormPage)

    }

    

    const openForm = () => {
        // This function makes the task form visible
        const taskFormPage = document.querySelector('.task-form-page')
        taskFormPage.style.display = 'block'
    }

    const closeForm = () => {
        const taskFormPage = document.querySelector('.task-form-page')
        taskFormPage.style.display = 'none'
    }
    const renderTasks = (tasks) => {
        const taskList = document.querySelector('.task-list')
        // clear the task list
        taskList.innerHTML = ''
        tasks.forEach(task => {
            const newTask = document.createElement('li')
            newTask.classList.add('task-list-item')
            newTask.setAttribute('id', `task-${task.id}`)
            
            const taskName = document.createElement('p')
            taskName.classList.add('task-name')
            taskName.innerHTML = `<strong>${task.name}</strong>`
            newTask.append(taskName)

            const taskDescription = document.createElement('p')
            taskDescription.classList.add('task-description')
            taskDescription.innerHTML = `<strong>Description: </strong> ${task.description}`
            newTask.append(taskDescription)

            const taskDueDate = document.createElement('p')
            taskDueDate.classList.add('task-due-date')
            taskDueDate.innerHTML = `<strong>Due Date: </strong> ${task.dueDate}`
            newTask.append(taskDueDate)

            const taskPriority = document.createElement('p')
            taskPriority.classList.add('task-priority')
            taskPriority.innerHTML = `<strong>Priority: </strong> ${task.priority}`
            newTask.append(taskPriority)

            const taskNotes = document.createElement('p')
            taskNotes.classList.add('task-notes')
            taskNotes.innerHTML = `<strong>Notes: </strong> <br> ${task.notes}`
            newTask.append(taskNotes)

            taskList.append(newTask)
        })
    }

    return { initializeTaskView, openForm, closeForm, renderTasks }
})()



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_projectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/projectController */ "./src/controllers/projectController.js");
/* harmony import */ var _controllers_taskController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/taskController */ "./src/controllers/taskController.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// app module
// sets up boilerplate code and runs the app

const App = (() => {
    const _createWebsite = () => {
        // This function creates the header and container of the website. It is static
        const content = document.createElement('div')
        content.classList.add('content')
        
        const topBar = document.createElement('div')
        topBar.classList.add('top-bar')

        const title = document.createElement('h1')
        title.classList.add('title')
        title.textContent = 'The Todo List App'

        topBar.append(title)
        content.append(topBar)

        const mainContent = document.createElement('div')
        mainContent.classList.add('main-content-container')
        content.append(mainContent)
        document.querySelector('body').append(content)
    }

    const initializeApp = () => {
        _createWebsite()
        
        _controllers_projectController__WEBPACK_IMPORTED_MODULE_0__.projectController.initProject()
        _controllers_taskController__WEBPACK_IMPORTED_MODULE_1__.taskController.initTask()

        _controllers_projectController__WEBPACK_IMPORTED_MODULE_0__.projectController.createProject('Sample Project')

        // create a fake task
        document.forms['TaskForm']['new-task-name'].value = 'Sample Task'
        document.forms['TaskForm']['new-description'].value = 'This is a sample task description.'
        document.forms['TaskForm']['new-due-date'].value = '2012-12-31'
        document.forms['TaskForm']['select-priority'].value = 'High'
        document.forms['TaskForm']['new-notes'].value = 'The world might end.'
        _controllers_taskController__WEBPACK_IMPORTED_MODULE_1__.taskController.createTask()
        document.forms['TaskForm'].reset()

    }
    return { initializeApp }
})()

App.initializeApp()
    
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBLHFDQUFxQztBQUNyQztBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxHQUFHO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLENBQUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHNkQ7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxVQUFVO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGlCQUFpQjtBQUMzRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRSxhQUFhO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FLGNBQWM7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUUsV0FBVztBQUM5RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDO0FBQ0Q7Ozs7Ozs7VUN6TUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm1FO0FBQ047QUFDekM7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseUZBQTZCO0FBQ3JDLFFBQVEsZ0ZBQXVCO0FBQy9CO0FBQ0EsUUFBUSwyRkFBK0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtGQUF5QjtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9jb250cm9sbGVycy9wcm9qZWN0Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvY29udHJvbGxlcnMvdGFza0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZGVscy9wcm9qZWN0TW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0Ly4vc3JjL21vZGVscy9wcm9qZWN0UmVwb01vZGVsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9tb2RlbHMvdGFza01vZGVsLmpzIiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy92aWV3cy9wcm9qZWN0Vmlldy5qcyIsIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvdmlld3MvdGFza1ZpZXcuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvX2xpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG9fbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIC0tLS0tIE92ZXJhbGwgLS0tLS0gKi9cXHJcXG4qIHtcXHJcXG4gICAgLyogd2lwZSB0aGUgbWFyZ2luIGFuZCBwYWRkaW5nIG9uIGV2ZXJ5IGVsZW1lbnQgdG8gc3RhcnQgZnJlc2ggKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IFxcclxcbiAgfVxcclxcblxcclxcbi8qIC0tLS0tIFRpdGxlIEJhciBTZWN0aW9uIC0tLS0tICovXFxyXFxuLnRvcC1iYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMjJiZDE7XFxyXFxuXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tIE1haW4gQ29udGVudCAtLS0tLSAqL1xcclxcblxcclxcbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciwgLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA2NyU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyLCAudGFza3MtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ0biwgLmFkZC10YXNrLWJ0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMTIyYmQxO1xcclxcblxcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIsIC5hZGQtdGFzay1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzZTY3ZDE7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tIFByb2plY3QgRW50cnkgQ29udGFpbmVyIC0tLS0tICovXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMGQxMjJiZDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0uY2xpY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDEyMmJkMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMjJiZDE7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLSBUYXNrIEVudHJ5IENvbnRhaW5lciAtLS0tLSAqL1xcclxcbi50YXNrLWxpc3QtaXRlbSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzBkMTIyYmQxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLCAudGFzay1kdWUtZGF0ZSwgLnRhc2stcHJpb3JpdHksIC50YXNrLW5vdGVzIHtcXHJcXG4gICAgbWFyZ2luOiAzcHggYXV0byAzcHggMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLSBGb3JtIFBhZ2UgQ29udGVudCAtLS0tLSAqL1xcclxcbi5wcm9qZWN0LWZvcm0tcGFnZSwgLnRhc2stZm9ybS1wYWdlIHtcXHJcXG4gICAgLyogTWFrZSBmb3JtIGhvdmVyICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjA0MztcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwgeyAgXFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcbi5kdWUtZGF0ZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jbmV3LWR1ZS1kYXRlIHtcXHJcXG4gICAgLyogYWxsIG90aGVyIHByb3BlcnRpZXMgc3BlY2lmaWVkIGJ5IGlucHV0IGFib3ZlICovXFxyXFxuICAgIHdpZHRoOiAxNDBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNi41cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtcHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1wcmlvcml0eSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNi41cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMXB4IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGVjZmY7XFxyXFxuICAgIFxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcblxcclxcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0OGI5OVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHdCQUF3QjtBQUN4QjtJQUNJLGdFQUFnRTtJQUNoRSxTQUFTO0lB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QTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5Qjs7SUFFekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSTtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC0tLS0tIE92ZXJhbGwgLS0tLS0gKi9cXHJcXG4qIHtcXHJcXG4gICAgLyogd2lwZSB0aGUgbWFyZ2luIGFuZCBwYWRkaW5nIG9uIGV2ZXJ5IGVsZW1lbnQgdG8gc3RhcnQgZnJlc2ggKi9cXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5IHtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG4uY29udGVudCB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7IFxcclxcbiAgfVxcclxcblxcclxcbi8qIC0tLS0tIFRpdGxlIEJhciBTZWN0aW9uIC0tLS0tICovXFxyXFxuLnRvcC1iYXIge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiA3MHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMjJiZDE7XFxyXFxuXFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tIE1haW4gQ29udGVudCAtLS0tLSAqL1xcclxcblxcclxcbi5tYWluLWNvbnRlbnQtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3RzLWNvbnRhaW5lciwgLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA2NyU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0cy1oZWFkZXItY29udGFpbmVyLCAudGFza3MtaGVhZGVyLWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG5cXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1wcm9qZWN0LWJ0biwgLmFkZC10YXNrLWJ0biB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG5cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBkMTIyYmQxO1xcclxcblxcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogNXB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5hZGQtcHJvamVjdC1idG46aG92ZXIsIC5hZGQtdGFzay1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzYzZTY3ZDE7XFxyXFxufVxcclxcblxcclxcbi8qIC0tLS0tIFByb2plY3QgRW50cnkgQ29udGFpbmVyIC0tLS0tICovXFxyXFxuLnByb2plY3QtbGlzdC1pdGVtIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbiAgICBib3JkZXI6IHNvbGlkIDJweCAjMGQxMjJiZDE7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDM1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW0uY2xpY2tlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwZDEyMmJkMTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saXN0LWl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGQxMjJiZDE7XFxyXFxuICAgIG9wYWNpdHk6IDAuODtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLSBUYXNrIEVudHJ5IENvbnRhaW5lciAtLS0tLSAqL1xcclxcbi50YXNrLWxpc3QtaXRlbSB7XFxyXFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggIzBkMTIyYmQxO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogMTBweCAzNXB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxyXFxufVxcclxcblxcclxcbi50YXNrLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlcjtcXHJcXG4gICAgbWFyZ2luLXRvcDogM3B4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLWRlc2NyaXB0aW9uLCAudGFzay1kdWUtZGF0ZSwgLnRhc2stcHJpb3JpdHksIC50YXNrLW5vdGVzIHtcXHJcXG4gICAgbWFyZ2luOiAzcHggYXV0byAzcHggMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiAtLS0tLSBGb3JtIFBhZ2UgQ29udGVudCAtLS0tLSAqL1xcclxcbi5wcm9qZWN0LWZvcm0tcGFnZSwgLnRhc2stZm9ybS1wYWdlIHtcXHJcXG4gICAgLyogTWFrZSBmb3JtIGhvdmVyICovXFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwcHg7XFxyXFxuICAgIGxlZnQ6IDBweDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG5cXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcXHJcXG4gICAgei1pbmRleDogMjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjA0MztcXHJcXG4gICAgXFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxubGFiZWwgeyAgXFxyXFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcclxcbiAgICBtYXJnaW46IDVweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG5pbnB1dCB7XFxyXFxuICAgIHdpZHRoOiA5MCU7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIG1hcmdpbjogNXB4IGF1dG87XFxyXFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiA1cHggYXV0bztcXHJcXG4gICAgcGFkZGluZzogNXB4O1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDsgXFxyXFxuICAgIHJlc2l6ZTogdmVydGljYWw7XFxyXFxufVxcclxcbi5kdWUtZGF0ZS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG4jbmV3LWR1ZS1kYXRlIHtcXHJcXG4gICAgLyogYWxsIG90aGVyIHByb3BlcnRpZXMgc3BlY2lmaWVkIGJ5IGlucHV0IGFib3ZlICovXFxyXFxuICAgIHdpZHRoOiAxNDBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNi41cHg7XFxyXFxufVxcclxcblxcclxcbi5zZWxlY3QtcHJpb3JpdHktY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNlbGVjdC1wcmlvcml0eSB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAxNi41cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcGFkZGluZzogMXB4IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbi1jb250YWluZXIge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGVjZmY7XFxyXFxuICAgIFxcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBmb250LXNpemU6IGxhcmdlO1xcclxcblxcclxcbiAgICBtYXJnaW46IDVweCAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvcm0tYnRuOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk0OGI5OVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RSZXBvTW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RSZXBvTW9kZWxcIlxyXG5pbXBvcnQgeyBwcm9qZWN0TW9kZWwgfSBmcm9tIFwiLi4vbW9kZWxzL3Byb2plY3RNb2RlbFwiXHJcbmltcG9ydCB7IHByb2plY3RWaWV3IH0gZnJvbSBcIi4uL3ZpZXdzL3Byb2plY3RWaWV3XCJcclxuaW1wb3J0IHsgdGFza1ZpZXcgfSBmcm9tIFwiLi4vdmlld3MvdGFza1ZpZXdcIlxyXG5cclxuLy8gcHJvamVjdCBjb250cm9sbGVyIG1vZHVsZVxyXG5jb25zdCBwcm9qZWN0Q29udHJvbGxlciA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdFByb2plY3QgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdFZpZXcuaW5pdGlhbGl6ZVByb2plY3RWaWV3KClcclxuXHJcbiAgICAgICAgLy8gLS0tLS0gQWRkIGV2ZW50IGxpc3RlbmVycyAtLS0tLSAvL1xyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtYnRuJylcclxuICAgICAgICBhZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX29wZW5OZXdQcm9qZWN0Rm9ybSlcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3Qtc3VibWl0LWJ0bicpXHJcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0KGRvY3VtZW50LmZvcm1zWydQcm9qZWN0Rm9ybSddWyduZXctcHJvamVjdC1uYW1lJ10udmFsdWUpXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWNhbmNlbC1idG4nKVxyXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jbG9zZU5ld1Byb2plY3RGb3JtKVxyXG5cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3QgY3JlYXRlUHJvamVjdCA9IChwcm9qZWN0TmFtZSkgPT4ge1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIHByb2plY3QgYW5kIGFkZCB0byB0aGUgcHJvamVjdCByZXBvXHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IHByb2plY3RNb2RlbChwcm9qZWN0TmFtZSwgcHJvamVjdFJlcG9Nb2RlbC5nZW5lcmF0ZUlkKCkpXHJcbiAgICAgICAgcHJvamVjdFJlcG9Nb2RlbC5hZGRQcm9qZWN0KG5ld1Byb2plY3QuZ2V0SWQoKSwgbmV3UHJvamVjdClcclxuXHJcbiAgICAgICAgLy8gYWRkIHRoZSBwcm9qZWN0IHRvIHRoZSB2aWV3XHJcbiAgICAgICAgcHJvamVjdFZpZXcuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0LmdldE5hbWUoKSwgbmV3UHJvamVjdC5nZXRJZCgpKVxyXG5cclxuICAgICAgICAvLyBhZGQgdGhlIGV2ZW50IGxpc3RlbmVyIGZvciBjbGlja3NcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0VmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNwcm9qZWN0LSR7bmV3UHJvamVjdC5nZXRJZCgpfWApXHJcbiAgICAgICAgbmV3UHJvamVjdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RQcm9qZWN0KVxyXG5cclxuICAgICAgICAvLyBzZXQgYXMgdGhlIGFjdGl2ZSBwcm9qZWN0IGJ5IHNpbXVsYXRpbmcgYSBjbGljayBldmVudFxyXG4gICAgICAgIG5ld1Byb2plY3RWaWV3LmNsaWNrKClcclxuXHJcbiAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm0gcGFnZSBhbmQgY2xvc2UgdGhlIGZvcm1cclxuICAgICAgICBkb2N1bWVudC5mb3Jtc1snUHJvamVjdEZvcm0nXS5yZXNldCgpXHJcbiAgICAgICAgX2Nsb3NlTmV3UHJvamVjdEZvcm0oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdFByb2plY3QgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAvLyBldmVudCBsaXN0ZW5lciBmb3Igd2hlbiBwcm9qZWN0cyBhcmUgY2xpY2tlZFxyXG5cclxuICAgICAgICAvLyB1bnNlbGVjdCBhbnkgc2VsZWN0ZWQgY2xhc3Nlc1xyXG4gICAgICAgIGNvbnN0IGxhc3RTZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xpY2tlZCcpXHJcbiAgICAgICAgaWYgKGxhc3RTZWxlY3RlZFByb2plY3QpIHsgbGFzdFNlbGVjdGVkUHJvamVjdC5jbGFzc0xpc3QucmVtb3ZlKCdjbGlja2VkJykgfVxyXG5cclxuICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnY2xpY2tlZCcpXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gdGhlIGlkIG9mIGxpc3QgZWxlbWVudHMgYXJlIHByb2plY3QtaWRcclxuICAgICAgICBjb25zdCBhY3RpdmVQcm9qZWN0SWQgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmlkLnN1YnN0cigtMSkpXHJcbiAgICAgICAgcHJvamVjdFJlcG9Nb2RlbC5zZXRBY3RpdmVQcm9qZWN0KHByb2plY3RSZXBvTW9kZWwuZ2V0UHJvamVjdChhY3RpdmVQcm9qZWN0SWQpKVxyXG5cclxuICAgICAgICAvLyByZW5kZXIgdGhlIHRhc2tzIG9mIHRoZSBuZXcgcHJvamVjdFxyXG4gICAgICAgIHRhc2tWaWV3LnJlbmRlclRhc2tzKHByb2plY3RSZXBvTW9kZWwuZ2V0UHJvamVjdChhY3RpdmVQcm9qZWN0SWQpLmdldFRhc2tzKCkpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX29wZW5OZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcclxuICAgICAgICBwcm9qZWN0Vmlldy5vcGVuRm9ybSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2Nsb3NlTmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgcHJvamVjdFZpZXcuY2xvc2VGb3JtKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBkZWxldGVQcm9qZWN0PSAocHJvamVjdE5hbWUpID0+IHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0UHJvamVjdCwgY3JlYXRlUHJvamVjdCwgZGVsZXRlUHJvamVjdFxyXG4gICAgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0Q29udHJvbGxlciB9IiwiaW1wb3J0IHsgdGFza01vZGVsIH0gZnJvbSBcIi4uL21vZGVscy90YXNrTW9kZWxcIlxyXG5pbXBvcnQgeyB0YXNrVmlldyB9IGZyb20gXCIuLi92aWV3cy90YXNrVmlld1wiXHJcbmltcG9ydCB7IHByb2plY3RNb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdE1vZGVsXCJcclxuaW1wb3J0IHsgcHJvamVjdFJlcG9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFJlcG9Nb2RlbFwiXHJcblxyXG5jb25zdCB0YXNrQ29udHJvbGxlciA9ICgoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgaW5pdFRhc2sgPSAoKSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGFza1ZpZXcuaW5pdGlhbGl6ZVRhc2tWaWV3KClcclxuXHJcbiAgICAgICAgLy8gLS0tLS0gQWRkIGV2ZW50IGxpc3RlbmVycyAtLS0tLSAvL1xyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2stYnRuJylcclxuICAgICAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX29wZW5OZXdUYXNrRm9ybSlcclxuICAgICAgICBcclxuICAgICAgICBsZXQgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stc3VibWl0LWJ0bicpXHJcbiAgICAgICAgc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlVGFzaylcclxuXHJcbiAgICAgICAgbGV0IGNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWNhbmNlbC1idG4nKVxyXG4gICAgICAgIGNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9jbG9zZU5ld1Rhc2tGb3JtKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfb3Blbk5ld1Rhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZXJlIGlzIGFuIGFjdGl2ZSBwcm9qZWN0XHJcbiAgICAgICAgaWYgKHByb2plY3RSZXBvTW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpKSB7XHJcbiAgICAgICAgICAgIHRhc2tWaWV3Lm9wZW5Gb3JtKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIHNlbGVjdCBhIHByb2plY3QgdG8gYWRkIHRoZSB0YXNrIHRvLicpXHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9jbG9zZU5ld1Rhc2tGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIHRhc2tWaWV3LmNsb3NlRm9ybSgpXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGNyZWF0ZSBhIG5ldyB0YXNrIGFuZCBhZGQgdG8gdGhlIHByb2plY3QgdGFzayBhcnJheSB3aGVuIHRoZW4gc3VibWl0IGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICAgICAgbGV0IGFjdGl2ZVByb2plY3QgPSBwcm9qZWN0UmVwb01vZGVsLmdldEFjdGl2ZVByb2plY3QoKVxyXG5cclxuICAgICAgICBsZXQgbmV3VGFza05hbWUgPSBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnbmV3LXRhc2stbmFtZSddLnZhbHVlXHJcbiAgICAgICAgbGV0IG5ld0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuZm9ybXNbJ1Rhc2tGb3JtJ11bJ25ldy1kZXNjcmlwdGlvbiddLnZhbHVlXHJcbiAgICAgICAgbGV0IG5ld0R1ZURhdGUgPSBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnbmV3LWR1ZS1kYXRlJ10udmFsdWVcclxuICAgICAgICBsZXQgbmV3UHJpb3JpdHkgPSBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnc2VsZWN0LXByaW9yaXR5J10udmFsdWVcclxuICAgICAgICBsZXQgbmV3Tm90ZXMgPSBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnbmV3LW5vdGVzJ10udmFsdWVcclxuICAgICAgICBsZXQgbmV3SWQgPSBhY3RpdmVQcm9qZWN0LmdlbmVyYXRlVGFza0lkKClcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IHRhc2tNb2RlbChuZXdUYXNrTmFtZSwgbmV3SWQsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Tm90ZXMpXHJcbiAgICAgICAgYWN0aXZlUHJvamVjdC5hZGRUYXNrKG5ld1Rhc2spXHJcblxyXG4gICAgICAgIF9yZW5kZXJUYXNrcyhhY3RpdmVQcm9qZWN0LmdldFRhc2tzKCkpXHJcbiAgICAgICAgX2Nsb3NlTmV3VGFza0Zvcm0oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IF9yZW5kZXJUYXNrcyA9ICh0YXNrcykgPT4ge1xyXG4gICAgICAgIHRhc2tWaWV3LnJlbmRlclRhc2tzKHRhc2tzKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHVwZGF0ZVRhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdFRhc2ssIGNyZWF0ZVRhc2ssIGRlbGV0ZVRhc2ssIHVwZGF0ZVRhc2tcclxuICAgIH1cclxufSkoKVxyXG5cclxuZXhwb3J0IHsgdGFza0NvbnRyb2xsZXIgfSIsImNvbnN0IHByb2plY3RNb2RlbCA9IChuZXdOYW1lLCBuZXdJRCkgPT4ge1xyXG4gICAgLy8gUmVwcmVzZW50cyBhIHByb2plY3QuIENvbnRhaW5zIHRoZSBuYW1lIG9mIHRoZSBwcm9qZWN0IGFuZCB0YXNrcy5cclxuXHJcbiAgICBsZXQgbmFtZSA9IG5ld05hbWVcclxuICAgIGxldCBpZCA9IG5ld0lEXHJcbiAgICBsZXQgdGFza3MgPSBbXVxyXG4gICAgbGV0IHRhc2tJZCA9IDBcclxuXHJcbiAgICBjb25zdCBnZXROYW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuYW1lXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZ2V0SWQgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGlkXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRkVGFzayA9ICh0YXNrKSA9PiB7XHJcbiAgICAgICAgLy8gdGFzayBpcyBbaWQsIHRhc2tdXHJcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlVGFza0lkID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgSUQgZm9yIHRoZSB0YXNrIGJlaW5nIGNyZWF0ZWQgYW5kIGdldCByZWFkeSBmb3IgdGhlIG5leHQgb25lXHJcbiAgICAgICAgdGFza0lkICs9IDFcclxuICAgICAgICByZXR1cm4gdGFza0lkIC0gMVxyXG4gICAgfSBcclxuXHJcbiAgICBjb25zdCBnZXRUYXNrcyA9ICgpID0+IHsgcmV0dXJuIHRhc2tzIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldE5hbWUsIGdldElkLCBhZGRUYXNrLCBnZXRUYXNrcywgZ2VuZXJhdGVUYXNrSWQgXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IHByb2plY3RNb2RlbCB9IiwiLy8gc2ltdWxhdGluZyBhIGRhdGFiYXNlXHJcbmNvbnN0IHByb2plY3RSZXBvTW9kZWwgPSAoKCkgPT4ge1xyXG4gICAgbGV0IGlkID0gMFxyXG4gICAgbGV0IGFjdGl2ZVByb2plY3QgPSBudWxsXHJcbiAgICBsZXQgcHJvamVjdHMgPSB7fVxyXG5cclxuICAgIGNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoZSBJRCBmb3IgdGhlIHByb2plY3QgYmVpbmcgY3JlYXRlZCBhbmQgZ2V0IHJlYWR5IGZvciB0aGUgbmV4dCBvbmVcclxuICAgICAgICBpZCArPSAxXHJcbiAgICAgICAgcmV0dXJuIGlkIC0gMVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBzZXRBY3RpdmVQcm9qZWN0ID0gKHByb2plY3QpID0+IHtcclxuICAgICAgICBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGFkZFByb2plY3QgPSAocHJvamVjdElkLCBwcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgcHJvamVjdHNbcHJvamVjdElkXSA9IHByb2plY3RcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRQcm9qZWN0ID0gKHByb2plY3RJZCkgPT4geyByZXR1cm4gcHJvamVjdHNbcHJvamVjdElkXSB9XHJcblxyXG4gICAgY29uc3QgZ2V0QWN0aXZlUHJvamVjdCA9ICgpID0+IHsgcmV0dXJuIGFjdGl2ZVByb2plY3QgfVxyXG5cclxuICAgIHJldHVybiB7IGdlbmVyYXRlSWQsIGFkZFByb2plY3QsIGdldFByb2plY3QsIHNldEFjdGl2ZVByb2plY3QsIGdldEFjdGl2ZVByb2plY3QgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0UmVwb01vZGVsIH0iLCJjb25zdCB0YXNrTW9kZWwgPSAobmV3TmFtZSwgbmV3SWQsIG5ld0Rlc2NyaXB0aW9uLCBuZXdEdWVEYXRlLCBuZXdQcmlvcml0eSwgbmV3Tm90ZXMpID0+IHtcclxuICAgIC8vIHJlcHJlc2VudHMgYSB0YXNrIG9iamVjdFxyXG5cclxuICAgIGxldCBuYW1lID0gbmV3TmFtZVxyXG4gICAgbGV0IGlkID0gbmV3SWRcclxuICAgIGxldCBkZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uXHJcbiAgICBsZXQgZHVlRGF0ZSA9IG5ld0R1ZURhdGVcclxuICAgIGxldCBwcmlvcml0eSA9IG5ld1ByaW9yaXR5XHJcbiAgICBsZXQgbm90ZXMgPSBuZXdOb3Rlc1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmFtZSwgaWQsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXNcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHt0YXNrTW9kZWx9IiwiY29uc3QgcHJvamVjdFZpZXcgPSAoKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBpbml0aWFsaXplUHJvamVjdFZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1jb250YWluZXInKVxyXG5cclxuICAgICAgICAvLyAtLS0gQ3JlYXRlIHRoZSBwcm9qZWN0IGNvbnRhaW5lciBoZWFkZXIgLS0tIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgICAgICAvLyBhZGQgY2xhc3NlcyB0byBlbGVtZW50c1xyXG4gICAgICAgIHByb2plY3RDb250YWluZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMtaGVhZGVyLWNvbnRhaW5lcicpXHJcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGQtcHJvamVjdC1idG4nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldCB0ZXh0IGNvbnRlbnRcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdQcm9qZWN0cydcclxuICAgICAgICBhZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0J1xyXG5cclxuICAgICAgICAvLyBjb21iaW5lIGVsZW1lbnRzXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5hcHBlbmQodGl0bGUpXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lckhlYWRlci5hcHBlbmQoYWRkUHJvamVjdEJ0bilcclxuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q29udGFpbmVySGVhZGVyKVxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZChwcm9qZWN0Q29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAtLS0gQ3JlYXRlIHRoZSBwcm9qZWN0IGJvZHkgY29udGFpbmVyLS0tIC8vXHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJvZHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RCb2R5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWJvZHktY29udGFpbmVyXCIpXHJcbiAgICAgICAgY29uc3QgcHJvamVjdEJvZHlMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKVxyXG4gICAgICAgIHByb2plY3RCb2R5TGlzdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QnKVxyXG4gICAgICAgIHByb2plY3RCb2R5Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0Qm9keUxpc3QpXHJcbiAgICAgICAgXHJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdEJvZHlDb250YWluZXIpXHJcblxyXG4gICAgICAgIC8vIC0tLSBDcmVhdGUgUHJvamVjdCBJbnRybyBGb3JtIC0tLSAvL1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0Rm9ybVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcblxyXG4gICAgICAgIHByb2plY3RGb3JtUGFnZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWZvcm0tcGFnZScpXHJcbiAgICAgICAgcHJvamVjdEZvcm1QYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICBwcm9qZWN0Rm9ybS5uYW1lID0gJ1Byb2plY3RGb3JtJ1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIHByb2plY3ROYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LXByb2plY3QtbmFtZScpXHJcbiAgICAgICAgcHJvamVjdE5hbWVMYWJlbC5pbm5lckhUTUwgPSAnUHJvamVjdCBOYW1lOidcclxuICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmQocHJvamVjdE5hbWVMYWJlbClcclxuXHJcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0JylcclxuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXctcHJvamVjdC1uYW1lJylcclxuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LXByb2plY3QtbmFtZScpXHJcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kKHByb2plY3ROYW1lSW5wdXQpXHJcblxyXG4gICAgICAgIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi1jb250YWluZXInKVxyXG5cclxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJylcclxuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LXN1Ym1pdC1idG4nKVxyXG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ0bicpXHJcbiAgICAgICAgc3VibWl0QnRuLmlubmVySFRNTCA9ICdTdWJtaXQnXHJcblxyXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxyXG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY2FuY2VsLWJ0bicpXHJcbiAgICAgICAgY2FuY2VsQnRuLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuJylcclxuICAgICAgICBjYW5jZWxCdG4uaW5uZXJIVE1MID0gJ0NhbmNlbCdcclxuXHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChzdWJtaXRCdG4pXHJcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChjYW5jZWxCdG4pXHJcbiAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kKGJ1dHRvbkNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgcHJvamVjdEZvcm1QYWdlLmFwcGVuZChwcm9qZWN0Rm9ybSlcclxuICAgICAgICBtYWluQ29udGVudC5hcHBlbmQocHJvamVjdEZvcm1QYWdlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcGVuRm9ybSA9ICgpID0+IHtcclxuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIG1ha2VzIHRoZSBwcm9qZWN0IGZvcm0gdmlzaWJsZVxyXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tcGFnZScpXHJcbiAgICAgICAgcHJvamVjdEZvcm1QYWdlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VGb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWZvcm0tcGFnZScpXHJcbiAgICAgICAgcHJvamVjdEZvcm1QYWdlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVQcm9qZWN0ID0gKG5hbWUsIGlkKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1saXN0JylcclxuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxyXG4gICAgICAgIG5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1saXN0LWl0ZW0nKVxyXG4gICAgICAgIG5ld1Byb2plY3Quc2V0QXR0cmlidXRlKCdpZCcsIGBwcm9qZWN0LSR7aWR9YClcclxuICAgICAgICBuZXdQcm9qZWN0LmlubmVySFRNTCA9IG5hbWVcclxuICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmQobmV3UHJvamVjdClcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4geyBpbml0aWFsaXplUHJvamVjdFZpZXcsIG9wZW5Gb3JtLCBjbG9zZUZvcm0sIGNyZWF0ZVByb2plY3QgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgeyBwcm9qZWN0VmlldyB9IiwiaW1wb3J0IHsgcHJvamVjdFJlcG9Nb2RlbCB9IGZyb20gXCIuLi9tb2RlbHMvcHJvamVjdFJlcG9Nb2RlbFwiXHJcblxyXG5jb25zdCB0YXNrVmlldyA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBpbml0aWFsaXplVGFza1ZpZXcgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrcy1jb250YWluZXInKVxyXG5cclxuICAgICAgICAvLyAtLS0gQ3JlYXRlIHRoZSB0YXNrIGNvbnRhaW5lciBoZWFkZXIgLS0tIC8vXHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tDb250YWluZXJIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG5cclxuICAgICAgICAvLyBhZGQgY2xhc3NlcyB0byBlbGVtZW50c1xyXG4gICAgICAgIHRhc2tDb250YWluZXJIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFza3MtaGVhZGVyLWNvbnRhaW5lcicpXHJcbiAgICAgICAgYWRkVGFza0J0bi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idG4nKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldCB0ZXh0IGNvbnRlbnRcclxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9ICdUYXNrcydcclxuICAgICAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJ1xyXG5cclxuICAgICAgICAvLyBjb21iaW5lIGVsZW1lbnRzXHJcbiAgICAgICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmQodGl0bGUpXHJcbiAgICAgICAgdGFza0NvbnRhaW5lckhlYWRlci5hcHBlbmQoYWRkVGFza0J0bilcclxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrQ29udGFpbmVySGVhZGVyKVxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZCh0YXNrQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAtLS0gQ3JlYXRlIHRoZSB0YXNrIGJvZHkgY29udGFpbmVyIC0tLSAvL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRhc2tCb2R5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrQm9keUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFzay1ib2R5LWNvbnRhaW5lclwiKVxyXG4gICAgICAgIGNvbnN0IHRhc2tCb2R5TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJylcclxuICAgICAgICB0YXNrQm9keUxpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0JylcclxuICAgICAgICB0YXNrQm9keUNvbnRhaW5lci5hcHBlbmQodGFza0JvZHlMaXN0KVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKHRhc2tCb2R5Q29udGFpbmVyKVxyXG5cclxuICAgICAgICAvLyAtLS0gQ3JlYXRlIFRhc2sgSW50cm8gRm9ybSAtLS0gLy9cclxuXHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm1QYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxyXG5cclxuICAgICAgICB0YXNrRm9ybVBhZ2UuY2xhc3NMaXN0LmFkZCgndGFzay1mb3JtLXBhZ2UnKVxyXG4gICAgICAgIHRhc2tGb3JtUGFnZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgdGFza0Zvcm0ubmFtZSA9ICdUYXNrRm9ybSdcclxuXHJcbiAgICAgICAgY29uc3QgdGFza05hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICB0YXNrTmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy10YXNrLW5hbWUnKVxyXG4gICAgICAgIHRhc2tOYW1lTGFiZWwuaW5uZXJIVE1MID0gJ1Rhc2sgTmFtZTonXHJcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKHRhc2tOYW1lTGFiZWwpXHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXHJcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LXRhc2stbmFtZScpXHJcbiAgICAgICAgdGFza05hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy10YXNrLW5hbWUnKVxyXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZCh0YXNrTmFtZUlucHV0KVxyXG5cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uOiAnXHJcbiAgICAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctZGVzY3JpcHRpb24nKVxyXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZChkZXNjcmlwdGlvbkxhYmVsKVxyXG5cclxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0QXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiMTBcIik7XHJcbiAgICAgICAgZGVzY3JpcHRpb25JbnB1dEFyZWEuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjQwXCIpO1xyXG4gICAgICAgIGRlc2NyaXB0aW9uSW5wdXRBcmVhLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJuZXctZGVzY3JpcHRpb25cIilcclxuICAgICAgICBkZXNjcmlwdGlvbklucHV0QXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldy1kZXNjcmlwdGlvblwiKVxyXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZChkZXNjcmlwdGlvbklucHV0QXJlYSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGR1ZURhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGR1ZURhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHVlLWRhdGUtY29udGFpbmVyJylcclxuICAgICAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICAgICAgZHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9ICdEdWUgRGF0ZTonXHJcbiAgICAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1kdWUtZGF0ZScpXHJcbiAgICAgICAgZHVlRGF0ZUNvbnRhaW5lci5hcHBlbmQoZHVlRGF0ZUxhYmVsKVxyXG5cclxuICAgICAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdkYXRlJylcclxuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25ldy1kdWUtZGF0ZScpXHJcbiAgICAgICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmV3LWR1ZS1kYXRlJylcclxuICAgICAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICd5eXl5LWRkLW1tJylcclxuICAgICAgICBkdWVEYXRlQ29udGFpbmVyLmFwcGVuZChkdWVEYXRlSW5wdXQpXHJcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKGR1ZURhdGVDb250YWluZXIpXHJcblxyXG4gICAgICAgIGNvbnN0IHNlbGVjdFByaW9yaXR5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuXHJcbiAgICAgICAgY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICBwcmlvcml0eUxhYmVsLmlubmVySFRNTCA9ICdQcmlvcml0eTonXHJcbiAgICAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdzZWxlY3QtcHJpb3JpdHknKVxyXG4gICAgICAgIHNlbGVjdFByaW9yaXR5Q29udGFpbmVyLmFwcGVuZChwcmlvcml0eUxhYmVsKSBcclxuXHJcbiAgICAgICAgc2VsZWN0UHJpb3JpdHlDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LXByaW9yaXR5LWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29uc3Qgc2VsZWN0UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxyXG4gICAgICAgIGNvbnN0IGxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICBub3JtYWwuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICd0cnVlJylcclxuICAgICAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcclxuICAgICAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc2VsZWN0LXByaW9yaXR5JylcclxuICAgICAgICBzZWxlY3RQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3NlbGVjdC1wcmlvcml0eScpXHJcbiAgICAgICAgc2VsZWN0UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnc2VsZWN0LXByaW9yaXR5JylcclxuICAgICAgICBcclxuICAgICAgICBsb3cuaW5uZXJIVE1MID0gJ0xvdydcclxuICAgICAgICBub3JtYWwuaW5uZXJIVE1MID0gJ05vcm1hbCdcclxuICAgICAgICBoaWdoLmlubmVySFRNTCA9ICdIaWdoJ1xyXG5cclxuICAgICAgICBzZWxlY3RQcmlvcml0eS5hcHBlbmQobG93KVxyXG4gICAgICAgIHNlbGVjdFByaW9yaXR5LmFwcGVuZChub3JtYWwpXHJcbiAgICAgICAgc2VsZWN0UHJpb3JpdHkuYXBwZW5kKGhpZ2gpXHJcbiAgICAgICAgc2VsZWN0UHJpb3JpdHlDb250YWluZXIuYXBwZW5kKHNlbGVjdFByaW9yaXR5KVxyXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZChzZWxlY3RQcmlvcml0eUNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgICAgICBub3Rlc0xhYmVsLmlubmVySFRNTCA9ICdOb3RlczonXHJcbiAgICAgICAgbm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctbm90ZXMnKVxyXG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZChub3Rlc0xhYmVsKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5vdGVzSW5wdXRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgICAgIG5vdGVzSW5wdXRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpXHJcbiAgICAgICAgbm90ZXNJbnB1dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgJzQwJylcclxuICAgICAgICBub3Rlc0lucHV0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LW5vdGVzJylcclxuICAgICAgICBub3Rlc0lucHV0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25ldy1ub3RlcycpXHJcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kKG5vdGVzSW5wdXRBcmVhKVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLWNvbnRhaW5lcicpXHJcblxyXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKVxyXG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stc3VibWl0LWJ0bicpXHJcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnRuJylcclxuICAgICAgICBzdWJtaXRCdG4uaW5uZXJIVE1MID0gJ1N1Ym1pdCdcclxuXHJcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpXHJcbiAgICAgICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1jYW5jZWwtYnRuJylcclxuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnZm9ybS1idG4nKVxyXG4gICAgICAgIGNhbmNlbEJ0bi5pbm5lckhUTUwgPSAnQ2FuY2VsJ1xyXG5cclxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKHN1Ym1pdEJ0bilcclxuICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kKGNhbmNlbEJ0bilcclxuICAgICAgICB0YXNrRm9ybS5hcHBlbmQoYnV0dG9uQ29udGFpbmVyKVxyXG5cclxuICAgICAgICB0YXNrRm9ybVBhZ2UuYXBwZW5kKHRhc2tGb3JtKVxyXG4gICAgICAgIG1haW5Db250ZW50LmFwcGVuZCh0YXNrRm9ybVBhZ2UpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IG9wZW5Gb3JtID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gbWFrZXMgdGhlIHRhc2sgZm9ybSB2aXNpYmxlXHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm1QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1wYWdlJylcclxuICAgICAgICB0YXNrRm9ybVBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUZvcm0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFza0Zvcm1QYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZm9ybS1wYWdlJylcclxuICAgICAgICB0YXNrRm9ybVBhZ2Uuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVuZGVyVGFza3MgPSAodGFza3MpID0+IHtcclxuICAgICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKVxyXG4gICAgICAgIC8vIGNsZWFyIHRoZSB0YXNrIGxpc3RcclxuICAgICAgICB0YXNrTGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICAgICAgICAgIG5ld1Rhc2suY2xhc3NMaXN0LmFkZCgndGFzay1saXN0LWl0ZW0nKVxyXG4gICAgICAgICAgICBuZXdUYXNrLnNldEF0dHJpYnV0ZSgnaWQnLCBgdGFzay0ke3Rhc2suaWR9YClcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHRhc2tOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpXHJcbiAgICAgICAgICAgIHRhc2tOYW1lLmlubmVySFRNTCA9IGA8c3Ryb25nPiR7dGFzay5uYW1lfTwvc3Ryb25nPmBcclxuICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQodGFza05hbWUpXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzY3JpcHRpb24nKVxyXG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gYDxzdHJvbmc+RGVzY3JpcHRpb246IDwvc3Ryb25nPiAke3Rhc2suZGVzY3JpcHRpb259YFxyXG4gICAgICAgICAgICBuZXdUYXNrLmFwcGVuZCh0YXNrRGVzY3JpcHRpb24pXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICB0YXNrRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWR1ZS1kYXRlJylcclxuICAgICAgICAgICAgdGFza0R1ZURhdGUuaW5uZXJIVE1MID0gYDxzdHJvbmc+RHVlIERhdGU6IDwvc3Ryb25nPiAke3Rhc2suZHVlRGF0ZX1gXHJcbiAgICAgICAgICAgIG5ld1Rhc2suYXBwZW5kKHRhc2tEdWVEYXRlKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrLXByaW9yaXR5JylcclxuICAgICAgICAgICAgdGFza1ByaW9yaXR5LmlubmVySFRNTCA9IGA8c3Ryb25nPlByaW9yaXR5OiA8L3N0cm9uZz4gJHt0YXNrLnByaW9yaXR5fWBcclxuICAgICAgICAgICAgbmV3VGFzay5hcHBlbmQodGFza1ByaW9yaXR5KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICAgICAgICAgIHRhc2tOb3Rlcy5jbGFzc0xpc3QuYWRkKCd0YXNrLW5vdGVzJylcclxuICAgICAgICAgICAgdGFza05vdGVzLmlubmVySFRNTCA9IGA8c3Ryb25nPk5vdGVzOiA8L3N0cm9uZz4gPGJyPiAke3Rhc2subm90ZXN9YFxyXG4gICAgICAgICAgICBuZXdUYXNrLmFwcGVuZCh0YXNrTm90ZXMpXHJcblxyXG4gICAgICAgICAgICB0YXNrTGlzdC5hcHBlbmQobmV3VGFzaylcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7IGluaXRpYWxpemVUYXNrVmlldywgb3BlbkZvcm0sIGNsb3NlRm9ybSwgcmVuZGVyVGFza3MgfVxyXG59KSgpXHJcblxyXG5leHBvcnQgeyB0YXNrVmlldyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHByb2plY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vY29udHJvbGxlcnMvcHJvamVjdENvbnRyb2xsZXJcIlxyXG5pbXBvcnQgeyB0YXNrQ29udHJvbGxlciB9IGZyb20gXCIuL2NvbnRyb2xsZXJzL3Rhc2tDb250cm9sbGVyXCJcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbi8vIGFwcCBtb2R1bGVcclxuLy8gc2V0cyB1cCBib2lsZXJwbGF0ZSBjb2RlIGFuZCBydW5zIHRoZSBhcHBcclxuXHJcbmNvbnN0IEFwcCA9ICgoKSA9PiB7XHJcbiAgICBjb25zdCBfY3JlYXRlV2Vic2l0ZSA9ICgpID0+IHtcclxuICAgICAgICAvLyBUaGlzIGZ1bmN0aW9uIGNyZWF0ZXMgdGhlIGhlYWRlciBhbmQgY29udGFpbmVyIG9mIHRoZSB3ZWJzaXRlLiBJdCBpcyBzdGF0aWNcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHRvcEJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgdG9wQmFyLmNsYXNzTGlzdC5hZGQoJ3RvcC1iYXInKVxyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpXHJcbiAgICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSAnVGhlIFRvZG8gTGlzdCBBcHAnXHJcblxyXG4gICAgICAgIHRvcEJhci5hcHBlbmQodGl0bGUpXHJcbiAgICAgICAgY29udGVudC5hcHBlbmQodG9wQmFyKVxyXG5cclxuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnbWFpbi1jb250ZW50LWNvbnRhaW5lcicpXHJcbiAgICAgICAgY29udGVudC5hcHBlbmQobWFpbkNvbnRlbnQpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZChjb250ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluaXRpYWxpemVBcHAgPSAoKSA9PiB7XHJcbiAgICAgICAgX2NyZWF0ZVdlYnNpdGUoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmluaXRQcm9qZWN0KClcclxuICAgICAgICB0YXNrQ29udHJvbGxlci5pbml0VGFzaygpXHJcblxyXG4gICAgICAgIHByb2plY3RDb250cm9sbGVyLmNyZWF0ZVByb2plY3QoJ1NhbXBsZSBQcm9qZWN0JylcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgZmFrZSB0YXNrXHJcbiAgICAgICAgZG9jdW1lbnQuZm9ybXNbJ1Rhc2tGb3JtJ11bJ25ldy10YXNrLW5hbWUnXS52YWx1ZSA9ICdTYW1wbGUgVGFzaydcclxuICAgICAgICBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnbmV3LWRlc2NyaXB0aW9uJ10udmFsdWUgPSAnVGhpcyBpcyBhIHNhbXBsZSB0YXNrIGRlc2NyaXB0aW9uLidcclxuICAgICAgICBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnbmV3LWR1ZS1kYXRlJ10udmFsdWUgPSAnMjAxMi0xMi0zMSdcclxuICAgICAgICBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnc2VsZWN0LXByaW9yaXR5J10udmFsdWUgPSAnSGlnaCdcclxuICAgICAgICBkb2N1bWVudC5mb3Jtc1snVGFza0Zvcm0nXVsnbmV3LW5vdGVzJ10udmFsdWUgPSAnVGhlIHdvcmxkIG1pZ2h0IGVuZC4nXHJcbiAgICAgICAgdGFza0NvbnRyb2xsZXIuY3JlYXRlVGFzaygpXHJcbiAgICAgICAgZG9jdW1lbnQuZm9ybXNbJ1Rhc2tGb3JtJ10ucmVzZXQoKVxyXG5cclxuICAgIH1cclxuICAgIHJldHVybiB7IGluaXRpYWxpemVBcHAgfVxyXG59KSgpXHJcblxyXG5BcHAuaW5pdGlhbGl6ZUFwcCgpXHJcbiAgICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
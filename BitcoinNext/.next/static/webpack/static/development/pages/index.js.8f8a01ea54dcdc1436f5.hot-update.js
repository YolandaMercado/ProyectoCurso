webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./Componentes/Precio.js":
/*!*******************************!*\
  !*** ./Componentes/Precio.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\desarrollo\\Desktop\\proyectocurso\\BitcoinNext\\Componentes\\Precio.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var Precio = function Precio(props) {
  var _props$precio = props.precio,
      price = _props$precio.price,
      market_cap = _props$precio.market_cap,
      percent_change_1h = _props$precio.percent_change_1h,
      percent_change_7d = _props$precio.percent_change_7d,
      percent_change_24h = _props$precio.percent_change_24h;
  return __jsx("div", {
    className: "card text-white bg-success mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "card-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Precio del Bitcoin"), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Precio Actual: $", Math.round(price * 100) / 100), __jsx("div", {
    className: "d-md-flex justify-content-between",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\xDAltima Hora: "), percent_change_1h, " %"), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "\xDAltimas 24 Horas: "), percent_change_7d, " %"), __jsx("p", {
    className: "card-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("span", {
    className: "font-weight-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "\xDAltimos 7 D\xEDas: "), percent_change_24h, " %"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Precio);

/***/ })

})
//# sourceMappingURL=index.js.8f8a01ea54dcdc1436f5.hot-update.js.map
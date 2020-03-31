webpackHotUpdate("static\\development\\pages\\member\\update.js",{

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: register, login, logout, updateUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _handleCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handleCookie */ "./actions/handleCookie.js");




var register = function register(member) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/register"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(member)
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
}; //make request to backend, backend create new user and response in JSON format

var login = function login(member) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/login"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(member)
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var logout = function logout(next) {
  Object(_handleCookie__WEBPACK_IMPORTED_MODULE_3__["removeCookie"])('token');
  Object(_handleCookie__WEBPACK_IMPORTED_MODULE_3__["removeLocalStorage"])('member');
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("{API}/logout", {
    method: 'GET'
  }).then(function (response) {
    console.log('Logged out successfully');
  })["catch"](function (error) {
    return console.log(error);
  });
};
var updateUser = function updateUser(member, next) {
  //checking if is it in the client side
  if (true) {
    if (localStorage.getItem('member')) {
      var oldMember = localStorage.getItem('member');
      oldMember = JSON.parse(member);
      localStorage.setItem('member', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(oldMember));
    }

    next();
  }
};

/***/ })

})
//# sourceMappingURL=update.js.cebf4d23ab9cfbe90596.hot-update.js.map
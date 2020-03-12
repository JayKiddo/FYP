webpackHotUpdate("static\\development\\pages\\journals.js",{

/***/ "./actions/handleCookie.js":
/*!*********************************!*\
  !*** ./actions/handleCookie.js ***!
  \*********************************/
/*! exports provided: setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isLoggedIn, updateMember */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isLoggedIn", function() { return isLoggedIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMember", function() { return updateMember; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


var setCookie = function setCookie(key, value) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.set(key, value, {
      expires: 1
    });
  }
};
var removeCookie = function removeCookie(key) {
  if (true) {
    js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.remove(key, {
      expires: 1
    });
  }
}; // get cookie

var getCookie = function getCookie(key) {
  if (true) {
    return js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get(key);
  }
}; // localstorage

var setLocalStorage = function setLocalStorage(key, value) {
  if (true) {
    localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
  }
};
var removeLocalStorage = function removeLocalStorage(key) {
  if (true) {
    localStorage.removeItem(key);
  }
}; // autheticate user by pass data to cookie and localstorage

var authenticate = function authenticate(data, next) {
  setCookie('token', data.token);
  setLocalStorage('member', data.member);
  next();
};
var isLoggedIn = function isLoggedIn() {
  if (true) {
    var cookieChecked = getCookie('token');

    if (cookieChecked) {
      if (localStorage.getItem('member')) {
        /*return JSON.parse(localStorage.getItem('member'));*/
        return true;
      } else {
        return false;
      }
    }
  }
};
var updateMember = function updateMember(member, next) {
  if (true) {
    if (localStorage.getItem('member')) {
      var auth = JSON.parse(localStorage.getItem('member'));
      auth = member;
      localStorage.setItem('member', _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(auth));
      next();
    }
  }
};

/***/ })

})
//# sourceMappingURL=journals.js.cafb0fb46f66c8325e15.hot-update.js.map
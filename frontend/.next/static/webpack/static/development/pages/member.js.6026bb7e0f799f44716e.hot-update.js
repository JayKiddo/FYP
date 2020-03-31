webpackHotUpdate("static\\development\\pages\\member.js",{

/***/ "./actions/member.js":
/*!***************************!*\
  !*** ./actions/member.js ***!
  \***************************/
/*! exports provided: getProfile, updateProfile, getProfileAndJournal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProfile", function() { return updateProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfileAndJournal", function() { return getProfileAndJournal; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");

 //get member profile

var getProfile = function getProfile(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/member/profile"), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var updateProfile = function updateProfile(token, member) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/member/update"), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: member
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var getProfileAndJournal = function getProfileAndJournal(token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/member/profile/journal"), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};

/***/ })

})
//# sourceMappingURL=member.js.6026bb7e0f799f44716e.hot-update.js.map
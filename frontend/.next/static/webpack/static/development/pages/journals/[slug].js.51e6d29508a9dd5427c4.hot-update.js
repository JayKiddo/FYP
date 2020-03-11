webpackHotUpdate("static\\development\\pages\\journals\\[slug].js",{

/***/ "./actions/journal.js":
/*!****************************!*\
  !*** ./actions/journal.js ***!
  \****************************/
/*! exports provided: listJournals, createJournal, readJournal, listRelatedJournal, listJournal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listJournals", function() { return listJournals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJournal", function() { return createJournal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readJournal", function() { return readJournal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedJournal", function() { return listRelatedJournal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listJournal", function() { return listJournal; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config */ "./config.js");



var listJournals = function listJournals(skip, limit) {
  //skip and limit are sent from client side
  var data = {
    skip: skip,
    limit: limit
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/blogs-categories-tags"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(data)
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var createJournal = function createJournal(journal, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/journal"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: journal
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var readJournal = function readJournal(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/journal/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var listRelatedJournal = function listRelatedJournal(journal) {
  //skip and limit are sent from client side
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/journals/relatedJournal"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(journal)
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};
var listJournal = function listJournal() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_2__["API"], "/journal"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (error) {
    return console.log(error);
  });
};

/***/ })

})
//# sourceMappingURL=[slug].js.51e6d29508a9dd5427c4.hot-update.js.map
webpackHotUpdate("static\\development\\pages\\admin\\journal-manage.js",{

/***/ "./components/Journal/AmendJournal.js":
/*!********************************************!*\
  !*** ./components/Journal/AmendJournal.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_handleCookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions/handleCookie */ "./actions/handleCookie.js");
/* harmony import */ var _actions_journal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/journal */ "./actions/journal.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\ducp1\\Desktop\\journalProject\\frontend\\components\\Journal\\AmendJournal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //use router,export component with router






var AmendJournal = function AmendJournal() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      journals = _useState[0],
      setJournals = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      message = _useState2[0],
      setMessage = _useState2[1];

  var token = Object(_actions_handleCookie__WEBPACK_IMPORTED_MODULE_3__["getCookie"])('token'); //when component mount

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    loadJournals();
  }, []);

  var loadJournals = function loadJournals() {
    Object(_actions_journal__WEBPACK_IMPORTED_MODULE_4__["listJournalForManage"])().then(function (data) {
      if (data.error) {
        console.log(data.error);
      } else {
        setJournals(data);
      }
    });
  };

  var removeJournal = function removeJournal(slug, token) {
    console.log(token);
    Object(_actions_journal__WEBPACK_IMPORTED_MODULE_4__["deleteJournal"])(slug, token).then(function (data) {
      console.log(data);

      if (data.error) {
        console.log(data.error);
      } else {
        setMessage(data.message);
      }
    });
  };

  var deleteConfirm = function deleteConfirm(slug) {
    var answer = window.confirm('Delete this journal ?');

    if (answer) {
      removeJournal(slug);
    }
  };

  var showJournals = function showJournals() {
    return journals.map(function (journal, index) {
      return __jsx("div", {
        className: "pb-5",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, __jsx("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, journal.title), __jsx("p", {
        className: "mark",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, "Written by ", journal.author.name, "  || Created at ", moment__WEBPACK_IMPORTED_MODULE_6___default()(journal.createdAt).fromNow()), __jsx("button", {
        className: "btn btn-sm btn-danger",
        onClick: function onClick() {
          return deleteConfirm(journal.slug);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Delete"));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, showJournals())));
};

/* harmony default export */ __webpack_exports__["default"] = (AmendJournal);

/***/ })

})
//# sourceMappingURL=journal-manage.js.47781c0ac02a68e107da.hot-update.js.map
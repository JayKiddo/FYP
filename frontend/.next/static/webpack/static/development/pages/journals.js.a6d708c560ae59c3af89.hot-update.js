webpackHotUpdate("static\\development\\pages\\journals.js",{

/***/ "./components/Journal/SingleJournal.js":
/*!*********************************************!*\
  !*** ./components/Journal/SingleJournal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
var _jsxFileName = "C:\\Users\\ducp1\\Desktop\\journalProject\\frontend\\components\\Journal\\SingleJournal.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var SingleJournal = function SingleJournal(_ref) {
  var journal = _ref.journal;

  //loop through categories and return category in jsx code
  var showJournalCategories = function showJournalCategories(journal) {
    return journal.categories.map(function (category, index) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: index,
        href: "/categories/".concat(category.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, category.name));
    });
  };

  var showJournalTags = function showJournalTags(journal) {
    return journal.tags.map(function (tag, index) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
        key: index,
        href: "/tags/".concat(tag.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-outline-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "#", tag.name));
    });
  }; //navigating between dynamic pages


  return __jsx("div", {
    className: "lead pb-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/journals/".concat(journal.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("h3", {
    className: "pt-3 pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "".concat(journal.title))))), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("p", {
    className: "mark ml-1 pt-2 pb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Author: ", journal.author.name, " || Created At: ", moment__WEBPACK_IMPORTED_MODULE_3___default()(journal.updatedAt).fromNow())), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, showJournalCategories(journal), showJournalTags(journal), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  })), __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("img", {
    className: "img img-fluid",
    style: {
      maxHeight: '150px',
      width: 'auto'
    } //making request to photo routes
    ,
    src: "".concat(_config__WEBPACK_IMPORTED_MODULE_4__["API"], "/journal/photo/").concat(journal.slug) //seo friendly, this image can be searched in google
    ,
    alt: journal.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx("div", {
    className: "col-md-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("div", {
    className: "pb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react_render_html__WEBPACK_IMPORTED_MODULE_2___default()(journal.democontent)), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/journals/".concat(journal.slug),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, __jsx("a", {
    className: "btn btn-primary pt-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Read more"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (SingleJournal);

/***/ })

})
//# sourceMappingURL=journals.js.a6d708c560ae59c3af89.hot-update.js.map
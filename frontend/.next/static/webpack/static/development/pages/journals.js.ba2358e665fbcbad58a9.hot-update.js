webpackHotUpdate("static\\development\\pages\\journals.js",{

/***/ "./pages/journals/index.js":
/*!*********************************!*\
  !*** ./pages/journals/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _actions_journal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/journal */ "./actions/journal.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Journal_SingleJournal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Journal/SingleJournal */ "./components/Journal/SingleJournal.js");
var _jsxFileName = "C:\\Users\\ducp1\\Desktop\\journalProject\\frontend\\pages\\journals\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
//build-in component for sticking elements to 'head' of the page








 //need to write a metatitle and meta description,opengraph title descrip

var Journal = function Journal(_ref) {
  var journals = _ref.journals,
      categories = _ref.categories,
      tags = _ref.tags,
      size = _ref.size;

  var showAllCategories = function showAllCategories() {
    return categories.map(function (category, index) {
      return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        key: index,
        href: "/categories/".concat(category.slug),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx("a", {
        className: "btn btn-primary mr-1 ml-1 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, category.name));
    });
  };

  var showAllJournals = function showAllJournals() {
    return journals.map(function (journal, index) {
      return __jsx("article", {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx(_components_Journal_SingleJournal__WEBPACK_IMPORTED_MODULE_8__["default"], {
        journal: journal,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("hr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("main", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("header", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12 pt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("h1", {
    className: "display-4 font-weight-bold text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Journals")), __jsx("section", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "pb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Journal Categories: "), showAllCategories())), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }))), __jsx("div", {
    className: "container-fluid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    className: "col-md-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, showAllJournals()))))));
}; //using lifecycle method,make request to backend and return the data


Journal.getInitialProps = function () {
  return Object(_actions_journal__WEBPACK_IMPORTED_MODULE_4__["listJournals"])().then(function (data) {
    if (data.error) {
      console.log(data.error);
    } else {
      //return properties from response
      //props can be passed to funtion to be rendered
      return {
        journals: data.journals,
        categories: data.categories,
        tags: data.tags,
        size: data.size
      };
    }
  });
};

Journal.defaultProps = {
  name: "Duc"
};
/* harmony default export */ __webpack_exports__["default"] = (Journal); //getInitialProps: server-side rendered method. Can only be used on pages, not in the components
//server side render the page

/***/ })

})
//# sourceMappingURL=journals.js.ba2358e665fbcbad58a9.hot-update.js.map